(this.webpackJsonpzufang=this.webpackJsonpzufang||[]).push([[22],{210:function(e,a,t){"use strict";t(212);var r=t(213),n=t.n(r),s=t(16),c=t(17),o=t(18),i=t(19),u=t(0),l=t(7),m=t(211),d=t.n(m),p=t(1),j=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=a.call.apply(a,[this].concat(n))).defaultClick=function(){return e.props.history.goBack()},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props,a=e.children,t=e.className,r=e.rightContent,s=e.onLeftClick;return Object(p.jsx)("div",{children:Object(p.jsx)(n.a,{className:[d.a.navbar,t||""].join(" "),mode:"light",icon:Object(p.jsx)("i",{className:"iconfont icon-back"}),onLeftClick:s||this.defaultClick,rightContent:r,children:a})})}}]),t}(u.Component);a.a=Object(l.g)(j)},211:function(e,a,t){e.exports={navbar:"MyNavBar_navbar__2I-jd"}},458:function(e,a,t){e.exports={root:"Register_root__16AI1",navHeader:"Register_navHeader__uDXVV",form:"Register_form__1uK6u",formItem:"Register_formItem__Q_JN0",input:"Register_input__1eI6h",submit:"Register_submit__3DZVt",error:"Register_error__1_muh"}},512:function(e,a,t){"use strict";t.r(a);var r=t(12),n=t.n(r),s=(t(220),t(221)),c=t.n(s),o=t(25),i=(t(107),t(74)),u=t.n(i),l=(t(292),t(293)),m=t.n(l),d=t(16),p=t(17),j=t(18),b=t(19),h=(t(249),t(250)),f=t.n(h),v=t(0),_=t(326),O=t(328),x=t(39),g=t(210),N=t(458),w=t.n(N),k=t(1),y=f.a.alert,C=function(e){Object(j.a)(t,e);var a=Object(b.a)(t);function t(){var e;Object(d.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={username:"",password:""},e}return Object(p.a)(t,[{key:"render",value:function(){return Object(k.jsxs)("div",{className:w.a.root,children:[Object(k.jsx)(g.a,{className:w.a.navHeader,children:"\u8d26\u53f7\u6ce8\u518c"}),Object(k.jsx)(m.a,{size:"x1"}),Object(k.jsx)(u.a,{children:Object(k.jsxs)(_.c,{className:w.a.form,children:[Object(k.jsx)("div",{className:w.a.formItem,children:Object(k.jsx)(_.b,{className:w.a.input,name:"username",placeholder:"\u8bf7\u8f93\u5165\u8d26\u53f7"})}),Object(k.jsx)(_.a,{className:w.a.error,name:"username",component:"div"}),Object(k.jsx)("div",{className:w.a.formItem,children:Object(k.jsx)(_.b,{className:w.a.input,name:"password",type:"password",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"})}),Object(k.jsx)(_.a,{className:w.a.error,name:"password",component:"div"}),Object(k.jsx)("div",{className:w.a.formSubmit,children:Object(k.jsx)("button",{className:w.a.submit,type:"submit",children:"\u6ce8  \u518c"})})]})})]})}}]),t}(v.Component);C=Object(_.d)({mapPropsToValues:function(){return{username:"",password:""}},validationSchema:O.a().shape({username:O.b().required("\u8d26\u53f7\u5fc5\u586b").matches(/^[a-zA-Z_\d]{5,8}$/,"\u8d26\u53f7\u957f\u5ea6\u4e3a5~8\u4f4d\uff0c\u53ea\u80fd\u7531\u6570\u5b57\u3001\u5b57\u6bcd\u3001\u4e0b\u5212\u7ebf\u7ec4\u6210"),password:O.b().required("\u5bc6\u7801\u5fc5\u586b").matches(/^[a-zA-Z_\d]{5,12}$/,"\u5bc6\u7801\u957f\u5ea6\u4e3a5~12\u4f4d\uff0c\u53ea\u80fd\u7531\u6570\u5b57\u3001\u5b57\u6bcd\u3001\u4e0b\u5212\u7ebf\u7ec4\u6210")}),handleSubmit:function(){var e=Object(o.a)(n.a.mark((function e(a,t){var r,s,o,i,u,l,m;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.props,s=a.username,o=a.password,e.next=4,x.a.post("/user/registered",{username:s,password:o});case 4:i=e.sent,u=i.data,l=u.status,m=u.description,200===l?y("\u63d0\u793a","\u6ce8\u518c\u6210\u529f\uff0c\u8fd4\u56de\u767b\u5f55\u9875\u9762\uff1f",[{text:"\u53d6\u6d88"},{text:"\u786e\u5b9a",onPress:function(){return r.history.goBack()}}]):c.a.info(m,2,null,!1);case 7:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()})(C),a.default=C}}]);
//# sourceMappingURL=22.fc3e1b94.chunk.js.map