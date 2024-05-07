class HeroBannerB extends HTMLElement {
  template = () => `
    <img src="${this.image}" class="img-fluid" />
  `;

  constructor() {
    super();
    this.image = 'https://static.thcdn.com/images/xlarge/webp/widgets/190-en/57/original-Brands_Banner_Desktop_1920_x_586-020057.png';
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;
  }
}