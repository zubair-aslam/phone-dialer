// Create a file named callLogSlice.js
import { createSlice } from '@reduxjs/toolkit';

const callLogSlice = createSlice({
  name: 'callLog',
  initialState: {
    logs: [],
  },
  reducers: {
    addLog: (state, action) => {
      state.logs.push(action.payload);
    },
    deleteLog: (state, action) => {
      state.logs = state.logs.filter((log) => log !== action.payload);
    },
  },
});

export const { addLog, deleteLog } = callLogSlice.actions;
export default callLogSlice.reducer;
