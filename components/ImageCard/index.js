class ImageCard extends HTMLElement {
  template = () => `

    <img src="${this.image}" class="img-fluid" />
    <div class="p-4">
      <button type="button" class="btn btn-primary button booker">Shop Now</button>
    </div>

  `;

  constructor() {
    super();
    this.image = 'https://static.thcdn.com/images/medium/webp/widgets/190-en/01/original-cczsbrand-031501.png';
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;
  }
}