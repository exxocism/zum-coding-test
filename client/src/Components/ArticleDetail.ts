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

    render(article: typeArticleDB) {
      this.innerHTML = `
        <style>
          .article__detail {
            padding: 3rem;
          }
        </style>
        <div class="article__detail">  
          ${JSON.stringify(article)}
        </div>
      `;
    }
  }

  const runOnce = `reactdom-${ArticleDetail.name}${Math.floor(Math.random() * 100000000)}`;
  window.customElements.define(runOnce, ArticleDetail);
  return runOnce;
})();

export default ReactComponent;
