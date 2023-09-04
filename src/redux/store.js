import { configureStore } from '@reduxjs/toolkit';
import popupSlice from './popup';
import deleteSlice from './delete';

const store = configureStore({
  reducer: {
    popup: popupSlice.reducer,
    delete: deleteSlice.reducer,
  },
});

export default store;
