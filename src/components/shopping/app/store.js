import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import timerSlice from '../slices/timer';

export const store = configureStore({
  reducer: {
    timer: timerSlice,
  },
});
