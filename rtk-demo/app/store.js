//create store and attach the reducer

const configureStore = require("@reduxjs/toolkit").configureStore;
const { getDefaultMiddleware } = require("@reduxjs/toolkit");
// const reduxLogger = require("redux-logger");
const cakeReducer = require("./features/cake/cakeSlice");
const icecreamReducer = require("./features/icecream/icecreamSlice");

const pizzaReducer = require("./features/pizza/pizzaSlice");

// const logger = reduxLogger.createLogger();
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    pizza: pizzaReducer,
  },
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), //The concat() method is used to merge two or more arrays.
});

module.exports = store;
