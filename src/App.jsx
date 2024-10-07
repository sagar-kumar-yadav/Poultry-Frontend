import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import HeroSection from "./pages/homepage/HeroSection";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<HeroSection />} />
      </Routes>
    </>
  );
}

export default App;
