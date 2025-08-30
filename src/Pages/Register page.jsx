import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [mode, setMode] = useState("register"); // register | login
  const [form, setForm] = useState({ name: "", email: "", phone: "", otp: "" });
  const [loginData, setLoginData] = useState({ email: "", otp: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  // Check login state on mount
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // Handle Register form input
  const handleRegisterChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle Login form input
  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // Register Submit
  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("registeredUser", JSON.stringify(form));
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    alert("Registration successful!");
    navigate("/");
  };

  // Login Submit
  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!storedUser) {
      alert("No user found. Please register first.");
      setMode("register");
      return;
    }

    if (
      storedUser.email === loginData.email &&
      storedUser.otp === loginData.otp
    ) {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid credentials.");
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
    navigate("/"); // back to signin
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      {/* Banner */}
      <div className="w-full rounded-xl overflow-hidden shadow-md">
        <img
          src="./images/login.png"
          alt="Stationery Banner"
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Tagline */}
      <h2 className="text-center text-lg font-medium">
        "Your Perfect Stationery Partner Is Just a Message Away."
      </h2>

      {/* If logged in, show logout */}
      {isLoggedIn ? (
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">
            ✅ You are logged in!
          </h3>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      ) : (
        <>
          {/* Toggle Buttons */}
          <div className="flex justify-center gap-4">
            <button
              className={`px-4 py-2 rounded-full font-semibold ${
                mode === "register"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => setMode("register")}
            >
              Register
            </button>
            <button
              className={`px-4 py-2 rounded-full font-semibold ${
                mode === "login"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => setMode("login")}
              disabled={!localStorage.getItem("registeredUser")}
            >
              Login
            </button>
          </div>

          {/* Form Box */}
          <div className="border rounded-2xl shadow-md bg-white p-8 max-w-md mx-auto">
            {mode === "register" ? (
              <>
                <h3 className="text-center text-xl font-semibold mb-6">
                  Register
                </h3>
                <form
                  onSubmit={handleRegister}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center"
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleRegisterChange}
                    className="w-full p-3 rounded-2xl bg-blue-400 text-black placeholder-black focus:outline-none"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email ID"
                    value={form.email}
                    onChange={handleRegisterChange}
                    className="w-full p-3 rounded-2xl bg-blue-400 text-black placeholder-black focus:outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleRegisterChange}
                    className="w-full p-3 rounded-2xl bg-blue-400 text-black placeholder-black focus:outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="otp"
                    placeholder="OTP"
                    value={form.otp}
                    onChange={handleRegisterChange}
                    className="w-full p-3 rounded-2xl bg-blue-400 text-black placeholder-black focus:outline-none"
                    required
                  />
                  <div className="md:col-span-2 flex justify-center">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <>
                <h3 className="text-center text-xl font-semibold mb-6">Login</h3>
                <form onSubmit={handleLogin} className="space-y-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email ID"
                    value={loginData.email}
                    onChange={handleLoginChange}
                    className="w-full p-3 rounded-2xl bg-blue-400 text-black placeholder-black focus:outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="otp"
                    placeholder="OTP"
                    value={loginData.otp}
                    onChange={handleLoginChange}
                    className="w-full p-3 rounded-2xl bg-blue-400 text-black placeholder-black focus:outline-none"
                    required
                  />
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
