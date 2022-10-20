// import Logo from './images/iphone.jpg';


class Product {
  // image:HTMLImageElement;
    title: string;
    details: string;
    amount: number;

    constructor(t:string, d:string, a:number) {
        this.title = t;
        this.details = d;
        this.amount = a;
    }

    // format() {
    //     return `${this.title} has ${this.details} costs ${this.amount}`
    // }
}

const pOne = new Product('Samsung','Enjoy your brand new samsung Phone', 300);
const pTwo = new Product('iphone13','Enjoy your brand new iPhone 13', 500);
const pThree = new Product('vivo','Enjoy your brand new vivo phone', 500);


let products: Product[] = [];
products.push(pOne);
products.push(pTwo);
products.push(pThree);

// console.log(products);

const wrap = document.querySelector(".wrap");

window.addEventListener("DOMContentLoaded", function() {
    let displayProducts = products.map((item) => {
        return `<div class="card">
        <div class="container">
          <h4>${item.title}</h4>
          <p>Price: $${item.amount}</p>
          <p>${item.details}</p>
        </div>
      </div>`
    });
    // console.log(displayMenu);
    let displayProductItem = displayProducts.join("");
    wrap.innerHTML = displayProductItem;
    
})
