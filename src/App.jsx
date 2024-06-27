import "./App.css";
import NavBar from "./components/NavBar/NavBar";

import Home from "./components/Home/Home";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orderSummary" element={<OrderSummary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
