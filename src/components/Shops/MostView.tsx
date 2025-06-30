import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const mostViewedItems = [
  {
    image: "pant.png",
    description: "Customized logo Design for Men and Women",
    price: "₹430/10 pieces",
    supplier: "Fashion Corp",
  },
  {
    image: "Tshirts.png",
    description: "Customized logo Design for Men and Women",
    price: "₹430/10 pieces",
    supplier: "Gadget World",
  },
  {
    image: "Shirt.png",
    description: "Customized logo Design for Men and Women",
    price: "₹430/10 pieces",
    supplier: "Beauty Co",
  },
 {
    image: "pant.png",
    description: "Customized logo Design for Men and Women",
    price: "₹430/10 pieces",
    supplier: "Fashion Corp",
  },
  {
    image: "Tshirts.png",
    description: "Customized logo Design for Men and Women",
    price: "₹430/10 pieces",
    supplier: "Gadget World",
  },
  {
    image: "Shirt.png",
    description: "Customized logo Design for Men and Women",
    price: "₹430/10 pieces",
    supplier: "Beauty Co",
  },
   {
    image: "pant.png",
    description: "Customized logo Design for Men and Women",
    price: "₹430/10 pieces",
    supplier: "Fashion Corp",
  },
  {
    image: "Tshirts.png",
    description: "Customized logo Design for Men and Women",
    price: "₹430/10 pieces",
    supplier: "Gadget World",
  },
  {
    image: "Shirt.png",
    description: "Customized logo Design for Men and Women",
    price: "₹430/10 pieces",
    supplier: "Beauty Co",
  },
];

const MostView = () => {
  const [showAll, setShowAll] = useState(false);
  // const location = useLocation();


  // const category = location.state?.category || "Dashboard";

  const itemsToShow = showAll ? mostViewedItems : mostViewedItems.slice(0, 6);

  return (
    <div className="mt-8">
      {/* <Link
        to="/shop"
        className="dark:text-white text-sm text-blue-600 mb-4 inline-block"
      >
        &lt; Back to {category}
      </Link> */}

      <div className="flex  mb-3">
        <h2 className="text-lg font-semibold">Most Viewed</h2>
        {!showAll && (
          <button
            className="text-blue-500 ml-auto text-sm"
            onClick={() => setShowAll(true)}
          >
            See all
          </button>
        )}
      </div>

      <div className=" h-[350px]  grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {itemsToShow.map((item, index) => (
          <div
            key={index}
            className="border p-2 rounded-xl text-center text-sm hover:shadow cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.description}
              className="w-full h-[200px] object-contain mb-1"
            />
            <p className="mt-2">{item.description}</p>
            <p className="dark:text-white mt-2 text-black font-bold">{item.price}</p>
            <button className="mt-2 bg-gradient-to-r from-blue-800 to-purple-700 text-white text-sm px-4 py-2 rounded-xl">
              Gradient Button
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostView;
