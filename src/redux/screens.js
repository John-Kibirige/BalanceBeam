import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../firebase';

const user = auth.currentUser;

const initialState = {
  splashScreen: user ? false : true,
  signInScreen: false,
  mainScreen: user ? true : false,
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
    setMainScreen: (state, { payload }) => {
      state.mainScreen = payload;
    },
  },
});

export const { setSplashScreen, setSignInScreen, setMainScreen } =
  screensSlice.actions;
export default screensSlice;
