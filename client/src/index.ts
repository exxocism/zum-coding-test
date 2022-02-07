//call DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Hell Yeah!');
  const mainDOM = document.querySelector('#app');
  mainDOM.innerHTML = '<h1>Hello World</h1>';
});
