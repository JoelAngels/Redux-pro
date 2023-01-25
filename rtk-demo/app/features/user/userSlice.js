import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//redux toolkit provides a create async thunk function to implement creation and dispatching of async actions

//initial state for the slice

const initialState = {
  loading: false,
  users: [],
  error: "",
};

//async function will automatically dispatch live cycle actions based on returned promise, pending, fullfilled or rejected

//createAsyncThunk accepts an action type as its first argument as the all back as the 2 argument

//async action
export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
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

export default userSlice.reducer;
module.exports.fetchUsers = fetchUsers;

//we have successfully hanles async logic with redux toolkit
