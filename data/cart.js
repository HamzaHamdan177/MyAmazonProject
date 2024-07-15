export let carthtml = "",
  // cartList = [
  //   {
  //     id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  //     quantity: 2,
  //   },
  //   {
  //     id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  //     quantity: 1,
  //   },
  // ];
  cartList = JSON.parse(localStorage.getItem("cartList"));

export function MatchingList(prodId) {
  let Matchingnames;
  cartList.forEach((cartItem) => {
    if (prodId === cartItem.productId) {
      Matchingnames = cartItem;
    }
  });

  if (Matchingnames) {
    Matchingnames.quantity += 1;
  } else {
    cartList.push({
      productId: prodId,
      quantity: 1,
    });
  }
}
export function removeFromCart(productId) {
  let newCart = [];
  cartList.forEach((item) => {
    if (productId != item.productId) newCart.push(item);
  });
  cartList = newCart;
  localStorage.setItem("cartList", JSON.stringify(cartList));
}
