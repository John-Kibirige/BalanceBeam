import { configureStore } from '@reduxjs/toolkit';
import popupSlice from './popup';
import deleteSlice from './delete';
import navbarSlice from './navbar';
import yearSlice from './year';
import signedInUpUserSlice from './signedInUpUser';

const store = configureStore({
  reducer: {
    popup: popupSlice.reducer,
    delete: deleteSlice.reducer,
    navbar: navbarSlice.reducer,
    year: yearSlice.reducer,
    signedInUpUser: signedInUpUserSlice.reducer,
  },
});

export default store;
