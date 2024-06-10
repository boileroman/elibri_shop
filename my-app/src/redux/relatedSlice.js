import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    related:[],
};

export const relatedSlice = createSlice({
    name: 'related',
    initialState,
    reducers: {
        setRelated: (state, action) =>{
            state.related = action.payload
        }
    },
})

export const { setRelated } = relatedSlice.actions

export default relatedSlice.reducer