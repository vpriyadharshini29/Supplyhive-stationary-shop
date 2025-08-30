import React from "react";
import { useCart } from "./Cartcontext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  // 📌 Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">My Cart</h2>
        <p className="text-gray-600">Your cart is empty 🛒</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Title */}
      <h2 className="text-2xl font-bold text-center">My Cart</h2>

      {/* Cart Table */}
      <div className="border rounded-xl shadow-md overflow-hidden">
        <table className="w-full border-collapse text-center">
          <thead className="bg-gray-100 font-semibold">
            <tr>
              <th className="p-4 border">Product</th>
              <th className="p-4 border">Quantity</th>
              <th className="p-4 border">Unit Price</th>
              <th className="p-4 border">Total Price</th>
              <th className="p-4 border">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                {/* Product Info */}
                <td className="p-4 border flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain rounded mb-2"
                  />
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm font-semibold text-gray-700">
                    Rs.{item.price}
                  </p>
                  {item.discount && (
                    <p className="text-xs text-green-600">{item.discount}</p>
                  )}
                </td>

                {/* Quantity Controls */}
                <td className="p-4 border">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                    >
                      -
                    </button>
                    <span className="px-3 py-1 border rounded bg-white">
                      {item.quantity}
                    </span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </td>

                {/* Unit Price */}
                <td className="p-4 border align-top">Rs.{item.price}</td>

                {/* Total Price */}
                <td className="p-4 border align-top">
                  Rs.{item.price * item.quantity}
                </td>

                {/* Remove Button */}
                <td className="p-4 border align-top">
                  <button
                    className="text-red-600 font-bold hover:underline"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ✕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cart Summary */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-left">
          <p>
            Subtotal: <span className="font-semibold">Rs.{subtotal}</span>
          </p>
          <p>
            Total:{" "}
            <span className="font-bold text-lg">Rs.{subtotal}</span>
          </p>
          <button
            onClick={() =>
              navigate("/payment", {
                state: { cartItems, subtotal }, // ✅ Pass items & total
              })
            }
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Proceed to Checkout
          </button>
        </div>

        {/* Decorative Image */}
        <img
          src="./images/a10.png"
          alt="Sticky Note"
          className="w-32 h-32 object-contain"
        />
      </div>
    </div>
  );
}
