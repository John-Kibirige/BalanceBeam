import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../firebase';

console.log('the auth at the moment is ', auth.currentUser);

const user = auth.currentUser;

const initialState = {
  splashScreen: user ? false : true,
  signInScreen: false,
  signUpScreen: false,
  mainScreen: user ? true : false,
};

console.log('the initial state at the moment is ', initialState);

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
