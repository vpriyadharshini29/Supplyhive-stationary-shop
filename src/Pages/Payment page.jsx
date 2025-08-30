import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Receive data from Cart
  const { cartItems = [], subtotal = 0 } = location.state || {};

  const handlePlaceOrder = () => {
    setShowPopup(true);

    // ⏳ Delay then go home
    setTimeout(() => {
      navigate("/");
    }, 2500);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8 relative">
      <h2 className="text-2xl font-bold text-center">Checkout</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Billing Details */}
        <div className="border rounded-xl p-6 shadow-md">
          <h3 className="text-lg font-bold mb-4">Billing Details</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              defaultValue="Aswin Jacob"
              className="p-3 border rounded-lg w-full bg-blue-100"
            />
            <input
              type="text"
              placeholder="Street Address"
              defaultValue="2/170, Chandra nag"
              className="p-3 border rounded-lg w-full bg-blue-100"
            />
            <input
              type="text"
              placeholder="Town/City"
              defaultValue="Coimbatore"
              className="p-3 border rounded-lg w-full bg-blue-100"
            />
            <input
              type="text"
              placeholder="Postal Code"
              defaultValue="641 402"
              className="p-3 border rounded-lg w-full bg-blue-100"
            />
          </form>
        </div>

        {/* Order Summary */}
        <div className="border rounded-xl p-6 shadow-md space-y-6">
          <h3 className="text-lg font-bold mb-4">Your Order</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between">
              <p>
                {item.name} x {item.quantity}
              </p>
              <p className="font-semibold">
                Rs.{item.price * item.quantity}
              </p>
            </div>
          ))}
          <div className="flex justify-between border-t pt-2">
            <p className="font-bold">Total</p>
            <p className="font-bold text-blue-600">Rs.{subtotal}</p>
          </div>

          {/* Payment Options */}
          <div className="border rounded-lg p-4 space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Cash on Delivery
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="upi"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              UPI
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="debit"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Debit Card
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="credit"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Credit Card
            </label>
          </div>
        </div>
      </div>

      {/* Place Order Button */}
      <div className="text-center">
        <button
          onClick={handlePlaceOrder}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Place Order
        </button>
      </div>

      {/* 🎉 Order Confirmation Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md mx-auto"
              initial={{ scale: 0.5, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 100 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <div className="text-green-500 text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-2">
                Order Placed Successfully!
              </h3>
              <p className="text-gray-600 mb-4">
                Thank you for shopping with us. Redirecting to home...
              </p>
              <motion.div
                className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full mx-auto animate-spin"
              ></motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
