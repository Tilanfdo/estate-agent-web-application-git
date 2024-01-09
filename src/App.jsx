import { useState } from "react";
import "./App.css";
import Header from "./components/layout/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/about";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
