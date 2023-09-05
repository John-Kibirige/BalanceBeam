import { configureStore } from '@reduxjs/toolkit';
import popupSlice from './popup';
import deleteSlice from './delete';
import navbarSlice from './navbar';
import yearSlice from './year';

const store = configureStore({
  reducer: {
    popup: popupSlice.reducer,
    delete: deleteSlice.reducer,
    navbar: navbarSlice.reducer,
    year: yearSlice.reducer,
  },
});

export default store;
