import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { accountApi } from "../services/accountApi";
import { productApi } from "../services/productApi";
import userReducer from "./features/userSlice";

export default configureStore({
  reducer: {
    [accountApi.reducerPath]: accountApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    user: userReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(accountApi.middleware),
});
