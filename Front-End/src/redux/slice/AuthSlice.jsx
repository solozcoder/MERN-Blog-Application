import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("userAuth"));

export const AuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    user: user ? user : null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { userActions, userReducer } = AuthSlice.actions;
export default AuthSlice.reducer;
