import { createSlice } from "@reduxjs/toolkit";

const initData = { number: 0 };

const countSlice = createSlice({
  name: "x",
  initialState: initData,
  reducers: {
    increase(state, action) {
      state.number = state.number + action.payload;
    },
    decrease(state, action) {
      state.number = state.number - action.payload;
    },
  },
});

const { actions, reducer } = countSlice;
export const { increase, decrease } = actions;

export const CountState = (state) => state.count;
export default reducer;
