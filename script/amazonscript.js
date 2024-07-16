// productgen();
//my way !!!
// //'6-piece-white-dinner-plate-set','6-Piece Nonstick, Carbon Steel Oven...',45,175,34.99
// //image,name,rateimage,rate,price
// // to call this function image (just put the name)//name (just put the name)//rateimage(put a number between 0-50 and 5 between each only )//rate(just a number)//price (just a number)
// function productgen(image,name,rateimage,rate,price){
//     let prodhtml=document.querySelector(".product-container");
//     let prodhtmlCopy = prodhtml.cloneNode(true);
//      prodhtmlCopy.querySelector(".product-image-container").innerHTML=`<img class="product-image"
//      src="images/products/${image}.jpg">`;
//      prodhtmlCopy.querySelector(".product-name").innerHTML=name
//      prodhtmlCopy.querySelector(".imagerating-js").innerHTML=`<img class="product-rating-stars"
//      src="images/ratings/rating-${rateimage}.png"></div>`;
//     prodhtmlCopy.querySelector(".product-rating-count").innerHTML=rate;
//      prodhtmlCopy.querySelector(".product-price").innerHTML="$"+price;
//     document.querySelector(".products-grid").innerHTML+=`<div class="product-container">${prodhtmlCopy.innerHTML}</div>`;

// }

import { cartList, carthtml, MatchingList } from "../data/cart.js";
import { productList } from "../data/products.js";
import { moneyCurrency } from "./utils/money.js";
let cartsetter = "",
  counter = 1,
  producthtml = "";
// export let cartquantity = 0;

updateCartQuantity();
console.log(cartList);
productList.forEach((product) => {
  producthtml += `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
           ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${moneyCurrency(product.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer js-product-spacer"></div>

          <div class="added-to-cart js-added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-button-primary" data-product-id="${
            product.id
          }">
            Add to Cart
          </button>
        </div>`;
});
document.querySelector(".js-products-grid").innerHTML = producthtml;

// button js
document.querySelectorAll(".js-button-primary").forEach((button, index) => {
  button.addEventListener("click", () => {
    const prodId = button.dataset.productId;

    MatchingList(prodId);
    localStorage.setItem("cartList", JSON.stringify(cartList));
    //localStorage.clear();
    addedToList(index);
    updateCartQuantity();
    counter++;
  });
});

function addedToList(index) {
  let addedbutton = document.querySelectorAll(".js-added-to-cart");
  addedbutton[index].classList.add("added-to-cart-onclick");
  setTimeout(() => {
    addedbutton[index].classList.remove("added-to-cart-onclick");
  }, 2000);
}
function updateCartQuantity() {
  let cartquantity = 0;
  cartList.forEach((cartItem) => {
    cartquantity += cartItem.quantity;
    document.querySelector(".cart-quantity").innerHTML = cartquantity;
  });
}
