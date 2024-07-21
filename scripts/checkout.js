import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import "../data/cart-class.js";
import { loadProducts } from "../data/products.js";
/*
async function loadPage() {
  console.log("MWAh");
  await loadProducts();
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();
*/
new Promise((resolve) => {
  console.log("start the promise");
  loadProducts(() => {
    resolve();
  });
}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});

// loadProducts(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// });
