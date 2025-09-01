import { useLocation } from "react-router-dom";

export default function TrackOrder() {
  const location = useLocation();
  const { cartItems = [], subtotal = 0 } = location.state || {};

  // 📅 Current order date
  const today = new Date();
  const orderDate = today.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  // 🚚 Delivery date after 3 days
  const deliveryDate = new Date(today);
  deliveryDate.setDate(today.getDate() + 3);
  const formattedDeliveryDate = deliveryDate.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold">Track Your Order</h2>
      <p className="text-gray-600">
        Order ID: <span className="font-semibold">OD123456789</span>
      </p>

      {/* ✅ Order Status Timeline */}
      <div className="space-y-3 border-l-4 border-green-500 pl-4">
        <p className="text-green-600">✔️ Order Confirmed, {orderDate}</p>
        <p className="text-green-600">✔️ Shipped</p>
        <p className="text-gray-600">⏳ Out for Delivery</p>
        <p className="text-gray-600">
          🚚 Delivery by {formattedDeliveryDate}, between 10 AM – 7 PM
        </p>
      </div>

      {/* 🛒 Order Summary */}
      <div className="border rounded-xl p-6 shadow-md">
        <h3 className="text-lg font-bold mb-4">Your Order</h3>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-2 mb-2"
          >
            <div className="flex items-center gap-4">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
              )}
              <p>
                {item.name} x {item.quantity}
              </p>
            </div>
            <p className="font-semibold">
              Rs.{item.price * item.quantity}
            </p>
          </div>
        ))}

        <div className="flex justify-between border-t pt-2 mt-2">
          <p className="font-bold">Total</p>
          <p className="font-bold text-blue-600">Rs.{subtotal}</p>
        </div>
      </div>
    </div>
  );
}
