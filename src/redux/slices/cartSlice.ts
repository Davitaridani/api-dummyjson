import { toastify } from "@/utils/toastConfig";
import { CartProduct, DecreaseQuantity, IncreaseQuantity } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ToastOptions, toast } from "react-toastify";

export interface CartState {
  cart: CartProduct[];
}

const initialState = {
  cart: [],
} as CartState;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      const { id, quantity } = action.payload;
      const existingPoductCart = state.cart.find(
        (product) => product.id === id
      );
      if (existingPoductCart) {
        existingPoductCart.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      // if (quantity > 1) {
      //   const addedProduct = state.cart.find((product) => product.id === id);
      // }
      toast.success("Product added to cart", toastify as ToastOptions);
    },
    increaseQuantity: (state, action: PayloadAction<IncreaseQuantity>) => {
      const existingPoductCart = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (existingPoductCart && existingPoductCart.quantity !== undefined) {
        existingPoductCart.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<DecreaseQuantity>) => {
      const existingPoductCart = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (existingPoductCart && existingPoductCart.quantity !== undefined) {
        existingPoductCart.quantity -= 1;

        if (existingPoductCart.quantity === 0) {
          state.cart = state.cart.filter(
            (product) => product.id !== action.payload.id
          );
          toast.success("Product removed from cart", toastify as ToastOptions);
        }
      }
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
      toast.success("Product removed from cart", toastify as ToastOptions);
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
