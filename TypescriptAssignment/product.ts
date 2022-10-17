console.log("Hello World");

let products: any[] = [
  {
    id: 1,
    title: "Black berry phone",
    price: 15.99,
    img: "./images/blackberry.jpg",
    desc: "Enjoy your blackberry phone",
  },
  {
    id: 2,
    title: "Iphone 13",
    price: 120.99,
    img: "./images/iphone.jpg",
    desc: "Enjoy your brand new iphone 13",
  },
  {
    id: 3,
    title: "one plus",
    price: 80.0,
    img: "./images/oneplus.jpg",
    desc: "Enjoy your one plus nord phone",
  },
  {
    id: 4,
    title: "Oppo",
    price: 30.0,
    img: "./images/oppo.jpg",
    desc: "Enjoy your oppo mobile phone",
  },
  {
    id: 5,
    title: "real me",
    price: 10.0,
    img: "./images/realme.jpg",
    desc: "Enjoy your realme mobile phone",
  },
  {
    id: 6,
    title: "Samsung",
    price: 50.0,
    img: "./images/samsung.jpg",
    desc: "Enjoy your samsung mobile phone",
  },
];

const wrap = document.querySelector(".wrap");

window.addEventListener("DOMContentLoaded", function () {
  let displayMenu = products.map(function (item) {
    return `<div class="card">
        <img src=${item.img} alt=${item.title}  />
        <div class="container">
          <h4>${item.title}</h4>
          <p>Price: $${item.price}</p>
          <p>${item.desc}</p>
        </div>
      </div>`;
  });
  console.log(displayMenu);
  let displayMenuItem = displayMenu.join("");
  wrap.innerHTML = displayMenuItem; 
  
});
