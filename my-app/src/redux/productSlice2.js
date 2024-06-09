import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [],
};

export const productSlice2 = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct: (state, action) =>{
            state.product = action.payload
        }
    },
})

export const { setProduct } = productSlice2.actions

export default productSlice2.reducer