import { row, col, css } from '../utils';

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHTML() {
    throw new Error('Метод должен быть реализован');
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { styles, tag = 'h1' } = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
  }
}

export class ImgBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { styles, imgStyles, alt = '' } = this.options;
    console.log(this.value);
    return row(
      `<img src="${this.value}" alt="${alt}" style="${css(imgStyles)}"/>`,
      css(styles)
    );
  }
}

export class ColumnBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { styles } = this.options;
    const html = this.value.map(col).join('');
    return row(html, css(styles));
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { styles, tag = 'p' } = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
  }
}
