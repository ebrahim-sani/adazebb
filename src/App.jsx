import React from "react";
import { Route, useLocation, Routes } from "react-router-dom";
import "./App.scss";
import { SingleProduct } from "./components";
import { ToastContainer } from "react-toastify";

import {
    AddProductPage,
    CustomersView,
    DashboardView,
    DeviceView,
    FAQsView,
    HomeView,
    LoginView,
    PayView,
    ProductList,
    ProductView,
    ReportView,
    SignUpView,
    StaffView,
    Support,
} from "./Views";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const location = useLocation();
    return (
        <div className="app">
            <ToastContainer />

            <Routes location={location} key={location.pathname}>
                <Route path="/products/:id" element={<SingleProduct />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/dashboard/support" element={<Support />} />
                <Route path="/dashboard/devices" element={<DeviceView />} />
                <Route path="/dashboard/pay" element={<PayView />} />
                <Route path="/dashboard/report" element={<ReportView />} />
                <Route path="/dashboard/staffs" element={<StaffView />} />
                <Route
                    path="/client/products/add-product"
                    element={<AddProductPage />}
                />
                <Route
                    path="/dashboard/customers"
                    element={<CustomersView />}
                />
                <Route path="/dashboard/products" element={<ProductView />} />
                <Route path="/dashboard/client" element={<DashboardView />} />
                <Route path="/signup" element={<SignUpView />} />
                <Route path="/faqs" element={<FAQsView />} />
                <Route path="/login" element={<LoginView />} />
                <Route path="/" element={<HomeView />} />
            </Routes>
        </div>
    );
}

export default App;
