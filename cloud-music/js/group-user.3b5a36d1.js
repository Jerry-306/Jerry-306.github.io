(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["group-user"],{"0411":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"info-list"},t._l(t.list,(function(e,n){return i("li",{key:e.id,staticClass:"info-item pointer",on:{click:function(i){return t.$emit("clickitem",e)}}},[t._t("index",null,{index:n}),t._t("img",(function(){return[i("img",{staticClass:"sub-img mleft-10",attrs:{src:e.picUrl+"?param=100y100"}})]}),{item:e}),i("div",{staticClass:"sub-title font-14 mleft-10"},[t._t("title",(function(){return[t._v(" "+t._s(e.name)+" ")]}),{item:e})],2),i("div",{staticClass:"sub-item font-12"},[t._t("item1",null,{item:e})],2),i("div",{staticClass:"sub-item font-12"},[t._t("item2",null,{item:e})],2),i("div",{staticClass:"sub-item sub-final font-12"},[t._t("item3",null,{item:e})],2)],2)})),0)},r=[],a={props:{list:{type:Array,required:!0}}},s=a,c=(i("c482"),i("2877")),o=Object(c["a"])(s,n,r,!1,null,"47918f91",null);e["a"]=o.exports},"1d7b":function(t,e,i){"use strict";i.d(e,"c",(function(){return r})),i.d(e,"b",(function(){return a})),i.d(e,"f",(function(){return s})),i.d(e,"a",(function(){return c})),i.d(e,"d",(function(){return o})),i.d(e,"e",(function(){return u})),i.d(e,"g",(function(){return l})),i.d(e,"h",(function(){return f})),i.d(e,"i",(function(){return d}));var n=i("d577"),r=function(t){var e=t.limit,i=t.offset,r=t.type,a=t.area,s=t.initial;return Object(n["a"])("/artist/list",{limit:e,offset:i,type:r,area:a,initial:s})},a=function(t){return Object(n["a"])("/artist/detail",{id:t})},s=function(t){return Object(n["a"])("/artist/top/song",{id:t})},c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return Object(n["a"])("/artist/album",{id:t,limit:e,offset:i})},o=function(t){return Object(n["a"])("/artist/mv",{id:t})},u=function(t){return Object(n["a"])("/simi/artist",{id:t})},l=function(t){return Object(n["a"])("/artist/desc",{id:t})},f=function(){return Object(n["a"])("/artist/sublist",{timestamp:Date.now()})},d=function(t,e){return Object(n["a"])("/artist/sub",{id:t,t:e,timestamp:Date.now()})}},"1f51":function(t,e,i){},2216:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sub-mv"},[i("div",{staticClass:"submv-head"},[i("div",[i("span",{staticClass:"font-bold"},[t._v("收藏的视频")]),i("span",{staticClass:"font-12",staticStyle:{color:"#cfcfcf"}},[t._v("("+t._s(t.count)+")")])]),i("div",{staticClass:"detail-search"},[i("el-input",{attrs:{placeholder:"搜索我收藏的视频",clearable:"","suffix-icon":"el-icon-search"},model:{value:t.key,callback:function(e){t.key=e},expression:"key"}})],1)]),i("div",{staticClass:"video-list mtop-10"},[i("ul",t._l(t.subMvList,(function(e,n){return i("li",{key:n,staticClass:"mtop-10"},[i("div",{staticClass:"mtop-10 img-wrap"},[i("img",{staticClass:"video-img",attrs:{src:e.coverUrl+"?param=300y170"},on:{click:function(i){return t.toMvDetail(e.vid)}}}),i("div",{staticClass:"video-playcount font-12"},[i("i",{staticClass:"iconfont icon-24gl-play"}),t._v(" "+t._s(t._f("countFormat")(e.playTime))+" ")]),i("div",{staticClass:"video-time font-12"},[t._v(" "+t._s(t._f("timeFormat")(e.durationms/1e3))+" ")]),i("div",{staticClass:"play-btn pointer",on:{click:function(i){return t.toMvDetail(e.vid)}}},[i("i",{staticClass:"iconfont icon-bofang"})])]),i("div",{staticClass:"title-line text-hidden font-14"},[t._v(t._s(e.title))]),i("div",{staticClass:"author-line font-12"},t._l(e.creator,(function(e,n){return i("span",{key:n},[t._v(t._s(e.name)+" ")])})),0)])})),0)])])},r=[],a=i("1da1"),s=(i("96cf"),i("4de4"),i("d3b7"),i("ac1f"),i("466d"),i("dca8"),i("f873")),c={data:function(){return{key:"",list:[],count:0}},computed:{subMvList:function(){var t=this;return this.list.filter((function(e){return e.title.match(t.key)}))}},created:function(){this.getSubMv()},methods:{getSubMv:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["f"])();case 2:if(i=e.sent,200===i.code){e.next=5;break}return e.abrupt("return");case 5:t.list=Object.freeze(i.data),t.count=i.count;case 7:case"end":return e.stop()}}),e)})))()},toMvDetail:function(t){"undefined"!==typeof t&&this.$router.push("videodetail/mv/"+t)}}},o=c,u=(i("73aa"),i("2877")),l=Object(u["a"])(o,n,r,!1,null,"2af5c40b",null);e["default"]=l.exports},"32c0":function(t,e,i){},3643:function(t,e,i){},"3e4c":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"img-cut"},[i("div",{staticClass:"img-wrap"},[i("img",{staticClass:"edit-img",attrs:{src:t.imgUrl}})]),i("div",{staticClass:"btn-wrap"},[i("el-upload",{ref:"upload",attrs:{action:t.action,"auto-upload":!1,"on-change":t.handleChange,"show-file-list":!1,accept:"image/*"}},[i("button",{staticClass:"btn btn-white",attrs:{slot:"trigger"},slot:"trigger"},[t._v(t._s(t.btnText))])])],1),i("el-dialog",{attrs:{title:"图片剪裁",visible:t.ImgdialogVisible,modal:!1,"close-on-click-modal":!1,"append-to-body":"","destroy-on-close":!0,center:!0},on:{"update:visible":function(e){t.ImgdialogVisible=e}}},[i("div",{staticClass:"cropper-content"},[i("div",{staticClass:"cropper",staticStyle:{"text-align":"center"}},[i("vueCropper",{ref:"cropper",attrs:{img:t.option.img,outputSize:t.option.size,outputType:t.option.outputType,info:t.option.info,full:t.option.full,canMove:t.option.canMove,canMoveBox:t.option.canMoveBox,original:t.option.original,autoCrop:t.option.autoCrop,fixed:t.option.fixed,fixedNumber:t.option.fixedNumber,centerBox:t.option.centerBox,infoTrue:t.option.infoTrue,fixedBox:t.option.fixedBox,mode:t.option.mode,canScale:t.option.canScale}})],1)]),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("button",{staticClass:"btn btn-white",on:{click:function(e){t.ImgdialogVisible=!1}}},[t._v(" 取消 ")]),i("button",{staticClass:"btn btn-red mleft-10",on:{click:t.getSliceImg}},[t._v(" 保存并关闭 ")])])])],1)},r=[],a=i("1da1"),s=(i("d3b7"),i("96cf"),{props:{imgUrl:{type:String,required:!0},btnText:{type:String,default:"选择图片"}},data:function(){return{action:"/xxxx",ImgdialogVisible:!1,option:{img:"",info:!0,outputSize:.8,outputType:"jpeg",canScale:!0,autoCrop:!0,fixedBox:!0,fixed:!0,fixedNumber:[1,1],full:!0,canMoveBox:!1,original:!1,centerBox:!0,infoTrue:!0,mode:"contain"}}},methods:{getSliceImg:function(){var t=this;this.$refs.cropper.getCropBlob(function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(i){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getImgSize(i);case 2:n=e.sent,t.$emit("upload",{file:i,imgSize:n}),t.ImgdialogVisible=!1;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},handleChange:function(t){this.openImgDialog(t.raw)},openImgDialog:function(t){var e=this,i=new FileReader;i.onload=function(t){e.option.img=t.target.result,e.ImgdialogVisible=!0},t&&i.readAsDataURL(t)},getImgSize:function(t){return new Promise((function(e,i){var n=new FileReader;n.onload=function(t){var i=new Image;i.src=t.target.result,i.onload=function(){e({width:this.width,height:this.height})}},t?n.readAsDataURL(t):i("出错了")}))}}}),c=s,o=(i("e6af"),i("2877")),u=Object(o["a"])(c,n,r,!1,null,"b6685988",null);e["a"]=u.exports},4465:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sub-artists"},[i("div",{staticClass:"subartists-head"},[i("div",[i("span",{staticClass:"font-bold"},[t._v("收藏的歌手")]),i("span",{staticClass:"font-12",staticStyle:{color:"#cfcfcf"}},[t._v("("+t._s(t.count)+")")])]),i("div",{staticClass:"detail-search"},[i("el-input",{attrs:{placeholder:"搜索我收藏的歌手",clearable:"","suffix-icon":"el-icon-search"},model:{value:t.key,callback:function(e){t.key=e},expression:"key"}})],1)]),i("div",{staticClass:"mtop-20"},[i("InfoList",{attrs:{list:t.subList},on:{clickitem:t.toArtistDetail},scopedSlots:t._u([{key:"img",fn:function(t){var e=t.item;return[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.picUrl+"?param=100y100",expression:"item.picUrl + '?param=100y100'"}],staticClass:"sub-img mleft-10"})]}},{key:"title",fn:function(e){var i=e.item;return[t._v(" "+t._s(i.name)+" ")]}},{key:"item1",fn:function(e){var i=e.item;return[t._v(" 专辑： "+t._s(i.albumSize)+" ")]}},{key:"item2",fn:function(e){var i=e.item;return[t._v(" MV："+t._s(i.mvSize)+" ")]}}])})],1)])},r=[],a=i("1da1"),s=(i("96cf"),i("4de4"),i("d3b7"),i("ac1f"),i("466d"),i("b0c0"),i("dca8"),i("0411")),c=i("1d7b"),o={components:{InfoList:s["a"]},data:function(){return{list:[],offset:0,count:0,key:""}},computed:{subList:function(){var t=this;return this.list.filter((function(e){return e.name.match(t.key)}))}},created:function(){this.getSubArt()},methods:{getSubArt:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["h"])();case 2:if(i=e.sent,200===i.code){e.next=5;break}return e.abrupt("return");case 5:t.list=Object.freeze(i.data),t.count=i.count;case 7:case"end":return e.stop()}}),e)})))()},toArtistDetail:function(t){this.$router.push("/artistdetail/"+t.id)}}},u=o,l=(i("6b84"),i("2877")),f=Object(l["a"])(u,n,r,!1,null,"386ed6a4",null);e["default"]=f.exports},"4abe":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"playlist-edit mtop-20"},[i("div",{staticClass:"font-20 font-bold"},[t._v("编辑歌单信息")]),i("div",{staticClass:"edit-wrap mtop-20"},[i("el-form",{staticClass:"edit-form",attrs:{model:t.form,"label-width":"80px",size:"mini"}},[i("el-form-item",{attrs:{label:"歌单名："}},[i("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),i("el-form-item",{attrs:{label:"标签："}},[i("div",{staticClass:"tag-wrap"},[t._l(t.form.tags,(function(e){return i("div",{key:e,staticClass:"tag"},[t._v(" "+t._s(e)+" ")])})),i("div",{staticClass:"button-wrap"},[i("button",{staticClass:"no-btn",staticStyle:{color:"#5380b2"},on:{click:t.getCat}},[t._v(" 添加标签 ")])])],2)]),i("el-form-item",{attrs:{label:"简介："}},[i("el-input",{attrs:{type:"textarea"},model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1)],1),i("div",{staticClass:"edit-img-container"},[i("ImgCut",{attrs:{btnText:"编辑封面",imgUrl:t.imgUrl},on:{upload:t.upload}})],1)],1),i("div",{staticClass:"submit-wrap"},[i("button",{staticClass:"btn btn-red",on:{click:t.update}},[t._v("保存")]),i("button",{staticClass:"btn btn-white",on:{click:function(e){return t.$router.back()}}},[t._v("取消")])]),i("el-dialog",{attrs:{title:"添加标签",visible:t.TagsdialogVisible,modal:!1,"close-on-click-modal":!1,"append-to-body":"","destroy-on-close":!0,center:!0},on:{"update:visible":function(e){t.TagsdialogVisible=e}}},[i("div",{staticClass:"tag-list-wrap"},t._l(t.allCats,(function(e,n){return i("div",{key:n,staticClass:"tag-list"},[i("div",{staticClass:"tag-title"},[0===n?[i("i",{staticClass:"iconfont icon-diqiuquanqiu font-24"}),i("span",{staticClass:"mleft-6"},[t._v("语种")])]:t._e(),1===n?[i("i",{staticClass:"iconfont icon-fengge font-24"}),i("span",{staticClass:"mleft-6"},[t._v("风格")])]:t._e(),2===n?[i("i",{staticClass:"iconfont icon-xiazai47 font-24"}),i("span",{staticClass:"mleft-6"},[t._v("场景")])]:t._e(),3===n?[i("i",{staticClass:"iconfont icon-smiling font-24"}),i("span",{staticClass:"mleft-6"},[t._v("情感")])]:t._e(),4===n?[i("i",{staticClass:"iconfont icon-zhuti font-24"}),i("span",{staticClass:"mleft-6"},[t._v("主题")])]:t._e()],2),i("ul",t._l(e,(function(e,r){return i("li",{key:e.name},[i("button",{staticClass:"no-btn",class:{isActive:e.isActive},on:{click:function(i){return t.pushTags(e.name,n,r)}}},[t._v(" "+t._s(e.name)+" ")])])})),0)])})),0),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("button",{staticClass:"btn btn-red",on:{click:function(e){t.TagsdialogVisible=!1}}},[t._v(" 完成 ")])])])],1)},r=[],a=i("1da1"),s=(i("96cf"),i("b0c0"),i("fb6a"),i("d3b7"),i("159b"),i("4c53"),i("c740"),i("dca8"),i("4de4"),i("a434"),i("a4d3"),i("e01a"),i("a15b"),i("0bfe")),c=i("d577"),o=i("3e4c"),u={components:{ImgCut:o["a"]},props:{id:{type:String,required:!0}},data:function(){return{form:{name:"",tags:[],desc:""},imgUrl:"",isInput:!1,TagsdialogVisible:!1,allCats:[]}},watch:{form:{deep:!0,handler:function(t){t.name.length>=20&&(this.form.name=t.name.slice(0,19),this.$message.warning("歌单名过长")),t.desc.length>1e3&&(this.form.desc=t.desc.slice(0,999),this.$message.warning("描述过长")),this.isInput=!0}}},created:function(){this.getPlayList()},methods:{getCat:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["b"])();case 2:if(i=e.sent,200===i.code){e.next=5;break}return e.abrupt("return");case 5:for(t.allCats=[],i.sub.forEach((function(e){e.isActive=!1,-1!==t.form.tags.findIndex((function(t){return t===e.name}))&&(e.isActive=!0)})),n=function(e){t.allCats.push(Object.freeze(i.sub.filter((function(t){return t.category===e}))))},r=0;r<5;r++)n(r);t.TagsdialogVisible=!0;case 10:case"end":return e.stop()}}),e)})))()},pushTags:function(t,e,i){var n=this.form.tags.indexOf(t);if(-1!==n)this.form.tags.splice(n,1),this.allCats[e][i].isActive=!1;else{if(3===this.form.tags.length)return this.$message.warning("最多只能选三个标签");this.form.tags.push(t),this.allCats[e][i].isActive=!0}},getPlayList:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,Object(s["g"])(t.id);case 3:if(i=e.sent,200===i.code){e.next=6;break}return e.abrupt("return");case 6:t.form.name=i.playlist.name,t.form.tags=i.playlist.tags,t.form.desc=i.playlist.description?i.playlist.description:"",t.imgUrl=i.playlist.coverImgUrl,t.$nextTick((function(){t.isInput=!1}));case 11:case"end":return e.stop()}}),e)})))()},update:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isInput){e.next=2;break}return e.abrupt("return",t.$message.warning("并没有修改内容"));case 2:return i={id:t.id,name:t.form.name,desc:t.form.desc},0!==t.form.tags.length&&(i.tags=t.form.tags.join(";")),e.next=6,Object(s["l"])(i);case 6:if(n=e.sent,200===n.code){e.next=11;break}return t.$message.error("更新失败"),t.$router.back(),e.abrupt("return");case 11:t.$message.success("更新成功"),t.$router.back();case 13:case"end":return e.stop()}}),e)})))()},upload:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){var n,r,a,s,o;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return n=t.file,r=t.imgSize,a=new FormData,a.append("imgFile",n),s={id:e.id,imgSize:r.width,data:a},i.next=6,Object(c["d"])(s);case 6:if(o=i.sent,200===o.code){i.next=9;break}return i.abrupt("return",e.$message.error("上传失败"));case 9:e.imgUrl=o.data.url,e.$message.success("上传成功");case 11:case"end":return i.stop()}}),i)})))()}}},l=u,f=(i("936e"),i("2877")),d=Object(f["a"])(l,n,r,!1,null,"7b300cee",null);e["default"]=d.exports},"4c53":function(t,e,i){"use strict";var n=i("23e7"),r=i("857a"),a=i("af03");n({target:"String",proto:!0,forced:a("sub")},{sub:function(){return r(this,"sub","","")}})},"4f97":function(t,e,i){"use strict";i("b84f")},"535b":function(t,e,i){},5561:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"lyricWrapRef",staticClass:"lyric-wrap",style:t.styleObj},t._l(t.lyricObj.lines,(function(e,n){return i("p",{key:n,staticClass:"text-hidden",class:{lyric_active:n===t.lyricObj.curren}},[t._v(" "+t._s(e.txt)+" ")])})),0)},r=[],a=i("1da1");i("96cf"),i("a9e3");function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,i){return e&&c(t.prototype,e),i&&c(t,i),t}i("ac1f"),i("1276"),i("d3b7"),i("159b"),i("466d"),i("498a"),i("fb6a");var u=function(){function t(e){if(s(this,t),"undefined"===typeof e)return this.lines=[{time:1,txt:"解析歌词失败"}],this.total=1,this.curren=0,this.errorLyric=!0,this;var i=e.split("\n"),n=[],r=/\[\d{2}:\d{2}.\d{2,3}\]/;try{i.forEach((function(e){if(""!==e){var i={},a=e.match(r);i.txt=""===e.split("]")[1].trim()?"":e.split("]")[1].trim(),i.time=a?t.formatLyricTime(a[0].slice(1,a[0].length-1)):0,""!==i.txt&&n.push(i)}}))}catch(a){return this.lines=[{time:1,txt:"解析歌词失败"}],this.total=1,this.curren=0,this.errorLyric=!0,this}this.lines=n,this.total=n.length,this.curren=0}return o(t,null,[{key:"formatLyricTime",value:function(t){var e,i,n,r=/.*:/,a=/:.*\./,s=/\./;try{e=parseInt(t.match(r)[0].slice(0,2)),i=parseInt(t.match(a)[0].slice(1,3)),n=t.slice(t.match(s).index+1,t.match(s).index+3)}catch(c){}return 0!==e&&(i+=60*e),Number(i+"."+n)}}]),t}(),l=i("99f9"),f={props:{musicId:{type:Number,required:!0},currenTime:{type:Number,required:!0},lyricAlign:{type:String,default:"center"},width:{type:Number,default:600}},data:function(){return{lyricObj:{lines:[],total:1,curren:0},styleObj:{"text-align":"center",width:"600px"}}},watch:{musicId:{immediate:!0,handler:function(t){t&&this.getLyric()}},currenTime:function(t){t&&this.handleCurrenTime(t)}},created:function(){this.handleTextAlign(this.lyricAlign),this.handleWidth(this.width)},methods:{getLyric:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["c"])(t.musicId);case 2:if(i=e.sent,200===i.code){e.next=5;break}return e.abrupt("return",t.$message.error("获取歌词失败"));case 5:i.lrc&&(t.lyricObj=new u(i.lrc.lyric)),t.$nextTick((function(){t.$refs.lyricWrapRef.scrollTop=0}));case 7:case"end":return e.stop()}}),e)})))()},handleCurrenTime:function(t){this.lyricObj.curren!==this.lyricObj.total-1&&t+.5>this.lyricObj.lines[this.lyricObj.curren+1].time?(this.lyricObj.curren++,this.lyricObj.curren!==this.lyricObj.total-1&&t+.5>this.lyricObj.lines[this.lyricObj.curren+1].time&&this.handleCurrenTime(t),this.lyricHanlder(this.lyricObj.curren)):0!=this.lyricObj.curren&&t-.5<this.lyricObj.lines[this.lyricObj.curren-1].time&&(this.lyricObj.curren--,0!=this.lyricObj.curren&&t-.5<this.lyricObj.lines[this.lyricObj.curren-1].time&&this.handleCurrenTime(t),this.lyricHanlder(this.lyricObj.curren))},lyricHanlder:function(t){t>4?this.scrollAnimation(t-4):this.$refs.lyricWrapRef.scrollTop=0},scrollAnimation:function(t){var e,i=this,n=function n(r){void 0===e&&(e=r);var a=r-e;i.$refs.lyricWrapRef.scrollTop=Math.min(.16*a+40*(t-1),40*t),a<250&&window.requestAnimationFrame(n)};window.requestAnimationFrame(n)},handleTextAlign:function(t){"center"!==t&&"left"!==t&&"right"!==t||(this.styleObj["text-align"]=t)},handleWidth:function(t){t<1200&&(this.styleObj.width=t+"px")}}},d=f,m=(i("9d23"),i("2877")),p=Object(m["a"])(d,n,r,!1,null,"0fb9117c",null);e["a"]=p.exports},"5a98":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"personal-fm"},[i("div",{staticClass:"playview-wrap mtop-20"},[i("div",{staticClass:"playview-left"},[i("div",{staticClass:"img-wrap"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgInfo.imgUrl,expression:"imgInfo.imgUrl"}],staticClass:"img img-h",attrs:{alt:""}}),i("div",{staticClass:"play-btn  pointer",class:{"play-btn_active":t.isPlay},on:{click:t.pause}},[i("i",{directives:[{name:"show",rawName:"v-show",value:!t.isPlay,expression:"!isPlay"}],staticClass:"iconfont icon-bofang"}),i("i",{directives:[{name:"show",rawName:"v-show",value:t.isPlay,expression:"isPlay"}],staticClass:"iconfont icon-zanting"})])]),i("div",{staticClass:"btn-wrap mtop-20"},[i("button",{staticClass:"pfm-btn",on:{click:t.likeMusic}},[i("i",{directives:[{name:"show",rawName:"v-show",value:!t.isLiked,expression:"!isLiked"}],staticClass:"iconfont icon-aixin"}),i("i",{directives:[{name:"show",rawName:"v-show",value:t.isLiked,expression:"isLiked"}],staticClass:"iconfont icon-aixin1",staticStyle:{color:"red"}})]),i("el-popconfirm",{attrs:{title:"确定将当前音乐移到垃圾桶吗？"},on:{confirm:t.remove}},[i("button",{staticClass:"pfm-btn",attrs:{slot:"reference"},slot:"reference"},[i("i",{staticClass:"el-icon-delete"})])]),i("button",{staticClass:"pfm-btn",on:{click:t.nextMusic}},[i("i",{staticClass:"iconfont icon-xiayishou"})]),t._m(0)],1)]),i("div",{staticClass:"playview-right"},[i("div",{staticClass:"title"},[i("span",{staticClass:"font-24"},[t._v(t._s(t.imgInfo.name))])]),i("div",{staticClass:"info"},[i("div",{staticClass:"font-12"},[t._v(" 专辑："),i("span",{staticClass:"btn-a pointer",on:{click:function(e){return t.toAlbumDetail(t.imgInfo.album.id)}}},[t._v(t._s(t.imgInfo.album.name))])]),i("div",{staticClass:"font-12"},[t._v(" 歌手："),i("span",{staticClass:"btn-a pointer",on:{click:function(e){return t.toArtistDetail(t.imgInfo.author.id)}}},[t._v(t._s(t.imgInfo.author.name))])])]),i("LyricWrap",{attrs:{currenTime:t.currenMusicInfo.currenTime,musicId:t.currenMusicId,lyricAlign:"left",width:400}})],1)]),i("div",{staticClass:"comment-view mtop-60"},[i("Comment",{attrs:{active:!0,type:0,id:t.currenMusicId,scrollDom:".main-right",scrollOffset:10}})],1)])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"pfm-btn"},[i("i",{staticClass:"el-icon-more"})])}],a=i("1da1"),s=i("5530"),c=(i("96cf"),i("b0c0"),i("5880")),o=i("5561"),u=i("67f1"),l=i("99f9"),f={components:{LyricWrap:o["a"],Comment:u["a"]},data:function(){return{imgInfo:{imgUrl:"",name:"未知歌名",author:{name:"未知歌手名",id:0},album:{name:"未知专辑名",id:0}},myList:[]}},computed:Object(s["a"])(Object(s["a"])({},Object(c["mapState"])(["isPlay","currenMusicId","currenIndex","musicList","currenMusicInfo","historyList","likeIdList","isLogin","playType"])),{},{isLiked:{get:function(){return-1!==this.likeIdList.indexOf(this.currenMusicId)},set:function(t){this.isLiked?this.$store.commit("setLikeIdList",{type:"remove",data:t}):this.$store.commit("setLikeIdList",{type:"unshift",data:t})}}}),watch:{currenMusicId:{immediate:!0,handler:function(t){0!==t&&"personalFm"===this.playType&&this.getImgInfo()}}},created:function(){this.getPersonalFm()},methods:{getImgInfo:function(){var t;null!==(t=this.musicList[this.currenIndex])&&void 0!==t&&t.al.picUrl?this.imgInfo.imgUrl=this.musicList[this.currenIndex].al.picUrl:this.imgInfo.imgUrl="https://cdn.jsdelivr.net/gh/crazybox521/blogImg/music.jpg",this.imgInfo.author.name=this.musicList[this.currenIndex].ar[0].name,this.imgInfo.author.id=this.musicList[this.currenIndex].ar[0].id,this.imgInfo.album.name=this.musicList[this.currenIndex].al.name,this.imgInfo.album.id=this.musicList[this.currenIndex].al.id,this.imgInfo.name=this.musicList[this.currenIndex].name},likeMusic:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isLogin){e.next=2;break}return e.abrupt("return",t.$message.warning("需要登录"));case 2:if(0!==t.currenMusicId&&"undefined"!==typeof t.currenMusicId){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,Object(l["i"])(t.currenMusicId,!t.isLiked);case 6:if(i=e.sent,200===i.code){e.next=9;break}return e.abrupt("return");case 9:t.$message.success("".concat(t.isLiked?"取消喜欢":"喜欢","成功")),t.isLiked=t.currenMusicId;case 11:case"end":return e.stop()}}),e)})))()},pause:function(){this.$store.commit("setPlayState",!this.isPlay)},toAlbumDetail:function(t){0!==t&&"number"===typeof t&&this.$router.push("/albumdetail/"+t)},toArtistDetail:function(t){0!==t&&"number"===typeof t&&this.$router.push("/artistdetail/"+t)},getPersonalFm:function(){"personalFm"!==this.playType&&this.$store.dispatch("personalFm",{type:"get"})},nextMusic:function(){this.$store.dispatch("personalFm",{type:"next"})},remove:function(){this.$store.dispatch("personalFm",{type:"remove",id:this.currenMusicId})}}},d=f,m=(i("f95d"),i("2877")),p=Object(m["a"])(d,n,r,!1,null,"c8661bbe",null);e["default"]=p.exports},"6b84":function(t,e,i){"use strict";i("535b")},7283:function(t,e,i){},"73aa":function(t,e,i){"use strict";i("784f")},"784f":function(t,e,i){},"7c01":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"user-edit mtop-20"},[i("div",{staticClass:"font-20 font-bold"},[t._v("编辑个人信息")]),i("div",{staticClass:"edit-wrap mtop-20"},[i("el-form",{staticClass:"edit-form",attrs:{model:t.form,"label-width":"80px",size:"mini"}},[i("el-form-item",{attrs:{label:"昵称："}},[i("el-input",{model:{value:t.form.nickname,callback:function(e){t.$set(t.form,"nickname",e)},expression:"form.nickname"}})],1),i("el-form-item",{attrs:{label:"介绍："}},[i("el-input",{attrs:{type:"textarea"},model:{value:t.form.signature,callback:function(e){t.$set(t.form,"signature",e)},expression:"form.signature"}})],1),i("el-form-item",{attrs:{label:"性别："}},[i("el-radio-group",{model:{value:t.form.gender,callback:function(e){t.$set(t.form,"gender",e)},expression:"form.gender"}},[i("el-radio-button",{attrs:{label:0}},[t._v("保密")]),i("el-radio-button",{attrs:{label:1}},[t._v("男")]),i("el-radio-button",{attrs:{label:2}},[t._v("女")])],1)],1),i("el-form-item",{attrs:{label:"生日："}},[i("el-date-picker",{attrs:{type:"date",placeholder:"选择日期",editable:!1},model:{value:t.form.birthday,callback:function(e){t.$set(t.form,"birthday",e)},expression:"form.birthday"}})],1)],1),i("div",{staticClass:"edit-img-container"},[i("ImgCut",{attrs:{btnText:"修改头像",imgUrl:t.imgUrl},on:{upload:t.upload}})],1)],1),i("div",{staticClass:"submit-wrap"},[i("button",{staticClass:"btn btn-red",on:{click:t.update}},[t._v("保存")]),i("button",{staticClass:"btn btn-white",on:{click:function(e){return t.$router.back()}}},[t._v("取消")])])])},r=[],a=i("1da1"),s=i("5530"),c=(i("96cf"),i("b64b"),i("d577")),o=i("4f49"),u=i("3e4c"),l=i("5880"),f={components:{ImgCut:u["a"]},data:function(){return{form:{nickname:"",signature:"",gender:0,birthday:{}}}},computed:Object(s["a"])(Object(s["a"])({},Object(l["mapState"])(["profile"])),{},{imgUrl:function(){return this.profile.avatarUrl?this.profile.avatarUrl:""}}),watch:{"form.signature":function(t,e){if(t.length>100)return this.form.signature=e,this.$message.warning("介绍过长")}},created:function(){this.getInfo()},methods:{getInfo:function(){var t=this;0!==Object.keys(this.profile).length?(this.form.nickname=this.profile.nickname,this.form.signature=this.profile.signature,this.form.gender=this.profile.gender,this.form.birthday=new Date(this.profile.birthday)):setTimeout((function(){t.getInfo()}),200)},upload:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){var n,r,a,s,o;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return n=t.file,r=t.imgSize,a=new FormData,a.append("imgFile",n),s={imgSize:r.width,data:a},i.next=6,Object(c["c"])(s);case 6:if(o=i.sent,200===o.code){i.next=9;break}return i.abrupt("return",e.$message.error("上传失败"));case 9:e.$message.success("上传成功"),e.$store.dispatch("getAcount");case 11:case"end":return i.stop()}}),i)})))()},update:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i={nickname:t.form.nickname,signature:t.form.signature,gender:t.form.gender,birthday:t.form.birthday.getTime()},e.next=3,Object(o["k"])(i);case 3:if(n=e.sent,200===n.code){e.next=6;break}return e.abrupt("return",t.$message.error("更新失败"));case 6:t.$message.success("更新成功"),t.$store.dispatch("getAcount");case 8:case"end":return e.stop()}}),e)})))()}}},d=f,m=(i("4f97"),i("2877")),p=Object(m["a"])(d,n,r,!1,null,"a54a6138",null);e["default"]=p.exports},"808a":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recommend-song mtop-20"},[i("div",{staticClass:"info"},[i("div",{staticClass:"img-wrap"},[i("div",{staticClass:"day font-bold"},[t._v(t._s(t.today))])]),t._m(0)]),i("div",{staticClass:"btn-wrap"},[i("button",{staticClass:"btn btn-red",on:{click:t.playAll}},[i("i",{staticClass:"iconfont icon-bofang"}),t._v(" 播放全部 ")]),i("button",{staticClass:"btn btn-white mleft-12",on:{click:t.openAddDialog}},[i("i",{staticClass:"el-icon-folder-add"}),t._v(" 收藏全部 ")])]),i("div",{staticClass:"div-line mtop-20"}),t.showList?i("MusicList",{ref:"listRef",attrs:{list:t.list}}):i("el-skeleton",{staticClass:"mtop-10",attrs:{rows:8,animated:""}}),i("AddMusicDialog",{ref:"addDialog",attrs:{musicIdList:t.idList}})],1)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"text mleft-30 mtop-20"},[i("div",{staticClass:"font-24 font-bold"},[t._v("每日歌曲推荐")]),i("div",{staticClass:"desc"},[t._v("根据你的音乐口味生成，每天6:00更新")])])}],a=i("1da1"),s=(i("96cf"),i("d81d"),i("dca8"),i("50e4")),c=i("f80c"),o=i("99f9"),u={components:{MusicList:s["a"],AddMusicDialog:c["a"]},data:function(){return{list:[],today:"1"}},computed:{showList:function(){return 0!==this.list.length},idList:function(){return this.list.map((function(t){return t.id}))}},created:function(){this.getToday(),this.getList()},methods:{getList:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["g"])();case 2:if(i=e.sent,200===i.code){e.next=5;break}return e.abrupt("return");case 5:t.list=Object.freeze(i.data.dailySongs);case 6:case"end":return e.stop()}}),e)})))()},playAll:function(){this.$refs.listRef.playMusicAll()},getToday:function(){var t=(new Date).getDate();t=t<10?"0"+t:""+t,this.today=t},openAddDialog:function(){if(0===this.idList.length)return this.$message.error("歌曲列表为空");this.$refs["addDialog"].openDialog()}}},l=u,f=(i("b52d"),i("2877")),d=Object(f["a"])(l,n,r,!1,null,"6645bae4",null);e["default"]=d.exports},"857a":function(t,e,i){var n=i("e330"),r=i("1d80"),a=i("577e"),s=/"/g,c=n("".replace);t.exports=function(t,e,i,n){var o=a(r(t)),u="<"+e;return""!==i&&(u+=" "+i+'="'+c(a(n),s,"&quot;")+'"'),u+">"+o+"</"+e+">"}},"88ca":function(t,e,i){"use strict";i("3643")},"936e":function(t,e,i){"use strict";i("be5a")},9797:function(t,e,i){},"9d23":function(t,e,i){"use strict";i("1f51")},a15b:function(t,e,i){"use strict";var n=i("23e7"),r=i("e330"),a=i("44ad"),s=i("fc6a"),c=i("a640"),o=r([].join),u=a!=Object,l=c("join",",");n({target:"Array",proto:!0,forced:u||!l},{join:function(t){return o(s(this),void 0===t?",":t)}})},a226:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sub-album"},[i("div",{staticClass:"subalbum-head"},[i("div",[i("span",{staticClass:"font-bold"},[t._v("收藏的专辑")]),i("span",{staticClass:"font-12",staticStyle:{color:"#cfcfcf"}},[t._v("("+t._s(t.count)+")")])]),i("div",{staticClass:"detail-search"},[i("el-input",{attrs:{placeholder:"搜索收藏专辑",clearable:"","suffix-icon":"el-icon-search"},model:{value:t.key,callback:function(e){t.key=e},expression:"key"}})],1)]),i("div",{staticClass:"mtop-20"},[i("InfoList",{attrs:{list:t.subAlbumList},on:{clickitem:t.toAlbumDetail},scopedSlots:t._u([{key:"img",fn:function(t){var e=t.item;return[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.picUrl+"?param=100y100",expression:"item.picUrl + '?param=100y100'"}],staticClass:"sub-img mleft-10"})]}},{key:"title",fn:function(e){var i=e.item;return[t._v(" "+t._s(i.name)+" ")]}},{key:"item1",fn:function(e){var n=e.item;return t._l(n.artists,(function(e,n){return i("span",{key:n},[t._v(t._s(e.name)+" ")])}))}},{key:"item2",fn:function(e){var i=e.item;return[t._v(" "+t._s(i.size)+" 首 ")]}}])})],1)])},r=[],a=i("1da1"),s=(i("96cf"),i("4de4"),i("d3b7"),i("ac1f"),i("466d"),i("b0c0"),i("dca8"),i("0411")),c=i("e4f8"),o={components:{InfoList:s["a"]},data:function(){return{list:[],offset:0,count:0,key:""}},computed:{subAlbumList:function(){var t=this;return this.list.filter((function(e){return e.name.match(t.key)}))}},created:function(){this.getSubAlbum()},methods:{getSubAlbum:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["c"])();case 2:if(i=e.sent,200===i.code){e.next=5;break}return e.abrupt("return");case 5:t.list=Object.freeze(i.data),t.count=i.count;case 7:case"end":return e.stop()}}),e)})))()},toAlbumDetail:function(t){this.$router.push("/albumdetail/"+t.id)}}},u=o,l=(i("88ca"),i("2877")),f=Object(l["a"])(u,n,r,!1,null,"1c38da51",null);e["default"]=f.exports},af03:function(t,e,i){var n=i("d039");t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b52d:function(t,e,i){"use strict";i("7283")},b84f:function(t,e,i){},be5a:function(t,e,i){},c482:function(t,e,i){"use strict";i("32c0")},c4a6:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"subscribe-view"},[i("div",{staticClass:"router-list"},[i("TabMenu",{attrs:{menuList:t.subRouteList,mode:"router"}})],1),i("div",{staticClass:"sub-main mtop-60"},[i("transition",{attrs:{name:"el-fade-in"}},[i("router-view")],1)],1)])},r=[],a=i("bdd0"),s={components:{TabMenu:a["a"]},data:function(){return{subRouteList:[{path:"/sub-album",name:"专辑"},{path:"/sub-artists",name:"歌手"},{path:"/sub-mv",name:"视频"}]}}},c=s,o=i("2877"),u=Object(o["a"])(c,n,r,!1,null,null,null);e["default"]=u.exports},d81d:function(t,e,i){"use strict";var n=i("23e7"),r=i("b727").map,a=i("1dde"),s=a("map");n({target:"Array",proto:!0,forced:!s},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},e01a:function(t,e,i){"use strict";var n=i("23e7"),r=i("83ab"),a=i("da84"),s=i("e330"),c=i("1a2d"),o=i("1626"),u=i("3a9b"),l=i("577e"),f=i("9bf2").f,d=i("e893"),m=a.Symbol,p=m&&m.prototype;if(r&&o(m)&&(!("description"in p)||void 0!==m().description)){var b={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),e=u(p,this)?new m(t):void 0===t?m():m(t);return""===t&&(b[e]=!0),e};d(v,m),v.prototype=p,p.constructor=v;var h="Symbol(test)"==String(m("test")),g=s(p.toString),y=s(p.valueOf),C=/^Symbol\((.*)\)[^)]+$/,x=s("".replace),w=s("".slice);f(p,"description",{configurable:!0,get:function(){var t=y(this),e=g(t);if(c(b,t))return"";var i=h?w(e,7,-1):x(e,C,"$1");return""===i?void 0:i}}),n({global:!0,forced:!0},{Symbol:v})}},e4f8:function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return a})),i.d(e,"d",(function(){return s})),i.d(e,"e",(function(){return c})),i.d(e,"c",(function(){return o}));var n=i("d577"),r=function(t){return Object(n["a"])("/album",{id:t})},a=function(t){return Object(n["a"])("/album/detail/dynamic",{id:t,timestamp:Date.now()})},s=function(t){var e=t.limit,i=t.offset,r=t.area,a=t.type,s=t.year,c=t.month;return Object(n["a"])("/top/album",{limit:e,offset:i,area:r,type:a,year:s,month:c})},c=function(t,e){return Object(n["a"])("/album/sub",{id:t,t:e,timestamp:Date.now()})},o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25;return Object(n["a"])("/album/sublist",{offset:t,limit:e,timestamp:Date.now()})}},e6af:function(t,e,i){"use strict";i("9797")},f63c:function(t,e,i){},f80c:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-dialog",{attrs:{title:"收藏到指定歌单",visible:t.dialogVisible,width:t.dialogWidth},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("InfoList",{attrs:{list:t.createPlaylist},on:{clickitem:t.add},scopedSlots:t._u([{key:"img",fn:function(t){var e=t.item;return[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.coverImgUrl+"?param=100y100",expression:"item.coverImgUrl + '?param=100y100'"}],staticClass:"sub-img mleft-10"})]}}])})],1)],1)},r=[],a=i("1da1"),s=i("5530"),c=(i("96cf"),i("a15b"),i("5880")),o=i("0bfe"),u=i("0411"),l={components:{InfoList:u["a"]},data:function(){return{dialogVisible:!1}},props:{musicIdList:{type:Array,require:!0}},computed:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(c["mapState"])(["isPhone"])),Object(c["mapGetters"])(["createPlaylist"])),{},{dialogWidth:function(){return this.isPhone?"80%":"400px"}}),methods:{openDialog:function(){this.dialogVisible=!0},add:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){var n,r,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(n=t.id,"number"===typeof n){i.next=3;break}return i.abrupt("return",e.$message.warning("请选择一个歌单"));case 3:return r={op:"add",pid:n,tracks:e.musicIdList.join(",")},i.next=6,Object(o["a"])(r);case 6:if(a=i.sent,200===a.status){i.next=9;break}return i.abrupt("return",e.$message.error("收藏失败"));case 9:e.$store.dispatch("getLikeList"),e.dialogVisible=!1,e.$message.success("收藏成功！");case 12:case"end":return i.stop()}}),i)})))()}}},f=l,d=i("2877"),m=Object(d["a"])(f,n,r,!1,null,null,null);e["a"]=m.exports},f873:function(t,e,i){"use strict";i.d(e,"h",(function(){return r})),i.d(e,"k",(function(){return a})),i.d(e,"b",(function(){return s})),i.d(e,"i",(function(){return c})),i.d(e,"a",(function(){return o})),i.d(e,"d",(function(){return u})),i.d(e,"c",(function(){return l})),i.d(e,"g",(function(){return f})),i.d(e,"j",(function(){return d})),i.d(e,"e",(function(){return m})),i.d(e,"m",(function(){return p})),i.d(e,"l",(function(){return b})),i.d(e,"o",(function(){return v})),i.d(e,"n",(function(){return h})),i.d(e,"f",(function(){return g}));var n=i("d577"),r=function(){return Object(n["a"])("/video/group/list")},a=function(){return Object(n["a"])("/video/category/list")},s=function(t){return Object(n["a"])("/video/timeline/all",{offset:t})},c=function(t,e){return Object(n["a"])("/video/group",{id:t,offset:e})},o=function(t){var e=t.area,i=t.limit,r=t.offset,a=t.order,s=t.type;return Object(n["a"])("/mv/all",{area:e,limit:i,offset:r,order:a,type:s})},u=function(t,e){return Object(n["a"])("/mv/first",{area:t,limit:e})},l=function(t,e){return Object(n["a"])("/mv/exclusive/rcmd",{limit:t,offset:e})},f=function(t){var e=t.area,i=t.limit,r=t.offset,a=void 0===r?0:r;return Object(n["a"])("/top/mv",{area:e,limit:i,offset:a})},d=function(t,e){return"v"===t?Object(n["a"])("/video/detail",{id:e,timestamp:Date.now()}):"mv"===t?Object(n["a"])("/mv/detail",{mvid:e,timestamp:Date.now()}):{code:404}},m=function(t,e){return"v"===t?Object(n["a"])("/related/allvideo",{id:e}):"mv"===t?Object(n["a"])("/personalized/mv"):{code:404}},p=function(t,e){return"v"===t?Object(n["a"])("/video/url",{id:e}):"mv"===t?Object(n["a"])("/mv/url",{id:e}):{code:404}},b=function(t,e){return"v"===t?Object(n["a"])("/video/detail/info",{vid:e,timestamp:Date.now()}):"mv"===t?Object(n["a"])("/mv/detail/info",{mvid:e,timestamp:Date.now()}):{code:404}},v=function(t){var e=t.type,i=t.t,r=t.id;return"v"===e?Object(n["a"])("/video/sub",{t:i,id:r,timestamp:Date.now()}):"mv"===e?Object(n["a"])("/mv/sub",{mvid:r,t:i,timestamp:Date.now()}):{code:404}},h=function(t){var e=t.type,i=t.t,r=void 0===i?1:i,a=t.id;return Object(n["a"])("/resource/like",{type:e,t:r,id:a,timestamp:Date.now()})},g=function(){return Object(n["a"])("/mv/sublist",{timestamp:Date.now()})}},f95d:function(t,e,i){"use strict";i("f63c")}}]);