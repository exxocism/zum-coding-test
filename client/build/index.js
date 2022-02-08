(()=>{"use strict";var e={825:function(e,t){var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function s(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const r=function(){class e extends HTMLElement{constructor(){super(),this.render=this.render.bind(this)}connectedCallback(){const e=this.render,t=new URLSearchParams(window.location.search).get("articleid"),r=window.location.hostname;function i(){return n(this,void 0,void 0,(function*(){let n,i;try{n=yield fetch(`http://${r}:3333/article/${t}`),i=yield n.json()}catch(e){return alert(e),void console.error(e)}sessionStorage.getItem("cache_list")&&JSON.parse(sessionStorage.getItem("cache_list")).result.push(i),e(i)}))}if(!sessionStorage.getItem("cache_list"))return i();const o=JSON.parse(sessionStorage.getItem("cache_list")),a=o.result.findIndex((({articleid:e})=>e===Number(t)));if(-1===a)return i();console.log("cache hit"),this.render(o.result[a])}render({articleid:e,username:t,articlename:n,articletext:r,created_at:i}){this.innerHTML=`\n        <style>\n          .article__detail {\n            padding: 3rem;\n          }\n\n          .article__detail__title {\n            font-size: 3rem;\n            font-weight: bold;\n            margin-bottom: 1.5rem;\n          }\n          \n          .article__metadata {\n            display: grid;\n            grid-template-columns: 1fr 2fr 2fr 2fr;\n            margin-bottom: 1.5rem;\n          }\n\n          .article__metadata > div {\n            font-size: 2rem;\n            color: darkslategray;\n          }\n\n          .article__detail__text {\n            white-space: pre-wrap;\n            font-size: 1.8rem;\n          }\n        </style>\n        <div class="article__detail">\n          \x3c!-- 여기서부터 조건부 렌더링 --\x3e\n          <h1 class="article__detail__title">${n}</h1>\n          <div class="article__metadata">\n            <div>글번호: ${e}</div>\n            <div>작성자: ${t}</div>\n            <div>작성일: ${new Date(i).toLocaleDateString()}</div>\n          </div>\n          <div class="article__detail__text">${r}</div>\n        </div>\n      `}}const t=`reactdom-${e.name}${Math.floor(1e8*Math.random())}`;return window.customElements.define(t,e),t}();t.default=r},436:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function s(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((r=r.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=i(n(298)),a=n(976),s=function(){class e extends HTMLElement{constructor(){super(),this.render=this.render.bind(this)}connectedCallback(){const e=window.location.hostname,t=this.render;if(!sessionStorage.getItem("cache_list"))return function(){return r(this,void 0,void 0,(function*(){let n,r;try{n=yield fetch(`http://${e}:3333/article`),r=yield n.json()}catch(e){return alert(e),void console.error(e)}sessionStorage.setItem("cache_list",JSON.stringify(r)),t(r)}))}();console.log("cache hit"),this.render(JSON.parse(sessionStorage.getItem("cache_list"))),document.querySelector(".board").addEventListener("click",(e=>{if("single__link"===e.target.className){const t=e.target.parentElement.previousElementSibling.textContent,n=`${window.location.origin}${window.location.pathname}?articleid=${t}`;return window.history.pushState({},"",n),void(0,a.reRender)()}}))}render(e){this.innerHTML=`\n        <style>\n          .board {\n            padding: 0 3rem;\n            margin-top: 3rem;\n            display: grid;\n            grid-template-rows: auto;\n            grid-gap: 1.2rem;\n          }\n\n          .board__bold {\n            font-weight: bold;\n          }\n        </style>\n        <div class="board">  \n          <div class="single__article">\n            <div class=board__bold>글번호</div>\n            <div class=board__bold>제목</div>\n            <div class="board__bold single__right">작성자</div>\n            <div class="board__bold single__right">작성일</div>\n          </div>\n          ${e.result.map((({articleid:e,username:t,articlename:n,created_at:r})=>`<${o.default} articleid="${e}" username="${t}" articlename="${n}" created-at="${r}"></${o.default}>`)).join("")}\n        </div>\n      `}}const t=`reactdom-${e.name}${Math.floor(1e8*Math.random())}`;return window.customElements.define(t,e),t}();t.default=s},478:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=function(){class e extends HTMLElement{constructor(){super(),this.render=this.render.bind(this)}connectedCallback(){this.render()}render(){this.innerHTML='\n        <style>\n          .control {\n            margin-top: 3rem;\n            padding: 0 3rem;\n            display: flex;\n            justify-content: flex-start;\n            align-items: center;\n          }\n\n          .control__searchbar {\n            width: 50rem;\n            height: 3.5rem;\n            border-radius: 0.5rem;\n            padding-left: 1rem;\n            font-size: 1.5rem;\n            border: 1px solid #777;\n          }\n\n          .control__searchbar:focus {\n            outline: none;\n            border: 1px solid #3C7CFF;\n          }\n\n          .control__searchbutton {\n            margin-left: 1rem;\n            width: 5rem;\n            height: 3.5rem;\n            border-radius: 0.5rem;\n            font-size: 1.5rem;\n            border: 1px solid #777;\n          }\n\n          .control__searchbutton:active {\n            background-color: lightgray;\n          }\n\n          .control__dropdown {\n            flex-grow: 1;\n            margin-left: auto;\n            max-width: 11rem;\n            height: 3.5rem;\n            border-radius: 0.5rem;\n            font-size: 1.5rem;\n            border: 1px solid #777;\n            text-align: center;\n          }\n\n          .emphasize {\n            font-size: 2.8rem;\n            cursor: pointer;\n            margin-left: 1rem;\n          }\n\n          .noleft {\n            margin-left: 1rem;\n            width: 11rem;\n            height: 3.5rem;\n            border-radius: 0.5rem;\n            font-size: 1.5rem;\n            border: 1px solid #777;\n            text-align: center;\n          }\n        </style>\n        <div class="control"> \n          <input class="control__searchbar" placeholder="검색 키워드를 입력하세요"></input>\n          <button class="control__searchbutton">검색</button>\n          <select id="pagination" class="control__dropdown">\n            <option value="5">5개 보기</option>\n            <option value="10">10개 보기</option>\n            <option value="30">30개 보기</option>\n            <option value="50">50개 보기</option>\n            <option value="100">100개 보기</option>\n          </select>\n          <select id="orderby" class="control__dropdown noleft">\n            <option value="DESC">내림차순</option>\n            <option value="ASC">오름차순</option>\n          </select>\n          <div class=emphasize>🔄</div>\n        </div>\n      '}}const t=`reactdom-${e.name}${Math.floor(1e8*Math.random())}`;return window.customElements.define(t,e),t}();t.default=n},117:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=n(976),i=function(){class e extends HTMLElement{constructor(){super(),this.render=this.render.bind(this)}connectedCallback(){this.render(),document.querySelector(".headbar").addEventListener("click",(e=>{const t=`${window.location.origin}${window.location.pathname}`;window.history.pushState({},"",t),(0,r.reRender)()}))}render(){this.innerHTML='\n        <style>\n          .headbar {\n            height: 6rem;\n            background-color: darkslateblue;\n            display: flex;\n            align-items: center;\n            padding-left : 2rem;\n            font-size: 2rem;\n            font-weight: bold;\n            color: white;\n            cursor: pointer;\n          }\n        </style>\n        <div class="headbar">\n          Simple BBS Forum (Fake React - zum coding test) \n        </div>\n      '}}const t=`reactdom-${e.name}${Math.floor(1e8*Math.random())}`;return window.customElements.define(t,e),t}();t.default=i},468:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=function(){class e extends HTMLElement{constructor(){super(),this.render=this.render.bind(this)}connectedCallback(){this.render()}render(){this.innerHTML='\n        <style>\n          .pagination {\n            margin: 3rem auto 0 auto;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            font-size: 3rem;\n            font-weight: bold;\n          }\n\n          .pagination__button {\n            cursor: pointer;\n            margin: 0 1rem;\n          }\n        </style>\n        <div class="pagination"> \n          <div id="page_left" class="pagination__button">&lt;</div>\n          \n          <div id="page_right" class="pagination__button">&gt;</div>\n        </div>\n      '}}const t=`reactdom-${e.name}${Math.floor(1e8*Math.random())}`;return window.customElements.define(t,e),t}();t.default=n},298:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=function(){class e extends HTMLElement{constructor(){super(),this.render=this.render.bind(this)}connectedCallback(){this.render}attributeChangedCallback(e,t,n){this.render()}static get observedAttributes(){return["articleid","username","articlename","created-at"]}render(){this.innerHTML=`\n        <style>\n          .single__article {\n            display: grid;\n            grid-template-columns: 1fr 8fr 2fr 2fr;\n            font-size: 2.5rem;\n            cursor: pointer;\n          }\n\n          .single__right {\n            justify-self: right;\n          }\n\n          .single__link {\n            cursor: pointer;\n            font-size: inherit;\n          }\n        </style>\n        <div class="single__article">\n          <div>${this.getAttribute("articleid")}</div>\n          <div>\n            <span class="single__link">${this.getAttribute("articlename")}</span>\n          </div>\n          <div class=single__right>${this.getAttribute("username")}</div>\n          <div class=single__right>${new Date(this.getAttribute("created-at")).toLocaleDateString()}</div>\n        </div>\n      `}}const t=`reactdom-${e.name}${Math.floor(1e8*Math.random())}`;return window.customElements.define(t,e),t}();t.default=n},655:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(21)),o=r(n(117)),a=r(n(825));t.default=()=>i.default.createElement(i.default.Fragment,null,i.default.createElement(o.default,null),i.default.createElement(a.default,null))},160:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(21)),o=r(n(117)),a=r(n(478)),s=r(n(436)),l=r(n(468));t.default=()=>i.default.createElement(i.default.Fragment,null,i.default.createElement(o.default,null),i.default.createElement(a.default,null),i.default.createElement(s.default,null),i.default.createElement(l.default,null))},976:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.reRender=void 0;const i=n(21),o=r(n(160)),a=r(n(655));n(548);const s=(0,o.default)(),l=(0,a.default)();i.VirtualDOM.set((0,i.getHash)(s),(0,i.getHtml)(s)),i.VirtualDOM.set((0,i.getHash)(l),(0,i.getHtml)(l)),t.reRender=()=>{var e;const t=null===(e=document.getElementById("app"))||void 0===e?void 0:e.childNodes;let n;i.VirtualDOM.set((0,i.getHash)(t),(0,i.getHtml)(t)),""===window.location.search?n=i.VirtualDOM.get((0,i.getHash)(s)):new URLSearchParams(window.location.search).get("articleid")&&(n=i.VirtualDOM.get((0,i.getHash)(l))),n&&(document.getElementById("app").innerHTML="",document.getElementById("app").innerHTML=n)},(0,t.reRender)()},21:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getHtml=t.getHash=t.VirtualDOM=void 0,t.VirtualDOM=new Map,t.getHash=e=>{let t="";for(const n of e)t+=n.localName;return t},t.getHtml=e=>{let t="";for(const n of e)t+=n.outerHTML;return t};const n={createElement:(e,t,...n)=>{if(!e)return n;const r=document.createElement(e);return r.innerHTML+=n.join(""),r},render:(e,t)=>{Array.isArray(e)?e.forEach((e=>{t.appendChild(e)})):t.appendChild(e)}};t.default=n},424:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),i=n.n(r),o=n(645),a=n.n(o)()(i());a.push([e.id,"* {\n  font-size: 62.5%;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Noto Sans', sans-serif;\n}\n",""]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},548:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r=n(379),i=n.n(r),o=n(795),a=n.n(o),s=n(569),l=n.n(s),c=n(565),d=n.n(c),u=n(216),f=n.n(u),m=n(589),h=n.n(m),p=n(424),g={};g.styleTagTransform=h(),g.setAttributes=d(),g.insert=l().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=f(),i()(p.Z,g);const v=p.Z&&p.Z.locals?p.Z.locals:void 0},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},a=[],s=0;s<e.length;s++){var l=e[s],c=r.base?l[0]+r.base:l[0],d=o[c]||0,u="".concat(c," ").concat(d);o[c]=d+1;var f=n(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)t[f].references++,t[f].updater(m);else{var h=i(m,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var s=n(o[a]);t[s].references--}for(var l=r(e,i),c=0;c<o.length;c++){var d=n(o[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(976)})();