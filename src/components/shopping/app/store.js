import { configureStore } from '@reduxjs/toolkit';
import timerSlice from '../slices/timer';
import productSlice from '../slices/product';
export const store = configureStore({
  reducer: {
    timer: timerSlice,
    product: productSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
