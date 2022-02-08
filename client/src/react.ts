import { arrayBuffer, text } from 'stream/consumers';

const React = {
  createElement: (type: string, props: null, ...internalText: any) => {
    // console.dir(type);
    // console.dir(props);
    // console.dir(internalText);
    // console.dir(this);

    if (!type) return internalText;
    const element = document.createElement(type);
    element.innerHTML += internalText.join('');
    return element;
  },
  render: (element: Node, container: HTMLElement) => {
    //console.dir(element);
    if (Array.isArray(element)) {
      element.forEach((e) => {
        container.appendChild(e);
      });
      return;
    }
    container.appendChild(element);
  },
};
export default React;
