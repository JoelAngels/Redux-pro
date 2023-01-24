const redux = require("redux");
const produce = require("immer").produce;

const initialState = {
  name: "Joxel Ramirez",
  address: {
    street: "123 Main ST",
    city: "Carlifonia",
    state: "MA",
  },
};

//DEFINE CONSTANT FOR THE ACTION TYPE

const STREET_UPDATED = "STREET_UPDATED";

//Define action creator which return the action object

const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

//Define Reducer to handle this action

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //When ice cream is ordered we minus one ice cream from shopkeeper
    case STREET_UPDATED:
      //draft copy of the state : updates state directly with immer
      produce(state, (draft) => {
        draft.address.street = action.payload; //      //Payload is the data that your reducer will use to update the state
      });
    default: {
      return state;
    }
  }
};
const store = redux.createStore(reducer);
console.log("Initial State", store.getState());

//this function will fire everytime the state changes
const subscribe = store.subscribe(() => {
  console.log("Update State", store.getState());
});

store.dispatch(updateStreet("456 Main St"));

subscribe();

//Unsubscribe listeners basically listen for changes to the store then react to the changes.
