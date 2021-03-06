import { reRender } from '..';

const ReactComponent: string = (function () {
  class Control extends HTMLElement {
    constructor() {
      super();
      this.render = this.render.bind(this);
    }

    connectedCallback() {
      this.render();
    }

    render() {
      const searchParams = new URLSearchParams(window.location.search);
      this.innerHTML = `
        <style>
          .control {
            margin-top: 3rem;
            padding: 0 3rem;
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }

          .control__searchbar {
            width: 50rem;
            height: 3.5rem;
            border-radius: 0.5rem;
            padding-left: 1rem;
            font-size: 1.5rem;
            border: 1px solid #777;
          }

          .control__searchbar:focus {
            outline: none;
            border: 1px solid #3C7CFF;
          }

          .control__searchbutton {
            margin-left: 1rem;
            width: 5rem;
            height: 3.5rem;
            border-radius: 0.5rem;
            font-size: 1.5rem;
            border: 1px solid #777;
          }

          .control__searchbutton:active {
            background-color: lightgray;
          }

          .control__dropdown {
            margin-left: 1rem;
            max-width: 11rem;
            height: 3.5rem;
            border-radius: 0.5rem;
            font-size: 1.5rem;
            border: 1px solid #777;
            text-align: center;
          }

          .emphasize {
            font-size: 2.8rem;
            cursor: pointer;
            margin-left: 1rem;
          }

          .noleft {
            margin-left: 1rem;
            width: 11rem;
            height: 3.5rem;
            border-radius: 0.5rem;
            font-size: 1.5rem;
            border: 1px solid #777;
            text-align: center;
          }

          #reset__filter {
            width: 10rem;
            margin-left: auto;
          }
        </style>
        <div class="control"> 
          <input class="control__searchbar" placeholder="?????? ???????????? ???????????????"></input>
          <button class="control__searchbutton">??????</button>
          <button id="reset__filter" class="control__searchbutton">?????? ??????</button>
          <select id="pagination" class="control__dropdown">
            <option value=''>?????? ??????</option>
            <option value="5" ${
              searchParams.get('articlePerPage') === '5' ? 'selected' : ''
            }>5??? ??????</option>
            <option value="10" ${
              searchParams.get('articlePerPage') === '10' ? 'selected' : ''
            }>10??? ??????</option>
            <option value="30"${
              searchParams.get('articlePerPage') === '30' ? 'selected' : ''
            }>30??? ??????</option>
            <option value="50"${
              searchParams.get('articlePerPage') === '50' ? 'selected' : ''
            }>50??? ??????</option>
            <option value="100"${
              searchParams.get('articlePerPage') === '100' ? 'selected' : ''
            }>100??? ??????</option>
          </select>
          <select id="orderby" class="control__dropdown noleft">
            <option value=''>????????????</option>
            <option value="DESC">????????????</option>
            <option value="ASC">????????????</option>
          </select>
          <div class=emphasize>????</div>
        </div>
      `;
      document.querySelector('.control').addEventListener('click', (event: Event) => {
        const clName = (event.target as HTMLDivElement)?.className;
        const id = (event.target as HTMLElement)?.id;
        let endpoint;

        if (clName === 'emphasize') {
          sessionStorage.removeItem('cache_list');
          reRender();
          return;
        }

        if (id === 'reset__filter') {
          endpoint = `${window.location.origin}${window.location.pathname}`;
          window.history.pushState({}, '', endpoint);
          sessionStorage.removeItem('cache_list');
          reRender();
          return;
        }
      });

      document.querySelector('#pagination').addEventListener('change', (event: Event) => {
        const val = (event.target as HTMLSelectElement)?.value;
        if (!val) searchParams.delete('articlePerPage');
        else searchParams.set('articlePerPage', val);
        searchParams.delete('currentPage');
        sessionStorage.removeItem('cache_list');
        const endpoint = `${window.location.origin}${
          window.location.pathname
        }?${searchParams.toString()}`;
        window.history.pushState({}, '', endpoint);
        reRender();
        return;
      });

      document.querySelector('#orderby').addEventListener('change', (event: Event) => {
        const val = (event.target as HTMLSelectElement)?.value;
        if (!val) searchParams.delete('orderby');
        else searchParams.set('orderby', val);
        sessionStorage.removeItem('cache_list');
        const endpoint = `${window.location.origin}${
          window.location.pathname
        }?${searchParams.toString()}`;
        window.history.pushState({}, '', endpoint);
        reRender();
        return;
      });

      document.querySelector('.control__searchbutton').addEventListener('click', (event: Event) => {
        const val = ((event.target as HTMLButtonElement).previousElementSibling as HTMLInputElement)
          ?.value;
        if (!val) searchParams.delete('articlename');
        else searchParams.set('articlename', val);
        sessionStorage.removeItem('cache_list');
        const endpoint = `${window.location.origin}${
          window.location.pathname
        }?${searchParams.toString()}`;
        window.history.pushState({}, '', endpoint);
        reRender();
        return;
      });

      document.querySelector('.control__searchbar').addEventListener('keyup', (event: Event) => {
        if ((event as KeyboardEvent)?.key !== 'Enter') return;
        const val = (event.target as HTMLInputElement)?.value;
        if (!val) searchParams.delete('articlename');
        else searchParams.set('articlename', val);
        sessionStorage.removeItem('cache_list');
        const endpoint = `${window.location.origin}${
          window.location.pathname
        }?${searchParams.toString()}`;
        window.history.pushState({}, '', endpoint);
        reRender();
        return;
      });
    }
  }

  const runOnce = `reactdom-${Control.name}${Math.floor(Math.random() * 100000000)}`;
  window.customElements.define(runOnce, Control);
  return runOnce;
})();

export default ReactComponent;
