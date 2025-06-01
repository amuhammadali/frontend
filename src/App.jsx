import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddPet from "./components/AddPet";
import "./App.css"; // Assuming you have some global styles

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddPet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
