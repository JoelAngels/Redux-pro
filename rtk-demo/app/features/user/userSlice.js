const createSlice = require("@reduxjs/toolkit").createSlice;
const axios = require("axios");

//redux toolkit provides a create async thunk function to implement creation and dispatching of async actions

const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;

//initial state for the slice

const initialState = {
  loading: false,
  users: [],
  error: "",
};

//async function will automatically dispatch live cycle actions based on returned promise, pending, fullfilled or rejected

//createAsyncThunk accepts an action type as its first argument as the all back as the 2 argument

//async action
const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data.map((user) => user.id));
}); //returns a promise

//create the slice
const userSlice = createSlice({
  name: "user",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;
