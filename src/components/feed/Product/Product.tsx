import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../layout/Sidebar";
import RightBar from "./RightBar";

function Product({ onClose }) {
  const navigate = useNavigate();

  const [brandName, setBrandName] = useState("");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [hashtag, setHashtag] = useState("");
  const [category, setCategory] = useState("");
  const [productCode, setProductCode] = useState("");
  const [hsnCode, setHsnCode] = useState("");

  const handleNext = () => {
    console.log({
      brandName,
      productName,
      description,
      hashtag,
      category,
      productCode,
      hsnCode,
    });

    navigate("/next-page");
  };

  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div className=" flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="  flex w-full ml-[245px]">
        {/* Left: Form Section */}
        <div
          onClick={stopPropagation}
          className="w-3/4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-[100vh] flex flex-col"
        >
          {/* Back Button */}
          <button
            onClick={onClose}
            className="flex items-center text-lg text-black dark:text-white mb-4"
          >
            &lt;
            <span className="text-sm ml-2 mt-1">Basic Product Information</span>
          </button>

          {/* Header */}
          <h1 className="text-xl font-bold text-gray-700 dark:text-white mb-2">
            Basic Product Information
          </h1>

          <div className="overflow-y-auto scrollbar-hide flex-1 pr-2 space-y-4">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
              Feature Product Title
            </h3>
            <p className="text-sm text-gray-600 dark:text-white mb-2">
              This is how your product appears to others.
            </p>

            {/* Brand Name */}
            <div>
              <label className="text-sm text-gray-700 dark:text-white font-medium">
                Brand Name
              </label>
              <input
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="Enter brand name"
                className="w-[850px] h-10 border border-gray-300 px-3 text-sm py-2 rounded-xl shadow-sm bg-white dark:bg-gray-200 dark:text-black"
              />
            </div>

            {/* Product Name */}
            <div>
              <label className="text-sm text-gray-700 dark:text-white font-medium">
                Product Name
              </label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Enter product name"
                className="w-[850px] h-10 border border-gray-300 px-3 text-sm py-2 rounded-xl shadow-sm bg-white dark:bg-gray-200 dark:text-black"
              />
            </div>

            {/* Description */}
            <div>
              <label className="text-sm text-gray-700 dark:text-white font-medium">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Write a detailed description of the product"
                className="w-[850px] border border-gray-300 h-10 px-3 py-2 text-sm rounded-xl shadow-sm bg-white dark:bg-gray-200 dark:text-black"
              />
            </div>

            {/* Hashtag */}
            <div>
              <label className="text-sm text-gray-700 dark:text-white font-medium">
                Hashtag
              </label>
              <input
                type="text"
                value={hashtag}
                onChange={(e) => setHashtag(e.target.value)}
                placeholder="Add hashtag (e.g., #summer)"
                className="w-[850px] h-10 border border-gray-300 px-3 text-sm py-2 rounded-xl shadow-sm bg-white dark:bg-gray-200 dark:text-black"
              />
            </div>

            {/* Category */}
           <p className="mt-6 text-sm font-medium text-gray-700 dark:text-white">Category</p>
<select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  className="border dark:text-gray-400  border-gray-300 w-[850px] h-10 rounded-xl mt-2 pl-4 text-gray-700 dark:text-black bg-white dark:bg-gray-200"
>
  <option value="" disabled className="text-gray-400">Select Category</option>
  <option value="red" className="text-black">Red</option>
  <option value="blue" className="text-black">Blue</option>
  <option value="green" className="text-black">Green</option>
  <option value="custom" className="text-black">Custom (Enter Manually)</option>
</select>



            {/* Product Code/ID */}
            <div>
              <label className="text-sm text-gray-700 dark:text-white font-medium">
                Product Code/ID
              </label>
              <input
                type="text"
                value={productCode}
                onChange={(e) => setProductCode(e.target.value)}
                placeholder="Enter product code/ID"
                className="w-[850px] h-10 border border-gray-300 px-3 text-sm py-2 rounded-xl shadow-sm bg-white dark:bg-gray-200 dark:text-black"
              />
            </div>

            {/* HSN/SAC Code */}
            <div>
              <label className="text-sm text-gray-700 dark:text-white font-medium">
                HSN/SAC Code
              </label>
              <input
                type="text"
                value={hsnCode}
                onChange={(e) => setHsnCode(e.target.value)}
                placeholder="Enter HSN/SAC code"
                className="w-[850px] h-10 border border-gray-300 px-3 text-sm py-2 rounded-xl shadow-sm bg-white dark:bg-gray-200 dark:text-black"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="w-[850px] mt-4 text-white px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              Next
            </button>
          </div>
        </div>

        {/* Right: Image and Preview */}
        <div className="fixed right-0 top-0 h-full z-50 bg-white">
          <RightBar />
        </div>
      </div>
    </div>
  );
}

export default Product;
