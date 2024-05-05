import { RootState } from "@/redux/store";
import { getTotalProducts } from "@/utils/cartProducts";
import { useSelector } from "react-redux";

const OrderProducts = () => {
  const cartItem = useSelector((state: RootState) => state.cart.cart);
  console.log("cartItem", cartItem);
  const quantity = getTotalProducts(cartItem).totalQuantity;
  console.log("qty", quantity);
  const price = getTotalProducts(cartItem).totalPrice;
  console.log("price", price);

  return (
    <>
      <div id="summary" className="w-1/4 px-8 py-10">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">
            Items {quantity}
          </span>
          <span className="font-semibold text-sm">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(price)}
          </span>
        </div>
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total Price</span>
            <span>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(price)}
            </span>
          </div>
          <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderProducts;
