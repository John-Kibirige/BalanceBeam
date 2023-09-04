import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentWindow: 'daily',
  previousWindow: 'daily',
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    changeCurrentWindow: (state, { payload }) => {
      state.currentWindow = payload;
    },
    changePreviousWindow: (state, { payload }) => {
      state.previousWindow = payload;
    },
  },
});

export const { changeCurrentWindow, changePreviousWindow } =
  navbarSlice.actions;
export default navbarSlice;
