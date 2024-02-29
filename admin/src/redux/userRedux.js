import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    isAdmin:false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error=false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error=false;
      state.isAdmin=true;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isAdmin=false;
      state.error=false;
    },
    //GET ALL USER
    getUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getUserSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    getUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteUserSuccess: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  //ADD
  addUserStart: (state) => {
    state.isFetching = true;
    state.error = false;
},
addUserSuccess: (state, action) => {
    state.isFetching = false;
    state.products.push(action.payload);
},
addUserFailure: (state) => {
    state.isFetching = false;
    state.error = true;
},
},
});

export const { loginStart, loginSuccess, loginFailure,
               logout,
                getUserStart,getUserFailure,getUserSuccess,
                addUserFailure,addUserStart,addUserSuccess,
              deleteUserFailure,deleteUserStart,deleteUserSuccess} = userSlice.actions;
export default userSlice.reducer;
