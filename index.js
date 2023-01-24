const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

//Define a string constants that indicated the type of the action,

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";
//lets create our action which is an object with a type property
//Action creator is a function that returns an action

function orderCake() {
  return {
    //type property
    type: CAKE_ORDERED,
    payload: 1, //Payload is the data that your reducer will use to update the state
  };
}

function restockCAKE(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

function restockIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

//state of our application but we need to create a store that will hold this object
// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20,
// };

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

//(previousState, action) => newState;

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        //make a copy of the state object and only update the number of cakes,
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    //Restocking a cake after it has been bought from the shopkeeper above
    case CAKE_RESTOCKED:
      return {
        ...state,
        //Payload is the data that your reducer will use to update the state
        numOfCakes: state.numOfCakes + action.payload,
      };
    //When ice cream is ordered we minus one ice cream from shopkeeper

    default:
      return state;
  }
};
//===================================IceCream Reducer ========================================

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    //When ice cream is ordered we minus one ice cream from shopkeeper
    case ICECREAM_ORDERED:
      return {
        ...state,
        //Payload is the data that your reducer will use to update the state
        numOfIceCreams: state.numOfIceCreams - 1,
      };

    case ICECREAM_RESTOCKED:
      return {
        ...state,
        //Payload is the data that your reducer will use to update the state
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

//Resposiblity No 1 => Redux holding the application state through reducer down below

const store = createStore(rootReducer);
//let us now get state

console.log("Initial State", store.getState()); //this gives us the initial state of our app

//subscribe to changes in the store (4RESPONSIBLITY)

const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

//DISPATCH AN ACTION MEANING, WE UPDATE THE STATE, its accepts an action as it parameter

store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// //Restocked More
// store.dispatch(restockCAKE(3));

//Turns an object whose values are action creators, into an object with the same keys, but with every action creator wrapped into a dispatch call so they may be invoked directly.
const actions = bindActionCreators(
  { orderCake, restockCAKE, orderIceCream, restockIceCream },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.restockCAKE(3); //increases restock from 7 back to 10
actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(2);

//The subscriptions are snapshotted just before every dispatch() call
unsubscribe();

//=last lets unsubscribe from the store by calling the function retuned by the subscribe method==

/* 
An example is a Cake Shop

Customer => Order a cake
ShopKeeper => Box a cake from the shelf 

=> Store holds the state of your application
=> Cake ordered => Action in redux => describles what happened, 
=> ShopKeeper => Reducer => The shopkeeper who ties and actions and the store together



//ShopKeeper here we go 
const reducer = (state = initiaLState, action) => {
    switch(action.type) {
        case CAKE_ORDERED: 
        return {
            numOfCakes: state.numOfCakes - 1
        }
    }
}

so reducer => Reducer - (previousState, action) => newState

//Three Core Concepts

A store that holds the state of your application
An action that describles what happened in the application -=> dispatching an action 
A reducer which handles the action and decided how to update the state
     



=========Actions=============
The only way your application can interact with the store and it holds info about the redux store

Plain js objects that describes something that happened in the application, 
 => the type property is defined in string constants

 =======Reducers==========
 Specify how the app's state changes in response to actions sent to the store,
 actions only describe what happens but dont describe how the applications state changes

 so its a function that accepts state and action as arguments and returns the next state of the application

 (previousState, action) => newState
/*

===========================Redux Store================================
One store for the whole applciation

Responsiblilites

=> Holds application state

=> Allows access to state via getState()

=> Allows state to be updated via dispatch(action )
// 
=> Registers listeners via subscribe (listener)

https://youtu.be/ku4c1bMtQMk
https://www.youtube.com/@codewithvishal2968/videos
https://youtu.be/b88Z5POQBwI
https://youtu.be/HyZzCHgG3AY
*/

//try to understand how it works =>
