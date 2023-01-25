const createSlice = require("@reduxjs/toolkit").createSlice;

//define the state

const initialState = {
  numOfPizzas: 5,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,

  reducers: {
    ordered: (state) => {
      state.numOfPizzas--;
    },

    restocked: (state, action) => {
      state.numOfPizzas += action.payload;
    },
  },
});

module.exports = pizzaSlice.reducer; //export reducer
module.exports.pizzaActions = pizzaSlice.actions;
