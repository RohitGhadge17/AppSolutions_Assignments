var Product = /** @class */ (function () {
    function Product(t, d, a) {
        this.title = t;
        this.details = d;
        this.amount = a;
    }
    return Product;
}());
var pOne = new Product('Samsung', 'Enjoy your brand new samsung Phone', 300);
var pTwo = new Product('iphone13', 'Enjoy your brand new iPhone 13', 500);
var pThree = new Product('vivo', 'Enjoy your brand new vivo phone', 500);
var products = [];
products.push(pOne);
products.push(pTwo);
products.push(pThree);
// console.log(products);
var wrap = document.querySelector(".wrap");
window.addEventListener("DOMContentLoaded", function () {
    var displayProducts = products.map(function (item) {
        return "<div class=\"card\">\n        <div class=\"container\">\n          <h4>".concat(item.title, "</h4>\n          <p>Price: $").concat(item.amount, "</p>\n          <p>").concat(item.details, "</p>\n        </div>\n      </div>");
    });
    // console.log(displayMenu);
    var displayProductItem = displayProducts.join("");
    wrap.innerHTML = displayProductItem;
});
