import { row, col, css } from './utils';

function title(block) {
  const { styles, tag = 'h1' } = block.options;
  return row(col(`<${tag}>${block.value}</${tag}>`), css(styles));
}

function text(block) {
  const { styles, tag = 'p' } = block.options;
  return row(col(`<${tag}>${block.value}</${tag}>`), css(styles));
}

function column(block) {
  const { styles } = block.options;

  const html = block.value.map(col).join('');
  return row(html, css(styles));
}

function img(block) {
  const { styles, imgStyles, alt = '' } = block.options;
  console.log(imgStyles, alt);
  return row(
    `<img src="${block.value}" alt="${alt}" style="${css(imgStyles)}"/>`,
    css(styles)
  );
}

export const components = {
  title: title,
  text: text,
  img: img,
  column: column,
};
