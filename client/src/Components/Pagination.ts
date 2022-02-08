const ReactComponent: string = (function () {
  class Pagination extends HTMLElement {
    constructor() {
      super();
      this.render = this.render.bind(this);
    }

    connectedCallback() {
      this.render();
    }

    render() {
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
          
          <div id="page_right" class="pagination__button">&gt;</div>
        </div>
      `;
    }
  }

  const runOnce = `reactdom-${Pagination.name}${Math.floor(Math.random() * 100000000)}`;
  window.customElements.define(runOnce, Pagination);
  return runOnce;
})();

export default ReactComponent;
