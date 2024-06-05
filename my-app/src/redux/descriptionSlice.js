import { createSlice } from "@reduxjs/toolkit";

export const descriptionSlice = createSlice({
    name: 'description',
    initialState: {
      isDescriptionActive: false,
    },
    reducers: {
      setIsDescriptionActive: (state, action) => {
        state.isDescriptionActive = action.payload;
      },
    },
  });

export const { setIsDescriptionActive } = descriptionSlice.actions; 

export default descriptionSlice.reducer;