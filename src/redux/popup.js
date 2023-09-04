import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formDialog: false,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    toggleFormDisplay: (state) => {
      state.formDialog = !state.formDialog;
    },
  },
});

export const { toggleFormDisplay } = popupSlice.actions;
export default popupSlice;
