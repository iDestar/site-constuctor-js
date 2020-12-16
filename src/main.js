const model = [
  {
    type: 'title',
    value: 'Hello',
  },
  { type: 'text', value: 'some text' },
  { type: 'columns', value: ['first', 'second', 'third'] },
  { type: 'img', value: 'src/assets/img.png' },
];

const siteEl = document.querySelector('#site');

model.forEach((block) => {
  let html = '';

  if (block.type === 'title') {
    html = title(block);
  } else if (block.type === 'text') {
    html = text(block);
  } else if (block.type === 'columns') {
    html = column(block);
  } else if (block.type === 'img') {
    html = img(block);
  }

  siteEl.insertAdjacentHTML('beforeend', html);
});

function title(block) {
  return `
    <div class="row">            
       <div class="col-sm">  
           <h1>${block.value}</h1>
       </div>
    </div>
    `;
}

function text(block) {
  return `
    <div class="row">
        <div class="col-sm">
            <p>${block.value}</p>
        </div>
    </div>`;
}

function column(block) {
  const html = block.value.map((item) => `<div class="col-sm">${item}</div>`);
  return `
    <div class="row">
        ${html.join('')}
    </div>
   `;
}

function img(block) {
  return `
     <div class="row">
        <img src="${block.value}"/>
     </div>
    `;
}
