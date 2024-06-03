import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
      isActive: false,
    },
    reducers: {
      setIsActive: (state, action) => {
        state.isActive = action.payload;
      },
    },
  });

export const { setIsActive } = menuSlice.actions; 

export default menuSlice.reducer;