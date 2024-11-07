import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import HeroSection from "./pages/homepage/HeroSection";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Forgot from "./pages/auth/Forgot";
import PageNotFound from "./pages/PageNotFound";
import ProductForm from "./components/form/ProductForm";
import { CartPage } from "./pages/cart/CartPage";
import CheckOut from "./pages/cart/CheckOut";
import CategoryProduct from "./pages/category/CategoryProduct";
import SearchPage from "./pages/search/SearchPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/product-form" element={<ProductForm />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/search" element={<SearchPage />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
