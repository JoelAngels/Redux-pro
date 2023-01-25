import { createSlice } from "@reduxjs/toolkit";

import { ordered as cakeOrdered } from "../cake/cakeSlice";

//initalize state

const initialState = {
  numOfIcecreams: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,

  reducers: {
    //ordered and restocked are reducers
    ordered: (state) => {
      state.numOfIcecreams--;
    },

    restocked: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },

  //Allows createslice to repsond to other actions types besides the types it has generated

  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIcecreams--;
    });
  },
});

export default icecreamSlice.reducer;

export const { ordered, restocked } = icecreamSlice.actions;
