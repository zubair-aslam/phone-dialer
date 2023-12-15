// store.js
import { configureStore } from "@reduxjs/toolkit";
import callLogReducer from "./callLogSlice";
import dialerReducer from "./dialerSlice";

export const store = configureStore({
  reducer: { callLog: callLogReducer, dialer: dialerReducer },
});
