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

    showDeleteDialog: (state) => {
      state.deleteDialog = true;
    },
    hideDeleteDialog: (state) => {
      state.deleteDialog = false;
    },
  },
});

export const { toggleFormDisplay, showDeleteDialog, hideDeleteDialog } =
  popupSlice.actions;
export default popupSlice;
