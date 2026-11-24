/* Sheer Gifts — three design concepts (test environment only).
   Isolated: rendered inside a shadow root on /?sg=concept-a|b|c, reads the real catalogue, changes nothing. */
(function () {
  var W = window, D = document;
  var IMG = W.SG_IMG_BASE || '', BASE = IMG.replace(/img\/$/, '');
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return '&#' + c.charCodeAt(0) + ';'; }); };
  var nis = function (n) { return '<span class="pr">' + Math.round(n).toLocaleString('he-IL') + '&nbsp;₪</span>'; };
  var shortN = function (n) { n = String(n || '').replace(/\s+/g, ' ').trim(); return n.length > 52 ? n.slice(0, 50).replace(/\s\S*$/, '') + '…' : n; };
  var DEP = W.SGDepts || [];
  var V = new URLSearchParams(location.search).get('v') || '';
  var dep = function (name) { var d = DEP.filter(function (x) { return x[0] === name; })[0]; return d ? d[1] : '/'; };
  var WORLDS = [
    ['כלי בית', 'arch-home', 'הגשה, אירוח וכלי שולחן'],
    ['יודאיקה', 'arch-judaica', 'שבת, חג ומתנות של מסורת'],
    ['אקססוריז לבית', 'arch-acc', 'נרות, ריחות ופרטים קטנים'],
    ['מתנות מעוצבות', 'arch-gifts', 'מתנות שמגיעות ארוזות'],
    ['טקסטיל לבית', 'arch-textile', 'מגבות, מפות ומצעים'],
    ['תינוקות', 'arch-baby', 'לידה, בגדים ודובונים'],
    ['משחקים', 'arch-toys', 'עץ, דמיון ומשחק'],
    ['לגבר ולאישה', 'arch-him', 'מתנות אישיות']
  ].map(function (w) { return { name: w[0], url: dep(w[0]), img: BASE + 'photo/live/' + w[1] + '.webp', line: w[2] }; });
  var NAV = ['כלי בית', 'יודאיקה', 'חגים', 'אקססוריז לבית', 'טקסטיל לבית', 'תינוקות', 'משחקים', 'מתנות מעוצבות'];
  var PKG_IDS = ['shabbat', 'hosting', 'new-home', 'for-her', 'hanukkah'];

  /* ---------- real data ---------- */
  var data = {
    // a curated shelf: real products whose photos were already cleaned into cut-outs, live name and price from the store
    PROD: ['6808376', '8434408', '6570104', '8434432', '9565461', '9006924', '8017138', '7962381', '8831236', '8289561', '7881244', '8601857'],
    products: function () {
      var K = W.SGKit;
      return Promise.all(data.PROD.map(function (id) { return K.item(id).catch(function () { return null; }); })).then(function (ps) {
        return ps.filter(function (p) { return p && p.price > 0; }).map(function (p) { var c = (W.SG_CUTS || {})[p.id]; return { id: p.id, name: p.name, price: p.price, url: p.url, img: c ? BASE + 'cut/' + p.id + '.webp?v=' + c : p.img }; });
      });
    },
    pkgs: function () {
      var K = W.SGKit;
      return fetch(BASE + 'packages.json').then(function (r) { return r.json(); }).then(function (j) {
        var list = (j.packages || []).filter(function (p) { return PKG_IDS.indexOf(p.id) > -1; });
        list.sort(function (a, b) { return PKG_IDS.indexOf(a.id) - PKG_IDS.indexOf(b.id); });
        return Promise.all(list.map(function (p) {
          return Promise.all(p.items.map(function (it) { return K.item(it.id).catch(function () { return null; }); })).then(function (its) {
            its = its.filter(Boolean).map(function (x) { var c = (W.SG_CUTS || {})[x.id]; return c ? { id: x.id, name: x.name, price: x.price, url: x.url, img: BASE + 'cut/' + x.id + '.webp?v=' + c } : x; }); return { id: p.id, title: p.title, kicker: p.kicker, blurb: p.blurb, items: its, total: its.reduce(function (s, x) { return s + x.price; }, 0), url: '/?sg=pkg&id=' + encodeURIComponent(p.id) };
          });
        }));
      }).then(function (l) { return l.filter(function (p) { return p.items.length >= 2; }); }).catch(function () { return []; });
    },
    look: function (key) { var L = ((W.SG_PHOTOS || {}).live || {})[key] || {}; return { d: BASE + 'photo/live/' + L.d, m: BASE + 'photo/live/' + (L.m || L.d), spots: (L.spots || []).filter(function (s) { return !s.nm; }) }; },
    cut: function (p) { var K = W.SGKit; return (K && K.cut ? K.cut(p) : Promise.resolve(null)).then(function (c) { return c && c.mode === 'cut' ? c.src : p.img; }).catch(function () { return p.img; }); }
  };

  /* ---------- shared bits ---------- */
  var FONTS = 'https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300;400;500&family=Assistant:wght@400;600;700&family=Karantina:wght@400;700&family=IBM+Plex+Sans+Hebrew:wght@400;500;600&family=Noto+Rashi+Hebrew:wght@500&family=Suez+One&family=Heebo:wght@400;500;700;800&display=swap';
  var BASECSS = ':host{all:initial;display:block}*{box-sizing:border-box;min-width:0}a{color:inherit;text-decoration:none}img{display:block;max-width:100%}button,input{font:inherit;color:inherit}button{cursor:pointer;background:none;border:0;padding:0}.pr{white-space:nowrap;font-variant-numeric:tabular-nums}' +
    '.sw{position:fixed;left:16px;bottom:16px;z-index:50;display:flex;gap:2px;background:#111;color:#fff;font:500 13px/1 Heebo,Arial,sans-serif;padding:4px}.sw a{padding:9px 12px}.sw a.on{background:#fff;color:#111}.sw span{padding:9px 8px;opacity:.6}' +
    '.nv a,.band span,.rib span,.occ button,.cta a{flex:none}.ld{opacity:.35}.sk{background:#f1f0ee;aspect-ratio:1}:focus-visible{outline:2px solid currentColor;outline-offset:3px}' +
    '.p .im{position:relative;overflow:hidden}.p .im img{position:absolute;left:8%;top:8%;width:84%!important;height:84%!important;object-fit:contain}' +
    '@media(prefers-reduced-motion:reduce){*{transition:none!important;animation:none!important}}';
  var switcher = function (k) { return '<nav class="sw" aria-label="מעבר בין קונספטים"><span>קונספט</span>' + ['a', 'b', 'c'].map(function (x, i) { return '<a href="/?sg=concept-' + x + (V ? '&v=' + V : '') + '"' + (x === k ? ' class="on" aria-current="page"' : '') + '>' + 'אבג'[i] + '</a>'; }).join('') + '</nav>'; };
  var searchGo = function (root) { [].forEach.call(root.querySelectorAll('form[data-s]'), function (f) { f.addEventListener('submit', function (e) { e.preventDefault(); var v = f.querySelector('input').value.trim(); if (v) location.href = '/search?q=' + encodeURIComponent(v); }); }); };
  var menu = function (root) { var b = root.querySelector('[data-menu]'), n = root.querySelector('[data-drawer]'); if (b && n) b.addEventListener('click', function () { var o = n.hasAttribute('hidden'); if (o) n.removeAttribute('hidden'); else n.setAttribute('hidden', ''); b.setAttribute('aria-expanded', o); }); };
  var navLinks = function () { return NAV.map(function (n) { return '<a href="' + dep(n) + '">' + esc(n) + '</a>'; }).join(''); };
  // shop-the-look dots: one small card at a time, never a list under the picture
  var dots = function (fig, spots, cls) {
    fig.insertAdjacentHTML('beforeend', spots.map(function (s, i) { return '<button class="' + cls + '" style="--x:' + s.x + '%;--y:' + s.y + '%;--xm:' + (s.xm || s.x) + '%;--ym:' + (s.ym || s.y) + '%" data-i="' + i + '" aria-label="' + esc(shortN(s.t)) + '"></button>'; }).join('') + '<div class="pop" hidden></div>');
    var pop = fig.querySelector('.pop');
    fig.addEventListener('click', function (e) {
      var b = e.target.closest('.' + cls); if (!b) { if (!e.target.closest('.pop')) pop.hidden = true; return; }
      var s = spots[+b.dataset.i]; pop.style.setProperty('--x', b.style.getPropertyValue(innerWidth < 700 ? '--xm' : '--x')); pop.style.setProperty('--y', b.style.getPropertyValue(innerWidth < 700 ? '--ym' : '--y'));
      pop.innerHTML = '<img src="' + esc(s.im) + '" alt=""><div><b>' + esc(shortN(s.t)) + '</b>' + nis(s.pr) + '<a href="/items/' + esc(s.id) + '">לפרטים ←</a></div>';
      pop.hidden = false;
    });
  };

  /* =====================================================================
     A · מגזין — the shop as a printed interiors magazine
     ===================================================================== */
  var A = {
    css: '/* VOICE quiet, assured, editorial\n IDEA an interiors magazine printed by the store: spreads, credits, captions\n PICTURE full-bleed real photography, products on one even paper tone\n COLOUR white paper, warm ink, one claret for what matters\n TYPE Frank Ruhl Libre (Hebrew book serif) + Assistant\n LAYOUT asymmetric spreads, no boxes; phone = single column with the photo first */' +
      '.a{--ink:#191714;--mute:#6f6962;--line:#e7e3dd;--paper:#f5f3f0;--acc:#7b2330;background:#fff;color:var(--ink);font:400 16px/1.6 Assistant,Arial,sans-serif;direction:rtl}' +
      '.s{font-family:"Frank Ruhl Libre",Georgia,serif;font-weight:400}.w{max-width:1440px;margin:0 auto;padding-inline:clamp(16px,4vw,56px)}' +
      '.hd{position:sticky;top:0;z-index:20;background:#fff}.r1{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;height:84px}' +
      '.r1 form{display:flex;align-items:center;gap:10px;border-bottom:1px solid var(--ink);max-width:300px;height:36px}.r1 input{border:0;outline:0;background:none;width:100%;font-size:15px}.r1 input::placeholder{color:var(--mute)}' +
      '.logo img{height:62px;width:auto}.acts{display:flex;justify-content:flex-end;gap:24px;font-size:15px}.acts a:hover,.nv a:hover{color:var(--acc)}' +
      '.nv{display:flex;justify-content:center;gap:clamp(14px,2.2vw,34px);height:46px;align-items:center;font-size:15px;border-block:1px solid var(--line);white-space:nowrap}.nv .g{color:var(--acc)}' +
      '.mb{display:none}' +
      '.hero{position:relative;background:var(--paper)}.hero picture img{width:100%;height:clamp(460px,74vh,820px);object-fit:cover;object-position:28% 60%}' +
      '.hero .tx{position:absolute;top:0;bottom:0;right:clamp(16px,7vw,120px);display:flex;flex-direction:column;justify-content:center;width:min(500px,42%)}' +
      'h1{font:300 clamp(44px,5.6vw,88px)/1 "Frank Ruhl Libre",Georgia,serif;letter-spacing:-.015em;margin:0 0 22px}h1 em{font-style:normal;font-weight:500}' +
      '.lead{font-size:18px;line-height:1.55;color:#3a3631;margin:0 0 30px;max-width:30em}.cta{display:flex;gap:28px;align-items:center;flex-wrap:wrap}' +
      '.btn{display:inline-flex;align-items:center;height:50px;padding:0 30px;background:var(--ink);color:#fff;font-weight:600;font-size:15px}.btn:hover{background:var(--acc)}.ul{border-bottom:1px solid currentColor;padding-bottom:2px;font-weight:600;font-size:15px}' +
      '.sec{padding-block:clamp(56px,7vw,112px)}.hrow{display:flex;justify-content:space-between;align-items:baseline;gap:20px;margin-bottom:clamp(24px,3vw,44px)}' +
      'h2{font:400 clamp(32px,3.4vw,52px)/1.05 "Frank Ruhl Libre",Georgia,serif;margin:0;letter-spacing:-.01em}.hrow a{font-size:15px;border-bottom:1px solid;padding-bottom:2px;white-space:nowrap}' +
      '.idx{display:grid;grid-template-columns:minmax(0,7fr) minmax(0,5fr);gap:clamp(24px,5vw,90px);align-items:start}' +
      '.idx ol{list-style:none;margin:0;padding:0;border-top:1px solid var(--line)}.idx li a{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:baseline;gap:16px;padding:16px 0;border-bottom:1px solid var(--line)}' +
      '.idx li b{font:400 clamp(26px,2.6vw,40px)/1.1 "Frank Ruhl Libre",Georgia,serif;transition:color .25s}.idx li span{color:var(--mute);font-size:15px}.idx li a:hover b,.idx li a.on b{color:var(--acc)}' +
      '.idx figure{position:sticky;top:150px;margin:0;background:var(--paper);aspect-ratio:4/5;display:grid;place-items:center}.idx figure img{max-height:72%;max-width:70%;object-fit:contain;transition:opacity .3s}.idx figcaption{position:absolute;bottom:18px;right:20px;font-size:14px;color:var(--mute)}' +
      '.grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(18px,2.2vw,34px) clamp(14px,1.6vw,24px)}.grid .p:first-child{grid-column:span 2;grid-row:span 2}' +
      '.p .im{background:var(--paper);aspect-ratio:1;display:grid;place-items:center;overflow:hidden}.p .im img{width:78%;height:78%;object-fit:contain;transition:transform .5s;filter:drop-shadow(0 18px 14px rgba(60,45,30,.14))}.p:first-child .im{aspect-ratio:auto;height:calc(100% - 64px)}' +
      '.p:hover .im img{transform:scale(1.04)}.p .nm{display:block;margin-top:12px;font-size:15px;line-height:1.4}.p .pr{display:block;font-size:15px;color:var(--mute);margin-top:2px}.p:first-child .nm{font:400 22px/1.3 "Frank Ruhl Libre",serif}' +
      '.spread{display:grid;grid-template-columns:minmax(0,7fr) minmax(0,5fr);gap:0;background:var(--paper)}.spread>img{width:100%;height:100%;min-height:560px;object-fit:cover}' +
      '.spread .tx{padding:clamp(28px,5vw,80px);display:flex;flex-direction:column;justify-content:center}.k{font-size:14px;color:var(--acc);font-weight:600;margin-bottom:12px}.spread p{color:#3a3631;margin:16px 0 26px;max-width:32em}' +
      '.cred{list-style:none;margin:0 0 24px;padding:0;font-size:15px}.cred li{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:16px;padding:9px 0;border-bottom:1px solid #e2ddd5}.cred li.t{border:0;font-weight:700;padding-top:14px}' +
      '.more{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(16px,2vw,32px);margin-top:clamp(40px,5vw,72px)}.more a{display:block}.strip{display:grid;grid-template-columns:repeat(3,1fr);gap:4px}.strip img{aspect-ratio:1;width:100%;object-fit:cover}' +
      '.more b{display:block;font:400 22px/1.2 "Frank Ruhl Libre",serif;margin-top:14px}.more span{font-size:14px;color:var(--mute)}' +
      '.look{position:relative}.look img.bg{width:100%;height:auto}.dot{position:absolute;left:var(--x);top:var(--y);width:22px;height:22px;margin:-11px 0 0 -11px;border-radius:50%;background:#fff;box-shadow:0 0 0 5px rgba(255,255,255,.35)}.dot:hover{background:var(--acc)}' +
      '.pop{position:absolute;left:var(--x);top:var(--y);transform:translate(-50%,calc(-100% - 22px));background:#fff;display:grid;grid-template-columns:72px minmax(0,1fr);gap:14px;padding:12px;width:290px;font-size:14px;z-index:3}.pop[hidden]{display:none}.pop img{width:72px;height:72px;object-fit:contain}.pop b{display:block;font-weight:600;line-height:1.35}.pop a{display:block;margin-top:4px;color:var(--acc);font-weight:600}' +
      '.cap{display:flex;justify-content:space-between;gap:20px;margin-top:16px;font-size:15px;color:var(--mute)}' +
      '.ft{border-top:1px solid var(--ink);padding-block:56px 28px;font-size:15px}.fg{display:grid;grid-template-columns:minmax(0,1.4fr) repeat(3,minmax(0,1fr));gap:32px}.fg h3{font:600 15px/1 Assistant,sans-serif;margin:0 0 16px}.fg a{display:block;padding:4px 0;color:#3a3631}.fg a:hover{color:var(--acc)}' +
      '.fg form{display:flex;border-bottom:1px solid var(--ink);margin-top:18px;max-width:340px}.fg input{border:0;outline:0;flex:1;height:42px;background:none}.fg button{font-weight:600}.fb{display:flex;justify-content:space-between;gap:16px;margin-top:48px;color:var(--mute);font-size:14px;flex-wrap:wrap}' +
      '@media(max-width:900px){.r1{grid-template-columns:auto 1fr auto;height:64px}.r1 form,.acts .x{display:none}.logo{justify-self:center}.logo img{height:48px}.mb{display:block;font-size:15px;font-weight:600}' +
      '.nv{justify-content:flex-start;overflow-x:auto;padding-inline:16px;scrollbar-width:none}.dr{padding:8px 16px 16px;border-bottom:1px solid var(--line)}.dr form{display:flex;border-bottom:1px solid var(--ink);height:44px}.dr input{border:0;outline:0;flex:1;font-size:16px}' +
      '.hero picture img{height:auto;aspect-ratio:5/4;object-position:40% 92%}.hero .tx{position:static;width:auto;padding:28px 16px 8px}.idx{grid-template-columns:1fr}.idx figure{display:none}.idx li a{grid-template-columns:56px minmax(0,1fr)}.idx li i{display:block!important}.idx li span{grid-column:2}' +
      '.grid{grid-template-columns:repeat(2,minmax(0,1fr))}.p:first-child .im{aspect-ratio:1;height:auto}.spread{grid-template-columns:1fr}.spread>img{min-height:0;aspect-ratio:1}.more{grid-template-columns:repeat(2,minmax(0,1fr))}.fg{grid-template-columns:1fr 1fr}.fg>div:first-child{grid-column:1/-1}.dot{left:var(--xm);top:var(--ym)}.pop{width:250px;transform:translate(-50%,calc(-100% - 20px))}}' +
      '.idx li i{display:none;grid-row:span 2;width:56px;height:56px;background:var(--paper)}.idx li i img{width:100%;height:100%;object-fit:contain;mix-blend-mode:multiply}',
    html: function () {
      var w = WORLDS.slice(0, 7);
      return '<div class="a">' +
        '<a class="skip" href="#m" style="position:absolute;right:-9999px">דילוג לתוכן</a>' +
        '<header class="hd"><div class="w r1"><div><form data-s role="search"><input type="search" placeholder="חיפוש בין אלפי פריטים" aria-label="חיפוש"></form><button class="mb" data-menu aria-expanded="false">תפריט</button></div>' +
        '<a class="logo" href="/" aria-label="שיר מתנות"><img src="' + IMG + 'logo.webp" alt="Sheer Gifts — שיר מתנות"></a>' +
        '<div class="acts"><a class="x" href="/customer_login">החשבון שלי</a><a class="x" href="/?sg=fav">מועדפים</a><a href="/?sg=studio">המתנה</a><a href="/?sg=cart">סל</a></div></div>' +
        '<div class="dr" data-drawer hidden><form data-s role="search"><input type="search" placeholder="חיפוש בין אלפי פריטים" aria-label="חיפוש"></form></div>' +
        '<nav class="nv" aria-label="מחלקות">' + navLinks() + '<a class="g" href="/?sg=gifts">מארזים</a><a class="g" href="/?sg=studio">סטודיו המתנות</a></nav></header>' +
        '<main id="m"><section class="hero"><picture><source media="(max-width:900px)" srcset="' + BASE + 'photo/c/hero-m.webp"><img src="' + BASE + 'photo/c/hero-d.webp" alt="כלי הגשה, גביעים וצלחות מהחנות על רקע בהיר" fetchpriority="high"></picture>' +
        '<div class="tx"><h1>הבית, השולחן <em>והמתנה.</em></h1><p class="lead">אלפי פריטים לבית ולשולחן מהחנות שלנו בבני ברק. ומתנות שאנחנו מרכיבים ואורזים עבורכם, פריט אחר פריט.</p>' +
        '<div class="cta"><a class="btn" href="/?sg=studio">להרכבת מתנה</a><a class="ul" href="' + dep('כלי בית') + '">לקטלוג המלא</a></div></div></section>' +
        '<section class="sec w"><div class="hrow"><h2>המחלקות</h2><a href="/?sg=finder">לא בטוחים? יועץ המתנות</a></div><div class="idx"><ol>' +
        w.map(function (x, i) { return '<li><a href="' + x.url + '" data-w="' + i + '"' + (i ? '' : ' class="on"') + '><i><img src="' + x.img + '" alt="" loading="lazy"></i><b>' + esc(x.name) + '</b><span>' + esc(x.line) + '</span></a></li>'; }).join('') +
        '</ol><figure><img src="' + w[0].img + '" alt=""><figcaption>' + esc(w[0].name) + '</figcaption></figure></div></section>' +
        '<section class="sec w" style="padding-top:0"><div class="hrow"><h2>מהמדפים שלנו</h2><a href="' + dep('מתנות מעוצבות') + '">לכל המוצרים</a></div><div class="grid" data-fill="products">' + '<div class="sk"></div>'.repeat(9) + '</div></section>' +
        '<section class="sec" style="padding-top:0"><div class="w" data-fill="pkgs"><div class="sk" style="aspect-ratio:2.2"></div></div></section>' +
        '<section class="sec w" style="padding-top:0"><div class="hrow"><h2>על השולחן</h2><a href="/?sg=looks">לכל ההשראות</a></div><div class="look" data-fill="look"></div><div class="cap"><span>כל מה שבתמונה נמצא בחנות. לחצו על נקודה לפרטי הפריט.</span></div></section></main>' +
        '<footer class="ft"><div class="w"><div class="fg"><div><img src="' + IMG + 'logo.webp" alt="שיר מתנות" style="height:64px"><p style="color:#3a3631;margin:16px 0 0">מרדכי אנילביץ 8, בני ברק<br><span class="pr">03-5700922</span></p>' +
        '<form onsubmit="return false"><input type="email" placeholder="מייל למועדון שיר מתנות" aria-label="מייל"><button>הצטרפות</button></form></div>' +
        '<div><h3>מחלקות</h3>' + NAV.slice(0, 6).map(function (n) { return '<a href="' + dep(n) + '">' + esc(n) + '</a>'; }).join('') + '</div>' +
        '<div><h3>מתנות</h3><a href="/?sg=finder">יועץ המתנות</a><a href="/?sg=gifts">מארזים מוכנים</a><a href="/?sg=studio">סטודיו המתנות</a><a href="/?sg=looks">השראות</a><a href="/428782-%D7%92%D7%99%D7%A4%D7%98-%D7%A7%D7%90%D7%A8%D7%93">גיפט קארד</a></div>' +
        '<div><h3>שירות</h3><a href="/pages/49332-%D7%9E%D7%93%D7%99%D7%A0%D7%99%D7%95%D7%AA-%D7%9E%D7%A9%D7%9C%D7%95%D7%97%D7%99%D7%9D">משלוחים ואיסוף עצמי</a><a href="/contract">תקנון והחזרות</a><a href="/customer_login">מעקב הזמנות</a><a href="/contact">צור קשר</a></div></div>' +
        '<div class="fb"><span>© שיר מתנות — Sheer Gifts</span><span>קנייה מאובטחת · עד 5 תשלומים ללא ריבית</span></div></div></footer></div>';
    },
    products: function (l) {
      return l.slice(0, 9).map(function (p, i) { return '<a class="p" href="' + esc(p.url) + '"><div class="im"><img src="' + esc(p.img) + '" alt="" loading="lazy"></div><span class="nm">' + esc(shortN(p.name)) + '</span>' + nis(p.price) + '</a>'; }).join('');
    },
    pkgs: function (l) {
      var f = l[0]; if (!f) return '';
      return '<div class="spread"><img src="' + BASE + 'photo/d/box.webp" alt="מארז שבת ארוז בקופסה שקופה עם סרט" loading="lazy"><div class="tx"><div class="k">' + esc(f.kicker) + ' · מארז מוכן</div><h2>' + esc(f.title) + '</h2><p>' + esc(f.blurb) + '</p>' +
        '<ul class="cred">' + f.items.map(function (p) { return '<li><span>' + esc(shortN(p.name)) + '</span>' + nis(p.price) + '</li>'; }).join('') + '<li class="t"><span>המארז, ארוז ומוכן</span>' + nis(f.total) + '</li></ul>' +
        '<div class="cta"><a class="btn" href="' + f.url + '">לפרטי המארז</a><a class="ul" href="/?sg=gifts">כל המארזים</a></div></div></div>' +
        '<div class="more">' + l.slice(1, 5).map(function (p) { return '<a href="' + p.url + '"><div class="strip">' + p.items.slice(0, 3).map(function (x) { return '<img src="' + esc(x.img) + '" alt="" loading="lazy">'; }).join('') + '</div><b>' + esc(p.title) + '</b><span>' + esc(p.kicker) + ' · ' + p.items.length + ' פריטים · </span>' + nis(p.total) + '</a>'; }).join('') + '</div>';
    },
    after: function (root) {
      var fig = root.querySelector('.idx figure'), im = fig && fig.querySelector('img'), cap = fig && fig.querySelector('figcaption');
      [].forEach.call(root.querySelectorAll('.idx li a'), function (a) { a.addEventListener('mouseenter', function () { var x = WORLDS[+a.dataset.w]; root.querySelector('.idx a.on').classList.remove('on'); a.classList.add('on'); im.src = x.img; cap.textContent = x.name; }); });
    },
    look: 'hero', dot: 'dot'
  };

  /* =====================================================================
     B · סטודיו המתנות — the page is a wrapping counter
     ===================================================================== */
  var B = {
    css: '/* VOICE warm, crafted, precise\n IDEA the wrapping counter: kraft paper, white tissue, a black printed ribbon, hang tags\n PICTURE a live gift on tissue paper that re-wraps itself per occasion\n COLOUR kraft, white tissue, black ribbon ink\n TYPE Karantina (label print) + IBM Plex Sans Hebrew, Noto Rashi Hebrew on tags\n LAYOUT kraft hero with the gift as the picture; phone = gift first, then words */' +
      '.b{--kraft:#c39a6b;--kraft2:#d8b994;--ink:#1b1916;--mute:#6d6257;--tis:#fff;background:#fff;color:var(--ink);font:400 16px/1.6 "IBM Plex Sans Hebrew",Arial,sans-serif;direction:rtl}' +
      '.w{max-width:1360px;margin:0 auto;padding-inline:clamp(16px,4vw,48px)}.kar{font-family:Karantina,Impact,sans-serif;font-weight:700;letter-spacing:.01em}' +
      '.rib{background:var(--ink);color:#fff;height:34px;overflow:hidden;white-space:nowrap;font:400 19px/34px Karantina,sans-serif;letter-spacing:.06em}.rib span{display:inline-block;padding-inline:18px}' +
      '.hd{background:#fff;position:sticky;top:0;z-index:20;border-bottom:1px solid #e6dfd6}.r1{display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:clamp(16px,3vw,48px);align-items:center;height:80px}.logo img{height:58px}' +
      '.r1 form{display:flex;height:46px;border:1.5px solid var(--ink);max-width:560px;width:100%;justify-self:center}.r1 input{flex:1;border:0;outline:0;padding:0 16px;font-size:15px;background:none}.r1 form button{padding:0 18px;background:var(--ink);color:#fff;font-weight:500;font-size:14px}' +
      '.acts{display:flex;gap:20px;font-size:15px;font-weight:500}.acts .gift{background:var(--kraft);padding:10px 16px}' +
      '.nv{display:flex;gap:clamp(12px,2vw,30px);height:46px;align-items:center;font-size:15px;white-space:nowrap;overflow-x:auto;scrollbar-width:none}.nv a:hover{text-decoration:underline;text-underline-offset:6px}.nv .st{margin-inline-start:auto;font-weight:600}.mb{display:none}' +
      '.hero{background:var(--kraft);overflow:hidden}.hero .w{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,6fr);gap:clamp(24px,4vw,64px);align-items:center;min-height:min(78vh,760px);padding-block:48px}' +
      'h1{font:700 clamp(54px,6.4vw,104px)/.92 Karantina,Impact,sans-serif;margin:0 0 20px;letter-spacing:.005em}.lead{font-size:18px;max-width:28em;margin:0 0 26px;color:#2b241d}' +
      '.occ{display:flex;flex-wrap:wrap;gap:4px 22px;margin:0 0 30px;font-size:16px;font-weight:500}.occ button{padding:6px 0;border-bottom:2px solid transparent}.occ button[aria-pressed=true]{border-color:var(--ink)}' +
      '.btn{display:inline-flex;align-items:center;justify-content:center;height:52px;padding:0 30px;background:var(--ink);color:#fff;font-weight:600;font-size:15px}.btn:hover{background:#3b342c}.ln{font-weight:600;border-bottom:1.5px solid;padding-bottom:2px;margin-inline-start:24px}' +
      '.stage{position:relative;aspect-ratio:1/0.92;max-height:680px}.sheet{position:absolute;inset:4% 3% 6% 6%;background:var(--tis);transform:rotate(-2.2deg);box-shadow:0 30px 40px -30px rgba(60,40,20,.55)}' +
      '.sheet:before{content:"";position:absolute;inset:0;background:linear-gradient(115deg,transparent 46%,rgba(0,0,0,.035) 47%,transparent 60%),linear-gradient(28deg,transparent 30%,rgba(0,0,0,.03) 31%,transparent 44%)}' +
      '.it{position:absolute;left:var(--x);top:var(--y);width:var(--w);transform:translate(-50%,-50%);transition:opacity .45s,transform .6s cubic-bezier(.2,.7,.2,1)}.it img{width:100%;aspect-ratio:1;object-fit:contain;mix-blend-mode:multiply}.stage.out .it{opacity:0;transform:translate(-50%,-38%)}' +
      '.band{position:absolute;left:-4%;right:-4%;bottom:15%;height:46px;background:var(--ink);color:#fff;transform:rotate(-2.2deg);display:flex;align-items:center;gap:22px;padding-inline:28px;font:400 21px/1 Karantina,sans-serif;letter-spacing:.06em;white-space:nowrap;overflow:hidden}' +
      '.tag{position:absolute;right:2%;top:3%;width:200px;background:#fbf8f3;padding:18px 18px 16px;transform:rotate(3deg);box-shadow:0 10px 18px -12px rgba(0,0,0,.45);clip-path:polygon(0 14%,14% 0,100% 0,100% 100%,0 100%)}' +
      '.tag:before{content:"";position:absolute;top:14px;left:14px;width:9px;height:9px;border-radius:50%;background:var(--kraft)}.tag i{display:block;font:500 15px/1.3 "Noto Rashi Hebrew",serif;color:var(--mute)}.tag b{display:block;font:700 30px/1 Karantina,sans-serif;margin:6px 0}.tag .pr{font-weight:600}' +
      '.sec{padding-block:clamp(56px,7vw,104px)}.hrow{display:flex;justify-content:space-between;align-items:end;gap:20px;margin-bottom:32px}h2{font:700 clamp(40px,4.2vw,64px)/.95 Karantina,sans-serif;margin:0}.hrow a{font-weight:600;border-bottom:1.5px solid;white-space:nowrap}' +
      '.wl{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(12px,1.6vw,22px)}.wl a{display:block;background:#f6f2ec}.wl .im{aspect-ratio:1/1;padding:10%;overflow:hidden}.wl img{width:100%;height:100%;object-fit:contain;mix-blend-mode:multiply;transition:transform .5s}.wl a:hover img{transform:translateY(-6px)}' +
      '.wl .lb{display:flex;justify-content:space-between;align-items:center;background:var(--ink);color:#fff;padding:10px 14px;font:700 24px/1 Karantina,sans-serif;letter-spacing:.02em}.wl .lb small{font:400 13px/1.2 "IBM Plex Sans Hebrew",sans-serif;opacity:.75}' +
      '.grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:36px clamp(14px,1.8vw,26px)}.p .im{aspect-ratio:1;display:grid;place-items:center;background:#fff;border-bottom:1.5px solid var(--ink)}.p .im img{width:86%;height:86%;object-fit:contain}' +
      '.p .nm{display:block;margin:12px 0 2px;font-size:15px;line-height:1.4;min-height:2.8em}.p .row{display:flex;justify-content:space-between;align-items:center;gap:8px}.p .row .pr{font-weight:600}.p .add{font-size:14px;font-weight:600;background:var(--kraft2);padding:7px 12px}.p:hover .add{background:var(--kraft)}' +
      '.pk{background:#f6f2ec}.boxes{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(14px,2vw,28px)}.bx{display:block}.bx .lid{position:relative;aspect-ratio:1;background:#fff;overflow:hidden}' +
      '.bx .lid{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:6px;padding:6px}.bx .lid img{width:100%;height:100%;object-fit:cover;transition:transform .6s cubic-bezier(.2,.7,.2,1)}.bx .lid img:first-child:nth-last-child(4){grid-row:span 2}' +
      '.bx .rb{position:absolute;left:0;right:0;bottom:13%;height:36px;background:var(--ink);color:#fff;display:flex;align-items:center;justify-content:center;font:400 20px/1 Karantina,sans-serif;letter-spacing:.06em;transition:transform .6s cubic-bezier(.2,.7,.2,1)}' +
      '.bx:hover .rb{transform:translateX(-102%)}.bx:hover .lid img{transform:translateY(-5px)}.bx b{display:block;font:700 30px/1 Karantina,sans-serif;margin-top:14px}.bx .m{display:flex;justify-content:space-between;color:var(--mute);font-size:14px;margin-top:4px}.bx .m .pr{color:var(--ink);font-weight:600;font-size:15px}' +
      '.ins{display:grid;grid-template-columns:minmax(0,8fr) minmax(0,4fr);gap:clamp(24px,4vw,56px);align-items:center}.look{position:relative}.look img.bg{width:100%}.steps{list-style:none;margin:20px 0 28px;padding:0}.steps li{padding:14px 0;border-top:1.5px solid var(--ink)}.steps b{display:block;font:700 26px/1 Karantina,sans-serif}.steps span{color:var(--mute);font-size:15px}' +
      '.dot{position:absolute;left:var(--x);top:var(--y);width:30px;height:30px;margin:-15px 0 0 -15px;background:var(--ink);color:#fff;border-radius:50%;font:600 18px/30px sans-serif;text-align:center}.dot:after{content:"+"}.dot:hover{background:var(--kraft)}' +
      '.pop{position:absolute;left:var(--x);top:var(--y);transform:translate(-50%,calc(-100% - 26px));background:#fff;display:grid;grid-template-columns:70px minmax(0,1fr);gap:12px;padding:12px;width:280px;font-size:14px;z-index:3;box-shadow:0 12px 24px -14px rgba(0,0,0,.5)}.pop[hidden]{display:none}.pop img{width:70px;height:70px;object-fit:contain}.pop b{display:block;font-weight:600;line-height:1.35}.pop a{display:block;margin-top:4px;font-weight:600;text-decoration:underline}' +
      '.ft{background:var(--kraft);padding-block:0 28px;font-size:15px}.fg{display:grid;grid-template-columns:minmax(0,1.5fr) repeat(3,minmax(0,1fr));gap:32px;padding-top:52px}.fg h3{font:700 26px/1 Karantina,sans-serif;margin:0 0 12px}.fg a{display:block;padding:3px 0}.fg a:hover{text-decoration:underline}' +
      '.fg form{display:flex;height:46px;border:1.5px solid var(--ink);margin-top:16px;max-width:360px}.fg input{flex:1;border:0;outline:0;background:none;padding:0 14px}.fg button{background:var(--ink);color:#fff;padding:0 16px;font-weight:600}.fb{margin-top:40px;font-size:14px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px}' +
      '@media(max-width:900px){.r1{grid-template-columns:auto 1fr auto;height:64px}.r1 form,.acts .x{display:none}.logo img{height:46px}.mb{display:block;font-weight:600;font-size:15px}.dr{padding:0 16px 14px}.dr form{display:flex;height:46px;border:1.5px solid var(--ink)}.dr input{flex:1;border:0;outline:0;padding:0 12px;font-size:16px}' +
      '.nv{padding-inline:16px}.nv .st{margin:0}.hero .w{grid-template-columns:1fr;min-height:0;padding-block:20px 40px;gap:8px}.stage{order:-1;width:100%}.tag{width:150px;padding:14px}.tag b{font-size:24px}.band{height:38px;font-size:18px}' +
      '.wl{grid-template-columns:repeat(2,minmax(0,1fr))}.wl .lb small{display:none}.wl .lb{font-size:22px}.grid{grid-template-columns:repeat(2,minmax(0,1fr))}.boxes{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;gap:14px;margin-inline:-16px;padding-inline:16px;scrollbar-width:none}.bx{flex:0 0 78%;scroll-snap-align:start}' +
      '.ins{grid-template-columns:1fr}.fg{grid-template-columns:1fr 1fr}.fg>div:first-child{grid-column:1/-1}.dot{left:var(--xm);top:var(--ym);width:26px;height:26px;margin:-13px 0 0 -13px;line-height:26px}.pop{width:240px}.ln{margin:16px 0 0;display:inline-block}}',
    ribbon: function (t, n) { var s = ''; for (var i = 0; i < (n || 14); i++) s += '<span>' + t + '</span>'; return s; },
    html: function () {
      return '<div class="b"><div class="rib" aria-hidden="true">' + B.ribbon('שיר מתנות · SHEER GIFTS') + '</div>' +
        '<header class="hd"><div class="w r1"><a class="logo" href="/" aria-label="שיר מתנות"><img src="' + IMG + 'logo.webp" alt="Sheer Gifts — שיר מתנות"></a>' +
        '<form data-s role="search"><input type="search" placeholder="מה מחפשים היום? כוסות, פמוטים, מתנת לידה…" aria-label="חיפוש"><button>חיפוש</button></form>' +
        '<div class="acts"><button class="mb" data-menu aria-expanded="false">חיפוש ותפריט</button><a class="x" href="/customer_login">החשבון</a><a class="x" href="/?sg=fav">מועדפים</a><a class="gift" href="/?sg=studio">המתנה שלי</a><a href="/?sg=cart">סל</a></div></div>' +
        '<div class="dr" data-drawer hidden><form data-s role="search"><input type="search" placeholder="חיפוש בחנות" aria-label="חיפוש"></form></div>' +
        '<nav class="w nv" aria-label="מחלקות">' + navLinks() + '<a class="st" href="/?sg=gifts">מארזים מוכנים</a><a style="font-weight:600" href="/?sg=finder">יועץ המתנות</a></nav></header>' +
        '<main id="m"><section class="hero"><div class="w"><div><h1>בוחרים פריטים.<br>אנחנו הופכים אותם<br>למתנה אחת.</h1><p class="lead">כל פריט בחנות יכול להיכנס למתנה. אנחנו אורזים, מוסיפים כרטיס ברכה ושולחים, או שאוספים מהחנות בבני ברק.</p>' +
        '<div class="occ" role="group" aria-label="דוגמה לפי אירוע" data-occ></div><a class="btn" href="/?sg=studio">להרכבת מתנה</a><a class="ln" href="/?sg=finder">עזרה בבחירה</a></div>' +
        '<div class="stage" data-stage><div class="sheet"></div><div class="band" aria-hidden="true">' + B.ribbon('שיר מתנות', 10) + '</div><div class="tag"><i>דוגמה למתנה</i><b data-tt>…</b><span data-tn></span></div></div></div></section>' +
        '<section class="sec w"><div class="hrow"><h2>מהמדפים של החנות</h2><a href="/?sg=finder">עזרה בבחירה</a></div><div class="wl">' +
        WORLDS.map(function (x) { return '<a href="' + x.url + '"><div class="im"><img src="' + x.img + '" alt="" loading="lazy"></div><div class="lb">' + esc(x.name) + '<small>' + esc(x.line) + '</small></div></a>'; }).join('') + '</div></section>' +
        '<section class="sec w" style="padding-top:0"><div class="hrow"><h2>פריטים שאוהבים לארוז</h2><a href="' + dep('מתנות מעוצבות') + '">לכל המוצרים</a></div><div class="grid" data-fill="products">' + '<div class="sk"></div>'.repeat(8) + '</div></section>' +
        '<section class="sec pk"><div class="w"><div class="hrow"><h2>מארזים מוכנים</h2><a href="/?sg=gifts">לכל המארזים</a></div><div class="boxes" data-fill="pkgs">' + '<div class="sk"></div>'.repeat(4) + '</div></div></section>' +
        '<section class="sec w"><div class="ins"><div class="look" data-fill="look"></div><div><h2>מהסטודיו שלנו</h2><ol class="steps"><li><b>בוחרים</b><span>פריטים מכל מחלקות החנות, או מארז מוכן</span></li><li><b>אורזים</b><span>קופסה או צלופן, סרט וכרטיס ברכה אישי</span></li><li><b>מקבלים</b><span>במשלוח עד הבית או באיסוף מהחנות</span></li></ol><a class="btn" href="/?sg=studio">לסטודיו המתנות</a></div></div></section></main>' +
        '<footer class="ft"><div class="rib" aria-hidden="true">' + B.ribbon('שיר מתנות · SHEER GIFTS') + '</div><div class="w"><div class="fg"><div><h3>מועדון שיר מתנות</h3><p style="margin:0">קולקציות חדשות, מארזי חג ורעיונות למתנות.</p><form onsubmit="return false"><input type="email" placeholder="כתובת מייל" aria-label="מייל"><button>הצטרפות</button></form></div>' +
        '<div><h3>מחלקות</h3>' + NAV.slice(0, 6).map(function (n) { return '<a href="' + dep(n) + '">' + esc(n) + '</a>'; }).join('') + '</div>' +
        '<div><h3>מתנות</h3><a href="/?sg=studio">סטודיו המתנות</a><a href="/?sg=gifts">מארזים מוכנים</a><a href="/?sg=finder">יועץ המתנות</a><a href="/?sg=looks">השראות</a></div>' +
        '<div><h3>החנות</h3><p style="margin:0">מרדכי אנילביץ 8, בני ברק<br>א׳–ה׳ 10:00–19:00<br><span class="pr">03-5700922</span></p><a href="/contact">צור קשר</a></div></div>' +
        '<div class="fb"><span>© שיר מתנות — Sheer Gifts</span><span>קנייה מאובטחת · עד 5 תשלומים ללא ריבית</span></div></div></footer></div>';
    },
    products: function (l) {
      return l.slice(0, 8).map(function (p) { return '<a class="p" href="' + esc(p.url) + '"><div class="im"><img src="' + esc(p.img) + '" alt="" loading="lazy"></div><span class="nm">' + esc(shortN(p.name)) + '</span><div class="row">' + nis(p.price) + '<span class="add">+ למתנה</span></div></a>'; }).join('');
    },
    pkgs: function (l) {
      return l.slice(0, 4).map(function (p) { return '<a class="bx" href="' + p.url + '"><div class="lid">' + p.items.slice(0, 3).map(function (x) { return '<img src="' + esc(x.img) + '" alt="" loading="lazy">'; }).join('') + '<div class="rb">' + esc(p.title) + '</div></div><b>' + esc(p.title) + '</b><div class="m"><span>' + esc(p.kicker) + ' · ' + p.items.length + ' פריטים</span>' + nis(p.total) + '</div></a>'; }).join('');
    },
    // the hero gift re-wraps itself with the real items of each ready package
    // examples of gifts built from real items with clean photos; live names and prices
    GIFTS: [['לשבת', 'שולחן של שבת', ['8017138', '9006924', '9565461']], ['אירוח', 'שולחן מארח', ['6570104', '8831236', '8434408']], ['לבית חדש', 'ברכת הבית', ['6629644', '8601857', '8764434']], ['לה', 'רגע של פינוק', ['8434432', '8764437', '7881244']], ['לתינוק', 'ברוכים הבאים', ['9558273', '9558287', '7962381']]],
    hero: function (root) {
      var K = W.SGKit, occ = root.querySelector('[data-occ]'), st = root.querySelector('[data-stage]');
      var POS = [[50, 40, '42%'], [23, 60, '32%'], [77, 58, '32%']], cache = {};
      var load = function (g) { return cache[g[0]] || (cache[g[0]] = Promise.all(g[2].map(function (id) { return K.item(id).catch(function () { return null; }); })).then(function (ps) { return ps.filter(Boolean).map(function (p) { var c = (W.SG_CUTS || {})[p.id]; return { name: p.name, price: p.price, img: c ? BASE + 'cut/' + p.id + '.webp?v=' + c : p.img }; }); })); };
      var show = function (i) {
        var g = B.GIFTS[i]; [].forEach.call(occ.children, function (b, j) { b.setAttribute('aria-pressed', j === i); });
        st.classList.add('out');
        Promise.all([load(g), new Promise(function (r) { setTimeout(r, 280); })]).then(function (res) {
          var ps = res[0]; if (!ps.length) return;
          [].forEach.call(st.querySelectorAll('.it'), function (e) { e.remove(); });
          st.querySelector('.sheet').insertAdjacentHTML('afterend', ps.map(function (p, j) { var q = POS[j]; return '<div class="it" style="--x:' + q[0] + '%;--y:' + q[1] + '%;--w:' + q[2] + '"><img src="' + esc(p.img) + '" alt="' + esc(shortN(p.name)) + '"></div>'; }).join(''));
          st.querySelector('[data-tt]').textContent = g[1];
          st.querySelector('[data-tn]').innerHTML = ps.length + ' פריטים מהחנות · ' + nis(ps.reduce(function (s, p) { return s + p.price; }, 0));
          requestAnimationFrame(function () { requestAnimationFrame(function () { st.classList.remove('out'); }); });
        });
      };
      occ.innerHTML = B.GIFTS.map(function (g) { return '<button type="button" aria-pressed="false">' + esc(g[0]) + '</button>'; }).join('');
      [].forEach.call(occ.children, function (b, i) { b.addEventListener('click', function () { show(i); }); });
      show(0);
    },
    look: 'studio', dot: 'dot'
  };

  /* =====================================================================
     C · חלון ראווה — a bold department-store window
     ===================================================================== */
  var C = {
    css: '/* VOICE confident, graphic, generous\n IDEA a department-store window: one hero object at full size, big lettering, solid colour walls\n PICTURE real cut-out products standing large on a cobalt wall, swapped from a rail\n COLOUR cobalt wall, white, black, a pale cobalt tint\n TYPE Suez One (display) + Heebo\n LAYOUT poster hero, typographic department list, black package band; phone = object first, rail below */' +
      '.c{--co:#1d3bd1;--tint:#eef1fd;--ink:#0e0e10;--mute:#5e6070;background:#fff;color:var(--ink);font:400 16px/1.55 Heebo,Arial,sans-serif;direction:rtl}' +
      '.w{max-width:1480px;margin:0 auto;padding-inline:clamp(16px,4vw,56px)}.su{font-family:"Suez One",Georgia,serif;font-weight:400}' +
      '.hd{position:sticky;top:0;z-index:20;background:#fff}.r1{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:28px;height:76px}.logo img{height:56px}' +
      '.nv{display:flex;justify-content:center;gap:clamp(12px,1.8vw,28px);font-weight:500;font-size:15px;white-space:nowrap;overflow-x:auto;scrollbar-width:none}.nv a{padding:6px 0;border-bottom:2px solid transparent}.nv a:hover{border-color:var(--co);color:var(--co)}' +
      '.acts{display:flex;gap:8px;align-items:center}.acts form{display:flex;height:42px;background:var(--tint);width:220px}.acts input{flex:1;border:0;outline:0;background:none;padding:0 14px;font-size:15px}.acts .cart{height:42px;padding:0 18px;background:var(--ink);color:#fff;display:flex;align-items:center;font-weight:700;font-size:14px}.acts .gf{height:42px;padding:0 14px;display:flex;align-items:center;font-weight:700;font-size:14px;color:var(--co)}.mb{display:none}' +
      '.hero{background:var(--co);color:#fff;overflow:hidden}.hero .w{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);grid-template-rows:auto auto;min-height:min(86vh,860px);padding-block:clamp(28px,4vw,56px) 28px}' +
      'h1{grid-column:1;grid-row:1;font:400 clamp(56px,6.8vw,124px)/.95 "Suez One",Georgia,serif;margin:0;letter-spacing:-.02em;position:relative;z-index:1}h1 span{display:block}' +
      '.obj{grid-column:2;grid-row:1/3;position:relative;z-index:2;display:grid;place-items:center;pointer-events:none}.plinth{width:min(30vw,420px);aspect-ratio:1;background:#fff;display:grid;place-items:center;box-shadow:0 50px 60px -40px rgba(0,0,40,.6);transition:opacity .35s,transform .55s cubic-bezier(.2,.7,.2,1)}.plinth{position:relative}.plinth img{position:absolute;inset:11%;width:78%;height:78%;object-fit:contain}.obj.out .plinth{opacity:0;transform:translateY(24px) scale(.96)}' +
      '.bar{grid-column:1;grid-row:2;align-self:end;display:flex;flex-direction:column;align-items:flex-start;gap:24px;position:relative;z-index:2}.now{max-width:340px}.now small{display:block;opacity:.75;font-size:14px}.now b{display:block;font-size:20px;line-height:1.3;margin:4px 0}.now a{display:inline-flex;margin-top:10px;height:46px;align-items:center;padding:0 22px;background:#fff;color:var(--co);font-weight:700;font-size:15px}' +
      '.rail{display:flex;gap:10px}.rail button{width:92px;height:92px;background:#fff;display:grid;place-items:center;opacity:.55;transition:opacity .2s,transform .2s;position:relative}.rail button img{position:absolute;inset:10%;width:80%;height:80%;object-fit:contain}.rail button[aria-pressed=true]{opacity:1;transform:translateY(-6px)}.rail button:hover{opacity:.9}' +
      '.sec{padding-block:clamp(56px,7vw,110px)}h2{font:400 clamp(40px,5vw,80px)/.95 "Suez One",serif;margin:0;letter-spacing:-.015em}.hrow{display:flex;justify-content:space-between;align-items:end;gap:20px;margin-bottom:clamp(24px,3vw,44px)}.hrow a{font-weight:700;color:var(--co);white-space:nowrap}' +
      '.dl{list-style:none;margin:0;padding:0;border-top:2px solid var(--ink)}.dl a{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:20px;padding:10px 0;border-bottom:2px solid var(--ink)}.dl b{font:400 clamp(30px,4.2vw,64px)/1.1 "Suez One",serif;letter-spacing:-.015em;transition:color .2s,padding .3s}' +
      '.dl span{font-size:15px;color:var(--mute);text-align:left}.dl a:hover b{color:var(--co);padding-inline-start:18px}.dl i{display:none}' +
      '.fl{position:fixed;left:0;top:0;width:220px;height:260px;pointer-events:none;z-index:30;opacity:0;transition:opacity .2s;background:var(--tint);display:grid;place-items:center}.fl img{max-width:78%;max-height:78%;object-fit:contain;mix-blend-mode:multiply}.fl.on{opacity:1}' +
      '.shelf{background:var(--tint)}.bento{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}.p{background:#fff;display:flex;flex-direction:column;padding:18px}.p .im{flex:1;display:grid;place-items:center;aspect-ratio:1}.p img{width:88%;height:88%;object-fit:contain;transition:transform .5s}.p:hover img{transform:scale(1.05)}' +
      '.p .nm{font-size:15px;line-height:1.35;margin-top:10px}.p .row{display:flex;justify-content:space-between;align-items:center;margin-top:8px}.p .pr{font-weight:800;font-size:17px}.p .add{width:38px;height:38px;background:var(--ink);color:#fff;display:grid;place-items:center;font-size:20px}.p:hover .add{background:var(--co)}' +
      '.p.big{grid-column:span 2;grid-row:span 2;background:var(--co);color:#fff}.p.big .im{background:#fff}.p.big .nm{font:400 26px/1.2 "Suez One",serif;margin-top:16px}.p.big .pr{font-size:22px}.p.big .add{background:#fff;color:var(--co)}' +
      '.pkb{background:var(--ink);color:#fff}.pkb .hrow a{color:#fff}.car{display:flex;gap:16px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding-bottom:4px}.car>a{flex:0 0 clamp(270px,30vw,420px);scroll-snap-align:start}' +
      '.car .sq{aspect-ratio:1;background:var(--tint);position:relative;overflow:hidden}.car .sq{position:relative;background:#fff}.car .sq>img{position:absolute;left:10%;top:8%;width:80%;height:70%;object-fit:contain}.car .th{position:absolute;right:12px;bottom:12px;display:flex;gap:6px}.car .th img{width:64px;height:64px;object-fit:cover;outline:1px solid #e3e6f5}' +
      '.car .sq em{position:absolute;left:0;bottom:0;background:var(--co);color:#fff;font:800 18px/1 Heebo,sans-serif;font-style:normal;padding:12px 16px}.car b{display:block;font:400 30px/1.1 "Suez One",serif;margin-top:16px}.car span{opacity:.7;font-size:14px}' +
      '.arw{display:flex;gap:8px}.arw button{width:46px;height:46px;background:#fff;color:var(--ink);font-size:20px}.arw button:hover{background:var(--co);color:#fff}' +
      '.look{position:relative}.look img.bg{width:100%}.dot{position:absolute;left:var(--x);top:var(--y);width:34px;height:34px;margin:-17px 0 0 -17px;background:var(--co);color:#fff;font:400 22px/34px Heebo,sans-serif;text-align:center;transition:transform .2s}.dot:after{content:"+"}.dot:hover{transform:scale(1.15)}' +
      '.pop{position:absolute;left:var(--x);top:var(--y);transform:translate(-50%,calc(-100% - 26px));background:#fff;display:grid;grid-template-columns:76px minmax(0,1fr);gap:12px;padding:12px;width:300px;font-size:14px;z-index:3;border-top:4px solid var(--co)}.pop[hidden]{display:none}.pop img{width:76px;height:76px;object-fit:contain}.pop b{display:block;font-weight:500;line-height:1.35}.pop .pr{font-weight:800}.pop a{display:block;margin-top:4px;color:var(--co);font-weight:700}' +
      '.ft{background:var(--co);color:#fff;padding-block:56px 24px;overflow:hidden}.wm{font:400 clamp(64px,13vw,230px)/.85 "Suez One",serif;letter-spacing:-.03em;margin:0 0 40px;white-space:nowrap}.fg{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:28px;font-size:15px}.fg h3{font:700 15px/1 Heebo,sans-serif;margin:0 0 14px;opacity:.7}.fg a{display:block;padding:3px 0}.fg a:hover{text-decoration:underline}' +
      '.fg form{display:flex;height:46px;background:#fff;margin-top:14px}.fg input{flex:1;border:0;outline:0;padding:0 12px;color:var(--ink)}.fg button{background:var(--ink);color:#fff;padding:0 16px;font-weight:700}.fb{margin-top:44px;display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;font-size:14px;opacity:.8}' +
      '@media(max-width:1000px){.r1{grid-template-columns:auto 1fr auto;height:64px}.logo img{height:46px}.r1>.nv,.acts form,.acts .gf{display:none}.mb{display:block;font-weight:700;font-size:15px;order:-1}.dr{padding:0 16px 14px}.dr form{display:flex;height:46px;background:var(--tint)}.dr input{flex:1;border:0;outline:0;background:none;padding:0 12px;font-size:16px}.dr .nv{justify-content:flex-start;margin-top:12px;flex-wrap:wrap;white-space:normal;gap:6px 18px}}' +
      '@media(max-width:700px){.hero .w{grid-template-columns:1fr;grid-template-rows:auto auto auto;min-height:0;padding-block:24px 20px;gap:4px}h1{grid-row:1;font-size:clamp(48px,14vw,72px)}.obj{grid-column:1;grid-row:2;padding-block:4px}.plinth{width:72vw}' +
      '.bar{grid-row:3;flex-direction:column;align-items:stretch}.rail{overflow-x:auto;scrollbar-width:none}.rail button{flex:0 0 72px;height:72px}.dl a{padding:14px 0;grid-template-columns:64px minmax(0,1fr)}.dl i{display:block;width:64px;height:64px;background:var(--tint)}.dl i img{width:100%;height:100%;object-fit:contain;mix-blend-mode:multiply}.dl span{display:none}' +
      '.bento{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.p{padding:12px}.p.big .nm{font-size:21px}.arw{display:none}.car>a{flex-basis:80%}.fg{grid-template-columns:1fr 1fr}.dot{left:var(--xm);top:var(--ym)}.pop{width:240px}}',
    html: function () {
      return '<div class="c"><header class="hd"><div class="w r1"><a class="logo" href="/" aria-label="שיר מתנות"><img src="' + IMG + 'logo.webp" alt="Sheer Gifts — שיר מתנות"></a>' +
        '<nav class="nv" aria-label="מחלקות">' + navLinks() + '<a href="/?sg=gifts" style="color:var(--co)">מארזים</a></nav>' +
        '<div class="acts"><button class="mb" data-menu aria-expanded="false">תפריט</button><form data-s role="search"><input type="search" placeholder="חיפוש" aria-label="חיפוש"></form><a class="gf" href="/?sg=studio">המתנה</a><a class="cart" href="/?sg=cart">סל</a></div></div>' +
        '<div class="dr" data-drawer hidden><form data-s role="search"><input type="search" placeholder="חיפוש בין אלפי פריטים" aria-label="חיפוש"></form><nav class="nv" aria-label="מחלקות">' + navLinks() + '<a href="/?sg=gifts">מארזים</a><a href="/?sg=studio">סטודיו המתנות</a></nav></div></header>' +
        '<main id="m"><section class="hero"><div class="w"><h1><span>אלפי פריטים.</span><span>מתנה אחת.</span></h1><div class="obj" data-obj><div class="plinth"><img alt="" src=""></div></div>' +
        '<div class="bar"><div class="now"><small>בחלון עכשיו</small><b data-nn>…</b><span data-np></span><br><a data-nl href="/?sg=studio">לפרטי הפריט</a></div><div class="rail" data-rail aria-label="פריטים בחלון"></div></div></div></section>' +
        '<section class="sec w"><div class="hrow"><h2>המחלקות</h2><a href="/?sg=finder">יועץ המתנות ←</a></div><ul class="dl">' +
        WORLDS.map(function (x, i) { return '<li><a href="' + x.url + '" data-w="' + i + '"><i><img src="' + x.img + '" alt="" loading="lazy"></i><b>' + esc(x.name) + '</b><span>' + esc(x.line) + '</span></a></li>'; }).join('') + '</ul><div class="fl" aria-hidden="true"><img alt=""></div></section>' +
        '<section class="sec shelf"><div class="w"><div class="hrow"><h2>על המדף</h2><a href="' + dep('מתנות מעוצבות') + '">לכל המוצרים ←</a></div><div class="bento" data-fill="products">' + '<div class="sk"></div>'.repeat(8) + '</div></div></section>' +
        '<section class="sec pkb"><div class="w"><div class="hrow"><h2>מארזים מוכנים</h2><div class="arw"><button type="button" data-d="1" aria-label="הקודם">→</button><button type="button" data-d="-1" aria-label="הבא">←</button></div></div><div class="car" data-fill="pkgs"></div><p style="margin:28px 0 0"><a href="/?sg=gifts" style="font-weight:700;border-bottom:2px solid">לכל המארזים</a> &nbsp; · &nbsp; כל מארז אפשר לשנות בסטודיו המתנות</p></div></section>' +
        '<section class="sec w"><div class="hrow"><h2>תראו את זה על השולחן</h2><a href="/?sg=looks">לכל ההשראות ←</a></div><div class="look" data-fill="look"></div></section></main>' +
        '<footer class="ft"><div class="w"><p class="wm" aria-hidden="true">שיר מתנות</p><div class="fg"><div><h3>מועדון שיר מתנות</h3>קולקציות חדשות, מארזי חג ורעיונות.<form onsubmit="return false"><input type="email" placeholder="מייל" aria-label="מייל"><button>הצטרפות</button></form></div>' +
        '<div><h3>מחלקות</h3>' + NAV.slice(0, 6).map(function (n) { return '<a href="' + dep(n) + '">' + esc(n) + '</a>'; }).join('') + '</div>' +
        '<div><h3>מתנות</h3><a href="/?sg=studio">סטודיו המתנות</a><a href="/?sg=gifts">מארזים מוכנים</a><a href="/?sg=finder">יועץ המתנות</a><a href="/?sg=looks">השראות</a></div>' +
        '<div><h3>החנות</h3>מרדכי אנילביץ 8, בני ברק<br><span class="pr">03-5700922</span><a href="/contact">צור קשר</a><a href="/pages/49332-%D7%9E%D7%93%D7%99%D7%A0%D7%99%D7%95%D7%AA-%D7%9E%D7%A9%D7%9C%D7%95%D7%97%D7%99%D7%9D">משלוחים ואיסוף</a></div></div>' +
        '<div class="fb"><span>© שיר מתנות — Sheer Gifts</span><span>קנייה מאובטחת · עד 5 תשלומים ללא ריבית</span></div></div></footer></div>';
    },
    products: function (l) {
      return l.slice(0, 9).map(function (p, i) { return '<a class="p' + (i === 4 ? ' big' : '') + '" href="' + esc(p.url) + '"><div class="im"><img src="' + esc(p.img) + '" alt="" loading="lazy"></div><span class="nm">' + esc(shortN(p.name)) + '</span><div class="row">' + nis(p.price) + '<span class="add" aria-hidden="true">+</span></div></a>'; }).join('');
    },
    pkgs: function (l) {
      return l.map(function (p) { return '<a href="' + p.url + '"><div class="sq"><img src="' + esc(p.items[0].img) + '" alt="" loading="lazy"><div class="th">' + p.items.slice(1, 4).map(function (x) { return '<img src="' + esc(x.img) + '" alt="" loading="lazy">'; }).join('') + '</div><em>' + nis(p.total) + '</em></div><b>' + esc(p.title) + '</b><span>' + esc(p.kicker) + ' · ' + p.items.length + ' פריטים</span></a>'; }).join('');
    },
    // the window: real products with clean cut-outs, swapped from the rail
    HERO: ['6629644', '8764437', '9006924', '6808376', '9565461'],
    hero: function (root) {
      var K = W.SGKit, obj = root.querySelector('[data-obj]'), rail = root.querySelector('[data-rail]');
      Promise.all(C.HERO.map(function (id) { return K.item(id).catch(function () { return null; }); })).then(function (ps) {
        ps = ps.filter(Boolean); if (!ps.length) return;
        return Promise.all(ps.map(data.cut)).then(function (srcs) {
          var show = function (i) {
            var p = ps[i]; [].forEach.call(rail.children, function (b, j) { b.setAttribute('aria-pressed', j === i); });
            obj.classList.add('out');
            setTimeout(function () { var im = obj.querySelector('img'); im.src = srcs[i]; im.alt = shortN(p.name); obj.classList.remove('out'); }, 260);
            root.querySelector('[data-nn]').textContent = shortN(p.name); root.querySelector('[data-np]').innerHTML = nis(p.price); root.querySelector('[data-nl]').href = p.url;
          };
          rail.innerHTML = ps.map(function (p, i) { return '<button type="button" aria-pressed="false" aria-label="' + esc(shortN(p.name)) + '"><img src="' + esc(srcs[i]) + '" alt=""></button>'; }).join('');
          [].forEach.call(rail.children, function (b, i) { b.addEventListener('click', function () { show(i); }); });
          show(0);
        });
      });
    },
    after: function (root) {
      var fl = root.querySelector('.fl'), fi = fl.querySelector('img');
      [].forEach.call(root.querySelectorAll('.dl a'), function (a) {
        a.addEventListener('mouseenter', function () { if (innerWidth < 900) return; fi.src = WORLDS[+a.dataset.w].img; fl.classList.add('on'); });
        a.addEventListener('mouseleave', function () { fl.classList.remove('on'); });
        a.addEventListener('mousemove', function (e) { fl.style.transform = 'translate(' + (e.clientX + 24) + 'px,' + (e.clientY - 130) + 'px)'; });
      });
      var car = root.querySelector('.car');
      [].forEach.call(root.querySelectorAll('.arw button'), function (b) { b.addEventListener('click', function () { car.scrollBy({ left: -b.dataset.d * car.clientWidth * .8, behavior: 'smooth' }); }); });
    },
    look: 'table', dot: 'dot'
  };

  /* ---------- mount ---------- */
  W.SGConcept = function (k) {
    var c = { a: A, b: B, c: C }[k] || A;
    if (!D.querySelector('link[data-sgc]')) { var lk = D.createElement('link'); lk.rel = 'stylesheet'; lk.href = FONTS; lk.setAttribute('data-sgc', ''); D.head.appendChild(lk); }
    var host = D.createElement('div'); host.id = 'sg-concept'; D.body.insertBefore(host, D.body.firstChild);
    var root = host.attachShadow ? host.attachShadow({ mode: 'open' }) : host;
    D.title = 'שיר מתנות · קונספט ' + 'אבג'[['a', 'b', 'c'].indexOf(k)];
    root.innerHTML = '<style>' + BASECSS + c.css + '</style>' + c.html() + switcher(k);
    searchGo(root); menu(root); if (c.after) c.after(root);
    var fill = function (name, html) { var el = root.querySelector('[data-fill="' + name + '"]'); if (el) el.innerHTML = html; };
    data.products().then(function (l) { fill('products', c.products(l)); });
    data.pkgs().then(function (l) { fill('pkgs', c.pkgs(l)); });
    if (c === B) B.hero(root);
    if (c === C) C.hero(root);
    var L = data.look(c.look), fig = root.querySelector('[data-fill="look"]');
    if (fig && L.spots.length) { fig.innerHTML = '<picture><source media="(max-width:700px)" srcset="' + L.m + '"><img class="bg" src="' + L.d + '" alt="שולחן ערוך בפריטים מהחנות" loading="lazy"></picture>'; dots(fig, L.spots, c.dot); }
  };
})();
