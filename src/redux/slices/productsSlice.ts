import { ProductsState } from "@/types";
import { Products } from "@/types/productType";
import { intanceAxios } from "@/services/apiConfig";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  dataProducts: [],
  status: "idle",
  error: null,
} as ProductsState;

export const fetchProducts = createAsyncThunk<Products[], void>(
  "products/fetchProducts",
  async () => {
    const response = await intanceAxios.get<Products[]>("/products");
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Products[]>) => {
          state.status = "succeeded";
          state.dataProducts = action.payload;
          // console.log(action.payload);
          // console.log(action);
        },
      )
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default productsSlice.reducer;
