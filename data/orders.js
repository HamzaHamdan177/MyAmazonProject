export const orders = loadFromStorage() || [];

export function addOrder(order) {
  orders.unshift(order);
  saveToStorage();
  console.log(orders);
}
function saveToStorage() {
  localStorage.setItem("Order", JSON.stringify(orders));
}
function loadFromStorage() {
  return JSON.parse(localStorage.getItem("orders"));
}
