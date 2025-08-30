import React from "react";
import { CheckCircle, Circle } from "lucide-react";

export default function OrderTracking() {
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
        <h2 className="font-semibold">Order ID : OD123456789</h2>
        <p className="text-sm text-gray-600">
          Seller : Supplyhive <br />
          Rs. 249
        </p>
      </div>

      {/* Order Tracking */}
      <div className="space-y-4">
        {/* Step 1 */}
        <div className="flex items-center gap-3">
          <CheckCircle className="text-green-600 w-5 h-5" />
          <p>Order Confirmed, Apr 27</p>
        </div>
        {/* Step 2 */}
        <div className="flex items-center gap-3">
          <CheckCircle className="text-green-600 w-5 h-5" />
          <p>Shipped</p>
        </div>
        {/* Step 3 */}
        <div className="flex items-center gap-3">
          <Circle className="text-gray-500 w-5 h-5" />
          <p>Out for Delivery</p>
        </div>
        {/* Step 4 */}
        <div className="flex items-center gap-3">
          <Circle className="text-gray-500 w-5 h-5" />
          <p>Delivery, May 1 by 11 PM</p>
        </div>
      </div>

      {/* Order Summary */}
      <div className="border rounded-xl shadow-md">
        <div className="p-4 border-b font-semibold flex justify-between">
          <span>Products</span>
          <span>Subtotal</span>
        </div>
        <div className="p-4 flex justify-between">
          <span className="font-medium">Scientific Calculator x 10</span>
          <span>Rs.249</span>
        </div>
        <div className="bg-blue-600 text-white font-semibold px-4 py-3 flex justify-between rounded-b-xl">
          <span>Total</span>
          <span>Rs.249</span>
        </div>
      </div>
    </div>
  );
}
