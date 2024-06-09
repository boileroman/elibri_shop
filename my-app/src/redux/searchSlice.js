import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: JSON.parse(localStorage.getItem('search')) || '',
    submit: false,
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setValue: (state, action) =>{
            state.value = action.payload
        },
        setSubmit:(state, action) =>{
            state.submit = action.payload
        },
    },
})

export const { setValue, setSubmit } = searchSlice.actions

export default searchSlice.reducer