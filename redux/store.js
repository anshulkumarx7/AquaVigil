import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/Auth";

//create a store and give it reducers
export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});