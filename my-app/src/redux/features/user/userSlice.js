import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: '',
    email: JSON.parse(localStorage.getItem('userEmail')) || '',
    password: '',
    confirmPassword: '',
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '', 
    isAuth: JSON.parse(localStorage.getItem('isAuth')) || false,
  },
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
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
      console.log("Setting isAuth:", action.payload);
      state.isAuth = action.payload;
    }
  },
});

export const {
  setUserName,
  setEmail,
  setPassword,
  setConfirmPassword,
  setOldPassword,
  setNewPassword,
  setConfirmNewPassword,
  setIsAuth,
} = userSlice.actions;

export default userSlice.reducer;
