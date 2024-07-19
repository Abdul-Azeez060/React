import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData; // if the name is same why we don't need to specify payload.userData
    },
    logout: (state) => {
      (state.status = false), (state.userData = null);
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
