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
    midascode: 100003,
    brand: 'coca-cola',
    price: 13.99,
    rrp: 1.39,
    por: 55.5
  },
  {
    title: 'Coca-Cola Cherry',
    volume: '24 x 330ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12657920-1654899330330921.jpg',
    midascode: 100004,
    brand: 'coca-cola',
    price: 13.99,
    rrp: 1.39,
    por: 55.5
  },
  {
    title: 'Coca-Cola Original Taste Glass Bottles',
    volume: '24 x 330ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12657918-9414807812038433.jpg',
    midascode: 100005,
    brand: 'coca-cola',
    price: 13.99,
    rrp: 1.39,
    por: 55.5
  },
  {
    title: 'Coca-Cola Zero Sugar Lemon',
    volume: '24 x 330ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/15227577-1255125050706956.jpg',
    midascode: 100006,
    brand: 'coca-cola',
    price: 14.99,
    rrp: 1.49,
    por: 57.5
  },
  {
    title: 'Coca-Cola Zero Sugar Cherry',
    volume: '24 x 330ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12912901-1414889184313857.jpg',
    midascode: 100007,
    brand: 'coca-cola',
    price: 15.99,
    rrp: 1.59,
    por: 58.5
  },
  {
    title: 'Costa Coffee Latte',
    volume: '12 x 250ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12657928-1344965615047130.jpg',
    midascode: 100008,
    brand: 'costa coffee',
    price: 15.99,
    rrp: 1.59,
    por: 58.5
  },
  {
    title: 'Costa Coffee Vanilla Latte',
    volume: '12 x 250ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12882462-1564965615215088.jpg',
    midascode: 100009,
    brand: 'costa coffee',
    price: 15.99,
    rrp: 1.59,
    por: 58.5
  },
  {
    title: 'Costa Coffee Caramel Latte',
    volume: '12 x 250ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12657927-1074965615454608.jpg',
    midascode: 100010,
    brand: 'costa coffee',
    price: 15.99,
    rrp: 1.59,
    por: 58.5
  },
  {
    title: 'Costa Coffee Flat White',
    volume: '12 x 250ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12882463-3574965914586723.jpg',
    midascode: 100011,
    brand: 'costa coffee',
    price: 15.99,
    rrp: 1.59,
    por: 58.5
  },
  {
    title: 'Jack Daniel\'s and Coca-Cola',
    volume: '12 x 330ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/14509056-2415036628891027.jpg',
    midascode: 100012,
    brand: 'jack daniels',
    price: 15.99,
    rrp: 1.59,
    por: 58.5
  },
  {
    title: 'Jack Daniel\'s and Coca-Cola Zero',
    volume: '12 x 330ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/14509057-9895036629017087.jpg',
    midascode: 100013,
    brand: 'jack daniels',
    price: 15.99,
    rrp: 1.59,
    por: 58.5
  }
];

const productCategories = [
 {

 }
];

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


class ProductCard extends HTMLElement {
  template = () => `
  <div class="card text-center h-100 text-center shadow-lg p-3 mb-5 bg-body-tertiary rounded w-50">
    <div class="card-title">
      <p class="fw-bold">${this.product.midascode}</p>
    </div>
    <img src=${this.product.image} class="mb-5" />
    <div class="row mb-3">
      <p class="fw-bold">${this.product.title}</p>
    </div>
    <div class="row mb-3">
      <div class="col">
        ${this.product.volume}
      </div>
      <div class="col">
        <div class="fw-bold">&pound;${this.product.price}</div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col">
        <a href="#">Add to List</a>
      </div>
      <div class="col">
        <p>RRP: ${this.product.rrp}</p>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col offset-6">
        <p>POR: ${this.product.por}%</p>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <button class="btn button minus" name="minus" id="minus">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
        </svg>
      </button>
      <div class="col-2">
        <input type="text" class="form-control" value=${this.quantity} />
      </div>
      <button class="btn button plus" name="plus" id="plus">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
        </svg>
      </button>
    </div>  
    <div class="p-4">
      <button type="button" class="btn btn-primary button booker">Shop Now</button>
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
  <div class="row row-cols-1 row-cols-md-3 g-4">
    ${this.products.map(p => `
    <div class="col">
      <div class="card h-100 text-center shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <div class="card-title">
          <p class="fw-bold">${p.midascode}</p>
        </div>
          <img src=${p.image} class="mb-5" />
            <div class="row mb-3">
              <p class="fw-bold">${p.title}</p>
            </div>
            <div class="row mb-3">
              <div class="col">
                ${p.volume}
              </div>
              <div class="col">
                <div class="fw-bold">&pound;${p.price}</div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <a href="#">Add to List</a>
              </div>
              <div class="col">
                <p>RRP: ${p.rrp}</p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col offset-6">
                <p>POR: ${p.por}%</p>
              </div>
            </div>
            <div class="d-flex justify-content-center">
                  <button class="btn button minus" name="minus" id="minus">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
                    </svg>
                  </button>
                  <div class="col-2">
                    <input type="text" class="form-control" value=${this.quantity} />
                  </div>
                  <button class="btn button plus" name="plus" id="plus">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                    </svg>
                  </button>
                </div>
              
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


class LinkToShop extends HTMLElement {
  template = () => 
    `<div class="row mb-3">
      <img src="${this.image}" />
    </div>
    <div class="row">
     <a href="${this.url}">${this.name} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
    </svg></a>
    </div>
    `;
  

  constructor() {
    super();
    this.image = 'https://www.booker.co.uk/-/media/Images/Booker-Supplier-Income/FY25-NP3/NP3-GroceryCatering-Caterer-Unilever.png?iar=0&hash=4989B548FFC2265B10C9840071333582';
    this.url = 'https://www.hellmanns.com/us/en/products/mayonnaise.html';
    this.name = 'Visit Hellmann\'s Mayonnaise store';
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;
  }
}


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


class ProductCardListCarousel extends HTMLElement {
  template = () => 
  `
  <div id="ProductCardListCarousel" class="carousel slide">
    <div class="carousel-inner">
      ${this.products.map((p, key) => 
      `
      <div class="carousel-item ${ (key == 0) ? "active" : "" }">
        <div class="card h-100 text-center shadow-lg p-3 mb-5 bg-body-tertiary rounded w-50">
          <div class="card-title">
            <p class="fw-bold">${p.midascode}</p>
          </div>
          <img src=${p.image} class="mb-5" />
          <div class="row mb-3">
            <p class="fw-bold">${p.title}</p>
          </div>
          <div class="row mb-3">
            <div class="col">
              ${p.volume}
            </div>
            <div class="col">
              <div class="fw-bold">&pound;${p.price}</div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <a href="#">Add to List</a>
            </div>
            <div class="col">
              <p>RRP: ${p.rrp}</p>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col offset-6">
              <p>POR: ${p.por}%</p>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <button class="btn button minus" name="minus" id="minus">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
              </svg>
            </button>
            <div class="col-2">
              <input type="text" class="form-control" value=${this.quantity} />
            </div>
            <button class="btn button plus" name="plus" id="plus">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
              </svg>
            </button>
          </div>    
          <div class="p-4">
            <button type="button" class="btn btn-primary button booker">Shop Now</button>
          </div>
        </div>
      </div>
      `
      ).join('')}
    <button class="carousel-control-prev" type="button" data-bs-target="#ProductCardListCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#ProductCardListCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </div>
  `

  constructor() {
    super();
    this.products = productsByBrand('coca-cola');
    this.quantity = 0;
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


class ProductCategories extends HTMLElement {

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

class SubPageNavigation extends HTMLElement {
  template = () => ``;

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
customElements.define('product-card-list-carousel', ProductCardListCarousel);
customElements.define('product-categories', ProductCategories);
customElements.define('link-to-shop', LinkToShop);
customElements.define('hero-banner-a', HeroBannerA);
customElements.define('hero-banner-b', HeroBannerB);
customElements.define('image-card', ImageCard);
customElements.define('sub-page-navigation', SubPageNavigation);