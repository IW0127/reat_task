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
    incrementQuantity: (state) => {
      state.quantity++;
    },
    decrementQuantity: (state) => {
      state.quantity--;
    },
    incrementTotal: (state, action) => {
      state.products.find((prod) => {
        if (prod.id === action.payload) {
          const price = Number(prod.productPrice);
          state.total += price;
          return;
        }
      });
    },
    decrementTotal: (state, action) => {
      state.products.find((prod) => {
        if (prod.id === action.payload) {
          const price = Number(prod.productPrice);
          state.total -= price;
          return;
        }
      });
    },
  },
});

export default productSlice.reducer;

export const {
  addProduct,
  incrementQuantity,
  decrementQuantity,
  incrementTotal,
  decrementTotal,
} = productSlice.actions;

export const getAllProduct = (state) => state.product.products;

export const getQuantity = (state) => state.product.quantity;

export const getTotal = (state) => state.product.total;

export const selectProductById = (state, productId) =>
  state.product.products.find(
    (prod) => prod.id === productId && prod.productPrice
  );
