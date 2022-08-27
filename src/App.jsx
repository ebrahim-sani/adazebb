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
                <Route exact path="/products/:id" element={<SingleProduct />} />
                <Route exact path="/products" element={<ProductList />} />
                <Route exact path="/client/support" element={<Support />} />
                <Route exact path="/client/devices" element={<DeviceView />} />
                <Route exact path="/client/pay" element={<PayView />} />
                <Route exact path="/client/report" element={<ReportView />} />
                <Route exact path="/client/staffs" element={<StaffView />} />
                <Route
                    exact
                    path="/client/products/add-product"
                    element={<AddProductPage />}
                />
                <Route
                    exact
                    path="/client/customers"
                    element={<CustomersView />}
                />
                <Route
                    exact
                    path="/client/products"
                    element={<ProductView />}
                />
                <Route
                    exact
                    path="/dashboard/client"
                    element={<DashboardView />}
                />
                <Route exact path="/signup" element={<SignUpView />} />
                <Route exact path="/faqs" element={<FAQsView />} />
                <Route exact path="/login" element={<LoginView />} />
                <Route exact path="/" element={<HomeView />} />
            </Routes>
        </div>
    );
}

export default App;
