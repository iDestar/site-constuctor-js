import img from './assets/img.png';

const text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima saepe laudantium veniam facilis eos maiores eveniet odio reprehenderit totam libero illo velit omnis iure officiis, ipsum modi quidem vitae.';

export const model = [
  {
    type: 'title',
    value: 'Hello',
    options: {
      tag: 'h2',
      styles: {
        background: `linear-gradient(to right, #E4E5E6, #00416A)`,
        'text-align': 'center',
        padding: ' 1rem',
      },
    },
  },
  {
    type: 'text',
    value: text,
    options: {
      tag: 'p',
      styles: {
        padding: '2rem',
        'font-weight': 'bold',
        background: `linear-gradient(to right, #E4E5E6, #00416A)`,
      },
    },
  },
  {
    type: 'column',
    value: [text, text, text],
    options: {
      tag: 'p',
      styles: {
        background: `linear-gradient(to right, #E4E5E6, #00416A)`,
        padding: '2rem',
        'font-weight': 'bold',
      },
    },
  },
  {
    type: 'img',
    value: img,
    options: {
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
    },
  },
];
