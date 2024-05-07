class HeroBannerA extends HTMLElement {
  template = () => `
    <img src="${this.image}" style="width:100%" />
      <div style="position:absolute;bottom:0%;left:50%;transform: translate(-50%, -50%);">
        <button class="btn btn-secondary">Visit the Coca Cola Store</button>
      </div>
  `;


  constructor() {
    super();
    this.image = 'https://static.thcdn.com/images/xlarge/webp/widgets/190-en/09/Coca-cola-banner-1920x700-073909.png';
    this.button = '<button class="btn btn-primary position-absolute">Visit the Coca Cola Store</button>';
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;
  }
}