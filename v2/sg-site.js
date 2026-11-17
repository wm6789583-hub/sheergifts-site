/* Sheer Gifts v3 — test environment only. Gold-and-glass design on the real store catalogue. */
(function(){var s=document.createElement("style");s.id="sg2-css";s.textContent="@import url(\"https://fonts.googleapis.com/css2?family=Noto+Serif+Hebrew:wght@400..700&family=Assistant:wght@400;500;600;700;800&display=swap\");\nhtml.sg2 body>.sg-k{display:none!important}\nhtml.sg2 body{margin:0;background:#F4EFE7;padding-top:20px}\nhtml.sg2 #sg-test-env-banner{top:0!important;bottom:auto!important;font-size:12px!important;padding:3px!important;opacity:.92}\n.sg-root{--ink:#1E1B17;--mut:#6F665B;--line:#DDD3C4;--gold:#A8843F;--bg:#F4EFE7;--paper:#FBF8F3;\n --goldg:linear-gradient(90deg,#8E6C33,#E8D49C 32%,#B48F4C 58%,#E6CD8E 80%,#8A6831);--goldh:linear-gradient(180deg,#8E6C33,#ECD8A2 40%,#B48F4C 70%,#8A6831);\n font-family:'Noto Sans Hebrew',system-ui,sans-serif;font-weight:300;color:var(--ink);background:var(--bg);direction:rtl;-webkit-font-smoothing:antialiased}\n.sg-root *{box-sizing:border-box}\n.sg-root a{color:inherit;text-decoration:none}\n.sg-root button{font:inherit;color:inherit;background:none;border:0;padding:0;cursor:pointer}\n.sg-root .disp{font-family:'Noto Serif Hebrew',serif;font-stretch:87.5%;font-weight:250;letter-spacing:-.01em;margin:0}\n.sg-root .num{font-family:'Noto Serif Hebrew',serif;font-stretch:87.5%;font-weight:350}\n.sg-root .cur{font-family:'Noto Sans Hebrew',sans-serif;font-weight:300;font-size:.82em}\n.sg-root .kick{font-size:13px;font-weight:500;color:var(--gold);margin:0}\n.sg-vh{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}\n/* header */\n.sg-hdr{position:relative;z-index:20;background:var(--bg)}\n.sg-util{display:flex;justify-content:space-between;gap:20px;padding:9px 72px;font-size:12.5px;color:var(--mut);border-bottom:1px solid var(--line)}\n.sg-util-c{color:var(--gold);font-weight:400}\n.sg-bar{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:40px;height:84px;padding:0 72px;position:relative}\n.sg-bar:after{content:\"\";position:absolute;left:72px;right:72px;bottom:0;height:1px;background:var(--goldg);opacity:.55}\n.sg-burger{display:none;width:44px;height:44px;align-items:center;justify-content:center}\n.sg-logo img{display:block;width:76px;height:auto}\n.sg-nav{display:flex;gap:26px;justify-content:center;font-size:14.5px;font-weight:400;white-space:nowrap}\n.sg-nav a{position:relative;padding:6px 0}\n.sg-nav a:after{content:\"\";position:absolute;right:0;left:100%;bottom:0;height:1px;background:var(--gold);transition:left .35s}\n.sg-nav a:hover:after{left:0}\n.sg-nav-studio{color:#8C6B33}\n.sg-tools{display:flex;align-items:center;gap:18px}\n.sg-search{display:flex;align-items:center;border-bottom:1px solid var(--line);height:38px;width:170px}\n.sg-search input{border:0;background:none;font:inherit;font-size:14px;width:100%;outline:0;color:var(--ink);padding:0 2px}\n.sg-search button{width:32px;height:38px;display:flex;align-items:center;justify-content:center;color:var(--mut)}\n.sg-gift,.sg-cart{position:relative;display:inline-flex;align-items:center;gap:6px;height:44px;font-size:14px;font-weight:400}\n.sg-gift b,.sg-cart b{font-family:'Noto Serif Hebrew',serif;font-weight:400;color:var(--gold);font-size:15px;transition:transform .3s}\n.sg-gift.has b{color:#8C6B33}\n.sg-cart.bump b{transform:scale(1.5)}\n.sg-drawer{border-bottom:1px solid var(--line);background:var(--paper)}\n.sg-drawer nav{display:grid;grid-template-columns:1fr 1fr;gap:0 20px;padding:10px 20px 18px}\n.sg-drawer a{padding:12px 0;border-bottom:1px solid var(--line);font-size:15px;font-weight:400}\n/* footer */\n.sg-ftr{margin-top:0;padding:70px 72px 28px;background:#EFE8DC;position:relative}\n.sg-ftr:before{content:\"\";position:absolute;left:72px;right:72px;top:0;height:1px;background:var(--goldg);opacity:.6}\n.sg-ftr-top{display:flex;align-items:center;gap:28px;margin-bottom:40px}\n.sg-ftr-tag{font-family:'Noto Serif Hebrew',serif;font-stretch:87.5%;font-weight:300;font-size:24px;line-height:1.3;margin:0;color:#8C6B33}\n.sg-ftr-cols{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:30px}\n.sg-ftr h3{font-size:13px;font-weight:500;color:var(--gold);margin:0 0 14px}\n.sg-ftr-cols a,.sg-ftr-cols p{display:block;font-size:14px;margin:0 0 9px;color:#4A4239}\n.sg-ftr-cols a:hover{color:var(--gold)}\n.sg-ftr-bot{display:flex;justify-content:space-between;margin-top:46px;padding-top:18px;border-top:1px solid var(--line);font-size:12.5px;color:var(--mut)}\n/* toast */\n.sg-toast{position:fixed;left:50%;bottom:34px;transform:translate(-50%,20px);opacity:0;z-index:100001;background:#1E1B17;color:#F4EFE7;padding:13px 20px;font:400 14px 'Noto Sans Hebrew',Arial,sans-serif;direction:rtl;transition:all .35s;box-shadow:0 18px 40px -16px rgba(0,0,0,.5)}\n.sg-toast.in{opacity:1;transform:translate(-50%,0)}\n/* home */\n.sg-home{overflow:hidden;background:#F7F3EC}\n.sg-home-in{margin:0 auto}\n.sg-depts{padding:100px 72px 40px;background:#F4EFE7}\n.sg-depts-hd{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:34px}\n.sg-depts-hd .disp{font-size:56px;line-height:1.05}\n.sg-depts-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));border-top:1px solid var(--ink)}\n.sg-depts-grid a{display:grid;grid-template-columns:auto 1fr auto;gap:12px;align-items:baseline;padding:22px 4px 22px 18px;border-bottom:1px solid var(--line);position:relative;transition:background .3s}\n.sg-depts-grid a:hover{background:rgba(255,255,255,.5)}\n.sg-depts-grid .n{font-family:'Noto Serif Hebrew',serif;font-size:13px;color:var(--gold)}\n.sg-depts-grid .t{font-size:18px;font-weight:400}\n.sg-depts-grid .ar{color:var(--gold);opacity:0;transform:translateX(8px);transition:all .3s}\n.sg-depts-grid a:hover .ar{opacity:1;transform:none}\n.D.m .sg-depts{padding:60px 20px 20px}\n.D.m .sg-depts-hd{display:block}\n.D.m .sg-depts-hd .disp{font-size:34px;margin-top:10px}\n.D.m .sg-depts-grid{grid-template-columns:1fr 1fr}\n.D.m .sg-depts-grid .t{font-size:15px}\n/* category */\n.sg-cat-hd{position:relative;overflow:hidden;padding:56px 72px 44px;background:linear-gradient(180deg,#F7F3EC,#F2ECE2)}\n.sg-cat-hd .sun{position:absolute;top:-60px;height:500px;background:linear-gradient(180deg,rgba(255,252,240,.85),rgba(255,250,236,0));transform:skewX(-28deg);filter:blur(10px);pointer-events:none}\n.sg-cat-hd .s1{left:12%;width:110px}.sg-cat-hd .s2{left:26%;width:50px}\n.sg-crumbs{display:flex;gap:10px;font-size:13px;color:var(--mut);position:relative}\n.sg-crumbs a:hover{color:var(--gold)}\n.sg-cat-hd h1{font-size:72px;line-height:1.05;margin-top:16px;position:relative}\n.sg-cat-meta{display:flex;flex-wrap:wrap;gap:14px 34px;align-items:center;margin-top:22px;font-size:14px;color:var(--mut);position:relative}\n.sg-sorts a{color:var(--ink);font-weight:400;border-bottom:1px solid var(--line)}\n.sg-ranges{display:flex;gap:8px}\n.sg-ranges a{border:1px solid rgba(168,132,63,.4);padding:6px 12px;font-size:13px;color:var(--ink);background:rgba(255,255,255,.4)}\n.sg-ranges a:hover{border-color:var(--gold)}\n.sg-wall{padding:30px 72px 70px;background:linear-gradient(180deg,#F2ECE2,#F4EFE7)}\n.sg-bay{position:relative;padding:34px 34px 6px;margin-bottom:40px}\n.sg-bay .sg-up{position:absolute;top:0;bottom:-6px;width:5px;background:var(--goldg);box-shadow:10px 6px 10px rgba(90,66,30,.10)}\n.sg-bay .sg-up.a{right:0}.sg-bay .sg-up.b{left:0}\n.sg-bay:before{content:\"\";position:absolute;right:-14px;left:14px;top:-10px;bottom:4px;border:2px solid rgba(168,132,63,.18);border-bottom:0;pointer-events:none}\n.sg-bay.step .sg-up.a{top:40px}\n.sg-bay.step .sg-up.b{top:-40px}\n.sg-row{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:30px;align-items:start;position:relative;z-index:2}\n.sg-bay>.sg-glass{display:none}\n.sg-glass{position:absolute;left:0;right:0;bottom:-18px;height:18px;z-index:1}\n.sg-glass:before{content:\"\";position:absolute;left:0;right:0;top:0;height:12px;background:linear-gradient(180deg,rgba(255,255,255,.12),rgba(225,238,232,.6));border-top:1px solid rgba(255,255,255,.95)}\n.sg-glass i{position:absolute;left:-3px;right:-3px;top:12px;height:6px;background:var(--goldh);box-shadow:0 10px 14px -6px rgba(80,60,30,.35)}\n.sg-glass:after{content:\"\";position:absolute;left:0;right:0;top:18px;height:30px;background:linear-gradient(180deg,rgba(80,60,30,.10),transparent)}\n.sg-card{position:relative;display:flex;flex-direction:column;animation:sgRise .8s var(--d) cubic-bezier(.2,.7,.2,1) both}\n.sg-card.wide{grid-column:span 2}\n@keyframes sgRise{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}\n.sg-card-ph{position:relative;display:flex;align-items:flex-end;justify-content:center;aspect-ratio:1/1;padding:8% 8% 10px;background:#F3EDE3;isolation:isolate}\n.sg-card-ph:after{content:\"\";position:absolute;left:-16px;right:-16px;bottom:-4px;height:16px;z-index:3;pointer-events:none;\n background:linear-gradient(180deg,rgba(255,255,255,.15),rgba(225,238,232,.65)) top/100% 11px no-repeat,linear-gradient(180deg,#8E6C33,#ECD8A2 40%,#B48F4C 70%,#8A6831) bottom/100% 5px no-repeat;border-top:1px solid rgba(255,255,255,.95);box-shadow:0 12px 16px -8px rgba(80,60,30,.35)}\n.sg-row .sg-card:first-child .sg-card-ph:after{right:-34px}.sg-row .sg-card:last-child .sg-card-ph:after{left:-34px}\n.sg-card.wide .sg-card-ph{aspect-ratio:2.1/1;padding:4% 18%}\n.sg-card-ph img{position:relative;z-index:2;max-width:100%;max-height:100%;object-fit:contain;mix-blend-mode:multiply;transition:transform .5s cubic-bezier(.2,.7,.2,1)}\n.sg-card:hover .sg-card-ph img{transform:translateY(-6px) scale(1.02)}\n.sg-csh{position:absolute;left:20%;right:20%;bottom:8px;height:10px;border-radius:50%;background:radial-gradient(closest-side,rgba(60,42,18,.22),transparent);z-index:1}\n.sg-halo{position:absolute;inset:-6% -10% 0;background:radial-gradient(50% 55% at 50% 100%,rgba(255,236,190,.8),transparent 70%);opacity:0;transition:opacity .5s}\n.sg-card.on .sg-halo{opacity:1}\n.sg-card-tx{order:3;padding-top:24px;min-height:88px}\n.sg-card-nm{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;font-size:14px;line-height:1.5;font-weight:400}\n.sg-card-nm:hover{color:#8C6B33}\n.sg-card-pr{margin-top:6px;display:flex;gap:10px;align-items:baseline}\n.sg-card-pr .num{font-size:19px}\n.sg-card-pr s{font-size:14px;color:var(--mut)}\n.sg-card-act{position:absolute;right:0;left:0;bottom:calc(100% - 100% + 0px);display:flex;gap:6px;justify-content:center;order:2;opacity:0;transform:translateY(6px);transition:all .3s;z-index:3;top:auto}\n.sg-card-act{position:relative;order:2;margin-top:-58px;height:38px;margin-bottom:20px}\n.sg-card:hover .sg-card-act,.sg-card:focus-within .sg-card-act,.sg-card.on .sg-card-act{opacity:1;transform:none}\n.sg-b-cart,.sg-b-gift{display:inline-flex;align-items:center;justify-content:center;height:36px;padding:0 14px;font-size:13px;font-weight:400;white-space:nowrap}\n.sg-b-cart{background:#1E1B17;color:#F4EFE7}\n.sg-b-cart.done{background:#5D7A55}\n.sg-b-gift{background:rgba(255,255,255,.85);border:1px solid rgba(168,132,63,.5)}\n.sg-b-gift .g-on{display:none}\n.sg-card.on .sg-b-gift{background:#F1E3C2;border-color:var(--gold)}\n.sg-card.on .sg-b-gift .g-on{display:inline}.sg-card.on .sg-b-gift .g-off{display:none}\n.sg-more-w{text-align:center;padding:0 0 70px;background:#F4EFE7}\n.sg-more{height:52px;padding:0 34px;border:1px solid var(--ink)!important;font-size:15px!important;font-weight:400!important}\n/* mobile */\n@media (max-width:760px){\n .sg-util{display:none}\n .sg-bar{grid-template-columns:44px 1fr auto;gap:10px;height:64px;padding:0 12px}\n .sg-bar:after{left:16px;right:16px}\n .sg-burger{display:flex}\n .sg-logo{justify-self:center}\n .sg-logo img{width:54px}\n .sg-nav,.sg-search{display:none}\n .sg-tools{gap:12px}\n .sg-ftr{padding:50px 20px 24px}\n .sg-ftr:before{left:20px;right:20px}\n .sg-ftr-cols{grid-template-columns:1fr 1fr}\n .sg-ftr-bot{flex-direction:column;gap:6px}\n .sg-cat-hd{padding:30px 20px 26px}\n .sg-cat-hd h1{font-size:42px}\n .sg-wall{padding:16px 16px 40px}\n .sg-bay{padding:22px 14px 0;margin-bottom:46px}\n .sg-bay:before{right:-8px;left:8px}\n .sg-row{grid-template-columns:1fr 1fr;gap:14px}\n .sg-card-tx{padding-top:24px;min-height:84px}\n .sg-card-nm{font-size:13px}\n .sg-card-act{opacity:1;transform:none;margin-top:-50px}\n .sg-card-ph:after{left:-8px;right:-8px}\n .sg-row .sg-card:first-child .sg-card-ph:after{right:-14px}.sg-row .sg-card:last-child .sg-card-ph:after{left:-14px}\n .sg-b-cart{display:none}\n .sg-b-gift{height:32px;padding:0 10px;font-size:12px}\n}\n@media (min-width:761px) and (max-width:1200px){\n .sg-util,.sg-bar{padding-left:32px;padding-right:32px}\n .sg-nav{gap:16px;font-size:13.5px}\n .sg-search{width:120px}\n .sg-wall,.sg-cat-hd,.sg-ftr{padding-left:32px;padding-right:32px}\n}\n/* product */\n.sg-pdp{padding:30px 72px 90px;background:linear-gradient(180deg,#F7F3EC,#F4EFE7)}\n.sg-pdp-grid{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);gap:70px;margin-top:22px;align-items:start}\n.sg-pdp-stage{position:relative}\n.sg-pdp-stage .sun,.sg-std-hd .sun{position:absolute;top:-80px;height:640px;background:linear-gradient(180deg,rgba(255,252,240,.85),rgba(255,250,236,0));transform:skewX(-28deg);filter:blur(10px);pointer-events:none}\n.sg-pdp-stage .s1{left:16%;width:120px}.sg-pdp-stage .s2{left:34%;width:50px}\n.sg-plinth{position:relative;padding:34px 40px 0;aspect-ratio:1/0.92}\n.sg-plinth .up{position:absolute;top:0;bottom:-6px;width:5px;background:var(--goldg);box-shadow:12px 8px 12px rgba(90,66,30,.10)}\n.sg-plinth .up.a{right:0}.sg-plinth .up.b{left:0}\n.sg-plinth .rail.t{position:absolute;top:0;left:0;right:0;height:5px;background:var(--goldh)}\n.sg-plinth .sg-glass{bottom:-18px}\n.sg-pdp-ph{position:relative;height:100%;display:flex;align-items:flex-end;justify-content:center;padding:6% 8% 0}\n.sg-pdp-ph img.main{position:relative;z-index:2;max-width:100%;max-height:100%;object-fit:contain;mix-blend-mode:multiply;transition:opacity .2s,transform .5s}\n.sg-pdp-ph img.main.sw{opacity:0;transform:translateY(8px)}\n.sg-pdp-ph img.rf{position:absolute;bottom:-100%;max-width:84%;max-height:100%;object-fit:contain;transform:scaleY(-1);opacity:.10;mix-blend-mode:multiply;-webkit-mask-image:linear-gradient(0deg,#000,transparent 18%);mask-image:linear-gradient(0deg,#000,transparent 18%);pointer-events:none}\n.sg-pdp.on .sg-halo{opacity:1}\n.sg-thumbs{display:flex;gap:12px;margin-top:46px;flex-wrap:wrap}\n.sg-thumbs button{width:76px;height:76px;padding:6px;border:1px solid var(--line)!important;background:#FBF8F3!important;display:flex;align-items:center;justify-content:center}\n.sg-thumbs button[aria-current]{border-color:var(--gold)!important}\n.sg-thumbs img{max-width:100%;max-height:100%;mix-blend-mode:multiply}\n.sg-pdp-info h1{font-size:50px;line-height:1.1}\n.sg-pdp-price{font-size:40px;margin-top:16px;color:#2A251F}\n.sg-pdp-desc{font-size:16.5px;line-height:1.85;color:var(--mut);margin:20px 0 0;max-width:560px}\n.sg-pdp-ups{margin-top:30px;padding:20px 22px;background:rgba(255,255,255,.5);border:1px solid rgba(168,132,63,.3)}\n.sg-ups h4,.sg-ups h3{font-family:'Noto Serif Hebrew',serif;font-stretch:87.5%;font-weight:350;font-size:20px;margin:0 0 12px;color:#8C6B33}\n.sg-ups *{font-family:'Noto Sans Hebrew',sans-serif!important;font-size:14.5px!important}\n.sg-ups table{display:inline-table;vertical-align:middle;margin-left:8px}\n.sg-ups img{width:40px!important;height:40px!important;object-fit:contain;mix-blend-mode:multiply}\n.sg-ups input[type=checkbox]{accent-color:#A8843F;width:17px;height:17px;vertical-align:middle;margin-left:8px}\n.sg-ups>div{padding:6px 0;border-bottom:1px solid var(--line)}\n.sg-ups>div:last-child{border-bottom:0}\n.sg-buy{margin-top:26px}\n.sg-buy *{font-family:'Noto Sans Hebrew',sans-serif!important}\n.sg-buy .sg-k-price{display:none!important}\n.sg-buy>*{display:flex!important;flex-wrap:wrap;align-items:center;gap:12px}\n.sg-buy input[type=number],.sg-buy input[type=text]{width:54px!important;height:48px!important;text-align:center;border:1px solid var(--line)!important;background:#FBF8F3!important;font-size:16px!important;border-radius:0!important}\n.sg-buy .sg-k-q{display:inline-flex!important;align-items:center;justify-content:center;width:40px;height:48px;border:1px solid var(--line);background:#FBF8F3;font-size:18px!important;cursor:pointer;user-select:none}\n.sg-buy .sg-k-add{display:inline-flex!important;align-items:center;justify-content:center;height:52px!important;padding:0 40px!important;background:#1E1B17!important;color:#F4EFE7!important;font-size:15px!important;font-weight:400!important;border:0!important;border-radius:0!important;cursor:pointer;min-width:220px;box-shadow:none!important;text-shadow:none!important}\n.sg-buy .sg-k-add:hover{background:#3A332B!important}\n.sg-buy .sg-k-buynow{font-size:14px!important;color:var(--ink)!important;border-bottom:1px solid var(--gold);background:none!important;padding:0 0 2px!important;height:auto!important;border-radius:0!important;box-shadow:none!important}\n.sg-pdp-gift{margin-top:14px;height:50px;padding:0 26px;border:1px solid rgba(168,132,63,.55)!important;background:rgba(255,255,255,.6)!important;font-size:15px;font-weight:400}\n.sg-pdp-gift .g-on{display:none}\n.sg-pdp.on .sg-pdp-gift{background:#F1E3C2!important;border-color:var(--gold)!important}\n.sg-pdp.on .sg-pdp-gift .g-on{display:inline}.sg-pdp.on .sg-pdp-gift .g-off{display:none}\n.sg-pdp-note{font-size:14px;color:var(--mut);margin:14px 0 0;line-height:1.7}\n.sg-pdp-note a{color:#8C6B33;border-bottom:1px solid rgba(168,132,63,.5)}\n.sg-pdp-ship{margin-top:26px;font-size:13.5px!important;color:var(--mut);line-height:1.7;border-top:1px solid var(--line);padding-top:16px}\n.sg-pdp-ship *{font-family:'Noto Sans Hebrew',sans-serif!important;font-size:13.5px!important;font-weight:300!important;color:var(--mut)!important}\n.sg-pdp-ship p{margin:0 0 6px}\n.sg-pdp-why{list-style:none;padding:0;margin:18px 0 0;display:flex;flex-wrap:wrap;gap:8px 22px;font-size:13.5px;font-weight:400}\n.sg-pdp-why li:before{content:\"\";display:inline-block;width:6px;height:6px;border-radius:50%;background:var(--gold);margin-left:8px;vertical-align:middle}\n.sg-pdp-why a{border-bottom:1px solid var(--line)}\n/* studio */\n.sg-std{background:linear-gradient(180deg,#F7F3EC,#F4EFE7);padding:0 72px 90px}\n.sg-std-hd{position:relative;overflow:hidden;padding:50px 0 20px}\n.sg-std-hd .s1{left:14%;width:120px}.sg-std-hd .s2{left:30%;width:50px}\n.sg-std-hd h1{font-size:72px;line-height:1.05;margin-top:12px;position:relative}\n.sg-std-sub{font-size:16px;color:var(--mut);margin:14px 0 0;position:relative}\n.sg-std-grid{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,1fr);gap:70px;align-items:start;margin-top:20px}\n.sg-std-stage{position:relative;padding-top:20px}\n.stg2{position:relative;aspect-ratio:1.3/1;--edge:rgba(150,122,70,.5);--rib:#D8C092;--ribg:linear-gradient(90deg,#C9AE7A,#F1E3C2 50%,#C9AE7A);--cf:rgba(255,255,255,.36);--cs:rgba(150,122,70,.45)}\n.stg2 .lyr{position:absolute;inset:0;transition:opacity .6s,transform .7s cubic-bezier(.2,.8,.2,1)}\n.w-box .cello-l{opacity:0;transform:scale(.94);pointer-events:none}\n.w-cello .box-l{opacity:0;transform:scale(1.04);pointer-events:none}\n.stg2 .floor{position:absolute;left:4%;right:4%;bottom:0;height:8%;border-radius:50%;background:radial-gradient(closest-side,rgba(80,60,30,.22),transparent)}\n.stg2 .bx-back,.stg2 .bx-front{position:absolute;left:8%;right:8%;bottom:6%;top:30%;border:1px solid var(--edge)}\n.stg2 .bx-back{background:linear-gradient(180deg,rgba(255,255,255,.30),rgba(255,255,255,.06))}\n.stg2 .bx-front{background:linear-gradient(112deg,transparent 22%,rgba(255,255,255,.40) 29%,transparent 37%),linear-gradient(112deg,transparent 56%,rgba(255,255,255,.16) 59%,transparent 64%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.35)}\n.stg2 .bx-lid{position:absolute;left:7%;right:7%;top:26%;height:5%;border:1px solid var(--edge);background:linear-gradient(180deg,rgba(255,255,255,.5),rgba(255,255,255,.22));z-index:6}\n.stg2 .rib-v{position:absolute;left:50%;width:3%;margin-left:-1.5%;top:26%;height:5%;background:var(--ribg);z-index:7}\n.stg2 .rib-h{position:absolute;left:7%;right:7%;top:27.4%;height:2.2%;background:var(--ribg);z-index:7}\n.stg2 .bow{position:absolute;width:22%;left:39%;top:12%;z-index:8;color:var(--rib);filter:drop-shadow(0 3px 4px rgba(0,0,0,.18))}\n.stg2 .cello-l .bow{top:16%;width:20%;left:40%}\n.stg2 .cel{position:absolute;left:6%;width:88%;top:0;height:96%}\n.stg2 .cel .cf{fill:var(--cf);stroke:var(--cs);stroke-width:1.2}\n.stg2 .cel .cs{stroke:var(--cs);stroke-width:1}\n.stg2 .cel .cw{stroke:rgba(255,255,255,.75);stroke-width:3;stroke-linecap:round}\n.stg2 .pieces{position:absolute;left:12%;right:12%;bottom:8%;top:34%;display:flex;flex-wrap:wrap-reverse;align-content:flex-start;align-items:flex-end;justify-content:center;gap:2% 1%;transition:transform .7s}\n.w-cello .pieces{transform:scale(.8);transform-origin:50% 100%}\n.stg2 .sp{max-height:62%;object-fit:contain;mix-blend-mode:multiply;animation:sgDrop .8s calc(var(--i)*90ms) cubic-bezier(.2,.8,.25,1.08) both}\n.stg2 .sp.cut{mix-blend-mode:normal;filter:drop-shadow(10px 8px 8px rgba(90,66,30,.16))}\n@keyframes sgDrop{from{opacity:0;transform:translateY(-80px)}to{opacity:1;transform:none}}\n.sg-std-empty{margin:auto;color:var(--mut);font-size:15px}\n.sg-std-table{position:relative;height:60px;margin:-6px 4% 0}\n.sg-std-table .sg-glass{top:0;bottom:auto}\n.sg-std-table .leg{position:absolute;top:14px;width:5px;height:46px;background:var(--goldg)}\n.sg-std-table .leg.a{right:0}.sg-std-table .leg.b{left:0}\n.sg-seg{display:inline-flex;border:1px solid rgba(168,132,63,.45)}\n.sg-seg button{height:46px;padding:0 24px;font-size:14px!important;font-weight:400!important;transition:all .3s}\n.sg-seg button[aria-pressed=\"true\"]{background:#1E1B17!important;color:#F4EFE7!important}\n.sg-std-list{list-style:none;padding:0;margin:24px 0 0;border-top:1px solid var(--ink)}\n.sg-std-list li{display:grid;grid-template-columns:52px 1fr auto 32px;gap:14px;align-items:center;padding:10px 0;border-bottom:1px solid var(--line);font-size:14.5px;font-weight:400}\n.sg-std-list img{width:52px;height:52px;object-fit:contain;mix-blend-mode:multiply}\n.sg-std-list .num{font-size:17px}\n.sg-std-list button{width:32px;height:32px;font-size:18px!important;color:var(--mut)}\n.sg-std-tot{display:flex;justify-content:space-between;align-items:baseline;padding:18px 0 6px;font-weight:400}\n.sg-std-tot .num{font-size:40px;font-weight:250}\n.sg-std-note-l{display:block;margin-top:20px;font-size:13px;font-weight:500;color:var(--gold)}\n#sg-note{width:100%;margin-top:8px;border:1px solid var(--line);background:#FBF8F3;font:inherit;font-size:15px;padding:12px;resize:vertical}\n.sg-std-go{margin-top:18px;width:100%;height:56px;background:#1E1B17!important;color:#F4EFE7!important;font-size:16px!important;font-weight:400!important}\n.sg-std-go[disabled]{opacity:.4;cursor:default}\n.sg-std-msg{font-size:14px;margin:12px 0 0;min-height:20px}\n.sg-std-msg a{color:#8C6B33;border-bottom:1px solid currentColor}\n.sg-std-fine{font-size:12.5px;color:var(--mut);margin:8px 0 0;line-height:1.6}\n.sg-std-more{display:inline-block;margin-top:18px;font-size:14px;font-weight:400;border-bottom:1px solid var(--gold)}\n@media (max-width:760px){\n .sg-pdp{padding:18px 16px 60px}\n .sg-pdp-grid,.sg-std-grid{grid-template-columns:1fr;gap:40px}\n .sg-plinth{padding:20px 22px 0}\n .sg-pdp-info h1{font-size:32px}\n .sg-pdp-price{font-size:32px}\n .sg-buy .sg-k-add{min-width:0;flex:1}\n .sg-std{padding:0 16px 60px}\n .sg-std-hd h1{font-size:44px}\n}\n/* fixes after live check */\nhtml.sg2 body{font-size:0;color:transparent}\n.sg-root{font-size:16px;color:var(--ink)}\n.sg-pdp-ph img.rf{display:none}\n.sg-plinth{padding:24px 28px 0;overflow:hidden}\n.sg-pdp-ph{padding:4% 4% 0}\n.sg-pdp-ph img.main{width:100%;height:100%;object-fit:contain}\n.sg-ups *,.sg-buy *{float:none!important;position:static!important;max-width:100%;box-sizing:border-box}\n.sg-ups>*{width:auto!important;height:auto!important;margin:0!important}\n.sg-ups>div{display:flex!important;align-items:center;gap:10px;padding:10px 0!important;border-bottom:1px solid var(--line)}\n.sg-ups>div>*{width:auto!important;height:auto!important;margin:0!important;display:inline-flex!important;align-items:center;gap:10px;font-weight:400!important;color:var(--ink)!important;background:none!important;border:0!important;flex:none}\n.sg-ups>div>*:last-child,.sg-ups>div span{margin-right:auto!important}\n.sg-ups h4,.sg-ups h3{display:block!important;border:0!important;background:none!important;padding:0!important;text-align:right}\n.sg-ups table,.sg-ups tbody,.sg-ups tr,.sg-ups td{display:inline-block!important;width:auto!important;padding:0!important;border:0!important}\n.sg-buy>*{width:auto!important;height:auto!important;margin:0!important;padding:0!important;background:none!important;border:0!important}\n.sg-buy>*>*{display:inline-flex!important;align-items:center;gap:0;width:auto!important;margin:0!important;visibility:visible!important;opacity:1!important}\n.sg-buy .sg-k-add{width:auto!important;white-space:nowrap;overflow:visible!important;text-indent:0!important}\n.sg-buy .sg-k-add *{display:inline!important;color:inherit!important;font-size:inherit!important}\n.sg-buy .sg-k-add *+*{display:none!important}\n.sg-buy .sg-k-buynow{display:inline-block!important;border:0!important;border-bottom:1px solid var(--gold)!important;font-weight:400!important}\n@media (min-width:761px) and (max-width:1200px){.sg-pdp{padding-left:32px;padding-right:32px}.sg-pdp-grid{gap:40px}.sg-pdp-info h1{font-size:40px}}\n\n/* ================= v3: typography system ================= */\n.sg-root{--ink:#1B1814;--mut:#5A5147;--gold:#9A7633;--goldt:#7E5F24;font-family:'Assistant',system-ui,sans-serif;font-weight:400;font-size:17px;line-height:1.55;color:var(--ink)}\n.sg-root .disp,.sg-root h1,.sg-root h2{font-family:'Noto Serif Hebrew',serif;font-stretch:normal;font-weight:500;letter-spacing:0}\n.sg-root .num{font-family:'Assistant',sans-serif;font-stretch:normal;font-weight:700;font-variant-numeric:lining-nums}\n.sg-root .cur{font-family:inherit;font-weight:inherit;font-size:.85em}\n.sg-root .kick{font-size:14px;font-weight:700;color:var(--goldt);letter-spacing:.02em}\n.sg-nav{font-size:16px;font-weight:600;gap:24px}\n.sg-nav-studio{color:var(--goldt)}\n.sg-util{font-size:13.5px;color:var(--mut)}.sg-util a{font-weight:600;color:var(--ink)}\n.sg-gift,.sg-cart{font-size:16px;font-weight:600}\n.sg-gift b,.sg-cart b{font-family:'Assistant',sans-serif;font-weight:800;font-size:13px;min-width:22px;height:22px;border-radius:11px;background:var(--ink);color:#fff;display:inline-flex;align-items:center;justify-content:center;padding:0 6px}\n.sg-gift.has b{background:var(--gold);color:#fff}\n.sg-search{width:240px;height:44px;border:1px solid #CFC3B0;background:#fff;padding-right:12px}\n.sg-search input{font-size:15.5px}\n.sg-search input::placeholder{color:#857A6C}\n.sg-msearch{display:none}\n.sg-drawer a{font-size:17px;font-weight:600}\n.sg-ftr h3{font-size:14px;font-weight:700;color:var(--goldt)}\n.sg-ftr-cols a,.sg-ftr-cols p{font-size:15.5px;color:#3E372F}\n.sg-ftr-tag{font-weight:500;font-stretch:normal;font-size:22px;color:var(--goldt)}\n.sg-ftr-bot{font-size:14px}\n.sg-toast{font:600 15px 'Assistant',Arial,sans-serif}\n.sg-cat-hd h1{font-size:58px;font-weight:500}\n.sg-crumbs{font-size:14.5px}\n.sg-cat-meta{font-size:15.5px;color:var(--mut)}\n.sg-sorts a{font-weight:600}\n.sg-ranges a{font-size:14.5px;font-weight:600}\n.sg-card-nm{font-size:16px;line-height:1.45;font-weight:500}\n.sg-card-pr .num{font-size:19px}\n.sg-b-cart,.sg-b-gift{font-size:14.5px;font-weight:700;height:40px}\n.sg-more{font-size:16px!important;font-weight:700!important}\n.sg-pdp-info h1{font-size:44px;line-height:1.2}\n.sg-pdp-price{font-size:34px;font-family:'Assistant',sans-serif!important;font-weight:700!important}\n.sg-pdp-desc{font-size:17.5px;color:#3E372F}\n.sg-ups *,.sg-buy *{font-family:'Assistant',sans-serif!important}\n.sg-ups h4,.sg-ups h3{font-family:'Noto Serif Hebrew',serif!important;font-weight:500!important;font-size:20px!important}\n.sg-ups *{font-size:16px!important}\n.sg-buy .sg-k-add{font-size:17px!important;font-weight:700!important}\n.sg-buy .sg-k-buynow{font-size:16px!important;font-weight:600!important}\n.sg-pdp-gift{font-size:16px;font-weight:700}\n.sg-pdp-note,.sg-pdp-why{font-size:15.5px}\n.sg-pdp-ship,.sg-pdp-ship *{font-size:15px!important;font-weight:400!important}\n.sg-std-hd h1{font-weight:500}\n.sg-std-sub{font-size:17px}\n.sg-std-list li{font-size:16px;font-weight:500}\n.sg-std-tot .num{font-weight:700;font-size:34px}\n.sg-seg button{font-size:16px!important;font-weight:600!important}\n.sg-std-go{font-size:17px!important;font-weight:700!important}\n/* floating WhatsApp */\n.sg-wa{position:fixed;left:18px;bottom:18px;z-index:9999;width:56px;height:56px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 24px -8px rgba(0,0,0,.45)}\n/* ================= v3: home ================= */\n.sx{background:#F6F1E9}\n.sx-strip{display:none}\n.sx-hd{display:flex;justify-content:space-between;align-items:flex-end;gap:20px;margin-bottom:26px}\n.sx-h2{font-size:40px;line-height:1.15;margin:0}\n.sx-kick{font-size:14px;font-weight:700;color:var(--goldt);margin:0;letter-spacing:.02em}\n.sx-help{margin:0;font-size:15.5px;color:var(--mut)}\n.sx-plus-i{display:inline-flex;width:22px;height:22px;border-radius:50%;background:var(--ink);color:#fff;align-items:center;justify-content:center;font-size:14px;vertical-align:-4px}\n.sx-more{font-size:16px;font-weight:700;color:var(--goldt);border-bottom:1px solid currentColor;white-space:nowrap}\n.sx-btn{display:inline-flex;align-items:center;justify-content:center;height:54px;padding:0 30px;background:var(--ink);color:#FBF8F3!important;font-size:17px;font-weight:700;border:1px solid var(--ink)}\n.sx-btn:hover{background:#3A332B}\n.sx-btn.ghost{background:transparent;color:var(--ink)!important;border-color:var(--gold)}\n.sx-btn.ghost:hover{background:#FBF4E4}\n/* hero */\n.sx-hero{position:relative;overflow:hidden;text-align:center;padding:54px 72px 40px;background:linear-gradient(180deg,#FAF6EF,#F6F1E9)}\n.sx-hero .sun{position:absolute;top:-80px;height:520px;background:linear-gradient(180deg,rgba(255,250,232,.9),rgba(255,250,236,0));transform:skewX(-28deg);filter:blur(10px);pointer-events:none}\n.sx-hero .s1{left:14%;width:130px}.sx-hero .s2{left:28%;width:60px}\n.sx-h1{position:relative;font-size:62px;line-height:1.1;margin:14px 0 0;color:var(--ink)}\n.sx-lead{position:relative;max-width:720px;margin:18px auto 0;font-size:19px;line-height:1.65;color:#3E372F}\n.sx-ctas{position:relative;display:flex;gap:14px;justify-content:center;margin-top:28px;flex-wrap:wrap}\n.sx-trust{position:relative;list-style:none;padding:0;margin:26px 0 0;display:flex;justify-content:center;flex-wrap:wrap;gap:8px 26px;font-size:15.5px;font-weight:600;color:#3E372F}\n.sx-trust li:before{content:\"\";display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--gold);margin-left:9px;vertical-align:2px}\n/* etagere */\n.sx-shelf{padding:40px 72px 80px}\n.sx-et{position:relative;padding:0 14px;filter:drop-shadow(0 30px 40px rgba(90,66,30,.08))}\n.sx-et:before,.sx-et:after{content:\"\";position:absolute;top:-14px;bottom:-24px;width:7px;background:var(--goldg);box-shadow:10px 6px 12px rgba(90,66,30,.14);z-index:3}\n.sx-et:before{right:0}.sx-et:after{left:0}\n.sx-row{position:relative;display:grid;grid-template-columns:1.25fr 1fr 1.1fr .95fr;padding-top:14px}\n.sx-row.r1{grid-template-columns:.95fr 1.2fr 1fr 1.15fr}\n.sx-row:first-child{border-top:6px solid transparent;border-image:linear-gradient(180deg,#8E6C33,#ECD8A2 40%,#B48F4C 70%,#8A6831) 1}\n.sx-bay{position:relative;padding:12px 18px 0;display:flex;flex-direction:column}\n.sx-bay+.sx-bay:before{content:\"\";position:absolute;right:-3px;top:-14px;bottom:-18px;width:5px;background:var(--goldg);z-index:2;box-shadow:8px 4px 10px rgba(90,66,30,.1)}\n.sx-row.r1 .sx-bay:nth-child(2):before,.sx-row.r0 .sx-bay:nth-child(3):before{top:40px}\n.sx-plq{display:inline-flex;flex-direction:column;align-self:flex-start;padding:7px 14px 8px;background:linear-gradient(180deg,#FFFDF8,#F6EEDD);border:1px solid rgba(154,118,51,.45);box-shadow:0 6px 14px -10px rgba(90,66,30,.5);position:relative;z-index:4}\n.sx-plq b{font-family:'Noto Serif Hebrew',serif;font-weight:600;font-size:20px;line-height:1.2}\n.sx-plq span{font-size:13.5px;font-weight:700;color:var(--goldt)}\n.sx-plq:hover{border-color:var(--gold);background:#FFF9EA}\n.sx-its{display:flex;gap:16px;justify-content:space-around;margin-top:8px}\n.sx-it{position:relative;flex:1 1 0;min-width:0;display:flex;flex-direction:column;align-items:center;text-align:center}\n.sx-it .ph{position:relative;width:100%;height:172px;display:flex;align-items:flex-end;justify-content:center;padding:6px 4px 0}\n.sx-it .ph img{position:relative;z-index:2;max-width:100%;max-height:100%;object-fit:contain;mix-blend-mode:multiply;transition:transform .5s cubic-bezier(.2,.7,.2,1)}\n.sx-it .ph:hover img{transform:translateY(-6px)}\n.sx-it .halo{position:absolute;inset:10% -12% 0;background:radial-gradient(50% 55% at 50% 100%,rgba(255,232,180,.9),transparent 70%);opacity:0;transition:opacity .5s}\n.sx-it.on .halo{opacity:1}\n.sx-it.sk .ph{background:linear-gradient(90deg,#EFE7DA,#F7F1E7,#EFE7DA);background-size:200% 100%;animation:sxSk 1.4s infinite;margin-bottom:0}\n@keyframes sxSk{to{background-position:-200% 0}}\n.sx-it .nm{margin-top:30px;font-size:15px;font-weight:600;line-height:1.35;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;min-height:2.7em;color:var(--ink)}\n.sx-it .nm:hover{color:var(--goldt)}\n.sx-it .pr{font-size:17px;font-weight:800;margin:2px 0 14px}\n.sx-plus{position:absolute;top:8px;left:0;z-index:5;width:38px;height:38px;border-radius:50%;background:#FFFDF8!important;border:1.5px solid var(--gold)!important;color:var(--ink)!important;font-size:18px!important;font-weight:700!important;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 14px -8px rgba(60,40,10,.5);transition:transform .2s}\n.sx-plus:hover{transform:scale(1.08)}\n.sx-it.on .sx-plus,.sx-plus[aria-pressed=\"true\"]{background:var(--gold)!important;color:#fff!important}\n.sx-glass{position:absolute;left:-14px;right:-14px;top:calc(12px + 52px + 8px + 172px + 14px);height:18px;z-index:1;pointer-events:none}\n.sx-glass:before{content:\"\";position:absolute;left:0;right:0;top:0;height:12px;background:linear-gradient(180deg,rgba(255,255,255,.2),rgba(220,236,230,.7));border-top:1px solid #fff}\n.sx-glass i{position:absolute;left:0;right:0;top:12px;height:6px;background:var(--goldh);box-shadow:0 12px 16px -6px rgba(80,60,30,.35)}\n.sx-glass:after{content:\"\";position:absolute;left:0;right:0;top:18px;height:30px;background:linear-gradient(180deg,rgba(80,60,30,.10),transparent)}\n.sx-row:last-child:after{content:\"\";position:absolute;left:-14px;right:-14px;bottom:-6px;height:6px;background:var(--goldh)}\n/* featured rail */\n.sx-feat{padding:70px 72px 60px;background:#FBF8F3;border-top:1px solid #E6DCCB;border-bottom:1px solid #E6DCCB}\n.sx-rail{display:grid;grid-auto-flow:column;grid-auto-columns:calc((100% - 4*22px)/5);gap:22px;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:10px}\n.sx-fc{scroll-snap-align:start;display:flex;flex-direction:column;background:#fff;border:1px solid #E6DCCB;padding:14px 14px 16px}\n.sx-fc .ph{display:flex;align-items:center;justify-content:center;aspect-ratio:1/1;background:#fff}\n.sx-fc .ph img{max-width:100%;max-height:100%;object-fit:contain}\n.sx-fc.sk .ph{background:linear-gradient(90deg,#EFE7DA,#F7F1E7,#EFE7DA);background-size:200% 100%;animation:sxSk 1.4s infinite}\n.sx-fc .nm{margin-top:12px;font-size:16px;font-weight:600;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;min-height:2.8em}\n.sx-fc .pr{font-size:19px;font-weight:800;margin-top:4px}\n.sx-fc .act{display:flex;gap:8px;margin-top:12px}\n.sx-cart,.sx-g2{flex:1;height:44px;font-size:15px!important;font-weight:700!important;white-space:nowrap}\n.sx-cart{background:var(--ink)!important;color:#fff!important}\n.sx-cart.done{background:#4E6E47!important}\n.sx-g2{border:1.5px solid var(--gold)!important;background:#FFFDF8!important;color:var(--ink)!important;flex:.8}\n.sx-fc.on .sx-g2{background:var(--gold)!important;color:#fff!important}\n.sx-occ{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-top:30px}\n.sx-occ span{font-weight:700;font-size:16px;margin-left:6px}\n.sx-occ a{height:42px;display:inline-flex;align-items:center;padding:0 18px;border:1px solid #D8CBB5;background:#fff;font-size:15.5px;font-weight:600;border-radius:21px}\n.sx-occ a:hover{border-color:var(--gold);background:#FFF9EA}\n/* studio teaser */\n.sx-studio{display:grid;grid-template-columns:1.2fr 1fr;gap:60px;align-items:center;padding:80px 72px;background:linear-gradient(180deg,#F6F1E9,#F1EADF)}\n.sx-steps{list-style:none;padding:0;margin:26px 0 0;display:grid;gap:14px}\n.sx-steps li{display:flex;gap:16px;align-items:center;font-size:18px;font-weight:500}\n.sx-steps b{flex:none;width:40px;height:40px;border-radius:50%;border:1.5px solid var(--gold);display:flex;align-items:center;justify-content:center;font-weight:800;color:var(--goldt)}\n.sx-stu-box{background:#FFFDF8;border:1px solid rgba(154,118,51,.4);padding:28px;box-shadow:0 30px 50px -36px rgba(80,60,30,.45);text-align:center}\n.sx-stu-ims{display:flex;justify-content:center;align-items:flex-end;gap:6px;height:110px}\n.sx-stu-ims img{max-height:100%;max-width:19%;object-fit:contain;mix-blend-mode:multiply}\n.sx-stu-sum{display:flex;justify-content:space-between;align-items:baseline;font-size:17px;font-weight:600;border-top:1px solid #E6DCCB;padding-top:14px;margin:16px 0}\n.sx-stu-sum b{font-size:26px;font-weight:800}\n.sx-stu-empty{font-size:17px;color:var(--mut);margin:0 0 18px}\n.sx-stu-box .sx-btn{width:100%}\n/* departments grid */\n.sx-depts{padding:80px 72px}\n.sx-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:18px}\n.sx-dc{position:relative;display:flex;flex-direction:column;background:#fff;border:1px solid #E6DCCB;transition:border-color .3s,box-shadow .3s}\n.sx-dc:hover{border-color:var(--gold);box-shadow:0 20px 34px -24px rgba(80,60,30,.5)}\n.sx-dc .ph{aspect-ratio:1/0.85;display:flex;align-items:center;justify-content:center;padding:14px;background:linear-gradient(180deg,#FBF8F3,#F3ECE1)}\n.sx-dc .ph:empty{background:linear-gradient(90deg,#EFE7DA,#F7F1E7,#EFE7DA);background-size:200% 100%;animation:sxSk 1.4s infinite}\n.sx-dc .ph img{max-width:100%;max-height:100%;object-fit:contain;mix-blend-mode:multiply;transition:transform .5s}\n.sx-dc:hover .ph img{transform:scale(1.04)}\n.sx-dc .tx{display:flex;flex-direction:column;padding:14px 16px 16px;border-top:3px solid transparent;border-image:linear-gradient(90deg,#8E6C33,#E8D49C 32%,#B48F4C 58%,#E6CD8E 80%,#8A6831) 1}\n.sx-dc b{font-family:'Noto Serif Hebrew',serif;font-weight:600;font-size:21px;line-height:1.25}\n.sx-dc small{font-size:14px;color:var(--mut);margin-top:3px}\n.sx-dc .ar{position:absolute;left:14px;bottom:16px;color:var(--goldt);font-weight:800;font-size:18px}\n/* service */\n.sx-svc{display:grid;grid-template-columns:repeat(4,1fr);gap:0;border-top:1px solid #E6DCCB;background:#FBF8F3}\n.sx-svc>div{padding:26px 28px;border-left:1px solid #E6DCCB;display:flex;flex-direction:column;gap:4px}\n.sx-svc>div:last-child{border-left:0}\n.sx-svc b{font-size:17px;font-weight:700}.sx-svc span{font-size:15px;color:var(--mut)}\n.sx-svc a{border-bottom:1px solid var(--gold)}\n@media (min-width:761px) and (max-width:1200px){\n .sx-hero,.sx-shelf,.sx-feat,.sx-studio,.sx-depts{padding-left:32px;padding-right:32px}\n .sx-it .ph{height:140px}\n .sx-glass{top:calc(12px + 52px + 8px + 140px + 14px)}\n .sx-rail{grid-auto-columns:calc((100% - 2*22px)/3)}\n .sx-grid{grid-template-columns:repeat(4,minmax(0,1fr))}\n .sx-svc{grid-template-columns:1fr 1fr}\n .sg-search{width:170px}\n .sg-nav{font-size:15px;gap:14px}\n}\n@media (max-width:760px){\n .sg-root{font-size:16.5px}\n .sg-msearch{display:flex;width:auto;margin:0 12px 10px;height:46px}\n .sg-msearch input{font-size:16px}\n .sg-gift,.sg-cart{font-size:15px}\n .sg-wa{width:52px;height:52px;left:12px;bottom:14px}\n .sx-strip{display:flex;gap:14px;overflow-x:auto;padding:6px 12px 14px;scrollbar-width:none;background:#F6F1E9}\n .sx-strip::-webkit-scrollbar{display:none}\n .sx-strip a{flex:none;width:74px;display:flex;flex-direction:column;align-items:center;gap:6px;text-align:center}\n .sx-strip .th{width:66px;height:66px;border-radius:50%;background:#fff;border:2px solid #D9C49B;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px}\n .sx-strip .th img{max-width:100%;max-height:100%;object-fit:contain;mix-blend-mode:multiply}\n .sx-strip .t{font-size:13.5px;font-weight:700;line-height:1.2}\n .sx-hero{padding:26px 18px 24px}\n .sx-h1{font-size:38px}\n .sx-lead{font-size:17px}\n .sx-ctas{flex-direction:column;align-items:stretch;gap:10px}\n .sx-btn{height:52px;font-size:17px}\n .sx-trust{flex-direction:column;align-items:center;gap:6px;font-size:15px}\n .sx-shelf{padding:26px 12px 50px}\n .sx-hd{flex-direction:column;align-items:flex-start;gap:8px;margin-bottom:18px}\n .sx-h2{font-size:30px}\n .sx-help{font-size:15px}\n .sx-et{padding:0 8px}\n .sx-et:before,.sx-et:after{width:5px}\n .sx-row,.sx-row.r1,.sx-row.r2,.sx-row.r3{grid-template-columns:1.1fr 1fr}\n .sx-row.r1,.sx-row.r3{grid-template-columns:1fr 1.1fr}\n .sx-bay{padding:10px 10px 0}\n .sx-plq{padding:5px 10px 6px}\n .sx-plq b{font-size:17px}\n .sx-plq span{font-size:12.5px}\n .sx-it .ph{height:132px}\n .sx-glass{left:-8px;right:-8px;top:calc(10px + 46px + 8px + 132px + 14px)}\n .sx-row:last-child:after{left:-8px;right:-8px}\n .sx-row.r1 .sx-bay:nth-child(2):before,.sx-row.r0 .sx-bay:nth-child(3):before{top:-14px}\n .sx-row.r1 .sx-bay:nth-child(2):before,.sx-row.r3 .sx-bay:nth-child(2):before{top:30px}\n .sx-it .nm{font-size:14.5px;margin-top:28px}\n .sx-it .pr{font-size:16.5px}\n .sx-plus{width:40px;height:40px;top:4px;left:-2px}\n .sx-feat{padding:44px 12px 40px}\n .sx-rail{grid-auto-columns:72%;gap:12px}\n .sx-occ a{height:44px}\n .sx-studio{grid-template-columns:1fr;gap:26px;padding:50px 16px}\n .sx-steps li{font-size:16.5px}\n .sx-depts{padding:50px 12px}\n .sx-grid{grid-template-columns:1fr 1fr;gap:10px}\n .sx-dc b{font-size:18px}\n .sx-dc small{font-size:13px}\n .sx-dc .ar{display:none}\n .sx-svc{grid-template-columns:1fr}\n .sx-svc>div{border-left:0;border-bottom:1px solid #E6DCCB;padding:18px 18px}\n .sg-cat-hd h1{font-size:38px}\n .sg-pdp-info h1{font-size:30px}\n .sg-pdp-price{font-size:30px}\n .sg-card-nm{font-size:15px}\n .sg-b-gift{font-size:13.5px;height:36px}\n}\n\n.sx-fc .ph,.sx-dc .ph{position:relative;overflow:hidden}\n.sx-fc .ph img,.sx-dc .ph img{position:absolute;inset:10px;width:calc(100% - 20px);height:calc(100% - 20px);max-width:none;max-height:none;object-fit:contain}\n.sx-dc .ph{aspect-ratio:1/0.8}\n.sx-plus{top:128px}\n@media (min-width:761px) and (max-width:1200px){.sx-plus{top:98px}}\n@media (max-width:760px){.sx-plus{top:88px}.sx-rail{grid-auto-columns:62%}.sx-trust{flex-direction:row;flex-wrap:wrap;gap:6px 16px;font-size:14.5px}.sx-hero{padding-bottom:18px}}\n\n/* v3.1: real catalogue photos — shown as framed tiles standing on the glass */\n.sx-it .phw{position:relative;width:min(100%,168px);margin:6px auto 0}\n.sx-it .ph{display:block;width:100%;height:auto;aspect-ratio:1/1;padding:0;background:#fff;border:1px solid #E3D8C6;box-shadow:0 14px 22px -14px rgba(70,50,20,.45),0 2px 0 rgba(255,255,255,.8) inset;overflow:hidden}\n.sx-it .ph img{width:100%;height:100%;max-width:none;max-height:none;object-fit:cover;mix-blend-mode:normal}\n.sx-it .ph:hover img{transform:scale(1.05)}\n.sx-it .halo{inset:-14% -18% -6%;z-index:0}\n.sx-it.sk .phw{height:auto}.sx-it.sk .ph{aspect-ratio:1/1}\n.sx-plus{top:auto;bottom:-14px;left:-10px}\n@media (min-width:761px) and (max-width:1200px){.sx-plus{top:auto}}\n@media (max-width:760px){.sx-plus{top:auto;bottom:-12px;left:-8px}.sx-it .phw{width:min(100%,150px)}}\n.sx-it .nm{margin-top:32px}\n.sx-fc .ph img,.sx-dc .ph img{inset:0;width:100%;height:100%;object-fit:cover}\n.sx-fc .ph{padding:0}.sx-dc .ph{padding:0}\n.sx-strip .th{padding:0}.sx-strip .th img{width:100%;height:100%;object-fit:cover;mix-blend-mode:normal}\n\n/* v3.1: product purchase controls (drive Konimbo's own form) */\n.sg-pdp-ups{padding:18px 20px}\n.sg-pdp-ups h3{font-family:'Noto Serif Hebrew',serif;font-weight:500;font-size:20px;margin:0 0 12px;color:var(--goldt)}\n.sg-up-l{display:grid;gap:8px}\n.sg-up{display:grid;grid-template-columns:22px 48px 1fr auto;gap:12px;align-items:center;padding:8px 10px;background:#fff;border:1px solid #E3D8C6;cursor:pointer;font-size:16px;font-weight:500}\n.sg-up:hover{border-color:var(--gold)}\n.sg-up input{width:20px;height:20px;accent-color:#9A7633;margin:0}\n.sg-up img,.sg-up .noim{width:48px;height:48px;object-fit:cover;background:#F3ECE1}\n.sg-up .p{font-weight:800;white-space:nowrap}\n.sg-buy{display:flex;flex-wrap:wrap;gap:10px;align-items:stretch;margin-top:22px}\n.sg-qty{display:inline-flex;border:1px solid #CFC3B0;background:#fff;height:56px}\n.sg-qty button{width:46px;font-size:22px!important;font-weight:600!important}\n.sg-qty input{width:52px;border:0;border-left:1px solid #E3D8C6;border-right:1px solid #E3D8C6;text-align:center;font:700 18px 'Assistant',sans-serif;-moz-appearance:textfield}\n.sg-qty input::-webkit-inner-spin-button{-webkit-appearance:none}\n.sg-add{flex:1;min-width:200px;height:56px;background:#1B1814!important;color:#fff!important;font-size:18px!important;font-weight:700!important}\n.sg-add:hover{background:#3A332B!important}.sg-add.done{background:#4E6E47!important}\n.sg-now{height:56px;padding:0 24px;border:1.5px solid #1B1814!important;font-size:17px!important;font-weight:700!important;background:#fff!important}\n.sg-pdp-gift{width:100%;height:52px;margin-top:10px}\n@media (max-width:760px){.sg-add{min-width:0}.sg-now{width:100%}}\n\n/* Konimbo mini-cart, shown on top of the new design */\n.sg-mini{position:fixed!important;top:90px!important;left:24px!important;right:auto!important;z-index:100000!important;width:min(420px,calc(100vw - 24px))!important;max-height:calc(100vh - 120px);overflow:auto;background:#fff!important;border:1px solid #D8CBB5!important;box-shadow:0 30px 60px -20px rgba(0,0,0,.45)!important;direction:rtl;font-size:15px!important;color:#1B1814!important}\n.sg-mini *{font-family:'Assistant',Arial,sans-serif!important}\n\n@media (max-width:760px){.sg-mini{top:70px!important;left:12px!important}}\n/* v3.4: every photo stands on one line regardless of bay width */\n.sx-it .phw{height:168px;width:100%;display:flex;align-items:flex-end;justify-content:center;margin:6px 0 0}\n.sx-it .ph{width:min(100%,168px);flex:none}\n.sx-it .sx-plus{left:calc(50% - min(50%,84px) - 10px)}\n.sx-it .nm{position:relative;z-index:2}\n@media (min-width:761px) and (max-width:1200px){.sx-it .phw{height:136px}.sx-it .ph{width:min(100%,136px)}.sx-it .sx-plus{left:calc(50% - min(50%,68px) - 10px)}}\n@media (max-width:760px){.sx-it .phw{height:140px}.sx-it .ph{width:min(100%,140px)}.sx-it .sx-plus{left:calc(50% - min(50%,70px) - 8px)}}\n\n.sg-mini{display:block!important;visibility:visible!important;opacity:1!important;transform:none!important;padding:14px!important}\n";document.head.appendChild(s);})();
/* Home v3 — a varied shop window on gold-and-glass shelves, built from the store's real departments and products.
   Two equal paths: tap a product to buy it as usual, or press ＋ to collect it into a gift box. */
(function () {
  var W = window, D = document;
  var DEP = {
    baby: ['תינוקות', '/423383-%D7%AA%D7%99%D7%A0%D7%95%D7%A7%D7%95%D7%AA', 'לידה, ברית ומתנות לתינוק'],
    textile: ['טקסטיל לבית', '/422581-%D7%98%D7%A7%D7%A1%D7%98%D7%99%D7%9C-%D7%9C%D7%91%D7%99%D7%AA-', 'מצעים, מגבות ומפות'],
    home: ['כלי בית', '/422574-%D7%9B%D7%9C%D7%99-%D7%91%D7%99%D7%AA', 'הגשה, אירוח ומטבח'],
    acc: ['אקססוריז לבית', '/422499-%D7%90%D7%A7%D7%A1%D7%A1%D7%95%D7%A8%D7%99%D7%96-%D7%9C%D7%91%D7%99%D7%AA', 'מפיצי ריח, נרות ועיצוב'],
    judaica: ['יודאיקה', '/422573-%D7%99%D7%95%D7%93%D7%90%D7%99%D7%A7%D7%94', 'שבת, הבדלה ונטלות'],
    toys: ['משחקים', '/422285-%D7%9E%D7%A9%D7%97%D7%A7%D7%99%D7%9D', 'לילדים ולכל המשפחה'],
    gifts: ['מתנות מעוצבות', '/422536-%D7%9E%D7%AA%D7%A0%D7%95%D7%AA-%D7%9E%D7%A2%D7%95%D7%A6%D7%91%D7%95%D7%AA', 'מארזים מוכנים לשליחה'],
    him: ['לגבר ולאישה', '/422488-%D7%9C%D7%92%D7%91%D7%A8-%D7%95%D7%9C%D7%90%D7%99%D7%A9%D7%94', 'אקססוריז אישיים'],
    holidays: ['חגים', '/422572-%D7%97%D7%92%D7%99%D7%9D', 'לכל חג ומועד'],
    catering: ['קייטרינג בוטיק', '/403465-%D7%A7%D7%99%D7%99%D7%98%D7%A8%D7%99%D7%A0%D7%92-%D7%91%D7%95%D7%98%D7%99%D7%A7', 'עיצוב כיבוד לאירועים']
  };
  var SHELF = ['baby', 'textile', 'home', 'acc', 'judaica', 'toys', 'gifts', 'him'];
  var ALL = ['home', 'textile', 'baby', 'judaica', 'acc', 'gifts', 'toys', 'him', 'holidays', 'catering'];
  var CK = 'sg_home3b', TTL = 6 * 3600e3;

  W.SGHome = function (root) {
    var S = W.SG, St = S.Store, esc = S.esc, fmt = S.fmt;
    var data = {}, mob = W.innerWidth <= 760;
    try { var c = JSON.parse(localStorage.getItem(CK) || 'null'); if (c && Date.now() - c.t < TTL) data = c.d || {}; } catch (e) {}
    var m = D.createElement('main'); m.className = 'sx'; m.id = 'sg-main';
    root.appendChild(m);

    m.innerHTML =
      '<nav class="sx-strip" aria-label="מחלקות">' + ALL.map(function (k) { return '<a href="' + DEP[k][1] + '" data-k="' + k + '"><span class="th"></span><span class="t">' + DEP[k][0] + '</span></a>'; }).join('') + '</nav>' +
      '<section class="sx-hero"><span class="sun s1"></span><span class="sun s2"></span>' +
      '<p class="sx-kick">כלבו לבית ולמתנות · בני ברק</p>' +
      '<h1 class="sx-h1">מקום אחד. אלפי פריטים.</h1>' +
      '<p class="sx-lead">כלי בית, טקסטיל, תינוקות, יודאיקה ומשחקים. קונים מוצר כרגיל — או בוחרים כמה פריטים ומקבלים אותם מעוצבים ועטופים כמתנה אחת, ללא תוספת.</p>' +
      '<div class="sx-ctas"><a class="sx-btn" href="#sx-shelf">לקנות מהמדפים</a><a class="sx-btn ghost" href="/?sg=studio">להרכיב מארז מתנה</a></div>' +
      '<ul class="sx-trust"><li>עיצוב ועטיפה ללא תוספת</li><li>עד 5 תשלומים ללא ריבית</li><li>משלוח עד הבית או איסוף מהחנות</li></ul>' +
      '</section>' +
      '<section class="sx-shelf" id="sx-shelf" aria-label="המדפים — מוצרים מכל מחלקה">' +
      '<div class="sx-hd"><h2 class="sx-h2">כל מדף — מחלקה אחרת</h2><p class="sx-help">לחצו על מוצר לפרטים ולקנייה · על <b class="sx-plus-i">＋</b> כדי להוסיף אותו למארז מתנה</p></div>' +
      '<div class="sx-et"></div></section>' +
      '<section class="sx-feat" aria-label="מתנות מעוצבות"><div class="sx-hd"><h2 class="sx-h2">מתנות מוכנות לשליחה</h2><a class="sx-more" href="' + DEP.gifts[1] + '">לכל המתנות המעוצבות ←</a></div><div class="sx-rail"></div>' +
      '<div class="sx-occ" aria-label="לפי אירוע"><span>לפי אירוע:</span>' +
      [['חתונה ואירוסין', DEP.catering[1]], ['בר מצווה', DEP.catering[1]], ['לידה וברית', DEP.baby[1]], ['שבת וחג', DEP.holidays[1]], ['לבית חדש', DEP.home[1]], ['גיפט קארד', '/428782-%D7%92%D7%99%D7%A4%D7%98-%D7%A7%D7%90%D7%A8%D7%93']].map(function (o) { return '<a href="' + o[1] + '">' + o[0] + '</a>'; }).join('') +
      '</div></section>' +
      '<section class="sx-studio" aria-label="סטודיו המתנות"></section>' +
      '<section class="sx-depts" id="sx-depts" aria-label="כל המחלקות"><div class="sx-hd"><h2 class="sx-h2">כל המחלקות</h2></div><div class="sx-grid">' +
      ALL.map(function (k) { return '<a class="sx-dc" href="' + DEP[k][1] + '" data-k="' + k + '"><span class="ph"></span><span class="tx"><b>' + DEP[k][0] + '</b><small>' + DEP[k][2] + '</small></span><span class="ar" aria-hidden="true">←</span></a>'; }).join('') +
      '</div></section>' +
      '<section class="sx-svc" aria-label="שירות"><div><b>עיצוב ועטיפה בחינם</b><span>כל מתנה נעטפת בידיים בחנות</span></div><div><b>עד 5 תשלומים</b><span>ללא ריבית, בקנייה מאובטחת</span></div><div><b>חנות בבני ברק</b><span>מרדכי אנילביץ 8 · א׳–ה׳ 10:00–19:00</span></div><div><b><a href="https://api.whatsapp.com/send?phone=97235700922">שאלה? כתבו לנו בוואטסאפ</a></b><span>או התקשרו: <a href="tel:03-5700922">03-5700922</a></span></div></section>';

    /* ---------- shelf ---------- */
    var et = m.querySelector('.sx-et');
    function itemHTML(p, k) {
      if (!p) return '<div class="sx-it sk"><div class="phw"><span class="ph"></span></div><span class="nm">&nbsp;</span><span class="pr">&nbsp;</span></div>';
      var on = St.has(p.id);
      return '<div class="sx-it' + (on ? ' on' : '') + '" data-id="' + esc(p.id) + '" data-k="' + k + '">' +
        '<div class="phw"><span class="halo"></span><a class="ph" href="' + esc(p.url) + '" tabindex="-1" aria-hidden="true"><img src="' + esc(p.img) + '" alt="" loading="lazy"></a>' +
        '<button class="sx-plus" data-gift aria-pressed="' + on + '" aria-label="' + (on ? 'להסיר מהמתנה: ' : 'להוסיף למתנה: ') + esc(p.name) + '">' + (on ? '✓' : '＋') + '</button></div>' +
        '<a class="nm" href="' + esc(p.url) + '">' + esc(p.name) + '</a><span class="pr">' + fmt(p.price) + '&nbsp;₪</span></div>';
    }
    function renderShelf() {
      mob = W.innerWidth <= 760;
      var per = mob ? 2 : 4, n = mob ? 1 : 2, rows = [], used = {};
      function pick(k) {
        var l = (data[k] && data[k].p) || null; if (!l) return null;
        var out = []; for (var i = 0; i < l.length && out.length < n; i++) { var key = l[i].name.replace(/\s+/g, ''); if (used[key] || used[l[i].id]) continue; used[key] = used[l[i].id] = 1; out.push(l[i]); }
        return out;
      }
      for (var i = 0; i < SHELF.length; i += per) rows.push(SHELF.slice(i, i + per));
      et.innerHTML = rows.map(function (r, ri) {
        return '<div class="sx-row r' + (ri % 4) + '">' + r.map(function (k) {
          var list = pick(k), its = [];
          for (var j = 0; j < n; j++) its.push(itemHTML(list ? list[j] : null, k));
          return '<div class="sx-bay"><a class="sx-plq" href="' + DEP[k][1] + '"><b>' + DEP[k][0] + '</b><span>לכל המחלקה ←</span></a><div class="sx-its">' + its.join('') + '</div></div>';
        }).join('') + '<span class="sx-glass"><i></i></span></div>';
      }).join('');
      placeGlass();
    }
    function placeGlass() {
      [].forEach.call(et.querySelectorAll('.sx-row'), function (row) {
        var ph = row.querySelector('.sx-it .phw'), g = row.querySelector('.sx-glass'); if (!ph || !g) return;
        var t = ph.getBoundingClientRect().bottom - row.getBoundingClientRect().top;
        if (t > 0) g.style.top = (t - 2) + 'px';
      });
    }
    if (D.fonts && D.fonts.ready) D.fonts.ready.then(placeGlass);

    /* ---------- featured rail (real add-to-cart) ---------- */
    var rail = m.querySelector('.sx-rail');
    function renderRail() {
      var list = (data.gifts && data.gifts.p) || [];
      if (!list.length) { rail.innerHTML = new Array(5).join('<div class="sx-fc sk"><span class="ph"></span></div>'); return; }
      rail.innerHTML = list.slice(0, 10).map(function (p) {
        var on = St.has(p.id);
        return '<article class="sx-fc' + (on ? ' on' : '') + '" data-id="' + esc(p.id) + '" data-k="gifts"><a class="ph" href="' + esc(p.url) + '" tabindex="-1" aria-hidden="true"><img src="' + esc(p.img) + '" alt="" loading="lazy"></a>' +
          '<a class="nm" href="' + esc(p.url) + '">' + esc(p.name) + '</a><span class="pr">' + fmt(p.price) + '&nbsp;₪</span>' +
          '<div class="act"><button class="sx-cart" data-cart>הוספה לסל</button><button class="sx-g2" data-gift aria-pressed="' + on + '">' + (on ? '✓ במתנה' : '＋ למתנה') + '</button></div></article>';
      }).join('');
    }

    /* ---------- studio teaser ---------- */
    var stu = m.querySelector('.sx-studio');
    function renderStudio() {
      var it = St.items, n = it.length;
      stu.innerHTML = '<div class="sx-stu-tx"><p class="sx-kick">סטודיו המתנות</p><h2 class="sx-h2">בוחרים מהמדפים. אנחנו עוטפים.</h2>' +
        '<ol class="sx-steps"><li><b>1</b><span>לוחצים ＋ על פריטים מכל מחלקה</span></li><li><b>2</b><span>בוחרים קופסה שקופה או צלופן ומוסיפים ברכה</span></li><li><b>3</b><span>מעצבים ועוטפים בחנות — ללא תוספת</span></li></ol></div>' +
        '<div class="sx-stu-box">' + (n ?
          '<div class="sx-stu-ims">' + it.slice(0, 5).map(function (x) { return '<img src="' + esc(x.img) + '" alt="' + esc(x.short) + '">'; }).join('') + '</div>' +
          '<p class="sx-stu-sum"><span>' + W.SGCountLabel(n) + '</span><b>' + fmt(St.total()) + '&nbsp;₪</b></p><a class="sx-btn" href="/?sg=studio">להמשיך למארז שלי</a>'
          : '<p class="sx-stu-empty">עוד לא בחרתם פריטים למארז.</p><a class="sx-btn" href="#sx-shelf">להתחיל לבחור</a>') + '</div>';
    }

    /* ---------- dept visuals ---------- */
    function renderDeptImgs() {
      ALL.forEach(function (k) {
        var p = data[k] && ((data[k].p && data[k].p[0]) || (data[k].cov && { img: data[k].cov })); if (!p) return;
        [].forEach.call(m.querySelectorAll('[data-k="' + k + '"] > .th, .sx-dc[data-k="' + k + '"] > .ph'), function (el) { if (!el.firstChild) el.innerHTML = '<img src="' + esc(p.img) + '" alt="" loading="lazy">'; });
        if (data[k].n) { var sm = m.querySelector('.sx-dc[data-k="' + k + '"] small'); if (sm && !/פריטים/.test(sm.textContent)) sm.textContent = data[k].n + ' פריטים · ' + DEP[k][2]; }
      });
    }

    function all() { renderShelf(); renderRail(); renderStudio(); renderDeptImgs(); }
    all();
    var lastMob = mob; W.addEventListener('resize', function () { var nm = W.innerWidth <= 760; if (nm !== lastMob) { lastMob = nm; renderShelf(); } else placeGlass(); });

    /* ---------- interactions ---------- */
    function find(k, id) { var l = data[k] && data[k].p || []; for (var i = 0; i < l.length; i++) if (String(l[i].id) === String(id)) return l[i]; }
    m.addEventListener('click', function (e) {
      var g = e.target.closest('[data-gift]'), c = e.target.closest('[data-cart]');
      var box = (g || c) && (g || c).closest('[data-id]'); if (!box) return;
      var p = find(box.getAttribute('data-k'), box.getAttribute('data-id')); if (!p) return;
      if (g) { St.toggle(S.giftItem(p)); }
      if (c) {
        c.disabled = true; c.textContent = 'מוסיפים…';
        W.SGAddToCart(p.url).then(function (ok) {
          c.disabled = false; c.textContent = ok ? 'נוסף לסל ✓' : 'לבחירת אפשרויות';
          if (ok) { c.classList.add('done'); W.SGCartBump && W.SGCartBump(1); S.toast('נוסף לסל · ' + S.shortName(p.name)); setTimeout(function () { c.classList.remove('done'); c.textContent = 'הוספה לסל'; }, 2600); }
          else location.href = p.url;
        });
      }
    });
    St.on(function () {
      [].forEach.call(m.querySelectorAll('[data-id]'), function (el) {
        var on = St.has(el.getAttribute('data-id')); el.classList.toggle('on', on);
        var b = el.querySelector('[data-gift]'); if (!b) return; b.setAttribute('aria-pressed', on);
        if (b.classList.contains('sx-plus')) b.textContent = on ? '✓' : '＋'; else b.textContent = on ? '✓ במתנה' : '＋ למתנה';
      });
      renderStudio();
    });

    /* ---------- live data: each department's real products (cached 6h in this browser) ---------- */
    var need = ALL.filter(function (k) { return !data[k]; });
    var q = need.slice(), busy = 0;
    function save() { try { localStorage.setItem(CK, JSON.stringify({ t: Date.now(), d: data })); } catch (e) {} }
    function next() {
      while (busy < 3 && q.length) (function (k) {
        busy++;
        fetch(DEP[k][1], { credentials: 'same-origin' }).then(function (r) { return r.text(); }).then(function (html) {
          var d = new DOMParser().parseFromString(html, 'text/html');
          var list = S.scrapeCards(d).filter(function (p) { return p.img && p.price > 0; }).slice(0, k === 'gifts' ? 10 : 4)
            .map(function (p) { return { id: p.id, url: p.url, name: p.name, img: p.img, price: p.price }; });
          var h1 = d.querySelector('h1'), near = h1 ? (h1.parentElement.parentElement || h1.parentElement).textContent : '';
          var cnt = (near.match(/תוצאות:\s*(\d+)/) || [])[1];
          var cov = '';
          if (!list.length) { var im = [].filter.call(d.querySelectorAll('a[href] img'), function (i) { var h = i.closest('a').getAttribute('href') || ''; return /\/\d{5,}-/.test(h) && !/logo/i.test(i.getAttribute('src') || '') && (i.getAttribute('data-src') || i.getAttribute('src')); })[0]; if (im) cov = im.getAttribute('data-src') || im.getAttribute('src'); }
          data[k] = { p: list, n: cnt ? +cnt : 0, cov: cov };
        }).catch(function () { data[k] = { p: [], n: 0 }; }).then(function () {
          busy--; save();
          if (SHELF.indexOf(k) > -1) renderShelf(); if (k === 'gifts') renderRail(); renderDeptImgs();
          next();
        });
      })(q.shift());
    }
    next();
    return m;
  };
})();

/* Product page: Konimbo's real product content and purchase controls, presented on a gold-and-glass plinth. */
(function () {
  var W = window, D = document;
  W.SGProduct = function (root) {
    var S = W.SG, esc = S.esc, fmt = S.fmt, cur = S.cur;
    var h1 = D.querySelector('.sg-k h1') || D.querySelector('h1'); if (!h1) throw new Error('no h1');
    var title = h1.textContent.replace(/\s+/g, ' ').trim();
    var id = S.itemId(location.pathname);
    // description: the text block right after the title
    var desc = h1.nextElementSibling; while (desc && !desc.textContent.trim()) desc = desc.nextElementSibling;
    var descTxt = desc ? desc.textContent.trim() : '';
    if (!descTxt) { var p = h1.parentElement; desc = p && p.nextElementSibling; descTxt = desc && desc.textContent.length < 2000 ? desc.textContent.trim() : ''; }
    if (/^הוסף להשוואה/.test(descTxt) || /מק"ט/.test(descTxt) && descTxt.length < 30) descTxt = '';
    // gallery: images whose alt is the product title
    var imgs = [].filter.call(D.querySelectorAll('.sg-k img'), function (im) { return (im.alt || '').trim() === title; })
      .map(function (im) { return im.getAttribute('data-zoom-image') || im.getAttribute('data-large') || im.getAttribute('data-src') || im.src; })
      .filter(function (u, i, a) { return u && a.indexOf(u) === i; });
    // breadcrumbs
    var crumbs = []; [].some.call(D.querySelectorAll('.sg-k ul,.sg-k ol'), function (ul) { if (/דף הבית/.test(ul.textContent) && ul.textContent.indexOf(title) > -1) { crumbs = [].slice.call(ul.querySelectorAll('a[href]')); return true; } });
    // purchase controls (Konimbo's own, moved as-is so they keep working)
    var add = S.findByText(D.querySelector('.sg-k:not(.sg-hdr)') ? D.body : D.body, 'הוסף לעגלה') || S.findByText(D.body, 'הוספה לסל');
    var buy = add; while (buy && buy.parentElement && !/₪/.test(buy.textContent)) buy = buy.parentElement;
    var upH = [].filter.call(D.querySelectorAll('.sg-k h4,.sg-k h3,.sg-k h5'), function (h) { return /לשדרג/.test(h.textContent); })[0];
    var ups = upH ? upH.parentElement : null;
    var shipEl = [].filter.call(D.querySelectorAll('.sg-k div,.sg-k span'), function (e) { return /^משלוח עד הבית/.test(e.textContent.trim()) && e.children.length === 0; })[0];
    var ship = shipEl ? shipEl.parentElement : null;
    var prices = buy ? S.pricesIn(buy) : [];
    var price = prices.length ? prices[prices.length - 1] : 0;
    if (buy && ups && buy.contains(ups)) { // price/qty block is a sibling inside the same parent: pick the part with the add button
      var b2 = add; while (b2.parentElement && !b2.parentElement.contains(ups)) b2 = b2.parentElement; buy = b2;
      var pr2 = S.pricesIn(buy); if (pr2.length) price = pr2[pr2.length - 1];
    }
    var item = { id: id, name: title, price: price, img: imgs[0] || '', url: location.pathname };

    var m = D.createElement('main'); m.className = 'sg-pdp'; m.id = 'sg-main';
    m.innerHTML =
      '<nav class="sg-crumbs" aria-label="מיקום">' + crumbs.map(function (a) { return '<a href="' + a.getAttribute('href').trim() + '">' + esc(a.textContent.replace('/', '').trim()) + '</a>'; }).join('<span>·</span>') + '</nav>' +
      '<div class="sg-pdp-grid">' +
      '<section class="sg-pdp-stage" aria-label="תמונות המוצר"><span class="sun s1"></span><span class="sun s2"></span>' +
      '<div class="sg-plinth"><span class="up a"></span><span class="up b"></span><span class="rail t"></span>' +
      '<div class="sg-pdp-ph"><span class="sg-halo"></span><img class="main" src="' + esc(imgs[0] || '') + '" alt="' + esc(title) + '"><img class="rf" src="' + esc(imgs[0] || '') + '" alt=""></div>' +
      '<span class="sg-glass"><i></i></span></div>' +
      (imgs.length > 1 ? '<div class="sg-thumbs" role="group" aria-label="תמונות נוספות">' + imgs.map(function (u, i) { return '<button aria-label="תמונה ' + (i + 1) + '"' + (i ? '' : ' aria-current="true"') + ' data-src="' + esc(u) + '"><img src="' + esc(u) + '" alt=""></button>'; }).join('') + '</div>' : '') +
      '</section>' +
      '<section class="sg-pdp-info">' +
      '<h1 class="disp">' + esc(title) + '</h1>' +
      '<div class="sg-pdp-price num">' + (price ? fmt(price) + cur : '') + '</div>' +
      (descTxt ? '<p class="sg-pdp-desc">' + esc(descTxt) + '</p>' : '') +
      '<div class="sg-pdp-ups"></div>' +
      '<div class="sg-buy"></div>' +
      '<button class="sg-pdp-gift" aria-pressed="false"><span class="g-off">+ להוסיף למתנה שלי</span><span class="g-on">✓ המוצר במתנה שלך</span></button>' +
      '<p class="sg-pdp-note">בוחרים כמה פריטים — ואנחנו מעצבים ועוטפים אותם למתנה אחת בחנות, ללא תוספת. <a href="/?sg=studio">לסטודיו המתנות ←</a></p>' +
      '<div class="sg-pdp-ship"></div>' +
      '<ul class="sg-pdp-why"><li>עד 5 תשלומים ללא ריבית</li><li>קנייה מאובטחת</li><li><a href="https://api.whatsapp.com/send?phone=97235700922&amp;text=' + encodeURIComponent(location.href) + '">שאלה על המוצר? כתבו לנו בוואטסאפ</a></li></ul>' +
      '</section></div>';
    root.appendChild(m);
    // purchase: Konimbo's own form stays in place (hidden) so the store's cart logic, upgrades and form fields keep working;
    // the new controls below drive it directly.
    var K = buy ? buy.closest('.sg-k') || D.body : D.body;
    var kAdd = (buy && buy.querySelector('.commit_to_real')) || add;
    var kNow = D.getElementById('big_buy_now_link');
    var upBox = m.querySelector('.sg-pdp-ups');
    var upL = ups ? [].slice.call(ups.querySelectorAll('label')).filter(function (l) { return l.querySelector('input[type=checkbox],input[type=radio]'); }) : [];
    if (upL.length) {
      upBox.innerHTML = '<h3>' + esc(upH.textContent.trim()) + '</h3><div class="sg-up-l">' + upL.map(function (l, i) {
        var inp = l.querySelector('input'), im = l.querySelector('img'), tt = l.querySelector('[class*="title"]'), pp = l.querySelector('[class*="price"]');
        var name = (tt ? tt.textContent : l.textContent.replace(/[\d,.]+\s*₪/, '')).trim();
        return '<label class="sg-up"><input type="checkbox" data-i="' + i + '"' + (inp.checked ? ' checked' : '') + '>' + (im ? '<img src="' + esc(im.getAttribute('src')) + '" alt="">' : '<span class="noim"></span>') +
          '<span class="t">' + esc(name) + '</span><span class="p">+' + esc(pp ? pp.textContent.trim() : '') + '</span></label>';
      }).join('') + '</div>';
      upBox.addEventListener('change', function (e) {
        var c = e.target.closest('input[data-i]'); if (!c) return; var real = upL[+c.getAttribute('data-i')].querySelector('input');
        if (real.checked !== c.checked) real.click();
        if (real.checked !== c.checked) { real.checked = c.checked; real.dispatchEvent(new Event('change', { bubbles: true })); }
      });
    } else upBox.remove();
    var bx = m.querySelector('.sg-buy');
    if (kAdd) {
      bx.innerHTML = '<div class="sg-qty" role="group" aria-label="כמות"><button type="button" data-q="1" aria-label="הוספת יחידה">+</button><input type="number" min="1" value="1" inputmode="numeric" aria-label="כמות"><button type="button" data-q="-1" aria-label="הפחתת יחידה">−</button></div>' +
        '<button type="button" class="sg-add">הוספה לסל</button>' + (kNow ? '<button type="button" class="sg-now">קנה עכשיו</button>' : '');
      var qi = bx.querySelector('input');
      bx.addEventListener('click', function (e) {
        var q = e.target.closest('[data-q]'); if (q) { qi.value = Math.max(1, (parseInt(qi.value, 10) || 1) + +q.getAttribute('data-q')); return; }
        var n = Math.max(1, parseInt(qi.value, 10) || 1);
        var setQ = function () { [].forEach.call(K.querySelectorAll('input.counter, input.fake_counter'), function (i) { i.value = n; ['input', 'change', 'keyup'].forEach(function (ev) { i.dispatchEvent(new Event(ev, { bubbles: true })); }); }); };
        if (e.target.closest('.sg-add')) {
          var b = e.target.closest('.sg-add'); setQ(); kAdd.click();
          b.classList.add('done'); b.textContent = 'נוסף לסל ✓'; W.SGToast && W.SGToast('נוסף לסל · ' + S.shortName(title));
          setTimeout(function () { b.classList.remove('done'); b.textContent = 'הוספה לסל'; }, 2600);
        }
        if (e.target.closest('.sg-now') && kNow) { setQ(); kNow.click(); }
      });
    } else bx.innerHTML = '<p class="sg-pdp-note">לפרטים והזמנה: <a href="tel:03-5700922">03-5700922</a></p>';
    if (ship) { m.querySelector('.sg-pdp-ship').appendChild(ship); }
    // gallery
    var main = m.querySelector('img.main'), rf = m.querySelector('img.rf');
    m.addEventListener('click', function (e) {
      var b = e.target.closest('.sg-thumbs button'); if (!b) return;
      [].forEach.call(m.querySelectorAll('.sg-thumbs button'), function (x) { x.removeAttribute('aria-current'); }); b.setAttribute('aria-current', 'true');
      main.classList.add('sw'); setTimeout(function () { main.src = rf.src = b.getAttribute('data-src'); main.classList.remove('sw'); }, 180);
    });
    // gift
    var g = m.querySelector('.sg-pdp-gift');
    var sync = function () { var on = S.Store.has(id); g.setAttribute('aria-pressed', on ? 'true' : 'false'); m.classList.toggle('on', on); };
    g.addEventListener('click', function () { S.Store.toggle(S.giftItem(item)); });
    S.Store.on(sync); sync();
  };
})();

/* Studio: the visitor's gift — every item they chose anywhere on the site — arranged in a clear box or cellophane. */
(function () {
  var W = window, D = document;
  W.SGStudio = function (root) {
    var S = W.SG, St = S.Store, esc = S.esc, fmt = S.fmt, cur = S.cur;
    var m = D.createElement('main'); m.className = 'sg-std'; m.id = 'sg-main';
    root.appendChild(m);
    var NOTE = 'sg_gift_note';
    function note() { try { return localStorage.getItem(NOTE) || ''; } catch (e) { return ''; } }
    function sizeFor(n) { return n <= 1 ? 46 : n === 2 ? 38 : n <= 4 ? 30 : n <= 6 ? 25 : 21; }
    function render() {
      var it = St.items, n = it.length, w = sizeFor(n), wrap = St.wrap;
      var pieces = it.map(function (x, i) {
        var row = n > 4 && i < Math.ceil(n / 2) ? 'back' : 'front';
        return '<img class="sp ' + row + (x.cut ? ' cut' : '') + '" src="' + esc(x.img) + '" alt="' + esc(x.short) + '" style="width:' + w + '%;--i:' + i + '">';
      }).join('');
      m.innerHTML =
        '<section class="sg-std-hd"><span class="sun s1"></span><span class="sun s2"></span><p class="kick">סטודיו המתנות</p><h1 class="disp">המתנה שלכם</h1>' +
        '<p class="sg-std-sub">' + (n ? W.SGCountLabel(n) + ' · ' + fmt(St.total()) + ' ₪ · העיצוב והעטיפה עלינו' : 'עדיין לא בחרתם פריטים. הוסיפו מהמדפים, מהמחלקות או מכל עמוד מוצר.') + '</p></section>' +
        '<div class="sg-std-grid">' +
        '<section class="sg-std-stage w-' + wrap + '" aria-label="תצוגת המתנה">' +
        '<div class="stg2"><div class="floor"></div>' +
        '<div class="box-l lyr"><div class="bx-back"></div></div>' +
        '<div class="pieces">' + (n ? pieces : '<p class="sg-std-empty">המתנה ריקה</p>') + '</div>' +
        '<div class="box-l lyr"><div class="bx-lid"></div><div class="bx-front"></div><div class="rib-h"></div><div class="rib-v"></div>' + BOW + '</div>' +
        '<div class="cello-l lyr">' + CELLO + BOW + '</div></div>' +
        '<div class="sg-std-table"><span class="sg-glass"><i></i></span><span class="leg a"></span><span class="leg b"></span></div>' +
        '</section>' +
        '<section class="sg-std-side">' +
        '<div class="sg-seg" role="group" aria-label="סוג אריזה"><button data-w="box" aria-pressed="' + (wrap === 'box') + '">קופסה שקופה</button><button data-w="cello" aria-pressed="' + (wrap === 'cello') + '">צלופן פתוח</button></div>' +
        '<ul class="sg-std-list">' + it.map(function (x) {
          return '<li><img src="' + esc(x.img) + '" alt=""><a href="' + esc(x.url || '#') + '">' + esc(x.name) + '</a><span class="num">' + fmt(x.price) + cur + '</span><button data-rm="' + esc(x.id) + '" aria-label="להסיר ' + esc(x.short) + '">×</button></li>';
        }).join('') + '</ul>' +
        '<div class="sg-std-tot"><span>' + W.SGCountLabel(n) + '</span><span class="num">' + fmt(St.total()) + cur + '</span></div>' +
        '<label class="sg-std-note-l" for="sg-note">ברכה לכרטיס (לא חובה)</label><textarea id="sg-note" rows="3" placeholder="מזל טוב! באהבה, משפחת…">' + esc(note()) + '</textarea>' +
        '<button class="sg-std-go"' + (n ? '' : ' disabled') + '>להוסיף את המתנה לסל</button>' +
        '<p class="sg-std-msg" role="status"></p>' +
        '<p class="sg-std-fine">את הברכה ואת סוג האריזה נאשר איתכם בטלפון אחרי ההזמנה. הפריטים נכנסים לסל של החנות כרגיל.</p>' +
        '<a class="sg-std-more" href="/">← להמשיך לבחור מהמדפים</a>' +
        '</section></div>';
    }
    m.addEventListener('click', function (e) {
      var b = e.target.closest('[data-w]'); if (b) { St.setWrap(b.getAttribute('data-w')); return; }
      var r = e.target.closest('[data-rm]'); if (r) { St.remove(r.getAttribute('data-rm')); return; }
      if (e.target.closest('.sg-std-go')) addAll(e.target.closest('.sg-std-go'));
    });
    m.addEventListener('input', function (e) { if (e.target.id === 'sg-note') { try { localStorage.setItem(NOTE, e.target.value); } catch (x) {} } });
    // add every gift item to Konimbo's real cart: load each product page (raw) in a hidden frame and press its own add button
    function addOne(x) { return W.SGAddToCart(x.url); }
    function addAll(btn) {
      var it = St.items.slice(), ok = 0, bad = [], msg = m.querySelector('.sg-std-msg');
      btn.disabled = true; btn.textContent = 'מוסיפים לסל…';
      it.reduce(function (p, x) { return p.then(function () { return addOne(x).then(function (r) { if (r) ok++; else bad.push(x.short); msg.textContent = 'נוספו ' + ok + ' מתוך ' + it.length; }); }); }, Promise.resolve())
        .then(function () {
          btn.disabled = false; btn.textContent = 'להוסיף את המתנה לסל'; if (ok && W.SGCartBump) W.SGCartBump(ok);
          msg.innerHTML = 'נוספו לסל ' + ok + ' מתוך ' + it.length + ' פריטים.' + (bad.length ? ' לא הצלחנו להוסיף: ' + esc(bad.join(', ')) + ' — אפשר להוסיף מעמוד המוצר.' : '') + ' <a href="' + (D.querySelector('a[href*="/orders/"]') || { href: '#' }).href + '">למעבר לסל ←</a>';
        });
    }
    var BOW = '<svg class="bow" viewBox="0 0 200 124" aria-hidden="true"><g fill="currentColor"><path d="M100 60 C 72 18, 22 6, 16 38 C 11 68, 66 74, 100 60 Z"/><path d="M100 60 C 128 18, 178 6, 184 38 C 189 68, 134 74, 100 60 Z"/><path d="M98 62 L 66 122 L 82 116 L 92 124 L 104 66 Z"/><path d="M102 62 L 134 122 L 118 116 L 108 124 L 96 66 Z"/><ellipse cx="100" cy="61" rx="13" ry="11"/></g><g fill="#fff" opacity=".3"><path d="M98 57 C 76 30, 40 20, 30 36 C 46 26, 78 38, 98 57 Z"/><path d="M102 57 C 124 30, 160 20, 170 36 C 154 26, 122 38, 102 57 Z"/></g></svg>';
    var CELLO = '<svg class="cel" viewBox="0 0 400 430" preserveAspectRatio="none" aria-hidden="true"><path class="cf" d="M28 420 C -6 330, 34 214, 184 112 L 216 112 C 366 214, 406 330, 372 420 Z"/><path class="cf" d="M184 112 C 168 84, 126 64, 112 22 C 146 40, 168 34, 186 4 C 198 30, 212 30, 232 6 C 244 40, 268 50, 290 24 C 284 66, 236 86, 216 112 Z"/><path class="cs" d="M70 400 C 52 320, 92 226, 190 124" fill="none"/><path class="cs" d="M330 400 C 350 330, 312 230, 212 124" fill="none"/><path class="cw" d="M96 360 C 92 300, 118 240, 170 168" fill="none"/></svg>';
    render(); St.on(render);
  };
})();

/* Sheer Gifts v2 — site shell for the Konimbo test environment.
   Reads Konimbo's real page content (products, prices, links, add-to-cart) and presents it in the gold-and-glass design. */
(function () {
  'use strict';
  var W = window, D = document;
  if (W.__SG2) return; W.__SG2 = 1;
  if (/[?&]sgraw=1/.test(location.search)) { D.documentElement.classList.remove('sg-wait'); return; }            // raw Konimbo page (used by the studio's add-to-cart frames)
  var IMG = W.SG_IMG_BASE || '';
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var fmt = function (n) { return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ','); };
  var num = function (s) { return parseFloat(String(s).replace(/[^\d.]/g, '')) || 0; };
  var cur = '<span class="cur">&nbsp;₪</span>';

  /* ---------------- gift store (this browser only) ---------------- */
  var KEY = 'sg_gift_v2';
  var Store = W.SGStore = {
    items: [], fns: [], wrap: 'box',
    load: function () { try { var d = JSON.parse(localStorage.getItem(KEY) || '{}'); this.items = d.items || []; this.wrap = d.wrap || 'box'; } catch (e) { this.items = []; } },
    save: function () { try { localStorage.setItem(KEY, JSON.stringify({ items: this.items, wrap: this.wrap })); } catch (e) {} this.emit(); },
    emit: function () { this.fns.forEach(function (f) { try { f(); } catch (e) {} }); },
    on: function (f) { this.fns.push(f); },
    has: function (id) { id = String(id); return this.items.some(function (i) { return String(i.id) === id; }); },
    add: function (it) { if (!this.has(it.id)) { this.items.push(it); this.save(); toast('נוסף למתנה · ' + it.short); } },
    remove: function (id) { id = String(id); this.items = this.items.filter(function (i) { return String(i.id) !== id; }); this.save(); },
    toggle: function (it) { this.has(it.id) ? this.remove(it.id) : this.add(it); },
    setWrap: function (w) { this.wrap = w; this.save(); },
    total: function () { return this.items.reduce(function (s, i) { return s + (+i.price || 0); }, 0); },
    count: function () { return this.items.length; }
  };
  Store.load();
  W.addEventListener('storage', function (e) { if (e.key === KEY) { Store.load(); Store.emit(); } });
  var countLabel = function (n) { return n === 0 ? 'המתנה עדיין ריקה' : n === 1 ? 'פריט אחד' : n + ' פריטים'; };
  W.SGCountLabel = countLabel;

  /* ---------------- helpers ---------------- */
  function toast(t) {
    var d = D.createElement('div'); d.className = 'sg-toast'; d.textContent = t; D.body.appendChild(d);
    requestAnimationFrame(function () { d.classList.add('in'); });
    setTimeout(function () { d.classList.remove('in'); setTimeout(function () { d.remove(); }, 400); }, 2200);
  }
  W.SGToast = toast;
  function shortName(n) { n = n.replace(/\s+/g, ' ').trim(); return n.length > 26 ? n.slice(0, 24).replace(/\s\S*$/, '') + '…' : n; }
  function imgOf(root) {
    var im = root && root.querySelector('img'); if (!im) return '';
    return im.getAttribute('data-src') || im.getAttribute('data-original') || im.getAttribute('data-lazy') || im.currentSrc || im.src || '';
  }
  function bigImg(u) { return u; }
  function pricesIn(el) {
    var out = [], re = /([\d][\d,]*(?:\.\d+)?)\s*₪/g, m, t = el.textContent;
    while ((m = re.exec(t))) out.push(num(m[1]));
    return out;
  }
  function findByText(root, txt) {
    var all = root.querySelectorAll('a,button,span,div,input');
    for (var i = 0; i < all.length; i++) {
      var e = all[i], v = (e.value || e.textContent || '').replace(/\s+/g, ' ').trim();
      if (v === txt && !e.querySelector('a,button,span,div')) return e;
    }
    for (i = 0; i < all.length; i++) { e = all[i]; v = (e.value || e.textContent || '').replace(/\s+/g, ' ').trim(); if (v === txt) return e; }
    return null;
  }
  /* add a product to Konimbo's real cart: open its page (raw) in a hidden frame and press the store's own add button */
  W.SGAddToCart = function (url) {
    return new Promise(function (res) {
      if (!url) return res(false);
      var f = D.createElement('iframe'); f.style.cssText = 'position:fixed;width:10px;height:10px;left:-50px;top:0;opacity:0;pointer-events:none'; f.setAttribute('aria-hidden', 'true'); f.tabIndex = -1;
      f.src = url + (url.indexOf('?') > -1 ? '&' : '?') + 'sgraw=1';
      var done = false, fin = function (ok) { if (done) return; done = true; setTimeout(function () { f.remove(); }, 1500); res(ok); };
      f.onload = function () {
        try {
          var d = f.contentDocument, b = d.querySelector('.commit_to_real') || findByText(d.body, 'הוסף לעגלה') || findByText(d.body, 'הוספה לסל');
          [].forEach.call(d.querySelectorAll('input.counter, input.fake_counter'), function (i) { if (!(+i.value > 0)) { i.value = 1; ['input', 'change', 'keyup'].forEach(function (ev) { i.dispatchEvent(new Event(ev, { bubbles: true })); }); } });
          var cl0 = d.querySelector('a[href*="/orders/"]'), n0 = cl0 ? parseInt(cl0.textContent.replace(/\D/g, ''), 10) || 0 : -1;
          if (!b) return fin(false);
          var opts = d.querySelectorAll('select'); for (var i = 0; i < opts.length; i++) if (opts[i].offsetParent && opts[i].selectedIndex < 1 && opts[i].options.length > 1) return fin(false);   // product needs a choice: send the shopper to the page
          b.click();
          var t0 = Date.now(), chk = setInterval(function () { var cl = d.querySelector('a[href*="/orders/"]'), n = cl ? parseInt(cl.textContent.replace(/\D/g, ''), 10) || 0 : -1; if (n0 > -1 && n > n0) { clearInterval(chk); fin(true); } else if (Date.now() - t0 > 6000) { clearInterval(chk); fin(n0 < 0); } }, 300);
        } catch (err) { fin(false); }
      };
      setTimeout(function () { fin(false); }, 15000);
      D.body.appendChild(f);
    });
  };
  function itemId(url) { var m = /\/items\/(\d+)/.exec(url || ''); return m ? m[1] : url; }

  /* ---------------- page type ---------------- */
  var path = decodeURIComponent(location.pathname);
  var q = new URLSearchParams(location.search);
  var type = W.SG_FORCE_TYPE || (q.get('sg') === 'studio' ? 'studio' : (path === '/' || path === '') ? 'home' : /^\/items\//.test(path) ? 'product' : /^\/\d+-/.test(path) ? 'category' : 'other');
  W.SGType = type;
  if (type === 'other') { D.documentElement.classList.remove('sg-wait'); return; }   // pages not redesigned yet stay exactly as Konimbo renders them

  /* departments (real Konimbo categories) */
  var DEPTS = [
    ['כלי בית', '/422574-%D7%9B%D7%9C%D7%99-%D7%91%D7%99%D7%AA'],
    ['יודאיקה', '/422573-%D7%99%D7%95%D7%93%D7%90%D7%99%D7%A7%D7%94'],
    ['חגים', '/422572-%D7%97%D7%92%D7%99%D7%9D'],
    ['אקססוריז לבית', '/422499-%D7%90%D7%A7%D7%A1%D7%A1%D7%95%D7%A8%D7%99%D7%96-%D7%9C%D7%91%D7%99%D7%AA'],
    ['טקסטיל לבית', '/422581-%D7%98%D7%A7%D7%A1%D7%98%D7%99%D7%9C-%D7%9C%D7%91%D7%99%D7%AA-'],
    ['תינוקות', '/423383-%D7%AA%D7%99%D7%A0%D7%95%D7%A7%D7%95%D7%AA'],
    ['משחקים', '/422285-%D7%9E%D7%A9%D7%97%D7%A7%D7%99%D7%9D'],
    ['לגבר ולאישה', '/422488-%D7%9C%D7%92%D7%91%D7%A8-%D7%95%D7%9C%D7%90%D7%99%D7%A9%D7%94'],
    ['מתנות מעוצבות', '/422536-%D7%9E%D7%AA%D7%A0%D7%95%D7%AA-%D7%9E%D7%A2%D7%95%D7%A6%D7%91%D7%95%D7%AA'],
    ['קייטרינג בוטיק', '/403465-%D7%A7%D7%99%D7%99%D7%98%D7%A8%D7%99%D7%A0%D7%92-%D7%91%D7%95%D7%98%D7%99%D7%A7']
  ];
  W.SGDepts = DEPTS;

  /* ---------------- shell: header + footer ---------------- */
  function cartLink() { var l = D.querySelectorAll('a[href*="/orders/"]'); for (var i = 0; i < l.length; i++) if (!l[i].closest('#sg-root')) return l[i]; return null; }
  function cartCount() { var a = cartLink(); var n = a ? parseInt(a.textContent.replace(/\D/g, ''), 10) : 0; return isNaN(n) ? 0 : n; }
  function cartHref() { var a = cartLink(); return a ? a.href : '#'; }
  function searchForm() { var i = D.querySelector('input[placeholder="מה תרצו לרכוש?"]'); return i ? i.form : null; }

  function header() {
    var h = D.createElement('header'); h.className = 'sg-hdr';
    var nav = DEPTS.slice(0, 7).map(function (d) { return '<a href="' + d[1] + '">' + d[0] + '</a>'; }).join('');
    h.innerHTML =
      '<div class="sg-util"><span>מרדכי אנילביץ 8, בני ברק · א׳–ה׳ ‎10:00–19:00</span><span class="sg-util-c">עיצוב ועטיפת המתנה — ללא תוספת</span><span><a href="https://api.whatsapp.com/send?phone=97235700922">וואטסאפ</a> · <a href="tel:03-5700922">03-5700922</a></span></div>' +
      '<div class="sg-bar">' +
      '<button class="sg-burger" aria-label="תפריט" aria-expanded="false"><svg width="22" height="14" viewBox="0 0 22 14" aria-hidden="true"><path d="M0 1h22M0 7h22M0 13h14" stroke="currentColor" stroke-width="1.3" fill="none"/></svg></button>' +
      '<a class="sg-logo" href="/" aria-label="שיר מתנות — דף הבית"><img src="' + IMG + 'logo.webp" alt="Sheer Gifts — שיר מתנות"></a>' +
      '<nav class="sg-nav" aria-label="מחלקות">' + nav + '<a href="/?sg=studio" class="sg-nav-studio">סטודיו המתנות</a></nav>' +
      '<div class="sg-tools">' +
      '<form class="sg-search" role="search"><label class="sg-vh" for="sg-q">חיפוש</label><input id="sg-q" type="search" placeholder="חיפוש בחנות"><button aria-label="חיפוש"><svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><circle cx="7" cy="7" r="5.2" stroke="currentColor" fill="none" stroke-width="1.3"/><path d="M11 11l4 4" stroke="currentColor" stroke-width="1.3"/></svg></button></form>' +
      '<a class="sg-gift" href="/?sg=studio" aria-label="המתנה שלי"><svg width="20" height="20" viewBox="0 0 22 22" aria-hidden="true"><path d="M3 9h16v11H3zM2 6h18v3H2zM11 6v14M11 6c-2-4-6-4-6-1s6 1 6 1c0 0 6 2 6-1s-4-3-6 1" stroke="currentColor" stroke-width="1.3" fill="none"/></svg><b class="sg-gift-n">0</b></a>' +
      '<a class="sg-cart" href="' + cartHref() + '">סל <b class="sg-cart-n">' + cartCount() + '</b></a>' +
      '</div></div>' +
      '<form class="sg-search sg-msearch" role="search"><label class="sg-vh" for="sg-mq">חיפוש</label><input id="sg-mq" type="search" placeholder="מה תרצו לחפש? למשל: פמוטים, מצעים, מתנה ללידה"><button aria-label="חיפוש"><svg width="18" height="18" viewBox="0 0 16 16" aria-hidden="true"><circle cx="7" cy="7" r="5.2" stroke="currentColor" fill="none" stroke-width="1.5"/><path d="M11 11l4 4" stroke="currentColor" stroke-width="1.5"/></svg></button></form>' +
      '<div class="sg-drawer" hidden><nav aria-label="תפריט ראשי">' + DEPTS.map(function (d) { return '<a href="' + d[1] + '">' + d[0] + '</a>'; }).join('') + '<a href="/?sg=studio">סטודיו המתנות</a><a href="/about">אודות</a><a href="/contact">צור קשר</a></nav></div>';
    [].forEach.call(h.querySelectorAll('.sg-search'), function (f) { f.addEventListener('submit', function (e) {
      e.preventDefault(); var v = f.querySelector('input').value.trim(); if (!v) return;
      var orig = searchForm();
      if (orig) { var inp = orig.querySelector('input[type=text],input[type=search],input:not([type])'); if (inp) { inp.value = v; } if (orig.requestSubmit) orig.requestSubmit(); else orig.submit(); }
      else location.href = '/search?q=' + encodeURIComponent(v);
    }); });
    var b = h.querySelector('.sg-burger'), dr = h.querySelector('.sg-drawer');
    b.addEventListener('click', function () { var o = dr.hidden; dr.hidden = !o; b.setAttribute('aria-expanded', String(o)); });
    var gn = h.querySelector('.sg-gift-n'), cn = h.querySelector('.sg-cart-n');
    var upd = function () { gn.textContent = Store.count(); gn.parentNode.classList.toggle('has', Store.count() > 0); };
    Store.on(upd); upd();
    W.SGCartBump = function (k) { cn.textContent = (parseInt(cn.textContent, 10) || 0) + k; cn.parentNode.classList.add('bump'); setTimeout(function () { cn.parentNode.classList.remove('bump'); }, 700); };
    var last = cartCount(); cn.textContent = last;
    setInterval(function () { var n = cartCount(); if (n !== last) { last = n; cn.textContent = n; cn.parentNode.classList.add('bump'); setTimeout(function () { cn.parentNode.classList.remove('bump'); }, 700); } }, 1200);
    // the cart is Konimbo's own mini-cart: open it in place (its checkout button keeps the store's session)
    h.querySelector('.sg-cart').addEventListener('click', function (e) {
      var o = cartLink(); if (!o) return; e.preventDefault(); o.click();
      var t0 = Date.now(), iv = setInterval(function () {
        var dl = [].filter.call(D.querySelectorAll('[role="dialog"]'), function (d) { return /לקופה/.test(d.textContent) && d.textContent.length < 6000 && !d.closest('#sg-root'); })[0];
        if (dl) { clearInterval(iv);
          if (!dl.__sgHome) { dl.__sgHome = dl.parentNode; dl.__sgNext = dl.nextSibling; }
          dl.classList.add('sg-mini'); D.body.appendChild(dl); dl.style.display = 'block';
          var close = function () { dl.classList.remove('sg-mini'); dl.style.display = ''; try { dl.__sgHome.insertBefore(dl, dl.__sgNext); } catch (x) {} D.removeEventListener('click', outside, true); };
          var outside = function (ev) { if (!dl.contains(ev.target) && !ev.target.closest('.sg-cart')) close(); };
          setTimeout(function () { D.addEventListener('click', outside, true); }, 50);
          [].forEach.call(dl.querySelectorAll('button'), function (bt) { if (/סגור|המשך בקניות/.test(bt.textContent + (bt.getAttribute('aria-label') || ''))) bt.addEventListener('click', function () { setTimeout(close, 30); }); });
        } else if (Date.now() - t0 > 2500) { clearInterval(iv); location.href = o.href; }
      }, 150);
    });
    return h;
  }

  function footer() {
    var f = D.createElement('footer'); f.className = 'sg-ftr';
    f.innerHTML =
      '<div class="sg-ftr-top"><a href="/" class="sg-logo" aria-label="שיר מתנות — דף הבית"><img src="' + IMG + 'logo.webp" alt="Sheer Gifts — שיר מתנות"></a><p class="sg-ftr-tag">מקום אחד. אלפי פריטים.<br>וכל מה שתבחרו — מתנה אחת.</p></div>' +
      '<div class="sg-ftr-cols">' +
      '<div><h3>מחלקות</h3>' + DEPTS.slice(0, 6).map(function (d) { return '<a href="' + d[1] + '">' + d[0] + '</a>'; }).join('') + '</div>' +
      '<div><h3>מתנות</h3><a href="' + DEPTS[8][1] + '">מתנות מעוצבות</a><a href="' + DEPTS[9][1] + '">קייטרינג בוטיק</a><a href="/?sg=studio">סטודיו המתנות</a><a href="/428782-%D7%92%D7%99%D7%A4%D7%98-%D7%A7%D7%90%D7%A8%D7%93">גיפט קארד</a></div>' +
      '<div><h3>החנות</h3><p>מרדכי אנילביץ 8, בני ברק</p><p>א׳–ה׳ ‎10:00–19:00 · ה׳ ‎20:00–22:00</p><p><a href="tel:03-5700922">03-5700922</a></p><p>sheer.gifts.5@gmail.com</p></div>' +
      '<div><h3>מידע</h3><a href="/about">אודות</a><a href="/contact">צור קשר</a><a href="/pages/49332-%D7%9E%D7%93%D7%99%D7%A0%D7%99%D7%95%D7%AA-%D7%9E%D7%A9%D7%9C%D7%95%D7%97%D7%99%D7%9D">מדיניות משלוחים</a><a href="/contract">תקנון החנות</a><a href="/pages/49380-%D7%94%D7%A6%D7%94%D7%A8%D7%AA-%D7%A0%D7%92%D7%99%D7%A9%D7%95%D7%AA">הצהרת נגישות</a><a href="/customer_login">מעקב הזמנות</a></div>' +
      '</div><div class="sg-ftr-bot"><span>© שיר מתנות — Sheer Gifts</span><span>קנייה מאובטחת · עד 5 תשלומים ללא ריבית</span></div>';
    return f;
  }

  /* ---------------- product card (category + related) ---------------- */
  function cardHTML(p, i, wide) {
    var on = Store.has(p.id) ? ' on' : '';
    return '<article class="sg-card' + (wide ? ' wide' : '') + on + '" data-id="' + esc(p.id) + '" style="--d:' + (i % 8) * 60 + 'ms">' +
      '<a class="sg-card-ph" href="' + esc(p.url) + '" tabindex="-1" aria-hidden="true"><span class="sg-halo"></span><img src="' + esc(p.img) + '" alt="" loading="lazy"><span class="sg-csh"></span></a>' +
      '<div class="sg-card-tx"><a class="sg-card-nm" href="' + esc(p.url) + '">' + esc(p.name) + '</a>' +
      '<div class="sg-card-pr">' + (p.old ? '<s>' + fmt(p.old) + cur + '</s>' : '') + '<span class="num">' + fmt(p.price) + cur + '</span></div></div>' +
      '<div class="sg-card-act">' +
      (p.add ? '<button class="sg-b-cart" data-act="cart">הוספה לסל</button>' : '<a class="sg-b-cart" href="' + esc(p.url) + '">לבחירת אפשרויות</a>') +
      '<button class="sg-b-gift" data-act="gift" aria-pressed="' + (on ? 'true' : 'false') + '"><span class="g-on">✓ במתנה</span><span class="g-off">+ למתנה</span></button></div>' +
      '</article>';
  }
  function bindCards(root, list) {
    var by = {}; list.forEach(function (p) { by[p.id] = p; });
    root.addEventListener('click', function (e) {
      var b = e.target.closest('[data-act]'); if (!b) return;
      var card = b.closest('.sg-card'), p = by[card.getAttribute('data-id')]; if (!p) return;
      if (b.getAttribute('data-act') === 'gift') { Store.toggle(giftItem(p)); }
      if (b.getAttribute('data-act') === 'cart' && p.add) { p.add.click(); b.classList.add('done'); b.textContent = 'נוסף לסל ✓'; setTimeout(function () { b.classList.remove('done'); b.textContent = 'הוספה לסל'; }, 2200); }
    });
    var sync = function () { [].forEach.call(root.querySelectorAll('.sg-card'), function (c) { var on = Store.has(c.getAttribute('data-id')); c.classList.toggle('on', on); var g = c.querySelector('.sg-b-gift'); if (g) g.setAttribute('aria-pressed', on ? 'true' : 'false'); }); };
    Store.on(sync);
  }
  function giftItem(p) { return { id: String(p.id), name: p.name, short: shortName(p.name), price: p.price, img: p.img, url: p.url, cut: p.cut || '' }; }
  W.SGGiftItem = giftItem;

  function crumbsNear(h1) {
    if (!h1) return [];
    var out = []; [].some.call(D.querySelectorAll('.sg-k ul,.sg-k ol'), function (ul) { if (/דף הבית/.test(ul.textContent) && ul.querySelectorAll('li').length < 8) { out = [].slice.call(ul.querySelectorAll('a[href]')); return true; } });
    return out;
  }
  W.SGCrumbs = crumbsNear;
  /* ---------------- category ---------------- */
  function scrapeCards(doc) {
    var seen = {}, out = [];
    [].forEach.call(doc.querySelectorAll('a[href*="/items/"] h3, a[href*="/items/"] h2'), function (h) {
      var a = h.closest('a'), url = a.getAttribute('href').trim(), id = itemId(url);
      if (seen[id]) return;
      var el = a;
      while (el && el.parentElement && !(/₪/.test(el.textContent) && /הוספה לסל|לפרטים|קנה עכשיו/.test(el.textContent))) el = el.parentElement;
      if (!el) return; seen[id] = 1;
      var pr = pricesIn(el); var price = pr.length ? Math.min.apply(null, pr) : 0, old = pr.length > 1 ? Math.max.apply(null, pr) : 0;
      out.push({ id: id, url: url.replace(/\s+/g, ''), name: h.textContent.replace(/\s+/g, ' ').trim(), img: imgOf(el), price: price, old: old > price ? old : 0, add: findByText(el, 'הוספה לסל') });
    });
    return out;
  }
  function rowsOf(list, mobile) {
    // architectural rhythm: rows of 4 units; every 3rd row opens with a wide (2-unit) item, alternating side
    var rows = [], i = 0, r = 0;
    while (i < list.length) {
      var row = [], units = 0, cap = mobile ? 2 : 4;
      var wideAt = mobile ? -1 : (r % 3 === 1 ? 0 : r % 3 === 2 ? 2 : -1);
      while (i < list.length && units < cap) {
        var wide = units === wideAt && cap - units >= 2;
        row.push({ p: list[i], wide: wide }); units += wide ? 2 : 1; i++;
      }
      rows.push(row); r++;
    }
    return rows;
  }
  function shelvesHTML(list, mobile, start) {
    return rowsOf(list, mobile).map(function (row, ri) {
      var step = ri % 2 ? ' step' : '';
      return '<div class="sg-bay' + step + '"><span class="sg-up a"></span><span class="sg-up b"></span><div class="sg-row">' +
        row.map(function (c, k) { return cardHTML(c.p, (start || 0) + ri * 4 + k, c.wide); }).join('') +
        '</div><span class="sg-glass"><i></i></span></div>';
    }).join('');
  }
  function renderCategory(root) {
    var h1 = D.querySelector('h1'); var title = h1 ? h1.textContent.trim() : '';
    var crumbs = crumbsNear(h1);
    var near = h1 ? (h1.parentElement.parentElement || h1.parentElement).textContent : '';
    var resT = (near.match(/תוצאות:\s*(\d+)/) || D.body.textContent.match(/תוצאות:\s*(\d+)\s*$/m) || [])[1];
    var here = location.pathname;
    var sorts = [].filter.call(D.querySelectorAll('a[href*="order="]'), function (a) { var u = new URL(a.getAttribute('href'), location.href); return u.pathname === here; });
    var ranges = [].filter.call(D.querySelectorAll('a[href*=",low"],a[href*=",mid"],a[href*=",top"]'), function () { return true; });
    var list = scrapeCards(D);
    var mobile = W.innerWidth <= 760;
    var sec = D.createElement('main'); sec.className = 'sg-cat'; sec.id = 'sg-main';
    sec.innerHTML =
      '<section class="sg-cat-hd"><span class="sun s1"></span><span class="sun s2"></span>' +
      '<nav class="sg-crumbs" aria-label="מיקום">' + crumbs.map(function (a) { return '<a href="' + a.getAttribute('href').trim() + '">' + esc(a.textContent.replace('/', '').trim()) + '</a>'; }).join('<span>·</span>') + '</nav>' +
      '<h1 class="disp">' + esc(title) + '</h1>' +
      '<div class="sg-cat-meta"><span>' + (resT ? resT + ' פריטים' : list.length + ' פריטים') + '</span>' +
      (sorts.length ? '<span class="sg-sorts">מיון: ' + sorts.map(function (a) { return '<a href="' + a.getAttribute('href') + '">' + esc(a.textContent.trim()) + '</a>'; }).join(' · ') + '</span>' : '') +
      (ranges.length ? '<span class="sg-ranges">' + ranges.map(function (a) { return '<a href="' + a.getAttribute('href') + '">' + esc(a.textContent.trim()) + '</a>'; }).join('') + '</span>' : '') +
      '</div></section>' +
      '<section class="sg-wall" aria-label="מוצרים">' + shelvesHTML(list, mobile) + '</section>' +
      '<div class="sg-more-w"></div>';
    root.appendChild(sec);
    bindCards(sec, list);
    // more pages: follow Konimbo's own next-page link if present
    var next = D.querySelector('a[rel="next"]') || [].filter.call(D.querySelectorAll('a[href*="page="]'), function (a) { return /הבא|›|»|>/.test(a.textContent); })[0];
    if (next) {
      var mw = sec.querySelector('.sg-more-w'); mw.innerHTML = '<button class="sg-more">להציג עוד פריטים</button>';
      var url = next.href, loaded = list.length;
      mw.firstChild.addEventListener('click', function () {
        var btn = this; btn.disabled = true; btn.textContent = 'טוען…';
        fetch(url, { credentials: 'same-origin' }).then(function (r) { return r.text(); }).then(function (html) {
          var d2 = new DOMParser().parseFromString(html, 'text/html'); var more = scrapeCards(d2);
          more.forEach(function (p) { p.add = null; });
          sec.querySelector('.sg-wall').insertAdjacentHTML('beforeend', shelvesHTML(more, mobile, loaded)); loaded += more.length;
          bindCards(sec.querySelector('.sg-wall'), more);
          var n2 = d2.querySelector('a[rel="next"]'); if (n2) { url = new URL(n2.getAttribute('href'), url).href; btn.disabled = false; btn.textContent = 'להציג עוד פריטים'; } else mw.remove();
        }).catch(function () { location.href = url; });
      });
    }
  }

  /* ---------------- boot ---------------- */
  function boot() {
    var de = D.documentElement; de.classList.remove('sg-wait'); de.classList.add('sg2', 'sg-t-' + type);
    // hide everything Konimbo rendered at load (popups it adds later stay visible)
    [].forEach.call(D.body.children, function (c) { if (c.id !== 'sg-test-env-banner' && !/^(SCRIPT|STYLE|LINK|NOSCRIPT)$/.test(c.tagName)) c.classList.add('sg-k'); });
    [].forEach.call(D.body.childNodes, function (n) { if (n.nodeType === 3 && n.nodeValue.trim()) { var s = D.createElement('span'); s.className = 'sg-k'; n.parentNode.replaceChild(s, n); s.appendChild(n); } });
    var root = D.createElement('div'); root.id = 'sg-root'; root.className = 'sg-root'; root.setAttribute('dir', 'rtl');
    D.body.insertBefore(root, D.body.firstChild);
    root.appendChild(header());
    var main;
    try {
      if (type === 'home' && W.SGHome) main = W.SGHome(root);
      else if (type === 'category') renderCategory(root);
      else if (type === 'product' && W.SGProduct) W.SGProduct(root);
      else if (type === 'studio' && W.SGStudio) W.SGStudio(root);
    } catch (e) { de.classList.remove('sg-wait'); if (W.console) console.error('SG', e); [].forEach.call(D.querySelectorAll('.sg-k'), function (k) { k.classList.remove('sg-k'); }); root.remove(); return; }
    root.appendChild(footer());
    var wa = D.createElement('a'); wa.className = 'sg-wa'; wa.href = 'https://api.whatsapp.com/send?phone=97235700922'; wa.setAttribute('aria-label', 'שאלה? כתבו לנו בוואטסאפ');
    wa.innerHTML = '<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><path fill="#fff" d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3zm0 23.6a10.6 10.6 0 0 1-5.4-1.5l-.4-.2-3.9 1 1-3.8-.2-.4A10.6 10.6 0 1 1 16 26.6zm5.8-7.9c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8.7 8.7 0 0 1-4.3-3.8c-.3-.6.3-.5.9-1.7a.6.6 0 0 0 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.7 3.7 0 0 0-1.1 2.7 6.5 6.5 0 0 0 1.3 3.4 14.6 14.6 0 0 0 5.6 5c2.1.9 2.9 1 3.9.8a3.4 3.4 0 0 0 2.2-1.6 2.8 2.8 0 0 0 .2-1.6c-.1-.1-.3-.2-.6-.4z"/></svg>';
    root.appendChild(wa);
  }
  W.SG = { Store: Store, toast: toast, fmt: fmt, esc: esc, num: num, cur: cur, pricesIn: pricesIn, findByText: findByText, imgOf: imgOf, itemId: itemId, cardHTML: cardHTML, bindCards: bindCards, shortName: shortName, giftItem: giftItem, scrapeCards: scrapeCards };
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', boot); else boot();
})();
