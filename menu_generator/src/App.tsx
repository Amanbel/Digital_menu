import React from "react";
import Menu from "./pages/menu";
import { Routes, Route } from "react-router-dom";
import Qr from "./pages/qrpage";

export default function App() {
  return (
    <div className="flex justify-center">
      <Routes>
        <Route path="/" element={<Qr />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      {/* // <Menu /> */}
    </div>
  );
}
