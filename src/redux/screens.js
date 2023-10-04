import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  splashScreen: true,
  signInScreen: false,
  signUpScreen: false,
  mainScreen: false,
};

const screensSlice = createSlice({
  name: 'screens',
  initialState,
  reducers: {
    setSplashScreen: (state, { payload }) => {
      state.splashScreen = payload;
    },
    setSignInScreen: (state, { payload }) => {
      state.signInScreen = payload;
    },
    setSignUpScreen: (state, { payload }) => {
      state.signUpScreen = payload;
    },
    setMainScreen: (state, { payload }) => {
      state.mainScreen = payload;
    },
  },
});

export const {
  setSplashScreen,
  setSignInScreen,
  setSignUpScreen,
  setMainScreen,
} = screensSlice.actions;
export default screensSlice;
