(this.webpackJsonpzufang=this.webpackJsonpzufang||[]).push([[1],{245:function(e,t,n){"use strict";n(24),n(347)},246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(348)),o=l(n(247)),r=l(n(349)),i=l(n(350));function l(e){return e&&e.__esModule?e:{default:e}}o.default.alert=a.default,o.default.prompt=i.default,o.default.operation=r.default,t.default=o.default,e.exports=t.default},247:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ModalComponent=void 0;var a=d(n(2)),o=d(n(38)),r=d(n(6)),i=d(n(3)),l=d(n(4)),s=d(n(5)),u=d(n(20)),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),p=d(n(328)),f=d(n(107));function d(e){return e&&e.__esModule?e:{default:e}}var m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&(n[a[o]]=e[a[o]])}return n},v=t.ModalComponent=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,s.default)(t,e),t}(c.Component),h=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,r.default)(t,[{key:"renderFooterButton",value:function(e,t,n){var a={};if(e.style&&"string"===typeof(a=e.style)){a={cancel:{},default:{},destructive:{color:"red"}}[a]||{}}return c.createElement(f.default,{activeClassName:t+"-button-active",key:n},c.createElement("a",{className:t+"-button",role:"button",style:a,onClick:function(t){t.preventDefault(),e.onPress&&e.onPress()}},e.text||"Button"))}},{key:"render",value:function(){var e,t=this,n=this.props,r=n.prefixCls,i=n.className,l=n.wrapClassName,s=n.transitionName,f=n.maskTransitionName,d=n.style,v=n.platform,h=n.footer,y=void 0===h?[]:h,b=n.operation,C=n.animated,g=n.transparent,N=n.popup,k=n.animationType,_=m(n,["prefixCls","className","wrapClassName","transitionName","maskTransitionName","style","platform","footer","operation","animated","transparent","popup","animationType"]),P=(0,u.default)(r+"-button-group-"+(2!==y.length||b?"v":"h"),r+"-button-group-"+(b?"operation":"normal")),E=y.length?c.createElement("div",{className:P,role:"group"},y.map((function(e,n){return t.renderFooterButton(e,r,n)}))):null,w=void 0,x=void 0;C&&(w=x=g?"am-fade":"am-slide-up",N&&(w="slide-up"===k?"am-slide-up":"am-slide-down",x="am-fade"));var O=(0,u.default)(l,(0,o.default)({},r+"-wrap-popup",N)),M=(0,u.default)(i,(e={},(0,o.default)(e,r+"-transparent",g),(0,o.default)(e,r+"-popup",N),(0,o.default)(e,r+"-popup-"+k,N&&k),(0,o.default)(e,r+"-android","android"===v),e));return c.createElement(p.default,(0,a.default)({},_,{prefixCls:r,className:M,wrapClassName:O,transitionName:s||w,maskTransitionName:f||x,style:d,footer:E}))}}]),t}(v);t.default=h,h.defaultProps={prefixCls:"am-modal",transparent:!1,popup:!1,animationType:"slide-down",animated:!0,style:{},onShow:function(){},footer:[],closable:!1,operation:!1,platform:"ios"}},258:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector,a=e;for(;a;){if(n.call(a,t))return a;a=a.parentElement}return null},e.exports=t.default},328:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),r=n(3),i=n.n(r),l=n(6),s=n.n(l),u=n(4),c=n.n(u),p=n(5),f=n.n(p),d=n(0),m=n.n(d),v=n(72),h=n.n(v),y=n(327),b=function(e){function t(){return i()(this,t),c()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return f()(t,e),s()(t,[{key:"shouldComponentUpdate",value:function(e){return!!e.hiddenClassName||!!e.visible}},{key:"render",value:function(){var e=this.props.className;this.props.hiddenClassName&&!this.props.visible&&(e+=" "+this.props.hiddenClassName);var t=o()({},this.props);return delete t.hiddenClassName,delete t.visible,t.className=e,m.a.createElement("div",o()({},t))}}]),t}(m.a.Component),C=b;function g(){}var N=function(e){function t(){i()(this,t);var e=c()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.getDialogElement=function(){var t=e.props,n=t.closable,a=t.prefixCls,o=void 0;t.footer&&(o=m.a.createElement("div",{className:a+"-footer",ref:function(t){return e.footerRef=t}},t.footer));var r=void 0;t.title&&(r=m.a.createElement("div",{className:a+"-header",ref:function(t){return e.headerRef=t}},m.a.createElement("div",{className:a+"-title"},t.title)));var i=void 0;n&&(i=m.a.createElement("button",{onClick:e.close,"aria-label":"Close",className:a+"-close"},m.a.createElement("span",{className:a+"-close-x"})));var l=e.getTransitionName(),s=m.a.createElement(C,{key:"dialog-element",role:"document",ref:function(t){return e.dialogRef=t},style:t.style||{},className:a+" "+(t.className||""),visible:t.visible},m.a.createElement("div",{className:a+"-content"},i,r,m.a.createElement("div",{className:a+"-body",style:t.bodyStyle,ref:function(t){return e.bodyRef=t}},t.children),o));return m.a.createElement(y.a,{key:"dialog",showProp:"visible",onAppear:e.onAnimateAppear,onLeave:e.onAnimateLeave,transitionName:l,component:"",transitionAppear:!0},s)},e.onAnimateAppear=function(){document.body.style.overflow="hidden"},e.onAnimateLeave=function(){document.body.style.overflow="",e.wrapRef&&(e.wrapRef.style.display="none"),e.props.onAnimateLeave&&e.props.onAnimateLeave(),e.props.afterClose&&e.props.afterClose()},e.close=function(t){e.props.onClose&&e.props.onClose(t)},e.onMaskClick=function(t){t.target===t.currentTarget&&e.close(t)},e}return f()(t,e),s()(t,[{key:"componentWillUnmount",value:function(){document.body.style.overflow="",this.wrapRef&&(this.wrapRef.style.display="none")}},{key:"getZIndexStyle",value:function(){var e={},t=this.props;return void 0!==t.zIndex&&(e.zIndex=t.zIndex),e}},{key:"getWrapStyle",value:function(){var e=this.props.wrapStyle||{};return o()({},this.getZIndexStyle(),e)}},{key:"getMaskStyle",value:function(){var e=this.props.maskStyle||{};return o()({},this.getZIndexStyle(),e)}},{key:"getMaskTransitionName",value:function(){var e=this.props,t=e.maskTransitionName,n=e.maskAnimation;return!t&&n&&(t=e.prefixCls+"-"+n),t}},{key:"getTransitionName",value:function(){var e=this.props,t=e.transitionName,n=e.animation;return!t&&n&&(t=e.prefixCls+"-"+n),t}},{key:"getMaskElement",value:function(){var e=this.props,t=void 0;if(e.mask){var n=this.getMaskTransitionName();t=m.a.createElement(C,o()({style:this.getMaskStyle(),key:"mask-element",className:e.prefixCls+"-mask",hiddenClassName:e.prefixCls+"-mask-hidden",visible:e.visible},e.maskProps)),n&&(t=m.a.createElement(y.a,{key:"mask",showProp:"visible",transitionAppear:!0,component:"",transitionName:n},t))}return t}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,a=t.maskClosable,r=this.getWrapStyle();return t.visible&&(r.display=null),m.a.createElement("div",null,this.getMaskElement(),m.a.createElement("div",o()({className:n+"-wrap "+(t.wrapClassName||""),ref:function(t){return e.wrapRef=t},onClick:a?this.onMaskClick:void 0,role:"dialog","aria-labelledby":t.title,style:r},t.wrapProps),this.getDialogElement()))}}]),t}(m.a.Component),k=N;N.defaultProps={afterClose:g,className:"",mask:!0,visible:!1,closable:!0,maskClosable:!0,prefixCls:"rmc-dialog",onClose:g};var _=!!h.a.createPortal,P=!("undefined"===typeof window||!window.document||!window.document.createElement),E=function(e){function t(){i()(this,t);var e=c()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.saveRef=function(t){_&&(e._component=t)},e.getComponent=function(t){var n=o()({},e.props);return["visible","onAnimateLeave"].forEach((function(e){n.hasOwnProperty(e)&&delete n[e]})),m.a.createElement(k,o()({},n,{visible:t,onAnimateLeave:e.removeContainer,ref:e.saveRef}))},e.removeContainer=function(){e.container&&(_||h.a.unmountComponentAtNode(e.container),e.container.parentNode.removeChild(e.container),e.container=null)},e.getContainer=function(){if(!e.container){var t=document.createElement("div"),n=e.props.prefixCls+"-container-"+(new Date).getTime();t.setAttribute("id",n),document.body.appendChild(t),e.container=t}return e.container},e}return f()(t,e),s()(t,[{key:"componentDidMount",value:function(){this.props.visible&&this.componentDidUpdate()}},{key:"shouldComponentUpdate",value:function(e){var t=e.visible;return!(!this.props.visible&&!t)}},{key:"componentWillUnmount",value:function(){this.props.visible?_?this.removeContainer():this.renderDialog(!1):this.removeContainer()}},{key:"componentDidUpdate",value:function(){_||this.renderDialog(this.props.visible)}},{key:"renderDialog",value:function(e){h.a.unstable_renderSubtreeIntoContainer(this,this.getComponent(e),this.getContainer())}},{key:"render",value:function(){if(!P)return null;var e=this.props.visible;return _&&(e||this._component)?h.a.createPortal(this.getComponent(e),this.getContainer()):null}}]),t}(m.a.Component);t.default=E;E.defaultProps={visible:!1,prefixCls:"rmc-dialog",onClose:function(){}}},347:function(e,t,n){},348:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[{text:"\u786e\u5b9a"}],l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"ios",s=!1;if(!e&&!t)return{close:function(){}};var u=document.createElement("div");function c(){o.unmountComponentAtNode(u),u&&u.parentNode&&u.parentNode.removeChild(u)}document.body.appendChild(u);var p=n.map((function(e){var t=e.onPress||function(){};return e.onPress=function(){if(!s){var e=t();e&&e.then?e.then((function(){s=!0,c()})).catch((function(){})):(s=!0,c())}},e})),f="am-modal";function d(e){/iPhone|iPod|iPad/i.test(navigator.userAgent)&&((0,r.default)(e.target,"."+f+"-footer")||e.preventDefault())}return o.render(a.createElement(i.default,{visible:!0,transparent:!0,title:e,transitionName:"am-zoom",closable:!1,maskClosable:!1,footer:p,maskTransitionName:"am-fade",platform:l,wrapProps:{onTouchStart:d}},a.createElement("div",{className:f+"-alert-content"},t)),u),{close:c}};var a=s(n(0)),o=s(n(72)),r=l(n(258)),i=l(n(247));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}e.exports=t.default},349:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{text:"\u786e\u5b9a"}],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ios",n=!1,l="am-modal",s=document.createElement("div");function u(){o.unmountComponentAtNode(s),s&&s.parentNode&&s.parentNode.removeChild(s)}document.body.appendChild(s);var c=e.map((function(e){var t=e.onPress||function(){};return e.onPress=function(){if(!n){var e=t();e&&e.then?e.then((function(){n=!0,u()})).catch((function(){})):(n=!0,u())}},e}));function p(e){/iPhone|iPod|iPad/i.test(navigator.userAgent)&&((0,r.default)(e.target,".am-modal-footer")||e.preventDefault())}return o.render(a.createElement(i.default,{visible:!0,operation:!0,transparent:!0,prefixCls:l,transitionName:"am-zoom",closable:!1,maskClosable:!0,onClose:u,footer:c,maskTransitionName:"am-fade",className:"am-modal-operation",platform:t,wrapProps:{onTouchStart:p}}),s),{close:u}};var a=s(n(0)),o=s(n(72)),r=l(n(258)),i=l(n(247));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}e.exports=t.default},350:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"default",s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:["",""],c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"ios",p=!1;if(s="string"===typeof s?s:"number"===typeof s?""+s:"",!n)return{close:function(){}};var f="am-modal",d={text:s};function m(e){var t=e.target,n=t.getAttribute("type");null!==n&&(d[n]=t.value)}function v(e){var t=e.currentTarget||e.target;t&&t.focus()}function h(){/MicroMessenger/.test(navigator.userAgent)&&(document.body.scrollTop=document.body.scrollTop)}var y=void 0,b=function(e){setTimeout((function(){e&&e.focus()}),500)};switch(l){case"login-password":y=a.createElement("div",{className:f+"-input-container"},a.createElement("div",{className:f+"-input"},a.createElement("label",null,a.createElement("input",{type:"text",defaultValue:d.text,ref:function(e){return b(e)},onClick:v,onChange:m,placeholder:u[0],onBlur:h}))),a.createElement("div",{className:f+"-input"},a.createElement("label",null,a.createElement("input",{type:"password",defaultValue:d.password,onClick:v,onChange:m,placeholder:u[1],onBlur:h}))));break;case"secure-text":y=a.createElement("div",{className:f+"-input-container"},a.createElement("div",{className:f+"-input"},a.createElement("label",null,a.createElement("input",{type:"password",defaultValue:d.password,ref:function(e){return b(e)},onClick:v,onChange:m,placeholder:u[0],onBlur:h}))));break;default:y=a.createElement("div",{className:f+"-input-container"},a.createElement("div",{className:f+"-input"},a.createElement("label",null,a.createElement("input",{type:"text",defaultValue:d.text,ref:function(e){return b(e)},onClick:v,onChange:m,placeholder:u[0],onBlur:h}))))}var C=a.createElement("div",null,t,y),g=document.createElement("div");function N(){o.unmountComponentAtNode(g),g&&g.parentNode&&g.parentNode.removeChild(g)}function k(e){if("function"===typeof e){var t=d.text,n=void 0===t?"":t,a=d.password,o=void 0===a?"":a,r="login-password"===l?[n,o]:"secure-text"===l?[o]:[n];return e.apply(void 0,r)}}document.body.appendChild(g);var _=void 0;_="function"===typeof n?[{text:"\u53d6\u6d88",onPress:function(){}},{text:"\u786e\u5b9a",onPress:function(){k(n)}}]:n.map((function(e){return{text:e.text,onPress:function(){return k(e.onPress)}}}));var P=_.map((function(e){var t=e.onPress||function(){};return e.onPress=function(){if(!p){var e=t();e&&e.then?e.then((function(){p=!0,N()})).catch((function(){})):(p=!0,N())}},e}));function E(e){/iPhone|iPod|iPad/i.test(navigator.userAgent)&&((0,r.default)(e.target,"."+f+"-content")||e.preventDefault())}return o.render(a.createElement(i.default,{visible:!0,transparent:!0,prefixCls:f,title:e,closable:!1,maskClosable:!1,transitionName:"am-zoom",footer:P,maskTransitionName:"am-fade",platform:c,wrapProps:{onTouchStart:E}},a.createElement("div",{className:f+"-propmt-content"},C)),g),{close:N}};var a=s(n(0)),o=s(n(72)),r=l(n(258)),i=l(n(247));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}e.exports=t.default}}]);
//# sourceMappingURL=1.d02464a3.chunk.js.map