import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  quantity: 1,
  total: 0,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export default productSlice.reducer;

export const { addProduct } = productSlice.actions;

export const getAllProduct = (state) =>
  state.product.products?.slice().sort((a, b) => b.id - a.id);

export const getQuantity = (state) => state.product.quantity;
export const getTotal = (state) => state.product.total;

export const selectProductById = (state, productId) =>
  state.product.products.find(
    (prod) => prod.id === productId && prod.productPrice
  );
