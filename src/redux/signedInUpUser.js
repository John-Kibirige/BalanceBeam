import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  signedInUpUser: '',
};

const signedInUpUserSlice = createSlice({
  name: 'signedInUpUser',
  initialState,
  reducers: {
    setSignedInUpUser: (state, { payload }) => {
      state.signedInUpUser = payload;
    },
  },
});

export const { setSignedInUpUser } = signedInUpUserSlice.actions;
export default signedInUpUserSlice;
