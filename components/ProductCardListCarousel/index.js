export default class ProductCardListCarousel extends HTMLElement {
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