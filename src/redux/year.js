import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  year: '',
};

const yearSlice = createSlice({
  name: 'year',
  initialState,
  reducers: {
    setYear: (state, action) => {
      state.year = action.payload;
    },
    unSetYear: (state) => {
        state.year = ''
    }
  },
});

export const { setYear, unSetYear } = yearSlice.actions;
export default yearSlice;
