class LinkToShop extends HTMLElement {
  template = () => ``


  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;
  }
}