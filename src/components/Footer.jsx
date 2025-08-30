import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Logo & Company Info */}
        <div className="flex items-center space-x-3 mb-8">
          <img
            src="./images/logo.png" // placeholder for logo
            alt="Supplyhive"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="text-xl font-bold">Supplyhive</h2>
            <p className="text-gray-500 text-sm">2025 Supplyhive Limited</p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-8">
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#">About us</a></li>
              <li><a href="#">Supplyhive corporate</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Team</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">Contact us</h3>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#">Help & Support</a></li>
              <li><a href="#">Partner with us</a></li>
              <li><a href="#">Ride with us</a></li>
            </ul>
          </div>

          {/* Available in */}
          <div>
            <h3 className="font-semibold mb-3">Available in</h3>
            <ul className="space-y-2 text-gray-500">
              <li>Coimbatore</li>
              <li>Bengaluru</li>
              <li>Chennai</li>
              <li>Kolkata</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Cookie policy</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold mb-3">Information</h3>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#">Location</a></li>
              <li><a href="#">Email</a></li>
              <li><a href="#">Social Media</a></li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-5">
          <a href="#"><FaInstagram size={22} className="text-pink-500" /></a>
          <a href="#"><FaFacebook size={22} className="text-blue-600" /></a>
          <a href="#"><FaWhatsapp size={22} className="text-green-500" /></a>
        </div>
      </div>
    </footer>
  );
}
