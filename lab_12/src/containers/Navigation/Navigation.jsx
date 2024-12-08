import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Catalog from "../Catalog_page/Catalog";
import ItemPage from "../Item_page/Item";
import Cart from "../Cart_page/Cart";
import CheckoutPage from "../../forms/Checkout";
import SuccessPage from "../../forms/Success";
import LoginPage from "../../login/LoginPage";
import RegisterPage from "../../login/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";

function Navigation() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/catalog"
        element={
          <ProtectedRoute>
            <Catalog />
          </ProtectedRoute>
        }
      />
      <Route
        path="/item/:id"
        element={
          <ProtectedRoute>
            <ItemPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />
      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <CheckoutPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/success"
        element={
          <ProtectedRoute>
            <SuccessPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default Navigation;
