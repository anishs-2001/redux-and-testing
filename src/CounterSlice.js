import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "count",
  initialState: { value: 0 },
  reducers: {
    increment(state, action) {
      return { value: state.value + action.payload };
    },
    decrement(state, action) {
      return { value: state.value - action.payload };
    },
  },
});

export const { increment, decrement } = counter.actions;
export default counter.reducer;
