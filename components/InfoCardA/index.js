class InfoCardA extends HTMLElement {
  template = () => `
  <div class="card h-100 text-center shadow-lg p-3 mb-5 bg-body-tertiary rounded w-50">
    <img src="${this.img}" alt="${this.alt}" />
    <div class="card-body">
      <div class="p-4">
        <strong>${this.heading}</strong>
      </div>
  
      <div class="p-4">
        ${this.text} ${this.count}
      </div>
      <div class="p-4">
        <button type="button" class="btn btn-primary booker button" id="shopNow" name="shopNow">Shop Now</button>
      </div>
    </div>
  </div>
  `

  constructor() {
    super();
    this.heading = 'SEASONAL PROMOTION BANNER';
    this.img = 'https://www.insidehook.com/wp-content/uploads/2021/07/cokezero-h.jpg?fit=1200%2C800';
    this.alt = 'Coca Cola Zero Sugar';
    this.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas massa sit amet mi rutrum, a hendrerit ante pulvinar. Vivamus id risus a lorem consequat lobortis a id purus. Maecenas ac dui vulputate, posuere arcu ut, aliquet arcu. Fusce mollis lacinia ipsum sed facilisis.';
    this.count = 0;
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;
    this.querySelector('.button').addEventListener('click', this.shopNowClick);
  }

  shopNowClick = () => {
    this.count++;
    this.render();
  }
}

export default InfoCardA