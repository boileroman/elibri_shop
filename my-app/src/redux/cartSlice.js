import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('cartProducts')) || [],
  totalPrice: JSON.parse(localStorage.getItem('totalPrice')) || 0,
  isSelected: true,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setIsSelected: (state, action) => {
      state.isSelected = action.payload;
    },
    addItem: (state, action) => {
      const isAdd = state.items.find((obj) => obj.productId === action.payload.productId);
      if (isAdd) {
        isAdd.quantity++;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.quantity + sum;
      }, 0);
    },
    minusItem: (state, action) => {
      const isAdd = state.items.find((obj) => obj.productId === action.payload.productId);

      if (isAdd) {
        isAdd.quantity--;
        state.totalPrice -= isAdd.price;
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((el) => el.productId !== action.payload.productId);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.quantity + sum;
      }, 0);
    },
    clearItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, deleteItem, clearItems, minusItem, setIsSelected } = cartSlice.actions;

export default cartSlice.reducer;
