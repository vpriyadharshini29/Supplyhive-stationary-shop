import React from "react";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
        <img
         src="./images/a1.png" 
          alt="Stationery Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-4xl font-bold text-center">
            "Smart Supplies for Bright Future."
          </h1>
        </div>
      </div>

      {/* Intro */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-gray-700 text-lg">
          We bring you a wide collection of stationery essentials for students,
          teachers, and professionals. From pens and notebooks to stylish bags,
          we provide everything you need for work, school, and creativity.
        </p>
      </div>

      {/* Categories */}
      <div className="space-y-12">
        {/* Pens & Pencils */}
        <section>
          <h2 className="text-xl font-bold mb-2">PENS & PENCILS</h2>
          <p className="text-gray-600 mb-4">
            High-quality writing instruments including pens, pencils, and colors
            designed for smooth writing and artistic use.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="./images/a6.png" alt="Pens" className="rounded shadow" />
            <img src="./images/a5.png" alt="Pencils" className="rounded shadow" />
          </div>
        </section>

        {/* Bags */}
        <section>
          <h2 className="text-xl font-bold mb-2">BAGS</h2>
          <p className="text-gray-600 mb-4">
            Durable and stylish bags for students and professionals, built for
            carrying books, laptops, and daily essentials.
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <img src="./images/a7.png"alt="Bag" className="rounded shadow" />
            <img src="./images/a8.png" alt="Bag" className="rounded shadow" />
          </div>
        </section>

        {/* All Stationery */}
        <section>
          <h2 className="text-xl font-bold mb-2">ALL STATIONERY</h2>
          <p className="text-gray-600 mb-4">
            Explore our wide stationery collection including notebooks, sticky
            notes, staplers, and more — perfect for students and professionals.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="./images/a4.png" alt="Notebook" className="rounded shadow" />
            <img src="./images/a3.png" alt="Sticky Notes" className="rounded shadow" />
            <img src="./images/a2.png" alt="Stapler" className="rounded shadow" />
          </div>
        </section>
      </div>
    </div>
  );
}
