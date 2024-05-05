"use client";
import OrderProducts from "@/components/OrderProducts";
import {
  decreaseQuantity,
  increaseQuantity,
  removeProductFromCart,
} from "@/redux/slices/cartSlice";
import { Products } from "@/types/productType";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const productCart = useSelector((state: any) => state.cart.cart);

  console.log(productCart);

  const handleIncreaseQuantity = (product: number) => {
    dispatch(increaseQuantity({ id: product }));
  };

  const handleDecreaseQuantity = (product: number) => {
    dispatch(decreaseQuantity({ id: product }));
  };

  const handleRemoveProduct = (productId: number) => {
    const updatedCart = productCart.filter(
      (item: Products) => item.id === productId
    );
    console.log("updatedCart", updatedCart);
    if (updatedCart) {
      if (updatedCart.quantity > 1) {
        dispatch(decreaseQuantity({ id: productId }));
      } else {
        dispatch(removeProductFromCart(productId));
      }
    }
  };

  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">3 Items</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                Quantity
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                Price
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                Total
              </h3>
            </div>

            {productCart?.map((product: Products) => (
              <div
                className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                key={product.id}
              >
                <div className="flex w-2/5">
                  <div className="w-20">
                    <Image
                      className="h-24"
                      src={product.thumbnail}
                      alt={product.title}
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{product.title}</span>
                    <button
                      className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                      onClick={() => handleRemoveProduct(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <button onClick={() => handleDecreaseQuantity(product.id)}>
                    <svg
                      className="fill-current text-gray-600 w-3"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </button>

                  <input
                    className="mx-2 border text-center w-8"
                    value={product.quantity}
                    readOnly
                  />
                  <button onClick={() => handleIncreaseQuantity(product.id)}>
                    <svg
                      className="fill-current text-gray-600 w-3"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </button>
                </div>
                <span className="text-center w-1/5 font-semibold text-sm">
                  ${product.price}
                </span>
                <span className="text-center w-1/5 font-semibold text-sm">
                  ${product.price}
                </span>
              </div>
            ))}

            <Link
              href="/"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </div>

          <OrderProducts />
        </div>
      </div>
    </>
  );
};

export default Cart;
