import { returnListArticle, typeArticleDB } from '@backend/Types';

const ReactComponent: string = (function () {
  class ArticleDetail extends HTMLElement {
    constructor() {
      super();
      this.render = this.render.bind(this);
    }

    connectedCallback() {
      const render = this.render;
      const searchParams = new URLSearchParams(window.location.search);
      const articleid = searchParams.get('articleid');

      const endpoint = window.location.hostname;
      async function fetchArticles() {
        let data, result: typeArticleDB;
        try {
          data = await fetch(`http://${endpoint}:3333/article/${articleid}`);
          result = await data.json();
        } catch (error) {
          alert(error);
          console.error(error);
          return;
        }

        if (sessionStorage.getItem('cache_list')) {
          const cache: returnListArticle = JSON.parse(sessionStorage.getItem('cache_list'));
          cache.result.push(result as never);
        }
        render(result);
      }
      if (!sessionStorage.getItem('cache_list')) return fetchArticles();

      const cache: returnListArticle = JSON.parse(sessionStorage.getItem('cache_list'));
      const article = cache.result.findIndex(
        ({ articleid: articlecheck }: typeArticleDB) => articlecheck === Number(articleid)
      );
      if (article === -1) return fetchArticles();

      console.log('cache hit');
      this.render(cache.result[article]);
    }

    render({ articleid, username, articlename, articletext, created_at }: typeArticleDB) {
      this.innerHTML = `
        <style>
          .article__detail {
            padding: 3rem;
          }

          .article__detail__title {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
          }
          
          .article__metadata {
            display: grid;
            grid-template-columns: 1fr 2fr 2fr 2fr;
            margin-bottom: 1.5rem;
          }

          .article__metadata > div {
            font-size: 2rem;
            color: darkslategray;
          }

          .article__detail__text {
            white-space: pre-wrap;
            font-size: 1.8rem;
          }
        </style>
        <div class="article__detail">
          <!-- 여기서부터 조건부 렌더링 -->
          <h1 class="article__detail__title">${articlename}</h1>
          <div class="article__metadata">
            <div>글번호: ${articleid}</div>
            <div>작성자: ${username}</div>
            <div>작성일: ${new Date(created_at).toLocaleDateString()}</div>
          </div>
          <div class="article__detail__text">${articletext}</div>
        </div>
      `;
    }
  }

  const runOnce = `reactdom-${ArticleDetail.name}${Math.floor(Math.random() * 100000000)}`;
  window.customElements.define(runOnce, ArticleDetail);
  return runOnce;
})();

export default ReactComponent;
