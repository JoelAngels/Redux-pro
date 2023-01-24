const store = require("./app/store");

//import actions here
const cakeActions = require("./app/features/cake/cakeSlice").cakeActions;
const icecreamActions =
  require("./app/features/icecream/icecreamSlice").icecreamActions;

console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {});

//dispatch the actions
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.restocked(2));

unsubscribe();
