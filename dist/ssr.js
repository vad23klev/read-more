!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["vue-read-more"]=t():e["vue-read-more"]=t()}(global,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n=function(e,t,r,n,o,i,s,a){var l,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=r,u._compiled=!0),n&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=l):o&&(l=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(u.functional){u._injectStyles=l;var d=u.render;u.render=function(e,t){return l.call(t),d(e,t)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,l):[l]}return{exports:e,options:u}}({props:{moreStr:{type:String,default:"read more"},lessStr:{type:String,default:""},text:{type:String,required:!0},link:{type:String,default:"#"},maxChars:{type:Number,default:100}},data:function(){return{isReadMore:!1}},computed:{formattedString:function(){var e=this.text;return!this.isReadMore&&this.text.length>this.maxChars&&(e=e.substring(0,this.maxChars)+"..."),e}},methods:{triggerReadMore:function(e,t){"#"==this.link&&e.preventDefault(),null===this.lessStr&&""===this.lessStr||(this.isReadMore=t)}}},function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._ssrNode("<p>"+e._s(e.formattedString)+"</p> <span"+e._ssrStyle(null,null,{display:e.text.length>e.maxChars?"":"none"})+"><a"+e._ssrAttr("href",e.link)+' id="readmore"'+e._ssrStyle(null,null,{display:e.isReadMore?"none":""})+">"+e._ssrEscape(e._s(e.moreStr))+"</a> <a"+e._ssrAttr("href",e.link)+' id="readmore"'+e._ssrStyle(null,null,{display:e.isReadMore?"":"none"})+">"+e._ssrEscape(e._s(e.lessStr))+"</a></span>")])},[],!1,null,null,"18606026").exports,o={twoWay:!0,bind:function(e,t,r){var n=t.value;if(t.value.length>t.arg){r.elm.innerHTML=t.value.substring(0,t.arg);var o=document.createElement("a");o.href="#",o.text="read more";var i=document.createElement("a");i.href="#",i.text="read less",r.elm.append(" ",o),o.addEventListener("click",function(){r.elm.innerHTML=n,r.elm.append(" ",i)}),i.addEventListener("click",function(){r.elm.innerHTML=t.value.substring(0,t.arg),r.elm.append(" ",o)})}else r.elm.innerHTML=t.value},update:function(e){}};t.default={install:function(e,t){e.component("readMore",n),e.directive("readMore",o)}}}])});
//# sourceMappingURL=ssr.js.map