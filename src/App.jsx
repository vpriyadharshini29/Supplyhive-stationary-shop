import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header";
import Home from "./Pages/Homepage";
import Footer from "./components/Footer";
import Office from "./Pages/Office basics cat";
import ProductDetail from "./Pages/Description page";
import About from "./Pages/About us page";
import Contact from "./Pages/Contact page";
import Signin from "./Pages/Register page";
import OrderTracking from "./Pages/Track orders";
import OrderDetails from "./Pages/My orders";
import Cart from "./Pages/My cart page";
import Checkout from "./Pages/Payment page";


export default function App() {
  return (

      <Router>
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/office" element={<Office />} />
            <Route path="/desc" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/track" element={<OrderTracking />} />
            <Route path="/order" element={<OrderDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Checkout />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    
  );
}
