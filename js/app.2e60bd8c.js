(function(e){function t(t){for(var r,i,c=t[0],s=t[1],u=t[2],d=0,g=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&g.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(g.length)g.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"87235a7f"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var u=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0c4a":function(e,t,n){"use strict";n("3205")},"1d3d":function(e,t,n){},3205:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("7a23"),a=n("3fd4");n("7dd6");function o(e,t){var n=Object(r["K"])("router-view");return Object(r["D"])(),Object(r["i"])(n)}n("0c4a");const i={};i.render=o;var c=i,s=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),u=Object(r["db"])("data-v-1fb00070"),d=u((function(e,t,n,a,o,i){var c=Object(r["K"])("el-button"),s=Object(r["K"])("el-aside"),d=Object(r["K"])("el-main"),l=Object(r["K"])("el-drawer"),g=Object(r["K"])("el-container");return Object(r["D"])(),Object(r["i"])(g,null,{default:u((function(){return[Object(r["m"])(s,{width:"200px",class:"sidebar"},{default:u((function(){return[(Object(r["D"])(!0),Object(r["i"])(r["b"],null,Object(r["I"])(e.functionData,(function(e,t){return Object(r["D"])(),Object(r["i"])(c,{draggable:"true",onDragstart:function(t){t.dataTransfer.setData("function",JSON.stringify(e))},class:"function","data-type":"rect",key:t},{default:u((function(){return[Object(r["l"])("功能："+Object(r["O"])(e.label),1)]})),_:2},1032,["onDragstart"])})),128))]})),_:1}),Object(r["m"])(d,{id:"main",class:e.mainClass},null,8,["class"]),Object(r["m"])(l,{title:"配置项",modelValue:e.drawer,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.drawer=t}),direction:"rtl","before-close":e.handleCloseDrawer},{default:u((function(){return[(Object(r["D"])(),Object(r["i"])(r["b"],null,Object(r["I"])(10,(function(e){return Object(r["m"])("p",{key:e},"    具体配置项"+Object(r["O"])(e),1)})),64))]})),_:1},8,["modelValue","before-close"])]})),_:1})})),l=(n("159b"),n("8dee")),g=n.n(l),h=n("7c3e"),f=n("d4ec"),p=n("bee2"),m={},b=function(){function e(){Object(f["a"])(this,e)}return Object(p["a"])(e,[{key:"getEditorModes",value:function(e){return{default:["drag-canvas","zoom-canvas","activate-relations",{type:"drag-node",enableDelegate:!0,enableDebounce:!0,enableOptimize:!0,shouldBegin:function(e){return!e.target||"anchor-point"!=e.target.get("name")}},{type:"create-edge",trigger:"drag",edgeConfig:{type:"running-edge"},shouldBegin:function(t){return t.item.get("linkStateNum")||e.graph.getNodes()[0].get("linkStateNum")||t.item.set("linkStateNum",1),!t.item.get("linkStateNum")&&e.graph.getNodes()[0].get("linkStateNum")&&t.item.set("linkStateNum",e.graph.getNodes()[0].get("linkStateNum")+1),m=t.item,e.startDragNodeIdx=t.item.get("id"),(!t.target||"anchor-point"===t.target.get("name"))&&(e.sourceAnchorIdx=t.target.get("anchorPointIdx"),t.target.set("links",t.target.get("links")+1),!0)},shouldEnd:function(t){var n=!1;return t.item.get("linkStateNum")&&m.get("linkStateNum")&&t.item.get("linkStateNum")==m.get("linkStateNum")?(e.$message.error("不支持闭环或下游链接上游，如有需要链接管理员"),!1):(t.item.get("linkStateNum")||"anchor-point"!=t.target.get("name")||(t.item.set("linkStateNum",m.get("linkStateNum")),n=!0),t.item.get("linkStateNum")&&t.item.getInEdges().length<=0&&!n&&e.graph.getNodes().forEach((function(e){e.set("linkStateNum",m.get("linkStateNum"))})),t.item.get("linkStateNum")&&t.item.getInEdges().length>0?(e.$message.error("只支持单路模式"),!1):t.target&&"anchor-point"!==t.target.get("name")?(e.$message.error("请链接到拖拽点处"),!1):t.target?(e.targetAnchorIdx=t.target.get("anchorPointIdx"),t.target.set("links",t.target.get("links")+1),!0):(e.targetAnchorIdx=void 0,!0))}}]}}}]),e}(),v=new b,O=function(){function e(){Object(f["a"])(this,e)}return Object(p["a"])(e,[{key:"setRegisterNode",value:function(e,t){var n=!1;t.graph.on("point-dragstart",(function(e){n=e})),e.registerNode("rect-node",{afterDraw:function(e,t){var n=t.getBBox(),r=this.getAnchorPoints(e);r.forEach((function(e,r){t.addShape("circle",{attrs:{x:n.x+n.width*e[0],y:n.y+n.height*e[1],r:12,fill:"#40a9ff",opacity:.6},name:"back-shape",visible:!1,draggable:!0}),t.addShape("circle",{attrs:{r:7,x:n.x+n.width*e[0],y:n.y+n.height*e[1],fill:"#fff",stroke:"#5F95FF",cursor:"crosshair"},name:"anchor-point",anchorPointIdx:r,links:0,visible:!1,draggable:!0})}))},getAnchorPoints:function(){return[[.5,0],[1,.5],[.5,1],[0,.5]]},hideOrShowAnchorPoint:function(e,t,r){var a=t.getContainer().findAll((function(e){return e.get("name")===r}));a.forEach((function(t){if(e||t.get("links")>0)t.show();else{if(n)return;t.hide()}}))},setState:function(e,t,n){"showAnchors"===e&&(this.hideOrShowAnchorPoint(t,n,"anchor-point"),this.hideOrShowAnchorPoint(t,n,"back-shape"))}},"rect")}}]),e}(),y=new O,w=[4,2,1,2],k=function(){function e(){Object(f["a"])(this,e)}return Object(p["a"])(e,[{key:"setRegisterEdge",value:function(e){e.registerEdge("running-edge",{setState:function(t,n,r){var a=r.get("keyShape");if("active"===t)if(n){var o=0;a.animate((function(){o++,o>9&&(o=0);var t={lineDash:w,lineDashOffset:-o,lineWidth:3,endArrow:{path:e.Arrow.triangle(),d:-8,fill:"#aab7c3",stroke:"#aab7c3",lineDash:[]}};return t}),{repeat:!0,duration:3e3})}else a.stopAnimate(),a.attr("lineDash",null)}},"polyline")}}]),e}(),j=new k,S=(n("7db0"),function(){function e(){Object(f["a"])(this,e)}return Object(p["a"])(e,[{key:"setRegisterEvent",value:function(e){var t=this;e.graph.on("aftercreateedge",(function(t){e.graph.updateItem(t.edge,{sourceAnchor:e.sourceAnchorIdx,targetAnchor:e.targetAnchorIdx});var n=e.graph.save().edges;e.graph.getEdges().forEach((function(t,r){e.graph.updateItem(t,{curveOffset:n[r].curveOffset,curvePosition:n[r].curvePosition})}))})),e.graph.on("afteradditem",(function(t){t.item&&"edge"===t.item.getType()&&e.graph.updateItem(t.item,{sourceAnchor:e.sourceAnchorIdx})})),e.graph.on("afterremoveitem",(function(t){if(t.item&&t.item.source&&t.item.target){var n=e.graph.findById(t.item.source),r=e.graph.findById(t.item.target),a=t.item,o=a.sourceAnchor,i=a.targetAnchor;if(n&&!isNaN(o)){var c=n.getContainer().find((function(e){return"anchor-point"===e.get("name")&&e.get("anchorPointIdx")===o}));c.set("links",c.get("links")-1)}if(r&&!isNaN(i)){var s=r.getContainer().find((function(e){return"anchor-point"===e.get("name")&&e.get("anchorPointIdx")===i}));s.set("links",s.get("links")-1)}}})),e.graph.on("drop",(function(t){if(t.originalEvent.dataTransfer){var n=JSON.parse(t.originalEvent.dataTransfer.getData("function"));e.addShap(t,n)}})),e.graph.on("node:mouseenter",(function(t){e.graph.setItemState(t.item,"showAnchors",!0)})),e.graph.on("node:mouseleave",(function(t){e.graph.setItemState(t.item,"showAnchors",!1)})),e.graph.on("node:dragstart",(function(n){e.graph.setItemState(n.item,"showAnchors",!0),"anchor-point"==n.target.get("name")&&(e.graph.emit("point-dragstart",!0),t.ShowOrHideAnchorPoint(!0,e))})),e.graph.on("node:dragend",(function(n){e.graph.setItemState(n.item,"showAnchors",!1),"anchor-point"==n.target.get("name")&&(e.graph.emit("point-dragstart",!1),t.ShowOrHideAnchorPoint(!1,e))})),e.graph.on("node:click",(function(){e.showDrawer(),e.clearItemStates()})),e.graph.on("canvas:click",(function(){e.clearItemStates()})),this.initCanvasMouseAnimation(e.graph)}},{key:"ShowOrHideAnchorPoint",value:function(e,t){var n=t.graph,r=n.getNodes();r.forEach((function(t){var n=t.getContainer().findAll((function(e){return"anchor-point"===e.get("name")}));n.forEach((function(t){e||t.get("links")>0?t.show():t.hide()}));var r=t.getContainer().findAll((function(e){return"back-shape"===e.get("name")}));r.forEach((function(t){e?t.show():t.hide()}))}))}},{key:"initCanvasMouseAnimation",value:function(e){e.on("canvas:mousemove",(function(){e.get("canvas").get("el").style.cursor="grab"})),e.on("canvas:mouseup",(function(){e.get("canvas").get("el").style.cursor="grab"})),e.on("canvas:mousedown",(function(){e.get("canvas").get("el").style.cursor="grabbing"}))}}]),e}()),I=new S,A=Object(r["n"])({name:"Home",components:{},data:function(){return{drawer:!1,graph:{},mainClass:"main",functionData:[{label:"开始"},{label:"过程"},{label:"结束"}],graphData:{},graphComponentId:g()(),sourceAnchorIdx:void 0,targetAnchorIdx:void 0,startDragNodeIdx:void 0,initialPosition:[]}},mounted:function(){this.initGraph(),y.setRegisterNode(h["a"],this),j.setRegisterEdge(h["a"]),I.setRegisterEvent(this)},methods:{showDrawer:function(){this.drawer=!0},handleCloseDrawer:function(){this.drawer=!1},initGraph:function(){var e=this,t=new h["a"].Minimap({size:[200,100]}),n=new h["a"].Tooltip,r=new h["a"].Grid,a=new h["a"].Menu({itemTypes:["node"],getContent:function(e){var t=document.createElement("div");return t.style.width="80px",t.style.textAlign="center",t.style.fontSize="16px",t.style.cursor="pointer",t.innerHTML="<p class='lableMenuText'>删除</p>",t},handleMenuClick:function(t,n){e.removeItem(n)}}),o=new h["a"].Graph({container:"main",plugins:[r,t,a,n],modes:v.getEditorModes(this),nodeStateStyles:{active:{fill:"red"}},defaultEdge:{style:{lineWidth:2,endArrow:{path:h["a"].Arrow.triangle(),fill:"#aab7c3",stroke:"#aab7c3"}}},defaultNode:{type:"rect-node",size:[100,50],style:{cursor:"move",lineWidth:2},labelCfg:{style:{cursor:"move"}}}});o.read(this.graphData),this.graph=o},removeItem:function(e){this.graph.removeItem(e)},clearItemStates:function(){var e=this;this.graph.getNodes().forEach((function(t){e.graph.clearItemStates(t)}))},addShap:function(e,t){var n={id:"node"+this.graphComponentId,type:t.type||"rect-node",label:t.label,x:e.x,y:e.y};this.graph.addItem("node",n),this.graphComponentId=g()()}}});n("f722");A.render=d,A.__scopeId="data-v-1fb00070";var N=A,x=[{path:"/",name:"Editor",component:N},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],E=Object(s["a"])({history:Object(s["b"])(),routes:x}),D=E,P=n("5502"),C=Object(P["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["h"])(c).use(a["a"]).use(C).use(D).mount("#app")},f722:function(e,t,n){"use strict";n("1d3d")}});
//# sourceMappingURL=app.2e60bd8c.js.map