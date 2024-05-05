export const getTotalProducts = (cartItem: any) => {
  let totalQuantity = 0;
  let totalPrice = 0;

  cartItem.forEach((item: any) => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });

  return { totalQuantity, totalPrice };
};