(this.webpackJsonpzufang=this.webpackJsonpzufang||[]).push([[9],{212:function(e,t,n){"use strict";n(214);var a=n(215),o=n.n(a),r=n(16),i=n(17),c=n(18),s=n(19),l=n(0),u=n(7),f=n(213),p=n.n(f),h=n(1),d=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).defaultClick=function(){return e.props.history.goBack()},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=e.rightContent,r=e.onLeftClick;return Object(h.jsx)("div",{children:Object(h.jsx)(o.a,{className:[p.a.navbar,n||""].join(" "),mode:"light",icon:Object(h.jsx)("i",{className:"iconfont icon-back"}),onLeftClick:r||this.defaultClick,rightContent:a,children:t})})}}]),n}(l.Component);t.a=Object(u.g)(d)},213:function(e,t,n){e.exports={navbar:"MyNavBar_navbar__1MYpP"}},214:function(e,t,n){"use strict";n(24),n(216)},215:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(n(2)),o=u(n(3)),r=u(n(6)),i=u(n(4)),c=u(n(5)),s=u(n(20)),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0));function u(e){return e&&e.__esModule?e:{default:e}}var f=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&(n[a[o]]=e[a[o]])}return n},p=function(e){function t(){return(0,o.default)(this,t),(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,o=e.children,r=e.mode,i=e.icon,c=e.onLeftClick,u=e.leftContent,p=e.rightContent,h=f(e,["prefixCls","className","children","mode","icon","onLeftClick","leftContent","rightContent"]);return l.createElement("div",(0,a.default)({},h,{className:(0,s.default)(n,t,t+"-"+r)}),l.createElement("div",{className:t+"-left",role:"button",onClick:c},i?l.createElement("span",{className:t+"-left-icon","aria-hidden":"true"},i):null,u),l.createElement("div",{className:t+"-title"},o),l.createElement("div",{className:t+"-right"},p))}}]),t}(l.Component);t.default=p,p.defaultProps={prefixCls:"am-navbar",mode:"dark",onLeftClick:function(){}},e.exports=t.default},216:function(e,t,n){},228:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(16),o=n(17),r=n(18),i=n(19),c=n(0),s=n(21),l=n(229),u=n.n(l),f=n(1),p=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:u.a.root,children:[Object(f.jsx)("img",{className:u.a.img,src:s.a+"/img/not-found.png",alt:"\u6682\u65e0\u6570\u636e"}),Object(f.jsx)("p",{className:u.a.msg,children:this.props.children})]})}}]),n}(c.Component)},229:function(e,t,n){e.exports={root:"NoHouse_root__kcDiZ",img:"NoHouse_img__2BOIP",msg:"NoHouse_msg__2-W6c"}},237:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=n(2),r=(a=o)&&a.__esModule?a:{default:a};t.getComponentLocale=function(e,t,n,a){var o={};if(t&&t.antLocale&&t.antLocale[n])o=t.antLocale[n];else{var i=a();o=i.default||i}var c=(0,r.default)({},o);e.locale&&(c=(0,r.default)({},c,e.locale),e.locale.lang&&(c.lang=(0,r.default)({},o.lang,e.locale.lang)));return c},t.getLocaleCode=function(e){var t=e.antLocale&&e.antLocale.locale;if(e.antLocale&&e.antLocale.exist&&!t)return"zh-cn";return t}},244:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a="zfy_city",o=function(){return JSON.parse(localStorage.getItem(a))}},276:function(e,t,n){"use strict";n(24),n(277)},277:function(e,t,n){},278:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=g(n(2)),o=g(n(38)),r=g(n(3)),i=g(n(6)),c=g(n(4)),s=g(n(5)),l=g(n(20)),u=v(n(0)),f=v(n(35)),p=g(n(107)),h=g(n(109)),d=n(237),m=n(279);function v(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function g(e){return e&&e.__esModule?e:{default:e}}var C=function(e){function t(e){(0,r.default)(this,t);var n=(0,c.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.onSubmit=function(e){e.preventDefault(),n.props.onSubmit&&n.props.onSubmit(n.state.value||""),n.inputRef&&n.inputRef.blur()},n.onChange=function(e){n.state.focus||n.setState({focus:!0});var t=e.target.value;"value"in n.props||n.setState({value:t}),n.props.onChange&&n.props.onChange(t)},n.onFocus=function(){n.setState({focus:!0}),n.firstFocus=!0,n.props.onFocus&&n.props.onFocus()},n.onBlur=function(){var e;n.onBlurTimeout=(e=function(){n.blurFromOnClear||document.activeElement!==n.inputRef&&n.setState({focus:!1}),n.blurFromOnClear=!1},window.requestAnimationFrame?window.requestAnimationFrame(e):window.setTimeout(e,1)),n.props.onBlur&&(setTimeout((function(){document.body&&(document.body.scrollTop=document.body.scrollTop)}),100),n.props.onBlur())},n.onClear=function(){n.doClear()},n.doClear=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];n.blurFromOnClear=e,"value"in n.props||n.setState({value:""}),n.props.onClear&&n.props.onClear(""),n.props.onChange&&n.props.onChange(""),e&&n.focus()},n.onCancel=function(){n.props.onCancel?n.props.onCancel(n.state.value||""):n.doClear(!1)},n.focus=function(){n.inputRef&&n.inputRef.focus()};var a=void 0;return a="value"in e?e.value||"":"defaultValue"in e?e.defaultValue:"",n.state={value:a,focus:!1},n}return(0,s.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){if(this.rightBtnRef){var e=window.getComputedStyle(this.rightBtnRef);this.rightBtnInitMarginleft=e.marginLeft}this.componentDidUpdate()}},{key:"componentDidUpdate",value:function(){if(this.syntheticPhRef)if(this.inputContainerRef&&this.inputContainerRef.className.indexOf(this.props.prefixCls+"-start")>-1){if(this.syntheticPhContainerRef){var e=this.syntheticPhContainerRef.getBoundingClientRect().width;this.syntheticPhRef.style.width=Math.ceil(e)+"px"}!this.props.showCancelButton&&this.rightBtnRef&&(this.rightBtnRef.style.marginRight="0")}else this.syntheticPhRef.style.width="100%",!this.props.showCancelButton&&this.rightBtnRef&&(this.rightBtnRef.style.marginRight="-"+(this.rightBtnRef.offsetWidth+(null!=this.rightBtnInitMarginleft?parseInt(this.rightBtnInitMarginleft,10):0))+"px")}},{key:"componentWillReceiveProps",value:function(e){"value"in e&&e.value!==this.state.value&&this.setState({value:e.value})}},{key:"componentWillUnmount",value:function(){var e;this.onBlurTimeout&&(e=this.onBlurTimeout,window.cancelAnimationFrame?window.cancelAnimationFrame(e):window.clearTimeout(e),this.onBlurTimeout=null)}},{key:"render",value:function(){var e,t=this,r=this.props,i=r.prefixCls,c=r.showCancelButton,s=r.disabled,f=r.placeholder,m=r.className,v=r.style,g=r.maxLength,C=(0,d.getComponentLocale)(this.props,this.context,"SearchBar",(function(){return n(280)})).cancelText,y=this.state,b=y.value,O=y.focus,j=(0,l.default)(i,m,(0,o.default)({},i+"-start",!!(O||b&&b.length>0))),_=(0,l.default)(i+"-clear",(0,o.default)({},i+"-clear-show",!!(O&&b&&b.length>0))),x=(0,l.default)(i+"-cancel",(e={},(0,o.default)(e,i+"-cancel-show",!!(c||O||b&&b.length>0)),(0,o.default)(e,i+"-cancel-anim",this.firstFocus),e));return u.createElement("form",{onSubmit:this.onSubmit,className:j,style:v,ref:function(e){return t.inputContainerRef=e},action:"#"},u.createElement("div",{className:i+"-input"},u.createElement("div",{className:i+"-synthetic-ph",ref:function(e){return t.syntheticPhRef=e}},u.createElement("span",{className:i+"-synthetic-ph-container",ref:function(e){return t.syntheticPhContainerRef=e}},u.createElement("i",{className:i+"-synthetic-ph-icon"}),u.createElement("span",{className:i+"-synthetic-ph-placeholder",style:{visibility:f&&!b?"visible":"hidden"}},f))),u.createElement("input",(0,a.default)({type:"search",className:i+"-value",value:b,disabled:s,placeholder:f,onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur,ref:function(e){return t.inputRef=e},maxLength:g},(0,h.default)(this.props))),u.createElement(p.default,{activeClassName:i+"-clear-active"},u.createElement("a",{onClick:this.onClear,className:_}))),u.createElement("div",{className:x,onClick:this.onCancel,ref:function(e){return t.rightBtnRef=e}},this.props.cancelText||C))}}]),t}(u.Component);t.default=C,C.defaultProps=m.defaultProps,C.contextTypes={antLocale:f.object},e.exports=t.default},279:function(e,t,n){"use strict";function a(){}Object.defineProperty(t,"__esModule",{value:!0});t.defaultProps={prefixCls:"am-search",placeholder:"",onSubmit:a,onChange:a,onFocus:a,onBlur:a,onClear:a,showCancelButton:!1,disabled:!1}},280:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={cancelText:"\u53d6\u6d88"},e.exports=t.default},492:function(e,t,n){e.exports={root:"Search_root__x7uhG",tips:"Search_tips__1C5O9",tip:"Search_tip__sDEBg"}},516:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));n(276);var a=n(278),o=n.n(a),r=n(25),i=n(16),c=n(17),s=n(18),l=n(19),u=n(13),f=n.n(u),p=n(0),h=n(39),d=n(212),m=n(228),v=n(244),g=n(492),C=n.n(g),y=n(1),b=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).cityId=Object(v.a)().value,e.timerId=null,e.state={searchText:"",tipList:[]},e.renderTips=function(){var t=e.state.tipList;return 0===t.length?Object(y.jsx)(m.a,{children:"\u8fd9\u91cc\u7a7a\u7a7a\u5982\u4e5f\uff0c\u6362\u4e2a\u8bcd\u8bd5\u8bd5\u5427~"}):t.map((function(t){return Object(y.jsx)("div",{className:C.a.tip,onClick:function(){return e.onTipClick(t)},children:t.communityName},t.community)}))},e.onTipClick=function(t){e.props.history.replace("/rent/add",{name:t.communityName,id:t.community})},e.handleSearchText=function(t){if(e.setState({searchText:t}),!t)return e.setState({tipList:[]});clearTimeout(e.timerId),e.timerId=setTimeout(Object(r.a)(f.a.mark((function n(){var a;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.a.get("/area/community",{params:{name:t,id:e.cityId}});case 2:a=n.sent,e.setState({tipList:a.data.body});case 4:case"end":return n.stop()}}),n)}))),500)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.history,t=this.state.searchText;return Object(y.jsxs)("div",{className:C.a.root,children:[Object(y.jsx)(d.a,{children:"\u641c\u7d22\u5c0f\u533a"}),Object(y.jsx)(o.a,{value:t,placeholder:"\u8bf7\u8f93\u5165\u5c0f\u533a\u540d\u79f0",onCancel:function(){return e.goBack()},showCancelButton:!0,onChange:this.handleSearchText}),Object(y.jsx)("div",{className:C.a.tips,children:this.renderTips()})]})}}]),n}(p.Component)}}]);
//# sourceMappingURL=9.65953ff9.chunk.js.map