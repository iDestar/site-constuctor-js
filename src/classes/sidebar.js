import { TextBlock, TitleBlock } from './blocks';
import { block } from '/utils.js';
export class Sidebar {
  constructor(selector, updateCallback) {
    this.el = document.querySelector(selector);
    this.update = updateCallback;
    this.init();
  }

  init() {
    this.el.insertAdjacentHTML('afterbegin', this.template);
    this.el.addEventListener('submit', this.add.bind(this));
  }
  get template() {
    return [block('text'), block('title')].join('');
  }

  add(evt) {
    evt.preventDefault();
    const type = evt.target.name;
    const value = evt.target.value.value;
    const styles = evt.target.styles.value;

    const newBlock =
      type === 'text'
        ? new TextBlock(value, { styles })
        : new TitleBlock(value, { styles });

    this.update(newBlock);
    evt.target.value.value = '';
    evt.target.styles.value = '';
  }
}
