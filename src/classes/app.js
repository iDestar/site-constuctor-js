import { Site } from './site';
import { Sidebar } from './sidebar';

export class App {
  constructor(model) {
    this.model = model;
  }
  init() {
    const siteEl = new Site('#site');

    siteEl.render(this.model);

    const updateCallback = (newBlock) => {
      this.model.push(newBlock);
      siteEl.render(this.model);
    };

    new Sidebar('#panel', updateCallback);
  }
}
