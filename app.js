/* Tài sản trạm Natcom 202611280258 */
(function(){if(document.getElementById('menu'))return;var s=document.createElement('style');s.textContent="/* Tài sản trạm Natcom: navy + cam Natcom, gọn như tool Tồn kho */\n:root{--nav:#1B2638;--nav2:#243149;--nav-ink:#CDD5E1;--nav-mut:#7F8BA0;--acc:#F7941D;--acc2:#E07B00;--acc-soft:#FEF1E1;\n--paper:#F3F5F8;--card:#fff;--line:#DDE2EA;--line2:#EEF1F5;--ink:#1C2333;--mut:#5E6779;--ok:#0E7C5A;--ok-soft:#E3F3EC;--wa:#A86400;--wa-soft:#FCF0DA;--bad:#C0322B;--bad-soft:#FCE8E6;--bar:#33415C;--bar2:#B9C4D6;\n--f:\"Be Vietnam Pro\",\"Segoe UI\",Roboto,Arial,sans-serif;color-scheme:light}\n*{box-sizing:border-box;min-width:0}\nhtml,body{margin:0;height:100%}\nbody{font:13px/1.5 var(--f);background:var(--paper);color:var(--ink);display:flex}\nbutton,select,input{font:inherit;color:var(--ink)}\n/* menu */\n.nv{width:212px;flex:none;background:var(--nav);color:var(--nav-ink);display:flex;flex-direction:column;height:100vh;position:sticky;top:0}\n.lg{display:flex;gap:10px;align-items:center;padding:14px 14px 10px}\n.lg svg{width:36px;height:36px;flex:none}.lg b{display:block;color:#fff;font-size:14px;font-weight:600;line-height:1.2}.lg small{color:var(--nav-mut);font-size:11px}\n.menu{flex:1;overflow:auto;padding:0 8px}\n.menu h6{margin:12px 8px 4px;font-size:10.5px;font-weight:500;color:var(--nav-mut);letter-spacing:.02em}\n.menu a{display:flex;align-items:center;gap:8px;padding:6px 10px;border-radius:7px;color:var(--nav-ink);cursor:pointer;font-weight:500;font-size:12.5px;text-decoration:none}\n.menu a:hover{background:var(--nav2)}.menu a.on{background:var(--acc);color:#fff}\n.menu a .bd{margin-left:auto;background:#ffffff22;border-radius:9px;padding:0 6px;font-size:10.5px}.menu a.on .bd{background:#ffffff33}\n.sv{padding:10px 14px 14px;font-size:11px;color:var(--nav-mut);border-top:1px solid #ffffff12}\n.sv .dot{display:inline-block;width:7px;height:7px;border-radius:50%;margin-right:6px;background:#7F8BA0}\n.sv .dot.ok{background:#3CC98B}.sv .dot.wa{background:#F2B33D}.sv .dot.er{background:#F06A5F}\n.sv button{margin-top:6px;background:transparent;border:1px solid #ffffff2a;color:var(--nav-ink);border-radius:14px;padding:2px 10px;font-size:11px;cursor:pointer}\n/* khung chính */\n.mn{flex:1;display:flex;flex-direction:column;min-height:100vh}\nheader{position:sticky;top:0;z-index:20;background:var(--card);border-bottom:1px solid var(--line);padding:8px 18px;display:flex;flex-wrap:wrap;gap:8px;align-items:center}\nheader h1{font-size:16px;margin:0 auto 0 0;font-weight:600;white-space:nowrap}\nheader h1 small{display:block;font-size:11px;color:var(--mut);font-weight:400}\n.fl{display:flex;gap:6px;flex-wrap:wrap;align-items:center}\n.fl label{font-size:11px;color:var(--mut)}\nselect,input[type=text],input[type=number],input[type=password],input[type=search],input[type=date]{border:1px solid var(--line);border-radius:7px;padding:5px 9px;background:var(--card);font-size:12.5px;height:32px}\nselect:focus,input:focus{outline:2px solid var(--acc);outline-offset:-1px;border-color:var(--acc)}\n.btn{border:1px solid var(--line);background:var(--card);border-radius:16px;padding:5px 13px;cursor:pointer;font-weight:500;font-size:12.5px;height:32px;white-space:nowrap}\n.btn:hover{border-color:var(--mut)}.btn.p{background:var(--acc);border-color:var(--acc);color:#fff}.btn.p:hover{background:var(--acc2)}\n.btn.s{height:26px;padding:2px 10px;font-size:11.5px}.btn:disabled{opacity:.45;cursor:default}\n.seg{display:inline-flex;border:1px solid var(--line);border-radius:16px;overflow:hidden;height:32px}\n.seg button{border:0;background:var(--card);padding:0 11px;cursor:pointer;font-size:12px;font-weight:500}.seg button.on{background:var(--bar);color:#fff}\n.srch{position:relative}.srch input{width:230px;padding-left:28px}\n.srch:before{content:\"\";position:absolute;left:10px;top:10px;width:9px;height:9px;border:2px solid var(--mut);border-radius:50%}\n.sug{position:absolute;top:36px;left:0;right:0;min-width:300px;background:var(--card);border:1px solid var(--line);border-radius:9px;box-shadow:0 10px 28px #0002;z-index:40;max-height:360px;overflow:auto;display:none}\n.sug div{padding:7px 11px;cursor:pointer;display:flex;justify-content:space-between;gap:10px;border-bottom:1px solid var(--line2);font-size:12.5px}\n.sug div:hover,.sug div.on{background:var(--acc-soft)}.sug small{color:var(--mut);white-space:nowrap}\nmain{padding:14px 18px 40px;max-width:1360px;width:100%}\n.pg{display:none}.pg.on{display:block;animation:fi .25s ease-out}\n@keyframes fi{from{opacity:0;transform:translateY(5px)}}\n@media(prefers-reduced-motion:reduce){.pg.on{animation:none}}\n/* thẻ, lưới */\n.card{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:12px 14px;margin-bottom:12px}\n.card h3{margin:0 0 10px;font-size:13.5px;font-weight:600;display:flex;align-items:center;gap:8px;flex-wrap:wrap}\n.card h3 small{font-weight:400;color:var(--mut);font-size:11.5px}\n.card h3 .r{margin-left:auto;display:flex;gap:6px;align-items:center}\n.g2{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(380px,1fr))}\n.g3{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(280px,1fr))}\n.g2>.card,.g3>.card{margin-bottom:0}.gap{height:12px}\n.k{display:grid;gap:10px;grid-template-columns:repeat(auto-fill,minmax(178px,1fr));margin-bottom:12px}\n.k>div{background:var(--card);border:1px solid var(--line);border-left:4px solid var(--bar);border-radius:9px;padding:8px 12px;cursor:default}\n.k>div.o{border-left-color:var(--acc)}.k>div.w{border-left-color:var(--bad)}.k>div.g{border-left-color:var(--ok)}\n.k span{font-size:11px;color:var(--mut)}.k b{display:block;font-size:20px;font-weight:600;font-variant-numeric:tabular-nums;line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.k small{color:var(--mut);font-size:11px}\n.up{color:var(--ok)}.dn{color:var(--bad)}.mu{color:var(--mut)}.wa{color:var(--wa)}.b{font-weight:600}\n.al{border-radius:10px;padding:9px 12px;margin-bottom:12px;font-size:12.5px;line-height:1.9}.al .chip{margin:0 4px 0 0}\n.al.err{background:var(--bad-soft);border:1px solid #F3C4BF}.al.warn{background:var(--wa-soft);border:1px solid #F1D9A8}.al.info{background:#EAF1FB;border:1px solid #CCDBF1}.al.ok{background:var(--ok-soft);border:1px solid #BFE3D2}\n.al b.t{margin-right:4px}\n.chip{display:inline-flex;gap:6px;align-items:center;background:var(--card);border:1px solid var(--line);border-radius:14px;padding:2px 10px;font-size:12px;cursor:pointer;white-space:nowrap}\n.chip:hover{border-color:var(--acc)}\n.tag{display:inline-block;border-radius:9px;padding:1px 8px;font-size:11px;font-weight:600;white-space:nowrap}\n.tag.ok{background:var(--ok-soft);color:var(--ok)}.tag.warn{background:var(--wa-soft);color:var(--wa)}.tag.err{background:var(--bad-soft);color:var(--bad)}.tag.info{background:var(--line2);color:var(--mut)}.tag.acc{background:var(--acc-soft);color:var(--acc2)}\n/* thanh ngang */\n.hb{display:grid;grid-template-columns:92px minmax(0,1fr) 92px 80px;gap:8px;align-items:center;margin:4px 0;font-size:12px;border-radius:6px;padding:1px 4px}\n.hb.c{cursor:pointer}.hb.c:hover{background:var(--line2)}\n.hb .tr{height:12px;background:var(--line2);border-radius:6px;position:relative;overflow:hidden}\n.hb .tr i{position:absolute;left:0;top:0;bottom:0;border-radius:6px;background:var(--bar)}\n.hb .tr i.a{background:var(--acc)}.hb .tr i.p{background:var(--bar2);top:0;bottom:6px}.hb .tr i.p+i{top:6px}\n.hb .tr i.r{background:var(--bad)}.hb .tr i.g{background:var(--ok)}\n.hb>span{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}.hb>b{font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n@media(prefers-reduced-motion:no-preference){.hb .tr i{transform-origin:left;animation:gw .7s cubic-bezier(.2,.8,.2,1)}}\n@keyframes gw{from{transform:scaleX(0)}}\n.whb .hb{grid-template-columns:170px minmax(0,1fr) 80px 70px}\n.lgd{display:flex;gap:12px;flex-wrap:wrap;font-size:11px;color:var(--mut);margin-top:6px}.lgd i{display:inline-block;width:10px;height:10px;border-radius:3px;margin-right:5px;vertical-align:-1px}\n/* bảng */\n.tw{overflow:auto;max-height:560px;border:1px solid var(--line);border-radius:8px}\ntable{border-collapse:collapse;width:100%;font-size:12px}\nth,td{padding:5px 9px;border-bottom:1px solid var(--line2);text-align:right;white-space:nowrap;font-variant-numeric:tabular-nums}\nth{position:sticky;top:0;background:#F6F7FA;font-weight:600;font-size:11.5px;color:var(--mut);cursor:pointer;user-select:none;z-index:1}\nth.l,td.l{text-align:left}th:hover{color:var(--ink)}th .ar{font-size:9px;margin-left:3px;color:var(--acc)}\ntr.c{cursor:pointer}tr.c:hover td{background:var(--acc-soft)}\ntd.wrap{white-space:normal;min-width:220px}\ntfoot td{font-weight:600;background:#F6F7FA;position:sticky;bottom:0}\ntd.red,span.red{color:var(--bad);font-weight:600}td.redbg{background:var(--bad-soft);color:var(--bad);font-weight:600}\n.more{text-align:center;padding:8px;font-size:12px}\n/* ngăn chi tiết */\n.dr{position:fixed;inset:0;z-index:60;display:none}.dr.on{display:block}\n.dr .ov{position:absolute;inset:0;background:#0F172A66}\n.dr .bx{position:absolute;right:0;top:0;bottom:0;width:min(920px,96vw);background:var(--paper);overflow:auto;padding:16px 18px;box-shadow:-10px 0 30px #0003;animation:sl .22s ease-out}\n@keyframes sl{from{transform:translateX(30px);opacity:.4}}\n.dr .x{float:right}\n.dr h2{margin:0 0 4px;font-size:17px}\n/* hộp thoại */\n.md{position:fixed;inset:0;z-index:70;display:none;align-items:center;justify-content:center;background:#0F172A66;padding:16px}.md.on{display:flex}\n.md .bx{background:var(--card);border-radius:12px;padding:16px 18px;width:min(560px,100%);max-height:90vh;overflow:auto;box-shadow:0 20px 50px #0004}\n.md h3{margin:0 0 10px;font-size:15px}\n.md .act{display:flex;gap:8px;justify-content:flex-end;margin-top:14px}\n.fm{display:grid;gap:10px}.fm label{font-size:12px;color:var(--mut);display:grid;gap:4px}\n/* tab con */\n.sub{display:flex;gap:2px;border-bottom:1px solid var(--line);margin-bottom:12px;flex-wrap:wrap}\n.sub button{border:0;background:none;border-bottom:3px solid transparent;padding:7px 14px;cursor:pointer;font-weight:500;color:var(--mut)}\n.sub button.on{border-bottom-color:var(--acc);color:var(--ink)}\n.sub button .tag{margin-left:6px}\n/* vùng thả file */\n.dz{border:2px dashed var(--line);border-radius:12px;padding:26px;text-align:center;color:var(--mut);cursor:pointer;background:var(--card);transition:.15s}\n.dz:hover,.dz.on{border-color:var(--acc);background:var(--acc-soft);color:var(--ink)}\n.dz b{display:block;font-size:14px;color:var(--ink);margin-bottom:4px}\n.rp{border:1px solid var(--line);border-radius:9px;margin:8px 0;background:var(--card)}\n.rp>div:first-child{display:flex;gap:8px;align-items:center;padding:8px 12px;border-bottom:1px solid var(--line2);flex-wrap:wrap}\n.rp ul{margin:6px 0;padding:0 12px 4px 30px;font-size:12px}.rp li{margin:2px 0}.rp li.err{color:var(--bad)}.rp li.warn{color:var(--wa)}\n.empty{padding:34px 16px;text-align:center;color:var(--mut)}.empty b{display:block;color:var(--ink);font-size:14px;margin-bottom:4px}\n.fig{position:relative;width:100%}.fig svg{display:block;width:100%}\n.ring{display:flex;gap:14px;align-items:center}\n.ld{position:fixed;left:50%;bottom:22px;transform:translateX(-50%);background:var(--nav);color:#fff;padding:8px 16px;border-radius:18px;font-size:12.5px;z-index:80;display:none;box-shadow:0 6px 20px #0004}.ld.on{display:block}\n.tt{position:fixed;pointer-events:none;background:var(--nav);color:#fff;font-size:11.5px;padding:5px 9px;border-radius:6px;z-index:90;display:none;white-space:nowrap}\n.hide{display:none!important}\n@media(max-width:900px){body{display:block}.nv{width:auto;height:auto;position:sticky;top:0;z-index:30;flex-direction:row;align-items:center}\n.lg{padding:8px 10px}.lg div{display:none}.menu{display:flex;overflow-x:auto;padding:6px;gap:2px}.menu a{flex:none}.menu h6{display:none}.menu a{white-space:nowrap}.sv{display:none}\nheader{top:52px}.srch input{width:160px}main{padding:10px}.g2,.g3{grid-template-columns:minmax(0,1fr)}.hb{grid-template-columns:70px minmax(0,1fr) 76px 64px}}\n@media print{.nv,header .fl,.btn{display:none}main{max-width:none}}\n";document.head.appendChild(s);
var l=document.createElement('link');l.rel='stylesheet';l.href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600&display=swap";document.head.appendChild(l);document.documentElement.setAttribute('translate','no');document.title='Tài sản trạm Natcom';
document.body.innerHTML="\n<aside class=\"nv\">\n <div class=\"lg\"><svg viewBox=\"0 0 48 48\" aria-label=\"natcom\"><circle cx=\"24\" cy=\"24\" r=\"24\" fill=\"#F7941D\"/><text x=\"24\" y=\"28\" text-anchor=\"middle\" font-family=\"Arial,Helvetica,sans-serif\" font-weight=\"700\" font-size=\"11.5\" fill=\"#fff\">natcom</text></svg><div><b>Tài sản trạm</b><small>Phòng QLTS · Natcom</small></div></div>\n <nav class=\"menu\" id=\"menu\"></nav>\n <div class=\"sv\" id=\"sv\"><div><span class=\"dot\" id=\"svd\"></span><span id=\"svt\">Đang kết nối…</span></div><div id=\"svs\"></div><button id=\"sync\" type=\"button\">Đồng bộ ngay</button> <button id=\"admBtn\" type=\"button\">Admin</button></div>\n</aside>\n<div class=\"mn\">\n <header>\n  <h1 id=\"pt\">Tổng quan<small id=\"ps\"></small></h1>\n  <div class=\"fl\" id=\"gfl\">\n   <label for=\"fA\">Kỳ trước</label><select id=\"fA\"></select>\n   <label for=\"fB\">Kỳ này</label><select id=\"fB\"></select>\n   <select id=\"fBr\" aria-label=\"Chi nhánh\"><option value=\"\">Tất cả chi nhánh</option></select>\n   <div class=\"seg\" id=\"zoom\"><button type=\"button\" data-z=\"-1\" title=\"Thu nhỏ chữ\">A−</button><button type=\"button\" data-z=\"1\" title=\"Phóng to chữ\">A+</button></div>\n   <div class=\"seg\" id=\"lang\"><button type=\"button\" data-l=\"vi\">VI</button><button type=\"button\" data-l=\"en\">EN</button><button type=\"button\" data-l=\"ht\">HT</button></div>\n   <div class=\"seg\" id=\"unit\"><button type=\"button\" data-u=\"USD\">USD</button><button type=\"button\" data-u=\"G\">Gốc</button></div>\n   <div class=\"srch\"><input type=\"search\" id=\"gq\" placeholder=\"Tìm trạm, mã hàng, DC, nhân viên…\" autocomplete=\"off\"><div class=\"sug\" id=\"gsug\"></div></div>\n   <button class=\"btn p\" id=\"xls\" type=\"button\">Xuất Excel</button>\n  </div>\n </header>\n <main>\n  <section class=\"pg\" id=\"p-dash\"></section>\n  <section class=\"pg\" id=\"p-trend\"></section>\n  <section class=\"pg\" id=\"p-br\"></section>\n  <section class=\"pg\" id=\"p-st\"></section>\n  <section class=\"pg\" id=\"p-wh\"></section>\n  <section class=\"pg\" id=\"p-day\"></section>\n  <section class=\"pg\" id=\"p-emp\"></section>\n  <section class=\"pg\" id=\"p-dc\"></section>\n  <section class=\"pg\" id=\"p-plan\"></section>\n  <section class=\"pg\" id=\"p-norm\"></section>\n  <section class=\"pg\" id=\"p-gk\"></section>\n  <section class=\"pg\" id=\"p-un\"></section>\n  <section class=\"pg\" id=\"p-imp\"></section>\n </main>\n</div>\n<div class=\"dr\" id=\"dr\"><div class=\"ov\"></div><div class=\"bx\" id=\"drb\"></div></div>\n<div class=\"md\" id=\"md\"><div class=\"bx\" id=\"mdb\"></div></div>\n<div class=\"ld\" id=\"ld\"></div><div class=\"tt\" id=\"tt\"></div>\n";})();
/* ===== Ngôn ngữ: Tiếng Việt / English / Kreyòl ayisyen =====
   Giao diện viết bằng tiếng Việt; khi chọn EN/HT, các cụm từ dưới đây được thay trên màn hình và trong file Excel.
   Cụm dài được ưu tiên trước cụm ngắn. */
const I18N=[

/* giao khoán */
['Người đứng tên tài sản so với giao khoán','Asset holder vs. site assignment','Moun ki gen byen yo sou non l kont asiyasyon sit'],['So giao khoán với người đứng tên tài sản','Assignment vs. asset holder','Asiyasyon kont moun ki gen byen yo'],
['Cảnh báo lệch giao khoán','Assignment mismatch alert','Alèt diferans asiyasyon'],['Khớp giao khoán','Assignment matches','Asiyasyon an matche'],['Không có trạm lệch người đứng tên.','No site with a different holder.','Pa gen sit ki gen lòt moun sou non l.'],
['trạm người đứng tên tài sản khác người được giao','sites where the asset holder differs from the assigned staff','sit kote moun ki gen byen an pa menm ak moun ki asiyen an'],['trạm có thêm người khác đứng tên','sites with other holders too','sit ki gen lòt moun tou'],
['trạm có tài sản nhưng không có trong giao khoán','sites with assets but not in the assignment','sit ki gen byen men ki pa nan asiyasyon an'],['tên nhân viên chưa ghép được với file tài sản','staff names not yet matched to the asset file','non anplwaye ki poko matche ak fichye byen yo'],
['Trạm của các nhân viên này chưa so được. Vào','Sites of these staff cannot be compared yet. Go to','Sit anplwaye sa yo poko ka konpare. Ale nan'],['để chọn tên tương ứng trong file tài sản.','to pick the matching name in the asset file.','pou chwazi non ki koresponn nan fichye byen yo.'],
['Chưa có file giao khoán trạm','No site assignment file yet','Poko gen fichye asiyasyon sit'],['Nạp file giao khoán','Load assignment file','Chaje fichye asiyasyon'],['Giao khoán trạm','Site assignment','Asiyasyon sit'],
['Trạm giao khoán','Assigned sites','Sit asiyen'],['Khác người','Different holder','Lòt moun'],['Nhiều người đứng tên','Several holders','Plizyè moun'],['Chưa có tài sản / chưa ghi người','No assets / no holder','Pa gen byen / pa gen non'],
['Có tài sản ngoài giao khoán','Assets outside assignment','Byen andeyò asiyasyon'],['Có tài sản, chưa ghi người','Assets, no holder','Gen byen, pa gen non'],['Chưa có tài sản','No assets','Pa gen byen'],['Tên chưa ghép','Name not matched','Non pa matche'],['Mã trạm lạ','Unknown site code','Kòd sit enkoni'],['Ngoài giao khoán','Outside assignment','Andeyò asiyasyon'],
['Theo trạm','By site','Pa sit'],['Theo nhân viên','By staff','Pa anplwaye'],['Ghép tên','Name matching','Matche non'],['Giao khoán cho','Assigned to','Asiyen bay'],['Đang đứng tên tài sản','Current asset holder','Moun ki gen byen yo kounye a'],['Đang đứng tên','Current holder','Moun kounye a'],
['Giá trị người khác giữ','Value held by others','Valè lòt moun kenbe'],['Người khác giữ','Held by others','Lòt moun kenbe'],['Nhân viên giao khoán','Assigned staff','Anplwaye asiyen'],['Tên trong file tài sản','Name in asset file','Non nan fichye byen'],
['Trạm được giao khoán','Assigned sites','Sit asiyen'],['Trạm được giao','Assigned sites','Sit asiyen'],['Đứng tên ngoài trạm giao','Holding outside assigned sites','Kenbe andeyò sit asiyen'],['Đang đứng tên tài sản ở trạm không được giao','Holding assets at sites not assigned','Kenbe byen nan sit ki pa asiyen'],
['Chưa có TS','No assets','Pa gen byen'],['Nhiều người','Several','Plizyè'],['Khớp tên','Exact name','Non egzak'],['Gần đúng','Close match','Prèske menm'],['Ghép tay','Manual','Manyèl'],['Không đứng tên tài sản','Holds no assets','Pa gen byen sou non l'],['Chưa ghép','Not matched','Pa matche'],['Không đứng tên','No assets','Pa gen byen'],
['Lưu ghép tên','Save name matching','Anrejistre matche non'],['Bỏ ghép tay, để tool tự ghép lại','Clear manual matches','Efase matche manyèl'],['Gợi ý (người giữ nhiều trạm được giao)','Suggestion (holder of most assigned sites)','Sijesyon (moun ki kenbe plis sit asiyen)'],['Tình trạng','Status','Eta'],
['Lệch (khác người + nhiều người)','Mismatch (different + several)','Diferans (lòt moun + plizyè)'],['Tên chưa ghép, mã trạm lạ','Unmatched name, unknown site','Non pa matche, sit enkoni'],['Chưa ghi tên NV giao khoán','No assigned staff name','Pa gen non anplwaye asiyen'],['trạm giao cho nhân viên không đứng tên tài sản nào','sites assigned to staff holding no assets','sit asiyen bay anplwaye ki pa gen okenn byen sou non l'],['NV giao khoán không đứng tên TS','Assigned staff holds no assets','Anplwaye asiyen pa gen byen'],['nhân viên giao khoán không tìm thấy tên trong file tài sản','assigned staff not found in the asset file','anplwaye asiyen ki pa nan fichye byen yo'],['Tool coi là chưa đứng tên tài sản nào. Nếu thực ra tên viết khác, vào','Treated as holding no assets. If the name is spelled differently, go to','Konsidere kòm pa gen byen. Si non an ekri yon lòt jan, ale nan'],['chọn tên tương ứng, tool tính lại ngay.','and pick the matching name; the tool recalculates.','epi chwazi non ki koresponn; zouti a rekalkile.'],['Tất cả trạm lệch','All mismatched sites','Tout sit ki gen diferans'],['Chưa ghi tên NV, mã trạm lạ','No staff name, unknown site','Pa gen non, sit enkoni'],['trạm chưa ghi tên NV','sites without staff name','sit san non anplwaye'],['Giao khoán:','Assignment:','Asiyasyon:'],['xem tab Giao khoán','see Assignment tab','gade onglet Asiyasyon'],['Giao khoán','Assignment','Asiyasyon'],

/* câu giải thích, từ nối */
['dòng phiếu xuất (Export Summary) nào có','any Export Summary line whose','nenpòt liy Export Summary ki gen'],['trùng với kế hoạch thì tính là đã xuất theo kế hoạch, không cần ghi số QĐ','matches the plan counts as issued under the plan; no decision number needed','ki matche ak plan an konte kòm soti dapre plan an; pa bezwen nimewo desizyon'],
['chỉ tính phiếu từ ngày lập kế hoạch trở đi','only vouchers from the plan date onward','sèlman bon depi dat plan an'],['Thu hồi tính tương tự với các mã recall','Recoveries are counted the same way for recall items','Rekiperasyon konte menm jan pou atik recall'],['Phiếu xuất hiện có đến ngày','Issue vouchers available up to','Bon soti disponib jiska'],
['kể cả mã tương đương','including equivalent codes','ansanm ak kòd ekivalan'],['mã tủ/mã trạm','cabinet/site code','kòd kabinè/sit'],['dòng phiếu','voucher lines','liy bon'],['phiếu','vouchers','bon'],['từ','from','depi'],['đến','to','jiska'],['chưa','not yet','poko'],['và','and','ak'],['hoặc','or','oswa'],
['Kiểm tra ngày bắt đầu tính (nút Sửa kế hoạch), hoặc nạp file Export Summary của giai đoạn thực hiện.','Check the start date (Edit plan) or load the Export Summary for the execution period.','Verifye dat kòmansman an (Modifye plan) oswa chaje Export Summary peryòd egzekisyon an.'],
['Số QĐ trong file xuất có nhiều trạm trùng kế hoạch nhất','Decision numbers in export files with the most plan sites','Nimewo desizyon nan fichye soti ki gen plis sit nan plan an'],['bấm','click','klike'],['Thu hồi:','Recovery:','Rekiperasyon:'],
['Đã xuất = mọi phiếu xuất có mã trạm/tủ và mã hàng trùng kế hoạch','Issued = every issue voucher whose site/cabinet and item codes match the plan','Soti = chak bon soti ki gen kòd sit/kabinè ak kòd atik ki matche ak plan an'],
['Người quản lý','Manager','Manadjè'],['Tải danh sách tài sản trạm (.xlsx)','Download site asset list (.xlsx)','Telechaje lis byen sit la (.xlsx)'],['Tải danh sách trạm, vật tư (.xlsx)','Download sites and materials (.xlsx)','Telechaje sit ak materyèl (.xlsx)'],
['Số trạm đang quản lý','Sites managed','Sit li jere'],['Thiết bị, vật tư tại các trạm','Equipment and materials at sites','Ekipman ak materyèl nan sit yo'],['dòng mã hàng','item lines','liy atik'],['Các trạm đang quản lý','Sites managed','Sit li jere'],['bấm để xem tài sản từng trạm','click to see each site assets','klike pou wè byen chak sit'],
['Số mã hàng','Item codes','Kòd atik'],['Số lượng thiết bị, vật tư','Equipment/material qty','Kantite ekipman/materyèl'],['Giá trị nhân viên giữ','Value held by staff','Valè anplwaye kenbe'],['Tổng tài sản trạm','Total site assets','Total byen sit'],['mã trạm/tủ','site/cabinet codes','kòd sit/kabinè'],['Không thấy nhân viên','Staff not found','Pa jwenn anplwaye'],
['Cỡ chữ','Text size','Gwosè tèks'],['Thu nhỏ chữ','Smaller text','Tèks pi piti'],['Phóng to chữ','Larger text','Tèks pi gwo'],['kỳ trước','previous','anvan'],['Thông tin','Info','Enfòmasyon'],['Đơn vị','Unit','Inite'],['Giá trị kỳ trước','Previous value','Valè anvan'],['Giá trị kỳ này','Current value','Valè kounye a'],['Số lượng','Quantity','Kantite'],
/* menu, tiêu đề */
['Tài sản trạm Natcom','Natcom station assets','Byen sit Natcom'],['Tài sản trạm','Station assets','Byen sit'],['Phòng QLTS · Natcom','Asset Mgmt Dept · Natcom','Depatman Jesyon Byen · Natcom'],
['Tổng quan','Overview','Apèsi'],['Xu hướng','Trends','Tandans'],['Phân tích','Analysis','Analiz'],['Kiểm soát','Control','Kontwòl'],['Dữ liệu','Data','Done'],
['Chi nhánh','Branch','Branch'],['Báo cáo kho','Warehouse report','Rapò depo'],['Theo ngày','By day','Pa jou'],['Nhân viên','Staff','Anplwaye'],
['Quyết định (DC)','Decisions (DC)','Desizyon (DC)'],['Quyết định','Decision','Desizyon'],['Kế hoạch','Plan','Plan'],['Thừa tài sản','Excess assets','Twòp ekipman'],['Mã chưa gán','Unassigned codes','Kòd ki pa plase'],['Nạp dữ liệu','Load data','Chaje done'],
['So sánh tài sản trạm giữa hai kỳ chốt','Compare station assets between two closing dates','Konpare byen sit ant de dat fèmti'],['Tài sản tại trạm qua các kỳ','Station assets over closing dates','Byen sit sou plizyè dat fèmti'],
['Tăng giảm theo chi nhánh','Change by branch','Chanjman pa branch'],['Tăng giảm, đối soát từng trạm','Change and reconciliation by station','Chanjman ak verifikasyon pa sit'],['Kho nào xuất ra trạm bao nhiêu','How much each warehouse issued to sites','Konbyen chak depo bay sit yo'],
['Xuất và thu hồi từng ngày','Issues and recoveries per day','Soti ak rekiperasyon chak jou'],['Nhân viên giữ nhiều trạm, nhiều tiền','Staff holding the most sites and value','Anplwaye ki kenbe plis sit ak valè'],
['Tiến độ xuất, thu hồi theo quyết định','Issue and recovery progress by decision','Pwogrè soti ak rekiperasyon pa desizyon'],['% hoàn thành theo file kế hoạch','% completion against the plan file','% fini dapre fichye plan an'],
['So với định mức vật tư','Compared with material norms','Konpare ak nòm materyèl'],['Mã trạm chưa có trong danh sách trạm','Site codes missing from the site list','Kòd sit ki pa nan lis sit yo'],['Nạp file, kiểm tra, cài đặt','Load files, check, settings','Chaje fichye, verifye, paramèt'],
/* thanh lọc */
['Kỳ trước','Previous','Anvan'],['Kỳ này','Current','Kounye a'],['Tất cả chi nhánh','All branches','Tout branch'],['(không so sánh)','(no comparison)','(pa konpare)'],['chưa có','none yet','poko genyen'],
['Tìm trạm, mã hàng, DC, nhân viên…','Search site, item, DC, staff…','Chèche sit, atik, DC, anplwaye…'],['Xuất Excel','Export Excel','Ekspòte Excel'],['Gốc','Local','Lokal'],
['Đồng bộ ngay','Sync now','Senkronize kounye a'],['Admin: đang đăng nhập','Admin: signed in','Admin: konekte'],
['Đang kết nối…','Connecting…','Ap konekte…'],['Đã nối Google Sheet','Connected to Google Sheet','Konekte ak Google Sheet'],['Đã lưu Google Sheet','Saved to Google Sheet','Anrejistre nan Google Sheet'],['Mất kết nối Google Sheet','Google Sheet disconnected','Koneksyon Google Sheet koupe'],
['Bản offline · lưu trên máy','Offline · saved on this device','Offline · anrejistre sou aparèy sa'],['Dữ liệu chỉ trên máy này','Data only on this device','Done sèlman sou aparèy sa'],['Lần lưu gần nhất','Last saved','Dènye anrejistreman'],['Đã kết nối','Connected','Konekte'],
['Đang chờ đồng bộ','Waiting to sync','Ap tann senkronizasyon'],['mục chờ gửi','items waiting','eleman ap tann'],['mục chưa đồng bộ','items not synced','eleman poko senkronize'],['chưa có link Google Sheet','no Google Sheet link yet','poko gen lyen Google Sheet'],
/* trạng thái, thông báo */
['Đang tải dữ liệu…','Loading data…','Ap chaje done…'],['Đang tính so sánh…','Comparing…','Ap konpare…'],['Đang tính kế hoạch…','Computing plan…','Ap kalkile plan…'],['Đang tính quyết định…','Computing decision…','Ap kalkile desizyon…'],
['Đang tạo file Excel…','Creating Excel file…','Ap kreye fichye Excel…'],['Đang tạo file…','Creating file…','Ap kreye fichye…'],['Đang lưu…','Saving…','Ap anrejistre…'],['Đang đồng bộ…','Syncing…','Ap senkronize…'],['Đang dò mã…','Scanning codes…','Ap chèche kòd…'],['Đang tính…','Computing…','Ap kalkile…'],
['Đang nhận dạng…','Detecting…','Ap idantifye…'],['Đang đọc…','Reading…','Ap li…'],['Đang đọc','Reading','Ap li'],['Chờ','Waiting','Ap tann'],
['Đã đăng nhập admin','Admin signed in','Admin konekte'],['Đã đăng xuất admin','Admin signed out','Admin dekonekte'],['Đã lưu cài đặt','Settings saved','Paramèt anrejistre'],['Đã lưu phân loại','Classification saved','Klasifikasyon anrejistre'],['Đã đồng bộ','Synced','Senkronize'],
['Không kết nối được Google Sheet','Cannot connect to Google Sheet','Pa ka konekte ak Google Sheet'],['Lỗi hiển thị','Display error','Erè afichaj'],['Lỗi khi lưu','Save error','Erè pandan anrejistreman'],['Lỗi khi đọc','Read error','Erè pandan lekti'],['Lỗi xuất Excel','Excel export error','Erè ekspòtasyon Excel'],
['Đăng nhập admin','Admin sign-in','Koneksyon admin'],['Đăng nhập admin để lưu','Sign in as admin to save','Konekte kòm admin pou anrejistre'],['Mật khẩu','Password','Modpas'],['Sai mật khẩu','Wrong password','Move modpas'],['Đăng nhập','Sign in','Konekte'],['Hủy','Cancel','Anile'],['Đóng','Close','Fèmen'],['Lưu','Save','Anrejistre'],
/* tổng quan */
['Chưa có dữ liệu tài sản','No asset data yet','Poko gen done byen'],['Admin vào tab Nạp dữ liệu, kéo thả file Tổng tài sản trạm, Tổng xuất, Thu hồi, Danh sách trạm, Kế hoạch','Admin: open Load data and drop the Station assets, Export, Recovery, Site list and Plan files','Admin: ale nan Chaje done epi depoze fichye Byen sit, Soti, Rekiperasyon, Lis sit ak Plan yo'],
['Cảnh báo','Alert','Alèt'],['trạm tăng ≥','sites up ≥','sit ki monte ≥'],['xem tất cả','see all','wè tout'],['Không có trạm tăng đột biến','No sudden site increase','Pa gen sit ki monte toudenkou'],['USD so với kỳ trước','USD vs previous period','USD konpare ak peryòd anvan'],['ngưỡng','threshold','limit'],
['Chỉ so tồn, chưa đối soát phiếu','Stock comparison only, vouchers not reconciled','Konparezon stòk sèlman, bon yo pa verifye'],['Phiếu xuất phủ','Issue vouchers cover','Bon soti kouvri'],['thu hồi phủ','recoveries cover','rekiperasyon kouvri'],['số ngày từ','of days from','jou depi'],['Còn thiếu','Missing','Manke'],
['Tài sản tại trạm','Station assets','Byen nan sit'],['So với','Vs','Konpare ak'],['Kỳ so sánh','Comparison period','Peryòd konparezon'],['Nạp thêm kỳ trước để so sánh','Load an earlier period to compare','Chaje yon peryòd anvan pou konpare'],
['Xuất ra trạm trong kỳ','Issued to sites in period','Bay sit nan peryòd la'],['Trạm mới / hết tài sản','New / emptied sites','Sit tou nèf / sit vid'],['trạm lệch phiếu','sites with voucher gaps','sit ki gen diferans bon'],['chưa đối soát phiếu','vouchers not reconciled','bon yo pa verifye'],
['Tổng trạm (NAT_TT)','Hub sites (NAT_TT)','Sit santral (NAT_TT)'],['tính riêng, không cộng vào trạm','counted separately','kalkile apa'],['Chất lượng dữ liệu','Data quality','Kalite done'],['mã chưa gán','unassigned codes','kòd ki pa plase'],
['Tài sản tại trạm theo kỳ chốt','Station assets by closing date','Byen sit pa dat fèmti'],['tất cả chi nhánh','all branches','tout branch'],['Cầu nối tồn tài sản','Asset bridge','Pon byen yo'],['Tồn đầu','Opening','Kòmansman'],['Tồn cuối','Closing','Fen'],
['± Chênh lệch','± Difference','± Diferans'],['+ Xuất','+ Issued','+ Soti'],['− Thu hồi','− Recovered','− Rekipere'],['Đủ phiếu xuất và thu hồi trong kỳ','Complete issue and recovery vouchers','Tout bon soti ak rekiperasyon yo la'],['Thiếu phiếu trong kỳ nên phần chênh lệch còn lớn','Missing vouchers, so the difference is still large','Gen bon ki manke, kidonk diferans lan toujou gwo'],
['Cần ít nhất 2 kỳ chốt tài sản','Need at least 2 closing dates','Bezwen omwen 2 dat fèmti'],['Chi nhánh: kỳ trước và kỳ này','Branch: previous vs current','Branch: anvan ak kounye a'],['bấm để xem trạm','click to see sites','klike pou wè sit yo'],
['Kế hoạch theo quyết định','Plans by decision','Plan pa desizyon'],['% theo số lượng từng mã','% by quantity per item','% pa kantite chak atik'],['Top 5 tăng','Top 5 increases','5 pi gwo ogmantasyon'],['Top 5 giảm','Top 5 decreases','5 pi gwo diminisyon'],
['Chưa có file kế hoạch. Nạp ở tab Nạp dữ liệu','No plan file yet. Load it in Load data','Poko gen fichye plan. Chaje l nan Chaje done'],
['Phần tăng giảm không giải thích bằng phiếu','Change not explained by vouchers','Chanjman bon yo pa eksplike'],['đổi đơn giá, điều chuyển giữa trạm, thiếu phiếu…','price changes, transfers between sites, missing vouchers…','chanjman pri, transfè ant sit, bon ki manke…'],
/* trạng thái trạm */
['Trạm mới','New site','Sit tou nèf'],['Hết tài sản','Emptied','Vid'],['Lệch phiếu','Voucher gap','Diferans bon'],['Không đổi','Unchanged','Pa chanje'],['Tổng trạm','Hub site','Sit santral'],['TỔNG TRẠM','HUB SITE','SIT SANTRAL'],['Tuyến','Link','Lyen'],['Khớp','Matched','Matche'],
['Tăng giảm','Change','Chanjman'],['Tăng','Up','Monte'],['Giảm','Down','Desann'],
/* xu hướng, chi nhánh, trạm */
['Tài sản tại trạm qua các kỳ chốt','Station assets over closing dates','Byen sit sou dat fèmti yo'],['Thay đổi kỳ cuối','Last change','Dènye chanjman'],['Tổng (không tính NAT_TT)','Total (excl. NAT_TT)','Total (san NAT_TT)'],['Các kỳ đã nạp','Loaded periods','Peryòd ki chaje'],
['Ngày chốt','Closing date','Dat fèmti'],['Số dòng','Rows','Liy'],['Khóa sổ','Locked','Fèmen'],['Đã khóa','Locked','Fèmen'],
['Xuất và thu hồi theo chi nhánh','Issues and recoveries by branch','Soti ak rekiperasyon pa branch'],['Bảng chi nhánh','Branch table','Tablo branch'],['bấm một dòng để xem trạm','click a row to see sites','klike sou yon liy pou wè sit yo'],
['Số trạm','Sites','Sit'],['Xuất ra trạm','Issued to sites','Bay sit yo'],['Chênh lệch','Difference','Diferans'],['Hết TS','Emptied','Vid'],['Trạng thái','Status','Estati'],['Mọi trạng thái','All statuses','Tout estati'],
['Lọc mã trạm','Filter site code','Filtre kòd sit'],['Chỉ trạm tăng ≥','Only sites up ≥','Sèlman sit ki monte ≥'],['chưa đủ phiếu để đối soát','not enough vouchers to reconcile','pa ase bon pou verifye'],['Dấu * là trạm tool đoán theo mã','* = site guessed from the code','* = sit zouti a devine ak kòd la'],
['Chênh lệch phiếu','Voucher gap','Diferans bon'],['Mã trong file','Code in file','Kòd nan fichye'],['cấu hình','config','konfigirasyon'],['Tài sản qua các kỳ','Assets over periods','Byen sou peryòd yo'],['Từng mã vật tư','By item','Pa atik'],
['Tên hàng','Item name','Non atik'],['SL trước','Prev qty','Kantite anvan'],['SL nay','Current qty','Kantite kounye a'],['Tăng giảm SL','Qty change','Chanjman kantite'],['SL xuất','Issued qty','Kantite soti'],['SL thu hồi','Recovered qty','Kantite rekipere'],['Lệch SL','Qty gap','Diferans kantite'],['Giá trị nay','Current value','Valè kounye a'],
['Phiếu trong kỳ','Vouchers in period','Bon nan peryòd la'],['Không thấy trạm','Site not found','Pa jwenn sit'],['trong kỳ đang xem','in the current period','nan peryòd la'],['Trạm','Site','Sit'],
/* báo cáo kho */
['Báo cáo kho xuất ra trạm','Warehouse issues to sites','Depo ki bay sit yo'],['Số kho có xuất','Warehouses issuing','Depo ki bay'],['Kho xuất nhiều nhất','Top issuing warehouse','Depo ki bay plis'],['Số trạm nhận hàng','Sites receiving','Sit ki resevwa'],
['Xếp hạng kho','Warehouse ranking','Klasman depo'],['bấm để xem trạm, DC','click to see sites, DC','klike pou wè sit, DC'],['Chi nhánh kho ×','Warehouse branch ×','Branch depo ×'],['màu càng đậm xuất càng nhiều','darker = more issued','pi fonse = plis soti'],
['Kho của','Warehouse of','Depo'],['Tất cả kho','All warehouses','Tout depo'],['Kho công ty','Company warehouse','Depo konpayi'],['Giá trị xuất ra trạm','Value issued to sites','Valè bay sit yo'],['Kho chi nhánh','Branch warehouse','Depo branch'],['Theo DC','By DC','Pa DC'],['Theo trạm','By site','Pa sit'],['Số DC','DC count','Kantite DC'],
['Ngày','Day','Jou'],['Tháng','Month','Mwa'],['Năm','Year','Ane'],['ngày','day','jou'],['tháng','month','mwa'],['năm','year','ane'],['Kho','Warehouse','Depo'],
/* theo ngày */
['Chưa có phiếu xuất, thu hồi','No issue or recovery vouchers yet','Poko gen bon soti oswa rekiperasyon'],['Nạp file Tổng xuất và Thu hồi để xem theo ngày','Load Export and Recovery files to see daily data','Chaje fichye Soti ak Rekiperasyon pou wè chak jou'],
['Tăng giảm tài sản trạm theo ngày','Daily station asset change','Chanjman byen sit chak jou'],['tăng = xuất ra trạm, giảm = thu hồi','up = issued to sites, down = recovered','monte = bay sit, desann = rekipere'],['Tổng xuất ra trạm','Total issued to sites','Total bay sit yo'],['Tổng thu hồi','Total recovered','Total rekipere'],
['Ròng','Net','Nèt'],['Ngày xuất nhiều nhất','Peak issue day','Jou ki bay plis'],['Xuất (tăng)','Issued (up)','Soti (monte)'],['Thu hồi (giảm)','Recovered (down)','Rekipere (desann)'],['Lũy kế ròng','Cumulative net','Total nèt akimile'],['Từng ngày','Each day','Chak jou'],['Lũy kế','Cumulative','Akimile'],
['10 lần xuất lớn nhất (trạm × ngày)','10 largest issues (site × day)','10 pi gwo soti (sit × jou)'],
/* nhân viên */
['Nhân viên giữ tài sản trạm','Staff holding site assets','Anplwaye ki kenbe byen sit'],['Giữ từ 50 trạm','Holding 50+ sites','Kenbe 50 sit oswa plis'],['Người giữ nhiều nhất','Largest holder','Moun ki kenbe plis'],['Top nhân viên theo giá trị','Top staff by value','Pi gwo anplwaye pa valè'],
['Không tính tổng trạm NAT_TT','Exclude hub sites NAT_TT','San sit santral NAT_TT'],['Top nhân viên theo số trạm','Top staff by site count','Pi gwo anplwaye pa kantite sit'],['Danh sách nhân viên','Staff list','Lis anplwaye'],['CN chính','Main branch','Branch prensipal'],['Số trạm thay đổi','Site count change','Chanjman kantite sit'],
['Giá trị đang giữ','Value held','Valè li kenbe'],['Các trạm đang giữ','Sites held','Sit li kenbe'],['Không ghi người quản lý','No manager recorded','Pa gen manadjè'],
/* quyết định, kế hoạch */
['Chưa có số quyết định nào','No decision numbers yet','Poko gen nimewo desizyon'],['Số DC được đọc tự động từ cột Interpretation','DC numbers are read from the Interpretation column','Nimewo DC yo li nan kolòn Interpretation'],
['Gõ số quyết định hoặc mã phòng, ví dụ 392823 hoặc AP-DAO','Type a decision number or department, e.g. 392823 or AP-DAO','Tape nimewo desizyon oswa depatman, egzanp 392823 oswa AP-DAO'],['Tất cả quyết định','All decisions','Tout desizyon'],['số · bấm để xem tiến độ','numbers · click to see progress','nimewo · klike pou wè pwogrè'],
['Số quyết định','Decision no.','Nimewo desizyon'],['Phòng','Dept','Depatman'],['Số trạm xuất','Sites issued','Sit ki resevwa'],['Số trạm thu','Sites recovered','Sit rekipere'],['Từ ngày','From','Depi'],['Đến ngày','To','Jiska'],['Có kế hoạch','Has plan','Gen plan'],
['có kế hoạch','has plan','gen plan'],['chưa có phiếu','no vouchers yet','poko gen bon'],['Tải kế hoạch đã cập nhật số xuất','Download plan updated with issued qty','Telechaje plan ak kantite ki soti'],['Tải kế hoạch đã cập nhật','Download updated plan','Telechaje plan ajou'],['Xuất Excel quyết định','Export decision to Excel','Ekspòte desizyon an Excel'],['Danh sách DC','DC list','Lis DC'],
['Xuất ra trạm','Issued to sites','Bay sit yo'],['Thu hồi','Recovery','Rekiperasyon'],['Tổng quyết định','Decision total','Total desizyon'],['Trạm kế hoạch','Planned sites','Sit nan plan'],['Đủ','Complete','Konplè'],['Thiếu','Partial','Pa konplè'],['Chưa xuất','Not issued','Poko soti'],['Chưa thu','Not recovered','Poko rekipere'],
['Từng mặt hàng','By item','Pa atik'],['Từng chi nhánh','By branch','Pa branch'],['bấm để lọc trạm','click to filter sites','klike pou filtre sit'],['Từng trạm','By site','Pa sit'],['không tính','not counted','pa konte'],['Xuất thừa','Over-issued','Soti an plis'],['Thu hồi thừa','Over-recovered','Rekipere an plis'],
['Mã tủ','Cabinet','Kabinè'],['Có xuất thừa','Over-issued','Soti an plis'],['Có thu hồi thừa','Over-recovered','Rekipere an plis'],['ngoài kế hoạch','outside the plan','andeyò plan an'],['không có trong kế hoạch','not in the plan','pa nan plan an'],
['Trạm xuất theo QĐ nhưng ngoài kế hoạch','Sites issued under the decision but outside the plan','Sit ki resevwa pa desizyon an men andeyò plan an'],
['Đã xuất','Issued','Soti'],['Đã thu','Recovered','Rekipere'],['mọi phiếu','all vouchers','tout bon'],['có mã trạm/tủ và mã hàng trùng kế hoạch','with site/cabinet and item codes matching the plan','ki gen kòd sit/kabinè ak kòd atik ki matche ak plan an'],['không cần ghi số QĐ','no decision number needed','pa bezwen nimewo desizyon'],
['% = trung bình % các mã. Mỗi trạm, mỗi mã tối đa 100%','% = average % of items. Max 100% per site and item','% = mwayèn % atik yo. Maksimòm 100% pou chak sit ak atik'],['vượt kế hoạch bôi đỏ, không cộng thêm','above plan shown in red, not added','plis pase plan an an wouj, pa ajoute'],
['Theo chi nhánh','By branch','Pa branch'],['Theo mã hàng','By item','Pa atik'],['Số mã hàng','Item count','Kantite atik'],['Số ngày có phiếu','Days with vouchers','Jou ki gen bon'],['Giá trị','Value','Valè'],
['Quyết định này chưa có file kế hoạch nên chỉ hiện số thực tế. Nạp file kế hoạch để có % hoàn thành.','No plan file for this decision, actual figures only. Load a plan file to get % completion.','Desizyon sa pa gen plan, se chif reyèl sèlman. Chaje yon plan pou jwenn % fini.'],
['Kế hoạch chưa có hàng recall nên không tính %. Đây là số đã thu hồi thực tế.','The plan has no recall items, so no %. These are actual recoveries.','Plan an pa gen atik recall, kidonk pa gen %. Sa se rekiperasyon reyèl.'],
['Chưa có phiếu thu hồi','No recovery vouchers yet','Poko gen bon rekiperasyon'],['Chưa có phiếu xuất','No issue vouchers yet','Poko gen bon soti'],['theo quyết định này','for this decision','pou desizyon sa'],
['Chưa có file kế hoạch','No plan file yet','Poko gen fichye plan'],['Cách tool tính','How it is calculated','Kijan li kalkile'],['dòng phiếu khớp','matching voucher lines','liy bon ki matche'],['Đổi số QĐ','Change decision no.','Chanje nimewo desizyon'],['Sửa kế hoạch','Edit plan','Modifye plan'],['Xem chi tiết','View details','Wè detay'],
['Chưa có phiếu xuất nào trùng mã trạm + mã hàng của kế hoạch','No issue vouchers match the plan site + item codes','Pa gen bon soti ki matche ak kòd sit + atik plan an'],['Kiểm tra ngày bắt đầu tính','Check the start date','Verifye dat kòmansman an'],
['Danh sách kế hoạch','Plan list','Lis plan'],['Số mã','Items','Atik'],['Dòng phiếu khớp','Matching lines','Liy ki matche'],['% xuất','% issued','% soti'],['% thu hồi','% recovered','% rekipere'],['Ngoài KH','Outside plan','Andeyò plan'],['Ngày nạp','Loaded on','Dat chajman'],['File','File','Fichye'],
['không có kế hoạch recall','no recall plan','pa gen plan recall'],['trạm ngoài KH','sites outside plan','sit andeyò plan'],['Đổi số quyết định cho kế hoạch','Change the plan decision number','Chanje nimewo desizyon plan an'],['Số QĐ hiện tại','Current decision no.','Nimewo aktyèl'],['Số QĐ đúng','Correct decision no.','Bon nimewo desizyon'],
['Tính phiếu xuất/thu hồi từ ngày','Count vouchers from date','Konte bon depi dat'],['để trống = mọi ngày','blank = all dates','vid = tout dat'],['Loại','Type','Kalite'],['Tính %','Count in %','Konte nan %'],['Xuất','Issue','Soti'],['Phân loại mã hàng','Item classification','Klasifikasyon atik'],
['Đã đổi sang','Changed to','Chanje an'],['Nhập số quyết định','Enter a decision number','Antre yon nimewo desizyon'],
/* thừa tài sản, mã chưa gán */
['Chưa có file định mức','No norm file yet','Poko gen fichye nòm'],['Nạp file định mức','Load norm file','Chaje fichye nòm'],['Trạm vượt định mức','Sites above norm','Sit ki depase nòm'],['Giá trị thừa','Excess value','Valè an plis'],['Số dòng định mức','Norm rows','Liy nòm'],
['Mã hàng thừa nhiều nhất','Most excess items','Atik ki depase plis'],['Thực tế','Actual','Reyèl'],['Định mức','Norm','Nòm'],['Thừa','Excess','An plis'],['Mã hàng','Item code','Kòd atik'],['Chi tiết','Details','Detay'],['Không có trạm vượt định mức','No site above norm','Pa gen sit ki depase nòm'],
['Cách bổ sung','How to add','Kijan pou ajoute'],['Tải file bổ sung (.xlsx)','Download fill-in file (.xlsx)','Telechaje fichye pou ranpli (.xlsx)'],['Nạp file đã điền','Upload filled file','Chaje fichye ranpli a'],['Đoán được trạm','Site guessed','Sit devine'],['Giá trị liên quan','Related value','Valè ki konsène'],
['Trạm đoán','Guessed site','Sit devine'],['CN gợi ý','Suggested branch','Branch sijere'],['chưa rõ','unknown','enkoni'],['Xuất hiện ở','Seen in','Parèt nan'],['Danh sách','List','Lis'],['tool đoán theo ký tự đầu','guessed from the prefix','devine ak premye lèt yo'],
/* nạp dữ liệu */
['Nạp file','Load files','Chaje fichye'],['thả nhiều file một lúc, tool tự nhận dạng và kiểm tra','drop several files at once; the tool detects and checks them','depoze plizyè fichye; zouti a idantifye epi verifye yo'],['Kéo thả file vào đây hoặc bấm để chọn','Drop files here or click to choose','Depoze fichye isit oswa klike pou chwazi'],
['Lưu vào dữ liệu','Save to data','Anrejistre nan done'],['Xóa danh sách','Clear list','Efase lis'],['Dữ liệu đã có','Existing data','Done ki la deja'],['Kỳ chốt tài sản','Closing dates','Dat fèmti'],['Phiếu xuất','Issue vouchers','Bon soti'],['Phiếu thu hồi','Recovery vouchers','Bon rekiperasyon'],
['Danh sách trạm','Site list','Lis sit'],['trạm chuẩn','standard sites','sit estanda'],['dòng Mau_Tram_Tu','Mau_Tram_Tu rows','liy Mau_Tram_Tu'],['mã bổ sung','added codes','kòd ajoute'],['Khóa sổ kỳ chốt','Lock closing dates','Fèmen dat fèmti'],['Cài đặt','Settings','Paramèt'],['chỉ admin sửa được','admin only','admin sèlman'],
['Tỷ giá','Exchange rate','To chanj'],['gốc / 1 USD','local / 1 USD','lokal / 1 USD'],['Ngưỡng cảnh báo trạm tăng','Site increase alert threshold','Limit alèt ogmantasyon sit'],['Mã không tính % kế hoạch','Items excluded from plan %','Atik ki pa nan % plan an'],['chỉ báo đỏ','red only','wouj sèlman'],
['cách nhau dấu phẩy','comma separated','separe ak vigil'],['Mã tương đương','Equivalent codes','Kòd ekivalan'],['mỗi nhóm một dòng, các mã cách nhau dấu phẩy','one group per line, codes comma separated','yon gwoup pa liy, kòd separe ak vigil'],['Email nhận cảnh báo hàng tuần','Weekly alert emails','Imèl pou alèt chak semèn'],
['Link Apps Script (/exec) của máy này','Apps Script link (/exec) for this device','Lyen Apps Script (/exec) aparèy sa'],['Lưu cài đặt','Save settings','Anrejistre paramèt'],['Tải toàn bộ dữ liệu (.json)','Download all data (.json)','Telechaje tout done (.json)'],['Mở file dữ liệu','Open data file','Louvri fichye done'],
['Nhật ký nạp','Import log','Jounal chajman'],['Thời gian','Time','Lè'],['Kết quả','Result','Rezilta'],['Ghi chú','Note','Nòt'],['Đạt','OK','OK'],['Lỗi','Error','Erè'],['Đã lưu','Saved','Anrejistre'],['Bỏ','Remove','Retire'],
['Tổng tài sản trạm','Station assets file','Fichye byen sit'],['Tổng xuất','Export summary','Rezime soti'],['Thu hồi (Import)','Recovery (Import)','Rekiperasyon (Import)'],['Bổ sung mã chưa gán','Unassigned code fill-in','Ranpli kòd ki pa plase'],['Không nhận ra','Not recognized','Pa rekonèt'],
['Số quyết định (DC) của kế hoạch – không bắt buộc','Plan decision number (DC) – optional','Nimewo desizyon (DC) plan an – pa obligatwa'],['Gợi ý theo số trạm trùng','Suggestions by matching sites','Sijesyon pa sit ki matche'],['Tổng KH','Plan total','Total plan'],['Không có dữ liệu','No data','Pa gen done'],['không có','none','pa genyen'],
['Không có','None','Pa genyen'],['Đang hiện','Showing','Ap montre'],['dòng','rows','liy'],['xem thêm','show more','wè plis'],
/* kiểm tra file */
['Ngày chốt:','Closing date:','Dat fèmti:'],['dòng · tổng giá trị','rows · total value','liy · valè total'],['Tại trạm:','At sites:','Nan sit:'],['trong đó tổng trạm NAT_TT','incl. hub sites NAT_TT','ladan l sit santral NAT_TT'],['Bỏ qua','Skipped','Sote'],['dòng đã thanh lý','liquidated rows','liy ki likide'],
['dòng không có mã trạm','rows without site code','liy san kòd sit'],['hàng trong kho, cấp nhân viên','stock in warehouse, issued to staff','stòk nan depo, bay anplwaye'],['Có người quản lý:','Managers:','Manadjè:'],['Không có cột MANAGER_NAME: tab Nhân viên sẽ trống','No MANAGER_NAME column: Staff tab will be empty','Pa gen kolòn MANAGER_NAME: onglè Anplwaye ap vid'],
['mã trạm chưa có trong danh sách','site codes not in the list','kòd sit ki pa nan lis la'],['Xem tab Mã chưa gán','See Unassigned codes','Gade Kòd ki pa plase'],['lấy theo ngày nhỏ/lớn nhất','from earliest/latest date','dapre premye/dènye dat'],['dòng không đọc được ngày (bỏ qua)','rows with unreadable dates (skipped)','liy ki gen dat pa li (sote)'],
['Bỏ chuyển kho, mất tài sản, xuất nội bộ, bảo hành','Excluded transfers, losses, internal issues, warranty','Retire transfè, pèt, soti entèn, garanti'],['Thu hồi từ trạm','Recovered from sites','Rekipere nan sit'],['không có mã trạm','no site code','san kòd sit'],
['Đọc được số quyết định (DC) cho','Decision number (DC) found for','Nimewo desizyon (DC) jwenn pou'],['giá trị (không tính tổng trạm)','of value (excl. hub sites)','valè (san sit santral)'],['kho chưa nhận ra chi nhánh','warehouses without a branch','depo san branch'],
['mới có đến ngày','only up to day','sèlman jiska jou'],['nạp file đủ tháng sau sẽ thay phần trùng ngày','a full-month file later replaces the overlapping days','yon fichye mwa konplè ap ranplase jou ki double yo'],
['tủ/trạm có kế hoạch','cabinets/sites planned','kabinè/sit nan plan'],['mã xuất','issue items','atik soti'],['mã thu hồi','recovery items','atik rekiperasyon'],['cột có chữ','columns containing','kolòn ki gen mo'],['mã tủ không có trong danh sách trạm','cabinet codes not in site list','kòd kabinè ki pa nan lis sit'],
['trạm','sites','sit'],['mã tủ 2G/3G/4G/5G','2G/3G/4G/5G cabinet codes','kòd kabinè 2G/3G/4G/5G'],['trạm lặp dòng (giữ dòng sau)','duplicate site rows (last kept)','sit ki double (dènye a kenbe)'],['trạm có chi nhánh lạ','sites with unknown branch','sit ki gen branch enkoni'],
['dòng mã tủ → trạm → chi nhánh','cabinet → site → branch rows','liy kabinè → sit → branch'],['mã tủ dính dấu cách/dấu chấm/dấu phẩy','cabinet codes with stray spaces/dots/commas','kòd kabinè ki gen espas/pwen/vigil'],['Tự sửa','Auto-fixed','Korije otomatik'],['mã tủ bị gán 2 chi nhánh','cabinets assigned to 2 branches','kabinè ki gen 2 branch'],
['mã hợp lệ sẽ được thêm vào danh sách trạm','valid codes will be added to the site list','kòd valab ap ajoute nan lis sit la'],['mã chưa điền chi nhánh (bỏ qua)','codes without branch (skipped)','kòd san branch (sote)'],['dòng định mức','norm rows','liy nòm'],
/* xuất excel */
['BÁO CÁO TĂNG GIẢM TÀI SẢN TRẠM – NATCOM','NATCOM STATION ASSET CHANGE REPORT','RAPÒ CHANJMAN BYEN SIT NATCOM'],['Chỉ tiêu','Indicator','Endikatè'],['Tài sản tại trạm kỳ trước','Station assets, previous','Byen sit, anvan'],['Tài sản tại trạm kỳ này','Station assets, current','Byen sit, kounye a'],
['Xuất ra trạm trong kỳ','Issued to sites in period','Bay sit nan peryòd la'],['Thu hồi trong kỳ','Recovered in period','Rekipere nan peryòd la'],['Chênh lệch chưa giải thích','Unexplained difference','Diferans san esplikasyon'],['Đối soát phiếu','Voucher reconciliation','Verifikasyon bon'],['Đủ phiếu','Complete','Konplè'],['Chưa đủ phiếu','Incomplete','Pa konplè'],
['Trạm hết tài sản','Emptied sites','Sit vid'],['Trạm tăng ≥','Sites up ≥','Sit ki monte ≥'],['Kho xuất ra trạm','Warehouse issues to sites','Depo ki bay sit'],['Mã trạm/tủ trong phiếu','Site/cabinet code in voucher','Kòd sit/kabinè nan bon'],['Còn thiếu','Missing','Manke'],
['Kỳ','Period','Peryòd'],['Đơn vị','Unit','Inite'],['Tổng','Total','Total'],['TỔNG','TOTAL','TOTAL'],['Nguồn','Source','Sous'],['SL','Qty','Kant.'],['KH','Plan','Plan'],['CN','Br.','Br.'],['Có','Yes','Wi'],
['Không tìm thấy','Not found','Pa jwenn'],['chưa xuất','not issued','poko soti'],['xuất','issue','soti'],['thu hồi','recovery','rekiperasyon'],['tăng','up','monte'],['giảm','down','desann'],['Mã','Code','Kòd'],['Ngày nạp','Loaded on','Dat chajman']
];
let TRX=null,TRM=null;
function buildTr(){TRX=null;TRM=null;if(S.lang==='vi')return;const i=S.lang==='en'?1:2;TRM=new Map();const ks=[];
 for(const r of I18N){if(!r[i])continue;const k=r[0].toLowerCase();if(TRM.has(k))continue;TRM.set(k,r[i]);ks.push(r[0])}
 ks.sort((a,b)=>b.length-a.length);TRX=new RegExp('(?<![\\p{L}\\p{N}_])('+ks.map(k=>k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|')+')(?![\\p{L}\\p{N}_])','giu')}
function trS(s){if(!TRX||s==null||typeof s!=='string')return s;return s.replace(TRX,m=>{const t=TRM.get(m.toLowerCase());if(!t)return m;
 if(m.length>1&&m===m.toUpperCase()&&m!==m.toLowerCase())return t.toUpperCase();
 const f=m[0];if(f===f.toUpperCase()&&f!==f.toLowerCase())return t[0].toUpperCase()+t.slice(1);
 return t.length>1&&t[1]===t[1].toLowerCase()?t[0].toLowerCase()+t.slice(1):t})}
const TR_ATTR=['placeholder','title','data-tip','aria-label'];
function trDom(root){if(!TRX||!root)return;const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:n=>n.parentElement&&!n.parentElement.closest('script,style,textarea,.nt')?1:2});const L=[];let n;while((n=w.nextNode()))L.push(n);
 for(const t of L){const v=trS(t.nodeValue);if(v!==t.nodeValue)t.nodeValue=v}
 const els=root.querySelectorAll?[root,...root.querySelectorAll('[placeholder],[title],[data-tip],[aria-label]')]:[];
 for(const e of els)for(const a of TR_ATTR){const v=e.getAttribute&&e.getAttribute(a);if(v){const x=trS(v);if(x!==v)e.setAttribute(a,x)}}}
const TRMO=new MutationObserver(ms=>{if(!TRX)return;for(const m of ms)for(const n of m.addedNodes){if(n.nodeType===3){const v=trS(n.nodeValue);if(v!==n.nodeValue)n.nodeValue=v}else if(n.nodeType===1)trDom(n)}});

'use strict';
/* ===== Tài sản trạm Natcom ===== */
const VER='1.0.0';
const DEFAULT_API="https://script.google.com/macros/s/AKfycbygcV5MsBdwX3gwoRN9csLZ09_Q9j0rlKtH4oIli6yl9FtmUZGQXuaGeF7mGQF6rWtV/exec";                 // link Apps Script /exec, điền khi đóng gói
const BRS=['ART','CEN','NOR','NOT','OUE01','OUE02','OUE03','SUD'];
const ADMIN_HASH='';
const CFG0={rate:131,thr:5000,excl:['005812'],eq:[['300121','272583','040043','026329'],['300068','301524','268637']],emails:''};
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const num=v=>{if(typeof v==='number')return isFinite(v)?v:0;const n=parseFloat(String(v??'').replace(/,/g,'').trim());return isFinite(n)?n:0};
const p2=n=>String(n).padStart(2,'0');
const ymd=d=>d.getFullYear()+'-'+p2(d.getMonth()+1)+'-'+p2(d.getDate());
const vnd=s=>s?s.slice(8,10)+'/'+s.slice(5,7)+'/'+s.slice(0,4):'';
const vnm=s=>s?s.slice(5,7)+'/'+s.slice(0,4):'';
function pdate(v){if(v==null||v==='')return'';if(v instanceof Date)return isNaN(v)?'':ymd(v);
 if(typeof v==='number'){if(v>20000&&v<80000)return new Date(Math.round((Math.floor(v)-25569)*864e5)).toISOString().slice(0,10);return''}
 const s=String(v).trim();let m=/^(\d{4})[-\/.](\d{1,2})[-\/.](\d{1,2})/.exec(s);if(m)return m[1]+'-'+p2(m[2])+'-'+p2(m[3]);
 m=/^(\d{1,2})[-\/.](\d{1,2})[-\/.](\d{4})/.exec(s);if(m)return m[3]+'-'+p2(m[2])+'-'+p2(m[1]);return''}
const addDay=(s,n)=>{const d=new Date(s+'T12:00:00Z');d.setUTCDate(d.getUTCDate()+n);return d.toISOString().slice(0,10)};
const dayDiff=(a,b)=>Math.round((new Date(b+'T12:00:00Z')-new Date(a+'T12:00:00Z'))/864e5);
const mc=v=>{const s=String(v??'').trim();if(!s)return'';return /^\d+(\.0+)?$/.test(s)?String(Math.round(Number(s))).padStart(6,'0'):s.toUpperCase()};
const wait=ms=>new Promise(r=>setTimeout(r,ms)),tick=()=>new Promise(r=>setTimeout(r,0));
const ld=t=>{const e=$('#ld');if(t){e.textContent=trS(t);e.classList.add('on')}else e.classList.remove('on')};
function toast(t,ms=2600){ld(t);clearTimeout(toast.h);toast.h=setTimeout(()=>ld(''),ms)}
/* ----- định dạng tiền ----- */
const S={cfg:{...CFG0},unit:'USD',A:'',B:'',br:'',tab:'dash',admin:false,pw:'',lang:'vi'};
try{S.unit=localStorage.getItem('tts_unit')||'USD';S.lang=localStorage.getItem('tts_lang')||'vi'}catch(e){}
const rt=()=>S.unit==='USD'&&S.cfg.rate>0?S.cfg.rate:1;
const nf0=new Intl.NumberFormat('vi-VN',{maximumFractionDigits:0}),nf1=new Intl.NumberFormat('vi-VN',{maximumFractionDigits:1}),nf2=new Intl.NumberFormat('vi-VN',{maximumFractionDigits:2});
const F=v=>{const x=v/rt();return Math.abs(x)<10&&x!==0?nf2.format(x):nf0.format(x)};
const Q=v=>nf2.format(Math.round(v*100)/100);
function C(v){const x=v/rt(),a=Math.abs(x),vi=S.lang==='vi';return a>=1e9?nf2.format(x/1e9)+(vi?' tỷ':' B'):a>=1e6?nf2.format(x/1e6)+(vi?' tr':' M'):a>=1e3?nf1.format(x/1e3)+(vi?' N':' K'):nf0.format(x)}
const sg=(v,f=C)=>`<span class="${v>0.5?'up':v<-0.5?'dn':'mu'}">${v>0.5?'+':''}${f(v)}</span>`;
const pct=(a,b)=>b?((a-b)/Math.abs(b)*100):null;
const P=v=>v==null?'':(v>0?'+':'')+nf1.format(v)+'%';
const uName=()=>S.unit==='USD'?'USD':'gốc';
/* ----- SHA-256 gọn (dùng cho mật khẩu bản offline) ----- */
function sha256(str){const K=[],H=[];let p=2,n=0;const ip=x=>{for(let i=2;i*i<=x;i++)if(x%i==0)return 0;return 1},fr=x=>(x-(x|0))*4294967296|0;
 while(n<64){if(ip(p)){if(n<8)H[n]=fr(Math.pow(p,1/2));K[n++]=fr(Math.pow(p,1/3))}p++}
 const b=new TextEncoder().encode(str),l=b.length*8,w=[],m=new Uint8Array(((b.length+9+63)>>6)<<6);m.set(b);m[b.length]=0x80;const dv=new DataView(m.buffer);dv.setUint32(m.length-4,l);
 const h=H.slice(),r=(x,y)=>(x>>>y)|(x<<(32-y));
 for(let o=0;o<m.length;o+=64){for(let i=0;i<64;i++){if(i<16)w[i]=dv.getUint32(o+i*4);else{const a=w[i-15],c=w[i-2];w[i]=(w[i-16]+(r(a,7)^r(a,18)^(a>>>3))+w[i-7]+(r(c,17)^r(c,19)^(c>>>10)))|0}}
  let[a,bb,c,d,e,f,g,hh]=h;for(let i=0;i<64;i++){const t1=(hh+(r(e,6)^r(e,11)^r(e,25))+((e&f)^(~e&g))+K[i]+w[i])|0,t2=((r(a,2)^r(a,13)^r(a,22))+((a&bb)^(a&c)^(bb&c)))|0;hh=g;g=f;f=e;e=(d+t1)|0;d=c;c=bb;bb=a;a=(t1+t2)|0}
  h[0]=(h[0]+a)|0;h[1]=(h[1]+bb)|0;h[2]=(h[2]+c)|0;h[3]=(h[3]+d)|0;h[4]=(h[4]+e)|0;h[5]=(h[5]+f)|0;h[6]=(h[6]+g)|0;h[7]=(h[7]+hh)|0}
 return h.map(x=>(x>>>0).toString(16).padStart(8,'0')).join('')}
/* ----- nén ----- */
function b64e(buf){const u=new Uint8Array(buf);let s='';for(let i=0;i<u.length;i+=32768)s+=String.fromCharCode.apply(null,u.subarray(i,i+32768));return btoa(s)}
function b64d(s){const b=atob(s),u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i);return u}
async function gz(str){if(!window.CompressionStream)return'J'+str;const st=new Blob([str]).stream().pipeThrough(new CompressionStream('gzip'));return'G'+b64e(await new Response(st).arrayBuffer())}
async function ungz(v){if(!v)return null;if(v[0]==='J')return v.slice(1);const st=new Blob([b64d(v.slice(1))]).stream().pipeThrough(new DecompressionStream('gzip'));return new Response(st).text()}
/* ----- bộ nhớ máy (IndexedDB) ----- */
const IDB={db:null,async open(){if(this.db)return this.db;this.db=await new Promise((ok,no)=>{try{const r=indexedDB.open('tts_natcom',1);r.onupgradeneeded=()=>r.result.createObjectStore('kv');r.onsuccess=()=>ok(r.result);r.onerror=()=>ok(null)}catch(e){ok(null)}});return this.db},
 async op(m,k,v){const db=await this.open();if(!db)return m==='get'?(this.mem||{})[k]:void((this.mem=this.mem||{})[k]=v);return new Promise(ok=>{const t=db.transaction('kv',m==='get'?'readonly':'readwrite').objectStore('kv');const r=m==='get'?t.get(k):m==='del'?t.delete(k):t.put(v,k);r.onsuccess=()=>ok(r.result);r.onerror=()=>ok(null)})},
 get(k){return this.op('get',k)},set(k,v){return this.op('set',k,v)},del(k){return this.op('del',k)},
 async keys(){const db=await this.open();if(!db)return Object.keys(this.mem||{});return new Promise(ok=>{const r=db.transaction('kv').objectStore('kv').getAllKeys();r.onsuccess=()=>ok(r.result);r.onerror=()=>ok([])})}};
/* ----- lưu trữ: Google Sheet (Apps Script) + bộ nhớ máy ----- */
const ST={mode:'local',api:'',remote:{},online:false,pending:0,last:'',err:'',
 async init(){try{this.api=localStorage.getItem('tts_api')||''}catch(e){}if(!this.api&&DEFAULT_API.startsWith('http'))this.api=DEFAULT_API;
  if(window.google&&google.script&&google.script.run)this.mode='gas';else if(this.api)this.mode='api';
  await this.refresh()},
 rpc(req){if(this.mode==='gas')return new Promise((ok,no)=>google.script.run.withSuccessHandler(s=>ok(JSON.parse(s))).withFailureHandler(no).api(JSON.stringify(req)));
  return fetch(this.api,{method:'POST',body:JSON.stringify(req)}).then(r=>r.json())},
 async refresh(){if(this.mode==='local'){this.online=false;return}
  try{const r=await this.rpc({op:'list'});if(r.ok){this.remote=r.keys||{};this.online=true;this.err=''}else throw Error(r.err)}catch(e){this.online=false;this.err=String(e.message||e)}
  await this.flush()},
 async get(k){const loc=await IDB.get(k),rem=this.remote[k];
  /* lấy bản trên Google Sheet nếu mới hơn; bản sửa trên máy chưa gửi chỉ được giữ khi đang là admin */
  if(this.online&&rem&&(!loc||loc.u<rem.u||(loc.d&&!S.admin))){try{const r=await this.rpc({op:'get',key:k});if(r.ok&&r.v){await IDB.set(k,{v:r.v,u:r.u,b:r.u});return JSON.parse(await ungz(r.v))}}catch(e){this.err=String(e)}}
  return loc?JSON.parse(await ungz(loc.v)):null},
 async set(k,obj){const v=await gz(JSON.stringify(obj)),u=Date.now(),old=await IDB.get(k);
  /* b = phiên bản Google Sheet mà bản sửa này dựa trên, để không ghi đè dữ liệu mới hơn của người khác */
  const b=old?(old.b??(old.d?0:old.u)):0;await IDB.set(k,{v,u,d:1,b});
  if(this.mode!=='local')await this.push(k);svUpd()},
 async push(k){const loc=await IDB.get(k);if(!loc||!loc.d)return true;
  /* bản trên Google Sheet mới hơn bản sửa trên máy: bỏ bản trên máy, không ghi đè */
  const rem=this.remote[k];if(rem&&rem.u>(loc.b||0)){await IDB.del(k);this.conflict=(this.conflict||0)+1;return true}
  if(!S.admin)return false;
  let r;try{r=await this.rpc({op:'set',key:k,v:loc.v,pw:S.pw})}catch(e){this.err=String(e.message||e);this.online=false;return false}
  if(!r.ok){this.err=r.err||'lỗi';return false}
  try{await IDB.set(k,{v:loc.v,u:r.u||loc.u,b:r.u||loc.u});this.remote[k]={u:r.u||loc.u};this.online=true;this.last=new Date().toLocaleTimeString('vi-VN');return true}
  catch(e){this.err=String(e.message||e);return false}},
 async flush(){if(this.mode==='local')return;let n=0;for(const k of await IDB.keys()){const l=await IDB.get(k);if(l&&l.d){if(!(await this.push(k)))n++}}this.pending=n;svUpd()},
 async del(k){await IDB.del(k);if(this.mode!=='local'){try{await this.rpc({op:'del',key:k,pw:S.pw})}catch(e){}}}};
async function svUpd(){let n=0;for(const k of await IDB.keys()){const l=await IDB.get(k);if(l&&l.d)n++}ST.pending=n;
 const d=$('#svd'),t=$('#svt'),s=$('#svs');
 if(ST.mode==='local'){d.className='dot wa';t.textContent='Bản offline · lưu trên máy';s.textContent=n?n+' mục chưa đồng bộ (chưa có link Google Sheet)':'Dữ liệu chỉ trên máy này'}
 else if(ST.online&&(!n||!S.admin)){d.className='dot ok';t.textContent='Đã nối Google Sheet';s.textContent=ST.last?'Lần lưu gần nhất '+ST.last:'Đã kết nối'}
 else{d.className='dot '+(ST.online?'wa':'er');t.textContent=ST.online?'Đang chờ đồng bộ':'Mất kết nối Google Sheet';s.textContent=(n?n+' mục chờ gửi. ':'')+(ST.err?ST.err.slice(0,80):'')}}
/* ----- tra mã tủ → trạm → chi nhánh ----- */
const NB=b=>{b=String(b??'').trim().toUpperCase();return({OUE1:'OUE01',OUE2:'OUE02',OUE3:'OUE03',NATCOM:'NATCOM','':''})[b]??b};
const TT='TỔNG TRẠM',RT='Tuyến ';
const KP=['OUE','ART','NOR','NET','NOT','SUD','GRA','CEN','NIP','SET'],P2={NO:'NOT',SU:'SUD',NR:'NOR',NE:'NET',GR:'GRA',OU:'OUE',NI:'NIP',AR:'ART',CE:'CEN',SE:'SET',O:'OUE'};
const cl=c=>String(c??'').trim().toUpperCase().replace(/\s+/g,' ').replace(/[.,; ]+$/,'');
let R={cab:new Map(),site:new Map(),cfg:new Map(),fix:new Map(),pf:new Map(),memo:new Map(),gks:new Set(),ver:0};
let GKROWS=null;
function buildR(M){R={cab:new Map(),site:new Map(),cfg:new Map(),fix:new Map(),pf:new Map(),memo:new Map(),gks:new Set(),ver:(R.ver||0)+1};M=M||{};
 for(const[s,c,b]of M.mau||[]){const bb=NB(b);R.cab.set(cl(c),[s,bb]);if(!R.site.has(s))R.site.set(s,bb)}
 for(const[s,b,cabs,cfg]of M.ds||[]){const bb=NB(b);R.site.set(s,bb);R.cab.set(s,[s,bb]);if(cfg)R.cfg.set(s,cfg);for(const c of cabs||[])R.cab.set(cl(c),[s,bb])}
 for(const[raw,s,b]of M.fix||[]){const bb=NB(b);R.fix.set(cl(raw),[s,bb]);if(!R.site.has(s))R.site.set(s,bb)}
 /* bổ sung từ file giao khoán (cột A/B/E mã trạm, cột F chi nhánh): chỉ dùng cho mã chưa có ở trên */
 for(const r of GKROWS||[]){const b=NB(r[6]);if(!BRS.includes(b))continue;const s=r[0]||r[1];if(!/^[A-Z]{2,4}\d{3,4}$/.test(s)||/STOCK/i.test(s))continue;if(!R.site.has(s)){R.site.set(s,b);R.gks.add(s)}for(const c of[r[0],r[1],r[2]])if(c&&!R.cab.has(c)&&!R.fix.has(c)&&!(R.site.has(c)&&c!==s))R.cab.set(c,[s,R.site.get(s)])}
 for(const[s,b]of R.site){if(!b||b==='NATCOM')continue;const p=(/^[A-Z]+/.exec(s)||[''])[0],d=R.pf.get(p)||{};d[b]=(d[b]||0)+1;R.pf.set(p,d)}}
function toSite(t){const m=/^\d?([A-Z]{1,4}?)(\d{2,4})[BR]?$/.exec(t);if(!m)return null;let p=m[1];if(!KP.includes(p))p=P2[p];return p?p+m[2]:null}
const toks=c=>(c.match(/NAT_TT\d+/g)||[]).concat(c.replace(/NAT_TT\d+/g,' ').split(/[\s\-\/,;_()]+/).filter(Boolean));
function predBr(s){const p=(/^[A-Z]+/.exec(s)||[''])[0],d=R.pf.get(p);if(!d)return'';let b='',n=0,t=0;for(const k in d){t+=d[k];if(d[k]>n){n=d[k];b=k}}return n/t>=.9?b:''}
/* trả về {s:trạm, b:chi nhánh, k:'ok'|'tt'|'route'|'guess'|'unk'} ; gb = chi nhánh gợi ý từ file (nhóm, kho, đơn vị nhận) */
function res(raw,gb){const key=raw+'|'+(gb||'');let o=R.memo.get(key);if(o!==undefined)return o;o=res0(raw,gb||'');R.memo.set(key,o);return o}
function res0(raw,gb){const c=cl(raw);if(!c)return null;
 let h=R.fix.get(c);if(h)return{s:h[0],b:h[1],k:'ok'};
 const nt=[...new Set(c.match(/NAT_TT\d+/g)||[])];if(nt.length===1)return{s:nt[0],b:TT,k:'tt'};
 h=R.cab.get(c);if(h)return{s:h[0],b:h[1],k:'ok'};if(R.site.has(c))return{s:c,b:R.site.get(c),k:'ok'};
 const o=new Map(),sq=[];
 for(const t of toks(c)){let r=R.fix.get(t)||R.cab.get(t)||(R.site.has(t)?[t,R.site.get(t)]:null);const s=toSite(t);if(!r&&s&&R.site.has(s))r=[s,R.site.get(s)];if(r)o.set(r[0],r);const k=r?r[0]:s;if(k&&!sq.includes(k))sq.push(k)}
 if(sq.length>=2&&o.size)return{s:RT+[...sq].sort().join('-'),b:(o.get(sq[0])||[...o.values()][0])[1],k:'route'};
 if(o.size===1){const v=[...o.values()][0];return{s:v[0],b:v[1],k:'ok'}}
 const ps=[];for(const t of toks(c)){const s=/^NAT_TT\d+$/.test(t)?t:toSite(t)||(/^[A-Z]{3}\d{3,4}$/.test(t)?t:null);if(s&&!ps.includes(s))ps.push(s)}
 if(ps.length)return{s:(ps.length>1?RT+ps.slice().sort().join('-'):ps[0])+'*',b:predBr(ps[0])||gb||'?',k:'guess'};
 return{s:c,b:gb||'?',k:'unk'}}
/* kho → chi nhánh */
function whBr(n){const s=String(n||'').toLowerCase().replace(/_/g,' ');if(!s)return'';
 if(/dumez|madeline|natcom company|head office|company'|kcs|stocks?\.?\s*noc|\bnoc\b|liquidat|thanh l/.test(s))return'CTY';
 if(/nord ouest|\bnot\b|^not[_ ']/.test(s))return'NOT';
 if(/ouest ?1\b|oue0?1\b|ouest1/.test(s))return'OUE01';if(/ouest ?2\b|oue0?2\b|ouest2/.test(s))return'OUE02';if(/ouest ?3\b|oue0?3\b|ouest3/.test(s))return'OUE03';
 if(/artibonite|\bart\b|^art[_ ']/.test(s))return'ART';if(/centre|\bcen\b|^cen[_ ']/.test(s))return'CEN';if(/\bsud\b|^sud[_ ']/.test(s))return'SUD';if(/\bnord\b|\bnor\b|^nor[_ ']/.test(s))return'NOR';
 if(/natcom/.test(s))return'CTY';return'?'}
const grpBr=g=>{const m=/(OUE0?[123]|ART|CEN|NORD?|NOT|SUD)\b/i.exec(String(g||'').replace(/_/g,' '));if(!m)return'';const x=m[1].toUpperCase();return x==='NORD'?'NOR':NB(x.replace(/^OUE([123])$/,'OUE0$1'))};
/* số quyết định (DC) và PO */
const DCR=/\b(20\d{2})_(\d{5,7})\b(?:\s*[\/ ]\s*([A-Z]{2,3}-[A-Z0-9_]+))?/i,POR=/\b(?:PO\d?|contract no:?|DC)\s*[:\-–]?\s*(\d{2,6}\/20\d{2}\/[A-Z0-9\-\/]+)/i;
function dcOf(...t){const s=t.filter(Boolean).join(' ');let m=DCR.exec(s);if(m)return[m[1]+'_'+m[2],(m[3]||'').toUpperCase()];m=POR.exec(s);if(m)return['PO '+m[1].toUpperCase(),''];return['','']}
/* mã tương đương: mã → nhóm */
let EQ=new Map();function buildEQ(){EQ=new Map();for(const g of S.cfg.eq||[])for(const c of g)EQ.set(mc(c),g.map(mc))}
const eqc=c=>EQ.get(c)||[c];

/* tên kho gọn */
function whShort(n){const s=String(n||'').trim();const m=/madeline/i.test(s)?'Madeline '+(/rotational/i.test(s)?'luân chuyển':/new/i.test(s)?'mới':''):/dumez/i.test(s)?'Kho Dumez':'';if(m)return m;
 const p=s.split(/[\\\/]/).map(x=>x.trim()).filter(Boolean);let t=p.length>1?p[p.length-1]:s;t=t.replace(/^Kho\s+/i,'Kho ').replace(/^Stocks?\.?\s*/i,'');return t.length>34?t.slice(0,33)+'…':t}

/* ===== Dữ liệu ===== */
const D={idx:{snaps:[],cov:{x:[],w:[]},months:{x:[],w:[]},locks:[],plans:[],dcs:{},log:[],upd:0},master:null,snaps:{},mov:{},plans:{},norm:null,names:{},gk:null,gkmap:{}};
const IDX0=()=>({snaps:[],cov:{x:[],w:[]},months:{x:[],w:[]},locks:[],plans:[],dcs:{},log:[],upd:0});
async function loadSnap(d){if(!d)return null;if(!D.snaps[d])D.snaps[d]=await ST.get('snap:'+d);return D.snaps[d]}
async function loadMov(t,ym){const k=t+':'+ym;if(!(k in D.mov))D.mov[k]=await ST.get('mov:'+k);return D.mov[k]}
async function loadPlan(dc){if(!(dc in D.plans))D.plans[dc]=await ST.get('plan:'+dc);return D.plans[dc]}
const monthsBetween=(a,b)=>{const o=[];let y=+a.slice(0,4),m=+a.slice(5,7);const ey=+b.slice(0,4),em=+b.slice(5,7);while(y<ey||(y===ey&&m<=em)){o.push(y+'-'+p2(m));if(++m>12){m=1;y++}}return o};
/* dòng phiếu trong khoảng (a,b] */
async function movIn(t,a,b){const out=[];if(!b)return out;const ms=D.idx.months[t].filter(m=>(!a||m>=a.slice(0,7))&&m<=b.slice(0,7));
 for(const m of ms){const doc=await loadMov(t,m);if(!doc)continue;for(const l of doc.l)if((!a||l[0]>a)&&l[0]<=b)out.push(l)}return out}
/* tỷ lệ ngày có phiếu trong (a,b] */
function coverage(t,a,b){if(!a||!b||b<=a)return{p:0,miss:[]};const n=dayDiff(a,b);let c=0;const miss=[];let ms=null;
 for(let i=1;i<=n;i++){const d=addDay(a,i);const ok=D.idx.cov[t].some(r=>d>=r[0]&&d<=r[1]);if(ok){c++;if(ms){miss.push([ms,addDay(d,-1)]);ms=null}}else if(!ms)ms=d}
 if(ms)miss.push([ms,b]);return{p:c/n,miss}}
/* ===== Đọc file ===== */
async function readWB(f){return XLSX.read(await f.arrayBuffer(),{type:'array',cellDates:false,dense:true,cellStyles:false,cellHTML:false})}
const rows=ws=>XLSX.utils.sheet_to_json(ws,{header:1,raw:true,defval:''});
const lc=v=>String(v??'').replace(/\s+/g,' ').trim().toLowerCase();
function hdrAt(rs,must,lim=25){for(let i=0;i<Math.min(lim,rs.length);i++){const h=rs[i].map(lc);if(must.every(m=>h.includes(m)))return i}return -1}
function objRows(rs,hi){const h=rs[hi].map(lc);return rs.slice(hi+1).map(r=>{const o={};h.forEach((k,j)=>{if(k&&!(k in o))o[k]=r[j]});return o})}
const CODE_CELL=/^\s*\d{5,6}(\s*[\n,;\/]+\s*\d{5,6})*\s*$/;
async function detect(f){const n=f.name.toLowerCase();
 if(n.endsWith('.csv')){const head=lc(await f.slice(0,4000).text());if(head.includes('cat_mer_code')&&head.includes('count'))return{t:'asset'};
  if(head.includes('cabinet code')&&head.includes('site'))return{t:'mau'};return{t:'?',why:'CSV không có cột CAT_MER_CODE/COUNT hoặc site/cabinet code'}}
 if(!/\.(xlsx|xlsm|xls|xlsb)$/.test(n))return{t:'?',why:'Không phải file Excel/CSV'};
 const wb=await readWB(f);
 for(const sn of wb.SheetNames){const rs=rows(wb.Sheets[sn]);
  if(hdrAt(rs,['station code','staff name'])>=0)return{t:'gk',wb,sn,rs};
  if(hdrAt(rs,['stock out','equipment code'])>=0)return{t:'x',wb,sn,rs};
  if(hdrAt(rs,['stock import','equipment code'])>=0)return{t:'w',wb,sn,rs};
  if(/ma_chua_gan/i.test(sn)||hdrAt(rs,['mã trong file'])>=0)return{t:'sup',wb,sn:wb.SheetNames.find(s=>/ma_chua_gan/i.test(s))||sn};
  if(rs.slice(0,8).some(r=>r.some(c=>/định mức|dinh muc|\bnorm\b/i.test(String(c)))))return{t:'norm',wb,sn,rs};
  if(hdrAt(rs,['site','cabinet code','branch'])>=0)return{t:'mau',wb,sn,rs};
  if(hdrAt(rs,['site','branch'])>=0&&rs.slice(0,6).some(r=>r.some(c=>/^(2g|3g|4g|radio config)$/i.test(String(c).trim()))))return{t:'ds',wb,sn,rs}}
 for(const sn of wb.SheetNames){const rs=rows(wb.Sheets[sn]);for(let i=0;i<Math.min(12,rs.length);i++){if(rs[i].filter(c=>CODE_CELL.test(String(c))).length>=3)return{t:'plan',wb}}}
 return{t:'?',why:'Không nhận ra loại file (không thấy tiêu đề cột quen thuộc)'}}
const LBL={asset:'Tổng tài sản trạm',x:'Tổng xuất',w:'Thu hồi (Import)',ds:'Danh sách trạm',mau:'Mau_Tram_Tu',sup:'Bổ sung mã chưa gán',plan:'Kế hoạch',norm:'Định mức',gk:'Giao khoán trạm','?':'Không nhận ra'};
const ORDER={ds:1,mau:2,sup:3,norm:4,gk:4.5,asset:5,x:6,w:7,plan:8,'?':9};
/* --- danh sách trạm --- */
function parseDS(rs){const hi=hdrAt(rs,['site','branch']);const h0=rs[hi].map(lc),h1=(rs[hi+1]||[]).map(lc);const col=k=>{let i=h0.indexOf(k);if(i<0)i=h1.indexOf(k);return i};
 const cs=col('site'),cb=col('branch'),cp=col('position'),cg=['2g','3g','4g','5g'].map(col).filter(i=>i>=0),cc=col('radio config');
 const out=[],seen=new Map(),bad=[],dup=[];
 for(const r of rs.slice(hi+1)){const s=cl(r[cs]);if(!s||/^(site|2g)$/i.test(s))continue;const b=NB(r[cb]);
  const cabs=new Set();for(const i of cg){const v=cl(r[i]);if(v&&v!=='0')cabs.add(v)}if(cp>=0){const v=cl(r[cp]);if(v&&v!=='0')cabs.add(v)}if(cs+1!==cb&&cs+1!==cp){const v=cl(r[cs+1]);if(v&&/^[A-Z]{2,4}\d{3,5}$/.test(v))cabs.add(v)}
  if(!BRS.includes(b)&&b!=='NATCOM')bad.push(s+' ('+r[cb]+')');if(seen.has(s))dup.push(s);seen.set(s,b);out.push([s,b,[...cabs],cc>=0?String(r[cc]||''):''])}
 const L=[],lvl=bad.length?'warn':'ok';const by={};out.forEach(r=>by[r[1]]=(by[r[1]]||0)+1);
 L.push(['ok',`${out.length.toLocaleString('vi-VN')} trạm · `+Object.entries(by).map(([k,v])=>k+' '+v).join(', ')]);
 L.push(['ok',`${out.reduce((a,r)=>a+r[2].length,0).toLocaleString('vi-VN')} mã tủ 2G/3G/4G/5G`]);
 if(dup.length)L.push(['warn',`${dup.length} trạm lặp dòng (giữ dòng sau): ${[...new Set(dup)].slice(0,8).join(', ')}`]);
 if(bad.length)L.push(['warn',`${bad.length} trạm có chi nhánh lạ: ${bad.slice(0,8).join(', ')}`]);
 return{data:out,lvl,L}}
/* --- Mau_Tram_Tu --- */
function parseMau(rs){const hi=hdrAt(rs,['site','cabinet code','branch']);const h=rs[hi].map(lc),cs=h.indexOf('site'),cc=h.indexOf('cabinet code'),cb=h.indexOf('branch');
 const out=[];let dirty=0;const cab=new Map(),conf=new Set();
 for(const r of rs.slice(hi+1)){const s=cl(r[cs]),raw=String(r[cc]??''),c=cl(raw);if(!s||!c)continue;if(raw!==raw.trim()||/[.,;]\s*$/.test(raw.trim()))dirty++;const b=NB(r[cb]);
  if(cab.has(c)&&cab.get(c)!==b)conf.add(c);cab.set(c,b);out.push([s,c,b])}
 const L=[['ok',`${out.length.toLocaleString('vi-VN')} dòng mã tủ → trạm → chi nhánh`]];
 if(dirty)L.push(['ok',`Tự sửa ${dirty} mã tủ dính dấu cách/dấu chấm/dấu phẩy`]);
 if(conf.size)L.push(['warn',`${conf.size} mã tủ bị gán 2 chi nhánh: ${[...conf].slice(0,8).join(', ')}`]);
 L.push(['ok','Dùng bổ sung: mã nào đã có trong Danh sách trạm thì lấy theo Danh sách trạm']);
 return{data:out,lvl:conf.size?'warn':'ok',L}}
/* --- bổ sung mã chưa gán --- */
function parseSup(wb,sn){const rs=rows(wb.Sheets[sn]);const hi=hdrAt(rs,['mã trong file']);if(hi<0)return{lvl:'err',L:[['err','Không thấy cột "Mã trong file"']]};
 const h=rs[hi].map(lc),ci=h.indexOf('mã trong file'),cs=h.findIndex(x=>x.startsWith('trạm')),cb=h.findIndex(x=>x.startsWith('chi nhánh (anh')),cg=h.findIndex(x=>x.startsWith('chi nhánh gợi'));
 const ok=[],L=[],errs=[];let skip=0;
 rs.slice(hi+1).forEach((r,i)=>{const raw=cl(r[ci]);if(!raw)return;const b=NB(r[cb]||'');if(!b){skip++;return}
  if(!BRS.includes(b)&&b!=='NATCOM'){errs.push(`Dòng ${hi+i+2}: ${raw} – chi nhánh "${r[cb]}" không hợp lệ`);return}
  let s=cl(r[cs]||'').replace(/\*$/,'');if(!s)s=raw;ok.push([raw,s,b])});
 L.push([ok.length?'ok':'warn',`${ok.length} mã hợp lệ sẽ được thêm vào danh sách trạm`]);if(skip)L.push(['warn',`${skip} mã chưa điền chi nhánh (bỏ qua)`]);
 errs.slice(0,15).forEach(e=>L.push(['err',e]));if(errs.length>15)L.push(['err',`… và ${errs.length-15} lỗi khác`]);
 return{data:ok,lvl:errs.length?(ok.length?'warn':'err'):ok.length?'ok':'warn',L,errs}}
/* --- định mức --- */
function parseNorm(rs){let hi=-1;for(let i=0;i<10&&i<rs.length;i++){const h=rs[i].map(lc);if(h.some(x=>/định mức|dinh muc|norm/.test(x))&&h.some(x=>/mã hàng|ma hang|code/.test(x))){hi=i;break}}
 if(hi<0)return{lvl:'err',L:[['err','Cần các cột: Loại trạm (hoặc Mã trạm), Mã hàng, Định mức']]};
 const h=rs[hi].map(lc),cq=h.findIndex(x=>/định mức|dinh muc|norm/.test(x)),cc=h.findIndex(x=>/mã hàng|ma hang|code/.test(x)),ct=h.findIndex(x=>/loại|loai|type|config|cấu hình/.test(x)),cs=h.findIndex(x=>/mã trạm|ma tram|site|trạm/.test(x)&&!/loại/.test(x)),cn=h.findIndex(x=>/tên hàng|ten hang|name/.test(x));
 const out=[];for(const r of rs.slice(hi+1)){const c=mc(r[cc]),q=num(r[cq]);if(!c||!q)continue;const key=cs>=0&&String(r[cs]).trim()?'S:'+cl(r[cs]):'T:'+String(ct>=0?r[ct]:'*').trim().toUpperCase().replace(/\s+/g,'');out.push([key,c,q,cn>=0?String(r[cn]||''):''])}
 return{data:out,lvl:out.length?'ok':'err',L:[[out.length?'ok':'err',`${out.length} dòng định mức`]]}}
/* --- tổng tài sản trạm (CSV rất lớn, đọc theo luồng) --- */
function csvSplit(s){const o=[];let cur='',q=false;for(let i=0;i<s.length;i++){const ch=s[i];if(q){if(ch==='"'){if(s[i+1]==='"'){cur+='"';i++}else q=false}else cur+=ch}else if(ch==='"')q=true;else if(ch===','){o.push(cur);cur=''}else cur+=ch}o.push(cur);return o}
async function streamCsv(f,onRow,prog){const rd=f.stream().getReader(),dec=new TextDecoder('windows-1252');let rest='',pend='',h=null,n=0,t0=Date.now(),got=0;
 const line=s=>{if(s.endsWith('\r'))s=s.slice(0,-1);if(pend){s=pend+'\n'+s;pend=''}if((s.split('"').length-1)%2){pend=s;return}if(!h){h=csvSplit(s.replace(/^﻿|^ï»¿/,'')).map(x=>x.trim().toLowerCase());return}if(!s)return;const a=csvSplit(s),o={};for(let j=0;j<h.length;j++)o[h[j]]=a[j];onRow(o);n++};
 for(;;){const{done,value}=await rd.read();if(value)got+=value.length;const ch=rest+(done?dec.decode():dec.decode(value,{stream:true})),ps=ch.split('\n');rest=done?'':ps.pop();for(const s of ps)line(s);if(done){if(rest)line(rest);break}
  if(Date.now()-t0>700){t0=Date.now();prog&&prog(got/f.size,n);await tick()}}return h}
async function parseAsset(f,prog){const A=new Map(),M=new Map(),G={},names={};let n=0,liq=0,nost=0,st=0,t=0,tv=0,d='',nmgr=0,dates=new Map();
 const onRow=r=>{n++;const q=num(r['count']),v=q*num(r['unit_price']);tv+=v;const ds=r['insert_date'];if(ds&&dates.size<5)dates.set(ds,(dates.get(ds)||0)+1);
  if(/liquidat|thanh l/i.test(String(r['status_name']||''))){liq++;return}
  const raw=String(r['cabinet_code']||r['station_code']||r['node_code']||'').trim();if(!raw){nost++;return}const c=mc(r['cat_mer_code']);if(!c||!q)return;st++;t+=v;
  const k=raw+'\t'+c,o=A.get(k);if(o){o[2]+=q;o[3]+=v}else A.set(k,[raw,c,q,v]);
  if(!(raw in G)){const g=grpBr(r['group_code'])||grpBr(r['group_name']);G[raw]=g}
  const mg=String(r['manager_name']||'').trim();if(mg)nmgr++;const mk=mg+'\t'+raw;M.set(mk,(M.get(mk)||0)+v);
  if(!names[c])names[c]=[String(r['cat_mer_name']||''),String(r['unit_name']||'')]};
 const h=await streamCsv(f,onRow,prog);
 if(!h||!h.includes('count'))return{lvl:'err',L:[['err','File không có cột COUNT/CAT_MER_CODE']]};
 const dd=[...dates.keys()].map(pdate).filter(Boolean);d=dd[0]||'';
 const a=[...A.values()].map(r=>[r[0],r[1],Math.round(r[2]*1000)/1000,Math.round(r[3]*100)/100]);
 const m=[...M].map(([k,v])=>{const[g,raw]=k.split('\t');return[g,raw,Math.round(v*100)/100]});
 /* kiểm tra */
 const L=[],un=new Map();let unv=0,ttv=0;
 for(const r of a){const z=res(r[0],G[r[0]]);if(!z)continue;if(z.b===TT)ttv+=r[3];if(z.k==='guess'||z.k==='unk'){unv+=r[3];un.set(r[0],(un.get(r[0])||0)+r[3])}}
 let lvl='ok';if(!d){lvl='err';L.push(['err','Không đọc được ngày chốt (cột INSERT_DATE)'])}else L.push(['ok','Ngày chốt: '+vnd(d)]);
 if(D.idx.locks.includes(d)){lvl='err';L.push(['err','Kỳ '+vnd(d)+' đã khóa sổ. Mở khóa ở tab Nạp dữ liệu nếu cần nạp lại.'])}
 L.push(['ok',`${n.toLocaleString('vi-VN')} dòng · tổng giá trị ${C(tv)} ${uName()}`]);
 L.push(['ok',`Tại trạm: ${st.toLocaleString('vi-VN')} dòng · ${C(t)} (trong đó tổng trạm NAT_TT ${C(ttv)})`]);
 L.push(['info',`Bỏ qua ${liq.toLocaleString('vi-VN')} dòng đã thanh lý, ${nost.toLocaleString('vi-VN')} dòng không có mã trạm (hàng trong kho, cấp nhân viên)`]);
 L.push([nmgr?'ok':'warn',nmgr?`Có người quản lý: ${new Set(m.map(x=>x[0]).filter(Boolean)).size} nhân viên`:'Không có cột MANAGER_NAME: tab Nhân viên sẽ trống']);
 if(un.size){if(lvl==='ok')lvl='warn';L.push(['warn',`${un.size} mã trạm chưa có trong danh sách (${C(unv)}, ${nf1.format(unv/t*100)}%). Xem tab Mã chưa gán.`])}
 return{data:{d,file:f.name,a,m,g:G,n,tot:t},names,lvl,L}}
/* --- phiếu xuất / thu hồi --- */
const SKIP_X=/transfer|chuyển kho|lost|mất an toàn|internal|nội bộ|debit|báo nợ|customer|khách hàng|warranty|bảo hành/i;
function periodOf(rs){for(const r of rs.slice(0,12))for(const c of r){const m=/from date\s*(\d+)\s*month\s*(\d+)\s*year\s*(\d{4})\s*to date\s*(\d+)\s*month\s*(\d+)\s*year\s*(\d{4})/i.exec(String(c));
 if(m)return[m[3]+'-'+p2(m[2])+'-'+p2(m[1]),m[6]+'-'+p2(m[5])+'-'+p2(m[4])]}return null}
function parseMov(t,rs){const hi=hdrAt(rs,[t==='x'?'stock out':'stock import','equipment code']);const R0=objRows(rs,hi);
 const K=t==='x'?{wh:'stock out',d:'date out',q:'quantity real export',v:'cash total',st:'construction code',gr:'group receiver',why:'reason',note:'interpretation'}
  :{wh:'stock import',d:'date import',q:'quantity real import',v:'cash total',st:'withdraw from station',gr:'withdraw from unit',why:'reason',note:'interpretation'};
 const per=periodOf(rs),out=new Map(),names={},whs=new Map(),depts={},badD=[],byWhy=new Map();let n=0,tv=0,skipV=0,nostV=0,stV=0,ttV=0,dcV=0,unV=0,dmin='9',dmax='0';const un=new Map();
 for(const r of R0){const c=mc(r['equipment code']);const wh=String(r[K.wh]??'').trim();if(!c||!wh)continue;n++;
  const q=num(r[K.q]),v=num(r[K.v]);tv+=v;const why=String(r[K.why]||'').trim(),note=String(r[K.note]||'');
  const d=pdate(r[K.d]);if(!d){badD.push(n);continue}if(d<dmin)dmin=d;if(d>dmax)dmax=d;
  if(!names[c])names[c]=[String(r['equipment name']||''),String(r['unit']||'')];
  byWhy.set(why.slice(0,70),(byWhy.get(why.slice(0,70))||0)+v);
  if(t==='x'&&SKIP_X.test(why)){skipV+=v;continue}
  const raw=String(r[K.st]??'').trim();if(!raw){nostV+=v;continue}
  const gb=grpBr(r[K.gr])||(()=>{const b=whBr(wh);return b==='CTY'||b==='?'?'':b})();
  const[dc,dep]=dcOf(note,t==='w'?why:'',String(r['export request']||''));if(dc&&dep)depts[dc]=dep;
  const z=res(raw,gb);stV+=v;if(z&&z.b===TT)ttV+=v;if(dc&&!dc.startsWith('PO'))dcV+=v;if(z&&(z.k==='guess'||z.k==='unk')){unV+=v;un.set(cl(raw),(un.get(cl(raw))||0)+v)}
  whs.set(wh,whBr(wh));
  const k=[d,raw,c,wh,dc,gb].join('\t'),o=out.get(k);if(o){o[3]+=q;o[4]+=v}else out.set(k,[d,raw,c,q,v,wh,dc,gb])}
 const lines=[...out.values()].map(l=>{l[3]=Math.round(l[3]*1000)/1000;l[4]=Math.round(l[4]*100)/100;return l});
 const cov=per||(n?[dmin,dmax]:null);const L=[];let lvl='ok';
 if(!n)return{lvl:'err',L:[['err','Không có dòng dữ liệu nào']]};
 L.push(['ok',`${n.toLocaleString('vi-VN')} dòng · ${cov?vnd(cov[0])+' → '+vnd(cov[1]):''}${per?'':' (lấy theo ngày nhỏ/lớn nhất)'} · tổng ${C(tv)} ${uName()}`]);
 if(badD.length){lvl='warn';L.push(['warn',`${badD.length} dòng không đọc được ngày (bỏ qua)`])}
 if(t==='x')L.push(['info',`Bỏ chuyển kho, mất tài sản, xuất nội bộ, bảo hành: ${C(skipV)}`]);
 L.push(['ok',`${t==='x'?'Xuất ra trạm':'Thu hồi từ trạm'}: ${C(stV)}${ttV?` (tổng trạm NAT_TT ${C(ttV)})`:''}${nostV?` · không có mã trạm ${C(nostV)}`:''}`]);
 const dcp=stV-ttV>0?dcV/(stV-ttV)*100:0;L.push([dcp>=60?'ok':'warn',`Đọc được số quyết định (DC) cho ${nf1.format(dcp)}% giá trị (không tính tổng trạm)`]);
 if(un.size){lvl='warn';L.push(['warn',`${un.size} mã trạm chưa có trong danh sách (${C(unV)}). Xem tab Mã chưa gán.`])}
 const ukw=[...whs].filter(([,b])=>b==='?').map(([w])=>w);if(ukw.length)L.push(['warn',`${ukw.length} kho chưa nhận ra chi nhánh: ${ukw.slice(0,4).join('; ')}`]);
 if(cov&&cov[1]<monthEnd(cov[1]))L.push(['info',`Tháng ${vnm(cov[1])} mới có đến ngày ${cov[1].slice(8)}: nạp file đủ tháng sau sẽ thay phần trùng ngày`]);
 return{data:{t,lines,cov,depts},names,lvl,L}}
const monthEnd=s=>{const d=new Date(Date.UTC(+s.slice(0,4),+s.slice(5,7),0));return d.toISOString().slice(0,10)};
/* --- kế hoạch --- */
function parsePlan(wb){let best=null;
 for(const sn of wb.SheetNames){const rs=rows(wb.Sheets[sn]);
  for(let r=0;r<Math.min(15,rs.length);r++){const cols=[];rs[r].forEach((c,j)=>{if(CODE_CELL.test(String(c)))cols.push(j)});if(cols.length<3)continue;
   /* cột mã tủ: cột có nhiều giá trị khớp danh sách trạm nhất */
   const cnt=new Map();const body=rs.slice(r+1,r+500);
   for(const row of body)row.forEach((c,j)=>{if(cols.includes(j))return;const v=cl(c);if(!v||v.length<4)return;if(R.cab.has(v)||R.site.has(v))cnt.set(j,(cnt.get(j)||0)+1)});
   let cc=-1,cn=0;for(const[j,n]of cnt)if(n>cn||(n===cn&&j>cc)){cc=j;cn=n}
   if(cc<0)continue;const sc=cn*10+cols.length;if(!best||sc>best.sc)best={sc,sn,rs,r,cols,cc,cn}}}
 if(!best)return{lvl:'err',L:[['err','Không tìm thấy dòng mã hàng (≥3 ô mã 6 số) và cột mã tủ khớp danh sách trạm']]};
 const{sn,rs,r,cols,cc}=best;
 const nameOf=j=>{for(let i=r-1;i>=0;i--){const v=String(rs[i][j]??'').trim();if(v&&!/^\d+([.,]\d+)?$/.test(v))return v}return''};
 const items=cols.map(j=>{const n=nameOf(j),codes=String(rs[r][j]).split(/[\n,;\/]+/).map(mc).filter(Boolean);return{j,n,codes,dir:/recall/i.test(n)?'w':'x',ex:codes.some(c=>(S.cfg.excl||[]).includes(c))}});
 const prow=[],miss=[];
 for(const row of rs.slice(r+1)){const cab=cl(row[cc]);if(!cab)continue;const q=items.map(it=>num(row[it.j]));if(!q.some(x=>x))continue;
  if(!(R.cab.has(cab)||R.site.has(cab)))miss.push(cab);prow.push([cab,q])}
 const L=[['ok',`Sheet "${sn}": cột mã tủ ${XLSX.utils.encode_col(cc)}, dòng mã hàng ${r+1}`],
  ['ok',`${prow.length} tủ/trạm có kế hoạch · ${items.filter(i=>i.dir==='x').length} mã xuất, ${items.filter(i=>i.dir==='w').length} mã thu hồi (cột có chữ "recall")`]];
 if(items.some(i=>i.ex))L.push(['info','Mã không tính % (chỉ báo đỏ): '+items.filter(i=>i.ex).map(i=>i.n||i.codes[0]).join(', ')]);
 if(miss.length)L.push(['warn',`${miss.length} mã tủ không có trong danh sách trạm: ${miss.slice(0,8).join(', ')}`]);
 L.push(['info','Đã xuất = phiếu có mã trạm/tủ + mã hàng trùng kế hoạch. Số QĐ (nếu nhập) dùng để đặt tên và xem trạm xuất ngoài kế hoạch.']);
 return{data:{sheet:sn,items:items.map(({j,...o})=>o),rows:prow},lvl:miss.length?'warn':'ok',L}}

/* ===== Tính toán ===== */
const CMP={key:'',r:null};
const usd=v=>v/(S.cfg.rate||1);
async function prep(){const A=S.A,B=S.B;if(!B)return null;const key=A+'|'+B+'|'+R.ver+'|'+D.idx.upd+'|'+S.cfg.rate;if(CMP.key===key)return CMP.r;
 ld('Đang tính so sánh…');await tick();
 const sb=await loadSnap(B),sa=A?await loadSnap(A):null;if(!sb){ld('');return null}
 const cx=coverage('x',A,B),cw=coverage('w',A,B),full=!!sa&&cx.p>=.999&&cw.p>=.999;
 const X=sa?await movIn('x',A,B):[],W=sa?await movIn('w',A,B):[];
 const st=new Map();
 const g=z=>{let o=st.get(z.s);if(!o){o={s:z.s,b:z.b,k:z.k,pv:0,cv:0,ev:0,wv:0,it:new Map(),raws:new Set()};st.set(z.s,o)}return o};
 const it=(o,c)=>{let x=o.it.get(c);if(!x){x={c,pq:0,pv:0,cq:0,cv:0,eq:0,ev:0,wq:0,wv:0};o.it.set(c,x)}return x};
 for(const[raw,c,q,v]of sb.a){const z=res(raw,sb.g[raw]);if(!z)continue;const o=g(z);o.raws.add(raw);o.cv+=v;const x=it(o,c);x.cq+=q;x.cv+=v}
 if(sa)for(const[raw,c,q,v]of sa.a){const z=res(raw,sa.g[raw]);if(!z)continue;const o=g(z);o.raws.add(raw);o.pv+=v;const x=it(o,c);x.pq+=q;x.pv+=v}
 for(const l of X){const z=res(l[1],l[7]);if(!z)continue;const o=g(z);o.ev+=l[4];const x=it(o,l[2]);x.eq+=l[3];x.ev+=l[4]}
 for(const l of W){const z=res(l[1],l[7]);if(!z)continue;const o=g(z);o.wv+=l[4];const x=it(o,l[2]);x.wq+=l[3];x.wv+=l[4]}
 const rows=[...st.values()];
 for(const o of rows){o.dv=o.cv-o.pv;o.gv=null;
  if(full){let gv=0;for(const x of o.it.values()){const pr=x.cq?x.cv/x.cq:x.pq?x.pv/x.pq:x.eq?x.ev/x.eq:x.wq?x.wv/x.wq:0;x.gq=(x.cq-x.pq)-(x.eq-x.wq);x.gv=x.gq*pr;gv+=x.gv}o.gv=gv}
  o.st=o.b===TT?'Tổng trạm':o.s.startsWith(RT)?'Tuyến':!sa?'':o.pv<=.5&&o.cv>.5?'Trạm mới':o.cv<=.5&&o.pv>.5?'Hết tài sản':o.gv!=null&&Math.abs(usd(o.gv))>=10?'Lệch phiếu':Math.abs(usd(o.dv))<1?'Không đổi':o.dv>0?'Tăng':'Giảm'}
 const br=new Map();for(const o of rows){let b=br.get(o.b);if(!b){b={b:o.b,n:0,pv:0,cv:0,ev:0,wv:0,gv:0,nw:0,gone:0,lech:0};br.set(o.b,b)}
  b.n+=o.cv>.5?1:0;b.pv+=o.pv;b.cv+=o.cv;b.ev+=o.ev;b.wv+=o.wv;b.gv+=o.gv||0;if(o.st==='Trạm mới')b.nw++;if(o.st==='Hết tài sản')b.gone++;if(o.st==='Lệch phiếu')b.lech++}
 const alerts=sa?rows.filter(o=>o.b!==TT&&usd(o.dv)>=S.cfg.thr).sort((a,b)=>b.dv-a.dv):[];
 const r={A,B,sa:!!sa,full,cx,cw,rows,br:[...br.values()],alerts,X,W};CMP.key=key;CMP.r=r;ld('');return r}
const inBr=b=>!S.br||b===S.br;
/* chi nhánh để vẽ: 8 chi nhánh + nhóm khác */
const brOrder=b=>{const i=BRS.indexOf(b);return i<0?(b===TT?20:b==='?'?30:10):i};
/* ===== Quyết định (DC) ===== */
async function dcLines(dc){const m=D.idx.dcs[dc];const X=[],W=[];if(!m)return{X,W};
 for(const t of['x','w']){const ms=D.idx.months[t].filter(x=>x>=m.d0.slice(0,7)&&x<=m.d1.slice(0,7));for(const ym of ms){const doc=await loadMov(t,ym);if(!doc)continue;for(const l of doc.l)if(l[6]===dc)(t==='x'?X:W).push(l)}}
 return{X,W}}
function planProg(plan,L,dir){const N=plan.items.length;const items=plan.items.map((it,i)=>({...it,i,set:new Set(it.codes.flatMap(eqc))})).filter(it=>it.dir===dir);
 const P=new Map();for(const[cab,q]of plan.rows){const z=res(cab);const s=z?z.s:cab,b=z?z.b:'?';let o=P.get(s);if(!o){o={s,b,cab,q:Array(N).fill(0),a:Array(N).fill(0)};P.set(s,o)}q.forEach((v,i)=>o.q[i]+=v)}
 const A=new Map(),Av=new Map();for(const l of L){const z=res(l[1],l[7]);const s=z?z.s:cl(l[1]);let m=A.get(s);if(!m){m=new Map();A.set(s,m)}m.set(l[2],(m.get(l[2])||0)+l[3]);Av.set(s,(Av.get(s)||0)+l[4])}
 const planCodes=new Set(items.flatMap(it=>[...it.set]));
 for(const o of P.values()){const m=A.get(o.s);if(!m)continue;for(const it of items){let a=0;for(const c of it.set)a+=m.get(c)||0;o.a[it.i]=a}}
 for(const it of items){let pq=0,cap=0,over=0,act=0;for(const o of P.values()){const q=o.q[it.i],a=o.a[it.i];pq+=q;act+=a;cap+=Math.min(a,q);over+=Math.max(0,a-q)}Object.assign(it,{pq,cap,over,act,pct:pq?cap/pq*100:null})}
 const cnt=items.filter(it=>!it.ex&&it.pq>0);const avg=a=>a.length?a.reduce((x,y)=>x+y,0)/a.length:null;
 const total=avg(cnt.map(it=>it.pct));
 const byB=new Map();for(const o of P.values()){let b=byB.get(o.b);if(!b){b={b:o.b,n:0,q:Array(N).fill(0),c:Array(N).fill(0)};byB.set(o.b,b)}b.n++;for(const it of items){b.q[it.i]+=o.q[it.i];b.c[it.i]+=Math.min(o.a[it.i],o.q[it.i])}}
 const brs=[...byB.values()].map(b=>({b:b.b,n:b.n,pct:avg(cnt.filter(it=>b.q[it.i]>0).map(it=>b.c[it.i]/b.q[it.i]*100))})).sort((a,b)=>(b.pct??-1)-(a.pct??-1));
 const sites=[...P.values()].map(o=>{const c=cnt.filter(it=>o.q[it.i]>0);const p=avg(c.map(it=>Math.min(o.a[it.i],o.q[it.i])/o.q[it.i]*100));const any=items.some(it=>o.a[it.i]>0);
  return{...o,pct:p,over:items.some(it=>o.a[it.i]>o.q[it.i]&&o.q[it.i]>=0&&o.a[it.i]>0&&o.a[it.i]-o.q[it.i]>0),st:p==null?'':p>=99.99?'Đủ':any?'Thiếu':'Chưa '+(dir==='x'?'xuất':'thu')}});
 const outside=[...A.keys()].filter(s=>!P.has(s)).map(s=>({s,v:Av.get(s)||0,b:(res(s)||{}).b||'?'}));
 let otherV=0;const other=new Map();for(const l of L){if(planCodes.has(l[2]))continue;otherV+=l[4];other.set(l[2],(other.get(l[2])||0)+l[4])}
 return{items,total,brs,sites,outside,otherV,other:[...other].sort((a,b)=>b[1]-a[1]).slice(0,10),n:P.size,
  done:sites.filter(s=>s.st==='Đủ').length,part:sites.filter(s=>s.st==='Thiếu').length,none:sites.filter(s=>s.st.startsWith('Chưa')).length}}
/* kế hoạch: dòng phiếu có mã trạm/tủ + mã hàng trùng kế hoạch (không phụ thuộc số QĐ), tính từ ngày plan.from */
async function planLines(plan){const sites=new Set(plan.rows.map(([c])=>{const z=res(c);return z?z.s:cl(c)}));const codes={x:new Set(),w:new Set()};
 for(const it of plan.items)for(const c of it.codes.flatMap(eqc))codes[it.dir].add(c);const from=plan.from||'',out={x:[],w:[]};
 for(const t of['x','w'])for(const ym of D.idx.months[t]){if(from&&ym<from.slice(0,7))continue;const doc=await loadMov(t,ym);if(!doc)continue;
  for(const l of doc.l){if(from&&l[0]<from)continue;if(!codes[t].has(l[2]))continue;const z=res(l[1],l[7]);if(z&&sites.has(z.s))out[t].push(l)}}return{X:out.x,W:out.w}}
async function planCalc(key){const p=await loadPlan(key);if(!p)return null;const{X,W}=await planLines(p);const dl=D.idx.dcs[key]&&(D.idx.dcs[key].xv||D.idx.dcs[key].wv)?await dcLines(key):{X:[],W:[]};
 const PX=planProg(p,X,'x'),PW=p.items.some(i=>i.dir==='w')?planProg(p,W,'w'):null;
 const ext=(P,L,t)=>{if(!P)return;if(L.length){const o=planProg(p,L,t);P.outside=o.outside;P.other=o.other;P.otherV=o.otherV}else{P.outside=[];P.other=[];P.otherV=0}};ext(PX,dl.X,'x');ext(PW,dl.W,'w');
 return{p,X,W,DX:dl.X,DW:dl.W,PX,PW}}
function dcActual(L){const byS=new Map(),byB=new Map(),byC=new Map(),byD=new Map();let v=0;
 for(const l of L){const z=res(l[1],l[7])||{s:l[1],b:'?'};v+=l[4];byS.set(z.s,{s:z.s,b:z.b,v:((byS.get(z.s)||{}).v||0)+l[4]});byB.set(z.b,(byB.get(z.b)||0)+l[4]);
  const c=byC.get(l[2])||{c:l[2],q:0,v:0};c.q+=l[3];c.v+=l[4];byC.set(l[2],c);byD.set(l[0],(byD.get(l[0])||0)+l[4])}
 return{v,sites:[...byS.values()].sort((a,b)=>b.v-a.v),brs:[...byB].sort((a,b)=>b[1]-a[1]),items:[...byC.values()].sort((a,b)=>b.v-a.v),days:[...byD].sort()}}
/* chỉ mục DC + tổng hợp, chạy lại sau mỗi lần nạp */
async function rebuildDC(){const dcs={};for(const t of['x','w'])for(const ym of D.idx.months[t]){const doc=await loadMov(t,ym);if(!doc)continue;
 for(const l of doc.l){const dc=l[6];if(!dc)continue;let o=dcs[dc];if(!o){o=dcs[dc]={xv:0,wv:0,xs:{},ws:{},d0:l[0],d1:l[0],dept:''};}o[t+'v']+=l[4];o[t+'s'][l[1]]=1;if(l[0]<o.d0)o.d0=l[0];if(l[0]>o.d1)o.d1=l[0]}}
 const depts={};for(const t of['x','w'])for(const ym of D.idx.months[t]){const doc=D.mov[t+':'+ym];if(doc&&doc.dept)Object.assign(depts,doc.dept)}
 for(const k in dcs){const o=dcs[k];o.xn=Object.keys(o.xs).length;o.wn=Object.keys(o.ws).length;delete o.xs;delete o.ws;o.dept=depts[k]||'';o.xv=Math.round(o.xv);o.wv=Math.round(o.wv)}
 for(const p of D.idx.plans)if(!dcs[p])dcs[p]={xv:0,wv:0,xn:0,wn:0,d0:'',d1:'',dept:''};
 D.idx.dcs=dcs}
/* ===== Báo cáo kho ===== */
function whAgg(L,gran){const per=d=>gran==='d'?d:gran==='m'?d.slice(0,7):d.slice(0,4);const wh=new Map(),pb=new Map(),ps=new Set();let tot=0;const sts=new Set();
 for(const l of L){const z=res(l[1],l[7])||{s:l[1],b:'?'};if(!inBr(z.b))continue;const p=per(l[0]);ps.add(p);tot+=l[4];sts.add(z.s);
  const w=wh.get(l[5])||{w:l[5],b:whBr(l[5]),v:0,n:new Set(),p:{}};w.v+=l[4];w.n.add(z.s);w.p[p]=(w.p[p]||0)+l[4];wh.set(l[5],w);
  const wb=whBr(l[5]);const k=wb;const m=pb.get(k)||{};m[p]=(m[p]||0)+l[4];pb.set(k,m)}
 return{tot,ws:[...wh.values()].sort((a,b)=>b.v-a.v),pb,ps:[...ps].sort(),nst:sts.size}}
/* người quản lý từng trạm: Map trạm → [[tên, giá trị],…] (nhiều nhất trước) */
const MGRC={k:'',m:null};
function stMgr(sn){if(!sn)return new Map();const k=sn.d+'|'+R.ver;if(MGRC.k===k)return MGRC.m;const m=new Map();
 for(const[g,raw,v]of sn.m||[]){if(!g)continue;const z=res(raw,sn.g[raw]);if(!z)continue;let o=m.get(z.s);if(!o){o=new Map();m.set(z.s,o)}o.set(g,(o.get(g)||0)+v)}
 const out=new Map();for(const[s,o]of m)out.set(s,[...o].sort((a,b)=>b[1]-a[1]));MGRC.k=k;MGRC.m=out;return out}
const mgr1=(M,s)=>{const a=M.get(s);return a&&a.length?a[0][0]+(a.length>1?' +'+(a.length-1):''):''};
const noAcc=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/Đ/g,'D').toUpperCase();
/* ===== Nhân viên ===== */
function empAgg(sn,exTT){const M=new Map();if(!sn)return M;for(const[g,raw,v]of sn.m||[]){const z=res(raw,sn.g[raw]);if(!z)continue;if(exTT&&z.b===TT)continue;if(!inBr(z.b))continue;
 const name=g||'(Không ghi người quản lý)';let o=M.get(name);if(!o){o={g:name,v:0,s:new Map(),b:{}};M.set(name,o)}o.v+=v;o.s.set(z.s,(o.s.get(z.s)||0)+v);o.b[z.b]=(o.b[z.b]||0)+v}return M}
/* ===== Định mức ===== */
function normCheck(sn){if(!D.norm||!sn)return null;const byKey=new Map();for(const[k,c,q,n]of D.norm.rows){if(!byKey.has(k))byKey.set(k,[]);byKey.get(k).push([c,q,n])}
 const site=new Map();for(const[raw,c,q,v]of sn.a){const z=res(raw,sn.g[raw]);if(!z||z.b===TT||z.s.startsWith(RT)||!inBr(z.b))continue;let o=site.get(z.s);if(!o){o={s:z.s,b:z.b,q:new Map(),v:new Map()};site.set(z.s,o)}o.q.set(c,(o.q.get(c)||0)+q);o.v.set(c,(o.v.get(c)||0)+v)}
 const out=[];for(const o of site.values()){const cfg=(R.cfg.get(o.s)||'').toUpperCase().replace(/\s+/g,'');const ns=byKey.get('S:'+o.s)||byKey.get('T:'+cfg)||byKey.get('T:*');if(!ns)continue;
  for(const[c,q,n]of ns){let a=0,v=0;for(const cc of eqc(c)){a+=o.q.get(cc)||0;v+=o.v.get(cc)||0}if(a>q){const pr=a?v/a:0;out.push({s:o.s,b:o.b,cfg,c,n,a,q,ex:a-q,v:(a-q)*pr})}}}
 return out.sort((a,b)=>b.v-a.v)}
/* ===== Mã chưa gán ===== */
async function unassigned(){const m=new Map();const add=(raw,v,src,gb)=>{const z=res(raw,gb);if(!z||!(z.k==='guess'||z.k==='unk'))return;const k=cl(raw);let o=m.get(k);if(!o){o={raw:k,s:z.s,b:z.b,v:0,n:0,src:new Set()};m.set(k,o)}o.v+=v;o.n++;o.src.add(src)};
 const sb=await loadSnap(S.B);if(sb)for(const[raw,c,q,v]of sb.a)add(raw,v,'Tài sản '+vnd(S.B),sb.g[raw]);
 for(const t of['x','w'])for(const ym of D.idx.months[t].slice(-3)){const doc=await loadMov(t,ym);if(doc)for(const l of doc.l)add(l[1],l[4],(t==='x'?'Xuất ':'Thu hồi ')+vnm(ym),l[7])}
 return[...m.values()].sort((a,b)=>b.v-a.v)}

/* ===== Thành phần giao diện ===== */
const BRC={ART:'#F7941D',CEN:'#33415C',NOR:'#2F7FC1',NOT:'#13A37F',OUE01:'#8B5CF6',OUE02:'#D946A6',OUE03:'#E0533D',SUD:'#0EA5C6',CTY:'#7A8699',[TT]:'#B9C4D6','?':'#C9CED8',NATCOM:'#7A8699'};
const bc=b=>BRC[b]||'#9AA3B2';
const FIGQ=[];const FIGS=new Map();
const RO=new ResizeObserver(es=>{for(const e of es){const f=FIGS.get(e.target);if(f&&e.contentRect.width>0)e.target.innerHTML=f(Math.round(e.contentRect.width))}});
const fig=(fn,h)=>{const id='f'+Math.random().toString(36).slice(2,9);FIGQ.push([id,fn]);return`<div class="fig" id="${id}" style="height:${h}px"></div>`};
function flushFigs(){while(FIGQ.length){const[id,fn]=FIGQ.shift();const el=document.getElementById(id);if(!el)continue;FIGS.set(el,fn);RO.observe(el);el.innerHTML=fn(el.clientWidth||600)}}
const tip=(e,t)=>{const x=$('#tt');if(!t){x.style.display='none';return}x.textContent=t;x.style.display='block';x.style.left=Math.min(e.clientX+12,innerWidth-x.offsetWidth-8)+'px';x.style.top=(e.clientY+14)+'px'};
document.addEventListener('mousemove',e=>{const t=e.target.closest&&e.target.closest('[data-tip]');tip(e,t?t.getAttribute('data-tip'):'')});
/* cột theo thời gian */
function colChart(data,H,{lab=true,hl}={}){return W=>{if(!data.length)return'';const pl=8,pr=8,pt=18,pb=22,ih=H-pt-pb,mx=Math.max(...data.map(d=>d.v),1),bw=(W-pl-pr)/data.length,narrow=W<520;
 let s=`<svg viewBox="0 0 ${W} ${H}" role="img">`;for(let i=0;i<=3;i++){const y=pt+ih*i/3;s+=`<line x1="${pl}" x2="${W-pr}" y1="${y}" y2="${y}" stroke="#EEF1F5"/>`}
 data.forEach((d,i)=>{const h=Math.max(1,ih*d.v/mx),x=pl+i*bw+bw*.18,w=bw*.64;s+=`<rect x="${x}" y="${pt+ih-h}" width="${w}" height="${h}" rx="4" fill="${d.cur?'#F7941D':'#33415C'}" opacity="${d.cur?1:.82}" data-tip="${esc(d.l+': '+C(d.v)+' '+uName())}"/>`;
  if(lab&&(!narrow||d.cur||i===data.length-1))s+=`<text x="${x+w/2}" y="${pt+ih-h-5}" text-anchor="middle" font-size="10.5" fill="#1C2333">${C(d.v)}</text>`;
  if(!narrow||i%Math.ceil(data.length/6)===0||i===data.length-1)s+=`<text x="${x+w/2}" y="${H-6}" text-anchor="middle" font-size="10.5" fill="#5E6779">${esc(d.l)}</text>`});
 return s+'</svg>'}}
/* cột chồng theo nhóm */
function stackChart(per,series,H){return W=>{if(!per.length)return'';const pl=6,pr=6,pt=10,pb=22,ih=H-pt-pb;const tot=per.map(p=>series.reduce((a,s)=>a+(s.v[p]||0),0)),mx=Math.max(...tot,1),bw=(W-pl-pr)/per.length;
 let s=`<svg viewBox="0 0 ${W} ${H}" role="img">`;for(let i=0;i<=3;i++){const y=pt+ih*i/3;s+=`<line x1="${pl}" x2="${W-pr}" y1="${y}" y2="${y}" stroke="#EEF1F5"/>`}
 per.forEach((p,i)=>{let y=pt+ih;const x=pl+i*bw+bw*.15,w=Math.max(2,bw*.7);for(const se of series){const v=se.v[p]||0;if(!v)continue;const h=ih*v/mx;y-=h;s+=`<rect x="${x}" y="${y}" width="${w}" height="${Math.max(h,.5)}" fill="${se.c}" data-tip="${esc(p+' · '+se.n+': '+C(v))}"/>`}
  const step=Math.ceil(per.length/(W<520?5:12));if(i%step===0||i===per.length-1)s+=`<text x="${x+w/2}" y="${H-6}" text-anchor="middle" font-size="10.5" fill="#5E6779">${esc(p.length===10?p.slice(8)+'/'+p.slice(5,7):p.length===7?p.slice(5)+'/'+p.slice(2,4):p)}</text>`});
 return s+'</svg>'}}
/* cột hai chiều: xuất lên, thu hồi xuống, đường lũy kế */
function divChart(days,H){return W=>{if(!days.length)return'';const pl=6,pr=6,pt=12,pb=22,ih=H-pt-pb,mx=Math.max(...days.map(d=>Math.max(d.up,d.dn)),1),bw=(W-pl-pr)/days.length;
 let cum=0;const cs=days.map(d=>cum+=d.up-d.dn),cm=Math.max(...cs.map(Math.abs),1);const mid=pt+ih/2;
 let s=`<svg viewBox="0 0 ${W} ${H}" role="img"><line x1="${pl}" x2="${W-pr}" y1="${mid}" y2="${mid}" stroke="#B9C4D6"/>`;
 days.forEach((d,i)=>{const x=pl+i*bw+bw*.18,w=Math.max(1.5,bw*.64);const hu=(ih/2)*d.up/mx,hd=(ih/2)*d.dn/mx;
  if(d.up)s+=`<rect x="${x}" y="${mid-hu}" width="${w}" height="${hu}" rx="2" fill="#13A37F" data-tip="${esc(vnd(d.d)+' · xuất '+C(d.up))}"/>`;
  if(d.dn)s+=`<rect x="${x}" y="${mid}" width="${w}" height="${hd}" rx="2" fill="#E0533D" data-tip="${esc(vnd(d.d)+' · thu hồi '+C(d.dn))}"/>`;
  const step=Math.ceil(days.length/(W<520?5:10));if(i%step===0||i===days.length-1)s+=`<text x="${x+w/2}" y="${H-6}" text-anchor="middle" font-size="10.5" fill="#5E6779">${d.d.slice(8)}/${d.d.slice(5,7)}</text>`});
 s+=`<polyline fill="none" stroke="#F7941D" stroke-width="2" points="${cs.map((c,i)=>(pl+i*bw+bw/2)+','+(mid-(ih/2-4)*c/cm)).join(' ')}"/>`;return s+'</svg>'}}
const ring=(p,sz=96,c='#F7941D')=>{const r=sz/2-9,L=2*Math.PI*r,v=Math.max(0,Math.min(100,p||0));return`<svg width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}" role="img" aria-label="${nf1.format(v)}%"><circle cx="${sz/2}" cy="${sz/2}" r="${r}" fill="none" stroke="#EEF1F5" stroke-width="11"/><circle cx="${sz/2}" cy="${sz/2}" r="${r}" fill="none" stroke="${c}" stroke-width="11" stroke-linecap="round" stroke-dasharray="${L*v/100} ${L}" transform="rotate(-90 ${sz/2} ${sz/2})"/><text x="${sz/2}" y="${sz/2+6}" text-anchor="middle" font-size="${sz/5}" font-weight="600" fill="#1C2333">${p==null?'–':Math.round(v)+'%'}</text></svg>`};
/* thanh ngang */
const hbar=(label,w,val,right,{cls='',c,pv,click,tipT}={})=>`<div class="hb ${click?'c':''}" ${click?`data-go="${esc(click)}"`:''} ${tipT?`data-tip="${esc(tipT)}"`:''}><b>${esc(label)}</b><div class="tr">${pv!=null?`<i class="p" style="width:${Math.max(.5,pv)}%"></i>`:''}<i class="${cls}" style="width:${Math.max(.5,Math.min(100,w))}%;${c?'background:'+c:''}"></i></div><span>${val}</span><span>${right??''}</span></div>`;
/* bảng sắp xếp được */
const TB={};
function tbl(id,cols,rows,o={}){const s=TB[id]&&TB[id].keep?TB[id]:(TB[id]={sk:o.sk??null,sd:o.sd??-1,lim:o.lim||200,keep:true});s.cols=cols;s.rows=rows;s.o=o;return`<div id="tb-${id}">${tblHtml(id)}</div>`}
function tblHtml(id){const s=TB[id];let r=s.rows;if(s.sk!=null){const c=s.cols[s.sk];const v=c.v||(x=>x[c.k]);r=[...r].sort((a,b)=>{const x=v(a),y=v(b);return(typeof x==='string'||typeof y==='string'?String(x??'').localeCompare(String(y??''),'vi'):((x??-1e18)-(y??-1e18)))*s.sd})}s.view=r;
 const head=s.cols.map((c,i)=>`<th class="${c.l?'l':''}" data-tb="${id}" data-i="${i}" ${c.t?`data-tip="${esc(c.t)}"`:''}>${c.h}${s.sk===i?`<span class="ar">${s.sd>0?'▲':'▼'}</span>`:''}</th>`).join('');
 const body=r.slice(0,s.lim).map((x,i)=>`<tr class="${s.o.click?'c':''}" ${s.o.click?`data-tr="${id}" data-i="${i}"`:''}>${s.cols.map(c=>`<td class="${(c.l?'l ':'')+(c.cls?c.cls(x):'')}">${c.f?c.f(x):esc(x[c.k])}</td>`).join('')}</tr>`).join('');
 return`<div class="tw" ${s.o.h?`style="max-height:${s.o.h}px"`:''}><table><thead><tr>${head}</tr></thead><tbody>${body||`<tr><td class="l mu" colspan="${s.cols.length}">Không có dữ liệu</td></tr>`}</tbody>${s.o.foot?`<tfoot><tr>${s.o.foot}</tr></tfoot>`:''}</table></div>${r.length>s.lim?`<div class="more mu">Đang hiện ${s.lim.toLocaleString('vi-VN')} / ${r.length.toLocaleString('vi-VN')} dòng · <a href="#" data-more="${id}">xem thêm</a></div>`:''}`}
document.addEventListener('click',e=>{const th=e.target.closest('[data-tb]');if(th){const s=TB[th.dataset.tb],i=+th.dataset.i;if(s.sk===i)s.sd=-s.sd;else{s.sk=i;s.sd=-1}$('#tb-'+th.dataset.tb).innerHTML=tblHtml(th.dataset.tb);return}
 const tr=e.target.closest('[data-tr]');if(tr){const s=TB[tr.dataset.tr];s.o.click(s.view[+tr.dataset.i]);return}
 const mo=e.target.closest('[data-more]');if(mo){e.preventDefault();const s=TB[mo.dataset.more];s.lim+=500;$('#tb-'+mo.dataset.more).innerHTML=tblHtml(mo.dataset.more);return}
 const go=e.target.closest('[data-go]');if(go){e.preventDefault();GO(go.dataset.go)}});
/* điều hướng nội bộ: "st:ART017", "br:NOR", "dc:2026_392823", "emp:Tên", "tab:imp" */
function GO(x){const i=x.indexOf(':'),t=x.slice(0,i),v=x.slice(i+1);if(t==='st')openStation(v);else if(t==='br'){S.br=v;$('#fBr').value=v;show('st')}else if(t==='dc'){DCS.dc=v;show('dc')}else if(t==='emp')openEmp(v);else if(t==='tab')show(v);else if(t==='wh')openWh(v)}
const openDr=h=>{$('#drb').innerHTML=`<button class="btn s x" type="button" onclick="closeDr()">Đóng</button>`+h;$('#dr').classList.add('on');flushFigs()};
const closeDr=()=>$('#dr').classList.remove('on');$('#dr .ov').onclick=closeDr;document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeDr();closeMd()}});
const openMd=h=>{$('#mdb').innerHTML=h;$('#md').classList.add('on')},closeMd=()=>$('#md').classList.remove('on');
const kpi=(l,v,sub,c='')=>`<div class="${c}"><span>${l}</span><b>${v}</b>${sub?`<small>${sub}</small>`:''}</div>`;
const emptyState=(t,s,btn)=>`<div class="card empty"><b>${t}</b>${s}${btn?`<div style="margin-top:12px">${btn}</div>`:''}</div>`;
const noData=()=>emptyState('Chưa có dữ liệu tài sản','Admin vào tab Nạp dữ liệu, kéo thả file Tổng tài sản trạm, Tổng xuất, Thu hồi, Danh sách trạm, Kế hoạch.',`<button class="btn p" type="button" data-go="tab:imp">Nạp dữ liệu</button>`);
const stTag=s=>{const m={'Trạm mới':'acc','Hết tài sản':'err','Lệch phiếu':'err','Tăng':'ok','Giảm':'warn','Khớp':'ok','Không đổi':'info','Tổng trạm':'info','Tuyến':'info'};return s?`<span class="tag ${m[s]||'info'}">${s}</span>`:''};
const exTT=o=>o.b!==TT;
/* ===== TỔNG QUAN ===== */
async function vDash(){const el=$('#p-dash');if(!D.idx.snaps.length){el.innerHTML=noData();return}
 const r=await prep();if(!r){el.innerHTML=noData();return}
 const rows=r.rows.filter(o=>exTT(o)&&inBr(o.b)),sum=(a,k)=>a.reduce((x,o)=>x+o[k],0);
 const cv=sum(rows,'cv'),pv=sum(rows,'pv'),ev=sum(rows,'ev'),wv=sum(rows,'wv'),ttv=r.rows.filter(o=>o.b===TT).reduce((a,o)=>a+o.cv,0);
 const nw=rows.filter(o=>o.st==='Trạm mới').length,gone=rows.filter(o=>o.st==='Hết tài sản').length,lech=rows.filter(o=>o.st==='Lệch phiếu').length;
 const okv=r.rows.filter(o=>o.k!=='guess'&&o.k!=='unk').reduce((a,o)=>a+o.cv,0),allv=r.rows.reduce((a,o)=>a+o.cv,0),unn=r.rows.filter(o=>o.k==='guess'||o.k==='unk').length;
 const al=r.alerts.filter(o=>inBr(o.b)),MG=stMgr(await loadSnap(S.B));
 let h='';
 if(r.sa)h+=al.length?`<div class="al err"><b class="t dn">Cảnh báo: ${al.length} trạm tăng ≥ ${nf0.format(S.cfg.thr)} USD</b>${al.slice(0,5).map(o=>`<span class="chip" data-go="st:${esc(o.s)}" data-tip="${esc(o.b+(mgr1(MG,o.s)?' · '+mgr1(MG,o.s):''))}">${esc(o.s)} <b class="up">+${C(o.dv)}</b></span>`).join('')}${al.length>5?`<a href="#" data-go="tab:st" class="mu">xem tất cả</a>`:''}</div>`
  :`<div class="al ok"><b class="t">Không có trạm tăng đột biến</b>(ngưỡng ${nf0.format(S.cfg.thr)} USD so với kỳ trước)</div>`;
 h+=gkAlert(await loadSnap(S.B));
 if(r.sa&&!r.full){const ms=[...r.cx.miss.map(m=>'xuất '+vnd(m[0])+'–'+vnd(m[1])),...r.cw.miss.map(m=>'thu hồi '+vnd(m[0])+'–'+vnd(m[1]))];
  h+=`<div class="al warn"><b class="t wa">Chỉ so tồn, chưa đối soát phiếu</b>Phiếu xuất phủ ${nf0.format(r.cx.p*100)}%, thu hồi phủ ${nf0.format(r.cw.p*100)}% số ngày từ ${vnd(r.A)} đến ${vnd(r.B)}. Còn thiếu: ${ms.slice(0,4).join('; ')}${ms.length>4?'…':''}</div>`}
 h+=`<div class="k">${kpi('Tài sản tại trạm',C(cv),`${uName()} · ${rows.filter(o=>o.cv>.5).length.toLocaleString('vi-VN')} trạm`)}
 ${r.sa?kpi('So với '+vnd(r.A),sg(cv-pv),P(pct(cv,pv)),'o'):kpi('Kỳ so sánh','–','Nạp thêm kỳ trước để so sánh','o')}
 ${kpi('Xuất ra trạm trong kỳ',r.sa?C(ev):'–',r.sa?'thu hồi '+C(wv):'','g')}
 ${kpi('Trạm mới / hết tài sản',r.sa?nw+' / '+gone:'–',r.full?lech+' trạm lệch phiếu':'chưa đối soát phiếu','w')}
 ${kpi('Tổng trạm (NAT_TT)',C(ttv),'tính riêng, không cộng vào trạm')}
 ${kpi('Chất lượng dữ liệu',nf0.format(allv?okv/allv*100:0)+'%',`<a href="#" data-go="tab:un">${unn} mã chưa gán</a>`)}</div>`;
 const tr=D.idx.snaps.slice(-12).map(s=>({l:vnd(s.d).slice(0,5)+'/'+s.d.slice(2,4),v:S.br?(s.br[S.br]||0):s.t,cur:s.d===r.B}));
 const brs=r.br.filter(b=>b.b!==TT&&(BRS.includes(b.b)||b.cv>0)).sort((a,b)=>brOrder(a.b)-brOrder(b.b));const bmx=Math.max(...brs.map(b=>Math.max(b.cv,b.pv)),1);
 let bridge='';if(r.sa){const res=cv-pv-ev+wv,mx=Math.max(pv,cv,1);bridge=hbar('Tồn đầu',pv/mx*100,C(pv),'',{c:'#B9C4D6'})+hbar('+ Xuất',ev/mx*100,'+'+C(ev),'',{cls:'g'})+hbar('− Thu hồi',wv/mx*100,'−'+C(wv),'',{cls:'r'})+hbar('± Chênh lệch',Math.abs(res)/mx*100,sg(res),'',{c:'#F7941D',tipT:'Phần tăng giảm không giải thích bằng phiếu: đổi đơn giá, điều chuyển giữa trạm, thiếu phiếu…'})+hbar('Tồn cuối',cv/mx*100,C(cv),'',{c:'#33415C'})}
 h+=`<div class="g2"><div class="card"><h3>Tài sản tại trạm theo kỳ chốt <small>${S.br||'tất cả chi nhánh'} · ${uName()}</small></h3>${fig(colChart(tr,210),210)}</div>
 <div class="card"><h3>Cầu nối tồn tài sản <small>${r.sa?vnd(r.A)+' → '+vnd(r.B):''}</small></h3>${r.sa?bridge+`<div class="lgd mu">${r.full?'Đủ phiếu xuất và thu hồi trong kỳ':'Thiếu phiếu trong kỳ nên phần chênh lệch còn lớn'}</div>`:'<div class="empty">Cần ít nhất 2 kỳ chốt tài sản</div>'}</div></div><div class="gap"></div>`;
 h+=`<div class="g2"><div class="card"><h3>Chi nhánh: kỳ trước và kỳ này <small>bấm để xem trạm</small></h3>${brs.map(b=>hbar(b.b,b.cv/bmx*100,C(b.cv),r.sa?sg(b.cv-b.pv):'',{pv:r.sa?b.pv/bmx*100:null,c:'#F7941D',click:'br:'+b.b})).join('')}<div class="lgd"><span><i style="background:#B9C4D6"></i>Kỳ trước</span><span><i style="background:#F7941D"></i>Kỳ này</span></div></div>
 <div class="card" id="dashPlan"><h3>Kế hoạch theo quyết định</h3><div class="mu">Đang tính…</div></div></div><div class="gap"></div>`;
 if(r.sa){const so=[...rows].sort((a,b)=>b.dv-a.dv),li=a=>a.map(o=>`<div class="hb c" data-go="st:${esc(o.s)}" style="grid-template-columns:minmax(0,1fr) 70px 90px"><b>${esc(o.s)} <span class="mu">${o.b}${mgr1(MG,o.s)?' · '+esc(mgr1(MG,o.s)):''}</span></b><span>${stTag(o.st)}</span><span>${sg(o.dv)}</span></div>`).join('')||'<span class="mu">Không có</span>';
  h+=`<div class="g2"><div class="card"><h3>Top 5 tăng</h3>${li(so.slice(0,5).filter(o=>o.dv>0))}</div><div class="card"><h3>Top 5 giảm</h3>${li(so.slice(-5).reverse().filter(o=>o.dv<0))}</div></div>`}
 el.innerHTML=h;flushFigs();
 /* tiến độ kế hoạch */
 const pl=$('#dashPlan');if(!D.idx.plans.length){pl.innerHTML='<h3>Kế hoạch theo quyết định</h3><div class="empty">Chưa có file kế hoạch. Nạp ở tab Nạp dữ liệu.</div>';return}
 let ph='<h3>Kế hoạch theo quyết định <small>% theo số lượng từng mã</small></h3>';
 for(const dc of D.idx.plans.slice(-4).reverse()){const c=await planCalc(dc);if(!c)continue;const p=c.p,px=c.PX,pw=c.PW;
  ph+=`<div class="ring c" data-go="dc:${esc(dc)}" style="cursor:pointer;margin-bottom:8px">${ring(px.total,74)}<div><b>${esc(dc)}</b> <span class="mu">${esc(p.name||'')}</span><br><span class="mu">${px.n} trạm · ${px.done} đủ · ${px.part} thiếu · <span class="dn">${px.none} chưa xuất</span>${pw?` · thu hồi ${pw.total==null?'–':Math.round(pw.total)+'%'}`:''}</span></div></div>`}
 if($('#dashPlan'))$('#dashPlan').innerHTML=ph}
/* ===== XU HƯỚNG ===== */
async function vTrend(){const el=$('#p-trend'),ss=D.idx.snaps;if(!ss.length){el.innerHTML=noData();return}
 const brs=[...new Set(ss.flatMap(s=>Object.keys(s.br)))].filter(b=>b!==TT).sort((a,b)=>brOrder(a)-brOrder(b));
 const data=ss.map(s=>({l:vnd(s.d),v:S.br?(s.br[S.br]||0):s.t,cur:s.d===S.B}));
 const cols=[{h:'Chi nhánh',k:'b',l:1}].concat(ss.map((s,i)=>({h:vnd(s.d),v:x=>x.v[i],f:x=>C(x.v[i])}))).concat(ss.length>1?[{h:'Thay đổi kỳ cuối',v:x=>x.v[x.v.length-1]-x.v[x.v.length-2],f:x=>sg(x.v[x.v.length-1]-x.v[x.v.length-2])},{h:'%',v:x=>pct(x.v[x.v.length-1],x.v[x.v.length-2]),f:x=>P(pct(x.v[x.v.length-1],x.v[x.v.length-2]))}]:[]);
 const rows=brs.map(b=>({b,v:ss.map(s=>s.br[b]||0)}));rows.push({b:'Tổng (không tính NAT_TT)',v:ss.map(s=>s.t)});
 el.innerHTML=`<div class="card"><h3>Tài sản tại trạm qua các kỳ chốt <small>${S.br||'tất cả chi nhánh'} · ${uName()}</small></h3>${fig(colChart(data,260),260)}</div>
 <div class="card"><h3>Theo chi nhánh</h3>${tbl('trend',cols,rows,{lim:50})}</div>
 <div class="card"><h3>Các kỳ đã nạp</h3>${tbl('snaps',[{h:'Ngày chốt',k:'d',l:1,f:x=>vnd(x.d)},{h:'File',k:'file',l:1},{h:'Số dòng',k:'n',f:x=>(x.n||0).toLocaleString('vi-VN')},{h:'Tài sản tại trạm',k:'t',f:x=>C(x.t)},{h:'NAT_TT',k:'tt',f:x=>C(x.tt||0)},{h:'Khóa sổ',l:1,v:x=>D.idx.locks.includes(x.d)?1:0,f:x=>D.idx.locks.includes(x.d)?'<span class="tag info">Đã khóa</span>':''}],[...ss].reverse(),{lim:50})}</div>`;flushFigs()}
/* ===== CHI NHÁNH ===== */
async function vBr(){const el=$('#p-br');const r=await prep();if(!r){el.innerHTML=noData();return}
 const brs=r.br.filter(b=>b.b!==TT).sort((a,b)=>brOrder(a.b)-brOrder(b.b)),mx=Math.max(...brs.map(b=>Math.abs(b.cv-b.pv)),1);
 const cols=[{h:'Chi nhánh',k:'b',l:1},{h:'Số trạm',k:'n',f:x=>x.n.toLocaleString('vi-VN')},{h:'Kỳ trước',k:'pv',f:x=>C(x.pv)},{h:'Kỳ này',k:'cv',f:x=>C(x.cv)},{h:'Tăng giảm',v:x=>x.cv-x.pv,f:x=>sg(x.cv-x.pv)},{h:'%',v:x=>pct(x.cv,x.pv),f:x=>P(pct(x.cv,x.pv))},
  {h:'Xuất ra trạm',k:'ev',f:x=>C(x.ev)},{h:'Thu hồi',k:'wv',f:x=>C(x.wv)},{h:'Chênh lệch',t:'Tăng giảm − (xuất − thu hồi)',v:x=>x.cv-x.pv-x.ev+x.wv,f:x=>r.sa?sg(x.cv-x.pv-x.ev+x.wv):''},{h:'Trạm mới',k:'nw'},{h:'Hết TS',k:'gone'},{h:'Lệch phiếu',k:'lech',f:x=>r.full?x.lech:'–'}];
 el.innerHTML=`<div class="g2"><div class="card"><h3>Tăng giảm theo chi nhánh <small>${vnd(r.A)} → ${vnd(r.B)}</small></h3>${brs.map(b=>{const d=b.cv-b.pv;return hbar(b.b,Math.abs(d)/mx*100,sg(d),P(pct(b.cv,b.pv)),{cls:d<0?'r':'a',click:'br:'+b.b})}).join('')}</div>
 <div class="card"><h3>Xuất và thu hồi theo chi nhánh</h3>${(()=>{const m=Math.max(...brs.map(b=>Math.max(b.ev,b.wv)),1);return brs.map(b=>hbar(b.b,b.ev/m*100,C(b.ev),'−'+C(b.wv),{pv:b.wv/m*100,cls:'g',click:'br:'+b.b,tipT:'Xuất '+C(b.ev)+' · thu hồi '+C(b.wv)})).join('')})()}<div class="lgd"><span><i style="background:#B9C4D6"></i>Thu hồi</span><span><i style="background:#0E7C5A"></i>Xuất</span></div></div></div><div class="gap"></div>
 <div class="card"><h3>Bảng chi nhánh <small>bấm một dòng để xem trạm</small></h3>${tbl('br',cols,brs,{click:x=>GO('br:'+x.b),sk:3})}</div>`;flushFigs()}
/* ===== TRẠM ===== */
const STF={st:'',q:''};
async function vSt(){const el=$('#p-st');const r=await prep();if(!r){el.innerHTML=noData();return}const MG=stMgr(await loadSnap(S.B));
 const sts=[...new Set(r.rows.map(o=>o.st).filter(Boolean))];
 el.innerHTML=`<div class="card"><h3>Trạm <small>${vnd(r.A)} → ${vnd(r.B)}${r.full?'':' · chưa đủ phiếu để đối soát'}</small><span class="r"><select id="stS"><option value="">Mọi trạng thái</option>${sts.map(s=>`<option value="${s}" ${STF.st===s?'selected':''}>${s}</option>`).join('')}</select><input type="search" id="stQ" placeholder="Lọc mã trạm" value="${esc(STF.q)}" style="width:150px"><label class="mu" style="display:flex;gap:4px;align-items:center"><input type="checkbox" id="stA"> Chỉ trạm tăng ≥ ${nf0.format(S.cfg.thr)} USD</label></span></h3><div id="stT"></div></div>`;
 const draw=()=>{STF.st=$('#stS').value;STF.q=$('#stQ').value.trim().toUpperCase();const a=$('#stA').checked;
  const rows=r.rows.filter(o=>inBr(o.b)&&(!STF.st||o.st===STF.st)&&(!STF.q||o.s.includes(STF.q))&&(!a||usd(o.dv)>=S.cfg.thr));
  const cols=[{h:'Trạm',k:'s',l:1,f:x=>`<b>${esc(x.s)}</b>`},{h:'CN',k:'b',l:1},{h:'Người quản lý',l:1,v:x=>mgr1(MG,x.s),f:x=>esc(mgr1(MG,x.s))},{h:'Kỳ trước',k:'pv',f:x=>C(x.pv)},{h:'Kỳ này',k:'cv',f:x=>C(x.cv)},{h:'Tăng giảm',k:'dv',f:x=>sg(x.dv),cls:x=>usd(x.dv)>=S.cfg.thr&&x.b!==TT?'redbg':''},{h:'%',v:x=>pct(x.cv,x.pv),f:x=>P(pct(x.cv,x.pv))},{h:'Xuất',k:'ev',f:x=>C(x.ev)},{h:'Thu hồi',k:'wv',f:x=>C(x.wv)},{h:'Chênh lệch phiếu',v:x=>x.gv==null?null:Math.abs(x.gv),f:x=>x.gv==null?'<span class="mu">–</span>':sg(x.gv)},{h:'Trạng thái',k:'st',l:1,f:x=>stTag(x.st)}];
  $('#stT').innerHTML=`<p class="mu" style="margin:0 0 8px">${rows.length.toLocaleString('vi-VN')} trạm. Dấu * là trạm tool đoán theo mã (chưa có trong danh sách trạm).</p>`+tbl('st',cols,rows,{click:x=>openStation(x.s),sk:4,h:620})};
 ['stS','stQ','stA'].forEach(i=>$('#'+i).oninput=draw);draw()}
async function openStation(s){const r=await prep();if(!r)return;const o=r.rows.find(x=>x.s===s);if(!o){toast('Không thấy trạm '+s+' trong kỳ đang xem');return}
 const its=[...o.it.values()].filter(x=>x.cq||x.pq||x.eq||x.wq).sort((a,b)=>Math.abs(b.cv-b.pv)-Math.abs(a.cv-a.pv));
 const mv=[...r.X.map(l=>['Xuất',l]),...r.W.map(l=>['Thu hồi',l])].filter(([,l])=>{const z=res(l[1],l[7]);return z&&z.s===s}).sort((a,b)=>a[1][0]<b[1][0]?-1:1);
 const hist=[];for(const sn of D.idx.snaps){const d=await loadSnap(sn.d);let v=0;if(d)for(const[raw,c,q,vv]of d.a)if(o.raws.has(raw))v+=vv;hist.push({l:vnd(sn.d),v,cur:sn.d===r.B})}
 const nm=c=>(D.names[c]||[''])[0];const MG=stMgr(await loadSnap(S.B)).get(s)||[];
 openDr(`<h2>Trạm ${esc(s)} <span class="tag info">${esc(o.b)}</span>${MG.slice(0,3).map(([g])=>` <span class="tag acc" data-go="emp:${esc(g)}" style="cursor:pointer" data-tip="Người quản lý">${esc(g)}</span>`).join('')} ${stTag(o.st)}</h2><div style="margin:4px 0 8px"><button class="btn p s" type="button" id="stDl">Tải danh sách tài sản trạm (.xlsx)</button></div><p class="mu" style="margin:0 0 10px">Mã trong file: ${[...o.raws].slice(0,12).map(esc).join(', ')}${o.raws.size>12?'…':''}${R.cfg.get(s)?' · cấu hình '+esc(R.cfg.get(s)):''}</p>
 <div class="k">${kpi('Kỳ trước',C(o.pv),vnd(r.A))}${kpi('Kỳ này',C(o.cv),vnd(r.B),'o')}${kpi('Tăng giảm',sg(o.dv),P(pct(o.cv,o.pv)))}${kpi('Xuất / thu hồi',C(o.ev)+' / '+C(o.wv),'trong kỳ','g')}${kpi('Chênh lệch phiếu',o.gv==null?'–':sg(o.gv),o.gv==null?'chưa đủ phiếu':'','w')}</div>
 <div class="card"><h3>Tài sản qua các kỳ</h3>${fig(colChart(hist,150),150)}</div>
 <div class="card"><h3>Từng mã vật tư <small>${its.length} mã</small></h3>${tbl('sti',[{h:'Mã',k:'c',l:1},{h:'Tên hàng',l:1,v:x=>nm(x.c),f:x=>`<span title="${esc(nm(x.c))}">${esc(nm(x.c).slice(0,46))}</span>`},{h:'SL trước',k:'pq',f:x=>Q(x.pq)},{h:'SL nay',k:'cq',f:x=>Q(x.cq)},{h:'Tăng giảm SL',v:x=>x.cq-x.pq,f:x=>sg(x.cq-x.pq,Q)},{h:'SL xuất',k:'eq',f:x=>Q(x.eq)},{h:'SL thu hồi',k:'wq',f:x=>Q(x.wq)},{h:'Lệch SL',v:x=>x.gq??null,f:x=>x.gq==null?'–':Math.abs(x.gq)<1e-6?'<span class="tag ok">Khớp</span>':sg(x.gq,Q)},{h:'Giá trị nay',k:'cv',f:x=>C(x.cv)}],its,{lim:300,h:360})}</div>
 <div class="card"><h3>Phiếu trong kỳ <small>${mv.length} dòng</small></h3>${tbl('stm',[{h:'Ngày',l:1,v:x=>x[1][0],f:x=>vnd(x[1][0])},{h:'Loại',l:1,v:x=>x[0],f:x=>`<span class="tag ${x[0]==='Xuất'?'ok':'warn'}">${x[0]}</span>`},{h:'Mã',l:1,v:x=>x[1][2],f:x=>x[1][2]},{h:'Tên hàng',l:1,v:x=>nm(x[1][2]),f:x=>esc(nm(x[1][2]).slice(0,40))},{h:'SL',v:x=>x[1][3],f:x=>Q(x[1][3])},{h:'Giá trị',v:x=>x[1][4],f:x=>C(x[1][4])},{h:'Kho',l:1,v:x=>x[1][5],f:x=>esc(x[1][5].slice(0,34))},{h:'DC',l:1,v:x=>x[1][6],f:x=>x[1][6]?`<a href="#" data-go="dc:${esc(x[1][6])}">${esc(x[1][6])}</a>`:''}],mv,{lim:300,h:340})}</div>`);$('#stDl').onclick=()=>xlsStation(o,its,mv,MG,r)}
/* ===== BÁO CÁO KHO ===== */
const WHF={g:'m',a:'',b:''};
async function vWh(){const el=$('#p-wh');const cov=D.idx.cov.x;if(!cov.length){el.innerHTML=emptyState('Chưa có phiếu xuất','Nạp file Tổng xuất (Export Summary) ở tab Nạp dữ liệu.','');return}
 const mn=cov.map(c=>c[0]).sort()[0],mx=cov.map(c=>c[1]).sort().slice(-1)[0];if(!WHF.a)WHF.a=mn;if(!WHF.b)WHF.b=mx;
 const L=await movIn('x',addDay(WHF.a,-1),WHF.b);const g=whAgg(L,WHF.g);
 const per=g.ps,ser=[...g.pb.keys()].sort((a,b)=>brOrder(a)-brOrder(b)).map(k=>({n:k==='CTY'?'Kho công ty':k,c:bc(k),v:g.pb.get(k)}));
 const top=g.ws.slice(0,15),tm=Math.max(...top.map(w=>w.v),1);const P12=per.slice(-12);
 const mat=[...g.pb.keys()].sort((a,b)=>brOrder(a)-brOrder(b)).map(k=>({b:k==='CTY'?'Kho công ty':k,v:P12.map(p=>g.pb.get(k)[p]||0)}));const mm=Math.max(...mat.flatMap(r=>r.v),1);
 el.innerHTML=`<div class="card"><h3>Báo cáo kho xuất ra trạm <span class="r"><input type="date" id="whA" value="${WHF.a}"> → <input type="date" id="whB" value="${WHF.b}"><span class="seg" id="whG">${[['d','Ngày'],['m','Tháng'],['y','Năm']].map(([k,l])=>`<button type="button" data-g="${k}" class="${WHF.g===k?'on':''}">${l}</button>`).join('')}</span></span></h3>
 <div class="k">${kpi('Xuất ra trạm',C(g.tot),uName(),'o')}${kpi('Số kho có xuất',g.ws.length)}${kpi('Kho xuất nhiều nhất',top[0]?esc(whShort(top[0].w)):'–',top[0]?C(top[0].v):'')}${kpi('Số trạm nhận hàng',g.nst.toLocaleString('vi-VN'),'','g')}</div>
 ${fig(stackChart(per,ser,240),240)}<div class="lgd">${ser.map(s=>`<span><i style="background:${s.c}"></i>${esc(s.n)}</span>`).join('')}</div></div>
 <div class="g2"><div class="card"><h3>Xếp hạng kho <small>bấm để xem trạm, DC</small></h3><div class="whb">${top.map(w=>hbar(whShort(w.w),w.v/tm*100,C(w.v),w.n.size+' trạm',{c:bc(w.b),click:'wh:'+w.w,tipT:w.w})).join('')}</div></div>
 <div class="card"><h3>Chi nhánh kho × ${WHF.g==='d'?'ngày':WHF.g==='m'?'tháng':'năm'} <small>màu càng đậm xuất càng nhiều</small></h3><div class="tw"><table><thead><tr><th class="l">Kho của</th>${P12.map(p=>`<th>${esc(p)}</th>`).join('')}</tr></thead><tbody>${mat.map(r=>`<tr><td class="l">${esc(r.b)}</td>${r.v.map(v=>`<td style="background:rgba(247,148,29,${(v/mm*.75).toFixed(2)})">${v?C(v):''}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div></div><div class="gap"></div>
 <div class="card"><h3>Tất cả kho</h3>${tbl('wh',[{h:'Kho',k:'w',l:1},{h:'Chi nhánh',k:'b',l:1,f:x=>x.b==='CTY'?'Kho công ty':esc(x.b)},{h:'Giá trị xuất ra trạm',k:'v',f:x=>C(x.v)},{h:'Số trạm',v:x=>x.n.size,f:x=>x.n.size}],g.ws,{click:x=>openWh(x.w),sk:2})}</div>`;
 $('#whA').onchange=e=>{WHF.a=e.target.value;vWh()};$('#whB').onchange=e=>{WHF.b=e.target.value;vWh()};$$('#whG button').forEach(b=>b.onclick=()=>{WHF.g=b.dataset.g;vWh()});flushFigs()}
async function openWh(w){const L=(await movIn('x',addDay(WHF.a,-1),WHF.b)).filter(l=>l[5]===w);const a=dcActual(L);const dc=new Map();for(const l of L)dc.set(l[6]||'(không có DC)',(dc.get(l[6]||'(không có DC)')||0)+l[4]);
 openDr(`<h2>${esc(w)}</h2><p class="mu">${vnd(WHF.a)} → ${vnd(WHF.b)} · ${whBr(w)==='CTY'?'Kho công ty':'Kho chi nhánh '+whBr(w)}</p><div class="k">${kpi('Xuất ra trạm',C(a.v),uName(),'o')}${kpi('Số trạm',a.sites.length)}${kpi('Số DC',dc.size)}</div>
 <div class="g2"><div class="card"><h3>Theo DC</h3>${tbl('whd',[{h:'DC',k:0,l:1,f:x=>x[0].startsWith('(')?x[0]:`<a href="#" data-go="dc:${esc(x[0])}">${esc(x[0])}</a>`},{h:'Giá trị',k:1,f:x=>C(x[1])}],[...dc],{sk:1,h:360})}</div>
 <div class="card"><h3>Theo trạm</h3>${tbl('whs',[{h:'Trạm',k:'s',l:1},{h:'CN',k:'b',l:1},{h:'Giá trị',k:'v',f:x=>C(x.v)}],a.sites,{click:x=>openStation(x.s),h:360})}</div></div>`)}
/* ===== THEO NGÀY ===== */
const DYF={a:'',b:''};
async function vDay(){const el=$('#p-day');const cx=D.idx.cov.x,cw=D.idx.cov.w;if(!cx.length&&!cw.length){el.innerHTML=emptyState('Chưa có phiếu xuất, thu hồi','Nạp file Tổng xuất và Thu hồi để xem theo ngày.','');return}
 const last=[...cx,...cw].map(c=>c[1]).sort().slice(-1)[0];if(!DYF.b)DYF.b=last;if(!DYF.a)DYF.a=last.slice(0,8)+'01';
 const X=(await movIn('x',addDay(DYF.a,-1),DYF.b)),W=(await movIn('w',addDay(DYF.a,-1),DYF.b));
 const dm=new Map(),sd=[];const f=(l,t)=>{const z=res(l[1],l[7])||{s:l[1],b:'?'};if(!inBr(z.b))return;const o=dm.get(l[0])||{d:l[0],up:0,dn:0,ns:new Set()};if(t)o.up+=l[4];else o.dn+=l[4];o.ns.add(z.s);dm.set(l[0],o);if(t)sd.push({d:l[0],s:z.s,b:z.b,v:l[4],dc:l[6]})};
 X.forEach(l=>f(l,1));W.forEach(l=>f(l,0));const n=dayDiff(DYF.a,DYF.b)+1,days=[];let cum=0;for(let i=0;i<n&&i<400;i++){const d=addDay(DYF.a,i);const o=dm.get(d)||{d,up:0,dn:0,ns:new Set()};cum+=o.up-o.dn;days.push({...o,cum})}
 const sdA=new Map();for(const x of sd){const k=x.d+'|'+x.s;const o=sdA.get(k)||{...x,v:0};o.v+=x.v;sdA.set(k,o)}const topSD=[...sdA.values()].sort((a,b)=>b.v-a.v).slice(0,10);
 const tu=days.reduce((a,d)=>a+d.up,0),td=days.reduce((a,d)=>a+d.dn,0),pk=[...days].sort((a,b)=>b.up-a.up)[0];
 el.innerHTML=`<div class="card"><h3>Tăng giảm tài sản trạm theo ngày <small>${S.br||'tất cả chi nhánh'} · tăng = xuất ra trạm, giảm = thu hồi</small><span class="r"><input type="date" id="dyA" value="${DYF.a}"> → <input type="date" id="dyB" value="${DYF.b}"></span></h3>
 <div class="k">${kpi('Tổng xuất ra trạm',C(tu),uName(),'g')}${kpi('Tổng thu hồi',C(td),'','w')}${kpi('Ròng',sg(tu-td),'','o')}${kpi('Ngày xuất nhiều nhất',pk&&pk.up?vnd(pk.d):'–',pk&&pk.up?C(pk.up):'')}</div>
 ${fig(divChart(days,260),260)}<div class="lgd"><span><i style="background:#13A37F"></i>Xuất (tăng)</span><span><i style="background:#E0533D"></i>Thu hồi (giảm)</span><span><i style="background:#F7941D"></i>Lũy kế ròng</span></div></div>
 <div class="g2"><div class="card"><h3>Từng ngày</h3>${tbl('day',[{h:'Ngày',k:'d',l:1,f:x=>vnd(x.d)},{h:'Xuất',k:'up',f:x=>x.up?C(x.up):''},{h:'Thu hồi',k:'dn',f:x=>x.dn?C(x.dn):''},{h:'Ròng',v:x=>x.up-x.dn,f:x=>sg(x.up-x.dn)},{h:'Lũy kế',k:'cum',f:x=>C(x.cum)},{h:'Số trạm',v:x=>x.ns.size,f:x=>x.ns.size||''}],days.filter(d=>d.up||d.dn),{sk:0,sd:1,h:420})}</div>
 <div class="card"><h3>10 lần xuất lớn nhất (trạm × ngày)</h3>${tbl('sdy',[{h:'Ngày',k:'d',l:1,f:x=>vnd(x.d)},{h:'Trạm',k:'s',l:1},{h:'CN',k:'b',l:1},{h:'Giá trị',k:'v',f:x=>C(x.v)},{h:'DC',k:'dc',l:1,f:x=>x.dc?`<a href="#" data-go="dc:${esc(x.dc)}">${esc(x.dc)}</a>`:''}],topSD,{click:x=>openStation(x.s),h:420})}</div></div>`;
 $('#dyA').onchange=e=>{DYF.a=e.target.value;vDay()};$('#dyB').onchange=e=>{DYF.b=e.target.value;vDay()};flushFigs()}
/* ===== NHÂN VIÊN ===== */
const EMF={tt:true};
async function vEmp(){const el=$('#p-emp');const sb=await loadSnap(S.B);if(!sb){el.innerHTML=noData();return}const sa=S.A?await loadSnap(S.A):null;
 const M=empAgg(sb,EMF.tt),Ma=empAgg(sa,EMF.tt);const rows=[...M.values()].map(o=>({g:o.g,v:o.v,n:o.s.size,b:Object.entries(o.b).sort((a,b)=>b[1]-a[1])[0][0],pv:(Ma.get(o.g)||{v:0}).v,pn:(Ma.get(o.g)||{s:new Map()}).s.size}));
 rows.sort((a,b)=>b.v-a.v);const top=rows.slice(0,12),mx=Math.max(...top.map(r=>r.v),1),big=rows.filter(r=>r.n>=50).length;
 el.innerHTML=`<div class="k">${kpi('Nhân viên giữ tài sản trạm',rows.length,'kỳ '+vnd(S.B))}${kpi('Giữ từ 50 trạm',big,'','w')}${kpi('Người giữ nhiều nhất',top[0]?esc(top[0].g):'–',top[0]?C(top[0].v)+' · '+top[0].n+' trạm':'','o')}</div>
 <div class="g2"><div class="card"><h3>Top nhân viên theo giá trị <label class="r mu" style="font-weight:400"><input type="checkbox" id="emT" ${EMF.tt?'checked':''}> Không tính tổng trạm NAT_TT</label></h3>${top.map(r=>hbar(r.g,r.v/mx*100,C(r.v),r.n+' trạm',{c:bc(r.b),click:'emp:'+r.g})).join('')}</div>
 <div class="card"><h3>Top nhân viên theo số trạm</h3>${(()=>{const t=[...rows].sort((a,b)=>b.n-a.n).slice(0,12),m=Math.max(...t.map(r=>r.n),1);return t.map(r=>hbar(r.g,r.n/m*100,r.n+' trạm',C(r.v),{c:bc(r.b),click:'emp:'+r.g})).join('')})()}</div></div><div class="gap"></div>
 <div class="card"><h3>Danh sách nhân viên</h3>${tbl('emp',[{h:'Nhân viên',k:'g',l:1},{h:'CN chính',k:'b',l:1},{h:'Số trạm',k:'n'},{h:'Giá trị',k:'v',f:x=>C(x.v)},{h:'Kỳ trước',k:'pv',f:x=>sa?C(x.pv):'–'},{h:'Tăng giảm',v:x=>x.v-x.pv,f:x=>sa?sg(x.v-x.pv):'–'},{h:'Số trạm thay đổi',v:x=>x.n-x.pn,f:x=>sa?sg(x.n-x.pn,v=>nf0.format(v)):'–'}],rows,{click:x=>openEmp(x.g),sk:3})}</div>`;
 $('#emT').onchange=e=>{EMF.tt=e.target.checked;vEmp()};flushFigs()}
async function openEmp(g){const sb=await loadSnap(S.B),sa=S.A?await loadSnap(S.A):null;const o=empAgg(sb,false).get(g);if(!o){toast('Không thấy nhân viên '+g);return}const pa=sa?empAgg(sa,false).get(g):null;
 const r=await prep();const st=new Map((r?r.rows:[]).map(x=>[x.s,x]));
 const rows=[...o.s].map(([s,v])=>{const x=st.get(s);let n=0,q=0;if(x)for(const it of x.it.values())if(it.cq>0){n++;q+=it.cq}return{s,v,b:(x||res(s)||{}).b||'',pv:pa?(pa.s.get(s)||0):0,n,q,tv:x?x.cv:0}});
 if(pa)for(const[s,v]of pa.s)if(!o.s.has(s))rows.push({s,v:0,pv:v,b:(res(s)||{}).b||'',n:0,q:0,tv:0});
 const brs=Object.entries(o.b).sort((a,b)=>b[1]-a[1]),nq=rows.reduce((a,x)=>a+x.q,0),ni=rows.reduce((a,x)=>a+x.n,0);
 openDr(`<h2>${esc(g)}</h2><p class="mu" style="margin:0 0 6px">Chi nhánh: ${brs.map(([b,v])=>`<b>${esc(b)}</b> (${C(v)})`).join(', ')}</p><div style="margin:0 0 10px"><button class="btn p s" type="button" id="emDl">Tải danh sách trạm, vật tư (.xlsx)</button></div>
 <div class="k">${kpi('Số trạm đang quản lý',o.s.size,pa?'kỳ trước '+pa.s.size:'','o')}${kpi('Giá trị đang giữ',C(o.v),uName())}${kpi('Tăng giảm',pa?sg(o.v-pa.v):'–',pa?P(pct(o.v,pa.v)):'','g')}${kpi('Thiết bị, vật tư tại các trạm',nf0.format(nq),ni.toLocaleString('vi-VN')+' dòng mã hàng','w')}</div>
 <div class="card"><h3>Các trạm đang quản lý <small>bấm để xem tài sản từng trạm</small></h3>${tbl('emps',[{h:'Trạm',k:'s',l:1},{h:'CN',k:'b',l:1},{h:'Số mã hàng',k:'n'},{h:'Số lượng thiết bị, vật tư',k:'q',f:x=>Q(x.q)},{h:'Giá trị nhân viên giữ',k:'v',f:x=>C(x.v)},{h:'Tổng tài sản trạm',k:'tv',f:x=>C(x.tv)},{h:'Kỳ trước',k:'pv',f:x=>C(x.pv)},{h:'Tăng giảm',v:x=>x.v-x.pv,f:x=>sg(x.v-x.pv)}],rows,{click:x=>openStation(x.s),sk:4,h:520})}</div>`);
 $('#emDl').onclick=()=>xlsEmp(g,o,rows,st)}

/* ===== QUYẾT ĐỊNH (DC) ===== */
const DCS={dc:'',t:'x'};
function dcSugg(q){q=q.trim().toUpperCase();const ks=Object.keys(D.idx.dcs);if(!q)return ks.sort((a,b)=>(D.idx.dcs[b].xv+D.idx.dcs[b].wv)-(D.idx.dcs[a].xv+D.idx.dcs[a].wv)).slice(0,12);
 return ks.filter(k=>k.toUpperCase().includes(q)||(D.idx.dcs[k].dept||'').toUpperCase().includes(q)).sort((a,b)=>(D.idx.plans.includes(b)?1:0)-(D.idx.plans.includes(a)?1:0)||D.idx.dcs[b].xv-D.idx.dcs[a].xv).slice(0,14)}
function bindSugg(inp,box,fn,pick){let on=-1;const draw=()=>{const l=fn(inp.value);on=-1;box.innerHTML=l.map((x,i)=>`<div data-k="${esc(x.k)}">${x.h}</div>`).join('')||(inp.value?'<div class="mu">Không tìm thấy</div>':'');box.style.display=document.activeElement===inp&&box.innerHTML?'block':'none'};
 inp.addEventListener('input',draw);inp.addEventListener('focus',draw);inp.addEventListener('blur',()=>setTimeout(()=>box.style.display='none',180));
 inp.addEventListener('keydown',e=>{const it=[...box.querySelectorAll('[data-k]')];if(!it.length)return;if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();on=(on+(e.key==='ArrowDown'?1:-1)+it.length)%it.length;it.forEach((x,i)=>x.classList.toggle('on',i===on))}else if(e.key==='Enter'){e.preventDefault();const x=it[Math.max(on,0)];pick(x.dataset.k);box.style.display='none'}});
 box.addEventListener('mousedown',e=>{const d=e.target.closest('[data-k]');if(d){pick(d.dataset.k);box.style.display='none'}})}
async function vDc(){const el=$('#p-dc');const ks=Object.keys(D.idx.dcs);if(!ks.length){el.innerHTML=emptyState('Chưa có số quyết định nào','Số DC được đọc tự động từ cột Interpretation (phiếu xuất) và Reason (phiếu thu hồi) khi nạp file.','<button class="btn p" type="button" data-go="tab:imp">Nạp dữ liệu</button>');return}
 el.innerHTML=`<div class="card"><div class="srch" style="max-width:560px"><input type="search" id="dcQ" placeholder="Gõ số quyết định hoặc mã phòng, ví dụ 392823 hoặc AP-DAO" value="${esc(DCS.dc)}" autocomplete="off" style="width:100%;height:38px;font-size:14px"><div class="sug" id="dcS"></div></div></div><div id="dcB"></div>`;
 bindSugg($('#dcQ'),$('#dcS'),q=>dcSugg(q).map(k=>{const m=D.idx.dcs[k];return{k,h:`<span><b>${esc(k)}</b> <span class="mu">${esc(m.dept||'')}</span>${D.idx.plans.includes(k)?' <span class="tag acc">có kế hoạch</span>':''}</span><small>xuất ${C(m.xv)} · ${m.xn} trạm${m.wv?' · thu hồi '+C(m.wv):''}</small>`}}),k=>{DCS.dc=k;DCS.t='x';$('#dcQ').value=k;dcBody()});
 dcBody()}
async function dcBody(){const el=$('#dcB');const dc=DCS.dc;
 if(!dc||!D.idx.dcs[dc]){const rows=Object.entries(D.idx.dcs).map(([k,m])=>({k,...m,pl:D.idx.plans.includes(k)}));
  el.innerHTML=`<div class="card"><h3>Tất cả quyết định <small>${rows.length} số · bấm để xem tiến độ</small></h3>${tbl('dcl',[{h:'Số quyết định',k:'k',l:1,f:x=>`<b>${esc(x.k)}</b>`},{h:'Phòng',k:'dept',l:1},{h:'Xuất ra trạm',k:'xv',f:x=>C(x.xv)},{h:'Số trạm xuất',k:'xn'},{h:'Thu hồi',k:'wv',f:x=>x.wv?C(x.wv):''},{h:'Số trạm thu',k:'wn',f:x=>x.wn||''},{h:'Từ ngày',k:'d0',f:x=>vnd(x.d0)},{h:'Đến ngày',k:'d1',f:x=>vnd(x.d1)},{h:'Kế hoạch',v:x=>x.pl?1:0,l:1,f:x=>x.pl?'<span class="tag acc">Có</span>':''}],rows,{click:x=>{DCS.dc=x.k;$('#dcQ').value=x.k;dcBody()},sk:2})}</div>`;return}
 ld('Đang tính quyết định…');const m=D.idx.dcs[dc],plan=D.idx.plans.includes(dc)?await loadPlan(dc):null;const{X,W}=await dcLines(dc);ld('');
 const hasW=plan?plan.items.some(i=>i.dir==='w'):false;
 const PC=plan?await planCalc(dc):null,PX=PC?PC.PX:null,PW=PC?PC.PW:null;
 const tg=(p,L)=>p?`<span class="tag ${p.total>=99.9?'ok':p.total>=50?'acc':'err'}">${p.total==null?'–':Math.round(p.total)+'%'}</span>`:L.length?`<span class="tag info">${C(dcActual(L).v)}</span>`:'<span class="tag info">0</span>';
 let h=`<div class="card"><h3 style="font-size:16px">${esc(dc)} <small>${esc(m.dept||'')}${plan?' · '+esc(plan.name||''):''} · ${m.d0?vnd(m.d0)+' → '+vnd(m.d1):'chưa có phiếu'}</small><span class="r">${plan?`<button class="btn s p" type="button" id="dcU">Tải kế hoạch đã cập nhật</button>`:''}<button class="btn s" type="button" id="dcX">Xuất Excel quyết định</button><button class="btn s" type="button" id="dcC">Danh sách DC</button></span></h3>
 <div class="sub"><button type="button" data-t="x" class="${DCS.t==='x'?'on':''}">Xuất ra trạm ${tg(PX,X)}</button><button type="button" data-t="w" class="${DCS.t==='w'?'on':''}">Thu hồi ${tg(PW,W)}</button></div><div id="dcT"></div></div>`;
 el.innerHTML=h;$$('#dcB .sub button').forEach(b=>b.onclick=()=>{DCS.t=b.dataset.t;dcBody()});$('#dcC').onclick=()=>{DCS.dc='';$('#dcQ').value='';dcBody()};$('#dcX').onclick=()=>xlsDC(dc,plan,X,W,PC);if($('#dcU'))$('#dcU').onclick=()=>xlsPlanUpd(dc);
 const t=DCS.t,L=t==='x'?X:W,PP=t==='x'?PX:PW,verb=t==='x'?'xuất':'thu hồi';const box=$('#dcT');
 if(PP){const its=PP.items,bm=PP.brs;
  box.innerHTML=`<div class="g3"><div class="card"><h3>Tổng quyết định</h3><div class="ring">${ring(PP.total,112)}<div class="k" style="flex:1;grid-template-columns:repeat(2,minmax(0,1fr));margin:0">${kpi('Trạm kế hoạch',PP.n)}${kpi('Đủ',PP.done,'','g')}${kpi('Thiếu',PP.part,'','o')}${kpi('Chưa '+verb,PP.none,'','w')}</div></div>
   <p class="mu" style="margin:8px 0 0">Đã ${verb} = mọi phiếu ${verb} có mã trạm/tủ và mã hàng trùng kế hoạch${plan.from?' từ '+vnd(plan.from):''} (${(t==='x'?PC.X:PC.W).length.toLocaleString('vi-VN')} dòng), không cần ghi số QĐ. % = trung bình % các mã. Mỗi trạm, mỗi mã tối đa 100%; ${verb} vượt kế hoạch bôi đỏ, không cộng thêm.${PP.outside.length?` <b class="dn">${PP.outside.length} trạm ${verb} theo QĐ này nhưng ngoài kế hoạch.</b>`:''}</p></div>
  <div class="card"><h3>Từng mặt hàng</h3>${its.map(it=>hbar(it.n||it.codes[0],it.pct||0,it.ex?'<span class="red">không tính</span>':it.pct==null?'–':nf0.format(it.pct)+'%',`${nf0.format(it.cap)}/${nf0.format(it.pq)}`,{cls:it.ex?'r':'a',tipT:`${it.codes.join(', ')} · KH ${nf0.format(it.pq)} · đã ${verb} ${nf0.format(it.act)}${it.over?' · thừa '+nf0.format(it.over):''}`})+(it.over?`<div class="red" style="font-size:11px;margin:-2px 0 4px 100px">${verb[0].toUpperCase()+verb.slice(1)} thừa ${nf0.format(it.over)}</div>`:'')).join('')}</div>
  <div class="card"><h3>Từng chi nhánh <small>bấm để lọc trạm</small></h3>${bm.map(b=>`<div class="hb c" data-bf="${esc(b.b)}"><b>${esc(b.b)}</b><div class="tr"><i class="a" style="width:${Math.max(.5,b.pct||0)}%"></i></div><span>${b.pct==null?'–':nf0.format(b.pct)+'%'}</span><span>${b.n} trạm</span></div>`).join('')}</div></div><div class="gap"></div>
  <div class="card"><h3>Từng trạm <small id="dcF"></small><span class="r"><select id="dcSt"><option value="">Mọi trạng thái</option><option value="Đủ">Đủ</option><option value="Thiếu">Thiếu</option><option value="Chưa ${verb}">Chưa ${verb}</option><option value="over">Có ${verb} thừa</option></select></span></h3><div id="dcTT"></div></div>
  ${PP.outside.length||PP.otherV?`<div class="g2"><div class="card"><h3>Trạm ${verb} ngoài kế hoạch <small>${PP.outside.length} trạm</small></h3>${tbl('dco',[{h:'Trạm',k:'s',l:1},{h:'CN',k:'b',l:1},{h:'Giá trị',k:'v',f:x=>C(x.v)}],PP.outside,{click:x=>openStation(x.s),sk:2,h:300})}</div><div class="card"><h3>Mã ${verb} không có trong kế hoạch <small>${C(PP.otherV)}</small></h3>${tbl('dcm',[{h:'Mã',k:0,l:1},{h:'Tên hàng',l:1,v:x=>(D.names[x[0]]||[''])[0],f:x=>esc(((D.names[x[0]]||[''])[0]).slice(0,50))},{h:'Giá trị',k:1,f:x=>C(x[1])}],PP.other,{h:300})}</div></div>`:''}`;
  let bf='';const drawT=()=>{const sv=$('#dcSt').value;const rows=PP.sites.filter(s=>(!bf||s.b===bf)&&(!sv||(sv==='over'?s.over:s.st===sv)));$('#dcF').textContent=(bf?bf+' · ':'')+rows.length+' trạm';
   const cols=[{h:'Trạm',k:'s',l:1,f:x=>`<b>${esc(x.s)}</b>`},{h:'Mã tủ',k:'cab',l:1},{h:'CN',k:'b',l:1},{h:'%',k:'pct',f:x=>x.pct==null?'–':nf0.format(x.pct)+'%',cls:x=>x.pct!=null&&x.pct<100?'':''},{h:'Trạng thái',k:'st',l:1,f:x=>`<span class="tag ${x.st==='Đủ'?'ok':x.st==='Thiếu'?'warn':'err'}">${x.st}</span>`}]
    .concat(its.map(it=>({h:esc((it.n||it.codes[0]).replace(/^#\s*/,'').slice(0,16)),t:it.n,v:x=>x.a[it.i]-x.q[it.i],f:x=>x.q[it.i]||x.a[it.i]?`${nf0.format(x.a[it.i])}/${nf0.format(x.q[it.i])}`:'',cls:x=>x.a[it.i]>x.q[it.i]?'redbg':x.a[it.i]<x.q[it.i]?'mu':''})));
   $('#dcTT').innerHTML=tbl('dcs',cols,rows,{click:x=>openStation(x.s),sk:3,sd:1,h:520})};
  $('#dcSt').onchange=drawT;$$('[data-bf]').forEach(d=>d.onclick=()=>{bf=bf===d.dataset.bf?'':d.dataset.bf;$$('[data-bf]').forEach(x=>x.style.background=x.dataset.bf===bf?'var(--acc-soft)':'');drawT()});drawT()}
 else{if(!L.length){box.innerHTML=`<div class="empty"><b>${t==='w'?'Chưa có phiếu thu hồi':'Chưa có phiếu xuất'} theo quyết định này</b>${plan&&t==='w'&&!hasW?'Kế hoạch chưa có hàng recall.':''}</div>`;return}
  const a=dcActual(L),bm=Math.max(...a.brs.map(b=>b[1]),1),days=a.days.map(([d,v])=>({d,up:t==='x'?v:0,dn:t==='w'?v:0}));
  box.innerHTML=`${plan&&t==='w'&&!hasW?'<div class="al info">Kế hoạch chưa có hàng recall nên không tính %. Đây là số đã thu hồi thực tế.</div>':!plan?'<div class="al info">Quyết định này chưa có file kế hoạch nên chỉ hiện số thực tế. Nạp file kế hoạch để có % hoàn thành.</div>':''}
  <div class="k">${kpi('Giá trị '+verb,C(a.v),uName(),'o')}${kpi('Số trạm',a.sites.length)}${kpi('Số mã hàng',a.items.length)}${kpi('Số ngày có phiếu',a.days.length,'','g')}</div>
  <div class="g2"><div class="card"><h3>Theo chi nhánh</h3>${a.brs.map(([b,v])=>hbar(b,v/bm*100,C(v),'',{c:bc(b)})).join('')}</div><div class="card"><h3>Theo ngày</h3>${fig(divChart(days,200),200)}</div></div><div class="gap"></div>
  <div class="g2"><div class="card"><h3>Theo trạm</h3>${tbl('dsa',[{h:'Trạm',k:'s',l:1},{h:'CN',k:'b',l:1},{h:'Giá trị',k:'v',f:x=>C(x.v)}],a.sites,{click:x=>openStation(x.s),h:380})}</div>
  <div class="card"><h3>Theo mã hàng</h3>${tbl('dia',[{h:'Mã',k:'c',l:1},{h:'Tên hàng',l:1,v:x=>(D.names[x.c]||[''])[0],f:x=>esc(((D.names[x.c]||[''])[0]).slice(0,46))},{h:'SL',k:'q',f:x=>Q(x.q)},{h:'Giá trị',k:'v',f:x=>C(x.v)}],a.items,{h:380})}</div></div>`}
 flushFigs()}
/* ===== KẾ HOẠCH ===== */
function normDC(v){v=String(v||'').trim();if(!v)return'';const d=dcOf(v)[0];if(d&&!d.startsWith('PO'))return d;const m=/(\d{5,7})/.exec(v);if(m){const k=Object.keys(D.idx.dcs).find(k=>k.endsWith('_'+m[1]));if(k)return k;const y=/(20\d{2})/.exec(v);return(y?y[1]:new Date().getFullYear())+'_'+m[1]}return v.toUpperCase()}
async function vPlan(){const el=$('#p-plan');if(!D.idx.plans.length){el.innerHTML=emptyState('Chưa có file kế hoạch','Nạp file kế hoạch (ví dụ Annex …phase_3…xlsx) ở tab Nạp dữ liệu. Tool tự tìm cột mã tủ và dòng mã hàng; cột có chữ "recall" là kế hoạch thu hồi.','<button class="btn p" type="button" data-go="tab:imp">Nạp dữ liệu</button>');return}
 ld('Đang tính kế hoạch…');const rows=[];for(const dc of D.idx.plans){const c=await planCalc(dc);if(!c)continue;const p=c.p,X=c.X,W=c.W,px=c.PX,pw=c.PW;
  const r={dc,name:p.name,n:px.n,px:px.total,pw:pw?pw.total:null,done:px.done,part:px.part,none:px.none,out:px.outside.length,upd:p.upd,ni:p.items.length,nx:X.length,nw:W.length,from:p.from||''};
  if(!X.length&&!W.length)r.sug=(await planSugg(p)).filter(s=>s[0]!==dc).slice(0,4);rows.push(r)}ld('');
 const xMax=[...D.idx.cov.x].map(c=>c[1]).sort().slice(-1)[0];
 el.innerHTML=`<div class="al info"><b class="t">Cách tool tính:</b> dòng phiếu xuất (Export Summary) nào có <b>mã tủ/mã trạm</b> và <b>mã hàng</b> (kể cả mã tương đương) trùng với kế hoạch thì tính là đã xuất theo kế hoạch, không cần ghi số QĐ; chỉ tính phiếu từ ngày lập kế hoạch trở đi. Thu hồi tính tương tự với các mã recall. Phiếu xuất hiện có đến ngày ${xMax?vnd(xMax):'–'}.</div>
 <div class="g3">${rows.map(r=>`<div class="card"><h3><a href="#" data-go="dc:${esc(r.dc)}">${esc(r.dc)}</a><small>${esc(r.name||'')}</small>${S.admin?`<span class="r"><button class="btn s" type="button" data-rdc="${esc(r.dc)}">Đổi số QĐ</button><button class="btn s" type="button" data-cls="${esc(r.dc)}">Sửa kế hoạch</button></span>`:''}</h3>
  ${r.nx||r.nw?`<div class="ring" style="cursor:pointer" data-go="dc:${esc(r.dc)}">${ring(r.px,96)}<div><div class="mu">Xuất ra trạm · ${r.nx.toLocaleString('vi-VN')} dòng phiếu khớp${r.from?' · từ '+vnd(r.from):''}</div><b>${r.n} trạm</b> · ${r.done} đủ · ${r.part} thiếu · <span class="dn">${r.none} chưa</span><div class="mu" style="margin-top:4px">Thu hồi: ${r.pw==null?'không có kế hoạch recall':'<b>'+Math.round(r.pw)+'%</b> · '+r.nw+' dòng phiếu'}${r.out?` · <span class="dn">${r.out} trạm ngoài KH</span>`:''}</div></div></div>`
  :`<div class="al err" style="margin:0"><b class="t">Chưa có phiếu xuất nào trùng mã trạm + mã hàng của kế hoạch${r.from?' từ '+vnd(r.from):''}</b><br>Kiểm tra ngày bắt đầu tính (nút Sửa kế hoạch), hoặc nạp file Export Summary của giai đoạn thực hiện.${r.sug&&r.sug.length?`<br>Số QĐ trong file xuất có nhiều trạm trùng kế hoạch nhất: ${r.sug.map(s=>`<b>${esc(s[0])}</b> (${s[1]} trạm)`).join(', ')}${S.admin?' → bấm "Đổi số QĐ".':''}`:''}</div>`}
  <div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap"><button class="btn s p" type="button" data-upd="${esc(r.dc)}">Tải kế hoạch đã cập nhật số xuất</button><button class="btn s" type="button" data-go="dc:${esc(r.dc)}">Xem chi tiết</button></div></div>`).join('')}</div><div class="gap"></div>
 <div class="card"><h3>Danh sách kế hoạch</h3>${tbl('pl',[{h:'Số quyết định',k:'dc',l:1},{h:'File',k:'name',l:1},{h:'Số trạm',k:'n'},{h:'Số mã',k:'ni'},{h:'Dòng phiếu khớp',k:'nx'},{h:'% xuất',k:'px',f:x=>x.px==null?'–':nf0.format(x.px)+'%'},{h:'% thu hồi',k:'pw',f:x=>x.pw==null?'–':nf0.format(x.pw)+'%'},{h:'Ngoài KH',k:'out'},{h:'Ngày nạp',k:'upd',f:x=>x.upd?new Date(x.upd).toLocaleDateString('vi-VN'):''}],rows,{click:x=>GO('dc:'+x.dc)})}</div>`;
 $$('[data-upd]').forEach(b=>b.onclick=()=>xlsPlanUpd(b.dataset.upd));
 $$('[data-rdc]').forEach(b=>b.onclick=()=>renameDC(b.dataset.rdc));$$('[data-cls]').forEach(b=>b.onclick=()=>editCls(b.dataset.cls))}
async function editCls(dc){const p=await loadPlan(dc);openMd(`<h3>Sửa kế hoạch – ${esc(dc)}</h3><div class="fm" style="margin-bottom:10px"><label>Tính phiếu xuất/thu hồi từ ngày (để trống = mọi ngày)<input type="date" id="pfrom" value="${esc(p.from||'')}"></label></div><div class="tw" style="max-height:55vh"><table><thead><tr><th class="l">Tên hàng</th><th class="l">Mã</th><th class="l">Loại</th><th class="l">Tính %</th></tr></thead><tbody>${p.items.map((x,j)=>`<tr><td class="l">${esc(x.n)}</td><td class="l">${esc(x.codes.join(', '))}</td><td class="l"><select data-cd="${j}"><option value="x" ${x.dir==='x'?'selected':''}>Xuất</option><option value="w" ${x.dir==='w'?'selected':''}>Thu hồi</option></select></td><td class="l"><input type="checkbox" data-ce="${j}" ${x.ex?'':'checked'}></td></tr>`).join('')}</tbody></table></div><div class="act"><button class="btn" type="button" onclick="closeMd()">Hủy</button><button class="btn p" type="button" id="clsOk">Lưu</button></div>`);
 $('#clsOk').onclick=async()=>{p.from=$('#pfrom').value||'';$$('[data-cd]').forEach(x=>p.items[+x.dataset.cd].dir=x.value);$$('[data-ce]').forEach(x=>p.items[+x.dataset.ce].ex=!x.checked);p.upd=Date.now();ld('Đang lưu…');await ST.set('plan:'+dc,p);D.plans[dc]=p;ld('');closeMd();toast('Đã lưu phân loại');show(S.tab)}}
function renameDC(old){openMd(`<h3>Đổi số quyết định cho kế hoạch</h3><div class="fm"><label>Số QĐ hiện tại<input type="text" value="${esc(old)}" disabled></label><label>Số QĐ đúng (có thể gõ 392823 hoặc 2026_392823/AP-DAO_DEPT)<input type="text" id="ndc" list="dcl"></label><datalist id="dcl">${Object.keys(D.idx.dcs).map(k=>`<option value="${esc(k)}">`).join('')}</datalist><div class="dn" id="ndcE"></div></div><div class="act"><button class="btn" type="button" onclick="closeMd()">Hủy</button><button class="btn p" type="button" id="ndcOk">Lưu</button></div>`);
 $('#ndcOk').onclick=async()=>{const nd=normDC($('#ndc').value);if(!nd){$('#ndcE').textContent='Nhập số quyết định';return}if(nd===old){closeMd();return}
  ld('Đang lưu…');const p=await loadPlan(old);p.dc=nd;p.upd=Date.now();await ST.set('plan:'+nd,p);D.plans[nd]=p;await ST.del('plan:'+old);delete D.plans[old];
  D.idx.plans=D.idx.plans.filter(x=>x!==old);if(!D.idx.plans.includes(nd))D.idx.plans.push(nd);await rebuildDC();D.idx.upd=Date.now();await ST.set('idx',D.idx);ld('');closeMd();toast('Đã đổi sang '+nd);show('plan')}}
/* tải file kế hoạch đã điền số đã xuất / đã thu hồi */
async function xlsPlanUpd(dc){ld('Đang tạo file…');try{const c=await planCalc(dc);const p=c.p,X=c.X,W=c.W,PX=c.PX,PW=c.PW;const wb=XLSX.utils.book_new();
const by=new Map();for(const s of PX.sites)by.set(s.s,{x:s});if(PW)for(const s of PW.sites){const o=by.get(s.s)||{};o.w=s;by.set(s.s,o)}
 const its=p.items.map((it,i)=>({...it,i}));
 const head=['Mã tủ','Trạm','Chi nhánh','% xuất','Trạng thái xuất'].concat(PW?['% thu hồi','Trạng thái thu hồi']:[]).concat(its.flatMap(it=>{const n=(it.n||it.codes[0]).replace(/^#\s*/,'');const v=it.dir==='w'?'thu':'xuất';return[n+' – KH',n+' – đã '+v,n+' – còn thiếu']}));
 const sum=['','TỔNG','','','',...(PW?['','']:[])];const tot=its.map(()=>[0,0,0]);
 const body=[...by.values()].map(({x,w})=>{const s=x||w;const row=[s.cab,s.s,s.b,x&&x.pct!=null?Math.round(x.pct*10)/10:'',x?x.st:''].concat(PW?[w&&w.pct!=null?Math.round(w.pct*10)/10:'',w?w.st:'']:[]);
  its.forEach((it,k)=>{const src=it.dir==='w'?w:x;const q=src?src.q[it.i]:0,a=src?src.a[it.i]:0;tot[k][0]+=q;tot[k][1]+=a;tot[k][2]+=Math.max(0,q-a);row.push(q,a,Math.max(0,q-a))});return row});
 tot.forEach(t=>sum.push(t[0],t[1],t[2]));
 const ws=aoaS([['KẾ HOẠCH '+dc+' – ĐÃ CẬP NHẬT SỐ XUẤT/THU HỒI TỪ PHIẾU ('+new Date().toLocaleDateString('vi-VN')+')'],['Nguồn: '+(p.name||'')+' · Đã xuất = phiếu có mã trạm/tủ + mã hàng trùng kế hoạch'+(p.from?' từ '+vnd(p.from):'')+' · % tối đa 100% mỗi mã; đã xuất lớn hơn KH là xuất thừa'],head,...body,sum]);
 ws['!cols']=[{wch:10},{wch:10},{wch:9},{wch:8},{wch:12}].concat(PW?[{wch:9},{wch:12}]:[]).concat(its.flatMap(()=>[{wch:12},{wch:12},{wch:12}]));
 XLSX.utils.book_append_sheet(wb,ws,'Ke hoach cap nhat');
 const out=[['Trạm xuất theo QĐ nhưng ngoài kế hoạch','CN','Giá trị ('+uName()+')']].concat(PX.outside.map(o=>[o.s,o.b,xv(o.v)]));XLSX.utils.book_append_sheet(wb,aoaS(out),'Ngoai ke hoach');
 const det=[['Ngày','Mã trạm/tủ trong phiếu','Trạm','CN','Mã hàng','Tên hàng','SL','Giá trị ('+uName()+')','Kho','Loại']].concat([...X.map(l=>['Xuất',l]),...W.map(l=>['Thu hồi',l])].map(([t,l])=>{const z=res(l[1],l[7])||{s:'',b:''};return[vnd(l[0]),l[1],z.s,z.b,l[2],(D.names[l[2]]||[''])[0],l[3],xv(l[4]),l[5],t]}));
 XLSX.utils.book_append_sheet(wb,aoaS(det),'Phieu khop ke hoach');
 XLSX.writeFile(wb,'KeHoach_'+dc.replace(/[\/\\]/g,'-')+'_cap_nhat.xlsx')}catch(e){console.error(e);toast('Lỗi: '+e.message,5000)}finally{ld('')}}
/* ===== THỪA TÀI SẢN ===== */
async function vNorm(){const el=$('#p-norm');if(!D.norm){el.innerHTML=emptyState('Chưa có file định mức','Tab này so số lượng từng mã hàng tại trạm với định mức (ví dụ 1 tủ BBU có 3 RRU, 3 anten…). File định mức cần các cột: <b>Loại trạm</b> (theo Radio Config trong Danh sách trạm, ví dụ 2G+4G; hoặc <b>Mã trạm</b> cho định mức riêng), <b>Mã hàng</b>, <b>Định mức</b>, có thể thêm Tên hàng.','<button class="btn p" type="button" data-go="tab:imp">Nạp file định mức</button>');return}
 const sb=await loadSnap(S.B);const L=normCheck(sb)||[];const tv=L.reduce((a,x)=>a+x.v,0),ns=new Set(L.map(x=>x.s));const byC=new Map();for(const x of L){const o=byC.get(x.c)||{c:x.c,n:x.n||(D.names[x.c]||[''])[0],v:0,ex:0};o.v+=x.v;o.ex+=x.ex;byC.set(x.c,o)}const tc=[...byC.values()].sort((a,b)=>b.v-a.v).slice(0,10),m=Math.max(...tc.map(x=>x.v),1);
 el.innerHTML=`<div class="k">${kpi('Trạm vượt định mức',ns.size,'kỳ '+vnd(S.B),'w')}${kpi('Giá trị thừa',C(tv),uName(),'w')}${kpi('Số dòng định mức',D.norm.rows.length)}</div>
 <div class="card"><h3>Mã hàng thừa nhiều nhất</h3>${tc.map(x=>hbar(x.n||x.c,x.v/m*100,C(x.v),'+'+nf0.format(x.ex),{cls:'r',tipT:x.c})).join('')||'<span class="mu">Không có trạm vượt định mức</span>'}</div>
 <div class="card"><h3>Chi tiết</h3>${tbl('nm',[{h:'Trạm',k:'s',l:1},{h:'CN',k:'b',l:1},{h:'Loại',k:'cfg',l:1},{h:'Mã hàng',k:'c',l:1},{h:'Tên hàng',l:1,v:x=>x.n||(D.names[x.c]||[''])[0],f:x=>esc((x.n||(D.names[x.c]||[''])[0]).slice(0,44))},{h:'Thực tế',k:'a',f:x=>Q(x.a)},{h:'Định mức',k:'q',f:x=>Q(x.q)},{h:'Thừa',k:'ex',f:x=>`<span class="red">+${Q(x.ex)}</span>`},{h:'Giá trị thừa',k:'v',f:x=>C(x.v)}],L,{click:x=>openStation(x.s),sk:8})}</div>`}
/* ===== MÃ CHƯA GÁN ===== */
async function vUn(){const el=$('#p-un');if(!D.idx.snaps.length&&!D.idx.months.x.length){el.innerHTML=noData();return}
 ld('Đang dò mã…');const L=await unassigned();ld('');const tv=L.reduce((a,x)=>a+x.v,0);
 el.innerHTML=`<div class="al info"><b class="t">Đã tự tra:</b>Mã nào chưa có trong Danh sách trạm, Mau_Tram_Tu thì tool lấy chi nhánh theo file giao khoán (cột F)${D.gk?` – đang dùng ${R.gks.size} trạm từ file giao khoán`:' – chưa nạp file giao khoán'}. Danh sách dưới đây là mã còn lại.</div><div class="al info"><b class="t">Cách bổ sung:</b> 1) Bấm <b>Tải file bổ sung</b>. 2) Điền cột "Chi nhánh (anh điền)" (ART, CEN, NOR, NOT, OUE01, OUE02, OUE03, SUD), sửa cột "Trạm" nếu tool đoán sai. 3) Nạp lại file ở đây hoặc tab Nạp dữ liệu: tool kiểm tra, báo Đạt/Lỗi và tính lại ngay.</div>
 <div class="k">${kpi('Mã chưa gán',L.length,'','w')}${kpi('Giá trị liên quan',C(tv),uName(),'w')}${kpi('Đoán được trạm',L.filter(x=>x.s.endsWith('*')).length,'tool đoán theo ký tự đầu')}</div>
 <div class="card"><h3>Danh sách <span class="r"><button class="btn p s" type="button" id="unD">Tải file bổ sung (.xlsx)</button><label class="btn s" style="display:inline-flex;align-items:center">Nạp file đã điền<input type="file" id="unU" accept=".xlsx,.xls" hidden></label></span></h3>
 ${tbl('un',[{h:'Mã trong file',k:'raw',l:1},{h:'Trạm đoán',k:'s',l:1},{h:'CN gợi ý',k:'b',l:1,f:x=>x.b==='?'?'<span class="mu">chưa rõ</span>':esc(x.b)},{h:'Giá trị',k:'v',f:x=>C(x.v)},{h:'Số dòng',k:'n'},{h:'Xuất hiện ở',l:1,v:x=>[...x.src].join(', '),f:x=>esc([...x.src].join(', '))}],L,{sk:3})}</div>`;
 $('#unD').onclick=()=>dlSup(L);$('#unU').onchange=e=>{if(e.target.files.length){show('imp');IMP.add([...e.target.files])}}}
function dlSup(L){const wb=XLSX.utils.book_new();
 const g=[['HƯỚNG DẪN BỔ SUNG MÃ TRẠM CHƯA GÁN'],[''],['1. Sheet Ma_chua_gan liệt kê các mã trạm/tủ trong file tài sản, xuất, thu hồi chưa có trong Danh sách trạm.'],['2. Điền cột "Chi nhánh (anh điền)": một trong ART, CEN, NOR, NOT, OUE01, OUE02, OUE03, SUD (hoặc NATCOM).'],['3. Cột "Trạm (anh điền)": mã trạm chuẩn (ví dụ OUE1151). Để trống thì lấy theo "Trạm đoán".'],['4. Dòng nào chưa biết thì để trống chi nhánh, tool sẽ bỏ qua dòng đó.'],['5. Lưu file, vào tool → tab Mã chưa gán → Nạp file đã điền (hoặc kéo vào tab Nạp dữ liệu). Tool báo số mã Đạt và dòng lỗi.'],['6. Mã đã bổ sung được lưu vào danh sách trạm chuẩn và áp dụng cho mọi kỳ đã nạp.']];
 XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet(g),'Huong_dan');
 const a=[['Mã trong file','Trạm đoán','Chi nhánh gợi ý','Trạm (anh điền)','Chi nhánh (anh điền)','Giá trị ('+uName()+')','Xuất hiện ở']].concat(L.map(x=>[x.raw,x.s.replace(/\*$/,''),x.b==='?'?'':x.b,'','',Math.round(x.v/rt()),[...x.src].join(', ')]));
 const ws=XLSX.utils.aoa_to_sheet(a);ws['!cols']=[{wch:22},{wch:16},{wch:14},{wch:16},{wch:20},{wch:16},{wch:40}];XLSX.utils.book_append_sheet(wb,ws,'Ma_chua_gan');
 XLSX.writeFile(wb,'Bo_sung_ma_tram_'+ymd(new Date())+'.xlsx')}

/* ===== GIAO KHOÁN TRẠM ===== */
/* D.gk={file,upd,rows:[[maTram,btsId,bts4g,ten,maNV,team,cn,dt]]} · D.gkmap={tenGiaoKhoan:tenTrongFileTaiSan} */
function parseGK(rs){const hi=hdrAt(rs,['station code','staff name']);const h=rs[hi].map(lc);const c=k=>h.indexOf(k);
 const ca=c('station code'),cb=c('bts id'),ce=c('bts 4g'),cn=c('staff name'),cc=c('staff code'),ct=c('team name'),cr=c('branch'),cp=c('staff phone');
 const out=[],noName=[],unk=[],brx=[];const seen=new Map(),dup=new Set();
 let nst=0;const nds=[];for(const r of rs.slice(hi+1)){const a=cl(r[ca]),b=cb>=0?cl(r[cb]):'',e=ce>=0?cl(r[ce]):'';if(!a&&!b)continue;if(/STOCK/i.test(a||b)){nst++;continue}const nm=String(r[cn]??'').replace(/\s+/g,' ').trim();
  const row=[a,b,e,nm,String(r[cc]??'').trim(),ct>=0?String(r[ct]??'').trim():'',cr>=0?NB(r[cr]):'',cp>=0?String(r[cp]??'').trim():''];
  if(!nm)noName.push(a||b);const z=gkSite(row);if(!z)unk.push(a||b);else if(z.k==='gk')nds.push(z.s);else if(row[6]&&z.b&&row[6]!==z.b&&BRS.includes(row[6]))brx.push(`${z.s} (${row[6]}→${z.b})`);
  const k=z?z.s:a;if(seen.has(k)&&seen.get(k)!==nm)dup.add(k);seen.set(k,nm);out.push(row)}
 const nv=new Set(out.map(r=>r[3]).filter(Boolean)),L=[['ok',`${out.length.toLocaleString('vi-VN')} trạm giao khoán · ${nv.size} nhân viên`+(nst?` · bỏ qua ${nst} dòng kho (STOCK)`:'')]];
 const by={};out.forEach(r=>{const z=gkSite(r);const b=z?z.b:(r[6]||'?');by[b]=(by[b]||0)+1});L.push(['ok',Object.entries(by).map(([k,v])=>k+' '+v).join(', ')]);
 if(noName.length)L.push(['warn',`${noName.length} trạm chưa có tên nhân viên (cột Q): ${noName.slice(0,8).join(', ')}`]);
 if(unk.length)L.push(['warn',`${unk.length} mã trạm không đọc được: ${unk.slice(0,8).join(', ')}`]);
 if(nds.length)L.push(['info',`${nds.length} mã trạm chưa có trong Danh sách trạm, vẫn so theo mã trong file giao khoán: ${nds.slice(0,8).join(', ')}`]);
 if(dup.size)L.push(['warn',`${dup.size} trạm giao cho 2 người trở lên: ${[...dup].slice(0,8).join(', ')}`]);
 if(brx.length)L.push(['info',`${brx.length} trạm ghi chi nhánh khác Danh sách trạm (tool lấy theo Danh sách trạm): ${brx.slice(0,6).join(', ')}`]);
 L.push(['ok','Tên nhân viên được ghép với tên người đứng tên trong file tài sản (bỏ dấu, không phân biệt thứ tự họ tên, gần đúng). Tên nào chưa ghép được thì sửa ở tab Giao khoán → Ghép tên.']);
 return{data:{rows:out},lvl:noName.length||unk.length||dup.size?'warn':'ok',L}}
function gkSite(r){for(const c of[r[0],r[1],r[2]]){if(!c)continue;const z=res(c);if(z&&z.k!=='guess'&&z.k!=='unk')return z}
 /* mã trạm trong file giao khoán là mã chuẩn: chưa có trong Danh sách trạm thì vẫn dùng, chi nhánh lấy theo file */
 const c=r[0]||r[1];if(/^[A-Z]{2,4}\d{3,4}$/.test(c)){const z=res(c);const b=BRS.includes(r[6])?r[6]:(z&&z.b!=='?'?z.b:'?');return{s:(z?z.s:c).replace(/\*$/,''),b,k:'gk'}}return null}
const gkStock=r=>/STOCK/i.test(r[0]||r[1]);
/* so tên */
const gkTok=s=>noAcc(s).replace(/[^A-Z ]+/g,' ').split(/\s+/).filter(w=>w.length>1&&!/^(MR|MME|MLLE|MRS)$/.test(w));
function lev(a,b){if(a===b)return 0;const m=a.length,n=b.length;if(!m||!n)return m||n;let p=Array.from({length:n+1},(_,j)=>j);for(let i=1;i<=m;i++){const q=[i];for(let j=1;j<=n;j++)q[j]=Math.min(p[j]+1,q[j-1]+1,p[j-1]+(a[i-1]===b[j-1]?0:1));p=q}return p[n]}
function nameSim(A,B){if(!A.length||!B.length)return 0;const[s,l]=A.length<=B.length?[A,B]:[B,A];const used=new Set();let t=0;
 for(const w of s){let bi=-1,bv=0;l.forEach((x,i)=>{if(used.has(i))return;const r=w===x?1:(w.length>=4&&x.startsWith(w))||(x.length>=4&&w.startsWith(x))?.9:1-lev(w,x)/Math.max(w.length,x.length);if(r>bv){bv=r;bi=i}});if(bv>=.75){used.add(bi);t+=bv}}
 return t/Math.max(s.length,Math.min(l.length,s.length+1))}
const GKC={k:'',v:null};
function gkCalc(sn){if(!D.gk||!sn)return null;const key=sn.d+'|'+R.ver+'|'+D.gk.upd+'|'+JSON.stringify(D.gkmap||{}).length+'|'+(D.gkmapU||0);if(GKC.k===key)return GKC.v;
 const un=s=>s.replace(/\*$/,''),SBR=new Map(),M0=new Map();for(const[g,raw,v]of sn.m||[]){if(!g)continue;const z=res(raw,sn.g[raw]);if(!z)continue;const s=un(z.s);if(z.b!=='?')SBR.set(s,z.b);let o=M0.get(s);if(!o){o=new Map();M0.set(s,o)}o.set(g,(o.get(g)||0)+v)}
 const MG=new Map([...M0].map(([s,o])=>[s,[...o].sort((a,b)=>b[1]-a[1])]));const sv=new Map();for(const[raw,c,q,v]of sn.a){const z=res(raw,sn.g[raw]);if(!z)continue;const s=un(z.s);if(z.b!=='?')SBR.set(s,z.b);sv.set(s,(sv.get(s)||0)+v)}
 /* nhân viên giao khoán */
 const ST2=new Map(),EMP=new Map();
 for(const r of D.gk.rows){if(gkStock(r))continue;const z=gkSite(r);const s=z?z.s:(r[0]||r[1]);const b=z&&z.b!=='?'?z.b:(SBR.get(s)||r[6]||'?');const nm=r[3]||'(Chưa có tên)';
  let o=ST2.get(s);if(!o){o={s,b,raw:r[0]||r[1],staff:[],team:r[5],known:!!z};ST2.set(s,o)}if(!r[3]){o.noname=1;continue}if(!o.staff.includes(nm))o.staff.push(nm);
  let e=EMP.get(nm);if(!e){e={g:nm,code:r[4],team:r[5],phone:r[7],b,sites:new Set()};EMP.set(nm,e)}e.sites.add(s)}
 /* người đứng tên tài sản */
 const HOLD=new Map();for(const[s,a]of MG)for(const[g,v]of a){let h=HOLD.get(g);if(!h){h={g,t:gkTok(g),s:new Map(),v:0};HOLD.set(g,h)}h.s.set(s,v);h.v+=v}
 const keyOf=t=>[...t].sort().join(' '),HK=new Map();for(const h of HOLD.values()){const k=keyOf(h.t);if(!HK.has(k))HK.set(k,h.g)}
 const map=D.gkmap||{};
 for(const e of EMP.values()){const t=gkTok(e.g);let best=null,bs=0,ov=0;
  if(map[e.g]!=null){e.link=map[e.g]||'';e.kind=map[e.g]?'tay':'khong';e.sc=1}
  else{const ex=HK.get(keyOf(t));if(ex){e.link=ex;e.kind='khop';e.sc=1}
   else{for(const h of HOLD.values()){const sc=nameSim(t,h.t);if(sc<.5)continue;let o=0;for(const s of e.sites)if(h.s.has(s))o++;const f=sc+(o?Math.min(.25,o/e.sites.size*.5):0);if(f>bs){bs=f;best=h;ov=o}}
    if(best&&(bs>=.85||(bs>=.6&&ov>0))){e.link=best.g;e.kind='gan';e.sc=Math.min(1,bs)}else{e.link='';e.kind='chua';e.sc=0}}}
  /* gợi ý: người giữ nhiều trạm nhất trong số trạm giao */
  const cnt=new Map();for(const s of e.sites)for(const[g]of MG.get(s)||[])cnt.set(g,(cnt.get(g)||0)+1);e.sug=[...cnt].sort((a,b)=>b[1]-a[1]).slice(0,3)}
 /* so từng trạm */
 const rows=[];const linkOf=nm=>(EMP.get(nm)||{}).link||'';
 for(const o of ST2.values()){if(!inBr(o.b))continue;const hs=MG.get(o.s)||[],tv=sv.get(o.s)||0,hv=hs.reduce((a,x)=>a+x[1],0);const L=o.staff.map(linkOf).filter(Boolean);
  const mine=hs.filter(([g])=>L.includes(g)),others=hs.filter(([g])=>!L.includes(g)),ov=others.reduce((a,x)=>a+x[1],0),mv=mine.reduce((a,x)=>a+x[1],0);
  let st;if(!o.known)st='unk';else if(!o.staff.length)st='noname';else if(!hs.length)st=tv>0?'nomgr':'noas';else if(!L.length)st='nohold';else if(!mine.length)st='diff';else if(others.length)st='multi';else st='ok';
  rows.push({s:o.s,b:o.b,raw:o.raw,gk:o.staff.join(', '),link:L.join(', '),hold:hs.map(([g,v])=>g).join(', '),hs,n:hs.length,tv,hv,mv,ov,st,team:o.team})}
 /* trạm có tài sản nhưng không có trong giao khoán */
 const out=[];for(const[s,hs]of MG){if(ST2.has(s))continue;const b=SBR.get(s)||'?';if(b===TT||s.startsWith(RT)||!inBr(b))continue;const hv=hs.reduce((a,x)=>a+x[1],0);if(hv<=0)continue;
  out.push({s,b,raw:s,gk:'',link:'',hold:hs.map(([g])=>g).join(', '),hs,n:hs.length,tv:sv.get(s)||hv,hv,mv:0,ov:hv,st:'out'})}
 /* theo nhân viên */
 const emps=[];for(const e of EMP.values()){if(!inBr(e.b))continue;const mine=rows.filter(r=>r.st!=='noname'&&r.gk.split(', ').includes(e.g));const h=e.link?HOLD.get(e.link):null;
  let xn=0,xv=0;if(h)for(const[s,v]of h.s){const t=ST2.get(s);if(!t||!t.staff.some(n=>linkOf(n)===e.link)){xn++;xv+=v}}
  emps.push({g:e.g,code:e.code,team:e.team,phone:e.phone,b:e.b,link:e.link,kind:e.kind,sc:e.sc,sug:e.sug,n:e.sites.size,ok:mine.filter(r=>r.st==='ok').length,diff:mine.filter(r=>r.st==='diff'||r.st==='nohold').length,multi:mine.filter(r=>r.st==='multi').length,
   none:mine.filter(r=>r.st==='noas'||r.st==='nomgr').length,ov:mine.reduce((a,r)=>a+(r.st==='diff'||r.st==='multi'||r.st==='nohold'?r.ov:0),0),mv:mine.reduce((a,r)=>a+r.mv,0),xn,xv})}
 /* người đứng tên tài sản không có trong giao khoán */
 const linked=new Set([...EMP.values()].map(e=>e.link).filter(Boolean));const free=[...HOLD.values()].filter(h=>!linked.has(h.g)).map(h=>({g:h.g,n:h.s.size,v:h.v})).sort((a,b)=>b.v-a.v);
 const v={MG,SBR,rows,out,emps,free,holders:[...HOLD.keys()].sort((a,b)=>a.localeCompare(b,'vi'))};GKC.k=key;GKC.v=v;return v}
const GKS={t:'st',f:'bad'};
const GKST={ok:['Khớp','ok'],diff:['Khác người','err'],multi:['Nhiều người đứng tên','warn'],nomgr:['Có tài sản, chưa ghi người','warn'],noas:['Chưa có tài sản','info'],nohold:['NV giao khoán không đứng tên TS','err'],noname:['Chưa ghi tên NV giao khoán','warn'],unk:['Mã trạm lạ','info'],out:['Ngoài giao khoán','acc']};
const gkTag=s=>`<span class="tag ${GKST[s][1]}">${GKST[s][0]}</span>`;
const GKK={khop:['Khớp tên','ok'],gan:['Gần đúng','acc'],tay:['Ghép tay','info'],khong:['Không đứng tên tài sản','warn'],chua:['Chưa ghép','err']};
async function vGk(){const el=$('#p-gk');
 if(!D.gk){el.innerHTML=emptyState('Chưa có file giao khoán trạm','Nạp file giao khoán (ListStation…xls): mã trạm cột A, B; tên nhân viên cột Q. Tool so người được giao khoán với người đang đứng tên tài sản tại từng trạm và cảnh báo trạm lệch.','<button class="btn p" type="button" data-go="tab:imp">Nạp file giao khoán</button>');return}
 const sb=await loadSnap(S.B);if(!sb){el.innerHTML=noData();return}ld('Đang so giao khoán…');const G=gkCalc(sb);ld('');
 const R0=G.rows,cnt=k=>R0.filter(r=>r.st===k).length,val=k=>R0.filter(r=>r.st===k).reduce((a,r)=>a+r.ov,0);
 const nd=cnt('diff'),nm=cnt('multi'),nh=cnt('nohold'),nch=G.emps.filter(e=>e.kind==='chua').length;
 el.innerHTML=`${nd||nm||nh?`<div class="al err"><b class="t dn">Cảnh báo lệch giao khoán</b>${nd} trạm người đứng tên tài sản khác người được giao (${C(val('diff'))}) · ${nh} trạm giao cho nhân viên không đứng tên tài sản nào (${C(val('nohold'))}) · ${nm} trạm có thêm người khác đứng tên (${C(val('multi'))})${G.out.length?` · ${G.out.length} trạm có tài sản nhưng không có trong giao khoán`:''}</div>`:`<div class="al ok"><b class="t">Khớp giao khoán</b>Không có trạm lệch người đứng tên.</div>`}
 ${nch?`<div class="al warn"><b class="t wa">${nch} nhân viên giao khoán không tìm thấy tên trong file tài sản</b>Tool coi là chưa đứng tên tài sản nào. Nếu thực ra tên viết khác, vào <a href="#" id="gkGo">Ghép tên</a> chọn tên tương ứng, tool tính lại ngay.</div>`:''}
 <div class="k">${kpi('Trạm giao khoán',R0.length,D.gk.rows.length+' dòng · '+G.emps.length+' nhân viên')}${kpi('Khớp',cnt('ok'),R0.length?nf0.format(cnt('ok')/R0.length*100)+'%':'','g')}${kpi('Khác người',nd,C(val('diff')),'w')}${kpi('NV giao khoán không đứng tên TS',nh,C(val('nohold')),'w')}${kpi('Nhiều người đứng tên',nm,C(val('multi')),'o')}${kpi('Chưa có tài sản / chưa ghi người',cnt('noas')+cnt('nomgr'),cnt('noname')?cnt('noname')+' trạm chưa ghi tên NV':'')}${kpi('Có tài sản ngoài giao khoán',G.out.length,C(G.out.reduce((a,r)=>a+r.hv,0)),'w')}</div>
 <div class="card"><h3>So giao khoán với người đứng tên tài sản <small>kỳ ${vnd(S.B)} · file ${esc(D.gk.file||'')}</small><span class="r"><button class="btn s p" type="button" id="gkX">Xuất Excel</button></span></h3>
 <div class="sub"><button type="button" data-t="st" class="${GKS.t==='st'?'on':''}">Theo trạm</button><button type="button" data-t="nv" class="${GKS.t==='nv'?'on':''}">Theo nhân viên</button><button type="button" data-t="map" class="${GKS.t==='map'?'on':''}">Ghép tên ${nch?`<span class="tag err">${nch}</span>`:''}</button></div><div id="gkB"></div></div>`;
 $$('#p-gk .sub button').forEach(b=>b.onclick=()=>{GKS.t=b.dataset.t;vGk()});$('#gkX').onclick=()=>xlsGk(G);if($('#gkGo'))$('#gkGo').onclick=e=>{e.preventDefault();GKS.t='map';vGk()};
 const box=$('#gkB');
 if(GKS.t==='st'){const F={bad:r=>r.st==='diff'||r.st==='multi'||r.st==='nohold',diff:r=>r.st==='diff',nohold:r=>r.st==='nohold',multi:r=>r.st==='multi',none:r=>r.st==='noas'||r.st==='nomgr',nolink:r=>r.st==='unk'||r.st==='noname',ok:r=>r.st==='ok',out:r=>r.st==='out',all:()=>true};
  const L=GKS.f==='out'||GKS.f==='all'?R0.concat(G.out).filter(F[GKS.f]):R0.filter(F[GKS.f]);
  box.innerHTML=`<div style="margin-bottom:8px"><select id="gkF">${[['bad','Tất cả trạm lệch'],['diff','Khác người'],['nohold','NV giao khoán không đứng tên TS'],['multi','Nhiều người đứng tên'],['none','Chưa có tài sản / chưa ghi người'],['nolink','Chưa ghi tên NV, mã trạm lạ'],['out','Có tài sản ngoài giao khoán'],['ok','Khớp'],['all','Tất cả']].map(([k,t])=>`<option value="${k}" ${GKS.f===k?'selected':''}>${t}</option>`).join('')}</select> <span class="mu">${L.length.toLocaleString('vi-VN')} trạm · bấm dòng để xem tài sản trạm</span></div>
  ${tbl('gks',[{h:'Trạm',k:'s',l:1},{h:'CN',k:'b',l:1},{h:'Trạng thái',l:1,v:x=>GKST[x.st][0],f:x=>gkTag(x.st)},{h:'Giao khoán cho',k:'gk',l:1,f:x=>x.gk?`<a href="#" data-gke="${esc(x.gk.split(', ')[0])}">${esc(x.gk)}</a>`:'<span class="mu">–</span>'},{h:'Đang đứng tên tài sản',k:'hold',l:1,f:x=>x.hs.map(([g,v])=>`<span class="${x.link.split(', ').includes(g)?'':'red'}">${esc(g)}</span> <span class="mu">${C(v)}</span>`).join('<br>')||'<span class="mu">–</span>'},{h:'Giá trị người khác giữ',k:'ov',f:x=>x.ov?`<b class="${x.st==='out'?'':'red'}">${C(x.ov)}</b>`:''},{h:'Tổng tài sản trạm',k:'tv',f:x=>C(x.tv)}],L,{click:x=>openStation(x.s),sk:5})}`;
  $('#gkF').onchange=e=>{GKS.f=e.target.value;vGk()}}
 else if(GKS.t==='nv'){box.innerHTML=tbl('gkn',[{h:'Nhân viên giao khoán',k:'g',l:1},{h:'Mã NV',k:'code',l:1},{h:'Đội',k:'team',l:1},{h:'Tên trong file tài sản',k:'link',l:1,f:x=>x.link?esc(x.link)+(x.kind==='gan'?` <span class="tag acc">${nf0.format(x.sc*100)}%</span>`:''):`<span class="tag ${GKK[x.kind][1]}">${GKK[x.kind][0]}</span>`},{h:'Trạm được giao',k:'n'},{h:'Khớp',k:'ok'},{h:'Khác người',k:'diff',f:x=>x.diff?`<b class="red">${x.diff}</b>`:''},{h:'Nhiều người',k:'multi',f:x=>x.multi||''},{h:'Chưa có TS',k:'none',f:x=>x.none||''},{h:'Người khác giữ',k:'ov',f:x=>x.ov?`<span class="red">${C(x.ov)}</span>`:''},{h:'Đứng tên ngoài trạm giao',k:'xn',t:'Số trạm nhân viên đang đứng tên tài sản nhưng không được giao khoán',f:x=>x.xn?`<span class="red">${x.xn}</span> · ${C(x.xv)}`:''}],G.emps,{click:x=>openGkEmp(x.g),sk:9})}
 else{const dl=`<datalist id="gkDL">${G.holders.map(h=>`<option value="${esc(h)}">`).join('')}</datalist>`;const L=[...G.emps].sort((a,b)=>(a.kind==='chua'?0:a.kind==='gan'?1:2)-(b.kind==='chua'?0:b.kind==='gan'?1:2)||b.n-a.n);
  box.innerHTML=`<p class="mu" style="margin:0 0 8px">Tên trong file giao khoán và file tài sản viết khác nhau (dấu, thứ tự họ tên, chính tả). Tool tự ghép: <b>Khớp tên</b> = giống hệt khi bỏ dấu và đảo thứ tự; <b>Gần đúng</b> = giống phần lớn và có đứng tên tài sản ở trạm được giao. Kiểm tra cột "Gần đúng", chọn tên cho dòng "Chưa ghép" (gõ để tìm), hoặc chọn "Không đứng tên tài sản" nếu người này không có tên trong file tài sản.${S.admin?'':' <b>Đăng nhập admin để lưu.</b>'}</p>${dl}
  <div class="tw" style="max-height:560px"><table><thead><tr><th class="l">Nhân viên giao khoán</th><th class="l">CN</th><th>Số trạm</th><th class="l">Tình trạng</th><th class="l">Tên trong file tài sản</th><th class="l">Gợi ý (người giữ nhiều trạm được giao)</th></tr></thead><tbody>
  ${L.map((e,i)=>`<tr><td class="l"><b>${esc(e.g)}</b><br><span class="mu">${esc(e.code||'')} ${esc(e.team||'')}</span></td><td class="l">${esc(e.b)}</td><td>${e.n}</td><td class="l"><span class="tag ${GKK[e.kind][1]}">${GKK[e.kind][0]}${e.kind==='gan'?' '+nf0.format(e.sc*100)+'%':''}</span></td>
   <td class="l"><input type="text" list="gkDL" data-gkm="${i}" value="${esc(e.kind==='khong'?'':e.link)}" placeholder="${e.kind==='khong'?'không đứng tên tài sản':'gõ tên…'}" style="width:230px" ${S.admin?'':'disabled'}> <label class="mu" style="white-space:nowrap"><input type="checkbox" data-gkn="${i}" ${e.kind==='khong'?'checked':''} ${S.admin?'':'disabled'}> Không đứng tên</label></td>
   <td class="l">${e.sug.map(([g,n])=>`<span class="chip" ${S.admin?`data-gks="${i}" data-v="${esc(g)}"`:''}>${esc(g)} · ${n}/${e.n}</span>`).join(' ')||'<span class="mu">–</span>'}</td></tr>`).join('')}</tbody></table></div>
  ${S.admin?`<div style="display:flex;gap:8px;margin-top:10px"><button class="btn p" type="button" id="gkSave">Lưu ghép tên</button><button class="btn" type="button" id="gkAuto">Bỏ ghép tay, để tool tự ghép lại</button></div>`:''}`;
  $$('[data-gks]').forEach(c=>c.onclick=()=>{const x=$(`[data-gkm="${c.dataset.gks}"]`);x.value=c.dataset.v;$(`[data-gkn="${c.dataset.gks}"]`).checked=false});
  if(S.admin){$('#gkSave').onclick=async()=>{const m={...(D.gkmap||{})};let n=0;L.forEach((e,i)=>{const v=$(`[data-gkm="${i}"]`).value.trim(),no=$(`[data-gkn="${i}"]`).checked;
     if(no){if(m[e.g]!==''){m[e.g]='';n++}}else if(v&&v!==e.link){m[e.g]=v;n++}else if(v&&e.kind==='tay'){m[e.g]=v}else if(!v&&e.kind==='tay'){delete m[e.g];n++}});
    const bad=Object.values(m).filter(v=>v&&!G.holders.includes(v));if(bad.length){toast('Tên không có trong file tài sản: '+bad.slice(0,3).join(', '),5000);return}
    await gkSaveMap(m);toast('Đã lưu '+n+' thay đổi ghép tên');vGk()};
   $('#gkAuto').onclick=async()=>{await gkSaveMap({});toast('Đã bỏ ghép tay');vGk()}}}
 $$('[data-gke]').forEach(a=>a.onclick=e=>{e.preventDefault();e.stopPropagation();openGkEmp(a.dataset.gke)});flushFigs()}
async function gkSaveMap(m){D.gkmap=m;D.gkmapU=Date.now();GKC.k='';await ST.set('gkmap',m)}
async function openGkEmp(g){const sb=await loadSnap(S.B);const G=gkCalc(sb);const e=G&&G.emps.find(x=>x.g===g);if(!e){toast('Không thấy '+g);return}
 const mine=G.rows.filter(r=>r.gk.split(', ').includes(g));const xs=[];if(e.link)for(const[s,hs]of G.MG){const h=hs.find(x=>x[0]===e.link);if(h&&!mine.some(r=>r.s===s)){xs.push({s,b:G.SBR.get(s)||'',v:h[1],gk:(G.rows.find(r=>r.s===s)||{}).gk||''})}}
 openDr(`<h2>${esc(g)}</h2><p class="mu" style="margin:0 0 6px">${esc(e.b)} · ${esc(e.team||'')} · Mã NV ${esc(e.code||'–')}${e.phone?' · ĐT '+esc(e.phone):''}<br>Tên trong file tài sản: ${e.link?`<a href="#" data-go="emp:${esc(e.link)}"><b>${esc(e.link)}</b></a>`:`<span class="tag ${GKK[e.kind][1]}">${GKK[e.kind][0]}</span>`}</p>
 <div class="k">${kpi('Trạm được giao',e.n,'','o')}${kpi('Khớp',e.ok,'','g')}${kpi('Khác người',e.diff,C(e.ov),'w')}${kpi('Đứng tên ngoài trạm giao',xs.length,C(xs.reduce((a,x)=>a+x.v,0)),'w')}</div>
 <div class="card"><h3>Trạm được giao khoán</h3>${tbl('gke',[{h:'Trạm',k:'s',l:1},{h:'CN',k:'b',l:1},{h:'Trạng thái',l:1,v:x=>GKST[x.st][0],f:x=>gkTag(x.st)},{h:'Đang đứng tên',k:'hold',l:1,f:x=>x.hs.map(([n,v])=>`<span class="${x.link.split(', ').includes(n)?'':'red'}">${esc(n)}</span> <span class="mu">${C(v)}</span>`).join('<br>')||'<span class="mu">–</span>'},{h:'Tổng tài sản trạm',k:'tv',f:x=>C(x.tv)}],mine,{click:x=>openStation(x.s),sk:4,h:380})}</div>
 ${xs.length?`<div class="card"><h3>Đang đứng tên tài sản ở trạm không được giao <small>${xs.length} trạm</small></h3>${tbl('gkx',[{h:'Trạm',k:'s',l:1},{h:'CN',k:'b',l:1},{h:'Giá trị đứng tên',k:'v',f:x=>`<span class="red">${C(x.v)}</span>`},{h:'Giao khoán cho',k:'gk',l:1,f:x=>esc(x.gk||'–')}],xs,{click:x=>openStation(x.s),sk:2,h:320})}</div>`:''}`)}
function xlsGk(G){const wb=XLSX.utils.book_new(),u=uName(),L=GKST;
 const st=r=>[r.s,r.b,L[r.st][0],r.gk,r.link,r.hs.map(([g,v])=>g+' ('+xv(v)+')').join('; '),xv(r.ov),xv(r.tv)];const H=['Trạm','CN','Trạng thái','Giao khoán cho','Tên trong file tài sản','Đang đứng tên tài sản ('+u+')','Giá trị người khác giữ ('+u+')','Tổng tài sản trạm ('+u+')'];
 addSheet(wb,'Lech',[['TRẠM LỆCH GIAO KHOÁN – kỳ '+vnd(S.B)],H].concat(G.rows.filter(r=>r.st==='diff'||r.st==='multi'||r.st==='nohold').sort((a,b)=>b.ov-a.ov).map(st)),[12,8,20,26,26,50,16,16]);
 addSheet(wb,'Ngoai giao khoan',[H].concat(G.out.sort((a,b)=>b.hv-a.hv).map(st)),[12,8,20,10,10,50,16,16]);
 addSheet(wb,'Tat ca tram',[H].concat(G.rows.map(st)),[12,8,20,26,26,50,16,16]);
 addSheet(wb,'Nhan vien',[['Nhân viên giao khoán','Mã NV','Đội','CN','Tên trong file tài sản','Cách ghép','Trạm được giao','Khớp','Khác người','Nhiều người','Chưa có TS','Người khác giữ ('+u+')','Số trạm đứng tên ngoài giao','Giá trị ngoài giao ('+u+')']].concat(G.emps.map(e=>[e.g,e.code,e.team,e.b,e.link,GKK[e.kind][0],e.n,e.ok,e.diff,e.multi,e.none,xv(e.ov),e.xn,xv(e.xv)])),[26,8,18,8,26,14,8,8,8,8,8,14,10,14]);
 addSheet(wb,'Nguoi giu TS khong giao',[['Người đứng tên tài sản không có trong giao khoán','Số trạm','Giá trị ('+u+')']].concat(G.free.map(f=>[f.g,f.n,xv(f.v)])),[40,10,16]);
 XLSX.writeFile(wb,'GiaoKhoan_'+(S.B||'')+'_'+u+'.xlsx')}
/* dòng cảnh báo ở Tổng quan */
function gkAlert(sb){if(!D.gk||!sb)return'';const G=gkCalc(sb);if(!G)return'';const d=G.rows.filter(r=>r.st==='diff'||r.st==='nohold'),m=G.rows.filter(r=>r.st==='multi');if(!d.length&&!m.length)return'';
 return`<div class="al warn"><b class="t wa">Giao khoán: ${d.length} trạm khác người đứng tên, ${m.length} trạm nhiều người</b>${d.sort((a,b)=>b.ov-a.ov).slice(0,5).map(r=>`<span class="chip" data-go="st:${esc(r.s)}" data-tip="${esc('Giao: '+r.gk+' · Đứng tên: '+r.hold)}">${esc(r.s)} <b class="dn">${C(r.ov)}</b></span>`).join('')}<a href="#" data-go="tab:gk" class="mu">xem tab Giao khoán</a></div>`}

/* ===== NẠP DỮ LIỆU ===== */
const IMP={items:[],busy:false,master:null,
 add(files){for(const f of files)this.items.push({f,name:f.name,size:f.size,t:'',st:'wait',L:[],lvl:''});this.render();this.run()},
 async run(){if(this.busy)return;this.busy=true;try{
  this.master=JSON.parse(JSON.stringify(D.master||{ds:[],mau:[],fix:[]}));
  for(const it of this.items.filter(i=>i.st==='wait')){it.st='detect';this.render();try{const d=await detect(it.f);it.t=d.t;it.det=d;if(d.t==='?'){it.st='done';it.lvl='err';it.L=[['err',d.why]]}}catch(e){it.st='done';it.lvl='err';it.L=[['err','Không đọc được file: '+(e.message||e)]]}}
  const todo=this.items.filter(i=>i.st==='detect').sort((a,b)=>ORDER[a.t]-ORDER[b.t]);
  for(const it of todo){it.st='parse';this.render();await tick();
   try{const d=it.det;let r;
    if(it.t==='ds'){r=parseDS(d.rs);this.master.ds=r.data}
    else if(it.t==='mau'){const rs=d.rs||(await it.f.text()).split(/\r?\n/).filter(Boolean).map(csvSplit);r=parseMau(rs);this.master.mau=r.data}
    else if(it.t==='sup'){r=parseSup(d.wb,d.sn);const m=new Map((this.master.fix||[]).map(x=>[x[0],x]));for(const x of r.data||[])m.set(x[0],x);this.master.fix=[...m.values()]}
    else if(it.t==='norm')r=parseNorm(d.rs);
    else if(it.t==='gk'){r=parseGK(d.rs);if(r.data){GKROWS=r.data.rows;buildR(this.master)}}
    else if(it.t==='asset')r=await parseAsset(it.f,(p,n)=>{it.prog=`Đang đọc ${nf0.format(p*100)}% · ${n.toLocaleString('vi-VN')} dòng`;this.render()});
    else if(it.t==='x'||it.t==='w')r=parseMov(it.t,d.rs);
    else if(it.t==='plan'){r=parsePlan(d.wb);if(r.data){r.data.name=it.name;it.sug=await planSugg(r.data)}}
    Object.assign(it,{r,lvl:r.lvl,L:r.L,st:'done',prog:''});if(['ds','mau','sup'].includes(it.t))buildR(this.master)}
   catch(e){console.error(e);Object.assign(it,{st:'done',lvl:'err',L:[['err','Lỗi khi đọc: '+(e.message||e)]]})}this.render()}
  /* đọc lại file nạp trước danh sách trạm để tính lại mã chưa gán */
 }finally{this.busy=false;this.render()}},
 render(){const el=$('#impList');if(!el)return;const its=this.items;
  el.innerHTML=its.map((it,i)=>`<div class="rp"><div><b>${esc(it.name)}</b><span class="mu">${(it.size/1048576).toFixed(1)} MB</span>${it.t?`<span class="tag info">${LBL[it.t]}</span>`:''}${it.st!=='done'?`<span class="tag info">${it.prog||(it.st==='wait'?'Chờ':it.st==='detect'?'Đang nhận dạng…':'Đang đọc…')}</span>`:`<span class="tag ${it.lvl}">${it.lvl==='ok'?'Đạt':it.lvl==='warn'?'Cảnh báo':'Lỗi'}</span>`}${it.saved?'<span class="tag ok">Đã lưu</span>':''}<button class="btn s" type="button" style="margin-left:auto" data-rm="${i}">Bỏ</button></div>
   ${it.L.length?`<ul>${it.L.map(([l,t])=>`<li class="${l}">${t}</li>`).join('')}</ul>`:''}${it.t==='plan'&&it.r&&it.r.data&&!it.saved?planForm(it,i):''}</div>`).join('');
  const can=its.some(i=>i.st==='done'&&i.lvl!=='err'&&!i.saved);$('#impSave').disabled=!can||this.busy;$('#impSave').textContent=S.admin?'Lưu vào dữ liệu':'Đăng nhập admin để lưu';
  $$('[data-rm]').forEach(b=>b.onclick=()=>{const x=its.splice(+b.dataset.rm,1)[0];if(x&&x.t==='gk'&&!x.saved){GKROWS=D.gk?D.gk.rows:null;buildR(IMP.master||D.master)}if(!its.length)buildR(D.master);this.render()});
  $$('[data-pdc]').forEach(x=>x.oninput=()=>{its[+x.dataset.pdc].dc=x.value.trim()});
  $$('[data-pdir]').forEach(x=>x.onchange=()=>{const[i,j]=x.dataset.pdir.split(':');its[+i].r.data.items[+j].dir=x.value});
  $$('[data-pex]').forEach(x=>x.onchange=()=>{const[i,j]=x.dataset.pex.split(':');its[+i].r.data.items[+j].ex=!x.checked});
  $$('[data-psg]').forEach(x=>x.onclick=()=>{const[i,v]=[+x.dataset.psg,x.dataset.v];its[i].dc=v;const inp=$(`[data-pdc="${i}"]`);inp.value=v;inp.dispatchEvent(new Event('input'))})}};
function planForm(it,i){const d=it.r.data;return`<div style="padding:4px 12px 12px"><div class="fm" style="grid-template-columns:minmax(0,320px) 1fr;align-items:end"><label>Số quyết định (DC) của kế hoạch – không bắt buộc<input type="text" data-pdc="${i}" value="${esc(it.dc||'')}" placeholder="ví dụ 2026_392823"></label><div class="mu">Gợi ý theo số trạm trùng: ${(it.sug||[]).map(s=>`<span class="chip" data-psg="${i}" data-v="${esc(s[0])}">${esc(s[0])} · ${s[1]} trạm</span>`).join(' ')||'không có'}</div></div>
 <div class="tw" style="margin-top:8px;max-height:300px"><table><thead><tr><th class="l">Tên hàng</th><th class="l">Mã</th><th>Tổng KH</th><th class="l">Loại</th><th class="l">Tính %</th></tr></thead><tbody>${d.items.map((x,j)=>`<tr><td class="l">${esc(x.n)}</td><td class="l">${esc(x.codes.join(', '))}</td><td>${nf0.format(d.rows.reduce((a,r)=>a+r[1][j],0))}</td><td class="l"><select data-pdir="${i}:${j}"><option value="x" ${x.dir==='x'?'selected':''}>Xuất</option><option value="w" ${x.dir==='w'?'selected':''}>Thu hồi</option></select></td><td class="l"><input type="checkbox" data-pex="${i}:${j}" ${x.ex?'':'checked'}></td></tr>`).join('')}</tbody></table></div></div>`}
async function planSugg(pd){const ps=new Set(pd.rows.map(([c])=>{const z=res(c);return z?z.s:c}));const m=new Map();
 const scan=l=>{if(!l[6]||l[6].startsWith('PO'))return;const z=res(l[1],l[7]);if(!z||!ps.has(z.s))return;let s=m.get(l[6]);if(!s){s=new Set();m.set(l[6],s)}s.add(z.s)};
 for(const t of['x','w'])for(const ym of D.idx.months[t]){const doc=await loadMov(t,ym);if(doc)doc.l.forEach(scan)}
 for(const it of IMP.items)if((it.t==='x'||it.t==='w')&&it.r&&it.r.data)it.r.data.lines.forEach(scan);
 return[...m].map(([k,s])=>[k,s.size]).sort((a,b)=>b[1]-a[1]).slice(0,5)}
async function impSave(){if(!S.admin){adminLogin(impSave);return}const its=IMP.items.filter(i=>i.st==='done'&&i.lvl!=='err'&&!i.saved);
 for(const it of its)if(it.t==='plan'){it.dc=normDC(it.dc)||('KH '+it.name.replace(/\.[^.]+$/,'').replace(/^[0-9a-f]{8}-/,'').slice(0,40))}
 ld('Đang lưu…');const log=[];let mchg=false;
 try{for(const it of its){const d=it.r.data;
   if(['ds','mau','sup'].includes(it.t))mchg=true;
   else if(it.t==='asset'){await ST.set('snap:'+d.d,d);D.snaps[d.d]=d;const o=D.idx.snaps.find(s=>s.d===d.d);if(o)Object.assign(o,{file:d.file,n:d.n});else D.idx.snaps.push({d:d.d,file:d.file,n:d.n,t:0,tt:0,br:{}});D.idx.snaps.sort((a,b)=>a.d<b.d?-1:1);Object.assign(D.names,Object.fromEntries(Object.entries(it.r.names).filter(([k])=>!D.names[k])))}
   else if(it.t==='x'||it.t==='w'){const[c0,c1]=d.cov;for(const ym of monthsBetween(c0,c1)){const k=it.t+':'+ym;let doc=await loadMov(it.t,ym)||{l:[],dept:{}};doc.l=doc.l.filter(l=>l[0]<c0||l[0]>c1).concat(d.lines.filter(l=>l[0].slice(0,7)===ym));doc.dept=Object.assign(doc.dept||{},d.depts);D.mov[k]=doc;await ST.set('mov:'+k,doc);if(!D.idx.months[it.t].includes(ym))D.idx.months[it.t].push(ym)}
    D.idx.months[it.t].sort();const cv=D.idx.cov[it.t].filter(r=>!(r[0]>=c0&&r[1]<=c1));cv.push([c0,c1,it.name]);D.idx.cov[it.t]=cv.sort((a,b)=>a[0]<b[0]?-1:1);Object.assign(D.names,it.r.names)}
   else if(it.t==='plan'){const fm=/(20\d{2})(\d{2})(\d{2})/.exec(it.name);const from=fm&&+fm[2]>=1&&+fm[2]<=12&&+fm[3]>=1&&+fm[3]<=31?fm[1]+'-'+fm[2]+'-'+fm[3]:'';const p={dc:it.dc,from,name:it.name,sheet:d.sheet,items:d.items,rows:d.rows,upd:Date.now()};await ST.set('plan:'+it.dc,p);D.plans[it.dc]=p;if(!D.idx.plans.includes(it.dc))D.idx.plans.push(it.dc)}
   else if(it.t==='norm'){D.norm={rows:d,upd:Date.now()};await ST.set('norm',D.norm)}
   else if(it.t==='gk'){D.gk={file:it.name,rows:d.rows,upd:Date.now()};GKROWS=d.rows;await ST.set('giaokhoan',D.gk);GKC.k=''}
   it.saved=true;log.push({u:Date.now(),f:it.name,t:LBL[it.t],l:it.lvl,m:it.L.filter(x=>x[0]!=='info').map(x=>x[1].replace(/<[^>]+>/g,'')).slice(0,3).join(' | ')})}
  if(mchg){D.master=IMP.master;D.master.upd=Date.now();await ST.set('master',D.master)}buildR(D.master);
  await ST.set('names',D.names);await rebuildDC();await rebuildTotals();D.idx.log=(D.idx.log||[]).concat(log).slice(-200);D.idx.upd=Date.now();await ST.set('idx',D.idx);
  pickPeriods();CMP.key='';await saveAlerts();toast('Đã lưu '+its.length+' file'+(ST.mode==='local'?' trên máy':' lên Google Sheet'))}
 catch(e){console.error(e);toast('Lỗi khi lưu: '+(e.message||e),6000)}finally{ld('');refreshSel();if(S.tab==='imp')await vImp();else IMP.render()}}
async function rebuildTotals(){for(const s of D.idx.snaps){const d=await loadSnap(s.d);if(!d)continue;let t=0,tt=0;const br={};for(const[raw,c,q,v]of d.a){const z=res(raw,d.g[raw]);if(!z)continue;if(z.b===TT){tt+=v;continue}t+=v;br[z.b]=(br[z.b]||0)+v}s.t=t;s.tt=tt;s.br=br}}
async function saveAlerts(){try{const sa=S.A,sb=S.B;if(!sb)return;const r=await prep();if(!r)return;const pl=[];for(const dc of D.idx.plans){const c=await planCalc(dc);if(!c)continue;const px=c.PX;pl.push({dc,px:px.total,none:px.none,n:px.n})}
 await ST.set('alerts',{upd:Date.now(),A:sa,B:sb,thr:S.cfg.thr,rate:S.cfg.rate,top:r.alerts.slice(0,10).map(o=>({s:o.s,b:o.b,dv:Math.round(usd(o.dv)),pv:Math.round(usd(o.pv)),cv:Math.round(usd(o.cv))})),plans:pl,emails:S.cfg.emails})}catch(e){console.warn(e)}}
async function vImp(){const el=$('#p-imp');
 const cov=t=>D.idx.cov[t].map(r=>`<span class="chip">${vnd(r[0])} → ${vnd(r[1])}</span>`).join(' ')||'<span class="mu">chưa có</span>';
 el.innerHTML=`<div class="card"><h3>Nạp file <small>thả nhiều file một lúc, tool tự nhận dạng và kiểm tra</small></h3>
 <div class="dz" id="dz"><b>Kéo thả file vào đây hoặc bấm để chọn</b>Tổng tài sản trạm (.csv) · Export Summary · Import Summary (thu hồi) · Danh sách trạm · Mau_Tram_Tu · Kế hoạch · Định mức · Giao khoán trạm · File bổ sung mã chưa gán<input type="file" id="fi" multiple hidden></div>
 <div id="impList"></div><div style="display:flex;gap:8px;margin-top:10px"><button class="btn p" type="button" id="impSave" disabled>Lưu vào dữ liệu</button><button class="btn" type="button" id="impClr">Xóa danh sách</button></div></div>
 <div class="g2"><div class="card"><h3>Dữ liệu đã có</h3>
  <p style="margin:4px 0"><b>Kỳ chốt tài sản:</b> ${D.idx.snaps.map(s=>`<span class="chip">${vnd(s.d)}${D.idx.locks.includes(s.d)?' · khóa':''}</span>`).join(' ')||'<span class="mu">chưa có</span>'}</p>
  <p style="margin:4px 0"><b>Phiếu xuất:</b> ${cov('x')}</p><p style="margin:4px 0"><b>Phiếu thu hồi:</b> ${cov('w')}</p>
  <p style="margin:4px 0"><b>Danh sách trạm:</b> ${D.master?`${(D.master.ds||[]).length} trạm chuẩn · ${(D.master.mau||[]).length} dòng Mau_Tram_Tu · ${(D.master.fix||[]).length} mã bổ sung`:'<span class="mu">chưa có</span>'}</p>
  <p style="margin:4px 0"><b>Kế hoạch:</b> ${D.idx.plans.map(p=>`<span class="chip" data-go="dc:${esc(p)}">${esc(p)}</span>`).join(' ')||'<span class="mu">chưa có</span>'} · <b>Định mức:</b> ${D.norm?D.norm.rows.length+' dòng':'<span class="mu">chưa có</span>'} · <b>Giao khoán:</b> ${D.gk?D.gk.rows.length+' trạm ('+esc(D.gk.file||'')+')':'<span class="mu">chưa có</span>'}</p>
  ${S.admin?`<div style="margin-top:10px"><h3 style="margin-bottom:6px">Khóa sổ kỳ chốt</h3>${D.idx.snaps.map(s=>`<label style="margin-right:12px"><input type="checkbox" data-lock="${s.d}" ${D.idx.locks.includes(s.d)?'checked':''}> ${vnd(s.d)}</label>`).join('')}</div>`:''}</div>
 <div class="card"><h3>Cài đặt ${S.admin?'':'<small>chỉ admin sửa được</small>'}</h3><div class="fm">
  <label>Tỷ giá (gốc / 1 USD)<input type="number" id="cRate" step="any" value="${S.cfg.rate}" ${S.admin?'':'disabled'}></label>
  <label>Ngưỡng cảnh báo trạm tăng (USD)<input type="number" id="cThr" step="any" value="${S.cfg.thr}" ${S.admin?'':'disabled'}></label>
  <label>Mã không tính % kế hoạch (chỉ báo đỏ), cách nhau dấu phẩy<input type="text" id="cEx" value="${esc((S.cfg.excl||[]).join(', '))}" ${S.admin?'':'disabled'}></label>
  <label>Mã tương đương (mỗi nhóm một dòng, các mã cách nhau dấu phẩy)<textarea id="cEq" rows="3" style="border:1px solid var(--line);border-radius:7px;padding:6px 9px;font:inherit" ${S.admin?'':'disabled'}>${esc((S.cfg.eq||[]).map(g=>g.join(', ')).join('\n'))}</textarea></label>
  <label>Email nhận cảnh báo hàng tuần (cách nhau dấu phẩy)<input type="text" id="cEm" value="${esc(S.cfg.emails||'')}" ${S.admin?'':'disabled'}></label>
  <label>Link Apps Script (/exec) của máy này<input type="text" id="cApi" value="${esc(ST.mode==='gas'?'(đang chạy trong Apps Script)':ST.api)}" ${ST.mode==='gas'?'disabled':''} placeholder="https://script.google.com/macros/s/…/exec"></label>
 </div><div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap"><button class="btn p" type="button" id="cSave">Lưu cài đặt</button><button class="btn" type="button" id="bkD">Tải toàn bộ dữ liệu (.json)</button><label class="btn" style="display:inline-flex;align-items:center">Mở file dữ liệu<input type="file" id="bkU" accept=".json" hidden></label></div></div></div><div class="gap"></div>
 <div class="card"><h3>Nhật ký nạp</h3>${tbl('log',[{h:'Thời gian',k:'u',l:1,f:x=>new Date(x.u).toLocaleString('vi-VN')},{h:'File',k:'f',l:1},{h:'Loại',k:'t',l:1},{h:'Kết quả',k:'l',l:1,f:x=>`<span class="tag ${x.l}">${x.l==='ok'?'Đạt':x.l==='warn'?'Cảnh báo':'Lỗi'}</span>`},{h:'Ghi chú',k:'m',l:1,cls:()=>'wrap'}],[...(D.idx.log||[])].reverse(),{lim:100,h:360})}</div>`;
 const dz=$('#dz'),fi=$('#fi');dz.onclick=()=>fi.click();fi.onchange=()=>{IMP.add([...fi.files]);fi.value=''};
 dz.ondragover=e=>{e.preventDefault();dz.classList.add('on')};dz.ondragleave=()=>dz.classList.remove('on');dz.ondrop=e=>{e.preventDefault();dz.classList.remove('on');IMP.add([...e.dataTransfer.files])};
 $('#impSave').onclick=impSave;$('#impClr').onclick=()=>{IMP.items=[];buildR(D.master);IMP.render()};IMP.render();
 $$('[data-lock]').forEach(x=>x.onchange=async()=>{const d=x.dataset.lock;D.idx.locks=D.idx.locks.filter(v=>v!==d);if(x.checked)D.idx.locks.push(d);await ST.set('idx',D.idx);toast(x.checked?'Đã khóa sổ '+vnd(d):'Đã mở khóa '+vnd(d))});
 $('#cSave').onclick=async()=>{const api=$('#cApi').value.trim();if(ST.mode!=='gas'){try{localStorage.setItem('tts_api',api)}catch(e){}ST.api=api;ST.mode=api?'api':'local'}
  if(S.admin){S.cfg.rate=num($('#cRate').value)||131;S.cfg.thr=num($('#cThr').value)||5000;S.cfg.excl=$('#cEx').value.split(/[,;\s]+/).map(mc).filter(Boolean);S.cfg.eq=$('#cEq').value.split('\n').map(l=>l.split(/[,;\s]+/).map(mc).filter(Boolean)).filter(g=>g.length>1);S.cfg.emails=$('#cEm').value.trim();buildEQ();await ST.set('cfg',S.cfg);CMP.key=''}
  await ST.refresh();toast('Đã lưu cài đặt');svUpd()};
 $('#bkD').onclick=async()=>{const o={};for(const k of await IDB.keys()){const v=await IDB.get(k);if(v)o[k]=v.v}dl(new Blob([JSON.stringify({app:'tts_natcom',ver:VER,at:Date.now(),data:o})],{type:'application/json'}),'TaiSanTram_du_lieu_'+ymd(new Date())+'.json')};
 $('#bkU').onchange=async e=>{const f=e.target.files[0];if(!f)return;if(!S.admin){adminLogin(()=>{});return}try{const j=JSON.parse(await f.text());if(j.app!=='tts_natcom')throw Error('Không phải file dữ liệu của tool');for(const[k,v]of Object.entries(j.data))await IDB.set(k,{v,u:Date.now(),d:1});await ST.flush();await reloadAll();toast('Đã mở '+Object.keys(j.data).length+' mục dữ liệu')}catch(x){toast('Lỗi: '+x.message,5000)}}}
const dl=(blob,name)=>{const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},1500)};
/* ===== ADMIN ===== */
function adminLogin(then){openMd(`<h3>Đăng nhập admin</h3><div class="fm"><label>Mật khẩu<input type="password" id="pw" autocomplete="current-password"></label><div class="dn" id="pwE"></div></div><div class="act"><button class="btn" type="button" onclick="closeMd()">Hủy</button><button class="btn p" type="button" id="pwOk">Đăng nhập</button></div>`);
 const go=async()=>{const pw=$('#pw').value;let ok=false;if(ST.mode==='local')ok=sha256(pw)===ADMIN_HASH;else{try{const r=await ST.rpc({op:'login',pw});ok=!!r.ok}catch(e){ok=sha256(pw)===ADMIN_HASH}}
  if(!ok){$('#pwE').textContent='Sai mật khẩu';return}S.admin=true;S.pw=pw;try{sessionStorage.setItem('tts_pw',pw)}catch(e){}closeMd();$('#admBtn').textContent='Admin: đang đăng nhập';toast('Đã đăng nhập admin');if(then)then();else show(S.tab)};
 $('#pwOk').onclick=go;$('#pw').onkeydown=e=>{if(e.key==='Enter')go()};setTimeout(()=>$('#pw').focus(),50)}
/* ===== XUẤT EXCEL ===== */
const aoaS=a=>XLSX.utils.aoa_to_sheet(TRX?a.map(r=>r.map(c=>typeof c==='string'?trS(c):c)):a);
function addSheet(wb,name,aoa,w){if(TRX)aoa=aoa.map(r=>r.map(c=>typeof c==='string'?trS(c):c));const ws=XLSX.utils.aoa_to_sheet(aoa);if(w)ws['!cols']=w.map(x=>({wch:x}));XLSX.utils.book_append_sheet(wb,ws,name.slice(0,31))}
const xv=v=>Math.round(v/rt()*100)/100;
async function xlsAll(){ld('Đang tạo file Excel…');try{const wb=XLSX.utils.book_new(),r=await prep(),u=uName();
 if(r){const rows=r.rows.filter(o=>inBr(o.b));const ex=rows.filter(exTT);const s=k=>ex.reduce((a,o)=>a+o[k],0);
  addSheet(wb,'Tong quan',[['BÁO CÁO TĂNG GIẢM TÀI SẢN TRẠM – NATCOM'],['Kỳ trước',vnd(r.A),'Kỳ này',vnd(r.B)],['Chi nhánh',S.br||'Tất cả','Đơn vị',u,'Tỷ giá',S.cfg.rate],[],['Chỉ tiêu','Giá trị'],['Tài sản tại trạm kỳ trước',xv(s('pv'))],['Tài sản tại trạm kỳ này',xv(s('cv'))],['Tăng giảm',xv(s('cv')-s('pv'))],['Xuất ra trạm trong kỳ',xv(s('ev'))],['Thu hồi trong kỳ',xv(s('wv'))],['Chênh lệch chưa giải thích',xv(s('cv')-s('pv')-s('ev')+s('wv'))],['Đối soát phiếu',r.full?'Đủ phiếu':'Chưa đủ phiếu (xuất '+Math.round(r.cx.p*100)+'%, thu hồi '+Math.round(r.cw.p*100)+'%)'],['Trạm mới',ex.filter(o=>o.st==='Trạm mới').length],['Trạm hết tài sản',ex.filter(o=>o.st==='Hết tài sản').length]],[34,18,12,12,8,8]);
  addSheet(wb,'Canh bao',[['Trạm tăng ≥ '+S.cfg.thr+' USD'],['Trạm','Chi nhánh','Kỳ trước','Kỳ này','Tăng ('+u+')','%']].concat(r.alerts.filter(o=>inBr(o.b)).map(o=>[o.s,o.b,xv(o.pv),xv(o.cv),xv(o.dv),pct(o.cv,o.pv)==null?'':Math.round(pct(o.cv,o.pv)*10)/10])),[16,10,14,14,14,8]);
  addSheet(wb,'Chi nhanh',[['Chi nhánh','Số trạm','Kỳ trước','Kỳ này','Tăng giảm','%','Xuất','Thu hồi','Chênh lệch','Trạm mới','Hết TS','Lệch phiếu']].concat(r.br.filter(b=>inBr(b.b)).sort((a,b)=>brOrder(a.b)-brOrder(b.b)).map(b=>[b.b,b.n,xv(b.pv),xv(b.cv),xv(b.cv-b.pv),pct(b.cv,b.pv)==null?'':Math.round(pct(b.cv,b.pv)*10)/10,xv(b.ev),xv(b.wv),xv(b.cv-b.pv-b.ev+b.wv),b.nw,b.gone,r.full?b.lech:''])),[12,9,14,14,14,8,14,14,14,9,9,10]);
  addSheet(wb,'Tram',[['Trạm','Chi nhánh','Kỳ trước','Kỳ này','Tăng giảm','%','Xuất','Thu hồi','Chênh lệch phiếu','Trạng thái','Mã trong file']].concat(rows.sort((a,b)=>b.dv-a.dv).map(o=>[o.s,o.b,xv(o.pv),xv(o.cv),xv(o.dv),pct(o.cv,o.pv)==null?'':Math.round(pct(o.cv,o.pv)*10)/10,xv(o.ev),xv(o.wv),o.gv==null?'':xv(o.gv),o.st,[...o.raws].join(' ')])),[18,10,14,14,14,8,14,14,14,12,30])}
 if(D.idx.cov.x.length){const mn=WHF.a||D.idx.cov.x[0][0],mx=WHF.b||D.idx.cov.x.slice(-1)[0][1];const g=whAgg(await movIn('x',addDay(mn,-1),mx),'m');addSheet(wb,'Bao cao kho',[['Kho xuất ra trạm '+vnd(mn)+' → '+vnd(mx)],['Kho','Chi nhánh','Số trạm',...g.ps,'Tổng']].concat(g.ws.map(w=>[w.w,w.b==='CTY'?'Kho công ty':w.b,w.n.size,...g.ps.map(p=>xv(w.p[p]||0)),xv(w.v)])),[44,12,9])}
 if(D.idx.cov.x.length||D.idx.cov.w.length){const last=[...D.idx.cov.x,...D.idx.cov.w].map(c=>c[1]).sort().slice(-1)[0];const a=DYF.a||last.slice(0,8)+'01',b=DYF.b||last;const X=await movIn('x',addDay(a,-1),b),W=await movIn('w',addDay(a,-1),b);const m=new Map();for(const l of X){const z=res(l[1],l[7])||{b:'?'};if(!inBr(z.b))continue;const o=m.get(l[0])||[0,0];o[0]+=l[4];m.set(l[0],o)}for(const l of W){const z=res(l[1],l[7])||{b:'?'};if(!inBr(z.b))continue;const o=m.get(l[0])||[0,0];o[1]+=l[4];m.set(l[0],o)}
  addSheet(wb,'Theo ngay',[['Ngày','Xuất ra trạm','Thu hồi','Ròng']].concat([...m].sort().map(([d,[x,w]])=>[vnd(d),xv(x),xv(w),xv(x-w)])),[12,16,16,16])}
 const sb=await loadSnap(S.B);if(sb){const M=empAgg(sb,true);addSheet(wb,'Nhan vien',[['Nhân viên','Số trạm','Giá trị']].concat([...M.values()].sort((a,b)=>b.v-a.v).map(o=>[o.g,o.s.size,xv(o.v)])),[34,10,16])}
 addSheet(wb,'Quyet dinh',[['Số quyết định','Phòng','Xuất ra trạm','Số trạm xuất','Thu hồi','Số trạm thu','Từ ngày','Đến ngày','Có kế hoạch']].concat(Object.entries(D.idx.dcs).sort((a,b)=>b[1].xv-a[1].xv).map(([k,m])=>[k,m.dept,xv(m.xv),m.xn,xv(m.wv),m.wn,vnd(m.d0),vnd(m.d1),D.idx.plans.includes(k)?'Có':''])),[16,16,14,10,14,10,11,11,10]);
 const un=await unassigned();addSheet(wb,'Ma chua gan',[['Mã trong file','Trạm đoán','CN gợi ý','Giá trị','Xuất hiện ở']].concat(un.map(x=>[x.raw,x.s,x.b,xv(x.v),[...x.src].join(', ')])),[22,16,10,14,40]);
 XLSX.writeFile(wb,'TaiSanTram_'+(S.B||'')+'_'+u+'.xlsx')}catch(e){console.error(e);toast('Lỗi xuất Excel: '+e.message,5000)}finally{ld('')}}
function xlsStation(o,its,mv,MG,r){const wb=XLSX.utils.book_new(),u=uName(),nm=c=>(D.names[c]||['',''])[0],un=c=>(D.names[c]||['',''])[1];
 addSheet(wb,'Thong tin',[['TÀI SẢN TRẠM '+o.s],['Chi nhánh',o.b],['Người quản lý',MG.map(([g,v])=>g+' ('+Math.round(v/rt())+' '+u+')').join('; ')],['Kỳ trước',vnd(r.A)],['Kỳ này',vnd(r.B)],['Giá trị kỳ trước ('+u+')',xv(o.pv)],['Giá trị kỳ này ('+u+')',xv(o.cv)],['Tăng giảm ('+u+')',xv(o.dv)],['Mã trong file',[...o.raws].join(' ')]],[26,60]);
 addSheet(wb,'Tai san',[['Mã hàng','Tên hàng','Đơn vị','SL trước','SL nay','Tăng giảm SL','Giá trị kỳ trước ('+u+')','Giá trị nay ('+u+')','SL xuất','SL thu hồi']].concat(its.map(x=>[x.c,nm(x.c),un(x.c),x.pq,x.cq,x.cq-x.pq,xv(x.pv),xv(x.cv),x.eq,x.wq])),[10,46,8,10,10,12,16,16,10,10]);
 if(mv.length)addSheet(wb,'Phieu',[['Ngày','Loại','Mã hàng','Tên hàng','SL','Giá trị ('+u+')','Kho','DC']].concat(mv.map(([t,l])=>[vnd(l[0]),t,l[2],nm(l[2]),l[3],xv(l[4]),l[5],l[6]])),[11,9,10,40,8,12,40,16]);
 XLSX.writeFile(wb,'Tram_'+o.s.replace(/[^\w\-]+/g,'_')+'_'+(r.B||'')+'.xlsx')}
function xlsEmp(g,o,rows,st){const wb=XLSX.utils.book_new(),u=uName(),nm=c=>(D.names[c]||['',''])[0];
 addSheet(wb,'Tram',[['NHÂN VIÊN '+g+' – kỳ '+vnd(S.B)],['Trạm','CN','Số mã hàng','Số lượng thiết bị, vật tư','Giá trị nhân viên giữ ('+u+')','Tổng tài sản trạm ('+u+')','Kỳ trước ('+u+')','Tăng giảm ('+u+')']].concat(rows.sort((a,b)=>b.v-a.v).map(x=>[x.s,x.b,x.n,x.q,xv(x.v),xv(x.tv),xv(x.pv),xv(x.v-x.pv)])),[14,8,10,14,16,16,14,14]);
 const det=[['Trạm','CN','Mã hàng','Tên hàng','Số lượng','Giá trị ('+u+')']];for(const x of rows){const s=st.get(x.s);if(!s)continue;for(const it of s.it.values())if(it.cq>0)det.push([x.s,x.b,it.c,nm(it.c),it.cq,xv(it.cv)])}
 addSheet(wb,'Vat tu tung tram',det,[14,8,10,46,10,14]);XLSX.writeFile(wb,'NhanVien_'+g.replace(/[^\w\-]+/g,'_')+'_'+(S.B||'')+'.xlsx')}
function xlsDC(dc,plan,X,W,PC){const wb=XLSX.utils.book_new(),u=uName();
 for(const[t,L]of[['x',X],['w',W]]){const vb=t==='x'?'Xuất':'Thu hồi';if(plan&&PC&&plan.items.some(i=>i.dir===t)){const p=t==='x'?PC.PX:PC.PW;
   addSheet(wb,vb+' - tong hop',[['Quyết định',dc,'% '+vb.toLowerCase(),p.total==null?'':Math.round(p.total*10)/10],[],['Mặt hàng','Mã','Kế hoạch','Tính vào %','Thực tế','Thừa','%','Ghi chú']].concat(p.items.map(it=>[it.n,it.codes.join(', '),it.pq,it.cap,it.act,it.over,it.pct==null?'':Math.round(it.pct*10)/10,it.ex?'Không tính %':''])).concat([[],['Chi nhánh','Số trạm','%']]).concat(p.brs.map(b=>[b.b,b.n,b.pct==null?'':Math.round(b.pct*10)/10])),[40,22,10,10,10,8,8,14]);
   addSheet(wb,vb+' - tram',[['Trạm','Mã tủ','CN','%','Trạng thái',...p.items.flatMap(it=>[(it.n||it.codes[0])+' KH',(it.n||it.codes[0])+' TT'])]].concat(p.sites.map(s=>[s.s,s.cab,s.b,s.pct==null?'':Math.round(s.pct*10)/10,s.st,...p.items.flatMap(it=>[s.q[it.i],s.a[it.i]])])));
   if(p.outside.length)addSheet(wb,vb+' - ngoai KH',[['Trạm','CN','Giá trị ('+u+')']].concat(p.outside.map(o=>[o.s,o.b,xv(o.v)])))}
  else if(L.length){const a=dcActual(L);addSheet(wb,vb+' - thuc te',[['Trạm','CN','Giá trị ('+u+')']].concat(a.sites.map(s=>[s.s,s.b,xv(s.v)])).concat([[],['Mã','Tên hàng','SL','Giá trị']]).concat(a.items.map(i=>[i.c,(D.names[i.c]||[''])[0],i.q,xv(i.v)])))}}
 if(!wb.SheetNames.length){toast('Quyết định này chưa có dữ liệu');return}XLSX.writeFile(wb,'QuyetDinh_'+dc.replace(/[\/\\]/g,'-')+'.xlsx')}
/* ===== KHUNG ===== */
const TABS=[['Tổng quan',[['dash','Tổng quan','So sánh tài sản trạm giữa hai kỳ chốt',vDash],['trend','Xu hướng','Tài sản tại trạm qua các kỳ',vTrend]]],
 ['Phân tích',[['br','Chi nhánh','Tăng giảm theo chi nhánh',vBr],['st','Trạm','Tăng giảm, đối soát từng trạm',vSt],['wh','Báo cáo kho','Kho nào xuất ra trạm bao nhiêu',vWh],['day','Theo ngày','Xuất và thu hồi từng ngày',vDay],['emp','Nhân viên','Nhân viên giữ nhiều trạm, nhiều tiền',vEmp]]],
 ['Kiểm soát',[['dc','Quyết định (DC)','Tiến độ xuất, thu hồi theo quyết định',vDc],['plan','Kế hoạch','% hoàn thành theo file kế hoạch',vPlan],['norm','Thừa tài sản','So với định mức vật tư',vNorm],['gk','Giao khoán','Người đứng tên tài sản so với giao khoán',vGk],['un','Mã chưa gán','Mã trạm chưa có trong danh sách trạm',vUn]]],
 ['Dữ liệu',[['imp','Nạp dữ liệu','Nạp file, kiểm tra, cài đặt',vImp]]]];
const TMAP=new Map(TABS.flatMap(([,l])=>l.map(t=>[t[0],t])));
function menu(){$('#menu').innerHTML=TABS.map(([g,l])=>`<h6>${g}</h6>`+l.map(([k,n])=>`<a href="#${k}" data-tab="${k}" class="${S.tab===k?'on':''}">${n}${k==='plan'&&D.idx.plans.length?`<span class="bd">${D.idx.plans.length}</span>`:''}</a>`).join('')).join('');
 $$('#menu a').forEach(a=>a.onclick=e=>{e.preventDefault();show(a.dataset.tab)})}
async function show(k){if(!TMAP.has(k))k='dash';S.tab=k;try{history.replaceState(null,'','#'+k)}catch(e){}const t=TMAP.get(k);
 $$('.pg').forEach(p=>p.classList.toggle('on',p.id==='p-'+k));$$('#menu a').forEach(a=>a.classList.toggle('on',a.dataset.tab===k));
 $('#pt').innerHTML=esc(t[1])+`<small>${esc(t[2])}${S.B?` · ${S.A?vnd(S.A)+' → ':''}${vnd(S.B)}`:''} · ${uName()}${S.unit==='USD'?' (tỷ giá '+nf2.format(S.cfg.rate)+')':''}</small>`;
 $('#gfl').classList.toggle('hide',k==='imp');
 try{await t[3]()}catch(e){console.error(e);$('#p-'+k).innerHTML=`<div class="al err"><b class="t">Lỗi hiển thị</b>${esc(e.message||e)}</div>`}finally{ld('')}}
function pickPeriods(){const ss=D.idx.snaps.map(s=>s.d);if(!ss.includes(S.B))S.B=ss[ss.length-1]||'';if(S.A&&!ss.includes(S.A))S.A='';if(!S.A||S.A>=S.B){const i=ss.indexOf(S.B);S.A=i>0?ss[i-1]:''}}
function refreshSel(){const ss=[...D.idx.snaps].reverse();$('#fB').innerHTML=ss.map(s=>`<option value="${s.d}" ${s.d===S.B?'selected':''}>${vnd(s.d)}</option>`).join('')||'<option value="">chưa có</option>';
 $('#fA').innerHTML='<option value="">(không so sánh)</option>'+ss.filter(s=>s.d<S.B).map(s=>`<option value="${s.d}" ${s.d===S.A?'selected':''}>${vnd(s.d)}</option>`).join('');
 $('#fBr').innerHTML='<option value="">Tất cả chi nhánh</option>'+BRS.map(b=>`<option ${b===S.br?'selected':''}>${b}</option>`).join('');
 $$('#unit button').forEach(b=>b.classList.toggle('on',b.dataset.u===S.unit));menu()}
async function reloadAll(){D.snaps={};D.mov={};D.plans={};CMP.key='';const c=await ST.get('cfg');if(c)S.cfg={...CFG0,...c};buildEQ();D.idx=Object.assign(IDX0(),await ST.get('idx')||{});D.master=await ST.get('master');D.gk=await ST.get('giaokhoan');GKROWS=D.gk?D.gk.rows:null;buildR(D.master);D.names=await ST.get('names')||{};D.norm=await ST.get('norm');D.gkmap=await ST.get('gkmap')||{};GKC.k='';pickPeriods();refreshSel();svUpd();await show(S.tab)}
/* tìm kiếm chung */
function gSearch(q){q=noAcc(q.trim());if(q.length<2)return[];const o=[];
 for(const s of R.site.keys()){if(s.includes(q))o.push({k:'st:'+s,h:`<span><b>${esc(s)}</b></span><small>Trạm · ${esc(R.site.get(s))}</small>`});if(o.length>=8)break}
 for(const k of Object.keys(D.idx.dcs)){if(k.toUpperCase().includes(q)||(D.idx.dcs[k].dept||'').toUpperCase().includes(q))o.push({k:'dc:'+k,h:`<span><b>${esc(k)}</b> ${esc(D.idx.dcs[k].dept||'')}</span><small>Quyết định · ${C(D.idx.dcs[k].xv)}</small>`});if(o.length>=14)break}
 const sb=D.snaps[S.B];if(sb){const E=new Map();for(const[g,raw]of sb.m||[]){if(!g||!noAcc(g).includes(q))continue;const e=E.get(g)||new Set();e.add(raw);E.set(g,e)}for(const[g,e]of[...E].slice(0,10))o.push({k:'emp:'+g,h:`<span>${esc(g)}</span><small>Nhân viên · ${e.size} mã trạm/tủ</small>`})}
 return o}
function setZoom(z){z=Math.max(.7,Math.min(1.6,Math.round(z*10)/10));S.zoom=z;document.body.style.zoom=z;try{localStorage.setItem('tts_zoom',z)}catch(e){}}
async function init(){try{setZoom(+localStorage.getItem('tts_zoom')||1)}catch(e){}$$('#zoom button').forEach(b=>b.onclick=()=>{setZoom((S.zoom||1)+(+b.dataset.z)*.1);toast('Cỡ chữ '+Math.round(S.zoom*100)+'%',1200)});buildTr();document.documentElement.lang=S.lang;if(TRX){trDom(document.body);TRMO.observe(document.body,{childList:true,subtree:true})}
 $$('#lang button').forEach(b=>{b.classList.toggle('on',b.dataset.l===S.lang);b.onclick=()=>{try{localStorage.setItem('tts_lang',b.dataset.l)}catch(e){}location.reload()}});
 buildEQ();await ST.init();try{S.pw=sessionStorage.getItem('tts_pw')||''}catch(e){}
 if(S.pw){if(ST.mode==='local')S.admin=sha256(S.pw)===ADMIN_HASH;else S.admin=true}$('#admBtn').textContent=S.admin?'Admin: đang đăng nhập':'Admin';
 $('#admBtn').onclick=()=>{if(S.admin){S.admin=false;S.pw='';try{sessionStorage.removeItem('tts_pw')}catch(e){}$('#admBtn').textContent='Admin';toast('Đã đăng xuất admin');show(S.tab)}else adminLogin()};
 $('#sync').onclick=async()=>{ld('Đang đồng bộ…');await ST.refresh();await reloadAll();toast(ST.mode==='local'?'Bản offline: chưa có link Google Sheet (vào Nạp dữ liệu → Cài đặt)':ST.online?'Đã đồng bộ':'Không kết nối được Google Sheet',3500)};
 $('#fA').onchange=e=>{S.A=e.target.value;show(S.tab)};$('#fB').onchange=e=>{S.B=e.target.value;if(S.A>=S.B)S.A='';pickPeriods();refreshSel();show(S.tab)};$('#fBr').onchange=e=>{S.br=e.target.value;show(S.tab)};
 $$('#unit button').forEach(b=>b.onclick=()=>{S.unit=b.dataset.u;try{localStorage.setItem('tts_unit',S.unit)}catch(e){}refreshSel();show(S.tab)});
 $('#xls').onclick=xlsAll;loadSnap(S.B);bindSugg($('#gq'),$('#gsug'),gSearch,k=>{$('#gq').value='';GO(k)});
 addEventListener('online',()=>ST.refresh());let rz;addEventListener('resize',()=>{clearTimeout(rz)});
 S.tab=(location.hash||'#dash').slice(1);menu();ld('Đang tải dữ liệu…');await reloadAll()}
init();
