import { configureStore } from "@reduxjs/toolkit";
import count from "./countSlice";
import basket from "./basketSlice";
export const store = configureStore({
  reducer: {
    count,
    basket,
  },
});
