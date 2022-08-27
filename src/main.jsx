import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import "./index.css";
import store from "./app/store";
import { getTotal } from "./app/features/cartSlice";

store.dispatch(getTotal());

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Toaster />
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
);
