import { cartList, removeFromCart } from "../data/cart.js";
import { productList } from "../data/products.js";
import { moneyCurrency } from "./utils/money.js";

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
            <div class="delivery-date">Delivery date: Tuesday, June 21</div>

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
                    MatchingList.quantity
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
                </div>
                <div class="delivery-option">
                  <input
                    type="radio"
                    checked
                    class="delivery-option-input"
                    name="delivery-option-${MatchingList.id}"
                  />
                  <div>
                    <div class="delivery-option-date">Tuesday, June 21</div>
                    <div class="delivery-option-price">FREE Shipping</div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input
                    type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${MatchingList.id}"
                  />
                  <div>
                    <div class="delivery-option-date">Wednesday, June 15</div>
                    <div class="delivery-option-price">$4.99 - Shipping</div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input
                    type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${MatchingList.id}"
                  />
                  <div>
                    <div class="delivery-option-date">Monday, June 13</div>
                    <div class="delivery-option-price">$9.99 - Shipping</div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
});

//console.log(producthtml);
document.querySelector(".order-summary").innerHTML = producthtml;
document.querySelectorAll(".js-delete").forEach((link) => {
  link.addEventListener("click", () => {
    const linkid = link.dataset.productId;
    removeFromCart(linkid);
    document.querySelector(`.js-cart-item${linkid}`).remove();
  });
});
