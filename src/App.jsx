import React from "react";
import { Route, useLocation, Routes } from "react-router-dom";
import "./App.scss";
import { SingleProduct } from "./components";
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

function App() {
    const location = useLocation();
    return (
        <div className="app">
            <Routes location={location} key={location.pathname}>
                <Route path="/products/:id" element={<SingleProduct />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/dashboard/support" element={<Support />} />
                <Route
                    exact
                    path="/dashboard/devices"
                    element={<DeviceView />}
                />
                <Route path="/dashboard/pay" element={<PayView />} />
                <Route
                    exact
                    path="/dashboard/report"
                    element={<ReportView />}
                />
                <Route exact path="/dashboard/staffs" element={<StaffView />} />
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
