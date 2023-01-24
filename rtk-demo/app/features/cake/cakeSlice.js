const createSlice = require("@reduxjs/toolkit").createSlice;

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

module.exports = cakeSlice.reducer; //generate acton
module.exports.cakeActions = cakeSlice.actions; ////generate reducers
