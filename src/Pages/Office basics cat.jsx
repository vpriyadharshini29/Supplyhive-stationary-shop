import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./Cartcontext"; 
import { motion, AnimatePresence } from "framer-motion";

// 📌 Categories Data
const categories = {
  "Offices Basics": {
    banner:
      "./images/o-b.png",
    tagline: "Organize Smarter, Work Better!",
    products: [
      { id: 1, name: "Stapler", price: 120, discount: "Bulk offer", image:  "./images/o1.png", },
      { id: 2, name: "Calculator", price: 250, discount: "Bulk offer", image:  "./images/o2.png" },
      { id: 3, name: "Desk Organizer", price: 300, discount: "Bulk offer", image: "./images/o3.png" },
      { id: 4, name: "Scissors", price: 90, discount: "Bulk offer", image:  "./images/o4.png" },
      { id: 5, name: "Tape Dispenser", price: 110, discount: "Bulk offer", image: "./images/o5.png"},
      { id: 6, name: "Office Chair", price: 2000, discount: "Bulk offer", image: "./images/o6.png"},
      { id: 7, name: "Desk Lamp", price: 800, discount: "Bulk offer", image:  "./images/o7.png"},
      { id: 8, name: "Whiteboard", price: 1500, discount: "Bulk offer", image: "./images/o8.png"},
      { id: 9, name: "Printer Paper", price: 350, discount: "Bulk offer", image: "./images/o9.png"},
    ],
  },
  "Files & Folders": {
    banner:
     "./images/fb.png",
    tagline: "File It Right, Find It Fast!",
    products: [
      { id: 1, name: "Lever Arch File", price: 180, discount: "Save 10% on 5+", image:  "./images/f1.png" },
      { id: 2, name: "Ring Binder", price: 220, discount: "Save 15% combo", image: "./images/f2.png" },
      { id: 3, name: "Expanding Folder", price: 260, discount: "Special bulk offer", image: "./images/f3.png"},
      { id: 4, name: "Plastic File", price: 80, discount: "Buy 10 save 20%", image: "./images/f4.png" },
      { id: 5, name: "Clip File", price: 100, discount: "Value pack of 12", image: "./images/f5.png" },
     ],
  },
  "Paper & Notebooks": {
    banner:
     "./images/nb.png",
    tagline: "Jot It Down, Make It Count!",
    products: [
      { id: 1, name: "A4 Printing Paper", price: 300, discount: "Bulk order discount", image: "./images/n1.png" },
      { id: 2, name: "Spiral Notebook", price: 120, discount: "Buy 5 Get 1 Free", image: "./images/n2.png" },
      { id: 3, name: "Hardcover Notebook", price: 220, discount: "Save 10%", image: "./images/n3.png" },
      { id: 4, name: "Graph Notebook", price: 180, discount: "Student offer", image: "./images/n4.png" },
      { id: 5, name: "Sticky Notes", price: 90, discount: "Pack of 12 @ Rs 900", image: "./images/n5.png" },
        ],
  },
  "Pens & Writing": {
    banner:
      "./images/pb.png",
    tagline: "Write Brighter, Think Clearer!",
    products: [
      { id: 1, name: "Ball Pen", price: 20, discount: "Buy 10 @ Rs 150", image: "./images/p1.png" },
      { id: 2, name: "Gel Pen", price: 30, discount: "Box of 12", image: "./images/p2.png" },
      { id: 3, name: "Fountain Pen", price: 250, discount: "Luxury edition", image: "./images/p3.png"},
      { id: 4, name: "Marker", price: 60, discount: "Pack of 6", image:"./images/p4.png" },
      { id: 5, name: "Highlighter", price: 100, discount: "Set of 5 colors", image: "./images/p5.png"},   ],
  },
  "School Supplies": {
    banner:
      "./images/sb.png",
    tagline: "Back to School, Back to Cool!",
    products: [
      { id: 1, name: "School Bag", price: 900, discount: "Student special", image: "./images/s1.png" },
      { id: 2, name: "Lunch Box", price: 350, discount: "Save 10%", image: "./images/s2.png" },
      { id: 3, name: "Water Bottle", price: 200, discount: "Buy 2 save 5%", image: "./images/s3.png"},
      { id: 4, name: "Geometry Box", price: 180, discount: "Back to school pack", image:"./images/s4.png" },
      { id: 5, name: "Crayons", price: 120, discount: "Pack of 24 colors", image: "./images/s5.png"},],
  },
};

// 📌 Price filter ranges
const priceRanges = [
  { label: "50 - 100", min: 50, max: 100 },
  { label: "100 - 200", min: 100, max: 200 },
  { label: "200 - 300", min: 200, max: 300 },
  { label: "300 - 500", min: 300, max: 500 },
  { label: "500 - 1000", min: 500, max: 1000 },
  { label: "1000+", min: 1000, max: Infinity },
];

export default function Office() {
  const [activeCategory, setActiveCategory] = useState("Offices Basics");
  const [selectedRanges, setSelectedRanges] = useState([]);
  const { addToCart } = useCart(); 
  const [popup, setPopup] = useState(null); // ✅ product added popup

  const { banner, tagline, products } = categories[activeCategory];

  // 📌 Handle price filter checkbox
  const toggleRange = (rangeLabel) => {
    setSelectedRanges((prev) =>
      prev.includes(rangeLabel)
        ? prev.filter((r) => r !== rangeLabel)
        : [...prev, rangeLabel]
    );
  };

  // 📌 Filter products
  const filteredProducts = products.filter((product) => {
    if (selectedRanges.length === 0) return true;
    return selectedRanges.some((rangeLabel) => {
      const range = priceRanges.find((r) => r.label === rangeLabel);
      return product.price >= range.min && product.price <= range.max;
    });
  });

  // 📌 Handle Add to Cart + Popup
  const handleAddToCart = (product) => {
    addToCart(product, activeCategory); // ✅ pass category
    setPopup(product);
    setTimeout(() => setPopup(null), 2500);
  };

  return (
    <section className="p-4">
      {/* ✅ Add-to-Cart Popup */}
      <AnimatePresence>
        {popup && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
            className="fixed top-6 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50"
          >
            ✅ {popup.name} added to cart!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Banner */}
      <div className="max-w-5xl mx-auto my-6 bg-white rounded-xl shadow-md overflow-hidden">
        <img src={banner} alt="Banner" className="w-full h-56 object-cover" />
        <div className="p-4 text-center">
          <p className="text-gray-700 italic">"{tagline}"</p>
        </div>
      </div>

      <div className="flex bg-gray-50 min-h-screen p-4">
        {/* Sidebar Navbar */}
        <aside className="w-64 bg-blue-500 text-white rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <ul className="space-y-3 mb-6">
            {Object.keys(categories).map((cat) => (
              <li
                key={cat}
                className={`cursor-pointer px-2 py-1 rounded-md transition ${
                  activeCategory === cat
                    ? "bg-white text-blue-600 font-bold"
                    : "hover:bg-blue-600 hover:text-white"
                }`}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedRanges([]);
                }}
              >
                {cat}
              </li>
            ))}
          </ul>

          {/* Price Filter */}
          <h3 className="text-xl font-bold mb-3">Filter by Price</h3>
          <div className="space-y-2 text-sm">
            {priceRanges.map((range) => (
              <label key={range.label} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedRanges.includes(range.label)}
                  onChange={() => toggleRange(range.label)}
                  className="accent-blue-600"
                />
                <span>Rs. {range.label}</span>
              </label>
            ))}
          </div>
        </aside>

        {/* Product Section */}
        <main className="flex-1 ml-6">
          <h2 className="text-lg font-medium mb-4">
            Showing {filteredProducts.length} of {products.length} results in{" "}
            <span className="font-bold">{activeCategory}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-blue-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
              >
                <Link
                  to="/desc"
                  state={{ product, category: activeCategory }}
                  className="no-underline"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-yellow-500 my-2">★★★★★</p>
                    <p className="text-gray-800 font-semibold">
                      Rs. {product.price}
                    </p>
                    <p className="text-sm font-bold">{product.discount}</p>
                  </div>
                </Link>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-3 bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition w-full"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
}