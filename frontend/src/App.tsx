import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Games from "./pages/Games";
import Home from "./pages/Home";
import SlotMachine from "./pages/SlotMachine";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/slot-machine" element={<SlotMachine />} />
      </Routes>
    </Router>
  );
};

export default App;
