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
            flex-grow: 1;
            margin-left: auto;
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
        </style>
        <div class="control"> 
          <input class="control__searchbar" placeholder="검색 키워드를 입력하세요"></input>
          <button class="control__searchbutton">검색</button>
          <select id="pagination" class="control__dropdown">
            <option value="5">5개 보기</option>
            <option value="10">10개 보기</option>
            <option value="30">30개 보기</option>
            <option value="50">50개 보기</option>
            <option value="100">100개 보기</option>
          </select>
          <select id="orderby" class="control__dropdown noleft">
            <option value="DESC">내림차순</option>
            <option value="ASC">오름차순</option>
          </select>
          <div class=emphasize>🔄</div>
        </div>
      `;
    }
  }

  const runOnce = `reactdom-${Control.name}${Math.floor(Math.random() * 100000000)}`;
  window.customElements.define(runOnce, Control);
  return runOnce;
})();

export default ReactComponent;
