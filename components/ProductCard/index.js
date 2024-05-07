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