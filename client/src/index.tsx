import React, { VirtualDOM, getHash, getHtml } from './react';
import MainPage from './Pages/MainPage';
import GetArticle from './Pages/GetArticle';
import './index.css';

const MainPageRendered = MainPage();
const GetArticleRendered = GetArticle();
VirtualDOM.set(getHash(MainPageRendered), getHtml(MainPageRendered));
VirtualDOM.set(getHash(GetArticleRendered), getHtml(GetArticleRendered));

//React.render(MainPage(), document.getElementById('app'));

export const reRender = () => {
  const storeThisPage = document.getElementById('app')?.childNodes;
  VirtualDOM.set(getHash(storeThisPage), getHtml(storeThisPage));

  let renderThisPage;
  switch (window.location.search) {
    case '':
      renderThisPage = VirtualDOM.get(getHash(MainPageRendered));
      break;
    default:
      const searchParams = new URLSearchParams(window.location.search);
      if (searchParams.get('articleid'))
        renderThisPage = VirtualDOM.get(getHash(GetArticleRendered));
      else renderThisPage = VirtualDOM.get(getHash(MainPageRendered));
      break;
  }

  if (!renderThisPage) return;
  document.getElementById('app').innerHTML = '';
  document.getElementById('app').innerHTML = renderThisPage;
};

reRender();
