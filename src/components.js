import { row, col } from './utils';

let rowEl = '';

function title(block) {
  return row(col(`<h1>${block.value}</h1>`));
}

function text(block) {
  return row(col(`<p>${block.value}</p>`));
}

function column(block) {
  const html = block.value.map(col);
  return row(html.join(''));
}

function img(block) {
  return row(`<img src="${block.value}"/>`);
}

export const components = {
  title: title,
  text: text,
  img: img,
  column: column,
};
