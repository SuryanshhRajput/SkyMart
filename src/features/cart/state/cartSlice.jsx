import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addCartApi } from "../api/cartApi";

export const addCartProduct = createAsyncThunk(
  "cart/addProduct",
  async ({ product, userId }, { getState }) => {
    const currentProducts = getState().cart.products;
    const existingProduct = currentProducts.find(
      (item) => item.id === product.id,
    );
    const products = existingProduct
      ? currentProducts.map((item) =>
          item.id === product.id
            ? { id: item.id, quantity: item.quantity + 1 }
            : { id: item.id, quantity: item.quantity },
        )
      : [
          ...currentProducts.map((item) => ({
            id: item.id,
            quantity: item.quantity,
          })),
          { id: product.id, quantity: 1 },
        ];

    return addCartApi({ userId, products });
  },
  {
    condition: (_, { getState }) => !getState().cart.isAdding,
  },
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    id: null,
    products: [],
    userId: null,
    isAdding: false,
    error: null,
  },
  reducers: {
    removeCartProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload,
      );
    },
    clearCart: (state) => {
      state.id = null;
      state.products = [];
      state.userId = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCartProduct.pending, (state) => {
        state.isAdding = true;
        state.error = null;
      })
      .addCase(addCartProduct.fulfilled, (state, action) => {
        state.isAdding = false;
        state.id = action.payload.id;
        state.userId = action.payload.userId;
        state.products = action.payload.products;
      })
      .addCase(addCartProduct.rejected, (state, action) => {
        state.isAdding = false;
        state.error =
          action.error.message || "Unable to add this product to your cart.";
      });
  },
});

export const { clearCart, removeCartProduct } = cartSlice.actions;
export default cartSlice.reducer;
