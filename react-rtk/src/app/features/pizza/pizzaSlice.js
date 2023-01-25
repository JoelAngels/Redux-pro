import { createSlice } from "@reduxjs/toolkit";

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

export default pizzaSlice.reducer; //export reducer
export const { ordered, restocked } = pizzaSlice.actions;
