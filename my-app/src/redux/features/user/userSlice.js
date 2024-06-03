import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '', 
    isAuth: false,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => { 
      state.confirmPassword = action.payload;
    },
    setOldPassword: (state, action) => {
      state.oldPassword = action.payload;
    },
    setNewPassword: (state, action) => {
      state.newPassword = action.payload;
    },
    setConfirmNewPassword: (state, action) => { 
      state.confirmNewPassword = action.payload;
    },
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    }
  },
});

export const { setName, setEmail, setPassword, setConfirmPassword, setOldPassword, setNewPassword, setConfirmNewPassword, setIsAuth } = userSlice.actions; 

export default userSlice.reducer;
