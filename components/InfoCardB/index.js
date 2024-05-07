class InfoCardB extends HTMLElement {
  template = () => `
  <div class="card h-100 text-center shadow-lg p-3 mb-5 bg-body-tertiary rounded w-50">
    <img src="${this.img}" alt="${this.alt}" />
    <div class="card-body">
      <div class="p-4">
        <strong>${this.heading}</strong>
      </div>

      <div class="p-4">
        ${this.text}
      </div>
      <div class="p-4">
        <button type="button" class="btn btn-primary booker" id="shopNow" name="shopNow">Shop Now</button>
      </div>
    </div>
  </div>
</div>
  `

  constructor() {
    super();
    this.heading = 'SEASONAL PROMOTION BANNER';
    this.img = 'https://static.thcdn.com/images/medium/webp/widgets/190-en/24/Two_Item_Image_-_Option_2-041524.png';
    this.alt = 'JD and Coke';
    this.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas massa sit amet mi rutrum, a hendrerit ante pulvinar. Vivamus id risus a lorem consequat lobortis a id purus. Maecenas ac dui vulputate, posuere arcu ut, aliquet arcu. Fusce mollis lacinia ipsum sed facilisis.';
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;
  }
}
