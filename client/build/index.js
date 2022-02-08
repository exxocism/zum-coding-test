(()=>{"use strict";var e={195:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=n(825),i=n(976),a=function(){class e extends HTMLElement{constructor(){super(),this.render=this.render.bind(this),this.addEvent=this.addEvent.bind(this)}connectedCallback(){this.render(),this.addEvent()}addEvent(){document.querySelector(".create__metadata").addEventListener("click",(e=>{var t,n,a,o;let l;switch(null===(t=e.target)||void 0===t?void 0:t.id){case"create-btn-create":const e={username:null===(n=document.querySelector("#create-username-input"))||void 0===n?void 0:n.value,articlename:null===(a=document.querySelector("#create-title-input"))||void 0===a?void 0:a.value,articletext:null===(o=document.querySelector("#create-textarea"))||void 0===o?void 0:o.value},{username:t,articlename:s,articletext:c}=e;if(!t||!s||!c)return void alert("값을 모두 입력해주세요.");if(t.length>r.MAGICNUM.MAX_USERNAME_LENGTH)return void alert(`제목은 ${r.MAGICNUM.MAX_USERNAME_LENGTH}자 이내로 입력해주세요.`);if(s.length>r.MAGICNUM.MAX_ARTICLENAME_LENGTH)return void alert(`제목은 ${r.MAGICNUM.MAX_ARTICLENAME_LENGTH}자 이내로 입력해주세요.`);if(c.length>r.MAGICNUM.MAX_ARTICLETEXT_LENGTH)return void alert("내용이 너무 깁니다.");fetch(`http://${window.location.hostname}:3333/article`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>{if(201===e.status)return e.json();alert(`작성에 실패했습니다. 오류 코드 : ${e.status}`)})).then((e=>{sessionStorage.removeItem("cache_list"),l=`${window.location.origin}${window.location.pathname}?articleid=${e.id}`,window.history.pushState({},"",l),(0,i.reRender)()})).catch((e=>{alert(e)}));break;case"create-btn-list":l=`${window.location.origin}${window.location.pathname}`,window.history.pushState({},"",l),(0,i.reRender)()}}))}render(){this.innerHTML='\n        <style>\n          .create__detail {\n            padding: 3rem;\n          }\n\n          .create__detail__title {\n            font-size: 3rem;\n            font-weight: bold;\n            margin-bottom: 2rem;\n          }\n          \n          .create__metadata {\n            display: flex;\n            align-items: center;\n            margin-bottom: 1rem;\n          }\n\n          .create__searchbutton {\n            margin-left: 1rem;\n            width: 5rem;\n            height: 3.5rem;\n            border-radius: 0.5rem;\n            font-size: 1.5rem;\n            border: 1px solid #777;\n            justify-self: center;\n          }\n\n          .create__searchbutton:active {\n            background-color: lightgray;\n          }\n\n          #create-username-input {\n            flex-grow: 1;\n            height: 3.5rem;\n            padding-left: 1rem;\n            font-size: 1.5rem;\n            border-radius: 0.5rem;\n            border: 1px solid #777;\n          }\n\n          #create-title-input {\n            width: 100%;\n            height: 3.5rem;\n            padding-left: 1rem;\n            font-size: 1.5rem;\n            border-radius: 0.5rem;\n            border: 1px solid #777;\n            margin-bottom: 1rem;\n          }\n\n          #create-textarea {\n            width: 100%;\n            font-size: 1.5rem;\n            min-height: 60rem;\n            height: auto;\n            resize: vertical;\n            padding: 1rem;\n            border-radius: 0.5rem;\n          }\n          \n        </style>\n        <div class="create__detail">\n          \x3c!-- 여기서부터 조건부 렌더링 --\x3e\n          <div class="create__detail__title">새로운 글 작성</div>\n          <div class="create__metadata">\n            <input id="create-username-input" type="text" value="" placeholder="작성자" />\n            <button id="create-btn-create" class=create__searchbutton>글쓰기</button>\n            <button id="create-btn-list" class=create__searchbutton>목록</button>\n          </div>\n          <input id="create-title-input" type="text" value="" placeholder="글 제목">\n          <textarea class="create__detail__text" id="create-textarea" placeholder="글 내용"></textarea>\n        </div>\n      '}}const t=`reactdom-${e.name}${Math.floor(1e8*Math.random())}`;return window.customElements.define(t,e),t}();t.default=a},825:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{s(r.next(e))}catch(e){a(e)}}function l(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.MAGICNUM=void 0;const i=n(976);t.MAGICNUM={MAX_USERNAME_LENGTH:32,MAX_ARTICLENAME_LENGTH:128,MAX_ARTICLETEXT_LENGTH:1048576,MAX_ARTICLETEXT_QUERY_LENGTH:128,MAX_SAFE_QUERY_LENGTH:Math.floor(Math.sqrt(Number.MAX_SAFE_INTEGER))};const a=function(){class e extends HTMLElement{constructor(){super(),this.render=this.render.bind(this),this.addEvent=this.addEvent.bind(this),this.notfound=this.notfound.bind(this)}connectedCallback(){const e=this.addEvent,t=this.render,n=this.notfound,i=new URLSearchParams(window.location.search).get("articleid"),a=window.location.hostname;function o(){return r(this,void 0,void 0,(function*(){let r,o;try{r=yield fetch(`http://${a}:3333/article/${i}`),o=yield r.json()}catch(e){return alert(e),void console.error(e)}404!==r.status&&400!==r.status?(sessionStorage.getItem("cache_list")&&JSON.parse(sessionStorage.getItem("cache_list")).result.push(o),t(o),e()):n()}))}if(!sessionStorage.getItem("cache_list"))return o();const l=JSON.parse(sessionStorage.getItem("cache_list")),s=l.result.findIndex((({articleid:e})=>e===Number(i)));if(-1===s)return o();console.log("cache hit"),this.render(l.result[s]),e()}addEvent(){document.querySelector(".article__metadata").addEventListener("click",(e=>{var n,r,a;const o=new URLSearchParams(window.location.search);let l;switch(null===(n=e.target)||void 0===n?void 0:n.id){case"article-btn-modify":if("1"===o.get("editmode")){o.delete("editmode");const e={articleid:Number(o.get("articleid")),articlename:null===(r=document.querySelector("#article-title-input"))||void 0===r?void 0:r.value,articletext:null===(a=document.querySelector("#article-textarea"))||void 0===a?void 0:a.value},{articleid:n,articlename:i,articletext:s}=e;if(!n||!i||!s)return void alert("값을 모두 입력해주세요.");if(isNaN(n)||n<0||n>Number.MAX_SAFE_INTEGER)return void alert("글번호는 정수만 입력해주세요.");if(i.length>t.MAGICNUM.MAX_ARTICLENAME_LENGTH)return void alert(`제목은 ${t.MAGICNUM.MAX_ARTICLENAME_LENGTH}자 이내로 입력해주세요.`);if(s.length>t.MAGICNUM.MAX_ARTICLETEXT_LENGTH)return void alert("내용이 너무 깁니다.");fetch(`http://${window.location.hostname}:3333/article/${n}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>{204===e.status?(sessionStorage.removeItem("cache_list"),l=`${window.location.origin}${window.location.pathname}?${o.toString()}`,window.history.pushState({},"",l),this.connectedCallback()):alert(`수정에 실패했습니다. 오류 코드 : ${e.status}`)})).catch((e=>{alert(e)}))}else o.set("editmode","1"),l=`${window.location.origin}${window.location.pathname}?${o.toString()}`,window.history.pushState({},"",l),this.connectedCallback();break;case"article-btn-delete":const e=o.get("articleid");fetch(`http://${window.location.hostname}:3333/article/${e}`,{method:"DELETE"}).then((e=>{204===e.status?(sessionStorage.removeItem("cache_list"),l=`${window.location.origin}${window.location.pathname}`,window.history.pushState({},"",l),(0,i.reRender)()):alert(`삭제에 실패했습니다. 오류 코드 : ${e.status}`)})).catch((e=>{alert(e)}));break;case"article-btn-list":l=`${window.location.origin}${window.location.pathname}`,window.history.pushState({},"",l),(0,i.reRender)()}}))}notfound(){this.innerHTML='\n        <style>\n          .article__notfound {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            margin-top: 5rem;\n            font-size: 4rem;\n            text-align: center;\n          }\n        </style>\n        <div class="article__notfound">404 Not Found</div>\n        <div class="article__notfound">요청하신 게시물을 찾을 수 없습니다.</div>\n      '}render({articleid:e,username:t,articlename:n,articletext:r,created_at:i}){const a="1"===new URLSearchParams(window.location.search).get("editmode");this.innerHTML=`\n        <style>\n          .article__detail {\n            padding: 3rem;\n          }\n\n          .article__detail__title {\n            font-size: 3rem;\n            font-weight: bold;\n            margin-bottom: 2rem;\n          }\n          \n          .article__metadata {\n            display: grid;\n            grid-template-columns: 1fr 2fr 2fr 1fr 0.3fr 0.3fr 0.3fr;\n            grid-gap: 1rem;\n            align-items: center;\n            margin-bottom: 2rem;\n          }\n\n          .article__metadata > div {\n            font-size: 2rem;\n            color: darkslategray;\n          }\n\n          .article__detail__text {\n            white-space: pre-wrap;\n            font-size: 1.8rem;\n            line-height: 2.8rem;\n          }\n\n          .article__searchbutton {\n            width: 5rem;\n            height: 3.5rem;\n            border-radius: 0.5rem;\n            font-size: 1.5rem;\n            border: 1px solid #777;\n            justify-self: center;\n          }\n\n          .article__searchbutton:active {\n            background-color: lightgray;\n          }\n\n          #article-textarea {\n            width: 100%;\n            min-height: 20rem;\n            height: auto;\n            resize: vertical;\n            padding: 1rem;\n          }\n\n          #article-title-input {\n            width: 100%;\n            font-size: 3rem;\n            font-weight: bold;\n            margin-bottom: 2rem;\n            padding-left: 1rem;\n          }\n        </style>\n        <div class="article__detail">\n          \x3c!-- 여기서부터 조건부 렌더링 --\x3e\n          ${a?`<input id="article-title-input" type="text" value="${n}">`:`<h1 class="article__detail__title">${n}</h1>`}\n          <div class="article__metadata">\n            <div>글번호: ${e}</div>\n            <div>작성자: ${t}</div>\n            <div>작성일: ${new Date(i).toLocaleDateString()}</div>\n            <div></div>\n            <button id="article-btn-modify" class=article__searchbutton>${a?"완료":"수정"}</button>\n            <button id="article-btn-delete" class=article__searchbutton>삭제</button>\n            <button id="article-btn-list" class=article__searchbutton>목록</button>\n          </div>\n          ${a?`<textarea class="article__detail__text" id="article-textarea">${r}</textarea>`:`<div class="article__detail__text">${r}</div>`}\n        </div>\n      `}}const n=`reactdom-${e.name}${Math.floor(1e8*Math.random())}`;return window.customElements.define(n,e),n}();t.default=a},436:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{s(r.next(e))}catch(e){a(e)}}function l(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((r=r.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=i(n(298)),o=n(976),l=function(){class e extends HTMLElement{constructor(){super(),this.render=this.render.bind(this)}connectedCallback(){const e=window.location.hostname,t=this.render;if(!sessionStorage.getItem("cache_list"))return function(){return r(this,void 0,void 0,(function*(){let n,r;const i=new URLSearchParams(window.location.search);try{n=yield fetch(`http://${e}:3333/article?${i.toString()}`),r=yield n.json()}catch(e){return alert(e),void console.error(e)}sessionStorage.setItem("cache_list",JSON.stringify(r)),t(r)}))}();console.log("cache hit"),this.render(JSON.parse(sessionStorage.getItem("cache_list")))}render(e){var t;this.innerHTML=`\n        <style>\n          .board {\n            padding: 0 3rem;\n            margin-top: 3rem;\n            display: grid;\n            grid-template-rows: auto;\n            grid-gap: 1.2rem;\n          }\n\n          .board__bold {\n            font-weight: bold;\n          }\n\n          .single__article {\n            display: grid;\n            grid-template-columns: 1fr 8fr 2fr 2fr;\n            font-size: 2.5rem;\n            cursor: pointer;\n          }\n\n          .single__right {\n            justify-self: right;\n          }\n\n          .single__link {\n            cursor: pointer;\n            font-size: inherit;\n          }\n\n          .board__noarticle {\n            margin-top: 3rem;\n            position: relative;\n            text-align: center;\n            font-size: 3rem;\n          }\n        </style>\n        <div class="board">  \n          <div class="single__article">\n            <div class=board__bold>글번호</div>\n            <div class=board__bold>제목</div>\n            <div class="board__bold single__right">작성자</div>\n            <div class="board__bold single__right">작성일</div>\n          </div>\n          ${e.result.map((({articleid:e,username:t,articlename:n,created_at:r})=>`<${a.default} articleid="${e}" username="${t}" articlename="${n}" created-at="${r}"></${a.default}>`)).join("")}\n          ${(null===(t=e.result)||void 0===t?void 0:t.length)?"":'<div class="board__noarticle">게시글이 없습니다.</div>'}\n        </div>\n      `,document.querySelector(".board").addEventListener("click",(e=>{let t;const n=new URLSearchParams(window.location.search);if("single__link"===e.target.className){const n=e.target.parentElement.previousElementSibling.textContent;return t=`${window.location.origin}${window.location.pathname}?articleid=${n}`,window.history.pushState({},"",t),void(0,o.reRender)()}if(-1!==[...e.target.classList].findIndex((e=>"single__username"===e)))return n.set("username",e.target.textContent),t=`${window.location.origin}${window.location.pathname}?${n.toString()}`,window.history.pushState({},"",t),sessionStorage.removeItem("cache_list"),void(0,o.reRender)()}))}}const t=`reactdom-${e.name}${Math.floor(1e8*Math.random())}`;return window.customElements.define(t,e),t}();t.default=l},478:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=n(976),i=function(){class e extends HTMLElement{constructor(){super(),this.render=this.render.bind(this)}connectedCallback(){this.render()}render(){const e=new URLSearchParams(window.location.search);this.innerHTML=`\n        <style>\n          .control {\n            margin-top: 3rem;\n            padding: 0 3rem;\n            display: flex;\n            justify-content: flex-start;\n            align-items: center;\n          }\n\n          .control__searchbar {\n            width: 50rem;\n            height: 3.5rem;\n            border-radius: 0.5rem;\n            padding-left: 1rem;\n            font-size: 1.5rem;\n            border: 1px solid #777;\n          }\n\n          .control__searchbar:focus {\n            outline: none;\n            border: 1px solid #3C7CFF;\n          }\n\n          .control__searchbutton {\n            margin-left: 1rem;\n            width: 5rem;\n            height: 3.5rem;\n            border-radius: 0.5rem;\n            font-size: 1.5rem;\n            border: 1px solid #777;\n          }\n\n          .control__searchbutton:active {\n            background-color: lightgray;\n          }\n\n          .control__dropdown {\n            margin-left: 1rem;\n            max-width: 11rem;\n            height: 3.5rem;\n            border-radius: 0.5rem;\n            font-size: 1.5rem;\n            border: 1px solid #777;\n            text-align: center;\n          }\n\n          .emphasize {\n            font-size: 2.8rem;\n            cursor: pointer;\n            margin-left: 1rem;\n          }\n\n          .noleft {\n            margin-left: 1rem;\n            width: 11rem;\n            height: 3.5rem;\n            border-radius: 0.5rem;\n            font-size: 1.5rem;\n            border: 1px solid #777;\n            text-align: center;\n          }\n\n          #reset__filter {\n            width: 10rem;\n            margin-left: auto;\n          }\n        </style>\n        <div class="control"> \n          <input class="control__searchbar" placeholder="검색 키워드를 입력하세요"></input>\n          <button class="control__searchbutton">검색</button>\n          <button id="reset__filter" class="control__searchbutton">필터 제거</button>\n          <select id="pagination" class="control__dropdown">\n            <option value=''>갯수 필터</option>\n            <option value="5" ${"5"===e.get("articlePerPage")?"selected":""}>5개 보기</option>\n            <option value="10" ${"10"===e.get("articlePerPage")?"selected":""}>10개 보기</option>\n            <option value="30"${"30"===e.get("articlePerPage")?"selected":""}>30개 보기</option>\n            <option value="50"${"50"===e.get("articlePerPage")?"selected":""}>50개 보기</option>\n            <option value="100"${"100"===e.get("articlePerPage")?"selected":""}>100개 보기</option>\n          </select>\n          <select id="orderby" class="control__dropdown noleft">\n            <option value=''>정렬순서</option>\n            <option value="DESC">내림차순</option>\n            <option value="ASC">오름차순</option>\n          </select>\n          <div class=emphasize>🔄</div>\n        </div>\n      `,document.querySelector(".control").addEventListener("click",(e=>{var t,n;const i=null===(t=e.target)||void 0===t?void 0:t.className,a=null===(n=e.target)||void 0===n?void 0:n.id;let o;return"emphasize"===i?(sessionStorage.removeItem("cache_list"),void(0,r.reRender)()):"reset__filter"===a?(o=`${window.location.origin}${window.location.pathname}`,window.history.pushState({},"",o),sessionStorage.removeItem("cache_list"),void(0,r.reRender)()):void 0})),document.querySelector("#pagination").addEventListener("change",(t=>{var n;const i=null===(n=t.target)||void 0===n?void 0:n.value;i?e.set("articlePerPage",i):e.delete("articlePerPage"),e.delete("currentPage"),sessionStorage.removeItem("cache_list");const a=`${window.location.origin}${window.location.pathname}?${e.toString()}`;window.history.pushState({},"",a),(0,r.reRender)()})),document.querySelector("#orderby").addEventListener("change",(t=>{var n;const i=null===(n=t.target)||void 0===n?void 0:n.value;i?e.set("orderby",i):e.delete("orderby"),sessionStorage.removeItem("cache_list");const a=`${window.location.origin}${window.location.pathname}?${e.toString()}`;window.history.pushState({},"",a),(0,r.reRender)()})),document.querySelector(".control__searchbutton").addEventListener("click",(t=>{var n;const i=null===(n=t.target.previousElementSibling)||void 0===n?void 0:n.value;i?e.set("articlename",i):e.delete("articlename"),sessionStorage.removeItem("cache_list");const a=`${window.location.origin}${window.location.pathname}?${e.toString()}`;window.history.pushState({},"",a),(0,r.reRender)()})),document.querySelector(".control__searchbar").addEventListener("keyup",(t=>{var n,i;if("Enter"!==(null===(n=t)||void 0===n?void 0:n.key))return;const a=null===(i=t.target)||void 0===i?void 0:i.value;a?e.set("articlename",a):e.delete("articlename"),sessionStorage.removeItem("cache_list");const o=`${window.location.origin}${window.location.pathname}?${e.toString()}`;window.history.pushState({},"",o),(0,r.reRender)()}))}}const t=`reactdom-${e.name}${Math.floor(1e8*Math.random())}`;return window.customElements.define(t,e),t}();t.default=i},117:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=n(976),i=function(){class e extends HTMLElement{constructor(){super(),this.render=this.render.bind(this)}connectedCallback(){this.render(),document.querySelector(".headbar").addEventListener("click",(e=>{const t=`${window.location.origin}${window.location.pathname}`;window.history.pushState({},"",t),(0,r.reRender)()}))}render(){this.innerHTML='\n        <style>\n          .headbar {\n            height: 6rem;\n            background-color: darkslateblue;\n            display: flex;\n            align-items: center;\n            padding-left : 2rem;\n            font-size: 2rem;\n            font-weight: bold;\n            color: white;\n            cursor: pointer;\n          }\n        </style>\n        <div class="headbar">\n          Simple BBS Forum (Fake React - zum coding test) \n        </div>\n      '}}const t=`reactdom-${e.name}${Math.floor(1e8*Math.random())}`;return window.customElements.define(t,e),t}();t.default=i},468:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{s(r.next(e))}catch(e){a(e)}}function l(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const i=n(976),a=function(){class e extends HTMLElement{constructor(){super(),this.render=this.render.bind(this)}connectedCallback(){const e=this.render;!function(){r(this,void 0,void 0,(function*(){const t=window.location.hostname,n=new URLSearchParams(window.location.search);let r,i;n.set("articlePerPage","10485760"),n.delete("currentPage");try{r=yield fetch(`http://${t}:3333/article?${n.toString()}`),i=yield r.json()}catch(e){return alert(e),void console.error(e)}e(i.result.length)}))}()}render(e){const t=new URLSearchParams(window.location.search);let n=Number(t.get("articlePerPage"));!isNaN(n)&&n||(n=Number.MAX_SAFE_INTEGER);const r=Math.ceil(e/n);this.innerHTML=`\n        <style>\n          .pagination {\n            margin: 3rem auto 0 auto;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            font-size: 3rem;\n            font-weight: bold;\n          }\n\n          .pagination__button {\n            cursor: pointer;\n            margin: 0 1rem;\n          }\n\n          .page__searchbutton {\n            margin-left: 1rem;\n            width: 8rem;\n            height: 3.5rem;\n            border-radius: 0.5rem;\n            font-size: 1.5rem;\n            border: 1px solid #777;\n            justify-self: center;\n          }\n\n          .page__searchbutton:active {\n            background-color: lightgray;\n          }\n\n          #page__writenew {\n            position: relative;\n            top: -3rem;\n            float: right;\n            margin-right: 3rem;\n          }\n        </style>\n        <div class="pagination"> \n          <div id="page_left" class="pagination__button">&lt;</div>\n          ${Array.from({length:r},((e,t)=>`<div id="page_${t+1}" class="pagination__button">${t+1}</div>`)).join("")}\n          <div id="page_right" class="pagination__button">&gt;</div>\n        </div>\n        <button id="page__writenew" class="page__searchbutton">글쓰기</button>\n      `,document.querySelector(".pagination").addEventListener("click",(e=>{const n=e.target.id.split("_")[1];isNaN(Number(n))||(t.set("currentPage",n),window.history.pushState({},"",`${window.location.pathname}?${t.toString()}`),sessionStorage.removeItem("cache_list"),(0,i.reRender)())})),document.querySelector("#page__writenew").addEventListener("click",(e=>{window.history.pushState({},"",`${window.location.pathname}?action=write`),(0,i.reRender)()}))}}const t=`reactdom-${e.name}${Math.floor(1e8*Math.random())}`;return window.customElements.define(t,e),t}();t.default=a},298:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=function(){class e extends HTMLElement{constructor(){super(),this.render=this.render.bind(this)}connectedCallback(){this.render}attributeChangedCallback(e,t,n){this.render()}static get observedAttributes(){return["articleid","username","articlename","created-at"]}render(){this.innerHTML=`\n        <style>\n          .single__article {\n            display: grid;\n            grid-template-columns: 1fr 8fr 2fr 2fr;\n            font-size: 2.5rem;\n            cursor: pointer;\n          }\n\n          .single__right {\n            justify-self: right;\n          }\n\n          .single__link {\n            cursor: pointer;\n            font-size: inherit;\n          }\n        </style>\n        <div class="single__article">\n          <div>${this.getAttribute("articleid")}</div>\n          <div>\n            <span class="single__link">${this.getAttribute("articlename")}</span>\n          </div>\n          <div class="single__right single__username">${this.getAttribute("username")}</div>\n          <div class=single__right>${new Date(this.getAttribute("created-at")).toLocaleDateString()}</div>\n        </div>\n      `}}const t=`reactdom-${e.name}${Math.floor(1e8*Math.random())}`;return window.customElements.define(t,e),t}();t.default=n},655:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(21)),a=r(n(117)),o=r(n(825));t.default=()=>i.default.createElement(i.default.Fragment,null,i.default.createElement(a.default,null),i.default.createElement(o.default,null))},160:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(21)),a=r(n(117)),o=r(n(478)),l=r(n(436)),s=r(n(468));t.default=()=>i.default.createElement(i.default.Fragment,null,i.default.createElement(a.default,null),i.default.createElement(o.default,null),i.default.createElement(l.default,null),i.default.createElement(s.default,null))},335:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(21)),a=r(n(117)),o=r(n(195));t.default=()=>i.default.createElement(i.default.Fragment,null,i.default.createElement(a.default,null),i.default.createElement(o.default,null))},976:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.reRender=void 0;const i=n(21),a=r(n(160)),o=r(n(655)),l=r(n(335));n(548);const s=(0,a.default)(),c=(0,o.default)(),d=(0,l.default)();i.VirtualDOM.set((0,i.getHash)(s),(0,i.getHtml)(s)),i.VirtualDOM.set((0,i.getHash)(c),(0,i.getHtml)(c)),i.VirtualDOM.set((0,i.getHash)(d),(0,i.getHtml)(d)),t.reRender=()=>{var e;const t=null===(e=document.getElementById("app"))||void 0===e?void 0:e.childNodes;let n;i.VirtualDOM.set((0,i.getHash)(t),(0,i.getHtml)(t));const r=new URLSearchParams(window.location.search);n=""===window.location.search?i.VirtualDOM.get((0,i.getHash)(s)):r.get("articleid")?i.VirtualDOM.get((0,i.getHash)(c)):"write"===r.get("action")?i.VirtualDOM.get((0,i.getHash)(d)):i.VirtualDOM.get((0,i.getHash)(s)),n&&(document.getElementById("app").innerHTML="",document.getElementById("app").innerHTML=n)},(0,t.reRender)()},21:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getHtml=t.getHash=t.VirtualDOM=void 0,t.VirtualDOM=new Map,t.getHash=e=>{let t="";for(const n of e)t+=n.localName;return t},t.getHtml=e=>{let t="";for(const n of e)t+=n.outerHTML;return t};const n={createElement:(e,t,...n)=>{if(!e)return n;const r=document.createElement(e);return r.innerHTML+=n.join(""),r},render:(e,t)=>{Array.isArray(e)?e.forEach((e=>{t.appendChild(e)})):t.appendChild(e)}};t.default=n},424:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(81),i=n.n(r),a=n(645),o=n.n(a)()(i());o.push([e.id,"* {\n  font-size: 62.5%;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Noto Sans', sans-serif;\n}\n",""]);const l=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(o[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&o[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},548:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var r=n(379),i=n.n(r),a=n(795),o=n.n(a),l=n(569),s=n.n(l),c=n(565),d=n.n(c),u=n(216),h=n.n(u),m=n(589),f=n.n(m),g=n(424),p={};p.styleTagTransform=f(),p.setAttributes=d(),p.insert=s().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=h(),i()(g.Z,p);const _=g.Z&&g.Z.locals?g.Z.locals:void 0},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},o=[],l=0;l<e.length;l++){var s=e[l],c=r.base?s[0]+r.base:s[0],d=a[c]||0,u="".concat(c," ").concat(d);a[c]=d+1;var h=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==h)t[h].references++,t[h].updater(m);else{var f=i(m,r);r.byIndex=l,t.splice(l,0,{identifier:u,updater:f,references:1})}o.push(u)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var a=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var l=n(a[o]);t[l].references--}for(var s=r(e,i),c=0;c<a.length;c++){var d=n(a[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={id:r,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(976)})();