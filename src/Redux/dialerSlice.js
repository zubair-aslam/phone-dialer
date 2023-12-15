import { createSlice } from '@reduxjs/toolkit';

const dialerSlice = createSlice({
  name: 'dialer',
  initialState: {
    dialedNumber: '',
  },
  reducers: {
    addToDisplay: (state, action) => {
      state.dialedNumber = action.payload;
    }
  },
});

export const { addToDisplay } = dialerSlice.actions;
export default dialerSlice.reducer;
