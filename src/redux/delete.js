import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  deleteDialog: false,
  itemToDelete: '',
};

const deleteSlice = createSlice({
  name: 'delete',
  initialState,
  reducers: {
    showDeleteDialog: (state, action) => {
      state.deleteDialog = true;
      state.itemToDelete = action.payload;
    },
    removeDeleteDialog: (state) => {
      state.deleteDialog = false;
      state.itemToDelete = '';
    },
  },
});

export const { showDeleteDialog, removeDeleteDialog } = deleteSlice.actions;
export default deleteSlice;
