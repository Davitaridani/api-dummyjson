import { Products } from "./productType";

export interface ProductsState {
  dataProducts: Products[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

export interface CartProduct {
  id: number;
  quantity: number;
}

export interface CartState {
  cart: CartProduct[];
}

export interface IncreaseQuantity {
  id: number;
}

export interface DecreaseQuantity {
  id: number;
}