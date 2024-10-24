import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import HeroSection from "./pages/homepage/HeroSection";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Forgot from "./pages/auth/Forgot";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgot />} />
      </Routes>
    </>
  );
}

export default App;
