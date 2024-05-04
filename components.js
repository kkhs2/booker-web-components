/**  the structure of each component for this project is:
 *  template()
 *  constructor()
 *  render()
 *  any extra handler functions if required
 */

const productsData = [
  {
    title: 'Coca-Cola Zero Sugar',
    volume: '24 x 330ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12657922-9294861134854115.jpg',
    midascode: 100001,
    brand: 'coca-cola',
    price: 13.09,
    rrp: 1.30,
    por: 49.7
  },
  {
    title: 'Coca-Cola Lemon',
    volume: '24 x 330ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/15227578-8645125050786129.jpg',
    midascode: 100002,
    brand: 'coca-cola',
    price: 13.99,
    rrp: 1.39,
    por: 55.5
  },
  {
    title: 'Coca-Cola Original',
    volume: '24 x 250ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/13869129-4134964590200453.jpg',
    midascode: 100002,
    brand: 'coca-cola',
    price: 13.99,
    rrp: 1.39,
    por: 55.5
  },
  {
    title: 'Coca-Cola Cherry',
    volume: '24 x 330ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12657920-1654899330330921.jpg',
    midascode: 100002,
    brand: 'coca-cola',
    price: 13.99,
    rrp: 1.39,
    por: 55.5
  },
  {
    title: 'Coca-Cola Original Taste Glass Bottles',
    volume: '24 x 330ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12657918-9414807812038433.jpg',
    midascode: 100002,
    brand: 'coca-cola',
    price: 13.99,
    rrp: 1.39,
    por: 55.5
  },
  {
    title: 'Coca-Cola Zero Sugar Lemon',
    volume: '24 x 330ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/15227577-1255125050706956.jpg',
    midascode: 100003,
    brand: 'coca-cola',
    price: 14.99,
    rrp: 1.49,
    por: 57.5
  },
  {
    title: 'Coca-Cola Zero Sugar Cherry',
    volume: '24 x 330ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12912901-1414889184313857.jpg',
    midascode: 100004,
    brand: 'coca-cola',
    price: 15.99,
    rrp: 1.59,
    por: 58.5
  },
  {
    title: 'Costa Coffee Latte',
    volume: '12 x 250ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12657928-1344965615047130.jpg',
    midascode: 100005,
    brand: 'costa coffee',
    price: 15.99,
    rrp: 1.59,
    por: 58.5
  },
  {
    title: 'Costa Coffee Vanilla Latte',
    volume: '12 x 250ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12882462-1564965615215088.jpg',
    midascode: 100006,
    brand: 'costa coffee',
    price: 15.99,
    rrp: 1.59,
    por: 58.5
  },
  {
    title: 'Costa Coffee Caramel Latte',
    volume: '12 x 250ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12657927-1074965615454608.jpg',
    midascode: 100006,
    brand: 'costa coffee',
    price: 15.99,
    rrp: 1.59,
    por: 58.5
  },
  {
    title: 'Costa Coffee Flat White',
    volume: '12 x 250ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12882463-3574965914586723.jpg',
    midascode: 100006,
    brand: 'costa coffee',
    price: 15.99,
    rrp: 1.59,
    por: 58.5
  },
  {
    title: 'Jack Daniel\'s and Coca-Cola',
    volume: '12 x 330ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/14509056-2415036628891027.jpg',
    midascode: 100006,
    brand: 'jack daniels',
    price: 15.99,
    rrp: 1.59,
    por: 58.5
  },
  {
    title: 'Jack Daniel\'s and Coca-Cola Zero',
    volume: '12 x 330ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/14509057-9895036629017087.jpg',
    midascode: 100006,
    brand: 'jack daniels',
    price: 15.99,
    rrp: 1.59,
    por: 58.5
  },
];

class InfoCardA extends HTMLElement {
  template = () => `
  <div class="card" style="max-width:40%">
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


class InfoCardB extends HTMLElement {
  template = () => `
  <div class="card" style="max-width:40%">
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



class ProductCard extends HTMLElement {
  template = () => `
  <div class="card text-center" style="max-width:40%">
    <p class="fw-bold">${this.product.midascode}</p>
    <img src=${this.product.image} class="mb-5" />
    <p class="fw-bold">${this.product.title}</p>
   
      <div>${this.product.volume}</div>
      <div class="text-xl font-bold">&pound;${this.product.price}</div>
      <div><a href="#">Add to List</a></div>
      <div>RRP: ${this.product.rrp}</div>
      <div></div><div>POR: ${this.product.por}%</div>
    <div class="">
      <button class="button minus" name="minus" id="minus">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z" clip-rule="evenodd" />
        </svg>
      </button>
      <input type="text" class="form-control" value=${this.quantity} />
      <button class="button plus" name="plus" id="plus">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
    </svg>
      </button>
    </div>
    <div class="p-4">
      <button type="button" class="btn btn-primary booker">Shop Now</button>
    </div>
  </div>
  `;

  constructor() {
    super();
    this.quantity = 0;
    this.product = productsData[0];
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;

    this.querySelector('.plus').addEventListener('click', this.plusClick);
    this.querySelector('.minus').addEventListener('click', this.minusClick);
  }
  
  plusClick = () => {
    this.quantity++;
    this.render();
  }

  minusClick = () => {
    this.quantity > 0 ? this.quantity-- : false;
    this.render();
  } 
}

class ProductCardList extends HTMLElement {
  template = () => `
  <div class="row row-cols-3">
    ${this.products.map(p => `
    <div class="col">
      <div class="card">
        <p class="fw-bold">${p.midascode}</p>
        <img src=${p.image} class="mb-5" />
        <p class="fw-bold">${p.title}</p>
        <div>${p.volume}</div>
        <div class="fw-bold">&pound;${p.price}</div>
        <div><a href="#">Add to List</a></div>
        <div>RRP: ${p.rrp}</div>
        <div>POR: ${p.por}%</div>
        <button class="button minus" name="minus" id="minus">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
          <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z" clip-rule="evenodd" />
          </svg>
        </button>
        <input type="text" class="form-control" value=${this.quantity} />
        <button class="button plus" name="plus" id="plus">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
          </svg>
        </button>
        <div class="p-4">
          <button type="button" class="btn btn-primary button booker">Shop Now</button>
        </div>
      </div>
    </div>
    `
    ).join('')}
  </div>
  `
  constructor() {
    super();
    this.quantity = 0;
    this.products = productsByBrand('costa coffee');
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;
   // this.querySelector('.plus').addEventListener('click', this.plusClick);
   // this.querySelector('.minus').addEventListener('click', this.minusClick);
    
  }

  plusClick = () => {
    this.quantity++;
    this.render();
  }

  minusClick = () => {
    this.quantity > 0 ? this.quantity-- : false;
    this.render();
  } 
}


class ImageCard extends HTMLElement {
  template = () => {

  }

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


class LinkToShop extends HTMLElement {
  template = () => {

  }

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


class HeroBannerA extends HTMLElement {
  template = () => {

  }

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

class HeroBannerB extends HTMLElement {
  template = () => {

  }

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


class HeroBannerCarousel extends HTMLElement {
  template = () => {

  }

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


class Heading extends HTMLElement {
  template = () => {

  }

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


class Button extends HTMLElement {
  template = () => {

  }

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


class StandardCopy extends HTMLElement {
  template = () => {

  }

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


class SubMenuNav extends HTMLElement {
  template = () => {

  }

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




/* global custom functions */
const productsByBrand = (brand) => {
  return productsData.filter(p => p.brand == brand)
}




// register components
customElements.define('info-card-a', InfoCardA);
customElements.define('info-card-b', InfoCardB);
customElements.define('product-card', ProductCard);
customElements.define('product-card-list', ProductCardList);