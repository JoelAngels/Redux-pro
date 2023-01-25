const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

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
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIcecreams--;
    });
  },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
