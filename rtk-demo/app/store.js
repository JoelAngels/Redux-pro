//create store and attach the reducer

import { configureStore } from "@reduxjs/toolkit";

// const { getDefaultMiddleware } = require("@reduxjs/toolkit");

import cakeReducer from ("./features/cake/cakeSlice")
import pizzaReducer from ("./features/pizza/pizzaSlice")
import icecreamReducer from ("./features/icecream/icecreamSlice")
import userReducer from ("./features/user/userSlice")


// const logger = reduxLogger.createLogger();
const store = configureStore({
  reducer: {
    // cake: cakeReducer,
    // icecream: icecreamReducer,
    // pizza: pizzaReducer,
    user: userReducer,
  },
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), //The concat() method is used to merge two or more arrays.
});

export default store;
