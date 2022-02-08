import { returnListArticle } from '@backend/Types';
import { reRender } from '..';

const ReactComponent: string = (function () {
  class Pagination extends HTMLElement {
    constructor() {
      super();
      this.render = this.render.bind(this);
    }

    connectedCallback() {
      const render = this.render;
      async function fetchArticles() {
        const endpoint = window.location.hostname;
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('articlePerPage', '10485760');
        searchParams.delete('currentPage');
        let data, result: returnListArticle;
        try {
          data = await fetch(`http://${endpoint}:3333/article?${searchParams.toString()}`);
          result = await data.json();
        } catch (error) {
          alert(error);
          console.error(error);
          return;
        }
        render(result.result.length);
      }
      fetchArticles();
    }

    render(maxnum: number) {
      const searchParams = new URLSearchParams(window.location.search);
      let divisor = Number(searchParams.get('articlePerPage'));
      if (isNaN(divisor) || !divisor) divisor = 10;
      const pages = Math.ceil(maxnum / divisor);
      this.innerHTML = `
        <style>
          .pagination {
            margin: 3rem auto 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 3rem;
            font-weight: bold;
          }

          .pagination__button {
            cursor: pointer;
            margin: 0 1rem;
          }
        </style>
        <div class="pagination"> 
          <div id="page_left" class="pagination__button">&lt;</div>
          ${Array.from({ length: pages }, (_, index) => {
            return `<div id="page_${index + 1}" class="pagination__button">${index + 1}</div>`;
          }).join('')}
          <div id="page_right" class="pagination__button">&gt;</div>
        </div>
      `;
      document.querySelector('.pagination').addEventListener('click', (event: Event) => {
        const target = event.target as HTMLElement;
        const page = target.id.split('_')[1];

        if (isNaN(Number(page))) return;

        searchParams.set('currentPage', page);
        window.history.pushState({}, '', `${window.location.pathname}?${searchParams.toString()}`);
        sessionStorage.removeItem('cache_list');
        reRender();
      });
    }
  }

  const runOnce = `reactdom-${Pagination.name}${Math.floor(Math.random() * 100000000)}`;
  window.customElements.define(runOnce, Pagination);
  return runOnce;
})();

export default ReactComponent;
