import { createSlice } from "@reduxjs/toolkit";

//initial state for the cake slice

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,

  reducers: {
    //perform direct mutations on the state === immer used under the hood
    ordered: (state) => {
      state.numOfCakes--;
    },

    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer; //generate acton
export const { ordered, restocked } = cakeSlice.actions; ///generate reducers
