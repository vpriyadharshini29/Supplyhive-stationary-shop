import React from "react";

export default function Home() {

    const products = [
    {
      id: 1,
      name: "Scientific Calculator",
      price: "Rs. 50",
      offer: "Buy a pack of 10 @ Rs. 249",
      img: "./images/h-f1.png",
    },
    {
      id: 2,
      name: "Geometry Tools",
      price: "Rs. 50",
      offer: "Buy 3 or more @ Rs. 101.20",
           img: "./images/h-f2.png",
    },
    {
      id: 3,
      name: "Stationery Kit",
      price: "Rs. 50",
      offer: "Buy 3 or more @ Rs. 101.20",
          img: "./images/h-f3.png",
    },
  ];





   const trendingItems = [
    { id: 1,       img: "./images/h-t1.png", },
    { id: 2,       img: "./images/h-t2.png", },
    { id: 3,       img: "./images/h-t3.png", },
    { id: 4,       img: "./images/h-t3.png", },
    { id: 5,      img: "./images/h-t5.png", },
    { id: 6,       img: "./images/h-t6.png", },
  ];





   const products1 = [
    { id: 1, name: "Pencil",       img: "./images/h-b1.png", price: 50 },
    { id: 2, name: "Scientific Calculator",       img: "./images/h-b2.png", price: 50 },
    { id: 3, name: "Notebook",       img: "./images/h-b3.png", price: 50 },
  ];

  const team = [
    { id: 1, name: "Seth Rollins", role: "Shop Owner",       img: "./images/h-m1.png" },
    { id: 2, name: "Seth Rollins", role: "Manager",       img: "./images/h-m2.png", },
    { id: 3, name: "Seth Rollins", role: "Shop Keeper",       img: "./images/h-m3.png", },
  ];




  return (
    <section>
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-6 md:px-16 py-10">
      {/* Left Image */}
      <div className="w-full md:w-1/3">
        <img
          src="./images/h-1.png"
          alt="Stationery"
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>

      {/* Middle Offer Section */}
      <div className="flex flex-col items-center space-y-4">
        <img
          src="./images/h2.png"
          alt="Bag"
          className="w-32 h-auto"
        />

        {/* Offer Box */}
        <div className="bg-red-500 text-white font-bold text-lg px-6 py-3 rounded-lg shadow-md text-center">
          Upto 50% off on <br /> Bulk Order
        </div>
{/* 
        <img
          src="https://via.placeholder.com/150x200"
          alt="Bag"
          className="w-32 h-auto"
        /> */}
      </div> 

      {/* Right Image */}
      <div className="w-full md:w-1/3">
        <img
           src="./images/h3.png"
          alt="Highlighters"
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>
    </div>








     <div className="px-6 md:px-16 py-12 text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold">
        Essential Stationery, Exceptional Supply
      </h2>
      <p className="text-gray-600 mt-3 max-w-3xl mx-auto text-lg">
        From pens to paper, we deliver quality tools that power classrooms,
        offices, and creativity. Bulk pricing, reliable service, and everything
        your workspace needs—right at your fingertips.
      </p>

      {/* Image Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <img
          src="./images/h4.png"
          alt="Notebooks"
          className="rounded-xl shadow-md w-full h-auto"
        />
        <img
           src="./images/h5.png"
          alt="Colors and Brushes"
          className="rounded-xl shadow-md w-full h-auto"
        />
        <img
            src="./images/h6.png"
          alt="Files and Papers"
          className="rounded-xl shadow-md w-full h-auto"
        />
      </div>
    </div>





    <div className="px-6 md:px-16 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Text */}
      <div className="space-y-8">
        {/* 1 */}
        <div>
          <h3 className="text-xl font-bold">1. Writing Essentials</h3>
          <p className="text-gray-600 mt-2">
            From everyday ballpoint pens to premium gel pens and highlighters,
            our writing tools ensure clarity, comfort, and reliability. Perfect
            for classrooms, offices, or creative spaces, these essentials are
            built to support productivity and expression at every level.
          </p>
        </div>

        {/* 2 */}
        <div>
          <h3 className="text-xl font-bold">2. Paper Products</h3>
          <p className="text-gray-600 mt-2">
            Whether it’s notebooks, notepads, printer paper, or sticky notes,
            our paper supplies cover every need. Designed for durability and
            smooth performance, these products are ideal for note-taking,
            organizing, printing, or planning in any setting.
          </p>
        </div>

        {/* 3 */}
        <div>
          <h3 className="text-xl font-bold">3. Classroom & Office Tools</h3>
          <p className="text-gray-600 mt-2">
            Keep workspaces equipped and efficient with rulers, staplers,
            scissors, erasers, and more. These tools bring order and precision
            to daily tasks, making them indispensable in both educational and
            professional environments.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <img
           src="./images/h7.png"
          alt="Stationery set"
          className="rounded-xl shadow-md"
        />
      </div>
    </div>












    <div className="px-6 md:px-16 py-12">
      <h2 className="text-center text-2xl font-bold mb-10">
        Featured Product
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-blue-400 rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            {/* Product Image */}
            <img
              src={product.img}
              alt={product.name}
              className="h-48 w-full object-cover"
            />

            {/* Product Info */}
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-center">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex justify-center text-yellow-400 my-2">
                {"★★★★★"}
              </div>

              <p className="text-center font-semibold">{product.price}</p>
              <p className="text-center text-sm font-bold mt-1">{product.offer}</p>

              {/* Button */}
              <button className="mt-4 bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>











      <div className="px-6 md:px-16 py-12">
      {/* Trending Section */}
      <h2 className="text-center text-2xl font-bold mb-8">Trending</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {trendingItems.map((item) => (
          <img
            key={item.id}
            src={item.img}
            alt="Trending Item"
            className="rounded-xl shadow-md w-full h-48 object-cover"
          />
        ))}
      </div>

      {/* Testimonial Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Customer Testimonial</h2>
        <p className="text-gray-600 font-medium mb-6">
          Bulk Stationery. Better Prices. <br />
          Smarter Supply.
        </p>

        <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
          <img
            src="./images/h-cus.png"
            alt="Customer"
            className="w-16 h-16 rounded-full mx-auto mb-4"
          />
          <p className="text-gray-700 italic">
            "Working with SupplyHive has been a game-changer for my store. The
            quality of the stationery is consistently high, prices are
            competitive, and orders always arrive on time—making it easy to keep
            my shelves stocked and customers happy."
          </p>
          <h3 className="mt-4 font-bold">Priya M</h3>
          <p className="text-gray-500 text-sm">Retail shop Owner</p>
        </div>
      </div>
    </div>






    <div className="px-6 md:px-16 py-12">
      {/* Back to School Section */}
      <h2 className="text-center text-2xl font-bold mb-8">Back to School</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products1.map((product) => (
          <div
            key={product.id}
            className="bg-blue-100 rounded-xl shadow-md p-4 text-center"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="font-bold">{product.name}</h3>
            <div className="text-yellow-500 text-sm">★★★★★</div>
            <p className="mt-2 text-gray-700">
              Rs. {product.price} <br />
              <span className="font-semibold">
                Buy 3 or more @ Rs. {(product.price * 2.02).toFixed(2)}
              </span>
            </p>
            <button className="mt-3 bg-white text-black font-semibold px-4 py-2 rounded-lg border hover:bg-gray-100">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">The Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Our team is a dedicated group of professionals passionate about
          delivering quality stationery in bulk with efficiency and care. With
          expertise in sourcing, logistics, and customer service, we ensure
          every order meets the highest standards.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-md p-4"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-56 object-cover rounded-lg mb-3"
              />
              <h3 className="font-bold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}
