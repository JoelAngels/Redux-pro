const redux = require("redux");
const createStore = redux.createStore;

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

const store = createStore(reducer);
