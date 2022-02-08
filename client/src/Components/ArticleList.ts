const ReactComponent: string = (function () {
  class ArticleList extends HTMLElement {
    constructor() {
      super();
      this.render = this.render.bind(this);
    }

    connectedCallback() {
      const endpoint = window.location.hostname;

      async function fetchArticles() {
        let data;
        try {
          data = await fetch(`http://${endpoint}:3333/article`);
          data = await data.json();
        } catch (error) {
          alert(error);
          console.error(error);
          return;
        }
        console.dir(data);
        //this.render(data.result);
      }
      fetchArticles();
    }

    render(data: object[]) {
      this.innerHTML = `
        <style>
          .board {
            height: 6rem;
            background-color: darkslateblue;
            display: flex;
            align-items: center;
            padding-left : 2rem;
            font-size: 2rem;
            font-weight: bold;
            color: white;
          }
        </style>
        <div class="board">
          yes
        </div>
      `;
    }
  }

  const runOnce = `reactdom-${ArticleList.name}${Math.floor(Math.random() * 100000000)}`;
  window.customElements.define(runOnce, ArticleList);
  return runOnce;
})();

export default ReactComponent;
