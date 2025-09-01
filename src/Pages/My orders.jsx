import { useLocation, useNavigate } from "react-router-dom";

export default function MyOrders() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems = [], subtotal = 0, paymentMethod = "cod" } =
    location.state || {};

  const handleTrackOrder = () => {
    navigate("/track", {
      state: { cartItems, subtotal, paymentMethod },
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">My Orders</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">No recent orders found.</p>
      ) : (
        <div className="border rounded-xl p-6 shadow-md space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between border-b pb-2"
            >
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

          <p className="mt-3 text-sm text-gray-500">
            Payment Method:{" "}
            <span className="font-semibold">{paymentMethod}</span>
          </p>

          {/* ✅ Track Order Button */}
          <div className="text-center mt-4">
            <button
              onClick={handleTrackOrder}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Track Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
