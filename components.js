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
    rrp: 1.39,
    por: 49.7,
    quantity: 0
  },
  {
    title: 'Coca-Cola Lemon',
    volume: '24 x 330ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/15227578-8645125050786129.jpg',
    midascode: 100002,
    brand: 'coca-cola',
    price: 13.99,
    rrp: 1.39,
    por: 55.5,
    quantity: 0
  },
  {
    title: 'Coca-Cola Original',
    volume: '24 x 250ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/13869129-4134964590200453.jpg',
    midascode: 100003,
    brand: 'coca-cola',
    price: 13.99,
    rrp: 1.39,
    por: 55.5,
    quantity: 0
  },
  {
    title: 'Coca-Cola Cherry',
    volume: '24 x 330ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12657920-1654899330330921.jpg',
    midascode: 100004,
    brand: 'coca-cola',
    price: 13.99,
    rrp: 1.39,
    por: 55.5,
    quantity: 0
  },
  {
    title: 'Coca-Cola Original Taste Glass Bottles',
    volume: '24 x 330ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12657918-9414807812038433.jpg',
    midascode: 100005,
    brand: 'coca-cola',
    price: 13.99,
    rrp: 1.39,
    por: 55.5,
    quantity: 0
  },
  {
    title: 'Coca-Cola Zero Sugar Lemon',
    volume: '24 x 330ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/15227577-1255125050706956.jpg',
    midascode: 100006,
    brand: 'coca-cola',
    price: 14.99,
    rrp: 1.49,
    por: 57.5,
    quantity: 0
  },
  {
    title: 'Coca-Cola Zero Sugar Cherry',
    volume: '24 x 330ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12912901-1414889184313857.jpg',
    midascode: 100007,
    brand: 'coca-cola',
    price: 15.99,
    rrp: 1.59,
    por: 58.5,
    quantity: 0
  },
  {
    title: 'Costa Coffee Latte',
    volume: '12 x 250ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12657928-1344965615047130.jpg',
    midascode: 100008,
    brand: 'costa coffee',
    price: 15.99,
    rrp: 1.59,
    por: 58.5,
    quantity: 0
  },
  {
    title: 'Costa Coffee Vanilla Latte',
    volume: '12 x 250ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12882462-1564965615215088.jpg',
    midascode: 100009,
    brand: 'costa coffee',
    price: 15.99,
    rrp: 1.59,
    por: 58.5,
    quantity: 0
  },
  {
    title: 'Costa Coffee Caramel Latte',
    volume: '12 x 250ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12657927-1074965615454608.jpg',
    midascode: 100010,
    brand: 'costa coffee',
    price: 15.99,
    rrp: 1.59,
    por: 58.5,
    quantity: 0
  },
  {
    title: 'Costa Coffee Flat White',
    volume: '12 x 250ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12882463-3574965914586723.jpg',
    midascode: 100011,
    brand: 'costa coffee',
    price: 15.99,
    rrp: 1.59,
    por: 58.5,
    quantity: 0
  },
  {
    title: 'Jack Daniel\'s and Coca-Cola',
    volume: '12 x 330ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/14509056-2415036628891027.jpg',
    midascode: 100012,
    brand: 'jack daniels',
    price: 15.99,
    rrp: 1.59,
    por: 58.5,
    quantity: 0
  },
  {
    title: 'Jack Daniel\'s and Coca-Cola Zero',
    volume: '12 x 330ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/14509057-9895036629017087.jpg',
    midascode: 100013,
    brand: 'jack daniels',
    price: 15.99,
    rrp: 1.59,
    por: 58.5,
    quantity: 0
  }
];

const productCategories = [
  {
    category: 'Coca Cola Original Taste - Glass Bottles',
    url: 'https://www.yourcoca-cola.co.uk/coca-cola-original-taste-24-x-330ml-glass-bottles/12657918.html'
  },
  {
    category: 'Fanta Orange Zero',
    url: 'https://www.yourcoca-cola.co.uk/fanta-orange-zero-24-x-330ml/12752523.html'
  },
  {
    category: 'Diet Coke',
    url: 'https://www.yourcoca-cola.co.uk/diet-coke-24-x-330ml/12657929.html'
  },
  {
    category: 'Monster Energy Drink Ultra',
    url: 'https://www.yourcoca-cola.co.uk/monster-energy-drink-ultra-12-x-500ml/12657943.html'
  },
  {
    category: 'Relentless Fruit Punch Energy Drink',
    url: 'https://www.yourcoca-cola.co.uk/relentless-fruit-punch-energy-drink-12-x-500ml/15355387.html'
  },
  {
    category: 'Powerade Golden Mango',
    url: 'https://www.yourcoca-cola.co.uk/powerade-golden-mango-12-x-500ml/15213056.html'
  },
  {
    category: 'Coca Cola Lemon',
    url: 'https://www.yourcoca-cola.co.uk/coca-cola-lemon-24-x-330ml/15227578.html'
  },
  {
    category: 'Reign Razzle Berry',
    url: 'https://www.yourcoca-cola.co.uk/reign-razzle-berry-12-x-500ml/12918403.html'
  }
];

const heroBannerCarousel = [
  {
    url: 'https://static.thcdn.com/images/xlarge/webp/widgets/190-en/49/original-New_Fanta_Desktop-011449.png',
    alt: 'Fanta'
  },
  {
    url: 'https://static.thcdn.com/images/xlarge/webp/widgets/190-en/09/Coca-cola-banner-1920x700-073909.png',
    alt: 'Coca Cola'
  },
  {
    url: 'https://static.thcdn.com/images/xlarge/webp/widgets/190-en/19/original-ABBA_Brand_Page_Banner_1-012219.png',
    alt: 'Absolut Vodka'
  },
  {
    url: 'https://static.thcdn.com/images/xlarge/webp/widgets/190-en/00/Appletiser-banner-1920x700-080600.png',
    alt: 'Appletiser'
  },
  {
    url: 'https://static.thcdn.com/images/xlarge/webp/widgets/190-en/45/original-Dr_Pepper_Brands_Page_Desktop-091945.png',
    alt: 'Dr Pepper'
  },
  {
    url: 'https://static.thcdn.com/images/xlarge/webp/widgets/190-en/35/original-Desktop-031535.png',
    alt: 'Jack Daniels'
  },
  {
    url: 'https://static.thcdn.com/images/xlarge/webp/widgets/190-en/00/original-Desktop_%2831%29-025700.png',
    alt: 'Lilt'
  },
  {
    url: 'https://static.thcdn.com/images/xlarge/webp/widgets/190-en/14/original-Sprite_1920x586px-020414.png',
    alt: 'Sprite' 
  }
];

class InfoCardA extends HTMLElement {
  template = () => `
    <div class="card h-100 mx-auto shadow-lg p-3 mb-5 bg-body-tertiary rounded w-50">
      <img src="${this.img}" alt="${this.alt}" />
      <div class="card-body">
        <div class="p-4">
          <strong>${this.heading}</strong>
        </div>
        <div class="p-4">
          ${this.text} ${this.count}
        </div>
        <div class="p-4">
          ${this.button}
        </div>
      </div>
    </div>
    `

  constructor() {
    super();
    this.heading = '[TITLE] SEASONAL PROMOTION BANNER';
    this.img = 'https://www.insidehook.com/wp-content/uploads/2021/07/cokezero-h.jpg?fit=1200%2C800';
    this.alt = 'Coca Cola Zero Sugar';
    this.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas massa sit amet mi rutrum, a hendrerit ante pulvinar. Vivamus id risus a lorem consequat lobortis a id purus. Maecenas ac dui vulputate, posuere arcu ut, aliquet arcu. Fusce mollis lacinia ipsum sed facilisis.';
    this.button = `<button type="button" class="btn btn-primary booker button" id="shopNow" name="shopNow">Shop Now</button>`;
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
    <div class="card h-100 mx-auto shadow-lg p-3 mb-5 bg-body-tertiary rounded w-50">
      <img src="${this.img}" alt="${this.alt}" />
      <div class="card-body">
        <div class="p-4">
          <strong>${this.heading}</strong>
        </div>
        <div class="p-4">
          ${this.text}
        </div>
        <div class="p-4">
          ${this.url}
        </div>
      </div>
    </div>
  </div>
  `

  constructor() {
    super();
    this.heading = '[TITLE]';
    this.img = 'https://static.thcdn.com/images/medium/webp/widgets/190-en/24/Two_Item_Image_-_Option_2-041524.png';
    this.alt = 'JD and Coke';
    this.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas massa sit amet mi rutrum, a hendrerit ante pulvinar. Vivamus id risus a lorem consequat lobortis a id purus. Maecenas ac dui vulputate, posuere arcu ut, aliquet arcu. Fusce mollis lacinia ipsum sed facilisis.';
    this.url = `<a href="#" class="text-decoration-none">Shop Now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg></a>`;
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
    <div class="card mx-auto h-100 text-center shadow-lg p-3 mb-5 bg-body-tertiary rounded w-50">
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
          <input type="text" class="form-control text-center" value=${this.product.quantity} />
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
    this.product.quantity++;
    this.render();
  }

  minusClick = () => {
    this.product.quantity > 0 ? this.product.quantity-- : false;
    this.render();
  } 
}

class HeroBannerCarousel extends HTMLElement {
  template = () => `
  <div id="HeroBannerCarousel" class="carousel">
    <div class="carousel-inner">
    ${this.heroBannerCarousel.map((val, key) => `
      <div class="carousel-item ${key == 0 ? "active" : ""}">
        <img src="${val.url}" class="d-block w-100" alt="${val.alt}">
      </div>
      `).join('')}
    </div>   
    <button class="carousel-control-prev" type="button" data-bs-target="#HeroBannerCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#HeroBannerCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  `;

  constructor() {
    super();
    this.heroBannerCarousel = heroBannerCarousel;
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;
  }
}

class ProductCardList extends HTMLElement {
  template = () => `
  <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
    ${this.products.map(p => `
    <div class="col">
      <div class="card mx-auto h-100 text-center shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <div class="card-title">
          <p class="fw-bold">${p.midascode}</p>
        </div>
          <img src=${p.image} class="mb-5" />
            <div class="row mb-3">
              <p class="fw-bold">${p.title}</p>
            </div>
            <div class="row mb-3">
              <div class="col">
                <p>${p.volume}</p>
              </div>
              <div class="col">
                <div class="fw-bold">
                  <p>&pound;${p.price}</p>
                </div>
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
              <button class="btn button minus" name="minus" id="${p.midascode}">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
                </svg>
              </button>
              <div class="col-3">
                <input type="text" class="form-control text-center" value=${p.quantity} />
              </div>
              <button class="btn button plus" name="plus" id="${p.midascode}">
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
    `).join('')}
  </div>
  `
  constructor() {
    super();
    this.products = productsByBrand('costa coffee');
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;

    const cardsPlus = this.querySelectorAll('.plus');
    const cardsMinus = this.querySelectorAll('.minus');
    for (let i = 0; i < cardsPlus.length; i++) {
      cardsPlus[i].addEventListener('click', () => { this.plusClick(cardsPlus[i]) });
    }

    for (let i = 0; i < cardsMinus.length; i++) {
      cardsMinus[i].addEventListener('click', () => { this.minusClick(cardsMinus[i]) });
    }

  }

  plusClick = (card) => {
    this.products.find((value, index) => {
      if (value.midascode == card.id) {
        this.products[index].quantity++;
      }
    });
    this.render();
  }

  minusClick = (card) => {
    this.products.find((value, index) => {
      if (value.midascode == card.id && this.products[index].quantity > 0) {
        this.products[index].quantity--;
      }
    });
    this.render();
  } 
}


class LinkToShop extends HTMLElement {
  template = () => `
    <div class="row mb-3">
      <a href="${this.url}" target="_blank"><img src="${this.image}" class="img-fluid" /></a>
    </div>
    <div class="row">
      ${this.link}
    </div>
    `;
  

  constructor() {
    super();
    this.image = 'https://www.booker.co.uk/-/media/Images/Booker-Supplier-Income/FY25-NP3/NP3-GroceryCatering-Caterer-Unilever.png?iar=0&hash=4989B548FFC2265B10C9840071333582';
    this.name = 'Visit Hellmann\'s Mayonnaise store';
    this.url = 'https://www.hellmanns.com/us/en/products/mayonnaise.html';
    this.link = `<a href="${this.url}">${this.name} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
  </svg></a>`;
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;
  }
}

class ImageCard extends HTMLElement {
  template = () => `
    <img src="${this.image}" class="img-fluid" />
    ${this.button}
  `;

  constructor() {
    super();
    this.url = 'https://www.yourcoca-cola.co.uk/shop.list?pageNumber=1&facetFilters=en_brand_content:Coca-Cola+Original+Taste';
    this.image = 'https://static.thcdn.com/images/medium/webp/widgets/190-en/01/original-cczsbrand-031501.png';
    this.button = `<a href="${this.url}" class="position-absolute bottom-0 start-50 translate-middle-x btn btn-light">Shop</a>`;
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
    <img src="${this.image}" class="img-fluid" />
    ${this.button}
  `;


  constructor() {
    super();
    this.text = 'Shop All Coca Cola products';
    this.url = 'https://www.yourcoca-cola.co.uk/shop.list?pageNumber=1&facetFilters=en_brand_content:Coca-Cola+Original+Taste';
    this.image = 'https://static.thcdn.com/images/xlarge/webp/widgets/190-en/09/Coca-cola-banner-1920x700-073909.png';
    this.button = `<a class="btn btn-light mt-3 hero-banner-a-button" href="${this.url}">${this.text}</a>`;
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
    <div class="container bg-white mt-3 p-4 hero-banner-b-form">
      <h3>Enquiry Form</h3>
      <p>${this.text}</p>
      ${this.button}
    </div>
  `;

  constructor() {
    super();
    this.image = 'https://static.thcdn.com/images/xlarge/webp/widgets/190-en/57/original-Brands_Banner_Desktop_1920_x_586-020057.png';
    this.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    this.button = '<button class="btn btn-primary booker">Enquire here</button>';
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;
  }
}


class ProductCardListCarousel extends HTMLElement {
  template = () => `
  <div class="row justify-content-center">
      <div id="ProductCardListCarousel" class="carousel product-card-list-carousel">
        <div class="carousel-inner">
        ${this.products.map((p, key) => 
          `
          <div class="carousel-item product-card-list-item ${ (key == 0) ? "active" : "" }">
            <div class="card text-center rounded">
              <div class="card-title">
                <p class="fw-bold">${p.midascode}</p>
              </div>
              <img src=${p.image} class="img-fluid" />
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
                <button class="btn button productCarouselMinus" name="productCarouselMinus" id="${p.midascode}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
                  </svg>
                </button>
                <div class="col-3">
                  <input type="text" class="form-control text-center" value=${p.quantity} />
                </div>
                <button class="btn button productCarouselPlus" name="productCarouselPlus" id="${p.midascode}">
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
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;

    const cardsPlus = this.querySelectorAll('.productCarouselPlus');
   
    const cardsMinus = this.querySelectorAll('.productCarouselMinus');
    for (let i = 0; i < cardsPlus.length; i++) {
      
      cardsPlus[i].addEventListener('click', () => { this.plusClick(cardsPlus[i]) });
    }

    for (let i = 0; i < cardsMinus.length; i++) {
      cardsMinus[i].addEventListener('click', () => { this.minusClick(cardsMinus[i]) });
    }
  }

  plusClick = (card) => {
    this.products.find((value, index) => {
      if (value.midascode == card.id) {
        this.products[index].quantity++;
      }
    });
    this.render();
  }

  minusClick = (card) => {
    this.products.find((value, index) => {
      if (value.midascode == card.id && this.products[index].quantity > 0) {
        this.products[index].quantity--;
      }
    });
    this.render();
  } 

}

class ProductCategory extends HTMLElement {
  template = () => `
  <div class="row mt-4">
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mx-auto">
      <a class="text-decoration-none" href="${this.url}">  
        <div class="card bg-light text-dark h-100 text-center p-4 fw-bold">
          ${this.text}
        </div>
      </a>
    </div>
  </div>
  `;

  constructor() {
    super();
    this.text = 'Baileys Absolut Vodka & Sprite';
    this.url = 'https://www.yourcoca-cola.co.uk/absolut-vodka-and-sprite-12-x-250ml/15213058.html';
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;
  }
}


class ProductCategories extends HTMLElement {
  template = () => `
  <div class="row g-2 mt-4">
  ${this.categories.map(c => `
    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 mx-auto">
      <a class="text-decoration-none" href="${c.url}">
        <div class="card bg-light text-dark h-100 text-center p-4 fw-bold">
          <p>${c.category}</p>
        </div>
      </a>
    </div> 
  `).join('')}
  </div>`;


  constructor() {
    super();
    this.categories = productCategories;
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;
  }
}


class SubPageNavigation extends HTMLElement {
  template = () => `${this.content}`;

  constructor() {
    super();
    this.content = `<div class="container">
    <nav class="navbar navbar-expand-lg bg-white border-bottom border-secondary mb-2">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-decoration-underline" href="">MONSTER</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">COCA COLA</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">FANTA</a>
        </li>
      </ul>
    </nav>
    <div class="row">
      <div class="col-sm-6 bg-light p-4">
        <span class="align-middle"><h4>Monster Energy</h4>
        Tear into a can of Monster Energy wherever your journey takes you, the meanest energy drink on the planet.<br>
        The Monster Energy blend combined with caffeine gives you the energy you need in a smooth easy drinking flavour. Athletes, gamers, musicians, students, road warriors, metal heads, geeks, hipsters, and bikers dig it - you will too. Unleash the Beast!</span>
      </div>
      <div class="col-sm-6 bg-black d-flex justify-content-center">
        <img src="https://static.thcdn.com/images/medium/webp/widgets/190-en/14/Monster-header-375x375-113914.png" class="img-fluid " />
      </div>
    </div>
    </div>`;
    
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;
  }
}

class StandardCopy extends HTMLElement {
  template = () => `
    <p class="h3 mb-4">${this.title}</p>
    <p>${this.description}</p>
  `;


  constructor() {
    super();
    this.title = 'Shop your favourites';
    this.description = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.';
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;
  }
}

class Button extends HTMLElement {
  template = () => `
    ${this.button}
  `;


  constructor() {
    super();
    this.text = 'Shop all Coca-Cola products';
    this.button = '<button type="button" class="btn btn-primary booker">' + this.text + '</button>';
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;
  }
}

class HeroImage extends HTMLElement {
  template = () => `
    <img src="${this.image}" class="img-fluid" />
  `;

  constructor() {
    super();
    this.image = 'https://static.thcdn.com/images/xlarge/webp/widgets/190-en/19/original-ABBA_Brand_Page_Banner_1-012219.png';
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
customElements.define('hero-banner-carousel', HeroBannerCarousel);
customElements.define('image-card', ImageCard);
customElements.define('sub-page-navigation', SubPageNavigation);
customElements.define('custom-button', Button);
customElements.define('standard-copy', StandardCopy);
customElements.define('product-category', ProductCategory);
customElements.define('hero-image', HeroImage);