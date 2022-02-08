(()=>{"use strict";var e={436:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}c((r=r.apply(e,t||[])).next())}))},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(n(298)),o=function(){class e extends HTMLElement{constructor(){super(),this.render=this.render.bind(this)}connectedCallback(){const e=window.location.hostname,t=this.render;sessionStorage.getItem("cache_list")?(console.log("cache hit"),this.render(JSON.parse(sessionStorage.getItem("cache_list")))):function(){r(this,void 0,void 0,(function*(){let n,r;try{n=yield fetch(`http://${e}:3333/article`),r=yield n.json()}catch(e){return alert(e),void console.error(e)}sessionStorage.setItem("cache_list",JSON.stringify(r)),t(r)}))}()}render(e){this.innerHTML=`\n        <style>\n          .board {\n            padding: 3rem;\n            margin-top: 1rem;\n            display: grid;\n            grid-template-rows: auto;\n            grid-gap: 1.2rem;\n          }\n\n          .board__bold {\n            font-weight: bold;\n          }\n        </style>\n        <div class="board">  \n          <div class="single__article">\n            <div class=board__bold>ID</div>\n            <div class=board__bold>Title</div>\n            <div class="board__bold single__right">Author</div>\n            <div class="board__bold single__right">Date</div>\n          </div>\n          ${e.result.map((({articleid:e,username:t,articlename:n,created_at:r})=>`<${i.default} articleid="${e}" username="${t}" articlename="${n}" created-at="${r}"></${i.default}>`)).join("")}\n        </div>\n      `}}const t=`reactdom-${e.name}${Math.floor(1e8*Math.random())}`;return window.customElements.define(t,e),t}();t.default=o},117:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=function(){class e extends HTMLElement{constructor(){super(),this.render=this.render.bind(this)}connectedCallback(){this.render()}render(){this.innerHTML='\n        <style>\n          .headbar {\n            height: 6rem;\n            background-color: darkslateblue;\n            display: flex;\n            align-items: center;\n            padding-left : 2rem;\n            font-size: 2rem;\n            font-weight: bold;\n            color: white;\n          }\n        </style>\n        <div class="headbar">\n          Simple BBS Forum (Fake React - zum coding test) \n        </div>\n      '}}const t=`reactdom-${e.name}${Math.floor(1e8*Math.random())}`;return window.customElements.define(t,e),t}();t.default=n},298:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=function(){class e extends HTMLElement{constructor(){super(),this.render=this.render.bind(this)}connectedCallback(){this.render}attributeChangedCallback(e,t,n){this.render()}static get observedAttributes(){return["articleid","username","articlename","created-at"]}render(){this.innerHTML=`\n        <style>\n          .single__article {\n            display: grid;\n            grid-template-columns: 1fr 8fr 2fr 2fr;\n            font-size: 2.5rem;\n            cursor: pointer;\n          }\n          .single__right {\n            justify-self: right;\n          }\n        </style>\n        <div class="single__article">\n          <div>${this.getAttribute("articleid")}</div>\n          <div>${this.getAttribute("articlename")}</div>\n          <div class=single__right>${this.getAttribute("username")}</div>\n          <div class=single__right>${new Date(this.getAttribute("created-at")).toLocaleDateString()}</div>\n        </div>\n      `}}const t=`reactdom-${e.name}${Math.floor(1e8*Math.random())}`;return window.customElements.define(t,e),t}();t.default=n},160:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(21)),i=r(n(117)),o=r(n(436));t.default=()=>a.default.createElement(a.default.Fragment,null,a.default.createElement(i.default,null),a.default.createElement(o.default,null))},976:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(21)),i=r(n(160));n(548),a.default.render((0,i.default)(),document.getElementById("app"))},21:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});const n={createElement:(e,t,...n)=>{if(!e)return n;const r=document.createElement(e);return r.innerHTML+=n.join(""),r},render:(e,t)=>{Array.isArray(e)?e.forEach((e=>{t.appendChild(e)})):t.appendChild(e)}};t.default=n},424:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),a=n.n(r),i=n(645),o=n.n(i)()(a());o.push([e.id,"* {\n  font-size: 62.5%;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Noto Sans', sans-serif;\n}\n",""]);const s=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&o[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},548:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(379),a=n.n(r),i=n(795),o=n.n(i),s=n(569),c=n.n(s),l=n(565),d=n.n(l),u=n(216),f=n.n(u),p=n(589),h=n.n(p),m=n(424),v={};v.styleTagTransform=h(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=f(),a()(m.Z,v);const g=m.Z&&m.Z.locals?m.Z.locals:void 0},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},o=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var f=n(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var h=a(p,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:h,references:1})}o.push(u)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=n(i[o]);t[s].references--}for(var c=r(e,a),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(976)})();