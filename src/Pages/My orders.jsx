import React from "react";
import { CheckCircle, Circle } from "lucide-react";
import { useCart } from "./Cartcontext"; // ✅ adjust path
import { useParams } from "react-router-dom";

export default function OrderTracking() {
  const { orders } = useCart();
  const { id } = useParams(); // route should be like: /track/:id

  // ✅ find the order by id
  const order = orders?.find((o) => o.id.toString() === id);

  if (!order) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center">
        <p className="text-gray-600">❌ Order not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      {/* Banner */}
      <div className="w-full rounded-xl overflow-hidden shadow-md">
        <img
          src="https://via.placeholder.com/1200x400?text=Stationery+Order+Banner"
          alt="Order Banner"
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Order Info */}
      <div>
        <h2 className="font-semibold">Order ID : {order.id}</h2>
        <p className="text-sm text-gray-600">
          Seller : Supplyhive <br />
          Rs. {order.total}
        </p>
      </div>

      {/* Order Tracking */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <CheckCircle className="text-green-600 w-5 h-5" />
          <p>Order Confirmed, {order.date}</p>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle className="text-green-600 w-5 h-5" />
          <p>Shipped</p>
        </div>
        <div className="flex items-center gap-3">
          <Circle className="text-gray-500 w-5 h-5" />
          <p>Out for Delivery</p>
        </div>
        <div className="flex items-center gap-3">
          <Circle className="text-gray-500 w-5 h-5" />
          <p>Delivery, {order.deliveryDate} by 11 PM</p>
        </div>
      </div>

      {/* Order Summary */}
      <div className="border rounded-xl shadow-md">
        <div className="p-4 border-b font-semibold flex justify-between">
          <span>Products</span>
          <span>Subtotal</span>
        </div>
        {order.items.map((item) => (
          <div key={item.id} className="p-4 flex justify-between">
            <span className="font-medium">
              {item.name} x {item.quantity}
            </span>
            <span>Rs.{item.price * item.quantity}</span>
          </div>
        ))}
        <div className="bg-blue-600 text-white font-semibold px-4 py-3 flex justify-between rounded-b-xl">
          <span>Total</span>
          <span>Rs.{order.total}</span>
        </div>
      </div>
    </div>
  );
}
