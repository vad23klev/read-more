!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["vue-read-more"]=t():e["vue-read-more"]=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n=function(e,t,r,n,i,o,s,a){var u,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=r,d._compiled=!0),n&&(d.functional=!0),o&&(d._scopeId="data-v-"+o),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},d._ssrRegister=u):i&&(u=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(d.functional){d._injectStyles=u;var l=d.render;d.render=function(e,t){return u.call(t),l(e,t)}}else{var f=d.beforeCreate;d.beforeCreate=f?[].concat(f,u):[u]}return{exports:e,options:d}}({props:{moreStr:{type:String,default:"read more"},lessStr:{type:String,default:""},text:{type:String,required:!0},link:{type:String,default:"#"},maxChars:{type:Number,default:100}},data:function(){return{isReadMore:!1}},computed:{formattedString:function(){var e=this.text,t=-1,r=-1;if(console.log(!this.isReadMore&&this.text.length>this.maxChars),!this.isReadMore&&this.text.length>this.maxChars){for(t=e.indexOf("<p>")>-1?e.indexOf("<p>"):this.text.length,e=(e=this.text).substring(t);e.indexOf("<p>")>-1&&e.indexOf("<p>")<=this.maxChars;)t=e.indexOf("<p>");for(r=e.indexOf("</p>")>-1?e.indexOf("</p>"):this.text.length,e=(e=this.text).substring(r);e.indexOf("</p>")>-1&&e.indexOf("</p>")<=this.maxChars;)r=e.indexOf("</p>");if(e=this.text,t>this.maxChars&&r>this.maxChars||t<r&&r<this.maxChars)return e.substring(0,this.maxChars)+"...";if(t>r&&t<this.maxChars)return e.substring(0,this.maxChars)+"...</p>"}return e}},methods:{triggerReadMore:function(e,t){"#"==this.link&&e.preventDefault(),null===this.lessStr&&""===this.lessStr||(this.isReadMore=t)}}},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",{domProps:{innerHTML:e._s(e.formattedString)}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.text.length>e.maxChars,expression:"text.length > maxChars"}]},[r("a",{directives:[{name:"show",rawName:"v-show",value:!e.isReadMore,expression:"!isReadMore"}],attrs:{href:e.link,id:"readmore"},on:{click:function(t){return e.triggerReadMore(t,!0)}}},[e._v(e._s(e.moreStr))]),e._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:e.isReadMore,expression:"isReadMore"}],attrs:{href:e.link,id:"readmore"},on:{click:function(t){return e.triggerReadMore(t,!1)}}},[e._v(e._s(e.lessStr))])])])},[],!1,null,null,null).exports,i={twoWay:!0,bind:function(e,t,r){var n=t.value;if(t.value.length>t.arg){r.elm.innerHTML=t.value.substring(0,t.arg);var i=document.createElement("a");i.href="#",i.text="read more";var o=document.createElement("a");o.href="#",o.text="read less",r.elm.append(" ",i),i.addEventListener("click",function(){r.elm.innerHTML=n,r.elm.append(" ",o)}),o.addEventListener("click",function(){r.elm.innerHTML=t.value.substring(0,t.arg),r.elm.append(" ",i)})}else r.elm.innerHTML=t.value},update:function(e){}};t.default={install:function(e,t){e.component("readMore",n),e.directive("readMore",i)}}}])});
//# sourceMappingURL=index.js.map