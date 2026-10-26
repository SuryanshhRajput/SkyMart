import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    isLoading: true,
  },

  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      ((state.isAuthenticated = true), (state.isLoading = false));
    },
    removerUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { addUser, removerUser } = authSlice.actions;
export default authSlice.reducer;
