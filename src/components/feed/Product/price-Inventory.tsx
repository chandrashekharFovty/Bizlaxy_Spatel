import React, { useState } from "react";
import Sidebar from "../../layout/Sidebar";
import RightBar from "./RightBar";
import { useNavigate } from "react-router-dom";

function PriceInventory() {
  const navigate = useNavigate();

  const [priceUnit, setPriceUnit] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [discount, setDiscount] = useState("");

  const handleNextButton = () => {
    console.log("Price per unit:", priceUnit);
    console.log("Price range:", priceRange);
    console.log("Discount:", discount);

    navigate("/shiping");
  };

  return (
    <>
      <div className="fixed w-[245px] h-full z-40 bg-[#0f001a]">
        <Sidebar />
      </div>

      <div className="flex ml-[245px]">
        <div className="w-3/4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md min-h-screen flex flex-col">
          <button className="flex items-center text-lg text-black dark:text-white mb-4">
            &lt;
            <span className="text-sm ml-2 mt-1">Basic Product Information</span>
          </button>

          <h1 className="text-xl font-bold text-gray-700 dark:text-white mb-6">
            Pricing & Inventory
          </h1>

          <div className="mt-2 dark:text-white">
            <p className="mt-4">Price per Unit</p>
            <input
              type="text"
              placeholder="Enter price per unit"
              value={priceUnit}
              onChange={(e) => setPriceUnit(e.target.value)}
              className="border border-gray-300 w-[850px] h-10 rounded-xl mt-2 pl-4"
            />

            <p className="ml-2 mt-4">Price range</p>
            <input
              type="text"
              placeholder="Enter price range"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="border border-gray-300 w-[850px] h-10 rounded-xl mt-2 pl-4"
            />

            <p className="mt-4">Discounts</p>
            <input
              type="text"
              placeholder="Enter Discount"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              className="border border-gray-300 w-[850px] h-10 rounded-xl mt-2 pl-4"
            />

            <button
              className="px-4 py-2 bg-blue-600 text-white w-[850px] mt-4 rounded-xl hover:bg-blue-700"
              onClick={handleNextButton}
            >
              Next
            </button>
          </div>
        </div>

        <div className="fixed right-0 top-0 h-full z-50 bg-white">
          <RightBar />
        </div>
      </div>
    </>
  );
}

export default PriceInventory;
