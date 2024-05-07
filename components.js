import {InfoCardA} from './components/InfoCardA';


/*class InfoCardA extends HTMLElement {
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
}*/


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