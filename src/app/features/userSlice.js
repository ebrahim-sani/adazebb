import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    accessToken: null,
  },

  reducers: {
    setLogin: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.accessToken = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setLogin, logout } = userSlice.actions;

export const selectCurrentUser = (state) => state.user.user;
export const selectCurrentToken = (state) => state.user.accessToken;

export default userSlice.reducer;
