import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { accountApi } from "../services/accountApi";
import { productApi } from "../services/productApi";
import cartReducer from "./features/cartSlice";

export default configureStore({
    reducer: {
        [accountApi.reducerPath]: accountApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        cart: cartReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(accountApi.middleware),
});
