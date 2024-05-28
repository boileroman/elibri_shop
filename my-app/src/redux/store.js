import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice';
import itemSlice from './itemSlice';

export const store = configureStore({
    reducer: {
      product: productSlice,
      item: itemSlice,
    },
  });