(this["webpackJsonpfind-houses"]=this["webpackJsonpfind-houses"]||[]).push([[16],{218:function(e,t,a){"use strict";a(221);var n=a(222),i=a.n(n),s=(a(0),a(8)),c=a(219),r=a.n(c),o=a(1);t.a=Object(s.g)((function(e){var t=e.children,a=e.className,n=e.history,s=e.rightContent,c=e.onLeftClick;return Object(o.jsx)("div",{children:Object(o.jsx)(i.a,{className:[r.a.navbar,a||""].join(" "),mode:"light",icon:Object(o.jsx)("i",{className:"iconfont icon-back"}),onLeftClick:c||function(){return n.goBack()},rightContent:s,children:t})})}))},219:function(e,t,a){e.exports={navbar:"MyNavBar_navbar__2081X"}},221:function(e,t,a){"use strict";a(20),a(224)},222:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(2)),i=u(a(3)),s=u(a(7)),c=u(a(4)),r=u(a(6)),o=u(a(10)),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(0));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(a[n[i]]=e[n[i]])}return a},j=function(e){function t(){return(0,i.default)(this,t),(0,c.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,r.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,a=e.className,i=e.children,s=e.mode,c=e.icon,r=e.onLeftClick,u=e.leftContent,j=e.rightContent,f=d(e,["prefixCls","className","children","mode","icon","onLeftClick","leftContent","rightContent"]);return l.createElement("div",(0,n.default)({},f,{className:(0,o.default)(a,t,t+"-"+s)}),l.createElement("div",{className:t+"-left",role:"button",onClick:r},c?l.createElement("span",{className:t+"-left-icon","aria-hidden":"true"},c):null,u),l.createElement("div",{className:t+"-title"},i),l.createElement("div",{className:t+"-right"},j))}}]),t}(l.Component);t.default=j,j.defaultProps={prefixCls:"am-navbar",mode:"dark",onLeftClick:function(){}},e.exports=t.default},224:function(e,t,a){},233:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(50);var i=a(71);function s(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(i.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},270:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(233),i=a(19),s=a(0),c=a(271),r=a.n(c),o=a(1),l=[{id:1,name:"\u8863\u67dc",icon:"icon-wardrobe"},{id:2,name:"\u6d17\u8863\u673a",icon:"icon-wash"},{id:3,name:"\u7a7a\u8c03",icon:"icon-air"},{id:4,name:"\u5929\u7136\u6c14",icon:"icon-gas"},{id:5,name:"\u51b0\u7bb1",icon:"icon-ref"},{id:6,name:"\u6696\u6c14",icon:"icon-Heat"},{id:7,name:"\u7535\u89c6",icon:"icon-vid"},{id:8,name:"\u70ed\u6c34\u5668",icon:"icon-heater"},{id:9,name:"\u5bbd\u5e26",icon:"icon-broadband"},{id:10,name:"\u6c99\u53d1",icon:"icon-sofa"}];function u(e){var t=e.list,a=e.select,c=e.onSelect,u=void 0===c?function(){}:c,d=Object(s.useState)([]),j=Object(i.a)(d,2),f=j[0],m=j[1];return Object(o.jsx)("div",{className:r.a.root,children:t?l.filter((function(e){return t.includes(e.name)})).map((function(e){return Object(o.jsxs)("div",{className:r.a.item,children:[Object(o.jsx)("i",{className:["iconfont",r.a.icon,e.icon].join(" ")}),e.name]},e.id)})):a?l.map((function(e){var t=f.includes(e.name);return Object(o.jsxs)("div",{className:[r.a.item,t?r.a.active:""].join(" "),onClick:function(){return function(e){var t=[];if(f.includes(e)){var a=f.indexOf(e);f.splice(a,1),t=f}else t=[].concat(Object(n.a)(f),[e]);u(t),m(t)}(e.name)},children:[Object(o.jsx)("i",{className:["iconfont",r.a.icon,e.icon].join(" ")}),e.name]},e.id)})):"\u5565\u4e5f\u6ca1\u4f20\u9012"})}},271:function(e,t,a){e.exports={root:"HousePackage_root__2ajy1",item:"HousePackage_item__3d1y5",icon:"HousePackage_icon__10sp8",active:"HousePackage_active__3KojK"}},353:function(e,t,a){e.exports={root:"HouseDetail_root__3Wxly",navHeader:"HouseDetail_navHeader__17uM6",slides:"HouseDetail_slides__tkGXS",info:"HouseDetail_info__2OCSn",infoTitle:"HouseDetail_infoTitle__3hGT1",tags:"HouseDetail_tags__2SZFU",tag:"HouseDetail_tag__gRacI",tag1:"HouseDetail_tag1__LGK-p",tag2:"HouseDetail_tag2__2odv_",tag3:"HouseDetail_tag3__bU7u4",tag4:"HouseDetail_tag4__1MxFz",infoPrice:"HouseDetail_infoPrice__mk7xA",infoPriceItem:"HouseDetail_infoPriceItem__la38F",month:"HouseDetail_month__1D-QO",infoBasic:"HouseDetail_infoBasic__2pihl",title:"HouseDetail_title__2vOqN",map:"HouseDetail_map__1zIIZ",mapTitle:"HouseDetail_mapTitle__2sbX0",mapContainer:"HouseDetail_mapContainer__1nVIo",rect:"HouseDetail_rect__XOHzi",arrow:"HouseDetail_arrow__2pdUF",housename:"HouseDetail_housename__2wIye",about:"HouseDetail_about__WBUi-",titleEmpty:"HouseDetail_titleEmpty__3Land",set:"HouseDetail_set__1ZIi0",houseTitle:"HouseDetail_houseTitle__1_CCo",contact:"HouseDetail_contact__20XHs",user:"HouseDetail_user__MxxKO",userInfo:"HouseDetail_userInfo__2Sm37",userAuth:"HouseDetail_userAuth__2uzEa",userMsg:"HouseDetail_userMsg__38iew",descText:"HouseDetail_descText__3CwdB",buttons:"HouseDetail_buttons__1aCHP",favorite:"HouseDetail_favorite__1af8g",consult:"HouseDetail_consult__1oT3b",reserve:"HouseDetail_reserve__3sNZk"}},513:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return C}));a(47);var n=a(18),i=a.n(n),s=(a(75),a(66)),c=a.n(s),r=a(24),o=(a(108),a(48)),l=a.n(o),u=a(19),d=(a(256),a(257)),j=a.n(d),f=a(16),m=a.n(f),b=a(0),_=a(218),h=a(270),p=a(21),O=a(51),v=a(37),x=a(353),g=a.n(x),N=a(1),y=window.BMapGL,H={cursor:"pointer",border:"0px solid rgb(255, 0, 0)",padding:"0px",whiteSpace:"nowrap",fontSize:"14px",color:"rgb(255, 255, 255)",textAlign:"center"},D=j.a.alert,w={houseImg:[],title:"",tags:[],price:0,roomType:"",size:0,oriented:[],floor:"",community:"",coord:{latitude:"39.928033",longitude:"116.529466"},supporting:[],houseCode:"",description:""};function C(e){var t=e.match.params.id,a=Object(b.useState)(!1),n=Object(u.a)(a,2),s=n[0],o=n[1],d=Object(b.useState)(!1),j=Object(u.a)(d,2),f=j[0],x=j[1],C=Object(b.useState)(w),k=Object(u.a)(C,2),I=k[0],P=k[1],T=function(){l.a.info("\u6682\u672a\u5f00\u901a\u8be5\u529f\u80fd",2,null,!1)};Object(b.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(b.useEffect)((function(){var e=function(){var e=Object(r.a)(m.a.mark((function e(){var a,n,i,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,v.a.get("/houses/".concat(t));case 3:a=e.sent,P(a.data.body),x(!1),n=a.data.body,i=n.community,s=n.coord,S(i,s);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]),Object(b.useEffect)((function(){var e=function(){var e=Object(r.a)(m.a.mark((function e(){var a,n,i,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(O.b)()){e.next=9;break}return e.next=4,v.a.get("/user/favorites/".concat(t));case 4:a=e.sent,n=a.data,i=n.status,s=n.body,200===i&&o(s.isFavorite),e.next=10;break;case 9:return e.abrupt("return");case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]);var S=function(e,t){var a=t.longitude,n=t.latitude,i=new y.Map("map"),s=new y.Point(a,n);i.centerAndZoom(s,17),i.addControl(new y.ZoomControl);var c=new y.Label("",{position:s,offset:new y.Size(0,0)});c.setContent('\n            <div class="'.concat(g.a.rect,'">\n                <span class="').concat(g.a.housename,'">').concat(e,'</span>\n                <i class="').concat(g.a.arrow,'"></i>\n            </div>\n        ')),c.setStyle(H),i.addOverlay(c)},E=function(){var t=Object(r.a)(m.a.mark((function t(){var a,n,i,c,r,u;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=Object(O.b)(),n=e.history,i=e.location,c=e.match,!a){t.next=18;break}if(r=c.params.id,!s){t.next=12;break}return t.next=7,v.a.delete("/user/favorites/".concat(r));case 7:u=t.sent,o(!1),200===u.data.status?l.a.info("\u5df2\u53d6\u6d88\u6536\u85cf",1,null,!1):l.a.info("\u8bf7\u6c42\u8d85\u65f6\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",2,null,!1),t.next=16;break;case 12:return t.next=14,v.a.post("/user/favorites/".concat(r));case 14:200===t.sent.data.status?(l.a.info("\u6536\u85cf\u6210\u529f",1,null,!1),o(!0)):l.a.info("\u8bf7\u6c42\u8d85\u65f6\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",2,null,!1);case 16:t.next=19;break;case 18:return t.abrupt("return",D("\u63d0\u793a","\u8be5\u529f\u80fd\u9700\u8981\u5148\u767b\u5f55\uff0c\u662f\u5426\u767b\u5f55\uff1f",[{text:"\u5426"},{text:"\u662f",onPress:function(){return n.push("/login",{from:i})}}]));case 19:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),M=I.community,A=I.title,L=I.tags,z=I.price,B=I.roomType,Z=I.size,F=I.floor,X=I.oriented,G=I.supporting,K=I.description;return Object(N.jsxs)("div",{className:g.a.root,children:[Object(N.jsx)(_.a,{className:g.a.navHeader,rightContent:[Object(N.jsx)("i",{className:"iconfont icon-share",onClick:T},"share")],children:M}),Object(N.jsx)("div",{className:g.a.slides,children:f?null:Object(N.jsx)(c.a,{autoplay:!0,infinite:!0,autoplayInterval:2e3,children:I.houseImg.map((function(e){return Object(N.jsx)("img",{src:p.a+e,alt:"\u623f\u5c4b\u56fe\u7247"},e)}))})}),Object(N.jsxs)("div",{className:g.a.info,children:[Object(N.jsx)("h3",{className:g.a.infoTitle,children:A}),Object(N.jsx)(i.a,{className:g.a.infoTags,children:Object(N.jsx)(i.a.Item,{children:L.map((function(e,t){return Object(N.jsx)("span",{className:[g.a.tag,g.a.tags,g.a["tag"+(t%4+1)]].join(" "),children:e},e)}))})}),Object(N.jsxs)(i.a,{className:g.a.infoPrice,children:[Object(N.jsxs)(i.a.Item,{className:g.a.infoPriceItem,children:[Object(N.jsxs)("div",{children:[z,Object(N.jsx)("span",{className:g.a.month,children:"/\u6708"})]}),Object(N.jsx)("div",{children:"\u79df\u91d1"})]}),Object(N.jsxs)(i.a.Item,{className:g.a.infoPriceItem,children:[Object(N.jsx)("div",{children:B}),Object(N.jsx)("div",{children:"\u623f\u578b"})]}),Object(N.jsxs)(i.a.Item,{className:g.a.infoPriceItem,children:[Object(N.jsxs)("div",{children:[Z,"\u5e73\u65b9"]}),Object(N.jsx)("div",{children:"\u9762\u79ef"})]})]}),Object(N.jsxs)(i.a,{className:g.a.infoBasic,align:"start",children:[Object(N.jsxs)(i.a.Item,{children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("span",{className:g.a.title,children:"\u88c5\u4fee\uff1a"}),"\u7cbe\u88c5"]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("span",{className:g.a.title,children:"\u697c\u5c42\uff1a"}),F]})]}),Object(N.jsxs)(i.a.Item,{children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("span",{className:g.a.title,children:"\u671d\u5411\uff1a"}),X.join("\u3001")]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("span",{className:g.a.title,children:"\u7c7b\u578b\uff1a"}),"\u666e\u901a\u4f4f\u5b85"]})]})]})]}),Object(N.jsxs)("div",{className:g.a.map,children:[Object(N.jsxs)("div",{className:g.a.mapTitle,children:["\u5c0f\u533a\uff1a",Object(N.jsx)("span",{children:A})]}),Object(N.jsx)("div",{className:g.a.mapContainer,id:"map",children:"\u5730\u56fe"})]}),Object(N.jsxs)("div",{className:g.a.about,children:[Object(N.jsx)("div",{className:g.a.houseTitle,children:"\u623f\u5c4b\u914d\u5957"}),0===G.length?Object(N.jsx)("div",{className:g.a.titleEmpty,children:"\u6682\u65e0\u6570\u636e"}):Object(N.jsx)(h.a,{list:G})]}),Object(N.jsxs)("div",{className:g.a.set,children:[Object(N.jsx)("div",{className:g.a.houseTitle,children:"\u623f\u5c4b\u6982\u51b5"}),Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{className:g.a.contact,children:[Object(N.jsxs)("div",{className:g.a.user,children:[Object(N.jsx)("img",{src:p.a+"/img/avatar.png",alt:"\u5934\u50cf"}),Object(N.jsxs)("div",{className:g.a.userInfo,children:[Object(N.jsx)("div",{children:"\u5f20\u5973\u58eb"}),Object(N.jsxs)("div",{className:g.a.userAuth,children:[Object(N.jsx)("i",{className:"iconfont icon-auth"}),"\u5df2\u8ba4\u8bc1\u623f\u4e3b"]})]})]}),Object(N.jsx)("span",{className:g.a.userMsg,children:"\u53d1\u6d88\u606f"})]}),Object(N.jsx)("div",{className:g.a.descText,children:K||"\u6682\u65e0\u623f\u5c4b\u6570\u636e"})]})]}),Object(N.jsxs)("div",{className:g.a.buttons,children:[Object(N.jsxs)("span",{className:g.a.favorite,onClick:E,children:[Object(N.jsx)("img",{src:p.a+(s?"/img/star.png":"/img/unstar.png"),alt:"\u6536\u85cf"}),s?"\u5df2\u6536\u85cf":"\u6536\u85cf"]}),Object(N.jsx)("span",{className:g.a.consult,onClick:T,children:"\u5728\u7ebf\u54a8\u8be2"}),Object(N.jsx)("span",{className:g.a.reserve,children:Object(N.jsx)("a",{href:"tel: 183614999905",children:"\u7535\u8bdd\u9884\u5b9a"})})]})]})}}}]);
//# sourceMappingURL=16.c67d4548.chunk.js.map