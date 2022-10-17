console.log("Hello World");
var products = [
    {
        id: 1,
        title: "Black berry phone",
        price: 15.99,
        img: "./images/blackberry.jpg",
        desc: "Enjoy your blackberry phone"
    },
    {
        id: 2,
        title: "Iphone 13",
        price: 120.99,
        img: "./images/iphone.jpg",
        desc: "Enjoy your brand new iphone 13"
    },
    {
        id: 3,
        title: "one plus",
        price: 80.0,
        img: "./images/oneplus.jpg",
        desc: "Enjoy your one plus nord phone"
    },
    {
        id: 4,
        title: "Oppo",
        price: 30.0,
        img: "./images/oppo.jpg",
        desc: "Enjoy your oppo mobile phone"
    },
    {
        id: 5,
        title: "real me",
        price: 10.0,
        img: "./images/realme.jpg",
        desc: "Enjoy your realme mobile phone"
    },
    {
        id: 6,
        title: "Samsung",
        price: 50.0,
        img: "./images/samsung.jpg",
        desc: "Enjoy your samsung mobile phone"
    },
];
var wrap = document.querySelector(".wrap");
window.addEventListener("DOMContentLoaded", function () {
    var displayMenu = products.map(function (item) {
        return "<div class=\"card\">\n        <img src=".concat(item.img, " alt=").concat(item.title, "  />\n        <div class=\"container\">\n          <h4>").concat(item.title, "</h4>\n          <p>Price: $").concat(item.price, "</p>\n          <p>").concat(item.desc, "</p>\n        </div>\n      </div>");
    });
    console.log(displayMenu);
    var displayMenuItem = displayMenu.join("");
    wrap.innerHTML = displayMenuItem;
});
