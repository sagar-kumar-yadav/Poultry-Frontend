import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import HeroSection from "./pages/homepage/HeroSection";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Forgot from "./pages/auth/Forgot";
import PageNotFound from "./pages/PageNotFound";
import ProductForm from "./components/form/ProductForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/product-form" element={<ProductForm />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
