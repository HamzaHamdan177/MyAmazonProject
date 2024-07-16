import { cartList, MatchingList, removeFromCart } from "../data/cart.js";
import { productList } from "../data/products.js";
import { moneyCurrency } from "./utils/money.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
//import { cartquantity } from "./amazonscript.js";
const time = dayjs(),
  deliverydateCheap = time.add(7, "day").format("dddd,MMMM,D"),
  deliverydateMid = time.add(5, "day").format("dddd,MMMM,D"),
  deliverydateExpensive = time.add(3, "day").format("dddd,MMMM,D");

let producthtml = "";

cartList.forEach((cartItem, index) => {
  const cartid = cartItem.productId;
  let MatchingList;

  productList.forEach((prodItem) => {
    if (cartid === prodItem.id) {
      MatchingList = prodItem;
    }
  });

  producthtml += `<div class="cart-item-container js-cart-item${
    MatchingList.id
  }">
            <div class="delivery-date js-delivery-title">Delivery date: ${3}</div>

            <div class="cart-item-details-grid">
              <img
                class="product-image"
                src="${MatchingList.image}"
              />

              <div class="cart-item-details">
                <div class="product-name">
                  ${MatchingList.name}
                </div>
                <div class="product-price">$${moneyCurrency(
                  MatchingList.priceCents
                )}</div>
                <div class="product-quantity">
                  <span> Quantity: <span class="quantity-label">${
                    cartItem.quantity
                  }</span> </span>
                  <span class="update-quantity-link link-primary js1">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete" data-product-id=${
                    MatchingList.id
                  }>
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div class="js-deliverydate">
                <div class="delivery-option">
                  <input
                    type="radio"
                    checked
                    class="delivery-option-input js-option"
                    name="delivery-option-${MatchingList.id}"
                  />
                  <div>
                    <div class="delivery-option-date js-delivery">${deliverydateCheap}</div>
                    <div class="delivery-option-price">FREE Shipping</div>
                  </div>
                </div class="js-deliverydate">
                <div class="delivery-option">
                  <input
                    type="radio"
                    class="delivery-option-input class="js-option" "
                    name="delivery-option-${MatchingList.id}"
                  />
                  <div>
                    <div class="delivery-option-date js-delivery">${deliverydateMid}</div>
                    <div class="delivery-option-price">$4.99 - Shipping</div>
                  </div>
                </div class="js-deliverydate">
                <div class="delivery-option">
                  <input
                    type="radio"
                    class="delivery-option-input class="js-option""
                    name="delivery-option-${MatchingList.id}"
                  />
                  <div>
                    <div class="delivery-option-date js-delivery">${deliverydateExpensive}</div>
                    <div class="delivery-option-price">$9.99 - Shipping</div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
  localStorage.setItem("checkout", cartList);
});
document.querySelector(".order-summary").innerHTML = producthtml;
document.querySelectorAll(".js-delete").forEach((link) => {
  link.addEventListener("click", () => {
    const linkid = link.dataset.productId;
    removeFromCart(linkid);
    document.querySelector(`.js-cart-item${linkid}`).remove();
  });
});
function updatePayment() {
  items = document.querySelector(".js-item");
  //items.innerHTML = cartquantity;
  shipping = document.querySelector(".js-shipping");
  beforetax = document.querySelector(".js-beforetax");
  tax = document.querySelector(".js-tax");
  ordertoal = document.querySelector(".js-total");
}
// document.querySelectorAll(".js-option").forEach((option) => {
//   let Check = document.querySelector(".js-option");
//   console.log(Check.checked);
//   if (Check.checked) {
//     document.querySelector(".js-delivery-title").innerHTML =
//       document.querySelector(".js-delivery").innerHTML;
//   }
// });

// document.querySelectorAll(".js-deliverydate").forEach((option) => {
//   option.addEventListener("click", () => {
//     console.log("hi");
//   });
// });
