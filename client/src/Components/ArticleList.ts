import { returnListArticle, typeArticleDB } from '@backend/Types';
import SingleList from './SingleList';

const ReactComponent: string = (function () {
  class ArticleList extends HTMLElement {
    constructor() {
      super();
      this.render = this.render.bind(this);
    }

    connectedCallback() {
      const endpoint = window.location.hostname;
      const render = this.render;

      async function fetchArticles() {
        let data, result: returnListArticle;
        try {
          data = await fetch(`http://${endpoint}:3333/article`);
          result = await data.json();
        } catch (error) {
          alert(error);
          console.error(error);
          return;
        }
        sessionStorage.setItem('cache_list', JSON.stringify(result));
        render(result);
      }
      if (!sessionStorage.getItem('cache_list')) fetchArticles();
      else {
        console.log('cache hit');
        this.render(JSON.parse(sessionStorage.getItem('cache_list')));
      }
    }

    render(data: returnListArticle) {
      this.innerHTML = `
        <style>
          .board {
            padding: 0 3rem;
            margin-top: 3rem;
            display: grid;
            grid-template-rows: auto;
            grid-gap: 1.2rem;
          }

          .board__bold {
            font-weight: bold;
          }
        </style>
        <div class="board">  
          <div class="single__article">
            <div class=board__bold>글번호</div>
            <div class=board__bold>제목</div>
            <div class="board__bold single__right">작성자</div>
            <div class="board__bold single__right">작성일</div>
          </div>
          ${data.result
            .map(({ articleid, username, articlename, created_at }: typeArticleDB) => {
              return `<${SingleList} articleid="${articleid}" username="${username}" articlename="${articlename}" created-at="${created_at}"></${SingleList}>`;
            })
            .join('')}
        </div>
      `;
    }
  }

  const runOnce = `reactdom-${ArticleList.name}${Math.floor(Math.random() * 100000000)}`;
  window.customElements.define(runOnce, ArticleList);
  return runOnce;
})();

export default ReactComponent;
