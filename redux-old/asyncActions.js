const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default;
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const axios = require("axios");

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

//Define STATE , ACTIONS AND REDUCERS

const initialState = {
  loading: false,
  users: [],
  error: "",
};

// Declare constants for the action types, string constant that indicates the type of the action

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED ";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED ";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED ";

//Define Action Creators

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    //Payload is the data that your reducer will use to update the state
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    //Payload is the data that your reducer will use to update the state
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_SUCCEEDED:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };

    case FETCH_USERS_FAILED:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

//DEFINE ASYNC ACTION CREATOR which returns an action but thunkmiddleware returns a function instead of an action object

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      //response.data is the users
      .then((response) => {
        const users = response.data.map((user) => user.id); //for each user, just the user.id
        //when we get the response, lets despatch

        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchUsers());
