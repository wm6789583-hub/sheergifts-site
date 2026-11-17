/* Sheer Gifts v3 — test environment only. Gold-and-glass design on the real store catalogue. */
(function(){var s=document.createElement("style");s.id="sg2-css";s.textContent="@import url(\"https://fonts.googleapis.com/css2?family=Noto+Serif+Hebrew:wght@400..700&family=Assistant:wght@400;500;600;700;800&display=swap\");\nhtml.sg2 body>.sg-k{display:none!important}\nhtml.sg2 body{margin:0;background:#F4EFE7;padding-top:20px}\nhtml.sg2 #sg-test-env-banner{top:0!important;bottom:auto!important;font-size:12px!important;padding:3px!important;opacity:.92}\n.sg-root{--ink:#1E1B17;--mut:#6F665B;--line:#DDD3C4;--gold:#A8843F;--bg:#F4EFE7;--paper:#FBF8F3;\n --goldg:linear-gradient(90deg,#8E6C33,#E8D49C 32%,#B48F4C 58%,#E6CD8E 80%,#8A6831);--goldh:linear-gradient(180deg,#8E6C33,#ECD8A2 40%,#B48F4C 70%,#8A6831);\n font-family:'Noto Sans Hebrew',system-ui,sans-serif;font-weight:300;color:var(--ink);background:var(--bg);direction:rtl;-webkit-font-smoothing:antialiased}\n.sg-root *{box-sizing:border-box}\n.sg-root a{color:inherit;text-decoration:none}\n.sg-root button{font:inherit;color:inherit;background:none;border:0;padding:0;cursor:pointer}\n.sg-root .disp{font-family:'Noto Serif Hebrew',serif;font-stretch:87.5%;font-weight:250;letter-spacing:-.01em;margin:0}\n.sg-root .num{font-family:'Noto Serif Hebrew',serif;font-stretch:87.5%;font-weight:350}\n.sg-root .cur{font-family:'Noto Sans Hebrew',sans-serif;font-weight:300;font-size:.82em}\n.sg-root .kick{font-size:13px;font-weight:500;color:var(--gold);margin:0}\n.sg-vh{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}\n/* header */\n.sg-hdr{position:relative;z-index:20;background:var(--bg)}\n.sg-util{display:flex;justify-content:space-between;gap:20px;padding:9px 72px;font-size:12.5px;color:var(--mut);border-bottom:1px solid var(--line)}\n.sg-util-c{color:var(--gold);font-weight:400}\n.sg-bar{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:40px;height:84px;padding:0 72px;position:relative}\n.sg-bar:after{content:\"\";position:absolute;left:72px;right:72px;bottom:0;height:1px;background:var(--goldg);opacity:.55}\n.sg-burger{display:none;width:44px;height:44px;align-items:center;justify-content:center}\n.sg-logo img{display:block;width:76px;height:auto}\n.sg-nav{display:flex;gap:26px;justify-content:center;font-size:14.5px;font-weight:400;white-space:nowrap}\n.sg-nav a{position:relative;padding:6px 0}\n.sg-nav a:after{content:\"\";position:absolute;right:0;left:100%;bottom:0;height:1px;background:var(--gold);transition:left .35s}\n.sg-nav a:hover:after{left:0}\n.sg-nav-studio{color:#8C6B33}\n.sg-tools{display:flex;align-items:center;gap:18px}\n.sg-search{display:flex;align-items:center;border-bottom:1px solid var(--line);height:38px;width:170px}\n.sg-search input{border:0;background:none;font:inherit;font-size:14px;width:100%;outline:0;color:var(--ink);padding:0 2px}\n.sg-search button{width:32px;height:38px;display:flex;align-items:center;justify-content:center;color:var(--mut)}\n.sg-gift,.sg-cart{position:relative;display:inline-flex;align-items:center;gap:6px;height:44px;font-size:14px;font-weight:400}\n.sg-gift b,.sg-cart b{font-family:'Noto Serif Hebrew',serif;font-weight:400;color:var(--gold);font-size:15px;transition:transform .3s}\n.sg-gift.has b{color:#8C6B33}\n.sg-cart.bump b{transform:scale(1.5)}\n.sg-drawer{border-bottom:1px solid var(--line);background:var(--paper)}\n.sg-drawer nav{display:grid;grid-template-columns:1fr 1fr;gap:0 20px;padding:10px 20px 18px}\n.sg-drawer a{padding:12px 0;border-bottom:1px solid var(--line);font-size:15px;font-weight:400}\n/* footer */\n.sg-ftr{margin-top:0;padding:70px 72px 28px;background:#EFE8DC;position:relative}\n.sg-ftr:before{content:\"\";position:absolute;left:72px;right:72px;top:0;height:1px;background:var(--goldg);opacity:.6}\n.sg-ftr-top{display:flex;align-items:center;gap:28px;margin-bottom:40px}\n.sg-ftr-tag{font-family:'Noto Serif Hebrew',serif;font-stretch:87.5%;font-weight:300;font-size:24px;line-height:1.3;margin:0;color:#8C6B33}\n.sg-ftr-cols{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:30px}\n.sg-ftr h3{font-size:13px;font-weight:500;color:var(--gold);margin:0 0 14px}\n.sg-ftr-cols a,.sg-ftr-cols p{display:block;font-size:14px;margin:0 0 9px;color:#4A4239}\n.sg-ftr-cols a:hover{color:var(--gold)}\n.sg-ftr-bot{display:flex;justify-content:space-between;margin-top:46px;padding-top:18px;border-top:1px solid var(--line);font-size:12.5px;color:var(--mut)}\n/* toast */\n.sg-toast{position:fixed;left:50%;bottom:34px;transform:translate(-50%,20px);opacity:0;z-index:100001;background:#1E1B17;color:#F4EFE7;padding:13px 20px;font:400 14px 'Noto Sans Hebrew',Arial,sans-serif;direction:rtl;transition:all .35s;box-shadow:0 18px 40px -16px rgba(0,0,0,.5)}\n.sg-toast.in{opacity:1;transform:translate(-50%,0)}\n/* home */\n.sg-home{overflow:hidden;background:#F7F3EC}\n.sg-home-in{margin:0 auto}\n.sg-depts{padding:100px 72px 40px;background:#F4EFE7}\n.sg-depts-hd{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:34px}\n.sg-depts-hd .disp{font-size:56px;line-height:1.05}\n.sg-depts-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));border-top:1px solid var(--ink)}\n.sg-depts-grid a{display:grid;grid-template-columns:auto 1fr auto;gap:12px;align-items:baseline;padding:22px 4px 22px 18px;border-bottom:1px solid var(--line);position:relative;transition:background .3s}\n.sg-depts-grid a:hover{background:rgba(255,255,255,.5)}\n.sg-depts-grid .n{font-family:'Noto Serif Hebrew',serif;font-size:13px;color:var(--gold)}\n.sg-depts-grid .t{font-size:18px;font-weight:400}\n.sg-depts-grid .ar{color:var(--gold);opacity:0;transform:translateX(8px);transition:all .3s}\n.sg-depts-grid a:hover .ar{opacity:1;transform:none}\n.D.m .sg-depts{padding:60px 20px 20px}\n.D.m .sg-depts-hd{display:block}\n.D.m .sg-depts-hd .disp{font-size:34px;margin-top:10px}\n.D.m .sg-depts-grid{grid-template-columns:1fr 1fr}\n.D.m .sg-depts-grid .t{font-size:15px}\n/* category */\n.sg-cat-hd{position:relative;overflow:hidden;padding:56px 72px 44px;background:linear-gradient(180deg,#F7F3EC,#F2ECE2)}\n.sg-cat-hd .sun{position:absolute;top:-60px;height:500px;background:linear-gradient(180deg,rgba(255,252,240,.85),rgba(255,250,236,0));transform:skewX(-28deg);filter:blur(10px);pointer-events:none}\n.sg-cat-hd .s1{left:12%;width:110px}.sg-cat-hd .s2{left:26%;width:50px}\n.sg-crumbs{display:flex;gap:10px;font-size:13px;color:var(--mut);position:relative}\n.sg-crumbs a:hover{color:var(--gold)}\n.sg-cat-hd h1{font-size:72px;line-height:1.05;margin-top:16px;position:relative}\n.sg-cat-meta{display:flex;flex-wrap:wrap;gap:14px 34px;align-items:center;margin-top:22px;font-size:14px;color:var(--mut);position:relative}\n.sg-sorts a{color:var(--ink);font-weight:400;border-bottom:1px solid var(--line)}\n.sg-ranges{display:flex;gap:8px}\n.sg-ranges a{border:1px solid rgba(168,132,63,.4);padding:6px 12px;font-size:13px;color:var(--ink);background:rgba(255,255,255,.4)}\n.sg-ranges a:hover{border-color:var(--gold)}\n.sg-wall{padding:30px 72px 70px;background:linear-gradient(180deg,#F2ECE2,#F4EFE7)}\n.sg-bay{position:relative;padding:34px 34px 6px;margin-bottom:40px}\n.sg-bay .sg-up{position:absolute;top:0;bottom:-6px;width:5px;background:var(--goldg);box-shadow:10px 6px 10px rgba(90,66,30,.10)}\n.sg-bay .sg-up.a{right:0}.sg-bay .sg-up.b{left:0}\n.sg-bay:before{content:\"\";position:absolute;right:-14px;left:14px;top:-10px;bottom:4px;border:2px solid rgba(168,132,63,.18);border-bottom:0;pointer-events:none}\n.sg-bay.step .sg-up.a{top:40px}\n.sg-bay.step .sg-up.b{top:-40px}\n.sg-row{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:30px;align-items:start;position:relative;z-index:2}\n.sg-bay>.sg-glass{display:none}\n.sg-glass{position:absolute;left:0;right:0;bottom:-18px;height:18px;z-index:1}\n.sg-glass:before{content:\"\";position:absolute;left:0;right:0;top:0;height:12px;background:linear-gradient(180deg,rgba(255,255,255,.12),rgba(225,238,232,.6));border-top:1px solid rgba(255,255,255,.95)}\n.sg-glass i{position:absolute;left:-3px;right:-3px;top:12px;height:6px;background:var(--goldh);box-shadow:0 10px 14px -6px rgba(80,60,30,.35)}\n.sg-glass:after{content:\"\";position:absolute;left:0;right:0;top:18px;height:30px;background:linear-gradient(180deg,rgba(80,60,30,.10),transparent)}\n.sg-card{position:relative;display:flex;flex-direction:column;animation:sgRise .8s var(--d) cubic-bezier(.2,.7,.2,1) both}\n.sg-card.wide{grid-column:span 2}\n@keyframes sgRise{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}\n.sg-card-ph{position:relative;display:flex;align-items:flex-end;justify-content:center;aspect-ratio:1/1;padding:8% 8% 10px;background:#F3EDE3;isolation:isolate}\n.sg-card-ph:after{content:\"\";position:absolute;left:-16px;right:-16px;bottom:-4px;height:16px;z-index:3;pointer-events:none;\n background:linear-gradient(180deg,rgba(255,255,255,.15),rgba(225,238,232,.65)) top/100% 11px no-repeat,linear-gradient(180deg,#8E6C33,#ECD8A2 40%,#B48F4C 70%,#8A6831) bottom/100% 5px no-repeat;border-top:1px solid rgba(255,255,255,.95);box-shadow:0 12px 16px -8px rgba(80,60,30,.35)}\n.sg-row .sg-card:first-child .sg-card-ph:after{right:-34px}.sg-row .sg-card:last-child .sg-card-ph:after{left:-34px}\n.sg-card.wide .sg-card-ph{aspect-ratio:2.1/1;padding:4% 18%}\n.sg-card-ph img{position:relative;z-index:2;max-width:100%;max-height:100%;object-fit:contain;mix-blend-mode:multiply;transition:transform .5s cubic-bezier(.2,.7,.2,1)}\n.sg-card:hover .sg-card-ph img{transform:translateY(-6px) scale(1.02)}\n.sg-csh{position:absolute;left:20%;right:20%;bottom:8px;height:10px;border-radius:50%;background:radial-gradient(closest-side,rgba(60,42,18,.22),transparent);z-index:1}\n.sg-halo{position:absolute;inset:-6% -10% 0;background:radial-gradient(50% 55% at 50% 100%,rgba(255,236,190,.8),transparent 70%);opacity:0;transition:opacity .5s}\n.sg-card.on .sg-halo{opacity:1}\n.sg-card-tx{order:3;padding-top:24px;min-height:88px}\n.sg-card-nm{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;font-size:14px;line-height:1.5;font-weight:400}\n.sg-card-nm:hover{color:#8C6B33}\n.sg-card-pr{margin-top:6px;display:flex;gap:10px;align-items:baseline}\n.sg-card-pr .num{font-size:19px}\n.sg-card-pr s{font-size:14px;color:var(--mut)}\n.sg-card-act{position:absolute;right:0;left:0;bottom:calc(100% - 100% + 0px);display:flex;gap:6px;justify-content:center;order:2;opacity:0;transform:translateY(6px);transition:all .3s;z-index:3;top:auto}\n.sg-card-act{position:relative;order:2;margin-top:-58px;height:38px;margin-bottom:20px}\n.sg-card:hover .sg-card-act,.sg-card:focus-within .sg-card-act,.sg-card.on .sg-card-act{opacity:1;transform:none}\n.sg-b-cart,.sg-b-gift{display:inline-flex;align-items:center;justify-content:center;height:36px;padding:0 14px;font-size:13px;font-weight:400;white-space:nowrap}\n.sg-b-cart{background:#1E1B17;color:#F4EFE7}\n.sg-b-cart.done{background:#5D7A55}\n.sg-b-gift{background:rgba(255,255,255,.85);border:1px solid rgba(168,132,63,.5)}\n.sg-b-gift .g-on{display:none}\n.sg-card.on .sg-b-gift{background:#F1E3C2;border-color:var(--gold)}\n.sg-card.on .sg-b-gift .g-on{display:inline}.sg-card.on .sg-b-gift .g-off{display:none}\n.sg-more-w{text-align:center;padding:0 0 70px;background:#F4EFE7}\n.sg-more{height:52px;padding:0 34px;border:1px solid var(--ink)!important;font-size:15px!important;font-weight:400!important}\n/* mobile */\n@media (max-width:760px){\n .sg-util{display:none}\n .sg-bar{grid-template-columns:44px 1fr auto;gap:10px;height:64px;padding:0 12px}\n .sg-bar:after{left:16px;right:16px}\n .sg-burger{display:flex}\n .sg-logo{justify-self:center}\n .sg-logo img{width:54px}\n .sg-nav,.sg-search{display:none}\n .sg-tools{gap:12px}\n .sg-ftr{padding:50px 20px 24px}\n .sg-ftr:before{left:20px;right:20px}\n .sg-ftr-cols{grid-template-columns:1fr 1fr}\n .sg-ftr-bot{flex-direction:column;gap:6px}\n .sg-cat-hd{padding:30px 20px 26px}\n .sg-cat-hd h1{font-size:42px}\n .sg-wall{padding:16px 16px 40px}\n .sg-bay{padding:22px 14px 0;margin-bottom:46px}\n .sg-bay:before{right:-8px;left:8px}\n .sg-row{grid-template-columns:1fr 1fr;gap:14px}\n .sg-card-tx{padding-top:24px;min-height:84px}\n .sg-card-nm{font-size:13px}\n .sg-card-act{opacity:1;transform:none;margin-top:-50px}\n .sg-card-ph:after{left:-8px;right:-8px}\n .sg-row .sg-card:first-child .sg-card-ph:after{right:-14px}.sg-row .sg-card:last-child .sg-card-ph:after{left:-14px}\n .sg-b-cart{display:none}\n .sg-b-gift{height:32px;padding:0 10px;font-size:12px}\n}\n@media (min-width:761px) and (max-width:1200px){\n .sg-util,.sg-bar{padding-left:32px;padding-right:32px}\n .sg-nav{gap:16px;font-size:13.5px}\n .sg-search{width:120px}\n .sg-wall,.sg-cat-hd,.sg-ftr{padding-left:32px;padding-right:32px}\n}\n/* product */\n.sg-pdp{padding:30px 72px 90px;background:linear-gradient(180deg,#F7F3EC,#F4EFE7)}\n.sg-pdp-grid{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);gap:70px;margin-top:22px;align-items:start}\n.sg-pdp-stage{position:relative}\n.sg-pdp-stage .sun,.sg-std-hd .sun{position:absolute;top:-80px;height:640px;background:linear-gradient(180deg,rgba(255,252,240,.85),rgba(255,250,236,0));transform:skewX(-28deg);filter:blur(10px);pointer-events:none}\n.sg-pdp-stage .s1{left:16%;width:120px}.sg-pdp-stage .s2{left:34%;width:50px}\n.sg-plinth{position:relative;padding:34px 40px 0;aspect-ratio:1/0.92}\n.sg-plinth .up{position:absolute;top:0;bottom:-6px;width:5px;background:var(--goldg);box-shadow:12px 8px 12px rgba(90,66,30,.10)}\n.sg-plinth .up.a{right:0}.sg-plinth .up.b{left:0}\n.sg-plinth .rail.t{position:absolute;top:0;left:0;right:0;height:5px;background:var(--goldh)}\n.sg-plinth .sg-glass{bottom:-18px}\n.sg-pdp-ph{position:relative;height:100%;display:flex;align-items:flex-end;justify-content:center;padding:6% 8% 0}\n.sg-pdp-ph img.main{position:relative;z-index:2;max-width:100%;max-height:100%;object-fit:contain;mix-blend-mode:multiply;transition:opacity .2s,transform .5s}\n.sg-pdp-ph img.main.sw{opacity:0;transform:translateY(8px)}\n.sg-pdp-ph img.rf{position:absolute;bottom:-100%;max-width:84%;max-height:100%;object-fit:contain;transform:scaleY(-1);opacity:.10;mix-blend-mode:multiply;-webkit-mask-image:linear-gradient(0deg,#000,transparent 18%);mask-image:linear-gradient(0deg,#000,transparent 18%);pointer-events:none}\n.sg-pdp.on .sg-halo{opacity:1}\n.sg-thumbs{display:flex;gap:12px;margin-top:46px;flex-wrap:wrap}\n.sg-thumbs button{width:76px;height:76px;padding:6px;border:1px solid var(--line)!important;background:#FBF8F3!important;display:flex;align-items:center;justify-content:center}\n.sg-thumbs button[aria-current]{border-color:var(--gold)!important}\n.sg-thumbs img{max-width:100%;max-height:100%;mix-blend-mode:multiply}\n.sg-pdp-info h1{font-size:50px;line-height:1.1}\n.sg-pdp-price{font-size:40px;margin-top:16px;color:#2A251F}\n.sg-pdp-desc{font-size:16.5px;line-height:1.85;color:var(--mut);margin:20px 0 0;max-width:560px}\n.sg-pdp-ups{margin-top:30px;padding:20px 22px;background:rgba(255,255,255,.5);border:1px solid rgba(168,132,63,.3)}\n.sg-ups h4,.sg-ups h3{font-family:'Noto Serif Hebrew',serif;font-stretch:87.5%;font-weight:350;font-size:20px;margin:0 0 12px;color:#8C6B33}\n.sg-ups *{font-family:'Noto Sans Hebrew',sans-serif!important;font-size:14.5px!important}\n.sg-ups table{display:inline-table;vertical-align:middle;margin-left:8px}\n.sg-ups img{width:40px!important;height:40px!important;object-fit:contain;mix-blend-mode:multiply}\n.sg-ups input[type=checkbox]{accent-color:#A8843F;width:17px;height:17px;vertical-align:middle;margin-left:8px}\n.sg-ups>div{padding:6px 0;border-bottom:1px solid var(--line)}\n.sg-ups>div:last-child{border-bottom:0}\n.sg-buy{margin-top:26px}\n.sg-buy *{font-family:'Noto Sans Hebrew',sans-serif!important}\n.sg-buy .sg-k-price{display:none!important}\n.sg-buy>*{display:flex!important;flex-wrap:wrap;align-items:center;gap:12px}\n.sg-buy input[type=number],.sg-buy input[type=text]{width:54px!important;height:48px!important;text-align:center;border:1px solid var(--line)!important;background:#FBF8F3!important;font-size:16px!important;border-radius:0!important}\n.sg-buy .sg-k-q{display:inline-flex!important;align-items:center;justify-content:center;width:40px;height:48px;border:1px solid var(--line);background:#FBF8F3;font-size:18px!important;cursor:pointer;user-select:none}\n.sg-buy .sg-k-add{display:inline-flex!important;align-items:center;justify-content:center;height:52px!important;padding:0 40px!important;background:#1E1B17!important;color:#F4EFE7!important;font-size:15px!important;font-weight:400!important;border:0!important;border-radius:0!important;cursor:pointer;min-width:220px;box-shadow:none!important;text-shadow:none!important}\n.sg-buy .sg-k-add:hover{background:#3A332B!important}\n.sg-buy .sg-k-buynow{font-size:14px!important;color:var(--ink)!important;border-bottom:1px solid var(--gold);background:none!important;padding:0 0 2px!important;height:auto!important;border-radius:0!important;box-shadow:none!important}\n.sg-pdp-gift{margin-top:14px;height:50px;padding:0 26px;border:1px solid rgba(168,132,63,.55)!important;background:rgba(255,255,255,.6)!important;font-size:15px;font-weight:400}\n.sg-pdp-gift .g-on{display:none}\n.sg-pdp.on .sg-pdp-gift{background:#F1E3C2!important;border-color:var(--gold)!important}\n.sg-pdp.on .sg-pdp-gift .g-on{display:inline}.sg-pdp.on .sg-pdp-gift .g-off{display:none}\n.sg-pdp-note{font-size:14px;color:var(--mut);margin:14px 0 0;line-height:1.7}\n.sg-pdp-note a{color:#8C6B33;border-bottom:1px solid rgba(168,132,63,.5)}\n.sg-pdp-ship{margin-top:26px;font-size:13.5px!important;color:var(--mut);line-height:1.7;border-top:1px solid var(--line);padding-top:16px}\n.sg-pdp-ship *{font-family:'Noto Sans Hebrew',sans-serif!important;font-size:13.5px!important;font-weight:300!important;color:var(--mut)!important}\n.sg-pdp-ship p{margin:0 0 6px}\n.sg-pdp-why{list-style:none;padding:0;margin:18px 0 0;display:flex;flex-wrap:wrap;gap:8px 22px;font-size:13.5px;font-weight:400}\n.sg-pdp-why li:before{content:\"\";display:inline-block;width:6px;height:6px;border-radius:50%;background:var(--gold);margin-left:8px;vertical-align:middle}\n.sg-pdp-why a{border-bottom:1px solid var(--line)}\n/* studio */\n.sg-std{background:linear-gradient(180deg,#F7F3EC,#F4EFE7);padding:0 72px 90px}\n.sg-std-hd{position:relative;overflow:hidden;padding:50px 0 20px}\n.sg-std-hd .s1{left:14%;width:120px}.sg-std-hd .s2{left:30%;width:50px}\n.sg-std-hd h1{font-size:72px;line-height:1.05;margin-top:12px;position:relative}\n.sg-std-sub{font-size:16px;color:var(--mut);margin:14px 0 0;position:relative}\n.sg-std-grid{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,1fr);gap:70px;align-items:start;margin-top:20px}\n.sg-std-stage{position:relative;padding-top:20px}\n.stg2{position:relative;aspect-ratio:1.3/1;--edge:rgba(150,122,70,.5);--rib:#D8C092;--ribg:linear-gradient(90deg,#C9AE7A,#F1E3C2 50%,#C9AE7A);--cf:rgba(255,255,255,.36);--cs:rgba(150,122,70,.45)}\n.stg2 .lyr{position:absolute;inset:0;transition:opacity .6s,transform .7s cubic-bezier(.2,.8,.2,1)}\n.w-box .cello-l{opacity:0;transform:scale(.94);pointer-events:none}\n.w-cello .box-l{opacity:0;transform:scale(1.04);pointer-events:none}\n.stg2 .floor{position:absolute;left:4%;right:4%;bottom:0;height:8%;border-radius:50%;background:radial-gradient(closest-side,rgba(80,60,30,.22),transparent)}\n.stg2 .bx-back,.stg2 .bx-front{position:absolute;left:8%;right:8%;bottom:6%;top:30%;border:1px solid var(--edge)}\n.stg2 .bx-back{background:linear-gradient(180deg,rgba(255,255,255,.30),rgba(255,255,255,.06))}\n.stg2 .bx-front{background:linear-gradient(112deg,transparent 22%,rgba(255,255,255,.40) 29%,transparent 37%),linear-gradient(112deg,transparent 56%,rgba(255,255,255,.16) 59%,transparent 64%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.35)}\n.stg2 .bx-lid{position:absolute;left:7%;right:7%;top:26%;height:5%;border:1px solid var(--edge);background:linear-gradient(180deg,rgba(255,255,255,.5),rgba(255,255,255,.22));z-index:6}\n.stg2 .rib-v{position:absolute;left:50%;width:3%;margin-left:-1.5%;top:26%;height:5%;background:var(--ribg);z-index:7}\n.stg2 .rib-h{position:absolute;left:7%;right:7%;top:27.4%;height:2.2%;background:var(--ribg);z-index:7}\n.stg2 .bow{position:absolute;width:22%;left:39%;top:12%;z-index:8;color:var(--rib);filter:drop-shadow(0 3px 4px rgba(0,0,0,.18))}\n.stg2 .cello-l .bow{top:16%;width:20%;left:40%}\n.stg2 .cel{position:absolute;left:6%;width:88%;top:0;height:96%}\n.stg2 .cel .cf{fill:var(--cf);stroke:var(--cs);stroke-width:1.2}\n.stg2 .cel .cs{stroke:var(--cs);stroke-width:1}\n.stg2 .cel .cw{stroke:rgba(255,255,255,.75);stroke-width:3;stroke-linecap:round}\n.stg2 .pieces{position:absolute;left:12%;right:12%;bottom:8%;top:34%;display:flex;flex-wrap:wrap-reverse;align-content:flex-start;align-items:flex-end;justify-content:center;gap:2% 1%;transition:transform .7s}\n.w-cello .pieces{transform:scale(.8);transform-origin:50% 100%}\n.stg2 .sp{max-height:62%;object-fit:contain;mix-blend-mode:multiply;animation:sgDrop .8s calc(var(--i)*90ms) cubic-bezier(.2,.8,.25,1.08) both}\n.stg2 .sp.cut{mix-blend-mode:normal;filter:drop-shadow(10px 8px 8px rgba(90,66,30,.16))}\n@keyframes sgDrop{from{opacity:0;transform:translateY(-80px)}to{opacity:1;transform:none}}\n.sg-std-empty{margin:auto;color:var(--mut);font-size:15px}\n.sg-std-table{position:relative;height:60px;margin:-6px 4% 0}\n.sg-std-table .sg-glass{top:0;bottom:auto}\n.sg-std-table .leg{position:absolute;top:14px;width:5px;height:46px;background:var(--goldg)}\n.sg-std-table .leg.a{right:0}.sg-std-table .leg.b{left:0}\n.sg-seg{display:inline-flex;border:1px solid rgba(168,132,63,.45)}\n.sg-seg button{height:46px;padding:0 24px;font-size:14px!important;font-weight:400!important;transition:all .3s}\n.sg-seg button[aria-pressed=\"true\"]{background:#1E1B17!important;color:#F4EFE7!important}\n.sg-std-list{list-style:none;padding:0;margin:24px 0 0;border-top:1px solid var(--ink)}\n.sg-std-list li{display:grid;grid-template-columns:52px 1fr auto 32px;gap:14px;align-items:center;padding:10px 0;border-bottom:1px solid var(--line);font-size:14.5px;font-weight:400}\n.sg-std-list img{width:52px;height:52px;object-fit:contain;mix-blend-mode:multiply}\n.sg-std-list .num{font-size:17px}\n.sg-std-list button{width:32px;height:32px;font-size:18px!important;color:var(--mut)}\n.sg-std-tot{display:flex;justify-content:space-between;align-items:baseline;padding:18px 0 6px;font-weight:400}\n.sg-std-tot .num{font-size:40px;font-weight:250}\n.sg-std-note-l{display:block;margin-top:20px;font-size:13px;font-weight:500;color:var(--gold)}\n#sg-note{width:100%;margin-top:8px;border:1px solid var(--line);background:#FBF8F3;font:inherit;font-size:15px;padding:12px;resize:vertical}\n.sg-std-go{margin-top:18px;width:100%;height:56px;background:#1E1B17!important;color:#F4EFE7!important;font-size:16px!important;font-weight:400!important}\n.sg-std-go[disabled]{opacity:.4;cursor:default}\n.sg-std-msg{font-size:14px;margin:12px 0 0;min-height:20px}\n.sg-std-msg a{color:#8C6B33;border-bottom:1px solid currentColor}\n.sg-std-fine{font-size:12.5px;color:var(--mut);margin:8px 0 0;line-height:1.6}\n.sg-std-more{display:inline-block;margin-top:18px;font-size:14px;font-weight:400;border-bottom:1px solid var(--gold)}\n@media (max-width:760px){\n .sg-pdp{padding:18px 16px 60px}\n .sg-pdp-grid,.sg-std-grid{grid-template-columns:1fr;gap:40px}\n .sg-plinth{padding:20px 22px 0}\n .sg-pdp-info h1{font-size:32px}\n .sg-pdp-price{font-size:32px}\n .sg-buy .sg-k-add{min-width:0;flex:1}\n .sg-std{padding:0 16px 60px}\n .sg-std-hd h1{font-size:44px}\n}\n/* fixes after live check */\nhtml.sg2 body{font-size:0;color:transparent}\n.sg-root{font-size:16px;color:var(--ink)}\n.sg-pdp-ph img.rf{display:none}\n.sg-plinth{padding:24px 28px 0;overflow:hidden}\n.sg-pdp-ph{padding:4% 4% 0}\n.sg-pdp-ph img.main{width:100%;height:100%;object-fit:contain}\n.sg-ups *,.sg-buy *{float:none!important;position:static!important;max-width:100%;box-sizing:border-box}\n.sg-ups>*{width:auto!important;height:auto!important;margin:0!important}\n.sg-ups>div{display:flex!important;align-items:center;gap:10px;padding:10px 0!important;border-bottom:1px solid var(--line)}\n.sg-ups>div>*{width:auto!important;height:auto!important;margin:0!important;display:inline-flex!important;align-items:center;gap:10px;font-weight:400!important;color:var(--ink)!important;background:none!important;border:0!important;flex:none}\n.sg-ups>div>*:last-child,.sg-ups>div span{margin-right:auto!important}\n.sg-ups h4,.sg-ups h3{display:block!important;border:0!important;background:none!important;padding:0!important;text-align:right}\n.sg-ups table,.sg-ups tbody,.sg-ups tr,.sg-ups td{display:inline-block!important;width:auto!important;padding:0!important;border:0!important}\n.sg-buy>*{width:auto!important;height:auto!important;margin:0!important;padding:0!important;background:none!important;border:0!important}\n.sg-buy>*>*{display:inline-flex!important;align-items:center;gap:0;width:auto!important;margin:0!important;visibility:visible!important;opacity:1!important}\n.sg-buy .sg-k-add{width:auto!important;white-space:nowrap;overflow:visible!important;text-indent:0!important}\n.sg-buy .sg-k-add *{display:inline!important;color:inherit!important;font-size:inherit!important}\n.sg-buy .sg-k-add *+*{display:none!important}\n.sg-buy .sg-k-buynow{display:inline-block!important;border:0!important;border-bottom:1px solid var(--gold)!important;font-weight:400!important}\n@media (min-width:761px) and (max-width:1200px){.sg-pdp{padding-left:32px;padding-right:32px}.sg-pdp-grid{gap:40px}.sg-pdp-info h1{font-size:40px}}\n\n/* ================= v3: typography system ================= */\n.sg-root{--ink:#1B1814;--mut:#5A5147;--gold:#9A7633;--goldt:#7E5F24;font-family:'Assistant',system-ui,sans-serif;font-weight:400;font-size:17px;line-height:1.55;color:var(--ink)}\n.sg-root .disp,.sg-root h1,.sg-root h2{font-family:'Noto Serif Hebrew',serif;font-stretch:normal;font-weight:500;letter-spacing:0}\n.sg-root .num{font-family:'Assistant',sans-serif;font-stretch:normal;font-weight:700;font-variant-numeric:lining-nums}\n.sg-root .cur{font-family:inherit;font-weight:inherit;font-size:.85em}\n.sg-root .kick{font-size:14px;font-weight:700;color:var(--goldt);letter-spacing:.02em}\n.sg-nav{font-size:16px;font-weight:600;gap:24px}\n.sg-nav-studio{color:var(--goldt)}\n.sg-util{font-size:13.5px;color:var(--mut)}.sg-util a{font-weight:600;color:var(--ink)}\n.sg-gift,.sg-cart{font-size:16px;font-weight:600}\n.sg-gift b,.sg-cart b{font-family:'Assistant',sans-serif;font-weight:800;font-size:13px;min-width:22px;height:22px;border-radius:11px;background:var(--ink);color:#fff;display:inline-flex;align-items:center;justify-content:center;padding:0 6px}\n.sg-gift.has b{background:var(--gold);color:#fff}\n.sg-search{width:240px;height:44px;border:1px solid #CFC3B0;background:#fff;padding-right:12px}\n.sg-search input{font-size:15.5px}\n.sg-search input::placeholder{color:#857A6C}\n.sg-msearch{display:none}\n.sg-drawer a{font-size:17px;font-weight:600}\n.sg-ftr h3{font-size:14px;font-weight:700;color:var(--goldt)}\n.sg-ftr-cols a,.sg-ftr-cols p{font-size:15.5px;color:#3E372F}\n.sg-ftr-tag{font-weight:500;font-stretch:normal;font-size:22px;color:var(--goldt)}\n.sg-ftr-bot{font-size:14px}\n.sg-toast{font:600 15px 'Assistant',Arial,sans-serif}\n.sg-cat-hd h1{font-size:58px;font-weight:500}\n.sg-crumbs{font-size:14.5px}\n.sg-cat-meta{font-size:15.5px;color:var(--mut)}\n.sg-sorts a{font-weight:600}\n.sg-ranges a{font-size:14.5px;font-weight:600}\n.sg-card-nm{font-size:16px;line-height:1.45;font-weight:500}\n.sg-card-pr .num{font-size:19px}\n.sg-b-cart,.sg-b-gift{font-size:14.5px;font-weight:700;height:40px}\n.sg-more{font-size:16px!important;font-weight:700!important}\n.sg-pdp-info h1{font-size:44px;line-height:1.2}\n.sg-pdp-price{font-size:34px;font-family:'Assistant',sans-serif!important;font-weight:700!important}\n.sg-pdp-desc{font-size:17.5px;color:#3E372F}\n.sg-ups *,.sg-buy *{font-family:'Assistant',sans-serif!important}\n.sg-ups h4,.sg-ups h3{font-family:'Noto Serif Hebrew',serif!important;font-weight:500!important;font-size:20px!important}\n.sg-ups *{font-size:16px!important}\n.sg-buy .sg-k-add{font-size:17px!important;font-weight:700!important}\n.sg-buy .sg-k-buynow{font-size:16px!important;font-weight:600!important}\n.sg-pdp-gift{font-size:16px;font-weight:700}\n.sg-pdp-note,.sg-pdp-why{font-size:15.5px}\n.sg-pdp-ship,.sg-pdp-ship *{font-size:15px!important;font-weight:400!important}\n.sg-std-hd h1{font-weight:500}\n.sg-std-sub{font-size:17px}\n.sg-std-list li{font-size:16px;font-weight:500}\n.sg-std-tot .num{font-weight:700;font-size:34px}\n.sg-seg button{font-size:16px!important;font-weight:600!important}\n.sg-std-go{font-size:17px!important;font-weight:700!important}\n/* floating WhatsApp */\n.sg-wa{position:fixed;left:18px;bottom:18px;z-index:9999;width:56px;height:56px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 24px -8px rgba(0,0,0,.45)}\n/* ================= v3: home ================= */\n.sx{background:#F6F1E9}\n.sx-strip{display:none}\n.sx-hd{display:flex;justify-content:space-between;align-items:flex-end;gap:20px;margin-bottom:26px}\n.sx-h2{font-size:40px;line-height:1.15;margin:0}\n.sx-kick{font-size:14px;font-weight:700;color:var(--goldt);margin:0;letter-spacing:.02em}\n.sx-help{margin:0;font-size:15.5px;color:var(--mut)}\n.sx-plus-i{display:inline-flex;width:22px;height:22px;border-radius:50%;background:var(--ink);color:#fff;align-items:center;justify-content:center;font-size:14px;vertical-align:-4px}\n.sx-more{font-size:16px;font-weight:700;color:var(--goldt);border-bottom:1px solid currentColor;white-space:nowrap}\n.sx-btn{display:inline-flex;align-items:center;justify-content:center;height:54px;padding:0 30px;background:var(--ink);color:#FBF8F3!important;font-size:17px;font-weight:700;border:1px solid var(--ink)}\n.sx-btn:hover{background:#3A332B}\n.sx-btn.ghost{background:transparent;color:var(--ink)!important;border-color:var(--gold)}\n.sx-btn.ghost:hover{background:#FBF4E4}\n/* hero */\n.sx-hero{position:relative;overflow:hidden;text-align:center;padding:54px 72px 40px;background:linear-gradient(180deg,#FAF6EF,#F6F1E9)}\n.sx-hero .sun{position:absolute;top:-80px;height:520px;background:linear-gradient(180deg,rgba(255,250,232,.9),rgba(255,250,236,0));transform:skewX(-28deg);filter:blur(10px);pointer-events:none}\n.sx-hero .s1{left:14%;width:130px}.sx-hero .s2{left:28%;width:60px}\n.sx-h1{position:relative;font-size:62px;line-height:1.1;margin:14px 0 0;color:var(--ink)}\n.sx-lead{position:relative;max-width:720px;margin:18px auto 0;font-size:19px;line-height:1.65;color:#3E372F}\n.sx-ctas{position:relative;display:flex;gap:14px;justify-content:center;margin-top:28px;flex-wrap:wrap}\n.sx-trust{position:relative;list-style:none;padding:0;margin:26px 0 0;display:flex;justify-content:center;flex-wrap:wrap;gap:8px 26px;font-size:15.5px;font-weight:600;color:#3E372F}\n.sx-trust li:before{content:\"\";display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--gold);margin-left:9px;vertical-align:2px}\n/* etagere */\n.sx-shelf{padding:40px 72px 80px}\n.sx-et{position:relative;padding:0 14px;filter:drop-shadow(0 30px 40px rgba(90,66,30,.08))}\n.sx-et:before,.sx-et:after{content:\"\";position:absolute;top:-14px;bottom:-24px;width:7px;background:var(--goldg);box-shadow:10px 6px 12px rgba(90,66,30,.14);z-index:3}\n.sx-et:before{right:0}.sx-et:after{left:0}\n.sx-row{position:relative;display:grid;grid-template-columns:1.25fr 1fr 1.1fr .95fr;padding-top:14px}\n.sx-row.r1{grid-template-columns:.95fr 1.2fr 1fr 1.15fr}\n.sx-row:first-child{border-top:6px solid transparent;border-image:linear-gradient(180deg,#8E6C33,#ECD8A2 40%,#B48F4C 70%,#8A6831) 1}\n.sx-bay{position:relative;padding:12px 18px 0;display:flex;flex-direction:column}\n.sx-bay+.sx-bay:before{content:\"\";position:absolute;right:-3px;top:-14px;bottom:-18px;width:5px;background:var(--goldg);z-index:2;box-shadow:8px 4px 10px rgba(90,66,30,.1)}\n.sx-row.r1 .sx-bay:nth-child(2):before,.sx-row.r0 .sx-bay:nth-child(3):before{top:40px}\n.sx-plq{display:inline-flex;flex-direction:column;align-self:flex-start;padding:7px 14px 8px;background:linear-gradient(180deg,#FFFDF8,#F6EEDD);border:1px solid rgba(154,118,51,.45);box-shadow:0 6px 14px -10px rgba(90,66,30,.5);position:relative;z-index:4}\n.sx-plq b{font-family:'Noto Serif Hebrew',serif;font-weight:600;font-size:20px;line-height:1.2}\n.sx-plq span{font-size:13.5px;font-weight:700;color:var(--goldt)}\n.sx-plq:hover{border-color:var(--gold);background:#FFF9EA}\n.sx-its{display:flex;gap:16px;justify-content:space-around;margin-top:8px}\n.sx-it{position:relative;flex:1 1 0;min-width:0;display:flex;flex-direction:column;align-items:center;text-align:center}\n.sx-it .ph{position:relative;width:100%;height:172px;display:flex;align-items:flex-end;justify-content:center;padding:6px 4px 0}\n.sx-it .ph img{position:relative;z-index:2;max-width:100%;max-height:100%;object-fit:contain;mix-blend-mode:multiply;transition:transform .5s cubic-bezier(.2,.7,.2,1)}\n.sx-it .ph:hover img{transform:translateY(-6px)}\n.sx-it .halo{position:absolute;inset:10% -12% 0;background:radial-gradient(50% 55% at 50% 100%,rgba(255,232,180,.9),transparent 70%);opacity:0;transition:opacity .5s}\n.sx-it.on .halo{opacity:1}\n.sx-it.sk .ph{background:linear-gradient(90deg,#EFE7DA,#F7F1E7,#EFE7DA);background-size:200% 100%;animation:sxSk 1.4s infinite;margin-bottom:0}\n@keyframes sxSk{to{background-position:-200% 0}}\n.sx-it .nm{margin-top:30px;font-size:15px;font-weight:600;line-height:1.35;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;min-height:2.7em;color:var(--ink)}\n.sx-it .nm:hover{color:var(--goldt)}\n.sx-it .pr{font-size:17px;font-weight:800;margin:2px 0 14px}\n.sx-plus{position:absolute;top:8px;left:0;z-index:5;width:38px;height:38px;border-radius:50%;background:#FFFDF8!important;border:1.5px solid var(--gold)!important;color:var(--ink)!important;font-size:18px!important;font-weight:700!important;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 14px -8px rgba(60,40,10,.5);transition:transform .2s}\n.sx-plus:hover{transform:scale(1.08)}\n.sx-it.on .sx-plus,.sx-plus[aria-pressed=\"true\"]{background:var(--gold)!important;color:#fff!important}\n.sx-glass{position:absolute;left:-14px;right:-14px;top:calc(12px + 52px + 8px + 172px + 14px);height:18px;z-index:1;pointer-events:none}\n.sx-glass:before{content:\"\";position:absolute;left:0;right:0;top:0;height:12px;background:linear-gradient(180deg,rgba(255,255,255,.2),rgba(220,236,230,.7));border-top:1px solid #fff}\n.sx-glass i{position:absolute;left:0;right:0;top:12px;height:6px;background:var(--goldh);box-shadow:0 12px 16px -6px rgba(80,60,30,.35)}\n.sx-glass:after{content:\"\";position:absolute;left:0;right:0;top:18px;height:30px;background:linear-gradient(180deg,rgba(80,60,30,.10),transparent)}\n.sx-row:last-child:after{content:\"\";position:absolute;left:-14px;right:-14px;bottom:-6px;height:6px;background:var(--goldh)}\n/* featured rail */\n.sx-feat{padding:70px 72px 60px;background:#FBF8F3;border-top:1px solid #E6DCCB;border-bottom:1px solid #E6DCCB}\n.sx-rail{display:grid;grid-auto-flow:column;grid-auto-columns:calc((100% - 4*22px)/5);gap:22px;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:10px}\n.sx-fc{scroll-snap-align:start;display:flex;flex-direction:column;background:#fff;border:1px solid #E6DCCB;padding:14px 14px 16px}\n.sx-fc .ph{display:flex;align-items:center;justify-content:center;aspect-ratio:1/1;background:#fff}\n.sx-fc .ph img{max-width:100%;max-height:100%;object-fit:contain}\n.sx-fc.sk .ph{background:linear-gradient(90deg,#EFE7DA,#F7F1E7,#EFE7DA);background-size:200% 100%;animation:sxSk 1.4s infinite}\n.sx-fc .nm{margin-top:12px;font-size:16px;font-weight:600;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;min-height:2.8em}\n.sx-fc .pr{font-size:19px;font-weight:800;margin-top:4px}\n.sx-fc .act{display:flex;gap:8px;margin-top:12px}\n.sx-cart,.sx-g2{flex:1;height:44px;font-size:15px!important;font-weight:700!important;white-space:nowrap}\n.sx-cart{background:var(--ink)!important;color:#fff!important}\n.sx-cart.done{background:#4E6E47!important}\n.sx-g2{border:1.5px solid var(--gold)!important;background:#FFFDF8!important;color:var(--ink)!important;flex:.8}\n.sx-fc.on .sx-g2{background:var(--gold)!important;color:#fff!important}\n.sx-occ{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-top:30px}\n.sx-occ span{font-weight:700;font-size:16px;margin-left:6px}\n.sx-occ a{height:42px;display:inline-flex;align-items:center;padding:0 18px;border:1px solid #D8CBB5;background:#fff;font-size:15.5px;font-weight:600;border-radius:21px}\n.sx-occ a:hover{border-color:var(--gold);background:#FFF9EA}\n/* studio teaser */\n.sx-studio{display:grid;grid-template-columns:1.2fr 1fr;gap:60px;align-items:center;padding:80px 72px;background:linear-gradient(180deg,#F6F1E9,#F1EADF)}\n.sx-steps{list-style:none;padding:0;margin:26px 0 0;display:grid;gap:14px}\n.sx-steps li{display:flex;gap:16px;align-items:center;font-size:18px;font-weight:500}\n.sx-steps b{flex:none;width:40px;height:40px;border-radius:50%;border:1.5px solid var(--gold);display:flex;align-items:center;justify-content:center;font-weight:800;color:var(--goldt)}\n.sx-stu-box{background:#FFFDF8;border:1px solid rgba(154,118,51,.4);padding:28px;box-shadow:0 30px 50px -36px rgba(80,60,30,.45);text-align:center}\n.sx-stu-ims{display:flex;justify-content:center;align-items:flex-end;gap:6px;height:110px}\n.sx-stu-ims img{max-height:100%;max-width:19%;object-fit:contain;mix-blend-mode:multiply}\n.sx-stu-sum{display:flex;justify-content:space-between;align-items:baseline;font-size:17px;font-weight:600;border-top:1px solid #E6DCCB;padding-top:14px;margin:16px 0}\n.sx-stu-sum b{font-size:26px;font-weight:800}\n.sx-stu-empty{font-size:17px;color:var(--mut);margin:0 0 18px}\n.sx-stu-box .sx-btn{width:100%}\n/* departments grid */\n.sx-depts{padding:80px 72px}\n.sx-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:18px}\n.sx-dc{position:relative;display:flex;flex-direction:column;background:#fff;border:1px solid #E6DCCB;transition:border-color .3s,box-shadow .3s}\n.sx-dc:hover{border-color:var(--gold);box-shadow:0 20px 34px -24px rgba(80,60,30,.5)}\n.sx-dc .ph{aspect-ratio:1/0.85;display:flex;align-items:center;justify-content:center;padding:14px;background:linear-gradient(180deg,#FBF8F3,#F3ECE1)}\n.sx-dc .ph:empty{background:linear-gradient(90deg,#EFE7DA,#F7F1E7,#EFE7DA);background-size:200% 100%;animation:sxSk 1.4s infinite}\n.sx-dc .ph img{max-width:100%;max-height:100%;object-fit:contain;mix-blend-mode:multiply;transition:transform .5s}\n.sx-dc:hover .ph img{transform:scale(1.04)}\n.sx-dc .tx{display:flex;flex-direction:column;padding:14px 16px 16px;border-top:3px solid transparent;border-image:linear-gradient(90deg,#8E6C33,#E8D49C 32%,#B48F4C 58%,#E6CD8E 80%,#8A6831) 1}\n.sx-dc b{font-family:'Noto Serif Hebrew',serif;font-weight:600;font-size:21px;line-height:1.25}\n.sx-dc small{font-size:14px;color:var(--mut);margin-top:3px}\n.sx-dc .ar{position:absolute;left:14px;bottom:16px;color:var(--goldt);font-weight:800;font-size:18px}\n/* service */\n.sx-svc{display:grid;grid-template-columns:repeat(4,1fr);gap:0;border-top:1px solid #E6DCCB;background:#FBF8F3}\n.sx-svc>div{padding:26px 28px;border-left:1px solid #E6DCCB;display:flex;flex-direction:column;gap:4px}\n.sx-svc>div:last-child{border-left:0}\n.sx-svc b{font-size:17px;font-weight:700}.sx-svc span{font-size:15px;color:var(--mut)}\n.sx-svc a{border-bottom:1px solid var(--gold)}\n@media (min-width:761px) and (max-width:1200px){\n .sx-hero,.sx-shelf,.sx-feat,.sx-studio,.sx-depts{padding-left:32px;padding-right:32px}\n .sx-it .ph{height:140px}\n .sx-glass{top:calc(12px + 52px + 8px + 140px + 14px)}\n .sx-rail{grid-auto-columns:calc((100% - 2*22px)/3)}\n .sx-grid{grid-template-columns:repeat(4,minmax(0,1fr))}\n .sx-svc{grid-template-columns:1fr 1fr}\n .sg-search{width:170px}\n .sg-nav{font-size:15px;gap:14px}\n}\n@media (max-width:760px){\n .sg-root{font-size:16.5px}\n .sg-msearch{display:flex;width:auto;margin:0 12px 10px;height:46px}\n .sg-msearch input{font-size:16px}\n .sg-gift,.sg-cart{font-size:15px}\n .sg-wa{width:52px;height:52px;left:12px;bottom:14px}\n .sx-strip{display:flex;gap:14px;overflow-x:auto;padding:6px 12px 14px;scrollbar-width:none;background:#F6F1E9}\n .sx-strip::-webkit-scrollbar{display:none}\n .sx-strip a{flex:none;width:74px;display:flex;flex-direction:column;align-items:center;gap:6px;text-align:center}\n .sx-strip .th{width:66px;height:66px;border-radius:50%;background:#fff;border:2px solid #D9C49B;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px}\n .sx-strip .th img{max-width:100%;max-height:100%;object-fit:contain;mix-blend-mode:multiply}\n .sx-strip .t{font-size:13.5px;font-weight:700;line-height:1.2}\n .sx-hero{padding:26px 18px 24px}\n .sx-h1{font-size:38px}\n .sx-lead{font-size:17px}\n .sx-ctas{flex-direction:column;align-items:stretch;gap:10px}\n .sx-btn{height:52px;font-size:17px}\n .sx-trust{flex-direction:column;align-items:center;gap:6px;font-size:15px}\n .sx-shelf{padding:26px 12px 50px}\n .sx-hd{flex-direction:column;align-items:flex-start;gap:8px;margin-bottom:18px}\n .sx-h2{font-size:30px}\n .sx-help{font-size:15px}\n .sx-et{padding:0 8px}\n .sx-et:before,.sx-et:after{width:5px}\n .sx-row,.sx-row.r1,.sx-row.r2,.sx-row.r3{grid-template-columns:1.1fr 1fr}\n .sx-row.r1,.sx-row.r3{grid-template-columns:1fr 1.1fr}\n .sx-bay{padding:10px 10px 0}\n .sx-plq{padding:5px 10px 6px}\n .sx-plq b{font-size:17px}\n .sx-plq span{font-size:12.5px}\n .sx-it .ph{height:132px}\n .sx-glass{left:-8px;right:-8px;top:calc(10px + 46px + 8px + 132px + 14px)}\n .sx-row:last-child:after{left:-8px;right:-8px}\n .sx-row.r1 .sx-bay:nth-child(2):before,.sx-row.r0 .sx-bay:nth-child(3):before{top:-14px}\n .sx-row.r1 .sx-bay:nth-child(2):before,.sx-row.r3 .sx-bay:nth-child(2):before{top:30px}\n .sx-it .nm{font-size:14.5px;margin-top:28px}\n .sx-it .pr{font-size:16.5px}\n .sx-plus{width:40px;height:40px;top:4px;left:-2px}\n .sx-feat{padding:44px 12px 40px}\n .sx-rail{grid-auto-columns:72%;gap:12px}\n .sx-occ a{height:44px}\n .sx-studio{grid-template-columns:1fr;gap:26px;padding:50px 16px}\n .sx-steps li{font-size:16.5px}\n .sx-depts{padding:50px 12px}\n .sx-grid{grid-template-columns:1fr 1fr;gap:10px}\n .sx-dc b{font-size:18px}\n .sx-dc small{font-size:13px}\n .sx-dc .ar{display:none}\n .sx-svc{grid-template-columns:1fr}\n .sx-svc>div{border-left:0;border-bottom:1px solid #E6DCCB;padding:18px 18px}\n .sg-cat-hd h1{font-size:38px}\n .sg-pdp-info h1{font-size:30px}\n .sg-pdp-price{font-size:30px}\n .sg-card-nm{font-size:15px}\n .sg-b-gift{font-size:13.5px;height:36px}\n}\n\n.sx-fc .ph,.sx-dc .ph{position:relative;overflow:hidden}\n.sx-fc .ph img,.sx-dc .ph img{position:absolute;inset:10px;width:calc(100% - 20px);height:calc(100% - 20px);max-width:none;max-height:none;object-fit:contain}\n.sx-dc .ph{aspect-ratio:1/0.8}\n.sx-plus{top:128px}\n@media (min-width:761px) and (max-width:1200px){.sx-plus{top:98px}}\n@media (max-width:760px){.sx-plus{top:88px}.sx-rail{grid-auto-columns:62%}.sx-trust{flex-direction:row;flex-wrap:wrap;gap:6px 16px;font-size:14.5px}.sx-hero{padding-bottom:18px}}\n\n/* v3.1: real catalogue photos — shown as framed tiles standing on the glass */\n.sx-it .phw{position:relative;width:min(100%,168px);margin:6px auto 0}\n.sx-it .ph{display:block;width:100%;height:auto;aspect-ratio:1/1;padding:0;background:#fff;border:1px solid #E3D8C6;box-shadow:0 14px 22px -14px rgba(70,50,20,.45),0 2px 0 rgba(255,255,255,.8) inset;overflow:hidden}\n.sx-it .ph img{width:100%;height:100%;max-width:none;max-height:none;object-fit:cover;mix-blend-mode:normal}\n.sx-it .ph:hover img{transform:scale(1.05)}\n.sx-it .halo{inset:-14% -18% -6%;z-index:0}\n.sx-it.sk .phw{height:auto}.sx-it.sk .ph{aspect-ratio:1/1}\n.sx-plus{top:auto;bottom:-14px;left:-10px}\n@media (min-width:761px) and (max-width:1200px){.sx-plus{top:auto}}\n@media (max-width:760px){.sx-plus{top:auto;bottom:-12px;left:-8px}.sx-it .phw{width:min(100%,150px)}}\n.sx-it .nm{margin-top:32px}\n.sx-fc .ph img,.sx-dc .ph img{inset:0;width:100%;height:100%;object-fit:cover}\n.sx-fc .ph{padding:0}.sx-dc .ph{padding:0}\n.sx-strip .th{padding:0}.sx-strip .th img{width:100%;height:100%;object-fit:cover;mix-blend-mode:normal}\n\n/* v3.1: product purchase controls (drive Konimbo's own form) */\n.sg-pdp-ups{padding:18px 20px}\n.sg-pdp-ups h3{font-family:'Noto Serif Hebrew',serif;font-weight:500;font-size:20px;margin:0 0 12px;color:var(--goldt)}\n.sg-up-l{display:grid;gap:8px}\n.sg-up{display:grid;grid-template-columns:22px 48px 1fr auto;gap:12px;align-items:center;padding:8px 10px;background:#fff;border:1px solid #E3D8C6;cursor:pointer;font-size:16px;font-weight:500}\n.sg-up:hover{border-color:var(--gold)}\n.sg-up input{width:20px;height:20px;accent-color:#9A7633;margin:0}\n.sg-up img,.sg-up .noim{width:48px;height:48px;object-fit:cover;background:#F3ECE1}\n.sg-up .p{font-weight:800;white-space:nowrap}\n.sg-buy{display:flex;flex-wrap:wrap;gap:10px;align-items:stretch;margin-top:22px}\n.sg-qty{display:inline-flex;border:1px solid #CFC3B0;background:#fff;height:56px}\n.sg-qty button{width:46px;font-size:22px!important;font-weight:600!important}\n.sg-qty input{width:52px;border:0;border-left:1px solid #E3D8C6;border-right:1px solid #E3D8C6;text-align:center;font:700 18px 'Assistant',sans-serif;-moz-appearance:textfield}\n.sg-qty input::-webkit-inner-spin-button{-webkit-appearance:none}\n.sg-add{flex:1;min-width:200px;height:56px;background:#1B1814!important;color:#fff!important;font-size:18px!important;font-weight:700!important}\n.sg-add:hover{background:#3A332B!important}.sg-add.done{background:#4E6E47!important}\n.sg-now{height:56px;padding:0 24px;border:1.5px solid #1B1814!important;font-size:17px!important;font-weight:700!important;background:#fff!important}\n.sg-pdp-gift{width:100%;height:52px;margin-top:10px}\n@media (max-width:760px){.sg-add{min-width:0}.sg-now{width:100%}}\n\n/* Konimbo mini-cart, shown on top of the new design */\n.sg-mini{position:fixed!important;top:90px!important;left:24px!important;right:auto!important;z-index:100000!important;width:min(420px,calc(100vw - 24px))!important;max-height:calc(100vh - 120px);overflow:auto;background:#fff!important;border:1px solid #D8CBB5!important;box-shadow:0 30px 60px -20px rgba(0,0,0,.45)!important;direction:rtl;font-size:15px!important;color:#1B1814!important}\n.sg-mini *{font-family:'Assistant',Arial,sans-serif!important}\n\n@media (max-width:760px){.sg-mini{top:70px!important;left:12px!important}}\n/* v3.4: every photo stands on one line regardless of bay width */\n.sx-it .phw{height:168px;width:100%;display:flex;align-items:flex-end;justify-content:center;margin:6px 0 0}\n.sx-it .ph{width:min(100%,168px);flex:none}\n.sx-it .sx-plus{left:calc(50% - min(50%,84px) - 10px)}\n.sx-it .nm{position:relative;z-index:2}\n@media (min-width:761px) and (max-width:1200px){.sx-it .phw{height:136px}.sx-it .ph{width:min(100%,136px)}.sx-it .sx-plus{left:calc(50% - min(50%,68px) - 10px)}}\n@media (max-width:760px){.sx-it .phw{height:140px}.sx-it .ph{width:min(100%,140px)}.sx-it .sx-plus{left:calc(50% - min(50%,70px) - 8px)}}\n\n.sg-mini{display:block!important;visibility:visible!important;opacity:1!important;transform:none!important;padding:14px!important}\n/* tablet header: never overflow */\n@media (min-width:761px) and (max-width:1200px){.sg-bar{gap:16px;padding:0 24px}.sg-nav{gap:12px;font-size:14.5px}.sg-search{width:150px}.sg-nav-studio{display:none}.sg-bar:after{left:24px;right:24px}}\n@media (min-width:761px) and (max-width:1060px){.sg-nav{display:none}.sg-burger{display:flex}.sg-bar{grid-template-columns:44px 1fr auto}.sg-logo{justify-self:center}.sg-tools .sg-search{display:none}.sg-msearch{display:flex;margin:0 24px 12px;height:46px;width:auto}}\n/* buy row: stepper | add (wide) | buy-now */\n.sg-buy{display:grid!important;grid-template-columns:auto 1fr auto;gap:10px;align-items:stretch}\n.sg-buy .sg-add,.sg-buy .sg-now{min-height:50px;padding:0 22px;white-space:nowrap;width:auto}\n.sg-buy .sg-now{min-width:130px}\n@media (max-width:520px){.sg-buy{grid-template-columns:auto 1fr}.sg-buy .sg-now{grid-column:1/-1}}\n/* v3.5 buy row — neutralise legacy .sg-buy>* rules */\n.sg-buy>.sg-qty{display:inline-flex!important;flex-wrap:nowrap!important;gap:0!important;height:56px!important;border:1px solid #CFC3B0!important;background:#fff!important;align-self:center}\n.sg-buy>.sg-qty>*{display:flex!important;align-items:center;justify-content:center;height:100%!important}\n.sg-buy>.sg-qty>button{width:44px!important;background:none!important;border:0!important;cursor:pointer}\n.sg-buy>.sg-qty>input{width:50px!important;height:100%!important;border:0!important;border-inline:1px solid #E3D8C6!important;background:#fff!important}\n.sg-buy>.sg-add,.sg-buy>.sg-now{display:flex!important;align-items:center!important;justify-content:center!important;text-align:center!important;height:56px!important;padding:0 22px!important;cursor:pointer;white-space:nowrap}\n.sg-buy>.sg-add{background:#1B1814!important;color:#fff!important;border:0!important}\n.sg-buy>.sg-add.done{background:#4E6E47!important}\n.sg-buy>.sg-now{background:#fff!important;color:#1B1814!important;border:1.5px solid #1B1814!important;min-width:130px}\n.sg-buy{grid-template-columns:auto minmax(0,1fr) auto!important}\n.sg-buy>.sg-add{min-width:0!important}.sg-buy>.sg-now{min-width:0!important;padding:0 16px!important}\n@media (max-width:1180px){.sg-buy{grid-template-columns:auto minmax(0,1fr)!important}.sg-buy>.sg-now{grid-column:1/-1}}\n\n/* ===== Home v4 — \"מאלפים — לאחד\" ===== */\n.h4{--ink:#141210;--paper:#FAF8F4;--gold:#9C7A45;--line:rgba(20,18,16,.12);--serif:'Frank Ruhl Libre','Noto Serif Hebrew',serif;--sans:'Heebo','Assistant',sans-serif;background:var(--paper);color:var(--ink);font-family:var(--sans);overflow-x:clip}\n.h4 *{box-sizing:border-box}\n.h4 .num{font-family:var(--sans);font-variant-numeric:tabular-nums lining-nums}\n.h4 img{display:block;max-width:100%}\n.h4 button{font:inherit;color:inherit;background:none;border:0;cursor:pointer;padding:0}\n.h4 a{color:inherit}\n.h4-eye{font:500 12.5px/1 var(--sans);letter-spacing:.22em;color:var(--gold);margin:0 0 18px}\n.h4-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:52px;padding:0 30px;background:var(--ink)!important;color:var(--paper)!important;font:600 15px/1 var(--sans)!important;letter-spacing:.02em;text-decoration:none;border:1px solid var(--ink)!important;transition:background .25s,color .25s}\n.h4-btn:hover{background:#3a332b!important}\n.h4-btn.ghost{background:transparent!important;color:var(--ink)!important}\n.h4-btn.ghost:hover{background:var(--ink)!important;color:var(--paper)!important}\n.h4-btn.light{background:var(--paper)!important;color:#141210!important;border-color:var(--paper)!important}\n.h4-btn[disabled]{opacity:.4;cursor:default}\n.h4-btn.done,.h4 [data-cart].done{background:#4E6E47!important;border-color:#4E6E47!important;color:#fff!important}\n.h4-sh{text-align:center;max-width:820px;margin:0 auto 48px}\n.h4-sh h2{font:300 clamp(34px,4.4vw,62px)/1.08 var(--serif);margin:0;letter-spacing:-.01em}\n.h4-load{padding:60px;text-align:center;color:#8b8073}\n.h4 :focus-visible{outline:2px solid var(--gold);outline-offset:3px}\n\n/* 1 · living archive */\n.h4-hero{position:relative;height:calc(100svh - 96px);min-height:640px;max-height:1000px;overflow:hidden;display:grid;place-items:center}\n.h4-wall{position:absolute;inset:-4% -2%;display:flex;gap:16px;padding:0 16px;opacity:0;transition:opacity 1.2s ease}\n.h4-wall.in{opacity:1}\n.h4-col{flex:1;overflow:hidden;min-width:0}\n.h4-ct{animation:h4drift var(--d) linear infinite;animation-delay:var(--o);will-change:transform}\n.h4-col.up .h4-ct{animation-direction:reverse}\n.h4-wall:hover .h4-ct{animation-play-state:paused}\n@keyframes h4drift{to{transform:translateY(-50%)}}\n.h4-t{display:block;position:relative;width:100%;margin:0 0 16px;background:#fff;aspect-ratio:4/5;overflow:hidden}\n.h4-t img{width:100%;height:100%;object-fit:cover;transition:transform .6s ease}\n.h4-t span{position:absolute;inset:auto 0 0 0;padding:8px 10px;background:rgba(250,248,244,.94);font:500 12px/1.3 var(--sans);text-align:right;transform:translateY(100%);transition:transform .3s}\n.h4-t:hover img{transform:scale(1.05)}.h4-t:hover span{transform:none}\n.h4-veil{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 44% 56% at 50% 50%,rgba(250,248,244,.97) 0,rgba(250,248,244,.93) 52%,rgba(250,248,244,0) 88%),linear-gradient(var(--paper),rgba(250,248,244,0) 14%,rgba(250,248,244,0) 86%,var(--paper))}\n.h4-hero-in{position:relative;z-index:2;text-align:center;max-width:760px;padding:0 24px}\n.h4-h1{font:300 clamp(54px,8.2vw,128px)/.94 var(--serif);margin:0 0 22px;letter-spacing:-.015em}\n.h4-h1 span{display:block}.h4-h1 span+span{color:var(--gold)}\n.h4-live{font:400 16.5px/1.6 var(--sans);color:#4a4239;margin:0 auto 28px;max-width:560px;min-height:52px}\n.h4-live b{font-weight:600;color:var(--ink)}\n.h4-search{display:flex;max-width:600px;margin:0 auto 18px;background:#fff;border:1px solid var(--ink);height:62px;box-shadow:0 20px 50px -30px rgba(20,18,16,.35)}\n.h4-search input{flex:1;min-width:0;border:0!important;background:transparent!important;padding:0 22px!important;font:400 17px var(--sans)!important;color:var(--ink);outline:0;height:100%!important}\n.h4-search button{width:62px;display:grid;place-items:center;background:var(--ink)!important;color:var(--paper)!important}\n.h4-quick{display:flex;flex-wrap:wrap;justify-content:center;gap:6px 18px;margin:0 auto 30px;max-width:640px}\n.h4-quick a{font:500 14px/1.6 var(--sans);text-decoration:none;border-bottom:1px solid transparent}\n.h4-quick a:hover{border-color:var(--gold)}\n.h4-cta{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}\n.h4-hint{position:absolute;bottom:18px;left:0;right:0;text-align:center;font:400 12.5px var(--sans);color:#6f665b;margin:0;z-index:2;pointer-events:none}\n\n/* 2 · worlds (desktop: one pinned stage, scroll focuses a world) */\n.h4-worlds{--bg:#EEF0F0;--fg:#1d2a2e;position:relative;height:calc(8 * 72vh + 100vh)}\n.h4-stage{position:sticky;top:0;height:100vh;display:grid;grid-template-columns:250px 1fr;background:var(--bg);color:var(--fg);transition:background .8s ease,color .8s ease;overflow:hidden}\n.h4-idx{display:flex;flex-direction:column;justify-content:center;gap:2px;padding:0 40px 0 0;border-left:1px solid color-mix(in srgb,var(--fg) 14%,transparent)}\n.h4-idx button{display:grid;grid-template-columns:30px 1fr;text-align:right;padding:9px 0;opacity:.42;transition:opacity .3s}\n.h4-idx button i{font-style:normal;font-size:12px;padding-top:6px}\n.h4-idx button b{font:400 21px/1.2 var(--serif)}\n.h4-idx button small{grid-column:2;font:400 12px var(--sans);opacity:.8}\n.h4-idx button[aria-selected=true]{opacity:1}\n.h4-idx button[aria-selected=true] b{font-size:25px}\n.h4-idx button:hover{opacity:.85}\n.h4-scene{position:relative}\n.h4-w{position:absolute;inset:0;display:grid;grid-template-columns:minmax(260px,32%) 1fr;align-items:center;padding:60px 48px;pointer-events:none}\n.h4-w.on{pointer-events:auto}\n.h4-wt{padding-left:24px;opacity:0;transform:translateY(24px);transition:opacity .6s,transform .6s}\n.h4-w.on .h4-wt{opacity:1;transform:none}\n.h4-wt .h4-eye{color:inherit;opacity:.7}\n.h4-wt h2{font:300 clamp(54px,6.6vw,108px)/.95 var(--serif);margin:0 0 18px;letter-spacing:-.02em}\n.h4-wt p{font:400 17px/1.55 var(--sans);margin:0 0 30px;max-width:300px;opacity:.85}\n.h4-comp{position:relative;height:min(78vh,720px)}\n.h4-o{position:absolute;display:block;text-align:right;opacity:0;transform:translateY(60px) scale(.96);transition:opacity .7s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1);transition-delay:calc(var(--i) * 70ms)}\n.h4-w.on .h4-o{opacity:1;transform:none}\n.h4-o .f{display:block;background:#fff;padding:8px;box-shadow:0 40px 70px -40px rgba(0,0,0,.45);transition:transform .4s}\n.h4-o:hover .f{transform:translateY(-6px)}\n.h4-o img{width:100%;aspect-ratio:1;object-fit:cover}\n.h4-o .cap{display:flex;justify-content:space-between;gap:10px;padding-top:10px;font:400 13px/1.35 var(--sans)}\n.h4-o .cap b{font-weight:500}\n.h4-o .cap .num{font-weight:600}\n.h4-o.s1{left:30%;top:6%;width:36%}\n.h4-o.s2{left:3%;top:2%;width:23%}\n.h4-o.s3{left:71%;top:12%;width:24%}\n.h4-o.s4{left:7%;top:50%;width:21%}\n.h4-o.s5{left:72%;top:58%;width:20%}\n\n/* 3 · composed sets */\n.h4-looks,.h4-gift,.h4-index{padding:130px 6vw}\n.h4-ltabs{display:flex;justify-content:center;gap:34px;margin:-14px 0 44px;flex-wrap:wrap}\n.h4-ltabs button{font:400 21px/1.4 var(--serif);padding-bottom:6px;border-bottom:1px solid transparent;opacity:.5}\n.h4-ltabs button[aria-selected=true]{opacity:1;border-color:var(--gold)}\n.h4-look{display:grid;grid-template-columns:1.4fr .9fr;gap:56px;max-width:1400px;margin:0 auto;align-items:start}\n.h4-board{position:relative;aspect-ratio:4/3.3;background:var(--bg)}\n.h4-bi{position:absolute;display:block;transition:opacity .3s,transform .5s;animation:h4in .8s both;animation-delay:calc(var(--i) * 80ms)}\n@keyframes h4in{from{opacity:0;transform:translateY(30px)}}\n.h4-bi .f{display:block;background:#fff;padding:7px;box-shadow:0 34px 60px -36px rgba(0,0,0,.5)}\n.h4-bi img{width:100%;aspect-ratio:1;object-fit:cover}\n.h4-bi i{position:absolute;top:-12px;right:-12px;width:28px;height:28px;border-radius:50%;background:var(--ink);color:var(--paper);display:grid;place-items:center;font:600 13px var(--sans);font-style:normal}\n.h4-bi.off{opacity:.28}\n.h4-bi:hover{transform:translateY(-6px)}\n.h4-bi.b1{left:35%;top:9%;width:31%}.h4-bi.b2{left:5%;top:6%;width:24%}.h4-bi.b3{left:71%;top:10%;width:24%}\n.h4-bi.b4{left:9%;top:52%;width:25%}.h4-bi.b5{left:42%;top:57%;width:22%}.h4-bi.b6{left:72%;top:55%;width:21%}\n.h4-note{position:absolute;bottom:10px;left:14px;margin:0;font:400 11.5px var(--sans);color:rgba(20,18,16,.55)}\n.h4-lside h3{font:300 46px/1 var(--serif);margin:0 0 10px}\n.h4-lside>p{font:400 16px/1.5 var(--sans);color:#5a5147;margin:0 0 24px}\n.h4-lside ul{list-style:none;margin:0;padding:0;border-top:1px solid var(--line)}\n.h4-lside li{display:flex;align-items:center;border-bottom:1px solid var(--line)}\n.h4-lside label{flex:1;display:grid;grid-template-columns:22px 24px 52px 1fr auto;align-items:center;gap:12px;padding:12px 0;cursor:pointer;min-width:0}\n.h4-lside input{width:18px;height:18px;accent-color:var(--ink)}\n.h4-lside label>i{font-style:normal;font-size:13px;color:var(--gold);font-weight:600}\n.h4-lside .th{width:52px;height:52px;object-fit:cover;background:#fff}\n.h4-lside .nm{font:400 14px/1.35 var(--sans);overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}\n.h4-lside .pr{font:600 15px var(--sans);white-space:nowrap}\n.h4-lside .go{padding:10px 0 10px 4px;text-decoration:none;color:var(--gold);margin-right:12px}\n.h4-ltot{display:flex;justify-content:space-between;align-items:baseline;padding:20px 0;font:400 15px var(--sans)}\n.h4-ltot b{font:600 30px var(--sans)}\n.h4-lact{display:grid;grid-template-columns:1fr 1fr;gap:10px}\n\n/* 4 · gifts */\n.h4-gift{background:#F2EDE4}\n.h4-ways{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:1300px;margin:0 auto 44px}\n.h4-way{display:flex;flex-direction:column;gap:12px;padding:34px 32px;min-height:240px;background:var(--paper);text-decoration:none;border:1px solid var(--line);transition:transform .35s}\na.h4-way:hover{transform:translateY(-4px)}\n.h4-way b{font:300 36px/1.05 var(--serif)}\n.h4-way span{font:400 15.5px/1.55 var(--sans);color:#5a5147}\n.h4-way i{margin-top:auto;font:500 14px var(--sans);font-style:normal;color:var(--gold);display:flex;align-items:center;gap:10px;flex-wrap:wrap}\n.h4-way.dark{background:var(--ink);color:var(--paper);border-color:var(--ink)}\n.h4-way.dark span{color:#cfc5b6}.h4-way.dark i{color:#d8b77e}\n.h4-tray .ims{display:flex}.h4-tray img{width:34px;height:34px;border-radius:50%;object-fit:cover;border:2px solid var(--ink);margin-left:-8px;background:#fff}\n.h4-bud{display:flex;flex-wrap:wrap;gap:8px;margin-top:auto}\n.h4-bud button{border:1px solid var(--ink)!important;padding:10px 16px!important;font:500 14px var(--sans)!important;border-radius:999px}\n.h4-bud button[aria-pressed=true]{background:var(--ink)!important;color:var(--paper)!important}\n.h4-rail{display:flex;gap:18px;overflow-x:auto;scroll-snap-type:x mandatory;max-width:1300px;margin:0 auto;padding-bottom:12px;scrollbar-width:thin}\n.h4-c{flex:0 0 230px;scroll-snap-align:start;display:flex;flex-direction:column}\n.h4-cimg{display:block;background:#fff;padding:8px}.h4-cimg img{width:100%;aspect-ratio:1;object-fit:cover}\n.h4-c .k{font:500 11.5px var(--sans);letter-spacing:.12em;color:var(--gold);margin:12px 0 4px}\n.h4-c .nm{font:400 15px/1.35 var(--sans);text-decoration:none;min-height:40px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}\n.h4-c .pr{font:600 18px var(--sans);margin:6px 0 12px}\n.h4-c .ac{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:auto}\n.h4-c .ac button{min-height:42px;font:600 13px var(--sans)!important;border:1px solid var(--ink)!important}\n.h4-c .ac [data-cart]{background:var(--ink)!important;color:var(--paper)!important}\n.h4-c .ac [data-gift][aria-pressed=true]{background:#efe3cb!important}\n\n/* 5 · index */\n.h4-list{list-style:none;margin:0 auto;padding:0;max-width:1300px;border-top:1px solid var(--line);counter-reset:a}\n.h4-list a{display:grid;grid-template-columns:60px auto 1fr 120px;align-items:baseline;gap:24px;padding:20px 0;border-bottom:1px solid var(--line);text-decoration:none;transition:padding .35s,color .3s}\n.h4-list a:hover{padding-right:22px;color:var(--gold)}\n.h4-list i{font-style:normal;font-size:13px;color:var(--gold)}\n.h4-list b{font:300 clamp(34px,4.6vw,66px)/1 var(--serif)}\n.h4-list small{font:400 15px var(--sans);color:#6f665b}\n.h4-list .c{text-align:left;font:500 15px var(--sans);color:#6f665b}\n.h4-list .mth{display:none}\n.h4-peek{position:fixed;left:0;top:0;width:240px;height:300px;pointer-events:none;opacity:0;transition:opacity .25s;z-index:50}\n.h4-peek.on{opacity:1}.h4-peek img{width:100%;height:100%;object-fit:cover;box-shadow:0 40px 80px -30px rgba(0,0,0,.5);background:#fff;padding:8px}\n.h4-promise{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line)}\n.h4-promise div{padding:36px 30px;border-left:1px solid var(--line);display:flex;flex-direction:column;gap:6px}\n.h4-promise b{font:400 22px var(--serif)}.h4-promise span{font:400 14px/1.5 var(--sans);color:#5a5147}\n\n/* product sheet */\n.h4-sheet{position:fixed;inset:0;z-index:2000;display:grid;place-items:center}\n.h4-sheet[hidden]{display:none}\n.h4-sh-bg{position:absolute;inset:0;background:rgba(20,18,16,.5);opacity:0;transition:opacity .25s}\n.h4-sh-in{position:relative;width:min(940px,92vw);max-height:90vh;overflow:auto;background:var(--paper);display:grid;grid-template-columns:1fr 1fr;opacity:0;transform:translateY(20px);transition:opacity .3s,transform .35s}\n.h4-sheet.in .h4-sh-bg,.h4-sheet.in .h4-sh-in{opacity:1;transform:none}\n.h4-sh-im{background:#fff;padding:20px}.h4-sh-im img{width:100%;aspect-ratio:1;object-fit:contain}\n.h4-sh-tx{padding:44px 40px;display:flex;flex-direction:column;gap:12px}\n.h4-sh-tx .k{font:500 12px var(--sans);letter-spacing:.16em;color:var(--gold);margin:0}\n.h4-sh-tx h3{font:300 36px/1.12 var(--serif);margin:0}\n.h4-sh-tx .pr{font:600 28px var(--sans);margin:4px 0 10px}\n.h4-sh-tx .ac{display:grid;gap:10px}\n.h4-sh-tx .more{font:500 14px var(--sans);color:var(--ink);margin-top:6px}\n.h4-sh-tx .fine{font:400 13px/1.5 var(--sans);color:#6f665b;margin:auto 0 0}\n.h4-x{position:absolute;top:10px;left:14px;font-size:30px!important;line-height:1;z-index:2;width:44px;height:44px}\nhtml.h4-lock{overflow:hidden}\n.sg-vswitch{position:fixed;bottom:18px;left:50%;transform:translateX(-50%);z-index:900;background:#141210;color:#FAF8F4!important;font:500 13px 'Heebo','Assistant',sans-serif;padding:11px 20px;border-radius:999px;text-decoration:none;box-shadow:0 10px 30px -10px rgba(0,0,0,.5);white-space:nowrap}\n\n/* tablet */\n@media (max-width:1100px){\n  .h4-stage{grid-template-columns:200px 1fr}.h4-idx{padding-right:24px}\n  .h4-w{grid-template-columns:1fr;grid-template-rows:auto 1fr;padding:40px 32px}\n  .h4-wt h2{font-size:64px}.h4-wt p{margin-bottom:16px}\n  .h4-comp{height:58vh}\n  .h4-look{grid-template-columns:1fr}\n}\n/* mobile — designed for the thumb, not shrunk */\n@media (max-width:760px){\n  .h4-hero{height:calc(100svh - 150px);min-height:600px}\n  .h4-wall{gap:10px;padding:0 10px}.h4-t{margin-bottom:10px}\n  .h4-veil{background:linear-gradient(var(--paper),rgba(250,248,244,.55) 14%,rgba(250,248,244,.9) 34%,rgba(250,248,244,.95) 66%,rgba(250,248,244,.55) 86%,var(--paper))}\n  .h4-hero-in{padding:0 18px}\n  .h4-live{font-size:15px;margin-bottom:20px}\n  .h4-search{height:56px}.h4-search input{font-size:16px!important;padding:0 16px!important}\n  .h4-quick{display:none}\n  .h4-cta .h4-btn{flex:1;padding:0 12px}\n  .h4-hint{display:none}\n  .h4-worlds{height:auto}\n  .h4-stage{position:relative;height:auto;display:block;background:transparent;color:var(--ink)}\n  .h4-idx{flex-direction:row;overflow-x:auto;gap:8px;padding:16px 16px;border:0;position:sticky;top:0;z-index:3;background:var(--paper);scrollbar-width:none}\n  .h4-idx button{flex:0 0 auto;display:block;padding:9px 16px;border:1px solid var(--line);border-radius:999px;opacity:1}\n  .h4-idx button i,.h4-idx button small{display:none}\n  .h4-idx button b,.h4-idx button[aria-selected=true] b{font:500 14px var(--sans)}\n  .h4-idx button[aria-selected=true]{background:var(--ink);color:var(--paper);border-color:var(--ink)}\n  .h4-scene{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none}\n  .h4-w{position:relative;flex:0 0 100%;scroll-snap-align:start;display:block;padding:36px 18px 40px;background:var(--bg);color:var(--fg);pointer-events:auto}\n  .h4-wt,.h4-o{opacity:1;transform:none}\n  .h4-wt h2{font-size:54px}.h4-wt p{font-size:15px;margin-bottom:20px}\n  .h4-comp{position:static;height:auto;display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:26px}\n  .h4-o{position:static;width:auto!important}\n  .h4-o.s1{grid-column:1/-1}\n  .h4-o.s1 .f{padding:10px}\n  .h4-o .cap{font-size:12.5px;flex-direction:column;gap:2px}\n  .h4-looks,.h4-gift,.h4-index{padding:80px 18px}\n  .h4-sh{margin-bottom:30px}\n  .h4-ltabs{gap:8px;justify-content:flex-start;overflow-x:auto;flex-wrap:nowrap;margin:0 -18px 24px;padding:0 18px;scrollbar-width:none}\n  .h4-ltabs button{flex:0 0 auto;font:500 14px var(--sans);border:1px solid var(--line);border-radius:999px;padding:9px 16px;opacity:1}\n  .h4-ltabs button[aria-selected=true]{background:var(--ink);color:var(--paper)}\n  .h4-look{gap:26px}\n  .h4-board{margin:0 -18px}\n  .h4-bi i{width:24px;height:24px;font-size:12px;top:-8px;right:-8px}\n  .h4-lside h3{font-size:36px}\n  .h4-lact{position:sticky;bottom:0;background:var(--paper);padding:12px 0;grid-template-columns:1fr;z-index:2}\n  .h4-ways{grid-template-columns:1fr;gap:12px}\n  .h4-way{min-height:0;padding:26px 22px}.h4-way b{font-size:30px}\n  .h4-rail{margin:0 -18px;padding:0 18px 12px}\n  .h4-c{flex-basis:62vw}\n  .h4-list a{grid-template-columns:56px 1fr auto;gap:14px;padding:14px 0}\n  .h4-list .mth{display:block;width:56px;height:56px;object-fit:cover;grid-row:1/3;background:#fff}\n  .h4-list i{display:none}\n  .h4-list b{font-size:30px}\n  .h4-list small{grid-column:2;font-size:13px}\n  .h4-list .c{grid-row:1;grid-column:3;font-size:13px}\n  .h4-peek{display:none}\n  .h4-promise{grid-template-columns:1fr 1fr}.h4-promise div{padding:22px 18px}\n  .h4-sheet{place-items:end center}\n  .h4-sh-in{width:100%;max-height:88vh;grid-template-columns:1fr;border-radius:18px 18px 0 0;transform:translateY(100%)}\n  .h4-sh-im{padding:14px 60px}.h4-sh-tx{padding:22px 20px 28px}.h4-sh-tx h3{font-size:28px}\n  .sg-vswitch{bottom:84px;font-size:12px}\n}\n@media (prefers-reduced-motion:reduce){\n  .h4-ct{animation:none}.h4-o,.h4-wt,.h4-bi,.h4-sh-in{transition:none;animation:none}\n}\n.sg-vswitch{bottom:auto;top:auto;left:18px;right:auto;transform:none;bottom:96px;font-size:12px;padding:9px 14px;opacity:.92}\n@media (max-width:760px){.sg-vswitch{bottom:auto;top:auto;left:12px;bottom:92px;max-width:58vw;white-space:normal;line-height:1.3}\n .h4-o.s1{grid-column:1/-1;width:72%!important;justify-self:center}.h4-comp{gap:14px 12px}}\n@media (max-width:760px){.sg-vswitch{position:static;display:block;transform:none;margin:24px auto;max-width:none;width:max-content;bottom:auto}}\n\n/* ===== shared: home demos A/B/C ===== */\n.sg-vs{display:flex;align-items:center;gap:6px;justify-content:center;flex-wrap:wrap;padding:7px 12px;background:#141210;color:#cfc6b8;font:400 12.5px 'Heebo',sans-serif;position:relative;z-index:30}\n.sg-vs span{opacity:.7;margin-inline-end:6px;white-space:nowrap}\n.sg-vs a{color:#FAF8F4!important;text-decoration:none;padding:4px 11px;border-radius:999px;border:1px solid rgba(255,255,255,.18);white-space:nowrap}\n.sg-vs a[aria-current]{background:#C9A86A;border-color:#C9A86A;color:#141210!important;font-weight:600}\nhtml.sg2 .sg-vswitch{display:none!important}\nhtml.sg-hx .sg-util,html.sg-hx .sg-msearch{display:none!important}\nhtml.sg-hx .sg-bar{height:64px}\nhtml.sg-hx .sg-logo img{max-height:44px;width:auto}\nhtml.hk-lock{overflow:hidden}\n.hk-sheet{position:fixed;inset:0;z-index:3000;display:grid;place-items:center;font-family:'Heebo',sans-serif;direction:rtl}\n.hk-sheet[hidden]{display:none}\n.hk-bg{position:absolute;inset:0;background:rgba(20,18,16,.42);opacity:0;transition:opacity .28s;backdrop-filter:blur(3px)}\n.hk-in{position:relative;display:grid;grid-template-columns:1.05fr 1fr;width:min(940px,92vw);max-height:88vh;background:#FBFAF7;color:#141210;opacity:0;transform:translateY(18px) scale(.985);transition:opacity .28s,transform .38s cubic-bezier(.2,.8,.2,1);box-shadow:0 40px 90px -30px rgba(0,0,0,.45);overflow:hidden}\n.hk-sheet.in .hk-bg,.hk-sheet.in .hk-in{opacity:1;transform:none}\n.hk-im{background:#F1EDE6;display:flex;align-items:center;justify-content:center;padding:34px;min-height:420px}\n.hk-im img{max-width:100%;max-height:62vh;object-fit:contain;mix-blend-mode:multiply}\n.hk-tx{padding:46px 40px 34px;display:flex;flex-direction:column;gap:12px;overflow:auto}\n.hk-k{font-size:12px;letter-spacing:.12em;color:#8a7a62;margin:0}\n.hk-tx h3{font:400 30px/1.25 'Frank Ruhl Libre',serif;margin:0}\n.hk-pr{font:400 26px 'Frank Ruhl Libre',serif;margin:2px 0 8px}\n.hk-ac{display:flex;flex-direction:column;gap:10px}\n.sg-root .hk-b{font:500 15px 'Heebo',sans-serif;height:52px;border:1px solid #141210;background:#141210;color:#fff;cursor:pointer;transition:background .2s,color .2s}\n.sg-root .hk-b:hover{background:#2c2925}\n.sg-root .hk-b.ghost{background:transparent;color:#141210}\n.sg-root .hk-b.ghost:hover{background:#141210;color:#fff}\n.sg-root .hk-b.ghost[aria-pressed=true]{background:#EFE6D3;border-color:#B8955A;color:#5b4520}\n.sg-root .hk-b.done{background:#4b6b4d;border-color:#4b6b4d}\n.hk-more{color:#141210;font-size:14px;margin-top:6px}\n.hk-fine{font-size:12.5px;color:#7c7368;line-height:1.6;margin:auto 0 0}\n.sg-root .hk-x{position:absolute;top:10px;left:12px;z-index:2;width:40px;height:40px;border:0;background:rgba(255,255,255,.8);font-size:26px;line-height:1;cursor:pointer;border-radius:50%}\n.hk-sheet.tC .hk-tx h3,.hk-sheet.tC .hk-pr{font-family:'Bellefair',serif}\n.hk-sheet.tA .hk-tx h3,.hk-sheet.tA .hk-pr{font-family:'IBM Plex Sans Hebrew',sans-serif;font-weight:300}\n@media (max-width:760px){\n  .hk-sheet{place-items:end stretch}\n  .hk-in{grid-template-columns:1fr;width:100%;max-height:92vh;transform:translateY(40px);border-radius:16px 16px 0 0}\n  .hk-im{min-height:0;height:38vh;padding:18px}\n  .hk-im img{max-height:100%}\n  .hk-tx{padding:20px 20px 26px;gap:8px}\n  .hk-tx h3{font-size:22px}\n  .hk-pr{font-size:22px;margin:0 0 6px}\n  .hk-ac{flex-direction:row}.hk-ac .hk-b{flex:1;height:50px;font-size:14.5px}\n}\n@media (prefers-reduced-motion:reduce){.hk-in,.hk-bg{transition:none}}\n\n/* ===== A — the living product world ===== */\n.hA{--ink:#151412;--bg:#ECEDEA;font-family:'IBM Plex Sans Hebrew','Heebo',sans-serif;color:var(--ink);direction:rtl}\n.hA-f{position:relative;height:calc(100svh - 98px);min-height:600px;max-height:1100px;overflow:hidden;background:var(--bg);transition:background-color 1.2s ease;touch-action:pan-y;user-select:none;-webkit-user-select:none;cursor:grab}\n.hA-f.grab{cursor:grabbing}\n.hA-st{position:absolute;inset:0;opacity:0;transition:opacity 1.2s}\n.hA-f.ready .hA-st{opacity:1}\n.hA-i{position:absolute;left:0;top:0;padding:0;border:0;background:none;cursor:pointer;transform-origin:50% 50%;will-change:transform;-webkit-touch-callout:none;outline-offset:6px}\n.hA-i .ph{display:block;width:100%;height:100%;transition:transform .45s cubic-bezier(.2,.8,.2,1),opacity .5s,filter .5s}\n.hA-i img{width:100%;height:100%;object-fit:contain;mix-blend-mode:multiply;pointer-events:none;display:block}\n.hA-i.d0{z-index:1}.hA-i.d1{z-index:2}.hA-i.d2{z-index:4}\n.hA-i.d0 .ph{opacity:.62;filter:saturate(.75)}\n.hA-i.d1 .ph{opacity:.9}\n.hA-i .cp{position:absolute;top:100%;right:50%;transform:translate(50%,4px);white-space:nowrap;font-size:13px;line-height:1.35;text-align:center;opacity:0;transition:opacity .25s,transform .25s;pointer-events:none;background:rgba(255,255,255,.92);padding:6px 10px}\n.hA-i .cp b{display:block;font-weight:500}.hA-i .cp i{font-style:normal;color:#7a6a50}\n@media (hover:hover){.hA-i:hover{z-index:9}.hA-i:hover .ph{transform:scale(1.12);opacity:1;filter:none}.hA-i:hover .cp{opacity:1;transform:translate(50%,10px)}}\n.hA-i:focus-visible .cp{opacity:1}\n.hA-i.lifted .ph{opacity:.15}\n.hA-f.flt .hA-i .ph{opacity:.1;filter:grayscale(1)}\n.hA-f.flt .hA-i.hit{z-index:8}\n.hA-f.flt .hA-i.hit .ph{opacity:1;filter:none;transform:scale(1.18)}\n.hA-f.flt .hA-i.hit .cp{opacity:1}\n.hA-lb{position:absolute;left:0;top:0;width:0;height:0;z-index:3;pointer-events:none;will-change:transform}\n.hA-lb>*{position:absolute;left:0;transform:translateX(-50%);white-space:nowrap}\n.hA-lb b{top:-48px;font:200 76px/1 'IBM Plex Sans Hebrew',sans-serif;letter-spacing:-.02em;opacity:.16;transition:opacity .8s}\n.hA-lb.on b{opacity:.82}\n.hA-lb a{top:42px;font-size:15px;color:var(--ink);pointer-events:auto;opacity:0;transition:opacity .6s;border-bottom:1px solid currentColor;padding-bottom:2px;text-decoration:none}\n.hA-lb.on a{opacity:1}\n.hA-f.over .hA-lb b{opacity:.9;font-size:110px;font-weight:300}\n.hA-f.over .hA-lb{pointer-events:auto;cursor:pointer}\n.hA-f.over .hA-lb a{opacity:0}\n.hA-f.over .hA-i .cp{display:none}\n.hA-vig{position:absolute;inset:0;pointer-events:none;z-index:10;background:radial-gradient(ellipse 75% 70% at 55% 50%,transparent 55%,var(--bg) 100%);transition:background 1.2s}\n.hA-hd{position:absolute;top:44px;right:56px;z-index:12;width:min(470px,40vw);pointer-events:none}\n.hA-hd:before{content:\"\";position:absolute;inset:-60px -60px -40px -120px;background:radial-gradient(closest-side,var(--bg) 40%,transparent);opacity:.92;z-index:-1;transition:background 1.2s}\n.hA-eye{font:500 12px 'Heebo',sans-serif;letter-spacing:.18em;color:#7a6a50;margin:0 0 14px}\n.hA-h1{font:200 clamp(44px,5.4vw,84px)/.98 'IBM Plex Sans Hebrew',sans-serif;letter-spacing:-.035em;margin:0}\n.hA-h1 span{display:block}.hA-h1 em{font-style:normal;font-weight:500}\n.hA-sub{font-size:16px;line-height:1.6;margin:18px 0 22px;max-width:400px;color:#3b3833}\n.hA-s{display:flex;align-items:center;height:54px;background:#fff;border:1px solid rgba(21,20,18,.16);pointer-events:auto;box-shadow:0 14px 30px -18px rgba(0,0,0,.35)}\n.hA-s input{flex:1;height:100%;border:0;background:transparent;padding:0 18px;font:400 15.5px 'IBM Plex Sans Hebrew','Heebo',sans-serif;color:var(--ink);outline:0}\n.hA-s button{width:54px;height:100%;border:0;background:var(--ink);color:#fff;font-size:20px;cursor:pointer}\n.hA-sres{font-size:13.5px;min-height:20px;margin:10px 4px 0;color:#3b3833}\n.hA-help{position:absolute;top:50px;left:56px;z-index:12;margin:0;font-size:12.5px;color:#5b564e;max-width:260px;line-height:1.6;pointer-events:none;text-align:left}\n.hA-help b{font-weight:500;color:var(--ink)}\n.hA-help .mo{display:none}\n.hA-dock{position:absolute;bottom:22px;left:24px;right:24px;z-index:12;display:flex;align-items:flex-end;justify-content:space-between;gap:20px;pointer-events:none}\n.hA-nav{display:flex;align-items:center;gap:6px;flex-wrap:wrap;pointer-events:auto;background:rgba(255,255,255,.78);backdrop-filter:blur(10px);padding:6px;max-width:calc(100% - 300px)}\n.hA-pills{display:contents}\n.hA-nav button{font:400 14px 'IBM Plex Sans Hebrew','Heebo',sans-serif;height:38px;padding:0 14px;border:0;background:transparent;color:var(--ink);cursor:pointer;white-space:nowrap;transition:background .3s,color .3s}\n.hA-nav button:hover{background:rgba(21,20,18,.06)}\n.hA-nav button[aria-current=true]{background:var(--ink);color:#fff}\n.hA-ov{display:inline-flex;align-items:center;gap:8px;border-inline-end:1px solid rgba(21,20,18,.15)!important}\n.hA-ov[aria-pressed=true]{background:#C9A86A!important;color:#141210!important}\n.hA-box{pointer-events:auto;display:flex;align-items:center;gap:12px;background:#151412;color:#fff!important;text-decoration:none;padding:10px 18px 10px 12px;min-width:250px;height:66px;position:relative;transition:transform .3s,box-shadow .3s;box-shadow:0 18px 40px -20px rgba(0,0,0,.6)}\n.hA-box:before{content:\"\";position:absolute;inset:-1px;border:1px solid #C9A86A;opacity:0;transition:opacity .3s}\n.hA-box.hot{transform:scale(1.08)}.hA-box.hot:before{opacity:1}\n.hA-box.gulp{animation:hAg .6s}\n@keyframes hAg{40%{transform:scale(1.12) rotate(-2deg)}}\n.hA-f.picking .hA-box{transform:scale(1.04);box-shadow:0 0 0 6px rgba(201,168,106,.35),0 18px 40px -20px rgba(0,0,0,.6)}\n.hA-bxi{display:flex;width:56px;height:44px;border:1px solid rgba(255,255,255,.35);border-top-width:4px;align-items:flex-end;justify-content:center;padding:2px;gap:1px;background:rgba(255,255,255,.06)}\n.hA-bxi img{width:17px;height:24px;object-fit:cover;background:#fff}\n.hA-bxt{display:flex;flex-direction:column;font-size:12.5px;line-height:1.4}\n.hA-bxt b{font-weight:500;font-size:14px}\n.hA-bxt span{opacity:.75}\n.hA-ghost{position:fixed;z-index:2500;pointer-events:none;transition:transform .25s,box-shadow .25s,opacity .3s}\n.hA-ghost img{width:100%;height:100%;object-fit:contain;background:#fff;padding:8px;box-sizing:border-box}\n.hA-ghost.up{transform:scale(1.1) rotate(-3deg);box-shadow:0 30px 50px -20px rgba(0,0,0,.45)}\n.hA-after{display:grid;grid-template-columns:1.1fr 1fr;gap:80px;padding:90px 72px 100px;background:#FAF9F6}\n.hA-after h2{font:200 52px/1.05 'IBM Plex Sans Hebrew',sans-serif;letter-spacing:-.03em;margin:0 0 28px}\n.hA-after h2 em{font-style:normal;font-weight:500}\n.hA-glist{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:10px;margin-bottom:22px}\n.hA-glist .g{display:grid;grid-template-columns:56px 1fr 28px;align-items:center;gap:10px;background:#fff;padding:8px;border:1px solid #ebe6dc;font-size:13px}\n.hA-glist .g .im{border:0;padding:0;background:#f4f1ec;width:56px;height:56px;cursor:pointer}\n.hA-glist .g img{width:100%;height:100%;object-fit:contain;mix-blend-mode:multiply}\n.hA-glist .g i{display:block;font-style:normal;color:#7a6a50}\n.hA-glist .rm{border:0;background:none;font-size:20px;cursor:pointer;color:#8b8478}\n.hA-glist .emp{grid-column:1/-1;color:#5b564e;line-height:1.7;margin:0;padding:22px;border:1px dashed #cfc6b6}\n.hA-wrap{display:inline-flex;border:1px solid #151412;margin-bottom:18px}\n.hA-wrap button{height:42px;padding:0 18px;border:0;background:none;font:400 14px 'Heebo',sans-serif;cursor:pointer}\n.hA-wrap button[aria-pressed=true]{background:#151412;color:#fff}\n.hA-gtot{display:flex;justify-content:space-between;align-items:baseline;border-top:1px solid #151412;padding:14px 0;font-size:15px}\n.hA-gtot b{font:300 30px 'IBM Plex Sans Hebrew',sans-serif}\n.hA-btn{display:inline-flex;align-items:center;justify-content:center;height:54px;padding:0 28px;background:#151412;color:#fff!important;text-decoration:none;font-size:15px}\n.hA-fine{font-size:13px;color:#6f685d;margin-top:14px}\n.hA-deps ol{list-style:none;margin:0;padding:0;border-top:1px solid #151412}\n.hA-deps a{display:grid;grid-template-columns:40px 1fr auto;align-items:baseline;gap:12px;padding:15px 0;border-bottom:1px solid #e3ddd2;color:var(--ink)!important;text-decoration:none;transition:padding .3s}\n.hA-deps a:hover{padding-inline-start:12px}\n.hA-deps i{font-style:normal;font-size:12px;color:#9a8b72}\n.hA-deps b{font:300 26px 'IBM Plex Sans Hebrew',sans-serif}\n.hA-deps small{font-size:13px;color:#6f685d}\n@media (max-width:1100px){.hA-help{display:none}.hA-nav{max-width:calc(100% - 270px)}}\n@media (max-width:760px){\n  .hA-f{height:calc(100svh - 98px);min-height:560px}\n  .hA-hd{top:22px;right:20px;left:20px;width:auto}\n  .hA-hd:before{inset:-30px -30px -20px -30px;background:linear-gradient(var(--bg) 55%,transparent)}\n  .hA-h1{font-size:42px}\n  .hA-sub{font-size:14px;margin:10px 0 14px;max-width:none}\n  .hA-s{height:48px}\n  .hA-help{display:block;top:auto;bottom:146px;left:0;right:0;max-width:none;text-align:center;font-size:12px}\n  .hA-help .d{display:none}.hA-help .mo{display:inline}\n  .hA-dock{left:0;right:0;bottom:0;flex-direction:column;align-items:stretch;gap:0}\n  .hA-nav{max-width:none;flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;padding:6px 8px;background:rgba(255,255,255,.9)}\n  .hA-nav::-webkit-scrollbar{display:none}\n  .hA-ov{font-size:0!important;padding:0 12px!important}\n  .hA-box{min-width:0;height:60px;padding:8px 16px}\n  .hA-lb b{font-size:46px;top:-28px}.hA-f.over .hA-lb b{font-size:70px}\n  .hA-lb a{top:26px;font-size:13px}\n  .hA-after{grid-template-columns:1fr;gap:56px;padding:56px 20px 70px}\n  .hA-after h2{font-size:36px}\n  .hA-glist{grid-template-columns:1fr}\n}\n@media (prefers-reduced-motion:reduce){.hA-f,.hA-vig,.hA-st{transition:none}}\nhtml.sg-hx .sg-wa{bottom:104px}\n.hA-f.over .hA-hd,.hA-f.over .hA-help{opacity:0;pointer-events:none}\n.hA-hd,.hA-help{transition:opacity .6s}\n.hA-f.over .hA-lb b{background:rgba(255,255,255,.72);padding:6px 18px 12px}\n@media (max-width:760px){.sg-vs{flex-wrap:nowrap;overflow-x:auto;justify-content:flex-start;scrollbar-width:none}.sg-vs::-webkit-scrollbar{display:none}.hA-sub{display:none}html.sg-hx .sg-wa{bottom:150px;width:46px;height:46px}}\n\n/* ===== B — the store that changes shape ===== */\n.hB{--ink:#1a1714;--gold:#A9834A;font-family:'Heebo',sans-serif;color:var(--ink);direction:rtl;background:#F7F4EE}\n.hB-st{display:grid;grid-template-columns:340px minmax(0,1fr) 320px;height:calc(100svh - 98px);min-height:640px;max-height:1050px;position:relative}\n.hB-menu{padding:44px 40px 30px 34px;display:flex;flex-direction:column;gap:0;overflow:auto;scrollbar-width:thin;background:#F7F4EE;z-index:2}\n.hB-eye{font-size:12px;letter-spacing:.16em;color:#8b7756;margin:0 0 18px}\n.hB-h1{font:300 clamp(38px,3.6vw,56px)/1.04 'Frank Ruhl Libre',serif;margin:0;letter-spacing:-.01em}\n.hB-h1 span{display:block;animation:hBin .9s cubic-bezier(.2,.8,.2,1) both}\n@keyframes hBin{from{clip-path:inset(0 0 0 100%);transform:translateX(-18px);opacity:0}to{clip-path:inset(0 0 0 0);transform:none;opacity:1}}\n.hB-sub{font-size:15px;line-height:1.6;color:#5a5249;margin:12px 0 26px;min-height:3.2em}\n.hB-sc{list-style:none;margin:0 0 26px;padding:0;border-top:1px solid #d9d0c2}\n.hB-sc button{position:relative;display:flex;align-items:baseline;gap:14px;width:100%;padding:13px 0;border:0;border-bottom:1px solid #e3dbcf;background:none;font:400 22px 'Frank Ruhl Libre',serif;color:#5d554b;cursor:pointer;text-align:right;transition:color .3s,padding .3s}\n.hB-sc button i{font:400 11px 'Heebo',sans-serif;color:#a99a80;font-style:normal;width:20px}\n.hB-sc button:hover{color:var(--ink);padding-inline-start:6px}\n.hB-sc button[aria-selected=true]{color:var(--ink)}\n.hB-sc button[aria-selected=true] i{color:var(--gold)}\n.hB-sc u{position:absolute;bottom:-1px;right:0;height:2px;width:0;background:var(--gold)}\n.hB-sc button[aria-selected=true] u{width:100%;transition:width .4s}\n.hB-st.auto .hB-sc button[aria-selected=true] u{width:0;animation:hBp 6.4s linear forwards}\n@keyframes hBp{from{width:0}to{width:100%}}\n.hB-dep{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:22px;align-items:center}\n.hB-dep span{width:100%;font-size:12.5px;color:#7a7064;margin-bottom:4px}\n.hB-dep button{font:400 13px 'Heebo',sans-serif;padding:6px 11px;border:1px solid #d6ccbc;background:transparent;color:var(--ink);cursor:pointer;border-radius:999px;transition:all .25s}\n.hB-dep button:hover{border-color:var(--ink)}\n.hB-dep button[aria-pressed=true]{background:var(--ink);border-color:var(--ink);color:#fff}\n.hB-s label{display:block;font-size:12.5px;color:#7a7064;margin-bottom:6px}\n.hB-s div{display:flex;border-bottom:1px solid var(--ink)}\n.hB-s input{flex:1;border:0;background:transparent;height:44px;font:400 18px 'Frank Ruhl Libre',serif;color:var(--ink);outline:0}\n.hB-s button{border:0;background:none;font-size:20px;width:40px;cursor:pointer}\n.hB-comp{position:relative;overflow:hidden;--wall:#E9E1D3;background:var(--wall);transition:background-color 1.1s ease;opacity:0}\n.hB-comp.ready{opacity:1;transition:background-color 1.1s ease,opacity .8s}\n.hB-wall{position:absolute;inset:0;background:radial-gradient(ellipse 70% 60% at 70% 10%,rgba(255,255,255,.55),transparent 70%),linear-gradient(180deg,transparent 60%,rgba(0,0,0,.035));pointer-events:none}\n.hB-surf{position:absolute;left:50%;width:0;top:100%;height:0;transition:left 1.1s cubic-bezier(.6,0,.2,1),width 1.1s cubic-bezier(.6,0,.2,1),top 1.1s cubic-bezier(.6,0,.2,1),height 1.1s cubic-bezier(.6,0,.2,1),border-radius 1.1s,background-color 1.1s,opacity .6s;box-shadow:0 -1px 0 rgba(255,255,255,.6) inset}\n.hB-surf.k-cloth{background-image:repeating-linear-gradient(90deg,rgba(0,0,0,.018) 0 2px,transparent 2px 5px),repeating-linear-gradient(0deg,rgba(0,0,0,.015) 0 2px,transparent 2px 6px),linear-gradient(180deg,rgba(0,0,0,.05),transparent 14%,transparent 80%,rgba(0,0,0,.06));box-shadow:0 30px 40px -30px rgba(0,0,0,.25)}\n.hB-surf.k-rug{background-image:radial-gradient(ellipse at 50% 30%,rgba(255,255,255,.35),transparent 70%),repeating-radial-gradient(ellipse at 50% 50%,rgba(0,0,0,.02) 0 3px,transparent 3px 9px)}\n.hB-surf.k-wood{background-image:linear-gradient(180deg,rgba(255,255,255,.18),rgba(255,255,255,.18) 5%,transparent 5.5%),repeating-linear-gradient(90deg,rgba(0,0,0,.06) 0 1px,transparent 1px 38px),linear-gradient(180deg,transparent,rgba(0,0,0,.22));box-shadow:0 24px 30px -20px rgba(0,0,0,.45)}\n.hB-surf.k-plank{box-shadow:0 18px 22px -12px rgba(0,0,0,.35);background-image:linear-gradient(180deg,rgba(255,255,255,.3),transparent 60%)}\n.hB-surf.k-stripe{background-image:repeating-linear-gradient(90deg,rgba(255,255,255,.22) 0 24px,transparent 24px 48px)}\n.hB-surf.k-desk{background-image:linear-gradient(180deg,rgba(255,255,255,.14),rgba(255,255,255,.14) 4%,transparent 4.5%),linear-gradient(180deg,transparent,rgba(0,0,0,.3));box-shadow:0 24px 30px -20px rgba(0,0,0,.5)}\n.hB-objs{position:absolute;inset:0}\n.hB-o{position:absolute;left:0;top:0;padding:0;border:0;background:none;cursor:pointer;display:flex;flex-direction:column;transition:transform 1.05s cubic-bezier(.6,0,.2,1),width 1.05s cubic-bezier(.6,0,.2,1),height 1.05s cubic-bezier(.6,0,.2,1),opacity .6s;outline-offset:4px}\n.hB-o.nt,.hB-o.nt .pl{transition:none!important}\n.hB-o .lift{position:relative;flex:1;min-height:0;transition:transform .7s cubic-bezier(.2,.8,.2,1)}\n.hB-o .ph{position:absolute;inset:0;transition:transform .4s}\n.hB-o img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;object-position:50% 100%;mix-blend-mode:multiply;transition:opacity .55s;pointer-events:none}\n.hB-o img.b,.hB-o.sb img.a{opacity:0}.hB-o.sb img.b{opacity:1}\n.hB-o .sh{position:absolute;left:14%;right:14%;bottom:-5px;height:12px;background:radial-gradient(closest-side,rgba(40,25,10,.28),transparent);filter:blur(2px);z-index:-1}\n.hB-o .pl{display:block;height:0;flex:none;background:linear-gradient(90deg,#efe9df,#fbf8f3 45%,#e6ded1);box-shadow:inset 0 1px 0 #fff,0 18px 26px -18px rgba(0,0,0,.4);transition:height 1.05s cubic-bezier(.6,0,.2,1)}\n.hB-o .no{position:absolute;top:2%;right:6%;width:22px;height:22px;border-radius:50%;background:rgba(26,23,20,.86);color:#fff;font:500 11px/22px 'Heebo',sans-serif;font-style:normal;text-align:center;opacity:0;transform:scale(.6);transition:opacity .3s,transform .3s}\n.hB-o .tag{position:absolute;bottom:calc(100% + 6px);right:50%;transform:translateX(50%) translateY(6px);background:#fff;padding:7px 12px;font-size:13px;white-space:nowrap;box-shadow:0 10px 24px -14px rgba(0,0,0,.5);opacity:0;pointer-events:none;transition:opacity .25s,transform .25s;z-index:5}\n.hB-o .tag b{display:block;font-weight:500}\n@media (hover:hover){.hB-o:hover .ph{transform:scale(1.05)}.hB-o:hover .tag{opacity:1;transform:translateX(50%)}.hB-o:hover .no{opacity:1;transform:none}}\n.hB-o:focus-visible .tag{opacity:1;transform:translateX(50%)}\n.hB-side.open~.hB-comp .hB-o .no,.hB-st:hover .hB-o .no{opacity:1;transform:none}\n.hB-o.off{opacity:.28}\n.hB-o.out{opacity:0;pointer-events:none}\n.hB-o.out .lift{transform:translateY(-40%) scale(.9)}\n.hB-cap{position:absolute;bottom:12px;left:0;right:0;text-align:center;font-size:12px;color:rgba(26,23,20,.55);margin:0;pointer-events:none}\n.hB-comp.gal .hB-cap{color:rgba(26,23,20,.45)}\n.hB-st.busy .hB-comp:after{content:\"מסדרים את הבמה…\";position:absolute;top:18px;left:50%;transform:translateX(-50%);font-size:12.5px;background:rgba(255,255,255,.85);padding:6px 14px;border-radius:999px}\n.hB-side{display:flex;flex-direction:column;background:#FFFDF9;border-inline-start:1px solid #e6dfd3;min-height:0;z-index:2}\n.sg-root .hB-tog{display:flex;align-items:baseline;justify-content:space-between;gap:10px;padding:30px 26px 16px;border:0;border-bottom:1px solid var(--ink);background:none;font:400 14px 'Heebo',sans-serif;color:var(--ink);cursor:default;text-align:right}\n.sg-root .hB-tog .t{font:400 28px 'Frank Ruhl Libre',serif}\n.sg-root .hB-tog i{display:none;font-style:normal}\n.hB-list{flex:1;overflow:auto;padding:0 26px;scrollbar-width:thin}\n.hB-list ul{list-style:none;margin:0;padding:0}\n.hB-list li{display:flex;align-items:center;border-bottom:1px solid #eee7dc}\n.hB-list label{flex:1;display:grid;grid-template-columns:18px 16px 48px 1fr auto;align-items:center;gap:9px;padding:10px 0;font-size:13px;cursor:pointer;min-width:0}\n.hB-list input{accent-color:var(--ink);margin:0}\n.hB-list label i{font-style:normal;font-size:11px;color:#a99a80}\n.hB-list .th{width:48px;height:48px;object-fit:contain;mix-blend-mode:multiply;background:#f3efe8}\n.hB-list .nm{line-height:1.35;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}\n.hB-list .pr{white-space:nowrap;font-weight:500}\n.hB-list li>a{padding:8px 0 8px 2px;margin-inline-start:8px;color:#8b7756;text-decoration:none}\n.hB-more{display:block;font-size:13.5px;color:var(--ink);padding:14px 0}\n.hB-act{display:flex;flex-direction:column;gap:8px;padding:16px 26px 24px;border-top:1px solid #eee7dc}\n.sg-root .hB-b{height:50px;border:1px solid var(--ink);background:var(--ink);color:#fff;font:500 14.5px 'Heebo',sans-serif;cursor:pointer}\n.sg-root .hB-b.ghost{background:transparent;color:var(--ink)}\n.sg-root .hB-b:disabled{opacity:.4;cursor:default}\n.hB-how{display:grid;grid-template-columns:repeat(3,1fr) 1.1fr;gap:34px;padding:64px 72px;border-top:1px solid #e6dfd3;align-items:start}\n.hB-how>div{display:flex;flex-direction:column;gap:6px}\n.hB-how i{font:400 13px 'Heebo';font-style:normal;color:var(--gold)}\n.hB-how b{font:400 26px 'Frank Ruhl Libre',serif;font-weight:400}\n.hB-how span{font-size:14px;line-height:1.6;color:#5a5249}\n.hB-tray{display:flex;flex-direction:column;gap:6px;background:var(--ink);color:#fff!important;padding:22px 24px;text-decoration:none}\n.hB-tray b{font:400 22px 'Frank Ruhl Libre',serif}\n.hB-tray span{font-size:13.5px;opacity:.85}\n.hB-tray .ims{display:flex;gap:4px;margin-bottom:4px}.hB-tray .ims img{width:38px;height:38px;object-fit:contain;background:#fff}\n@media (max-width:1279px){\n  .hB-st{grid-template-columns:300px minmax(0,1fr)}\n  .hB-side{position:absolute;left:18px;bottom:18px;width:340px;max-height:calc(100% - 36px);box-shadow:0 20px 50px -24px rgba(0,0,0,.45);border:0}\n  .sg-root .hB-tog{cursor:pointer;padding:14px 18px;border-bottom:0}\n  .sg-root .hB-tog .t{font-size:22px}.sg-root .hB-tog i{display:inline}\n  .hB-side .hB-list{display:none;max-height:44vh;padding:0 18px}\n  .hB-side.open .hB-list{display:block}.hB-side.open .hB-tog{border-bottom:1px solid var(--ink)}\n  .hB-side.open .hB-tog i{transform:rotate(180deg)}\n  .hB-act{flex-direction:row;padding:0 18px 16px;border-top:0}.hB-act .hB-b{flex:1;height:44px;font-size:13.5px}\n  .hB-menu{padding:34px 26px 24px}\n  .hB-sc button{font-size:19px;padding:10px 0}\n  .hB-how{grid-template-columns:1fr 1fr;padding:56px 32px}\n}\n@media (max-width:760px){\n  .hB-st{display:flex;flex-direction:column;height:auto;max-height:none;min-height:0}\n  .hB-menu{display:contents}\n  .hB-eye{order:1;margin:20px 20px 8px}\n  .hB-h1{order:2;margin:0 20px;font-size:38px;min-height:0}\n  .hB-sub{display:none}\n  .hB-sc{order:3;display:flex;overflow-x:auto;gap:6px;border:0;margin:14px 0 12px;padding:0 20px;scrollbar-width:none}\n  .hB-sc::-webkit-scrollbar{display:none}\n  .hB-sc li{flex:none}\n  .hB-sc button{font:400 14px 'Heebo',sans-serif;border:1px solid #d6ccbc;border-radius:999px;padding:8px 14px;white-space:nowrap;color:var(--ink)}\n  .hB-sc button i{display:none}.hB-sc button:hover{padding-inline-start:14px}\n  .hB-sc button[aria-selected=true]{background:var(--ink);color:#fff;border-color:var(--ink)}\n  .hB-sc u{bottom:3px;right:14px;max-width:calc(100% - 28px)}\n  .hB-comp{order:4;height:58vh;min-height:380px;flex:none}\n  .hB-side{order:5;position:sticky;bottom:0;left:auto;width:auto;margin:0;box-shadow:0 -10px 30px -18px rgba(0,0,0,.35);z-index:20}\n  .hB-dep{order:6;margin:22px 20px 10px}\n  .hB-s{order:7;margin:0 20px 28px}\n  .hB-how{grid-template-columns:1fr;gap:24px;padding:40px 20px}\n}\n@media (prefers-reduced-motion:reduce){.hB-o,.hB-surf,.hB-comp,.hB-o .pl{transition:none!important}.hB-h1 span{animation:none}}\n\nhtml.sg-hv-B .sg-wa{left:auto;right:18px;bottom:18px;width:48px;height:48px}\n@media (max-width:760px){html.sg-hv-B .sg-wa{bottom:96px}}\n.hB-mark{position:absolute;top:6%;left:0;right:0;text-align:center;pointer-events:none}\n.hB-mark span{position:absolute;left:0;right:0;font:300 clamp(120px,17vw,260px)/1 'Frank Ruhl Libre',serif;color:rgba(26,23,20,.06);animation:hBm 1.2s cubic-bezier(.2,.8,.2,1) both;white-space:nowrap}\n.hB-mark span.old{animation:hBmo .8s forwards}\n@keyframes hBm{from{opacity:0;transform:translateY(30px);letter-spacing:.2em}to{opacity:1;transform:none}}\n@keyframes hBmo{to{opacity:0;transform:translateY(-30px)}}\n@media (max-width:760px){.hB-mark span{font-size:120px}}\n\n/* ===== C — the sentence ===== */\n.hC{--paper:#F5F1E9;--ink:#121110;--gold:#B08D57;--mut:#6d6458;background:var(--paper);color:var(--ink);font-family:'Heebo',sans-serif;direction:rtl}\n.hC-hero{position:relative;padding:58px 72px 30px}\n.hC-eye{font:400 12.5px 'Heebo',sans-serif;letter-spacing:.16em;color:#8a7756;margin:0 0 6px}\n.hC-sent{font:400 clamp(46px,6.1vw,104px)/1.14 'Bellefair','Frank Ruhl Libre',serif;margin:14px 0 26px;max-width:1300px;letter-spacing:-.01em}\n.hC-sent>*{display:inline-block;animation:hCw .9s cubic-bezier(.2,.8,.2,1) both}\n.hC-sent>*:nth-child(2){animation-delay:.12s}.hC-sent>*:nth-child(3){animation-delay:.24s}.hC-sent>*:nth-child(4){animation-delay:.3s}.hC-sent>*:nth-child(5){animation-delay:.38s}.hC-sent>*:nth-child(6){animation-delay:.46s}\n@keyframes hCw{from{opacity:0;transform:translateY(.3em);filter:blur(6px)}to{opacity:1;transform:none;filter:none}}\n.sg-root .hC .tok{font:inherit;color:var(--ink);padding:0 .06em;margin:0 .02em;border-bottom:2px solid var(--gold);line-height:1.02;position:relative;transition:background .25s,border-color .25s;cursor:pointer}\n.sg-root .hC .tok:hover,.sg-root .hC .tok[aria-expanded=true]{background:rgba(176,141,87,.12)}\n.hC .tok .v{display:inline-block}\n.hC .tok i{font-style:normal;font-size:.32em;color:var(--gold);vertical-align:.55em;margin-inline-start:.18em;display:inline-block;transition:transform .3s}\n.hC .tok[aria-expanded=true] i{transform:rotate(180deg)}\n.hC .tok.flip .v{animation:hCf .65s cubic-bezier(.2,.8,.2,1)}\n@keyframes hCf{from{opacity:0;transform:translateY(.4em);filter:blur(5px)}to{opacity:1;transform:none;filter:none}}\n.hC-free{display:flex;align-items:baseline;gap:14px;flex-wrap:wrap}\n.hC-free label{font-size:15px;color:var(--mut)}\n.hC-free input{width:min(420px,70vw);border:0;border-bottom:1px solid var(--ink);background:transparent;font:400 30px 'Bellefair',serif;color:var(--ink);padding:2px 0 6px;outline:0}\n.sg-root .hC-free button{font-size:22px;width:40px;color:var(--ink)}\n.hC-pop{position:absolute;z-index:40;background:#fff;padding:10px 0;min-width:320px;max-height:62vh;overflow:auto;box-shadow:0 30px 70px -30px rgba(0,0,0,.45);opacity:0;transform:translateY(-8px);transition:opacity .22s,transform .3s cubic-bezier(.2,.8,.2,1)}\n.hC-pop.in{opacity:1;transform:none}\n.sg-root .hC-pop button{display:block;width:100%;text-align:right;padding:9px 30px 9px 26px;font:400 30px/1.2 'Bellefair',serif;color:#2b2824;position:relative;transition:background .2s,color .2s}\n.sg-root .hC-pop button:hover,.sg-root .hC-pop button:focus-visible{background:#F5F1E9;color:var(--ink);outline:0}\n.sg-root .hC-pop button[aria-selected=true]{color:var(--gold)}\n.hC-pop button[aria-selected=true]:before{content:\"\";position:absolute;right:13px;top:50%;width:6px;height:6px;margin-top:-3px;border-radius:50%;background:var(--gold)}\n.hC-pop .ph{font-size:13px;color:var(--mut);margin:6px 26px 6px}\n.hC-deck{display:grid;grid-template-columns:minmax(0,1fr) 300px;grid-template-areas:\"dh dh\" \"cards box\";column-gap:34px;padding:0 72px 70px}\n.hC-dh{grid-area:dh;display:flex;justify-content:space-between;align-items:center;gap:20px;border-top:1px solid var(--ink);padding:14px 0 18px}\n.hC-ans{margin:0;font-size:15px;line-height:1.6}\n.hC-ans b{font-weight:600}\n.hC-ans a{color:var(--ink);margin-inline-start:8px}\n.sg-root .hC-ans .widen{color:#8a6a35;border-bottom:1px solid currentColor;margin-inline-start:8px}\n.hC-arr{display:flex;gap:6px}\n.sg-root .hC-arr button{width:44px;height:44px;border:1px solid var(--ink);font-size:18px;transition:background .2s,color .2s}\n.sg-root .hC-arr button:hover{background:var(--ink);color:#fff}\n.hC-cards{grid-area:cards;display:flex;gap:18px;overflow-x:auto;scroll-snap-type:x mandatory;padding:4px 0 16px;scrollbar-width:thin;min-height:520px;align-items:flex-start}\n.hC-c{flex:0 0 252px;scroll-snap-align:start;display:flex;flex-direction:column;animation:hCd .75s cubic-bezier(.2,.8,.2,1) both;animation-delay:calc(var(--i) * 70ms);transition:transform .35s,opacity .3s;transition-delay:calc(var(--o,0) * 30ms)}\n@keyframes hCd{from{opacity:0;transform:translate(70px,-90px) rotate(8deg)}to{opacity:1;transform:none}}\n.hC-c.gone{opacity:0;transform:translateY(40px) rotate(-4deg)}\n.sg-root .hC-c .ph{position:relative;display:flex;align-items:center;justify-content:center;aspect-ratio:4/5;background:var(--tint);padding:26px;overflow:hidden}\n.hC-c .ph:after{content:\"\";position:absolute;inset:10px;border:1px solid rgba(176,141,87,.35);pointer-events:none}\n.hC-c .ph img{width:100%;height:100%;object-fit:contain;mix-blend-mode:multiply;transition:transform .5s cubic-bezier(.2,.8,.2,1)}\n.hC-c:hover .ph img{transform:scale(1.05)}\n.hC-c .no{position:absolute;top:16px;right:18px;font:400 20px 'Bellefair',serif;font-style:normal;color:rgba(18,17,16,.5)}\n.hC-c .k{font-size:11.5px;letter-spacing:.1em;color:#8a7756;margin:14px 0 4px}\n.hC-c h3{margin:0;font-weight:400}\n.sg-root .hC-c h3 button{font:400 15px/1.4 'Heebo',sans-serif;text-align:right;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;min-height:2.8em}\n.hC-c .pr{font:400 27px 'Bellefair',serif;margin:6px 0 10px}\n.hC-c .ac{display:grid;grid-template-columns:1fr auto;gap:6px}\n.sg-root .hC-c .pri{height:44px;background:var(--ink);color:#fff;font:500 13.5px 'Heebo',sans-serif;transition:background .2s}\n.sg-root .hC-c .pri:hover{background:#2f2b27}\n.sg-root .hC-c .sec{height:44px;border:1px solid var(--ink);padding:0 14px;font:400 13px 'Heebo',sans-serif}\n.sg-root .hC-c [data-gift][aria-pressed=true]{background:#EADCC2;color:#4d3a1c;border-color:#C7A774}\n.sg-root .hC-c .done{background:#4b6b4d!important;color:#fff!important}\n.hC-empty{font:400 26px 'Bellefair',serif;color:var(--mut);padding:40px 0}\n.hC-box{grid-area:box;position:sticky;top:24px;align-self:start;background:#fff;padding:22px 22px 18px;border:1px solid #e6dfd2}\n.hC-box .bx{position:relative;margin:10px 0 14px;border:1.5px solid rgba(18,17,16,.45);border-top:0;min-height:128px;background:linear-gradient(135deg,rgba(255,255,255,.6),rgba(240,236,228,.4));transition:border-radius .5s}\n.hC-box .lid{height:12px;margin:0 -7px;border:1.5px solid rgba(18,17,16,.55);background:rgba(255,255,255,.7)}\n.hC-box .in{display:flex;flex-wrap:wrap;gap:6px;padding:12px;align-content:flex-start}\n.hC-box .in span{position:relative;width:56px;height:56px;background:#F5F1E9}\n.hC-box .in img{width:100%;height:100%;object-fit:contain;mix-blend-mode:multiply;animation:hCin .5s cubic-bezier(.2,.8,.2,1)}\n@keyframes hCin{from{transform:translateY(-30px) scale(.6);opacity:0}}\n.sg-root .hC-box .in button{position:absolute;top:-6px;left:-6px;width:20px;height:20px;border-radius:50%;background:var(--ink);color:#fff;font-size:12px;line-height:20px;opacity:0;transition:opacity .2s}\n.hC-box .in span:hover button,.hC-box .in button:focus-visible{opacity:1}\n.hC-box em{font-style:normal;font-size:13px;color:#7d7468;line-height:1.6;padding:16px 6px}\n.hC-box.cello .bx{border-radius:0 0 60px 60px;border-color:rgba(176,141,87,.6)}\n.hC-box.cello .lid{height:0;border:0;margin:0}\n.hC-box.cello .bx:before{content:\"\";position:absolute;top:-20px;left:50%;width:44px;height:22px;margin-left:-22px;border:1.5px solid var(--gold);border-radius:50% 50% 0 0;border-bottom:0}\n.hC-box .tot{display:flex;justify-content:space-between;align-items:baseline;border-top:1px solid var(--ink);padding:10px 0;font-size:13.5px}\n.hC-box .tot b{font:400 28px 'Bellefair',serif}\n.hC-box .wr{display:flex;border:1px solid var(--ink);margin-bottom:10px}\n.sg-root .hC-box .wr button{flex:1;height:38px;font-size:13px}\n.sg-root .hC-box .wr button[aria-pressed=true]{background:var(--ink);color:#fff}\n.hC-box .go{display:flex;align-items:center;justify-content:center;height:48px;background:var(--gold);color:#fff!important;text-decoration:none;font-weight:500;font-size:14.5px}\n.hC-box .fine{font-size:12px;color:#7d7468;text-align:center;margin:8px 0 0}\n.hC-lines{padding:80px 72px 50px;border-top:1px solid #e3dccf}\n.hC-lines ol{list-style:none;margin:16px 0 0;padding:0;border-top:1px solid var(--ink)}\n.sg-root .hC-lines button{display:grid;grid-template-columns:1fr auto 40px;align-items:center;gap:24px;width:100%;padding:22px 0;border-bottom:1px solid #ddd5c7;font:400 clamp(28px,3.2vw,48px)/1.15 'Bellefair',serif;text-align:right;transition:color .3s,padding .35s}\n.sg-root .hC-lines button:hover{color:#8a6a35;padding-inline-start:18px}\n.hC-lines .th{display:flex}\n.hC-lines .th img{width:64px;height:64px;object-fit:contain;mix-blend-mode:multiply;background:#ECE6DB;border-radius:50%;padding:6px;margin-inline-start:-14px;border:2px solid var(--paper)}\n.hC-lines i{font-style:normal;font-size:24px;color:var(--gold)}\n.hC-deps{padding:20px 72px 90px}\n.hC-deps nav{display:flex;flex-wrap:wrap;gap:6px 14px;align-items:baseline;font:400 30px 'Bellefair',serif;margin-top:12px}\n.hC-deps a{color:var(--ink);text-decoration:none;border-bottom:1px solid transparent;transition:border-color .2s}\n.hC-deps a:hover{border-color:var(--gold)}\n.hC-deps span{color:var(--gold);font-size:20px}\n@media (max-width:1100px){.hC-hero{padding:44px 32px 24px}.hC-deck{padding:0 32px 60px;grid-template-columns:minmax(0,1fr) 260px}.hC-lines,.hC-deps{padding-left:32px;padding-right:32px}}\n@media (max-width:760px){\n  .hC{padding-bottom:84px}\n  .hC-hero{padding:26px 20px 14px}\n  .hC-sent{font-size:clamp(34px,10vw,44px);line-height:1.2;margin:10px 0 18px}\n  .hC-free label{font-size:13.5px;width:100%}.hC-free input{font-size:22px;width:auto;flex:1;min-width:0}.hC-free{gap:4px;flex-wrap:wrap}\n  .hC-pop{z-index:70}\n  .hC-pop{position:fixed;left:0;right:0;bottom:0;top:auto!important;right:0!important;max-height:72vh;border-radius:18px 18px 0 0;padding:14px 0 22px;box-shadow:0 0 0 100vmax rgba(18,17,16,.38);transform:translateY(30px)}\n  .sg-root .hC-pop button{font-size:27px;padding:11px 34px 11px 22px}\n  .hC-deck{display:block;padding:0 0 20px}\n  .hC-dh{margin:0 20px;padding:12px 0}.hC-arr{display:none}\n  .hC-ans{font-size:14px}\n  .hC-cards{padding:4px 20px 14px;scroll-padding:0 20px;min-height:0}\n  .hC-c{flex-basis:66vw}\n  .hC-box{display:none}\n  .hC.is-gift .hC-box,.hC.box-has .hC-box{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:10px;position:fixed;left:0;right:0;bottom:0;top:auto;z-index:50;padding:10px 14px;border:0;border-top:1px solid #e6dfd2;box-shadow:0 -12px 30px -20px rgba(0,0,0,.4)}\n  .hC-box .hC-eye,.hC-box .wr,.hC-box .fine{display:none}\n  .hC-box .bx{margin:0;min-height:44px;min-width:60px}\n  .hC-box .in{padding:4px;flex-wrap:nowrap;gap:3px}\n  .hC-box .in span{width:30px;height:30px}.hC-box .in span:nth-child(n+4){display:none}\n  .hC-box em{display:none}\n  .hC-box .tot{border:0;padding:0;flex-direction:column;gap:0}.hC-box .tot b{font-size:22px}\n  .hC-box .go{height:44px;padding:0 16px;grid-column:3;font-size:13.5px}\n  .hC-lines{padding:50px 20px 30px}\n  .sg-root .hC-lines button{grid-template-columns:1fr 24px;font-size:25px;gap:12px;padding:16px 0}\n  .hC-lines .th{display:none}\n  .hC-deps{padding:10px 20px 60px}.hC-deps nav{font-size:22px}\n  html.sg-hv-C .sg-wa{bottom:96px}\n}\n@media (prefers-reduced-motion:reduce){.hC-sent>*,.hC-c,.hC .tok.flip .v{animation:none!important}}\n";document.head.appendChild(s);})();
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

/* Home v4 — "מאלפים — לאחד" (From thousands, to one).
   Abundance is shown literally: a living archive of the store's real products drifting in columns.
   Luxury is shown through curation: scrolling focuses that abundance into one world, one composed set, one gift.
   Test environment only; opt-in demo (?sg=home4). Every product, price and link comes from the live Konimbo catalogue. */
(function () {
  var W = window, D = document;
  var DEP = {
    home: ['כלי בית', '/422574-%D7%9B%D7%9C%D7%99-%D7%91%D7%99%D7%AA', 'הגשה, אירוח, קריסטל ומטבח', '#EEF0F0', '#1d2a2e'],
    textile: ['טקסטיל לבית', '/422581-%D7%98%D7%A7%D7%A1%D7%98%D7%99%D7%9C-%D7%9C%D7%91%D7%99%D7%AA-', 'מצעים, מגבות ומפות', '#F1ECE4', '#3a3026'],
    baby: ['תינוקות', '/423383-%D7%AA%D7%99%D7%A0%D7%95%D7%A7%D7%95%D7%AA', 'בגדי תינוקות, שמיכות ומתנות לידה', '#F4E9E6', '#4a3330'],
    judaica: ['יודאיקה', '/422573-%D7%99%D7%95%D7%93%D7%90%D7%99%D7%A7%D7%94', 'שבת, נטלות, ברכות וחג', '#1F2A44', '#F3EEE3'],
    acc: ['אקססוריז לבית', '/422499-%D7%90%D7%A7%D7%A1%D7%A1%D7%95%D7%A8%D7%99%D7%96-%D7%9C%D7%91%D7%99%D7%AA', 'מפיצי ריח, פרחי משי, נרות ונוי', '#191614', '#F1E8DA'],
    gifts: ['מתנות מעוצבות', '/422536-%D7%9E%D7%AA%D7%A0%D7%95%D7%AA-%D7%9E%D7%A2%D7%95%D7%A6%D7%91%D7%95%D7%AA', 'מארזים מוכנים לכל אירוע', '#EFE6D6', '#3b2f1f'],
    toys: ['משחקים', '/422285-%D7%9E%D7%A9%D7%97%D7%A7%D7%99%D7%9D', 'צעצועים, משחקי עץ ויצירה', '#F3EBDD', '#3d2d22'],
    him: ['לגבר ולאישה', '/422488-%D7%9C%D7%92%D7%91%D7%A8-%D7%95%D7%9C%D7%90%D7%99%D7%A9%D7%94', 'אקססוריז ומתנות אישיות', '#E8E4DE', '#22201d'],
    holidays: ['חגים', '/422572-%D7%97%D7%92%D7%99%D7%9D', 'לכל חג ומועד'],
    catering: ['קייטרינג בוטיק', '/403465-%D7%A7%D7%99%D7%99%D7%98%D7%A8%D7%99%D7%A0%D7%92-%D7%91%D7%95%D7%98%D7%99%D7%A7', 'עיצוב כיבוד לאירועים']
  };
  var WORLDS = ['home', 'textile', 'baby', 'judaica', 'acc', 'gifts', 'toys', 'him'];
  var LOOKS = [
    { t: 'שולחן שבת', s: 'יודאיקה, כלי הגשה וטקסטיל שנבחרו יחד', src: [['judaica', 3], ['home', 2], ['textile', 1]], bg: '#E9E3D8' },
    { t: 'ברוכה הבאה לעולם', s: 'בגדים, שמיכה ומשחק — מתנת לידה שלמה', src: [['baby', 4], ['toys', 1]], bg: '#F2E6E2' },
    { t: 'ערב בבית', s: 'ריח, פרחים ונרות לפינה אחת', src: [['acc', 4], ['home', 1]], bg: '#E4DED6' },
    { t: 'לבית חדש', s: 'מה שכל בית חדש צריך בשבוע הראשון', src: [['home', 2], ['textile', 1], ['acc', 1], ['judaica', 1]], bg: '#E6E9E8' }
  ];
  var BUDGETS = [[0, 150, 'עד 150 ₪'], [150, 300, '150–300 ₪'], [300, 600, '300–600 ₪'], [600, 1e9, 'מעל 600 ₪']];
  var CK = 'sg_home4', TTL = 6 * 3600e3, PER = 18;

  W.SGHome4 = function (root) {
    var S = W.SG, St = S.Store, esc = S.esc, fmt = S.fmt, cur = S.cur;
    var data = {}, byId = {};
    try { var c = JSON.parse(localStorage.getItem(CK) || 'null'); if (c && Date.now() - c.t < TTL) data = c.d || {}; } catch (e) {}
    var mob = function () { return W.innerWidth <= 760; };
    var calm = W.matchMedia && W.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!D.getElementById('h4-fonts')) { var fl = D.createElement('link'); fl.id = 'h4-fonts'; fl.rel = 'stylesheet'; fl.href = 'https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300;400;500&family=Heebo:wght@300;400;500;600;700&display=swap'; D.head.appendChild(fl); }
    var m = D.createElement('main'); m.className = 'h4'; m.id = 'sg-main'; root.appendChild(m);
    var deps = WORLDS.concat(['holidays', 'catering']);

    m.innerHTML =
      /* 1 — the living archive */
      '<section class="h4-hero" aria-label="פתיחה">' +
        '<div class="h4-wall" aria-hidden="true"></div>' +
        '<div class="h4-veil"></div>' +
        '<div class="h4-hero-in">' +
          '<p class="h4-eye">שיר מתנות · בני ברק</p>' +
          '<h1 class="h4-h1"><span>מקום אחד.</span><span>אלפי פריטים.</span></h1>' +
          '<p class="h4-live" aria-live="polite"><span class="n">&nbsp;</span></p>' +
          '<form class="h4-search" role="search"><label class="sg-vh" for="h4-q">חיפוש בחנות</label>' +
            '<input id="h4-q" type="search" placeholder="מה תרצו למצוא? פמוטים, מצעים, מתנה ללידה…" autocomplete="off">' +
            '<button aria-label="חיפוש"><svg width="20" height="20" viewBox="0 0 16 16" aria-hidden="true"><circle cx="7" cy="7" r="5.2" stroke="currentColor" fill="none" stroke-width="1.4"/><path d="M11 11l4 4" stroke="currentColor" stroke-width="1.4"/></svg></button></form>' +
          '<nav class="h4-quick" aria-label="מחלקות">' + deps.map(function (k) { return '<a href="' + DEP[k][1] + '">' + DEP[k][0] + '</a>'; }).join('') + '</nav>' +
          '<div class="h4-cta"><a href="#h4-worlds" class="h4-btn">לגלות את העולמות</a><a href="#h4-gift" class="h4-btn ghost">למצוא מתנה</a></div>' +
        '</div>' +
        '<p class="h4-hint" aria-hidden="true">כל תמונה כאן היא מוצר אמיתי מהחנות — אפשר ללחוץ עליה</p>' +
      '</section>' +
      /* 2 — worlds: abundance focused into one world at a time */
      '<section class="h4-worlds" id="h4-worlds" aria-label="עולמות החנות"><div class="h4-stage"><div class="h4-idx" role="tablist" aria-label="עולמות"></div><div class="h4-scene"></div></div></section>' +
      /* 3 — composed sets */
      '<section class="h4-looks" aria-label="סטים מעוצבים"><header class="h4-sh"><p class="h4-eye">סטים מעוצבים</p><h2>מה שרואים — קונים. פריט אחד או את כל הסט.</h2></header>' +
        '<div class="h4-ltabs" role="tablist"></div><div class="h4-look"></div></section>' +
      /* 4 — gifts: ready / build / by budget */
      '<section class="h4-gift" id="h4-gift" aria-label="מתנות"><header class="h4-sh"><p class="h4-eye">מתנות</p><h2>שלוש דרכים לתת מתנה מושלמת</h2></header>' +
        '<div class="h4-ways">' +
          '<a class="h4-way" href="' + DEP.gifts[1] + '"><b>מוכנה</b><span>מארזים שעוצבו בחנות, מוכנים לשליחה</span><i>למתנות המעוצבות ←</i></a>' +
          '<a class="h4-way dark" href="/?sg=studio"><b>מרכיבים בעצמכם</b><span>בוחרים פריטים מכל מחלקה ואנחנו עוטפים — צלופן פתוח או קופסה, ללא תוספת</span><i class="h4-tray"></i></a>' +
          '<div class="h4-way"><b>לפי תקציב</b><span>בחרו טווח ונציג מתנות שמתאימות לו</span><div class="h4-bud" role="group" aria-label="תקציב">' + BUDGETS.map(function (b, i) { return '<button type="button" data-b="' + i + '"' + (i === 1 ? ' aria-pressed="true"' : ' aria-pressed="false"') + '>' + b[2] + '</button>'; }).join('') + '</div></div>' +
        '</div><div class="h4-rail" aria-live="polite"></div></section>' +
      /* 5 — the whole store, as an index */
      '<section class="h4-index" aria-label="כל המחלקות"><header class="h4-sh"><p class="h4-eye">כל החנות</p><h2>עשר מחלקות. חנות אחת.</h2></header><ol class="h4-list"></ol><div class="h4-peek" aria-hidden="true"></div></section>' +
      '<section class="h4-promise" aria-label="שירות"><div><b>עיצוב ועטיפה</b><span>כל מתנה נעטפת בידיים בחנות — ללא תוספת</span></div><div><b>עד 5 תשלומים</b><span>ללא ריבית, בקנייה מאובטחת</span></div><div><b>משלוח או איסוף</b><span>מרדכי אנילביץ 8, בני ברק</span></div><div><b>שאלה על מוצר?</b><span><a href="https://api.whatsapp.com/send?phone=97235700922">כתבו לנו בוואטסאפ</a> · <a href="tel:03-5700922">03-5700922</a></span></div></section>' +
      '<div class="h4-sheet" role="dialog" aria-modal="true" aria-label="פרטי מוצר" hidden><div class="h4-sh-bg" data-close></div><div class="h4-sh-in"></div></div>';

    var $ = function (s) { return m.querySelector(s); };
    var uniq = {};
    var plist = function (k) { return uniq[k] || []; };
    function index() {
      byId = {}; uniq = {}; var seen = {};
      deps.forEach(function (k) {
        uniq[k] = (data[k] && data[k].p || []).filter(function (p) { var key = p.name.replace(/\s+/g, ' ').trim(); if (seen[key] || seen[p.id]) return false; seen[key] = seen[p.id] = 1; return true; });
        uniq[k].forEach(function (p) { p.k = k; byId[p.id] = p; });
      });
    }
    var img = function (p, cls) { return '<img' + (cls ? ' class="' + cls + '"' : '') + ' src="' + esc(p.img) + '" alt="' + esc(p.name) + '" loading="lazy" decoding="async">'; };
    var price = function (p) { return '<span class="num">' + fmt(p.price) + '</span>' + cur; };

    /* ---------- 1. hero: living archive in drifting columns ---------- */
    function renderWall() {
      var all = [], i, any = true;
      for (i = 0; any && all.length < 90; i++) { any = false; WORLDS.forEach(function (k) { var p = plist(k)[i]; if (p) { all.push(p); any = true; } }); }
      var wall = $('.h4-wall');
      if (!all.length) { wall.innerHTML = ''; return; }
      var cols = mob() ? 3 : W.innerWidth < 1100 ? 5 : 7, html = '';
      for (var cI = 0; cI < cols; cI++) {
        var col = all.filter(function (_, j) { return j % cols === cI; }); if (!col.length) continue;
        var tiles = col.map(function (p) { return '<button type="button" class="h4-t" data-id="' + esc(p.id) + '" tabindex="-1">' + img(p) + '<span>' + esc(S.shortName(p.name)) + ' · ' + fmt(p.price) + ' ₪</span></button>'; }).join('');
        html += '<div class="h4-col' + (cI % 2 ? ' up' : '') + '" style="--d:' + (70 + (cI * 13) % 40) + 's;--o:' + (-(cI * 7) % 30) + 's"><div class="h4-ct">' + tiles + tiles + '</div></div>';
      }
      wall.innerHTML = html;
      requestAnimationFrame(function () { wall.classList.add('in'); });
    }
    function renderLive() {
      $('.h4-live .n').innerHTML = 'כלי בית, קריסטל, טקסטיל, תינוקות, יודאיקה, ריחות, משחקים ומתנות — <b>עשר מחלקות, חנות אחת.</b> וכל מה שתבחרו נעטף כמתנה, ללא תוספת.';
    }

    /* ---------- 2. worlds ---------- */
    var cur4 = 0;
    function renderIdx() {
      $('.h4-idx').innerHTML = WORLDS.map(function (k, i) {
        return '<button type="button" role="tab" data-w="' + i + '" aria-selected="' + (i === cur4) + '"><i class="num">' + String(i + 1).padStart(2, '0') + '</i><b>' + DEP[k][0] + '</b><small>' + DEP[k][2].split(',')[0] + '</small></button>';
      }).join('');
    }
    function sceneHTML(k, i) {
      var l = plist(k).slice(0, 5);
      return '<article class="h4-w" data-w="' + i + '" style="--bg:' + DEP[k][3] + ';--fg:' + DEP[k][4] + '">' +
        '<div class="h4-wt"><p class="h4-eye"><span class="num">' + String(i + 1).padStart(2, '0') + '</span> / ' + WORLDS.length + '</p><h2>' + DEP[k][0] + '</h2><p>' + DEP[k][2] + '</p>' +
        '<a class="h4-btn' + (DEP[k][3].charAt(1) < '5' ? ' light' : '') + '" href="' + DEP[k][1] + '">' + 'לכל ' + DEP[k][0] + ' ←</a></div>' +
        '<div class="h4-comp">' + l.map(function (p, j) { return '<button type="button" class="h4-o s' + (j + 1) + '" data-id="' + esc(p.id) + '" style="--i:' + j + '"><span class="f">' + img(p) + '</span><span class="cap"><b>' + esc(S.shortName(p.name)) + '</b>' + price(p) + '</span></button>'; }).join('') + '</div></article>';
    }
    function renderWorlds() {
      renderIdx();
      $('.h4-scene').innerHTML = WORLDS.map(sceneHTML).join('');
      setWorld(cur4, true);
    }
    function setWorld(i, force) {
      if (i === cur4 && !force) return; cur4 = i;
      [].forEach.call(m.querySelectorAll('.h4-w'), function (w) { w.classList.toggle('on', +w.getAttribute('data-w') === i); });
      [].forEach.call(m.querySelectorAll('.h4-idx [data-w]'), function (b) { b.setAttribute('aria-selected', +b.getAttribute('data-w') === i); });
      var k = WORLDS[i]; $('.h4-worlds').style.setProperty('--bg', DEP[k][3]); $('.h4-worlds').style.setProperty('--fg', DEP[k][4]);
    }
    function onScroll() {
      var sec = $('.h4-worlds');
      if (!mob()) {
        var r = sec.getBoundingClientRect(), span = sec.offsetHeight - W.innerHeight;
        var pr = Math.min(0.999, Math.max(0, -r.top / span));
        setWorld(Math.floor(pr * WORLDS.length));
      }
    }
    W.addEventListener('scroll', onScroll, { passive: true });
    m.addEventListener('click', function (e) {
      var b = e.target.closest('.h4-idx [data-w]'); if (!b) return;
      var i = +b.getAttribute('data-w'), sec = $('.h4-worlds');
      if (mob()) { var w = m.querySelector('.h4-w[data-w="' + i + '"]'); w && w.scrollIntoView({ behavior: calm ? 'auto' : 'smooth', inline: 'start', block: 'nearest' }); setWorld(i); return; }
      var top = sec.getBoundingClientRect().top + W.scrollY, span = sec.offsetHeight - W.innerHeight;
      W.scrollTo({ top: top + span * (i + 0.5) / WORLDS.length, behavior: calm ? 'auto' : 'smooth' });
    });
    /* mobile: swipe between worlds, keep the index in sync */
    $('.h4-scene').addEventListener('scroll', function () {
      if (!mob()) return; var sc = this, i = Math.round(Math.abs(sc.scrollLeft) / sc.clientWidth); setWorld(Math.min(WORLDS.length - 1, i));
      var t = m.querySelector('.h4-idx [data-w="' + cur4 + '"]'); if (t) t.scrollIntoView({ inline: 'center', block: 'nearest' });
    }, { passive: true });

    /* ---------- 3. composed sets ---------- */
    var curLook = 0, lookSel = {};
    function lookItems(L, li) {
      var out = [], used = {};
      L.src.forEach(function (s) { var l = plist(s[0]), off = 5 + li * 2; for (var i = 0, n = 0; n < s[1] && i < l.length; i++) { var p = l[(off + i) % l.length]; if (!used[p.id]) { used[p.id] = 1; out.push(p); n++; } } });
      return out;
    }
    function renderLooks() {
      $('.h4-ltabs').innerHTML = LOOKS.map(function (L, i) { return '<button type="button" role="tab" data-l="' + i + '" aria-selected="' + (i === curLook) + '">' + L.t + '</button>'; }).join('');
      var L = LOOKS[curLook], it = lookItems(L, curLook), box = $('.h4-look');
      if (!it.length) { box.innerHTML = '<div class="h4-load">טוענים את הסט…</div>'; return; }
      var sel = lookSel[curLook] || (lookSel[curLook] = it.map(function () { return true; }));
      var tot = it.reduce(function (s, p, i) { return s + (sel[i] ? p.price : 0); }, 0), cnt = sel.filter(Boolean).length;
      box.innerHTML =
        '<div class="h4-board n' + it.length + '" style="--bg:' + L.bg + '">' + it.map(function (p, i) { return '<button type="button" class="h4-bi b' + (i + 1) + (sel[i] ? '' : ' off') + '" data-id="' + esc(p.id) + '" style="--i:' + i + '"><span class="f">' + img(p) + '</span><i class="num">' + (i + 1) + '</i></button>'; }).join('') +
          '<p class="h4-note">סידור דיגיטלי של מוצרים אמיתיים מהקטלוג</p></div>' +
        '<div class="h4-lside"><h3>' + L.t + '</h3><p>' + L.s + '</p><ul>' + it.map(function (p, i) {
          return '<li><label><input type="checkbox" data-li="' + i + '"' + (sel[i] ? ' checked' : '') + '><i class="num">' + (i + 1) + '</i>' + img(p, 'th') + '<span class="nm">' + esc(p.name) + '</span><span class="pr">' + price(p) + '</span></label><a href="' + esc(p.url) + '" class="go" aria-label="לעמוד המוצר: ' + esc(p.name) + '">←</a></li>';
        }).join('') + '</ul>' +
        '<div class="h4-ltot"><span>' + (cnt === it.length ? 'כל הסט' : cnt + ' מתוך ' + it.length + ' פריטים') + '</span><b>' + '<span class="num">' + fmt(tot) + '</span>' + cur + '</b></div>' +
        '<div class="h4-lact"><button type="button" class="h4-btn" data-look="cart"' + (cnt ? '' : ' disabled') + '>להוסיף ' + (cnt === 1 ? 'פריט אחד' : cnt + ' פריטים') + ' לסל</button><button type="button" class="h4-btn ghost" data-look="gift"' + (cnt ? '' : ' disabled') + '>לארוז כמתנה ←</button></div></div>';
    }
    m.addEventListener('change', function (e) { var c = e.target.closest('[data-li]'); if (!c) return; lookSel[curLook][+c.getAttribute('data-li')] = c.checked; renderLooks(); });
    m.addEventListener('click', function (e) {
      var t = e.target.closest('[data-l]'); if (t) { curLook = +t.getAttribute('data-l'); renderLooks(); return; }
      var a = e.target.closest('[data-look]'); if (!a) return;
      var it = lookItems(LOOKS[curLook], curLook).filter(function (_, i) { return lookSel[curLook][i]; });
      if (a.getAttribute('data-look') === 'gift') { it.forEach(function (p) { if (!St.has(p.id)) St.items.push(S.giftItem(p)); }); St.save(); location.href = '/?sg=studio'; return; }
      a.disabled = true; var ok = 0, i = 0;
      (function step() {
        if (i >= it.length) { a.disabled = false; a.textContent = ok === it.length ? 'נוספו לסל ✓' : ok + ' מתוך ' + it.length + ' נוספו לסל'; if (ok) { W.SGCartBump && W.SGCartBump(ok); S.toast(ok + ' פריטים נוספו לסל'); } setTimeout(renderLooks, 2600); return; }
        a.textContent = 'מוסיפים ' + (i + 1) + ' מתוך ' + it.length + '…';
        W.SGAddToCart(it[i].url).then(function (r) { if (r) ok++; i++; step(); });
      })();
    });

    /* ---------- 4. gifts by budget ---------- */
    var bud = 1;
    function renderRail() {
      var b = BUDGETS[bud], seen = {}, l = [];
      ['gifts', 'acc', 'judaica', 'baby', 'home', 'him', 'textile', 'toys'].forEach(function (k) { plist(k).forEach(function (p) { if (!seen[p.id] && p.price >= b[0] && p.price < b[1]) { seen[p.id] = 1; l.push(p); } }); });
      l = l.slice(0, 12);
      $('.h4-rail').innerHTML = l.length ? l.map(function (p) {
        return '<article class="h4-c" data-id="' + esc(p.id) + '"><button type="button" class="h4-cimg" data-open>' + img(p) + '</button><p class="k">' + DEP[p.k][0] + '</p><a class="nm" href="' + esc(p.url) + '">' + esc(p.name) + '</a><p class="pr">' + price(p) + '</p>' +
          '<div class="ac"><button type="button" data-cart>הוספה לסל</button><button type="button" data-gift aria-pressed="false">＋ למתנה</button></div></article>';
      }).join('') : '<p class="h4-load">טוענים מתנות…</p>';
      syncGift();
    }
    m.addEventListener('click', function (e) { var b = e.target.closest('[data-b]'); if (!b) return; bud = +b.getAttribute('data-b'); [].forEach.call(m.querySelectorAll('[data-b]'), function (x) { x.setAttribute('aria-pressed', x === b); }); renderRail(); });
    function renderTray() {
      var it = St.items, t = $('.h4-tray');
      t.innerHTML = it.length ? '<span class="ims">' + it.slice(0, 4).map(function (x) { return '<img src="' + esc(x.img) + '" alt="">'; }).join('') + '</span>המתנה שלך: ' + W.SGCountLabel(it.length) + ' · ' + fmt(St.total()) + ' ₪ ←' : 'לסטודיו המתנות ←';
    }

    /* ---------- 5. index with floating peek ---------- */
    function renderIndex() {
      $('.h4-list').innerHTML = deps.map(function (k, i) {
        var p = plist(k)[1] || plist(k)[0], im = p ? p.img : (data[k] && data[k].cov) || '';
        return '<li><a href="' + DEP[k][1] + '" data-img="' + esc(im) + '"><i class="num">' + String(i + 1).padStart(2, '0') + '</i>' + (im ? '<img class="mth" src="' + esc(im) + '" alt="" loading="lazy">' : '') + '<b>' + DEP[k][0] + '</b><small>' + DEP[k][2] + '</small><span class="c num">' + (data[k] && data[k].n ? fmt(data[k].n) : '') + '</span></a></li>';
      }).join('');
    }
    var peek = $('.h4-peek');
    m.addEventListener('mouseover', function (e) { var a = e.target.closest('.h4-list a'); if (!a || mob()) return; var u = a.getAttribute('data-img'); if (u) { peek.innerHTML = '<img src="' + esc(u) + '" alt="">'; peek.classList.add('on'); } });
    m.addEventListener('mouseout', function (e) { if (e.target.closest('.h4-list a') && !(e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest('.h4-list a'))) peek.classList.remove('on'); });
    m.addEventListener('mousemove', function (e) { if (peek.classList.contains('on')) peek.style.transform = 'translate(' + (e.clientX - 120) + 'px,' + (e.clientY - 150) + 'px)'; });

    /* ---------- product sheet (tap anything) ---------- */
    var sheet = $('.h4-sheet'), lastFocus = null;
    function openSheet(p) {
      lastFocus = D.activeElement;
      sheet.querySelector('.h4-sh-in').innerHTML =
        '<button type="button" class="h4-x" data-close aria-label="סגירה">×</button>' +
        '<div class="h4-sh-im">' + img(p) + '</div><div class="h4-sh-tx" data-id="' + esc(p.id) + '"><p class="k">' + DEP[p.k][0] + '</p><h3>' + esc(p.name) + '</h3><p class="pr">' + price(p) + '</p>' +
        '<div class="ac"><button type="button" class="h4-btn" data-cart>הוספה לסל</button><button type="button" class="h4-btn ghost" data-gift aria-pressed="false">＋ להוסיף למתנה</button></div>' +
        '<a class="more" href="' + esc(p.url) + '">לפרטים מלאים, תמונות ושדרוגים ←</a><p class="fine">כל מוצר אפשר לקנות כרגיל, או לצרף למתנה שנעטפת בחנות ללא תוספת.</p></div>';
      sheet.hidden = false; D.documentElement.classList.add('h4-lock'); syncGift();
      requestAnimationFrame(function () { sheet.classList.add('in'); sheet.querySelector('[data-cart]').focus(); });
    }
    function closeSheet() { sheet.classList.remove('in'); D.documentElement.classList.remove('h4-lock'); setTimeout(function () { sheet.hidden = true; }, 260); lastFocus && lastFocus.focus && lastFocus.focus(); }
    sheet.addEventListener('click', function (e) { if (e.target.closest('[data-close]')) closeSheet(); });
    D.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !sheet.hidden) closeSheet(); });
    m.addEventListener('click', function (e) {
      var o = e.target.closest('.h4-t, .h4-o, .h4-bi, [data-open]');
      if (o) { var id = o.getAttribute('data-id') || o.closest('[data-id]').getAttribute('data-id'); var p = byId[id]; if (p) { e.preventDefault(); openSheet(p); } return; }
      var g = e.target.closest('[data-gift]'), c = e.target.closest('[data-cart]'), box = (g || c) && (g || c).closest('[data-id]');
      if (!box) return; var p2 = byId[box.getAttribute('data-id')]; if (!p2) return;
      if (g) St.toggle(S.giftItem(p2));
      if (c) {
        c.disabled = true; c.textContent = 'מוסיפים…';
        W.SGAddToCart(p2.url).then(function (ok) {
          c.disabled = false;
          if (ok) { c.textContent = 'נוסף לסל ✓'; c.classList.add('done'); W.SGCartBump && W.SGCartBump(1); S.toast('נוסף לסל · ' + S.shortName(p2.name)); setTimeout(function () { c.classList.remove('done'); c.textContent = 'הוספה לסל'; }, 2400); }
          else location.href = p2.url;   // product with options: choose them on its page
        });
      }
    });
    function syncGift() {
      [].forEach.call(D.querySelectorAll('.h4 [data-gift]'), function (b) { var id = b.closest('[data-id]').getAttribute('data-id'), on = St.has(id); b.setAttribute('aria-pressed', on); b.textContent = on ? '✓ במתנה' : (b.classList.contains('h4-btn') ? '＋ להוסיף למתנה' : '＋ למתנה'); });
      renderTray();
    }
    St.on(syncGift);

    /* ---------- search proxies to Konimbo's own search ---------- */
    $('.h4-search').addEventListener('submit', function (e) { e.preventDefault(); var v = $('#h4-q').value.trim(); if (v) location.href = '/search/?q=' + encodeURIComponent(v); });

    function all() { index(); renderWall(); renderLive(); renderWorlds(); renderLooks(); renderRail(); renderIndex(); syncGift(); onScroll(); }
    all();
    var lm = mob(); W.addEventListener('resize', function () { if (mob() !== lm) { lm = mob(); renderWall(); } });

    /* ---------- live data: first page of each department, cached 6h in this browser ---------- */
    var q = deps.filter(function (k) { return !data[k]; }), busy = 0, t;
    function save() { try { localStorage.setItem(CK, JSON.stringify({ t: Date.now(), d: data })); } catch (e) {} }
    function next() {
      while (busy < 3 && q.length) (function (k) {
        busy++;
        fetch(DEP[k][1], { credentials: 'same-origin' }).then(function (r) { return r.text(); }).then(function (html) {
          var d = new DOMParser().parseFromString(html, 'text/html');
          var list = S.scrapeCards(d).filter(function (p) { return p.img && p.price > 0; }).slice(0, PER).map(function (p) { return { id: String(p.id), url: p.url, name: p.name, img: p.img, price: p.price }; });
          var h1 = d.querySelector('h1'), near = h1 ? (h1.parentElement.parentElement || h1.parentElement).textContent : '';
          var cnt = (near.match(/תוצאות:\s*(\d+)/) || [])[1], cov = '';
          if (!list.length) { var im = [].filter.call(d.querySelectorAll('a[href] img'), function (i) { var h = i.closest('a').getAttribute('href') || ''; return /\/\d{5,}-/.test(h) && !/logo/i.test(i.getAttribute('src') || ''); })[0]; if (im) cov = im.getAttribute('data-src') || im.getAttribute('src'); }
          data[k] = { p: list, n: cnt ? +cnt : list.length, cov: cov };
        }).catch(function () { data[k] = { p: [], n: 0 }; }).then(function () {
          busy--; save(); clearTimeout(t); t = setTimeout(all, 120); next();
        });
      })(q.shift());
    }
    next();
    return m;
  };
})();

/* Shared kit for the home-page demos A / B / C (test environment only).
   Real catalogue data (department pages + Konimbo search), product sheet, cart + gift actions. */
(function () {
  var W = window, D = document;
  var DEP = {
    home: ['כלי בית', '/422574-%D7%9B%D7%9C%D7%99-%D7%91%D7%99%D7%AA', 'הגשה, אירוח, קריסטל ומטבח', '#E9ECEB'],
    textile: ['טקסטיל לבית', '/422581-%D7%98%D7%A7%D7%A1%D7%98%D7%99%D7%9C-%D7%9C%D7%91%D7%99%D7%AA-', 'מצעים, מגבות ומפות', '#EEE6DA'],
    baby: ['תינוקות', '/423383-%D7%AA%D7%99%D7%A0%D7%95%D7%A7%D7%95%D7%AA', 'בגדי תינוקות, שמיכות ומתנות לידה', '#F3E6E1'],
    judaica: ['יודאיקה', '/422573-%D7%99%D7%95%D7%93%D7%90%D7%99%D7%A7%D7%94', 'שבת, נטלות, ברכות וחג', '#E4E2EA'],
    acc: ['אקססוריז לבית', '/422499-%D7%90%D7%A7%D7%A1%D7%A1%D7%95%D7%A8%D7%99%D7%96-%D7%9C%D7%91%D7%99%D7%AA', 'מפיצי ריח, פרחי משי, נרות ונוי', '#E8E1D6'],
    gifts: ['מתנות מעוצבות', '/422536-%D7%9E%D7%AA%D7%A0%D7%95%D7%AA-%D7%9E%D7%A2%D7%95%D7%A6%D7%91%D7%95%D7%AA', 'מארזים מוכנים לכל אירוע', '#EFE4D2'],
    toys: ['משחקים', '/422285-%D7%9E%D7%A9%D7%97%D7%A7%D7%99%D7%9D', 'צעצועים, משחקי עץ ויצירה', '#EEE6D5'],
    him: ['לגבר ולאישה', '/422488-%D7%9C%D7%92%D7%91%D7%A8-%D7%95%D7%9C%D7%90%D7%99%D7%A9%D7%94', 'אקססוריז ומתנות אישיות', '#E5E1DB'],
    holidays: ['חגים', '/422572-%D7%97%D7%92%D7%99%D7%9D', 'לכל חג ומועד', '#ECE5D8'],
    catering: ['קייטרינג בוטיק', '/403465-%D7%A7%D7%99%D7%99%D7%98%D7%A8%D7%99%D7%A0%D7%92-%D7%91%D7%95%D7%98%D7%99%D7%A7', 'עיצוב כיבוד לאירועים', '#EFE7DC']
  };
  var ORDER = ['home', 'textile', 'baby', 'judaica', 'acc', 'gifts', 'toys', 'him', 'holidays', 'catering'];
  var CK = 'sg_home4', SK = 'sg_hk_s', TTL = 6 * 3600e3, PER = 18;
  var FONTS = 'https://fonts.googleapis.com/css2?family=Bellefair&family=Frank+Ruhl+Libre:wght@300;400;500&family=Heebo:wght@300;400;500;600;700&family=IBM+Plex+Sans+Hebrew:wght@200;300;400;500;600&display=swap';

  var K = W.SGKit = {
    DEP: DEP, ORDER: ORDER, data: {}, uniq: {}, byId: {}, fns: [],
    fonts: function () { if (D.getElementById('hk-fonts') || W.SG_NO_FONTS) return; var l = D.createElement('link'); l.id = 'hk-fonts'; l.rel = 'stylesheet'; l.href = FONTS; D.head.appendChild(l); },
    list: function (k) { return K.uniq[k] || []; },
    all: function () { var out = [], i, any = true; for (i = 0; any; i++) { any = false; ORDER.forEach(function (k) { var p = K.list(k)[i]; if (p) { out.push(p); any = true; } }); } return out; },
    get: function (id) { return K.byId[id]; },
    on: function (f) { K.fns.push(f); },
    ready: function () { return ORDER.filter(function (k) { return K.data[k]; }).length; },
    index: function () {
      var seen = {}; K.uniq = {};
      ORDER.forEach(function (k) {
        K.uniq[k] = (K.data[k] && K.data[k].p || []).filter(function (p) { var n = p.name.replace(/\s+/g, ' ').trim(); if (seen[n] || seen[p.id]) return false; seen[n] = seen[p.id] = 1; return true; });
        K.uniq[k].forEach(function (p) { p.k = k; K.byId[p.id] = p; });
      });
    },
    /* first page of each department, cached 6h in this browser (shared with demo 4) */
    load: function () {
      try { var c = JSON.parse(localStorage.getItem(CK) || 'null'); if (c && Date.now() - c.t < TTL) K.data = c.d || {}; } catch (e) {}
      K.index();
      var q = ORDER.filter(function (k) { return !K.data[k]; }), busy = 0, t, S = W.SG;
      var emit = function () { clearTimeout(t); t = setTimeout(function () { K.index(); K.fns.forEach(function (f) { try { f(); } catch (e) { W.console && console.error(e); } }); }, 120); };
      if (!q.length) { emit(); return; }
      (function next() {
        while (busy < 4 && q.length) (function (k) {
          busy++;
          fetch(DEP[k][1], { credentials: 'same-origin' }).then(function (r) { return r.text(); }).then(function (html) {
            var d = new DOMParser().parseFromString(html, 'text/html');
            var list = S.scrapeCards(d).filter(function (p) { return p.img && p.price > 0; }).slice(0, PER).map(function (p) { return { id: String(p.id), url: p.url, name: p.name, img: p.img, price: p.price }; });
            K.data[k] = { p: list, n: list.length, cov: '' };
          }).catch(function () { K.data[k] = { p: [], n: 0 }; }).then(function () {
            busy--; try { localStorage.setItem(CK, JSON.stringify({ t: Date.now(), d: K.data })); } catch (e) {} emit(); next();
          });
        })(q.shift());
      })();
    },
    /* Konimbo's own search, cached per term */
    search: function (term) {
      var S = W.SG, mem;
      try { mem = JSON.parse(localStorage.getItem(SK) || '{}'); } catch (e) { mem = {}; }
      var hit = mem[term];
      var reg = function (l) { l.forEach(function (p) { if (!K.byId[p.id]) { p.k = p.k || ''; K.byId[p.id] = p; } }); return l.map(function (p) { return K.byId[p.id]; }); };
      if (hit && Date.now() - hit.t < TTL) return Promise.resolve(reg(hit.p));
      if (W.SG_MOCK_SEARCH) return Promise.resolve(reg(W.SG_MOCK_SEARCH(term)));
      return fetch('/search/?q=' + encodeURIComponent(term), { credentials: 'same-origin' }).then(function (r) { return r.text(); }).then(function (html) {
        var d = new DOMParser().parseFromString(html, 'text/html');
        var l = S.scrapeCards(d).filter(function (p) { return p.img && p.price > 0; }).slice(0, 16).map(function (p) { return { id: String(p.id), url: p.url, name: p.name, img: p.img, price: p.price }; });
        try { mem[term] = { t: Date.now(), p: l }; var keys = Object.keys(mem); if (keys.length > 60) delete mem[keys[0]]; localStorage.setItem(SK, JSON.stringify(mem)); } catch (e) {}
        return reg(l);
      }).catch(function () { return []; });
    },
    depName: function (p) { return p && DEP[p.k] ? DEP[p.k][0] : 'מהחנות'; },
    img: function (p, cls, eager) { var e = W.SG.esc; return '<img' + (cls ? ' class="' + cls + '"' : '') + ' src="' + e(p.img) + '" alt="' + e(p.name) + '"' + (eager ? '' : ' loading="lazy"') + ' decoding="async" draggable="false">'; },
    price: function (p) { return '<span class="num">' + W.SG.fmt(p.price) + '</span>&nbsp;₪'; },
    preload: function (list, ms) {
      return Promise.race([Promise.all(list.map(function (p) { return new Promise(function (r) { var i = new Image(); i.onload = i.onerror = function () { r(); }; i.src = p.img; }); })), new Promise(function (r) { setTimeout(r, ms || 1400); })]);
    },
    /* actions */
    cart: function (p, btn) {
      var S = W.SG, lab = btn ? btn.innerHTML : '';
      if (btn) { btn.disabled = true; btn.textContent = 'מוסיפים…'; }
      return W.SGAddToCart(p.url).then(function (ok) {
        if (btn) btn.disabled = false;
        if (ok) { W.SGCartBump && W.SGCartBump(1); S.toast('נוסף לסל · ' + S.shortName(p.name)); if (btn) { btn.textContent = 'נוסף לסל ✓'; btn.classList.add('done'); setTimeout(function () { btn.classList.remove('done'); btn.innerHTML = lab; }, 2200); } }
        else location.href = p.url;   // products with options are chosen on their own page
        return ok;
      });
    },
    cartMany: function (list, btn, done) {
      var S = W.SG, ok = 0, i = 0, lab = btn.innerHTML; btn.disabled = true;
      (function step() {
        if (i >= list.length) { btn.disabled = false; btn.textContent = ok === list.length ? 'נוספו לסל ✓' : ok + ' מתוך ' + list.length + ' נוספו לסל'; if (ok) { W.SGCartBump && W.SGCartBump(ok); S.toast(ok === 1 ? 'פריט אחד נוסף לסל' : ok + ' פריטים נוספו לסל'); } setTimeout(function () { btn.innerHTML = lab; done && done(); }, 2600); return; }
        btn.textContent = 'מוסיפים ' + (i + 1) + ' מתוך ' + list.length + '…';
        W.SGAddToCart(list[i].url).then(function (r) { if (r) ok++; i++; step(); });
      })();
    },
    gift: function (p) { W.SG.Store.toggle(W.SG.giftItem(p)); },
    giftMany: function (list) { var St = W.SG.Store; list.forEach(function (p) { if (!St.has(p.id)) St.items.push(W.SG.giftItem(p)); }); St.save(); location.href = '/?sg=studio'; },
    /* product sheet shared by all demos */
    sheet: function (p, theme) {
      var S = W.SG, esc = S.esc, St = S.Store, sh = D.getElementById('hk-sheet');
      if (!sh) {
        sh = D.createElement('div'); sh.id = 'hk-sheet'; sh.className = 'hk-sheet'; sh.setAttribute('role', 'dialog'); sh.setAttribute('aria-modal', 'true'); sh.setAttribute('aria-label', 'פרטי מוצר'); sh.hidden = true;
        sh.innerHTML = '<div class="hk-bg" data-x></div><div class="hk-in"></div>';
        (D.getElementById('sg-root') || D.body).appendChild(sh);
        sh.addEventListener('click', function (e) {
          if (e.target.closest('[data-x]')) return K.unsheet();
          var q = sh.__p; if (!q) return;
          var c = e.target.closest('[data-sc]'), g = e.target.closest('[data-sg]');
          if (c) K.cart(q, c);
          if (g) { K.gift(q); sync(); }
        });
        D.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !sh.hidden) K.unsheet(); });
      }
      var sync = function () { var g = sh.querySelector('[data-sg]'); if (!g) return; var on = St.has(sh.__p.id); g.setAttribute('aria-pressed', on); g.textContent = on ? '✓ נמצא במתנה שלך' : '＋ להוסיף למתנה'; };
      sh.__p = p; sh.__last = D.activeElement; sh.className = 'hk-sheet ' + (theme || '');
      sh.querySelector('.hk-in').innerHTML =
        '<button type="button" class="hk-x" data-x aria-label="סגירה">×</button>' +
        '<div class="hk-im">' + K.img(p, '', true) + '</div>' +
        '<div class="hk-tx"><p class="hk-k">' + K.depName(p) + '</p><h3>' + esc(p.name) + '</h3><p class="hk-pr">' + K.price(p) + '</p>' +
        '<div class="hk-ac"><button type="button" class="hk-b" data-sc>הוספה לסל</button><button type="button" class="hk-b ghost" data-sg aria-pressed="false"></button></div>' +
        '<a class="hk-more" href="' + esc(p.url) + '">לעמוד המוצר — תמונות, פרטים ואפשרויות ←</a>' +
        '<p class="hk-fine">קונים לעצמכם — לסל. בונים מתנה — מוסיפים, ובסטודיו בוחרים צלופן או קופסה. העטיפה ללא תוספת.</p></div>';
      sync(); sh.hidden = false; D.documentElement.classList.add('hk-lock');
      requestAnimationFrame(function () { sh.classList.add('in'); var b = sh.querySelector('[data-sc]'); b && b.focus({ preventScroll: true }); });
    },
    unsheet: function () { var sh = D.getElementById('hk-sheet'); if (!sh || sh.hidden) return; sh.classList.remove('in'); D.documentElement.classList.remove('hk-lock'); setTimeout(function () { sh.hidden = true; }, 280); try { sh.__last && sh.__last.focus({ preventScroll: true }); } catch (e) {} },
    goSearch: function (v) { v = (v || '').trim(); if (v) location.href = '/search/?q=' + encodeURIComponent(v); },
    seeded: function (seed) { var s = seed || 1; return function () { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; },
    calm: function () { return W.matchMedia && W.matchMedia('(prefers-reduced-motion: reduce)').matches; },
    mob: function () { return W.innerWidth <= 760; }
  };
})();

/* Home demo A — "עולם המוצרים החי" (The living product world).
   The whole store as one explorable space: every department is a constellation of real products floating at three depths.
   Drag in any direction, fly between worlds, zoom out to see the entire store as a map, search lights up what it finds,
   and a long press lifts a product so it can be dropped into the gift box. Test environment only. */
(function () {
  var W = window, D = document;
  W.SGHomeA = function (root) {
    var K = W.SGKit, S = W.SG, St = S.Store, esc = S.esc, fmt = S.fmt;
    K.fonts();
    var m = D.createElement('main'); m.className = 'hA'; m.id = 'sg-main'; root.appendChild(m);
    m.innerHTML =
      '<section class="hA-f" aria-label="עולם המוצרים של החנות">' +
        '<div class="hA-st"></div><div class="hA-vig" aria-hidden="true"></div>' +
        '<div class="hA-hd">' +
          '<p class="hA-eye">שיר מתנות · בני ברק</p>' +
          '<h1 class="hA-h1"><span>כל החנות.</span><span><em>עולם אחד.</em></span></h1>' +
          '<p class="hA-sub">מאות פריטים מכל המחלקות, מרחפים יחד. גררו לכל כיוון, עצרו על מה שמושך את העין — הכול כאן אמיתי ונקנה בלחיצה.</p>' +
          '<form class="hA-s" role="search"><label class="sg-vh" for="hA-q">חיפוש בחנות</label><input id="hA-q" type="search" autocomplete="off" placeholder="חפשו — והעולם יאיר את מה שמצאתם"><button aria-label="חיפוש בכל החנות">↵</button></form>' +
          '<p class="hA-sres" aria-live="polite"></p>' +
        '</div>' +
        '<p class="hA-help" aria-hidden="true"><span class="d">גררו לכל כיוון · לחצו על מוצר · <b>לחיצה ארוכה וגרירה אל הקופסה — והפריט הופך למתנה</b></span><span class="mo">החליקו לצדדים · הקישו על מוצר</span></p>' +
        '<div class="hA-dock">' +
          '<nav class="hA-nav" aria-label="עולמות החנות"><button type="button" class="hA-ov" data-ov aria-pressed="false"><svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><rect x="1.5" y="1.5" width="5" height="5" fill="none" stroke="currentColor"/><rect x="9.5" y="1.5" width="5" height="5" fill="none" stroke="currentColor"/><rect x="1.5" y="9.5" width="5" height="5" fill="none" stroke="currentColor"/><rect x="9.5" y="9.5" width="5" height="5" fill="none" stroke="currentColor"/></svg>מבט על כל החנות</button><span class="hA-pills"></span></nav>' +
          '<a class="hA-box" href="/?sg=studio"><span class="hA-bxi" aria-hidden="true"></span><span class="hA-bxt"></span></a>' +
        '</div>' +
      '</section>' +
      '<section class="hA-after" aria-label="המתנה שלך והמחלקות">' +
        '<div class="hA-gift"><p class="hA-eye">הקופסה</p><h2>כל מה שהרמתם — <em>מתנה אחת.</em></h2><div class="hA-glist"></div>' +
          '<div class="hA-wrap" role="group" aria-label="סוג אריזה"><button type="button" data-w="box">קופסה שקופה</button><button type="button" data-w="cello">צלופן פתוח</button></div>' +
          '<div class="hA-gtot"></div><a class="hA-btn" href="/?sg=studio">להמשיך לסטודיו המתנות ←</a>' +
          '<p class="hA-fine">עיצוב ועטיפה בחנות, ללא תוספת. מוצרים שקונים לעצמכם — פשוט מוסיפים לסל.</p></div>' +
        '<div class="hA-deps"><p class="hA-eye">כל המחלקות</p><ol>' + K.ORDER.map(function (k, i) { return '<li><a href="' + K.DEP[k][1] + '"><i>' + String(i + 1).padStart(2, '0') + '</i><b>' + K.DEP[k][0] + '</b><small>' + K.DEP[k][2] + '</small></a></li>'; }).join('') + '</ol></div>' +
      '</section>';

    var $ = function (s) { return m.querySelector(s); };
    var field = $('.hA-f'), stage = $('.hA-st'), calm = K.calm();
    var CW = 1300, CH = 1150, COLS = 4, DEPTH = [0.56, 0.82, 1.12];
    var items = [], labels = [], clusters = [], WW = 1, HH = 1;
    var cam = { x: 0, y: 0, z: 0.42 }, vel = { x: 0, y: 0 }, mouse = { x: 0, y: 0 }, VW = 1, VH = 1;
    var flat = 0, fly = null, over = false, lastAct = 0, cur = -1, running = false, visible = true;

    /* ---------- build the world ---------- */
    function build() {
      var mob = K.mob(), per = mob ? 11 : 18, base = mob ? 128 : 178;
      var ks = K.ORDER.filter(function (k) { return K.list(k).length; });
      if (!ks.length) return;
      var cols = Math.min(COLS, ks.length), rows = Math.ceil(ks.length / cols);
      WW = cols * CW; HH = Math.max(2, rows) * CH;
      var rnd = K.seeded(7), html = '';
      items = []; labels = []; clusters = [];
      ks.forEach(function (k, ci) {
        var cx = (ci % cols + 0.5) * CW, cy = (Math.floor(ci / cols) + 0.5) * CH;
        clusters.push({ k: k, x: cx, y: cy });
        K.list(k).slice(0, per).forEach(function (p, i) {
          var a = (i + 3) * 2.39996, r = (mob ? 92 : 112) * Math.sqrt(i + 3.2) * (0.9 + rnd() * 0.2);
          var d = rnd() < 0.3 ? 0 : rnd() < 0.55 ? 1 : 2;
          items.push({ p: p, x: cx + Math.cos(a) * r * 1.22, y: cy + Math.sin(a) * r, s: DEPTH[d], d: d, b: base * (0.9 + rnd() * 0.25), c: ci });
        });
      });
      items.forEach(function (it, i) {
        html += '<button type="button" class="hA-i d' + it.d + '" data-i="' + i + '"' + (i % 18 < 3 ? '' : ' tabindex="-1"') + ' style="width:' + Math.round(it.b) + 'px;height:' + Math.round(it.b) + 'px"><span class="ph">' + K.img(it.p, '', i < 40) + '</span><span class="cp"><b>' + esc(S.shortName(it.p.name)) + '</b><i>' + fmt(it.p.price) + ' ₪</i></span></button>';
      });
      clusters.forEach(function (c, i) {
        html += '<div class="hA-lb" data-c="' + i + '"><b>' + K.DEP[c.k][0] + '</b><a href="' + K.DEP[c.k][1] + '" draggable="false">לכל המחלקה ←</a></div>';
      });
      stage.innerHTML = html;
      [].forEach.call(stage.querySelectorAll('.hA-i'), function (el, i) { items[i].el = el; items[i].vis = true; });
      [].forEach.call(stage.querySelectorAll('.hA-lb'), function (el, i) { labels.push({ el: el, x: clusters[i].x, y: clusters[i].y, s: 0.82, b: 0 }); });
      $('.hA-pills').innerHTML = clusters.map(function (c, i) { return '<button type="button" data-fly="' + i + '">' + K.DEP[c.k][0] + '</button>'; }).join('');
      if (cur < 0) { cam.x = clusters[0].x - 120; cam.y = clusters[0].y; }
      cur = -1; resize(); search(); frame(true);
    }

    /* ---------- projection ---------- */
    var wrap = function (v, s) { v = ((v % s) + s) % s; return v > s / 2 ? v - s : v; };
    function place(o, mob) {
      var se = 1 + (o.s - 1) * flat, sc = se * cam.z;
      var dx = wrap(o.x - cam.x, WW), dy = wrap(o.y - cam.y, HH);
      var X = VW / 2 + dx * sc + mouse.x * (se - 0.8) * 26, Y = VH / 2 + dy * sc + mouse.y * (se - 0.8) * 18;
      var half = (o.b || 300) * sc / 2 + 40, vis = X > -half && X < VW + half && Y > -half && Y < VH + half;
      if (vis !== o.vis) { o.vis = vis; o.el.style.visibility = vis ? '' : 'hidden'; }
      if (vis) o.el.style.transform = 'translate3d(' + (X - (o.b ? o.b / 2 : 0)).toFixed(1) + 'px,' + (Y - (o.b ? o.b / 2 : 0)).toFixed(1) + 'px,0) scale(' + sc.toFixed(4) + ')';
    }
    function frame(force) {
      // depth flattens as the camera pulls back, so the overview reads as one calm map of the store
      flat = Math.max(0, Math.min(1, (cam.z - 0.36) / 0.6));
      items.forEach(function (o) { place(o); });
      labels.forEach(function (o) { place(o); });
      var near = nearest(); if (near !== cur && near > -1) setCur(near);
    }
    function nearest() {
      var b = -1, bd = 1e12; clusters.forEach(function (c, i) { var dx = wrap(c.x - cam.x, WW), dy = wrap(c.y - cam.y, HH), d = dx * dx + dy * dy; if (d < bd) { bd = d; b = i; } }); return b;
    }
    function setCur(i) {
      cur = i; var c = clusters[i]; field.style.setProperty('--bg', K.DEP[c.k][3]);
      [].forEach.call(m.querySelectorAll('[data-fly]'), function (b) { b.setAttribute('aria-current', +b.getAttribute('data-fly') === i ? 'true' : 'false'); });
      var a = m.querySelector('[data-fly="' + i + '"]'); if (a && K.mob()) { var n = a.parentNode; n.scrollTo({ left: a.offsetLeft - n.clientWidth / 2 + a.offsetWidth / 2, behavior: 'smooth' }); }
      labels.forEach(function (l, j) { l.el.classList.toggle('on', j === i); });
    }
    function resize() { var r = field.getBoundingClientRect(); VW = r.width; VH = r.height; }

    /* ---------- camera flights ---------- */
    var ease = function (t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };
    function flyTo(x, y, z, ms, dip) {
      var sx = cam.x, sy = cam.y, sz = cam.z, dx = wrap(x - sx, WW), dy = wrap(y - sy, HH), t0 = performance.now();
      if (calm) ms = 1;
      vel.x = vel.y = 0; lastAct = performance.now();
      fly = function (now) {
        var t = Math.min(1, (now - t0) / ms), e = ease(t);
        cam.x = sx + dx * e; cam.y = sy + dy * e;
        cam.z = sz + (z - sz) * e - (dip ? dip * Math.sin(Math.PI * t) : 0);
        if (t >= 1) fly = null;
      };
      kick();
    }
    function flyCluster(i) {
      var c = clusters[i]; if (!c) return; setOver(false, true);
      var dist = Math.hypot(wrap(c.x - cam.x, WW), wrap(c.y - cam.y, HH));
      flyTo(c.x - (K.mob() ? 0 : 120), c.y, 1, 900 + Math.min(900, dist * 0.35), dist > 400 ? 0.42 : 0.1);
    }
    function overviewZ() { return Math.min(VW * 0.9 / WW, VH * 0.84 / HH); }
    function setOver(on, silent) {
      over = on; field.classList.toggle('over', on); $('[data-ov]').setAttribute('aria-pressed', on);
      if (silent) return;
      if (on) flyTo(WW / 2 - CW / 2 * 0, HH / 2, overviewZ(), 1300, 0);
      else flyCluster(cur > -1 ? cur : 0);
    }

    /* ---------- loop ---------- */
    function tick(now) {
      running = false; if (!visible) return;
      if (fly) fly(now);
      else if (!drag.on && !over) {
        cam.x += vel.x; cam.y += vel.y; vel.x *= 0.93; vel.y *= 0.93;
        if (now - lastAct > 2600 && !calm && !pick) { vel.x += (-0.38 - vel.x) * 0.015; }  // the world keeps drifting gently when left alone
      }
      frame(); kick();
    }
    function kick() { if (!running && visible) { running = true; requestAnimationFrame(tick); } }

    /* ---------- drag, click, long-press pick-up ---------- */
    var drag = { on: false }, pick = null, hold = 0;
    stage.addEventListener('pointerdown', function (e) {
      if (e.button > 0) return;
      lastAct = performance.now();
      var it = e.target.closest('.hA-i');
      drag = { on: true, x: e.clientX, y: e.clientY, lx: e.clientX, ly: e.clientY, t: performance.now(), moved: false, it: it, id: e.pointerId, type: e.pointerType };
      vel.x = vel.y = 0; fly = null;
      if (it && !over) hold = setTimeout(function () { if (drag.on && !drag.moved) startPick(it, e); }, 330);
    });
    W.addEventListener('pointermove', function (e) {
      if (!drag.on || e.pointerId !== drag.id) { if (e.pointerType === 'mouse' && !drag.on) { var r = field.getBoundingClientRect(); mouse.x = (e.clientX - r.left - VW / 2) / VW; mouse.y = (e.clientY - r.top - VH / 2) / VH; kick(); } return; }
      if (pick) { movePick(e); return; }
      var dx = e.clientX - drag.lx, dy = e.clientY - drag.ly;
      if (!drag.moved && Math.hypot(e.clientX - drag.x, e.clientY - drag.y) > 7) { drag.moved = true; clearTimeout(hold); field.classList.add('grab'); }
      if (!drag.moved || over) return;
      var k = 1 / (cam.z * 0.85);
      if (drag.type === 'touch') dy = 0;   // on phones the page still scrolls vertically; the world travels sideways
      cam.x -= dx * k; cam.y -= dy * k; vel.x = -dx * k; vel.y = -dy * k;
      drag.lx = e.clientX; drag.ly = e.clientY; lastAct = performance.now(); kick();
    }, { passive: true });
    W.addEventListener('pointerup', end); W.addEventListener('pointercancel', end);
    function end(e) {
      if (!drag.on || e.pointerId !== drag.id) return;
      clearTimeout(hold); field.classList.remove('grab');
      if (pick) { dropPick(e); drag.on = false; return; }
      var was = drag; drag = { on: false }; if (was.moved) field.__moved = performance.now();
      if (!was.moved && was.it) { var o = items[+was.it.getAttribute('data-i')]; if (over) { overDive(o); return; } K.sheet(o.p, 'tA'); }
      else if (!was.moved && over) { var lb = e.target.closest && e.target.closest('.hA-lb'); if (lb) flyCluster(+lb.getAttribute('data-c')); }
      kick();
    }
    function overDive(o) { setOver(false, true); flyTo(o.x, o.y, 1, 1200, 0); }
    stage.addEventListener('click', function (e) { if (e.target.closest('.hA-i') || performance.now() - (field.__moved || 0) < 350) { e.preventDefault(); e.stopPropagation(); } }, true);
    stage.addEventListener('keydown', function (e) { var it = e.target.closest('.hA-i'); if (it && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); K.sheet(items[+it.getAttribute('data-i')].p, 'tA'); } });
    stage.addEventListener('focusin', function (e) { var it = e.target.closest('.hA-i'); if (!it || drag.on) return; var o = items[+it.getAttribute('data-i')]; flyTo(o.x, o.y, 1, 500, 0); });
    stage.addEventListener('contextmenu', function (e) { if (e.target.closest('.hA-i')) e.preventDefault(); });
    field.addEventListener('wheel', function (e) { if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && !over) { e.preventDefault(); cam.x += e.deltaX / cam.z; lastAct = performance.now(); kick(); } }, { passive: false });

    function startPick(it, e) {
      var o = items[+it.getAttribute('data-i')], r = it.getBoundingClientRect();
      pick = { o: o, g: D.createElement('div') };
      pick.g.className = 'hA-ghost'; pick.g.innerHTML = K.img(o.p, '', true);
      pick.g.style.cssText = 'left:' + r.left + 'px;top:' + r.top + 'px;width:' + r.width + 'px;height:' + r.height + 'px';
      D.body.appendChild(pick.g); it.classList.add('lifted'); field.classList.add('picking');
      pick.ox = drag.x - r.left; pick.oy = drag.y - r.top;
      requestAnimationFrame(function () { pick && pick.g.classList.add('up'); });
      navigator.vibrate && navigator.vibrate(12);
    }
    function overBox(e) { var b = $('.hA-box').getBoundingClientRect(); return e.clientX > b.left - 30 && e.clientX < b.right + 30 && e.clientY > b.top - 40 && e.clientY < b.bottom + 30; }
    function movePick(e) { pick.g.style.left = (e.clientX - pick.ox) + 'px'; pick.g.style.top = (e.clientY - pick.oy) + 'px'; $('.hA-box').classList.toggle('hot', overBox(e)); }
    function dropPick(e) {
      var p = pick, hit = overBox(e), b = $('.hA-box');
      b.classList.remove('hot'); field.classList.remove('picking');
      if (hit) {
        var r = b.getBoundingClientRect(); p.g.style.transition = 'all .45s cubic-bezier(.5,0,.2,1)';
        p.g.style.left = (r.left + 10) + 'px'; p.g.style.top = (r.top + 6) + 'px'; p.g.style.width = p.g.style.height = '40px'; p.g.style.opacity = '0';
        if (!St.has(p.o.p.id)) St.add(S.giftItem(p.o.p)); b.classList.add('gulp'); setTimeout(function () { b.classList.remove('gulp'); }, 700);
      } else { p.g.classList.remove('up'); p.g.style.opacity = '0'; }
      setTimeout(function () { p.g.remove(); p.o.el.classList.remove('lifted'); }, 480);
      pick = null;
    }

    /* ---------- search lights up the world ---------- */
    var sT;
    function search() {
      var v = $('#hA-q').value.trim().replace(/["׳']/g, ''), res = $('.hA-sres');
      field.classList.toggle('flt', v.length > 1);
      if (v.length < 2) { res.textContent = ''; items.forEach(function (o) { o.el.classList.remove('hit'); }); return; }
      var hits = items.filter(function (o) { var on = o.p.name.replace(/["׳']/g, '').indexOf(v) > -1; o.el.classList.toggle('hit', on); return on; });
      res.innerHTML = hits.length ? 'מוארים כאן <b>' + (hits.length === 1 ? 'פריט אחד' : hits.length + ' פריטים') + '</b> · ↵ לחיפוש בכל החנות' : 'אין התאמה בין הפריטים שמרחפים כאן · ↵ לחיפוש בכל החנות';
      if (hits.length) { var best = hits.sort(function (a, b) { return Math.hypot(wrap(a.x - cam.x, WW), wrap(a.y - cam.y, HH)) - Math.hypot(wrap(b.x - cam.x, WW), wrap(b.y - cam.y, HH)); })[0]; setOver(false, true); flyTo(best.x - 60, best.y, 0.92, 900, 0); }
    }
    $('#hA-q').addEventListener('input', function () { clearTimeout(sT); sT = setTimeout(search, 180); });
    $('.hA-s').addEventListener('submit', function (e) { e.preventDefault(); K.goSearch($('#hA-q').value); });

    /* ---------- dock + box ---------- */
    m.addEventListener('click', function (e) {
      var f = e.target.closest('[data-fly]'); if (f) { flyCluster(+f.getAttribute('data-fly')); return; }
      if (e.target.closest('[data-ov]')) { setOver(!over); return; }
      var w = e.target.closest('[data-w]'); if (w) { St.setWrap(w.getAttribute('data-w')); return; }
      var rm = e.target.closest('[data-rm]'); if (rm) { St.remove(rm.getAttribute('data-rm')); return; }
      var op = e.target.closest('[data-op]'); if (op) { var p = K.get(op.getAttribute('data-op')); if (p) K.sheet(p, 'tA'); }
    });
    function syncBox() {
      var it = St.items, n = it.length;
      $('.hA-bxi').innerHTML = n ? it.slice(-3).map(function (x) { return '<img src="' + esc(x.img) + '" alt="">'; }).join('') : '';
      $('.hA-bxt').innerHTML = n ? '<b>המתנה שלך</b><span>' + W.SGCountLabel(n) + ' · ' + fmt(St.total()) + ' ₪</span>' : '<b>הקופסה</b><span>גררו לכאן מוצר</span>';
      $('.hA-box').classList.toggle('has', n > 0);
      $('.hA-glist').innerHTML = n ? it.map(function (x) { return '<div class="g"><button type="button" class="im" data-op="' + esc(x.id) + '" aria-label="' + esc(x.name) + '"><img src="' + esc(x.img) + '" alt=""></button><span>' + esc(x.short || x.name) + '<i>' + fmt(x.price) + ' ₪</i></span><button type="button" class="rm" data-rm="' + esc(x.id) + '" aria-label="להסיר מהמתנה">×</button></div>'; }).join('') : '<p class="emp">הקופסה עדיין ריקה. בחנות למעלה — לחיצה ארוכה על מוצר וגרירה אל הקופסה, או "＋ להוסיף למתנה" בחלון המוצר.</p>';
      $('.hA-gtot').innerHTML = n ? '<span>' + W.SGCountLabel(n) + '</span><b>' + fmt(St.total()) + ' ₪</b>' : '';
      [].forEach.call(m.querySelectorAll('.hA-wrap [data-w]'), function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-w') === (St.wrap || 'box')); });
    }
    St.on(syncBox); syncBox();

    /* ---------- life-cycle ---------- */
    W.addEventListener('resize', function () { var lm = field.__mob; resize(); if (lm !== K.mob()) { field.__mob = K.mob(); build(); } kick(); });
    field.__mob = K.mob();
    if ('IntersectionObserver' in W) new IntersectionObserver(function (en) { visible = en[0].isIntersecting; kick(); }).observe(field);
    var intro = false;
    K.on(function () {
      build();
      if (!intro && items.length > 12) {
        intro = true;
        // opening: the whole store seen from afar, then a dive into the first world
        cam.z = Math.max(0.3, overviewZ()); frame();
        field.classList.add('ready');
        setTimeout(function () { flyTo(clusters[0].x - (K.mob() ? 0 : 140), clusters[0].y, 1, calm ? 1 : 2400, 0); }, calm ? 0 : 650);
      }
    });
    K.load();
    return m;
  };
})();

/* Home demo B — "החנות שמשנה צורה" (The store that changes shape).
   One stage. Every choice rebuilds it: a Shabbat table becomes a newborn's blanket, a sideboard, a shelf for a new home.
   The same objects travel across the stage and dissolve into the next scene's products — the store literally rearranges itself.
   A department or a search turns the stage into a gallery of plinths. Everything on stage is a real product: tap, buy, or wrap as a gift. */
(function () {
  var W = window, D = document;
  var SC = [
    { id: 'shabbat', mark: 'שבת', t: 'שולחן שבת', s: 'פמוטים, גביע, חלה ונטלה — שולחן אחד שלם', wall: '#E9E1D3', surf: { l: 3, w: 94, t: 63, h: 37, r: '3px 3px 0 0', c: '#F8F6F1', k: 'cloth' },
      slots: [{ q: 'פמוטים', re: /פמוט/, k: 'judaica', x: 50, y: 64, h: 44 }, { q: 'גביע', re: /גביע|קידוש/, k: 'judaica', x: 34, y: 66, h: 25 }, { q: 'חלה', re: /חלה/, k: 'judaica', x: 66, y: 68, h: 22 }, { q: 'נטלה', re: /נטל/, k: 'judaica', x: 84, y: 70, h: 23 }, { q: 'צלחות', re: /צלח/, k: 'home', x: 18, y: 72, h: 21 }, { q: 'כוסות', re: /כוס|גביעי/, k: 'home', x: 6, y: 66, h: 25 }, { q: 'מלחיה', re: /מלח|דבש|פירות/, k: 'home', x: 94, y: 75, h: 15 }] },
    { id: 'baby', mark: 'לידה', t: 'ברוכה הבאה לעולם', s: 'שמיכה, בגד ראשון, צעצוע ומארז — מתנת לידה שלמה', wall: '#F4EAE6', surf: { l: 8, w: 84, t: 67, h: 30, r: '50%', c: '#EBD8D1', k: 'rug' },
      slots: [{ q: 'שמיכה', re: /שמיכ/, k: 'baby', x: 50, y: 76, h: 34 }, { q: 'בגד תינוק', re: /בגד|אוברול|סט|חליפ/, k: 'baby', x: 27, y: 79, h: 28 }, { q: 'מארז לידה', re: /מארז|לידה/, k: 'gifts', x: 73, y: 79, h: 28 }, { q: 'צעצוע', re: /רעשן|בובה|צעצוע|נשכן|דובי/, k: 'toys', x: 38, y: 91, h: 19 }, { q: 'כובע תינוק', re: /כובע|נעל|גרב|סינר/, k: 'baby', x: 62, y: 91, h: 17 }, { k: 'baby', x: 12, y: 87, h: 21 }, { k: 'toys', x: 88, y: 87, h: 21 }] },
    { id: 'evening', mark: 'ערב', t: 'ערב בבית', s: 'ריח, פרחים ונרות על שידה אחת', wall: '#E3DACB', surf: { l: 12, w: 76, t: 67, h: 33, r: '2px', c: '#6E5646', k: 'wood' },
      slots: [{ q: 'עציץ', re: /עציץ|פרח|זר|ענף/, k: 'acc', x: 52, y: 67, h: 48 }, { q: 'מפיץ ריח', re: /מפיץ|ריח|בושם/, k: 'acc', x: 31, y: 67, h: 30 }, { q: 'נרות', re: /נר |נרות|פמוט|פנס/, k: 'acc', x: 70, y: 67, h: 26 }, { q: 'מגש', re: /מגש/, k: 'home', x: 84, y: 67, h: 15 }, { q: 'קערה', re: /קער|אגרטל|כד/, k: 'home', x: 18, y: 67, h: 18 }, { k: 'acc', x: 41, y: 67, h: 17 }] },
    { id: 'newhome', mark: 'בית', t: 'לבית חדש', s: 'מצעים, מגבות, ברכה וכלים — מה שבית חדש צריך', wall: '#E5E8E4', surf: { l: 4, w: 92, t: 61, h: 4, r: '1px', c: '#C8AE86', k: 'plank' },
      slots: [{ q: 'מצעים', re: /מצע/, k: 'textile', x: 17, y: 61, h: 30 }, { q: 'מגבות', re: /מגב/, k: 'textile', x: 33, y: 61, h: 24 }, { q: 'ברכת הבית', re: /ברכ/, k: 'judaica', x: 51, y: 61, h: 36 }, { q: 'מזוזה', re: /מזוז/, k: 'judaica', x: 66, y: 61, h: 25 }, { q: 'סט כוסות', re: /כוס/, k: 'home', x: 80, y: 61, h: 22 }, { q: 'סכום', re: /סכו|סכין|מזלג/, k: 'home', x: 93, y: 61, h: 17 }] },
    { id: 'kids', mark: 'משחק', t: 'חדר משחקים', s: 'משחקי עץ, יצירה ובובות — לכל גיל', wall: '#F1E8D8', surf: { l: 6, w: 88, t: 70, h: 30, r: '18px 18px 0 0', c: '#DCC9A9', k: 'stripe' },
      slots: [{ k: 'toys', x: 50, y: 80, h: 36 }, { k: 'toys', x: 28, y: 82, h: 28 }, { k: 'toys', x: 72, y: 82, h: 28 }, { k: 'toys', x: 12, y: 92, h: 22 }, { k: 'toys', x: 40, y: 95, h: 19 }, { k: 'toys', x: 62, y: 95, h: 19 }, { k: 'toys', x: 88, y: 92, h: 22 }] },
    { id: 'him', mark: 'אישי', t: 'לו ולה', s: 'אקססוריז ומתנות אישיות, על שולחן כתיבה', wall: '#E8E4DE', surf: { l: 16, w: 68, t: 66, h: 34, r: '2px', c: '#2E2925', k: 'desk' },
      slots: [{ k: 'him', x: 50, y: 66, h: 36 }, { k: 'him', x: 29, y: 66, h: 27 }, { k: 'him', x: 71, y: 66, h: 27 }, { k: 'him', x: 15, y: 66, h: 18 }, { k: 'him', x: 85, y: 66, h: 18 }] }
  ];
  /* gallery layout for a department or a search: products rise on plinths of different heights */
  var GAL = [{ x: 50, y: 92, h: 27, p: 26 }, { x: 31, y: 92, h: 25, p: 15 }, { x: 69, y: 92, h: 25, p: 19 }, { x: 14, y: 92, h: 22, p: 8 }, { x: 86, y: 92, h: 22, p: 11 }, { x: 40, y: 98, h: 17, p: 0 }, { x: 60, y: 98, h: 17, p: 0 }];
  var POOL = 7;

  W.SGHomeB = function (root) {
    var K = W.SGKit, S = W.SG, St = S.Store, esc = S.esc, fmt = S.fmt, calm = K.calm();
    K.fonts();
    var m = D.createElement('main'); m.className = 'hB'; m.id = 'sg-main'; root.appendChild(m);
    m.innerHTML =
      '<section class="hB-st" aria-label="סצנות מהחנות">' +
        '<div class="hB-menu">' +
          '<p class="hB-eye">שיר מתנות · מה מסדרים היום?</p>' +
          '<h1 class="hB-h1" aria-live="polite"><span></span></h1><p class="hB-sub"></p>' +
          '<ol class="hB-sc" role="tablist" aria-label="סצנות">' + SC.map(function (s, i) { return '<li><button type="button" role="tab" data-sc="' + i + '" aria-selected="false"><i>' + String(i + 1).padStart(2, '0') + '</i>' + s.t + '<u></u></button></li>'; }).join('') + '</ol>' +
          '<div class="hB-dep"><span>או מחלקה שלמה:</span>' + K.ORDER.map(function (k) { return '<button type="button" data-dep="' + k + '">' + K.DEP[k][0] + '</button>'; }).join('') + '</div>' +
          '<form class="hB-s" role="search"><label for="hB-q">או חפשו — והחנות תסדר כאן את מה שמצאה</label><div><input id="hB-q" type="search" autocomplete="off" placeholder="פמוטים, מגבות, מפיץ ריח…"><button aria-label="לסדר על הבמה">↵</button></div></form>' +
        '</div>' +
        '<div class="hB-comp"><div class="hB-wall"></div><div class="hB-mark" aria-hidden="true"></div><div class="hB-surf"></div><div class="hB-objs"></div><p class="hB-cap">סידור דיגיטלי של מוצרים אמיתיים מהקטלוג · הקישו על כל פריט</p></div>' +
        '<aside class="hB-side" aria-label="הפריטים בסצנה"><button type="button" class="hB-tog" aria-expanded="false"><span class="n"></span><b class="t"></b><i>▴</i></button><div class="hB-list"></div>' +
          '<div class="hB-act"><button type="button" class="hB-b" data-all="cart">להוסיף לסל</button><button type="button" class="hB-b ghost" data-all="gift">לארוז כמתנה ←</button></div></aside>' +
      '</section>' +
      '<section class="hB-how" aria-label="איך קונים"><div><i>01</i><b>קונים פריט</b><span>הקישו על כל דבר על הבמה — הוא נוסף לסל של החנות.</span></div><div><i>02</i><b>או את כל הסצנה</b><span>מסמנים מה רוצים מהרשימה, וכל הסט נכנס לסל בלחיצה אחת.</span></div><div><i>03</i><b>או הופכים למתנה</b><span>"לארוז כמתנה" שולח את הבחירה לסטודיו — קופסה שקופה או צלופן, ללא תוספת.</span></div><a class="hB-tray" href="/?sg=studio"></a></section>';

    var $ = function (s) { return m.querySelector(s); };
    var comp = $('.hB-comp'), objs = $('.hB-objs'), surf = $('.hB-surf'), sec = $('.hB-st');
    var pool = [], cur = null, sel = [], scene = [], busy = false, auto = !calm, autoT = 0, idx = -1, token = 0;
    for (var i = 0; i < POOL; i++) {
      var el = D.createElement('button'); el.type = 'button'; el.className = 'hB-o out'; el.setAttribute('data-n', i);
      el.innerHTML = '<span class="lift"><span class="ph"><img class="a" alt="" draggable="false"><img class="b" alt="" draggable="false"></span><span class="sh"></span></span><span class="pl"></span><i class="no">' + (i + 1) + '</i><span class="tag"></span>';
      objs.appendChild(el); pool.push({ el: el, p: null, side: 'a' });
    }

    /* ---------- resolve the products for a scene ---------- */
    function resolve(def) {
      var used = {}, out = [];
      return def.slots.reduce(function (pr, sl, si) {
        return pr.then(function () {
          var pickFrom = function (l) { for (var j = 0; j < l.length; j++) if (!used[l[j].id] && (!sl.re || sl.re.test(l[j].name))) return l[j]; return null; };
          var p = pickFrom(K.list(sl.k));
          if (p || !sl.q) return p;
          return K.search(sl.q).then(function (l) { return pickFrom(l); });
        }).then(function (p) {
          if (!p) { var l = K.list(sl.k); for (var j = 0; j < l.length && !p; j++) if (!used[l[(j + si * 2) % l.length].id]) p = l[(j + si * 2) % l.length]; }
          if (p) { used[p.id] = 1; out.push({ p: p, sl: sl }); }
        });
      }, Promise.resolve()).then(function () { return out; });
    }
    function gallery(list) { return list.slice(0, GAL.length).map(function (p, i) { return { p: p, sl: GAL[i] }; }); }

    /* ---------- the morph ---------- */
    function geo() { return { w: comp.clientWidth, h: comp.clientHeight }; }
    function layout(list, instant) {
      var g = geo(), mob = K.mob();
      pool.forEach(function (o, i) {
        var it = list[i], el = o.el;
        if (!it) { el.classList.add('out'); el.tabIndex = -1; el.setAttribute('aria-hidden', 'true'); return; }
        var sl = mob ? { x: 50 + (it.sl.x - 50) * 0.8, y: 100 - (100 - it.sl.y) * 1.32, h: it.sl.h * 1.3, p: (it.sl.p || 0) * 1.25 } : it.sl, size = Math.min(sl.h / 100 * g.h * (mob ? 0.8 : 0.95), g.w * (mob ? 0.3 : 0.25)), ph = (sl.p || 0) / 100 * g.h;
        var x = sl.x / 100 * g.w - size / 2, y = sl.y / 100 * g.h - size - ph;
        var wasOut = el.classList.contains('out'); if (wasOut) el.classList.add('nt');
        el.style.width = size + 'px'; el.style.height = (size + ph) + 'px';
        el.style.transform = 'translate3d(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px,0)';
        el.style.zIndex = Math.round(sl.y * 10);
        el.querySelector('.pl').style.height = ph + 'px';
        if (wasOut) { void el.offsetWidth; el.classList.remove('nt'); }
        el.classList.remove('out'); el.tabIndex = 0; el.removeAttribute('aria-hidden');
        el.setAttribute('aria-label', it.p.name + ', ' + fmt(it.p.price) + ' ₪');
        el.querySelector('.tag').innerHTML = '<b>' + esc(S.shortName(it.p.name)) + '</b>' + fmt(it.p.price) + ' ₪';
        if (o.p !== it.p) {
          var nx = o.side === 'a' ? 'b' : 'a', im = el.querySelector('img.' + nx);
          im.src = it.p.img; im.alt = '';
          var swap = function () { el.classList.toggle('sb', nx === 'b'); o.side = nx; };
          if (instant || calm || !o.p) swap(); else setTimeout(swap, 380 + i * 55);
          if (!instant && !calm && o.p) el.querySelector('.lift').animate([{ transform: 'none' }, { transform: 'translateY(-14%) scale(.86) rotate(' + (i % 2 ? 4 : -4) + 'deg)', offset: 0.45 }, { transform: 'none' }], { duration: 1050, delay: i * 55, easing: 'cubic-bezier(.45,0,.2,1)' });
          o.p = it.p;
        }
        el.style.transitionDelay = (instant ? 0 : i * 55) + 'ms';
      });
    }
    function setSurface(sf, wall) {
      var s = surf.style;
      if (!sf) { s.left = '50%'; s.width = '0%'; s.top = '100%'; s.height = '0%'; s.opacity = '0'; }
      else { var mt = K.mob() ? 100 - (100 - sf.t) * 1.32 : sf.t; s.left = sf.l + '%'; s.width = sf.w + '%'; s.top = mt + '%'; s.height = (sf.t + sf.h >= 97 ? 100 - mt : sf.h) + '%'; s.borderRadius = sf.r; s.backgroundColor = sf.c; s.opacity = '1'; surf.className = 'hB-surf k-' + sf.k; }
      comp.style.setProperty('--wall', wall);
    }
    function show(def, list, label) {
      cur = def; scene = list; sel = list.map(function () { return true; });
      var h = $('.hB-h1'), sp = D.createElement('span'); sp.textContent = label || def.t; h.replaceChild(sp, h.firstChild);
      $('.hB-sub').textContent = def.s;
      var mk = $('.hB-mark'), nw = D.createElement('span'); nw.textContent = def.mark || (label || def.t); [].forEach.call(mk.children, function (c) { c.classList.add('old'); setTimeout(function () { c.remove(); }, 1200); }); mk.appendChild(nw);
      setSurface(def.surf, def.wall); layout(list, false); renderList();
      comp.classList.toggle('gal', !def.surf);
    }
    function go(def, getList, label) {
      var my = ++token; sec.classList.add('busy');
      return getList().then(function (list) {
        if (my !== token) return;
        if (!list.length) { sec.classList.remove('busy'); S.toast('לא נמצאו כאן פריטים — מעבירים לחיפוש בחנות'); return; }
        return K.preload(list.map(function (x) { return x.p; }), 1600).then(function () { if (my !== token) return; sec.classList.remove('busy'); show(def, list, label); });
      });
    }
    function goScene(i) {
      idx = i; [].forEach.call(m.querySelectorAll('[data-sc]'), function (b) { b.setAttribute('aria-selected', +b.getAttribute('data-sc') === i); });
      [].forEach.call(m.querySelectorAll('[data-dep]'), function (b) { b.removeAttribute('aria-pressed'); });
      return go(SC[i], function () { return resolve(SC[i]); });
    }
    function goDep(k) {
      stopAuto(); idx = -1; [].forEach.call(m.querySelectorAll('[data-sc]'), function (b) { b.setAttribute('aria-selected', 'false'); });
      [].forEach.call(m.querySelectorAll('[data-dep]'), function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-dep') === k); });
      var d = K.DEP[k];
      return go({ id: 'dep', t: d[0], s: d[2] + ' — מבחר מהמחלקה, על הבמה', wall: d[3], surf: null, link: d[1] }, function () { return Promise.resolve(gallery(K.list(k))); });
    }
    function goSearch(v) {
      stopAuto(); idx = -1; [].forEach.call(m.querySelectorAll('[data-sc],[data-dep]'), function (b) { b.setAttribute('aria-selected', 'false'); b.removeAttribute('aria-pressed'); });
      return go({ id: 'q', t: '״' + v + '״', s: 'מה שמצאנו בחנות, מסודר על הבמה', wall: '#ECE8E1', surf: null, link: '/search/?q=' + encodeURIComponent(v) }, function () { return K.search(v).then(gallery); });
    }

    /* ---------- the scene's shopping list ---------- */
    function renderList() {
      var tot = 0, n = 0;
      $('.hB-list').innerHTML = '<ul>' + scene.map(function (x, i) { if (sel[i]) { tot += x.p.price; n++; }
        return '<li><label><input type="checkbox" data-li="' + i + '"' + (sel[i] ? ' checked' : '') + '><i>' + (i + 1) + '</i>' + K.img(x.p, 'th') + '<span class="nm">' + esc(x.p.name) + '</span><span class="pr">' + fmt(x.p.price) + ' ₪</span></label><a href="' + esc(x.p.url) + '" aria-label="לעמוד המוצר">←</a></li>'; }).join('') + '</ul>' +
        (cur && cur.link ? '<a class="hB-more" href="' + esc(cur.link) + '">' + (cur.id === 'q' ? 'לכל תוצאות החיפוש בחנות ←' : 'לכל הפריטים במחלקה ←') + '</a>' : '');
      $('.hB-tog .n').textContent = n === scene.length ? 'כל הסצנה · ' + scene.length + ' פריטים' : n + ' מתוך ' + scene.length + ' פריטים';
      $('.hB-tog .t').textContent = fmt(tot) + ' ₪';
      [].forEach.call(m.querySelectorAll('[data-all]'), function (b) { b.disabled = !n; });
      $('[data-all="cart"]').textContent = n === 1 ? 'להוסיף פריט אחד לסל' : 'להוסיף ' + n + ' פריטים לסל';
      pool.forEach(function (o, i) { o.el.classList.toggle('off', !!scene[i] && !sel[i]); });
    }
    m.addEventListener('change', function (e) { var c = e.target.closest('[data-li]'); if (!c) return; sel[+c.getAttribute('data-li')] = c.checked; stopAuto(); renderList(); });

    /* ---------- interaction ---------- */
    m.addEventListener('click', function (e) {
      var t;
      if ((t = e.target.closest('[data-sc]'))) { stopAuto(); goScene(+t.getAttribute('data-sc')); return; }
      if ((t = e.target.closest('[data-dep]'))) { goDep(t.getAttribute('data-dep')); return; }
      if ((t = e.target.closest('.hB-o'))) { stopAuto(); var o = pool[+t.getAttribute('data-n')]; if (o.p) K.sheet(o.p, 'tB'); return; }
      if ((t = e.target.closest('.hB-tog'))) { var op = t.getAttribute('aria-expanded') !== 'true'; t.setAttribute('aria-expanded', op); $('.hB-side').classList.toggle('open', op); return; }
      if ((t = e.target.closest('[data-all]'))) {
        stopAuto(); var list = scene.filter(function (_, i) { return sel[i]; }).map(function (x) { return x.p; });
        if (t.getAttribute('data-all') === 'gift') K.giftMany(list); else K.cartMany(list, t, renderList);
      }
    });
    $('.hB-s').addEventListener('submit', function (e) { e.preventDefault(); var v = $('#hB-q').value.trim(); if (v.length > 1) goSearch(v); });
    sec.addEventListener('pointerdown', function (e) { if (e.target.closest('.hB-o,.hB-side,.hB-s')) stopAuto(); });

    /* the scenes play by themselves until the visitor takes over */
    function stopAuto() { auto = false; clearTimeout(autoT); sec.classList.remove('auto'); }
    function loop() {
      clearTimeout(autoT); if (!auto) return;
      sec.classList.add('auto');
      autoT = setTimeout(function () { if (!auto) return; if (D.hidden || W.scrollY > comp.offsetHeight * 0.7) return loop(); goScene((idx + 1) % SC.length).then(loop); }, 6400);
    }

    function syncTray() {
      var it = St.items; $('.hB-tray').innerHTML = it.length ? '<span class="ims">' + it.slice(-4).map(function (x) { return '<img src="' + esc(x.img) + '" alt="">'; }).join('') + '</span><b>המתנה שלך</b><span>' + W.SGCountLabel(it.length) + ' · ' + fmt(St.total()) + ' ₪ ←</span>' : '<b>סטודיו המתנות</b><span>להרכיב מתנה מכל מחלקה ←</span>';
    }
    St.on(syncTray); syncTray();

    var started = false;
    K.on(function () {
      if (!started && ((K.list('judaica').length && K.list('home').length) || K.ready() >= 8)) { started = true; comp.classList.add('ready'); goScene(0).then(loop); }
    });
    var rz; W.addEventListener('resize', function () { clearTimeout(rz); rz = setTimeout(function () { if (scene.length) { layout(scene, true); setSurface(cur.surf, cur.wall); } }, 120); });
    K.load();
    return m;
  };
})();

/* Home demo C — "המשפט" (The sentence).
   The home page is one sentence the visitor completes: "מחפשים [מתנה] [ליולדת], [עד 300 ₪]."
   Every word is a control. Change a word and the store deals a new hand of real products beneath it.
   The first word decides how you shop: "מתנה" fills a gift box bound for the studio, "משהו לבית" fills the cart.
   Test environment only. */
(function () {
  var W = window, D = document;
  var INTENT = [{ id: 'gift', t: 'מתנה' }, { id: 'self', t: 'משהו לבית' }];
  var FOR = {
    gift: [
      { t: 'ליולדת', k: ['baby', 'toys', 'gifts'], q: 'לידה' },
      { t: 'לבית חדש', k: ['home', 'textile', 'judaica', 'acc'], q: 'ברכת הבית' },
      { t: 'לשבת ולחג', k: ['judaica', 'holidays', 'home'] },
      { t: 'למארחים', k: ['home', 'acc', 'gifts', 'catering'] },
      { t: 'לאישה', k: ['him', 'acc', 'textile'] },
      { t: 'לגבר', k: ['him'], q: 'לגבר' },
      { t: 'לילדים', k: ['toys'] },
      { t: 'סתם, כדי לפנק', k: ['gifts', 'acc', 'home'] }
    ],
    self: [
      { t: 'לשולחן', k: ['home', 'judaica'], re: /צלח|כוס|גביע|מגש|קער|סכו|קנקן|פמוט|כלי|סט/ },
      { t: 'לחדר השינה ולאמבטיה', k: ['textile'] },
      { t: 'לפינה יפה בבית', k: ['acc'] },
      { t: 'לשבת ולחג', k: ['judaica', 'holidays'] },
      { t: 'לאירוח', k: ['home', 'catering', 'acc'] },
      { t: 'לתינוק', k: ['baby'] },
      { t: 'לילדים', k: ['toys'] }
    ]
  };
  var BUD = [{ t: 'עד 150 ₪', max: 150 }, { t: 'עד 300 ₪', max: 300 }, { t: 'עד 600 ₪', max: 600 }, { t: 'בכל תקציב', max: 1e9 }];
  var READY = [['gift', 0, 1], ['gift', 2, 2], ['self', 0, 3], ['gift', 1, 3], ['self', 1, 2], ['gift', 6, 0]];

  W.SGHomeC = function (root) {
    var K = W.SGKit, S = W.SG, St = S.Store, esc = S.esc, fmt = S.fmt, calm = K.calm();
    K.fonts();
    var st = { i: 'gift', f: 0, b: 1, free: '' };
    try { var sv = JSON.parse(sessionStorage.getItem('sg_hC') || 'null'); if (sv && FOR[sv.i]) { st.i = sv.i; st.f = Math.min(sv.f, FOR[sv.i].length - 1); st.b = sv.b; } } catch (e) {}
    var m = D.createElement('main'); m.className = 'hC'; m.id = 'sg-main'; root.appendChild(m);
    m.innerHTML =
      '<section class="hC-hero" aria-label="מה מחפשים">' +
        '<p class="hC-eye">שיר מתנות · השלימו את המשפט, והחנות תסתדר בהתאם</p>' +
        '<h1 class="hC-sent"><span class="w">מחפשים</span> <button type="button" class="tok" data-t="i" aria-haspopup="listbox"></button> <button type="button" class="tok" data-t="f" aria-haspopup="listbox"></button><span class="w">,</span> <button type="button" class="tok" data-t="b" aria-haspopup="listbox"></button><span class="w">.</span></h1>' +
        '<form class="hC-free" role="search"><label for="hC-q">או פשוט כתבו:</label><input id="hC-q" type="search" autocomplete="off" placeholder="פמוטים, מגבות, נטלה…"><button aria-label="חיפוש בכל החנות">↵</button></form>' +
        '<div class="hC-pop" role="listbox" hidden></div>' +
      '</section>' +
      '<section class="hC-deck" aria-label="ההצעות">' +
        '<div class="hC-dh"><p class="hC-ans" aria-live="polite"></p><div class="hC-arr"><button type="button" data-sc="1" aria-label="הקודם">→</button><button type="button" data-sc="-1" aria-label="הבא">←</button></div></div>' +
        '<div class="hC-cards"></div>' +
        '<aside class="hC-box" aria-label="המתנה שנבנית"></aside>' +
      '</section>' +
      '<section class="hC-lines" aria-label="משפטים מוכנים"><p class="hC-eye">משפטים שכבר אמרו כאן</p><ol></ol></section>' +
      '<section class="hC-deps" aria-label="כל המחלקות"><p class="hC-eye">ואם אתם יודעים בדיוק לאן</p><nav>' + K.ORDER.map(function (k) { return '<a href="' + K.DEP[k][1] + '">' + K.DEP[k][0] + '</a>'; }).join('<span>·</span>') + '</nav></section>';

    var $ = function (s) { return m.querySelector(s); };
    var pop = $('.hC-pop'), cards = $('.hC-cards'), deal = [], dealN = 0;

    /* ---------- the sentence ---------- */
    function txt(t) { return t === 'i' ? INTENT.filter(function (x) { return x.id === st.i; })[0].t : t === 'f' ? FOR[st.i][st.f].t : BUD[st.b].t; }
    function paint(changed) {
      ['i', 'f', 'b'].forEach(function (t) {
        var b = m.querySelector('.tok[data-t="' + t + '"]'), v = txt(t);
        if (b.getAttribute('data-v') === v) return;
        b.setAttribute('data-v', v); b.innerHTML = '<span class="v">' + esc(v) + '</span><i aria-hidden="true">⌄</i>';
        b.setAttribute('aria-label', (t === 'i' ? 'מה מחפשים: ' : t === 'f' ? 'למי או לאן: ' : 'תקציב: ') + v + ' — לשינוי');
        if (changed) { b.classList.remove('flip'); void b.offsetWidth; b.classList.add('flip'); }
      });
      m.classList.toggle('is-gift', st.i === 'gift');
      try { sessionStorage.setItem('sg_hC', JSON.stringify(st)); } catch (e) {}
    }
    function options(t) {
      if (t === 'i') return INTENT.map(function (x) { return { v: x.id, t: x.t, on: x.id === st.i }; });
      if (t === 'f') return FOR[st.i].map(function (x, i) { return { v: i, t: x.t, on: i === st.f }; });
      return BUD.map(function (x, i) { return { v: i, t: x.t, on: i === st.b }; });
    }
    var popFor = null;
    function openPop(tok) {
      var t = tok.getAttribute('data-t'); popFor = tok;
      pop.innerHTML = (K.mob() ? '<p class="ph">' + (t === 'i' ? 'מחפשים…' : t === 'f' ? 'למי? לאן?' : 'באיזה תקציב?') + '</p>' : '') + options(t).map(function (o) { return '<button type="button" role="option" data-o="' + o.v + '" aria-selected="' + o.on + '">' + esc(o.t) + '</button>'; }).join('');
      pop.setAttribute('data-for', t); pop.hidden = false;
      if (!K.mob()) { var hr = $('.hC-hero').getBoundingClientRect(), r = tok.getBoundingClientRect(); pop.style.top = (r.bottom - hr.top + 8) + 'px'; pop.style.right = Math.max(16, hr.right - r.right) + 'px'; }
      [].forEach.call(m.querySelectorAll('.tok'), function (b) { b.setAttribute('aria-expanded', b === tok); });
      requestAnimationFrame(function () { pop.classList.add('in'); var f = pop.querySelector('[aria-selected=true]') || pop.querySelector('button'); f && f.focus({ preventScroll: true }); });
      D.documentElement.classList.toggle('hk-lock', K.mob());
    }
    function closePop(back) {
      if (pop.hidden) return; pop.classList.remove('in'); pop.hidden = true; D.documentElement.classList.remove('hk-lock');
      [].forEach.call(m.querySelectorAll('.tok'), function (b) { b.setAttribute('aria-expanded', 'false'); });
      if (back && popFor) popFor.focus({ preventScroll: true });
    }
    function choose(t, v) {
      if (t === 'i') { var prev = FOR[st.i][st.f].t; st.i = v; var same = FOR[v].map(function (x) { return x.t; }).indexOf(prev); st.f = same > -1 ? same : 0; }
      else if (t === 'f') st.f = +v; else st.b = +v;
      st.free = ''; $('#hC-q').value = '';
      paint(true); answer();
    }
    m.addEventListener('click', function (e) {
      var tok = e.target.closest('.tok'); if (tok) { if (!pop.hidden && popFor === tok) closePop(); else openPop(tok); return; }
      var o = e.target.closest('[data-o]'); if (o) { var t = pop.getAttribute('data-for'); closePop(true); choose(t, t === 'i' ? o.getAttribute('data-o') : +o.getAttribute('data-o')); return; }
      if (!pop.hidden && !e.target.closest('.hC-pop')) closePop();
      var r = e.target.closest('[data-ready]'); if (r) { var a = READY[+r.getAttribute('data-ready')]; st.i = a[0]; st.f = a[1]; st.b = a[2]; st.free = ''; $('#hC-q').value = ''; paint(true); answer(); W.scrollTo({ top: $('.hC-hero').getBoundingClientRect().top + W.scrollY - 20, behavior: calm ? 'auto' : 'smooth' }); return; }
      var sc = e.target.closest('[data-sc]'); if (sc) { cards.scrollBy({ left: -(+sc.getAttribute('data-sc')) * cards.clientWidth * 0.8 * (D.dir === 'rtl' || true ? -1 : 1), behavior: calm ? 'auto' : 'smooth' }); return; }
      var wid = e.target.closest('[data-w]'); if (wid) { St.setWrap(wid.getAttribute('data-w')); return; }
      var rm = e.target.closest('[data-rm]'); if (rm) { St.remove(rm.getAttribute('data-rm')); return; }
      var wid2 = e.target.closest('[data-widen]'); if (wid2) { st.b = Math.min(BUD.length - 1, st.b + 1); paint(true); answer(); return; }
      var card = e.target.closest('.hC-c'); if (!card) return;
      var p = K.get(card.getAttribute('data-id')); if (!p) return;
      if (e.target.closest('[data-open]')) { K.sheet(p, 'tC'); return; }
      var c = e.target.closest('[data-cart]'); if (c) { K.cart(p, c); return; }
      if (e.target.closest('[data-gift]')) { K.gift(p); }
    });
    pop.addEventListener('keydown', function (e) {
      var b = [].slice.call(pop.querySelectorAll('button')), i = b.indexOf(D.activeElement);
      if (e.key === 'ArrowDown') { e.preventDefault(); (b[i + 1] || b[0]).focus(); }
      if (e.key === 'ArrowUp') { e.preventDefault(); (b[i - 1] || b[b.length - 1]).focus(); }
    });
    D.addEventListener('keydown', function (e) { if (e.key === 'Escape') closePop(true); });

    /* ---------- the answer: a freshly dealt hand of products ---------- */
    function pickList() {
      var f = FOR[st.i][st.f], max = BUD[st.b].max, seen = {}, by = {};
      var add = function (p, src) { if (!p || seen[p.id] || !(p.price > 0) || p.price > max) return; if (f.re && !f.re.test(p.name)) return; seen[p.id] = 1; (by[src] = by[src] || []).push(p); };
      f.k.forEach(function (k) { K.list(k).forEach(function (p) { add(p, k); }); });
      (extra[f.q] || []).forEach(function (p) { add(p, 'q'); });
      var srcs = Object.keys(by), out = [], rnd = K.seeded(st.f * 31 + st.b * 7 + (st.i === 'gift' ? 3 : 11));
      srcs.forEach(function (s) { by[s].sort(function () { return rnd() - 0.5; }); });
      for (var i = 0; out.length < 14; i++) { var any = false; srcs.forEach(function (s) { if (by[s][i] && out.length < 14) { out.push(by[s][i]); any = true; } }); if (!any) break; }
      return out;
    }
    var extra = {};
    function freeList(v) {
      var seen = {}, out = [];
      K.all().concat(extra['~' + v] || []).forEach(function (p) { if (!seen[p.id] && p.name.indexOf(v) > -1) { seen[p.id] = 1; out.push(p); } });
      return out.slice(0, 14);
    }
    function cardHTML(p, i) {
      var g = st.i === 'gift', on = St.has(p.id), tint = K.DEP[p.k] ? K.DEP[p.k][3] : '#ECE7DE';
      return '<article class="hC-c" data-id="' + esc(p.id) + '" style="--i:' + i + ';--tint:' + tint + '">' +
        '<button type="button" class="ph" data-open aria-label="' + esc(p.name) + ' — פרטים">' + K.img(p, '', i < 5) + '<i class="no">' + String(i + 1).padStart(2, '0') + '</i></button>' +
        '<p class="k">' + K.depName(p) + '</p><h3><button type="button" data-open>' + esc(p.name) + '</button></h3><p class="pr">' + fmt(p.price) + ' ₪</p>' +
        '<div class="ac">' + (g ? '<button type="button" class="pri" data-gift aria-pressed="' + on + '">' + (on ? '✓ במתנה' : '＋ למתנה') + '</button><button type="button" class="sec" data-cart>לסל</button>'
          : '<button type="button" class="pri" data-cart>הוספה לסל</button><button type="button" class="sec" data-gift aria-pressed="' + on + '">' + (on ? '✓ במתנה' : '＋ מתנה') + '</button>') + '</div></article>';
    }
    function answer() {
      var v = st.free, list = v ? freeList(v) : pickList(), my = dealN;
      var ans = $('.hC-ans');
      if (!K.ready()) { ans.textContent = 'פותחים את המדפים…'; return; }
      if (v) ans.innerHTML = list.length ? 'מה שמצאנו כאן עבור <b>״' + esc(v) + '״</b> · <a href="/search/?q=' + encodeURIComponent(v) + '">לכל התוצאות בחנות ←</a>' : 'עוד לא מצאנו כאן את <b>״' + esc(v) + '״</b> · <a href="/search/?q=' + encodeURIComponent(v) + '">לחיפוש בכל החנות ←</a>';
      else {
        var few = list.length < 5 && st.b < BUD.length - 1;
        ans.innerHTML = (st.i === 'gift' ? 'בחרנו בשבילכם <b>' + list.length + ' רעיונות למתנה</b>' : 'בחרנו בשבילכם <b>' + list.length + ' פריטים</b>') + ' ' + FOR[st.i][st.f].t + ', ' + BUD[st.b].t + '.' +
          (few ? ' <button type="button" class="widen" data-widen>להרחיב ל' + BUD[st.b + 1].t + ' ←</button>' : '') +
          ' <a href="' + K.DEP[FOR[st.i][st.f].k[0]][1] + '">לכל ' + K.DEP[FOR[st.i][st.f].k[0]][0] + ' ←</a>';
      }
      if (list.length && list.map(function (p) { return p.id; }).join() === deal.map(function (p) { return p.id; }).join()) return;
      my = ++dealN; deal = list;
      var old = [].slice.call(cards.children);
      old.forEach(function (c, i) { c.style.setProperty('--o', Math.min(i, 6)); c.classList.add('gone'); });
      setTimeout(function () {
        if (my !== dealN) return;
        cards.innerHTML = list.map(cardHTML).join('') || '<p class="hC-empty">כדאי לנסות מילה אחרת במשפט.</p>';
        cards.scrollLeft = 0;
        requestAnimationFrame(function () { cards.classList.add('dealt'); });
      }, old.length && !calm ? 380 : 0);
      // enrich with Konimbo's own search for this answer
      var f = FOR[st.i][st.f];
      if (!v && f.q && !extra[f.q]) K.search(f.q).then(function (l) { extra[f.q] = l; if (my === dealN && l.length) answer(); });
      if (v && !extra['~' + v] && list.length < 6) K.search(v).then(function (l) { extra['~' + v] = l; if (my === dealN && st.free === v && l.length) answer(); });
    }
    var fT;
    $('#hC-q').addEventListener('input', function () { clearTimeout(fT); var v = this.value.trim(); fT = setTimeout(function () { if (v.length > 1 || (!v && st.free)) { st.free = v.length > 1 ? v : ''; m.classList.toggle('is-free', !!st.free); answer(); } }, 260); });
    $('.hC-free').addEventListener('submit', function (e) { e.preventDefault(); K.goSearch($('#hC-q').value); });

    /* ---------- the gift box that fills as you choose ---------- */
    function box() {
      var it = St.items, n = it.length, g = st.i === 'gift';
      m.classList.toggle('box-has', n > 0); $('.hC-box').classList.toggle('cello', St.wrap === 'cello');
      $('.hC-box').innerHTML =
        '<p class="hC-eye">' + (g ? 'המתנה שנבנית' : 'המתנה שלך') + '</p>' +
        '<div class="bx' + (n ? ' full' : '') + '"><div class="lid"></div><div class="in">' + (n ? it.slice(-6).map(function (x) { return '<span><img src="' + esc(x.img) + '" alt="' + esc(x.name) + '"><button type="button" data-rm="' + esc(x.id) + '" aria-label="להסיר את ' + esc(x.short || x.name) + '">×</button></span>'; }).join('') : '<em>' + (g ? 'כל מה שתסמנו ב־＋ ייכנס לכאן' : 'גם בקנייה לעצמכם — אפשר להוסיף פריט למתנה') + '</em>') + '</div></div>' +
        (n ? '<div class="tot"><span>' + W.SGCountLabel(n) + '</span><b>' + fmt(St.total()) + ' ₪</b></div>' : '') +
        '<div class="wr" role="group" aria-label="סוג אריזה"><button type="button" data-w="box" aria-pressed="' + ((St.wrap || 'box') === 'box') + '">קופסה שקופה</button><button type="button" data-w="cello" aria-pressed="' + (St.wrap === 'cello') + '">צלופן פתוח</button></div>' +
        '<a class="go" href="/?sg=studio">' + (n ? 'לעטוף בסטודיו ←' : 'לסטודיו המתנות ←') + '</a><p class="fine">עטיפה בחנות, ללא תוספת</p>';
      [].forEach.call(cards.querySelectorAll('[data-gift]'), function (b) { var on = St.has(b.closest('.hC-c').getAttribute('data-id')); b.setAttribute('aria-pressed', on); b.textContent = on ? '✓ במתנה' : (b.classList.contains('pri') ? '＋ למתנה' : '＋ מתנה'); });
    }
    St.on(box);

    /* ---------- ready-made sentences ---------- */
    function lines() {
      $('.hC-lines ol').innerHTML = READY.map(function (a, i) {
        var keep = { i: st.i, f: st.f, b: st.b }; st.i = a[0]; st.f = a[1]; st.b = a[2];
        var l = pickList().slice(0, 3), s = 'מחפשים ' + INTENT.filter(function (x) { return x.id === a[0]; })[0].t + ' ' + FOR[a[0]][a[1]].t + ', ' + BUD[a[2]].t + '.';
        st.i = keep.i; st.f = keep.f; st.b = keep.b;
        return '<li><button type="button" data-ready="' + i + '"><span class="s">' + esc(s) + '</span><span class="th">' + l.map(function (p) { return K.img(p); }).join('') + '</span><i>←</i></button></li>';
      }).join('');
    }

    paint(false); box(); answer();
    var first = true;
    K.on(function () { answer(); lines(); if (first) { first = false; m.classList.add('ready'); } });
    K.load();
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
  var type = W.SG_FORCE_TYPE || (q.get('sg') === 'studio' ? 'studio' : (path === '/' || path === '') ? 'home' : /^\/items\//.test(path) ? 'product' : /^\/\d+-/.test(path) || /^\/search/.test(path) ? 'category' : 'other');
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
    if (/^\/search/.test(location.pathname)) title = 'תוצאות חיפוש: ' + (q.get('q') || '');
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
      // home-page demos (test environment): ?sg=homeA|homeB|homeC|home4|home3, remembered for this tab
      var HV = { home3: '3', home4: '4', homeA: 'A', homeB: 'B', homeC: 'C' }, hv = HV[q.get('sg')] || null;
      try { if (hv) sessionStorage.setItem('sg_hv', hv); else hv = sessionStorage.getItem('sg_hv') || (sessionStorage.getItem('sg_home4') === '1' ? '4' : '3'); } catch (e) { hv = hv || '3'; }
      if (W.SG_FORCE_HV) hv = W.SG_FORCE_HV;
      if (type === 'home') {
        var vs = D.createElement('nav'); vs.className = 'sg-vs'; vs.setAttribute('aria-label', 'גרסאות הדגמה של דף הבית');
        vs.innerHTML = '<span>הדגמות דף הבית</span>' + [['A', 'A · עולם חי'], ['B', 'B · משנה צורה'], ['C', 'C · המשפט'], ['4', '4'], ['3', '3']].map(function (v) { return '<a href="/?sg=home' + v[0] + '"' + (v[0] === hv ? ' aria-current="page"' : '') + '>' + v[1] + '</a>'; }).join('');
        root.insertBefore(vs, root.firstChild);
      }
      var HF = { A: W.SGHomeA, B: W.SGHomeB, C: W.SGHomeC };
      if (type === 'home' && HF[hv]) { de.classList.add('sg-hx', 'sg-hv-' + hv); main = HF[hv](root); }
      else if (type === 'home' && hv === '4' && W.SGHome4) { main = W.SGHome4(root); de.classList.add('sg-h4'); }
      else if (type === 'home' && W.SGHome) main = W.SGHome(root);
      if (type === 'home') {}
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
