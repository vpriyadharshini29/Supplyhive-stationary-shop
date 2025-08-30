import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
        <img
          src="./images/cb.png"
          alt="Stationery Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-4xl font-bold text-center">
            "Smart Supplies for Bright Future."
          </h1>
        </div>
      </div>

      {/* Contact Details */}
      <h2 className="text-2xl font-bold text-center">Contact Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-blue-100 p-6 rounded-xl shadow hover:shadow-lg transition">
          <MapPin className="mx-auto w-8 h-8 text-blue-600 mb-2" />
          <p className="font-semibold">Location</p>
          <p>
            78 Beechwood Ave
            <br />
            Sarasota, FL 34231
          </p>
        </div>
        <div className="bg-blue-100 p-6 rounded-xl shadow hover:shadow-lg transition">
          <Mail className="mx-auto w-8 h-8 text-blue-600 mb-2" />
          <p className="font-semibold">Email</p>
          <p>
            example@gmail.com
            <br />
            details@example.com
          </p>
        </div>
        <div className="bg-blue-100 p-6 rounded-xl shadow hover:shadow-lg transition">
          <Phone className="mx-auto w-8 h-8 text-blue-600 mb-2" />
          <p className="font-semibold">Contact</p>
          <p>
            +1 541783022
            <br />
            +1 647890533
          </p>
        </div>
      </div>

      {/* Map */}
      <div className="rounded-xl overflow-hidden shadow">
        <img
          src="./images/map.png"
          alt="Map"
          className="w-full h-64 md:h-80 object-cover"
        />
      </div>

      {/* Contact Form */}
      <div className="bg-white p-8 rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-center mb-2">
          Have a List? We’ve Got the Stationery—Contact Us Now!
        </h3>
        <p className="text-gray-600 text-center mb-6">
          Write Us <br />
          We are always happy to be of service to you. Be sure to listen to the
          prompt to help direct you to the right person.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full p-3 rounded-2xl bg-blue-400 text-black placeholder-black focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter Email ID"
              className="w-full p-3 rounded-2xl bg-blue-400 text-black placeholder-black focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Phone Number</label>
            <input
              type="text"
              placeholder="Enter your number"
              className="w-full p-3 rounded-2xl bg-blue-400 text-black placeholder-black focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Message</label>
            <input
              type="text"
              placeholder="Enter Message"
              className="w-full p-3 rounded-2xl bg-blue-400 text-black placeholder-black focus:outline-none"
            />
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
