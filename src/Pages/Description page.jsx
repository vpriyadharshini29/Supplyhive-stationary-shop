import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "./Cartcontext";

export default function ProductDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // 📌 Retrieve product from state
  const { product } = location.state || {};

  if (!product) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-bold">Product not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  // ✅ Handle Add to Cart
  const handleAddToCart = () => {
    addToCart(product); // add to cart context
    navigate("/cart");  // redirect to cart page
  };

  // ✅ Handle Buy Now
  const handleBuyNow = () => {
    navigate("/payment", {
      state: { cartItems: [{ ...product, quantity: 1 }], buyNow: true },
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Product Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Image + Price */}
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-sm object-contain"
          />
          <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-700">Rs. {product.price}</p>
          <p className="text-gray-600 font-medium">{product.discount}</p>
        </div>

        {/* Product Description */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Product Description</h2>
          <h3 className="text-lg font-semibold mb-2">
            Advanced Functionality for Students and Professionals
          </h3>
          <p className="text-gray-700 mb-4">
            This {product.name} is designed to meet the needs of students,
            engineers, and professionals. Equipped with a high-contrast display,
            it supports multiple functions including algebraic, trigonometric,
            statistical, and complex number calculations. The ergonomic keypad
            ensures ease of use during exams or fieldwork, and the durable
            construction makes it ideal for daily use.
          </p>

          <h3 className="font-bold mb-2">Key Features:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Supports fractions, exponents, logarithms, and trigonometric functions</li>
            <li>Multi-line display for reviewing inputs and results</li>
            <li>Ideal for high school, college, and professional use</li>
            <li>Battery-powered with auto power-off for extended life</li>
            <li>Lightweight and compact design for portability</li>
          </ul>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Comments & Review</h2>

        <div className="mb-6">
          <h3 className="font-semibold">1. Positive Review – Student Perspective</h3>
          <p className="text-yellow-500">★★★★★</p>
          <p className="text-gray-700 italic">
            "This product has been a lifesaver for my classes. Easy to use,
            packed with features, and reliable performance."
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold">2. Positive Review – Professional</h3>
          <p className="text-yellow-500">★★★★★</p>
          <p className="text-gray-700 italic">
            "Excellent build quality and functionality. Handles complex tasks
            effortlessly. Highly recommended for professionals."
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold">3. Neutral Review – General Use</h3>
          <p className="text-yellow-500">★★★★☆</p>
          <p className="text-gray-700 italic">
            "Covers all basic and advanced needs, though it may take time to
            learn all functions. Solid choice overall."
          </p>
        </div>

        <div>
          <h3 className="font-semibold">4. Critical Review – Beginner User</h3>
          <p className="text-yellow-500">★★★☆☆</p>
          <p className="text-gray-700 italic">
            "A bit overwhelming at first. Works well, but instructions could be
            more beginner-friendly."
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-6 mt-8">
        <button
          onClick={handleAddToCart}
          className="bg-blue-600 text-white font-bold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          ADD TO CART
        </button>
        <button
          onClick={handleBuyNow}
          className="bg-green-600 text-white font-bold px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
        >
          BUY NOW
        </button>
      </div>
    </div>
  );
}
