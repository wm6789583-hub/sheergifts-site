# Sheer Gifts — progress (test environment only)

Loader: Konimbo Hybrid 308176 (test only) → jsDelivr `v2/sg-site.js`. Source: /home/claude/kon2 → `python3 build.py`.
Live site: never touched. No real orders.

## Backups
- branches: backup-before-stage-c, backup-before-stage-d, backup-before-stage-e
- local: /home/claude/backup_stageC, backup_stageD, backup_stageE

## Stage E (final round, 2026-11-23)
- [x] palette #FFFFFF / #F8F5F0 / #F1E9DF / #201D1A / #C3A16B (ds.css "STAGE E")
- [x] header: "מארזים מוכנים" link
- [x] home: hero (art photo from the client, no text in image) → departments → occasions → packages → picks → why → inspiration
- [x] package picture: real products on a toned sweep (gifts.js collage), no 2x2
- [x] product page: brown gift band removed, no unverified installments, shipping without conflicting price
- [x] studio: real box look (cream lid/base, ivory satin)
- [x] verified desktop 1440 + mobile 500: home, category (יודאיקה), search (נטלה), product 9565461, gifts, pkg birth-small, studio, gift cart
- [x] path A: product → add to cart (Konimbo cart 14→15)
- [x] path B: birth package 303 ₪ → saved as gift 3 (box) in gift cart; goes to Konimbo cart on "המשך לתשלום" (not clicked: no order)
- [x] path C: studio, add item → total 303→393 live
- fixed on the way: PDP mobile grid, mobile dept labels, studio note overlap, brown buttons, footer installments
- open: real package photography; studio stage not pinned on mobile scroll; test-env bar colour is the loader's (test only)

## Stage F — matching the 4 reference images (2026-11-23)
Backup: branch `backup-before-stage-f` (a1cd6a03bc81) + /home/claude/backup_stageF.
Done:
- Charcoal header site-wide (#1B1916), light text, gold active link, dark search field, gold counters.
- Home: new dark hero (gift image from reference 1, logo removed, labelled "תמונת אווירה"), gold/white headline, 4 service icons, gold CTA "להרכבת מתנה אישית" + outline "לקניית מוצרים", 8 department cards on the hero's foot; white "מתנה לכל אירוע" bar lifted over the edge (real occasions only, count + lowest price). Separate mobile layout (image on top, stacked buttons, swipe rows).
- Packages: every package card shows the package's REAL items inside our box (clear walls, cream lid/base, satin bow, closed) via SGStage mini; label "המחשה בקופסה שלנו · פריטי המארז האמיתיים".
- Category: sub-categories as image cards; product cards with dark "הוספה לסל" + outline "הוספה למתנה" (syncs with gift state); light hero band; broken cached sub-category image fallback; card entry animation removed (cards stayed invisible in some browsers).
- Studio: bigger stage, closed box with bow, action row (החלפת פריט / הוספת פריט / בחירת אריזה → anchors to existing controls), "מחיר המתנה" price block, dark main button; notes moved off the ribbon buttons (also on package page).
- Product page: charcoal hover (no brown).
Tests (no order placed): home 1440/500; category judaica; studio add item 393→437 ₪ live; package page; product add-to-cart Konimbo cart 15→16.
Not possible: browser minimum width 500 (360/390/430 not directly tested); product page keeps Konimbo template side frame (full-bleed was clipped by template container — reverted).
