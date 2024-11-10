(()=>{var e={3430:(e,t,o)=>{"use strict";o.d(t,{Z:()=>d});var a=o(144),s=o(7152);const r={add:"Add",pod:"Pod",pvc:"PVC",restart_count:"Restart count",node:"node",arch:"CPU Architecture",bulk_upload:"Batch upload",bulk_download:"Batch download",bulk_upload_container:"Upload to Container",bulk_upload_pod:"Upload to Pod",bulk_upload_pvc:"Upload to PVC",cannot_empty:"Cannot be empty",cancel:"Cancel",cancel_all:"Cancel all",change:"Modify",check_all:"Select all",contribute_to_kube_file_browser:"Contribute to KubeFileBrowser",console:"Console",container:"container",copy:"Upload and download",cpu:"processor",create:"create",create_time:"Create time",create_dir:"Create folder",create_file:"Create file",dashboard:"Dashboard",delete:"delete",deleted:"deleted",description:"Description information",download:"download",dir:"Directory",file:"file",file_or_dir_download:"File/directory download",download_file:"Download",edit:"Edit",enter:"OK",file_browser:"File Browser",help:"help",image:"mirror image",image_pull_secrets:"Image pull secrets",keyword_search:"Keyword search",loading:"Loading",name:"name",namespace:"Namespace",network_error:"Network error",more:"",mode:"Mode",mod_time:"Last modification time",multi_upload:"Multiple files upload to Pod",open:"open",operate_success:"Operation succeeded",operate:"Operation",os:"OS type",path:"path",please_input_content:"File content",please_input_dest_path:"Please enter the destination path",please_input_name:"Please enter a name",please_select_container:"Please select Container",please_select_namespace:"Please select Namespace",please_select_pod:"Please select Pod",please_select_pvc:"Please select PVC",please_select_shell:"Please select Shell",prompt_message:"prompt message",ram:"memory",rename:"Rename",remove:"Remove",refresh:"Refresh",state:"state",select_dir:"Select directory",select_file:"Select file",size:"size",tag:"TAG",terminal:"Terminal command line",tips:"Tips",tips_msg:"Continue operation?",unknown_error:"Unknown error",upload:"Upload",upload_all:"Upload all",upload_dir:"Upload folder",upload_file:"Upload file",web_socker_connection_failed:"Websocket connection failed",web_socket_disconnect:"websocket disconnected"};a["default"].use(s.Z);const n={"zh-cn":r,en:r};let l;o.g.navigator.language&&(l=o.g.navigator.language,l=l.toLowerCase()),0!==l.indexOf("en")&&(l="zh-cn");const i=new s.Z({locale:l,fallbackLocale:"zh-cn",silentFallbackWarn:!0,messages:n}),d=i},9207:(e,t,o)=>{"use strict";var a=o(144),s=o(4720),r=o.n(s),n=o(137),l=o.n(n),i=o(1629),d=o.n(i),u=o(381),c=o.n(u),p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"global-container"},[o("router-view")],1)},m=[],j=o(3736),h={},f=(0,j.Z)(h,p,m,!1,null,null,null);const b=f.exports;var g=o(6299),_=o(3430);const v={MessageSuccess(e){this.$message({message:this.$t("operate_success"),type:"success",duration:1200,onClose:e})},PageInit(){this.$root.PageSize=7,this.$root.Page=1,this.$root.Total=0},PageReset(){this.$root.Total--;let e=Math.ceil(this.$root.Total/this.$root.PageSize);this.$root.Page>e&&(this.$root.Page=e),this.$root.Page<1&&(this.$root.Page=1)},PageOffset(){return this.$root.PageSize*(this.$root.Page-1)},ConfirmDelete(e,t){t||(t="此操作将永久删除该数据, 是否继续?"),this.$confirm(t,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{e()})).catch((e=>{console.log(e)}))},FormatDateTime(e,t){return e?(t||(t="YYYY-MM-DD HH:mm:ss"),c().unix(e).format(t)):"--"},FormatDateDuration(e){return c().duration(e).humanize(!1)},FormatDateFromNow(e){return e?c().unix(e).fromNow():"--"},Substr(e,t){if("[object String]"!=Object.prototype.toString.call(e))return"";let o="";return e.length>t&&(o="..."),e.substr(0,t)+o}},k={PageSize:0,Page:0,Total:0,DialogSmallWidth:"500px",DialogNormalWidth:"750px",DialogLargeWidth:"900px",DialogNormalTop:"5vh"};o(3469);let y;a["default"].directive("tableDrag",{inserted:function(e){e=e.getElementsByClassName("el-table__body-wrapper")[0],e.style.cursor="grab",e.onmousedown=function(){let t=event.clientX,o=e.scrollLeft;document.onmousemove=function(a){let s=a.clientX-t;return e.scrollLeft=o-s,!1},document.onmouseup=function(e){document.onmousemove=null,document.onmouseup=null}}}}),o.g.navigator.language&&(y=o.g.navigator.language,y=y.toLowerCase()),0!==y.indexOf("en")&&(y="zh-cn"),c().locale(y),a["default"].config.debug=!0,a["default"].config.productionTip=!1,a["default"].use(r()),a["default"].use(l()),a["default"].use(d()),a["default"].prototype.$msgbox=s.MessageBox,a["default"].prototype.$alert=s.MessageBox.alert,a["default"].prototype.$confirm=s.MessageBox.confirm,a["default"].prototype.$prompt=s.MessageBox.prompt,new a["default"]({i18n:_.Z,router:g.Z,methods:v,data:k,render:e=>e(b)}).$mount("#app")},6299:(e,t,o)=>{"use strict";var a="/";o.d(t,{Z:()=>u,_:()=>i});var s=o(144),r=o(8345),n=o(3430);s["default"].use(r.Z);const l=e=>()=>o(5903)("./"+e+".vue"),i=[{path:"/",component:l("layer"),name:"dashboard",title:n.Z.t("dashboard"),redirect:{name:"dashboard"},children:[{path:"dashboard",name:"dashboard",meta:{title:n.Z.t("dashboard"),icon:"el-icon-monitor",single:!0},component:l("dashboard")}]},{path:"/bulk_upload",name:"bulk_upload",title:n.Z.t("bulk_upload"),component:l("layer"),meta:{title:n.Z.t("bulk_upload"),icon:"el-icon-upload"},children:[{path:"bulk_upload_pod",name:"bulk_upload_pod",meta:{title:n.Z.t("bulk_upload_pod"),icon:"el-icon-upload2"},component:l("bulk_upload_pod")},{path:"bulk_upload_container",name:"bulk_upload_container",meta:{title:n.Z.t("bulk_upload_container"),icon:"el-icon-upload2"},component:l("bulk_upload_container")},{path:"bulk_upload_pvc",name:"bulk_upload_pvc",meta:{title:n.Z.t("bulk_upload_pvc"),icon:"el-icon-upload2"},component:l("bulk_upload_pvc")}]}],d=new r.Z({routes:i,base:a,scrollBehavior:()=>({y:0}),mode:"history"}),u=d},6700:(e,t,o)=>{var a={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":5655,"./es-do":5251,"./es-do.js":5251,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":5655,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":626,"./it-ch":150,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":1793,"./ru.js":1793,"./sd":950,"./sd.js":950,"./se":490,"./se.js":490,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5893,"./ss.js":5893,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function s(e){var t=r(e);return o(t)}function r(e){if(!o.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=r,e.exports=s,s.id=6700},5903:(e,t,o)=>{var a={"./bulk_upload_container.vue":[2023,291,23],"./bulk_upload_pod.vue":[7590,291,590],"./bulk_upload_pvc.vue":[6916,291,916],"./dashboard.vue":[6488,291,488],"./layer.vue":[9387,387]};function s(e){if(!o.o(a,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],s=t[0];return Promise.all(t.slice(1).map(o.e)).then((()=>o(s)))}s.keys=()=>Object.keys(a),s.id=5903,e.exports=s}},t={};function o(a){var s=t[a];if(void 0!==s)return s.exports;var r=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}o.m=e,(()=>{var e=[];o.O=(t,a,s,r)=>{if(!a){var n=1/0;for(u=0;u<e.length;u++){for(var[a,s,r]=e[u],l=!0,i=0;i<a.length;i++)(!1&r||n>=r)&&Object.keys(o.O).every((e=>o.O[e](a[i])))?a.splice(i--,1):(l=!1,r<n&&(n=r));if(l){e.splice(u--,1);var d=s();void 0!==d&&(t=d)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[a,s,r]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,a)=>(o.f[a](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+e+"."+{23:"35c0401d",291:"001597fb",387:"a74460f6",488:"8df76f54",590:"964be36a",916:"9a1408aa"}[e]+".js"})(),(()=>{o.miniCssF=e=>"css/"+e+"."+{23:"6fdc9280",387:"e891e368",488:"bd309ce0",590:"6fdc9280",916:"6fdc9280"}[e]+".css"})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="kubernetes-file-browser:";o.l=(a,s,r,n)=>{if(e[a])e[a].push(s);else{var l,i;if(void 0!==r)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var c=d[u];if(c.getAttribute("src")==a||c.getAttribute("data-webpack")==t+r){l=c;break}}l||(i=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",t+r),l.src=a),e[a]=[s];var p=(t,o)=>{l.onerror=l.onload=null,clearTimeout(m);var s=e[a];if(delete e[a],l.parentNode&&l.parentNode.removeChild(l),s&&s.forEach((e=>e(o))),t)return t(o)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),i&&document.head.appendChild(l)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{o.p="/"})(),(()=>{var e=(e,t,o,a)=>{var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var r=r=>{if(s.onerror=s.onload=null,"load"===r.type)o();else{var n=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=n,i.request=l,s.parentNode.removeChild(s),a(i)}};return s.onerror=s.onload=r,s.href=t,document.head.appendChild(s),s},t=(e,t)=>{for(var o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var s=o[a],r=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(r===e||r===t))return s}var n=document.getElementsByTagName("style");for(a=0;a<n.length;a++){s=n[a],r=s.getAttribute("data-href");if(r===e||r===t)return s}},a=a=>new Promise(((s,r)=>{var n=o.miniCssF(a),l=o.p+n;if(t(n,l))return s();e(a,l,s,r)})),s={143:0};o.f.miniCss=(e,t)=>{var o={23:1,387:1,488:1,590:1,916:1};s[e]?t.push(s[e]):0!==s[e]&&o[e]&&t.push(s[e]=a(e).then((()=>{s[e]=0}),(t=>{throw delete s[e],t})))}})(),(()=>{var e={143:0};o.f.j=(t,a)=>{var s=o.o(e,t)?e[t]:void 0;if(0!==s)if(s)a.push(s[2]);else{var r=new Promise(((o,a)=>s=e[t]=[o,a]));a.push(s[2]=r);var n=o.p+o.u(t),l=new Error,i=a=>{if(o.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var r=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",l.name="ChunkLoadError",l.type=r,l.request=n,s[1](l)}};o.l(n,i,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,a)=>{var s,r,[n,l,i]=a,d=0;if(n.some((t=>0!==e[t]))){for(s in l)o.o(l,s)&&(o.m[s]=l[s]);if(i)var u=i(o)}for(t&&t(a);d<n.length;d++)r=n[d],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(u)},a=self["webpackChunkkubernetes_file_browser"]=self["webpackChunkkubernetes_file_browser"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=o.O(void 0,[998],(()=>o(9207)));a=o.O(a)})();
//# sourceMappingURL=app.da77ee5f.js.map