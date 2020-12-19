import img from './assets/img.png';
import { TextBlock, TitleBlock, ImgBlock, ColumnBlock } from './classes/blocks';

const text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima saepe laudantium veniam facilis eos maiores eveniet odio reprehenderit totam libero illo velit omnis iure officiis, ipsum modi quidem vitae.';

export const model = [
  new TitleBlock('Something', {
    tag: 'h2',
    styles: {
      background: `linear-gradient(to right, #E4E5E6, #00416A)`,
      'text-align': 'center',
      padding: ' 1rem',
    },
  }),
  new TextBlock(text, {
    tag: 'p',
    styles: {
      padding: '2rem',
      'font-weight': 'bold',
      background: `linear-gradient(to right, #E4E5E6, #00416A)`,
    },
  }),
  new ColumnBlock([text, text, text], {
    tag: 'p',
    styles: {
      background: `linear-gradient(to right, #E4E5E6, #00416A)`,
      padding: '2rem',
      'font-weight': 'bold',
    },
  }),

  new ImgBlock(img, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center',
      background: `linear-gradient(to right, #E4E5E6, #00416A)`,
    },
    imgStyles: {
      width: '500px',
      height: 'auto',
    },
    alt: 'img',
  }),
];
