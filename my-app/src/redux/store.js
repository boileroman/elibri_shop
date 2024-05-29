import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice';
import itemSlice from './itemSlice';
import cartSlice from './cartSlice';

export const store = configureStore({
    reducer: {
      product: productSlice,
      item: itemSlice,
      cart: cartSlice,
    },
  });