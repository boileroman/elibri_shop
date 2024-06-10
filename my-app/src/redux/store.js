import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice';
import itemSlice from './itemSlice';
import cartSlice from './cartSlice';
import userSlice from './features/user/userSlice';
import menuSlice from './menuSlice';
import orderSlice from './orderSlice';
import descriptionSlice from './descriptionSlice';
import productSlice2 from './productSlice2';
import searchSlice from './searchSlice';
import relatedSlice from './relatedSlice';

export const store = configureStore({
    reducer: {
      products: productSlice,
      product: productSlice2,
      items: itemSlice,
      cart: cartSlice,
      user: userSlice,
      menu: menuSlice,
      orders: orderSlice,
      description: descriptionSlice,
      search: searchSlice,
      related: relatedSlice,
    },
  });