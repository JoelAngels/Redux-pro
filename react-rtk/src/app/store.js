import { configureStore } from "@reduxjs/toolkit";

// const { getDefaultMiddleware } = require("@reduxjs/toolkit");

import cakeReducer from "../app/features/cake/cakeSlice";
import pizzaReducer from "../app/features/pizza/pizzaSlice";
import icecreamReducer from "../app/features/icecream/icecreamSlice";
import userReducer from "../app/features/user/userSlice";

// const logger = reduxLogger.createLogger();
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    pizza: pizzaReducer,
    user: userReducer,
  },
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), //The concat() method is used to merge two or more arrays.
});

export default store;
