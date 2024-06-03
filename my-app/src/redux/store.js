import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice';
import itemSlice from './itemSlice';
import cartSlice from './cartSlice';
import userSlice from './features/user/userSlice';
import menuSlice from './menuSlice';

export const store = configureStore({
    reducer: {
      product: productSlice,
      item: itemSlice,
      cart: cartSlice,
      user: userSlice,
      menu: menuSlice,
    },
  });