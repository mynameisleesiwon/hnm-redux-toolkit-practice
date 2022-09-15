import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  id: "",
  password: "",
  authenticate: false,
};

const authSlice = createSlice({
  name: "authentiate",
  initialState,
  reducers: {
    login(state, action) {
      state.id = action.payload.id;
      state.password = action.payload.password;
      state.authenticate = true;
    },
    logout(state, action) {
      state.id = "";
      state.password = "";
      state.authenticate = false;
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
