import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formDialog: false,
  deleteDialog: false,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    toggleFormDisplay: (state) => {
      state.formDialog = !state.formDialog;
    },

    toggleDeleteDisplay: (state) => {
      state.deleteDialog = !state.deleteDialog;
    },
  },
});

export const { toggleFormDisplay, toggleDeleteDisplay } = popupSlice.actions;
export default popupSlice;
