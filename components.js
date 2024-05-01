class ProductInfo extends HTMLElement {
  constructor() {
    super();
    this.title = 'SEASONAL PROMOTION BANNER';
    this.img = 'https://www.insidehook.com/wp-content/uploads/2021/07/cokezero-h.jpg?fit=1200%2C800';
    this.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas massa sit amet mi rutrum, a hendrerit ante pulvinar. Vivamus id risus a lorem consequat lobortis a id purus. Maecenas ac dui vulputate, posuere arcu ut, aliquet arcu. Fusce mollis lacinia ipsum sed facilisis.';
    
  }

  connectedCallback() {
    // browser calls this method when the element is added to the document
    // (can be called many times if an element is repeatedly added/removed)
    // connect component
    this.innerHTML = `
    <img src="${this.img}" alt="Coca Cola Zero Sugar" />
    <div className="p-4">
      <div className="uppercase tracking-wide text-sm text-[#2356AA] font-semibold">${this.title}
    </div>
    
    <div className="p-4">
      ${this.text}
    </div>
    <div className="p-4">
      <button type="button" className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded booker">Shop Now</button>
    </div>
  `;
  }

  disconnectedCallback() {
    // browser calls this method when the element is removed from the document
    // (can be called many times if an element is repeatedly added/removed)
  }

  // component attributes
  static get observedAttributes() {
    return ['title', 'img', 'text'];
  }

  // attribute change
  attributeChangedCallback(property, oldValue, newValue) {

    if (oldValue === newValue) return;
    this[ property ] = newValue;
  }

  
  
}




// register component
customElements.define('product-info', ProductInfo);