export let carthtml = "",
  cartList = [];

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
