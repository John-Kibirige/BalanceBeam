import { configureStore } from '@reduxjs/toolkit';
import popupSlice from './popup';
import deleteSlice from './delete';
import navbarSlice from './navbar';

const store = configureStore({
  reducer: {
    popup: popupSlice.reducer,
    delete: deleteSlice.reducer,
    navbar: navbarSlice.reducer,
  },
});

export default store;
