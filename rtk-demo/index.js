const store = require("./app/store");

//import actions here
// const cakeActions = require("./app/features/cake/cakeSlice").cakeActions;
// const icecreamActions =
//   require("./app/features/icecream/icecreamSlice").icecreamActions;

// const pizzaActions = require("./app/features/pizza/pizzaSlice").pizzaActions;

const fetchUsers = require("./app/features/user/userSlice").fetchUsers;

console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("updates state", store.getState());
});

//dispatch the actions
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));

// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restocked(2));

// store.dispatch(pizzaActions.ordered());
// store.dispatch(pizzaActions.ordered());
// store.dispatch(pizzaActions.restocked(2));

store.dispatch(fetchUsers());

// unsubscribe();
