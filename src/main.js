import { model } from './model';
import { components } from './components';
import './styles/main.css';
const siteEl = document.querySelector('#site');

model.forEach((block) => {
  const toHTML = components[block.type];
  console.log(toHTML);
  if (toHTML) {
    siteEl.insertAdjacentHTML('beforeend', toHTML(block));
  }
});
