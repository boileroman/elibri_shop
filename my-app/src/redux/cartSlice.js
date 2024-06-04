import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('cartProducts')) || [],
  totalPrice: JSON.parse(localStorage.getItem('totalPrice')) || 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const isAdd = state.items.find((obj) => obj.itemId === action.payload.itemId);
      if (isAdd) {
        isAdd.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    minusItem: (state, action) => {
      const isAdd = state.items.find((obj) => obj.itemId === action.payload.itemId);

      if (isAdd) {
        isAdd.count--;
        state.totalPrice -= isAdd.price;
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((el) => el.itemId !== action.payload.itemId);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    clearItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, deleteItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
