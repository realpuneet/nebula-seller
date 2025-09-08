import React from "react";
import HomePage from "../pages/HomePage";
import { Route, Routes } from "react-router";
import AuthPage from "../pages/AuthPage";
import CartPage from "../pages/CartPage";
import ProtectedRoute from "./ProtectedRoute";
import ProductDetail from "../pages/ProductDetail";

const AuthRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/product-detail/:id" element={<ProductDetail />} />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AuthRoute;
