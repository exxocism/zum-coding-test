import React from './react';
import Header from './Components/Header';
import ArticleList from './Components/ArticleList';
import './index.css';

const test = () => {
  return (
    <>
      <Header />
      <ArticleList />
    </>
  );
};

React.render(test(), document.getElementById('app'));
