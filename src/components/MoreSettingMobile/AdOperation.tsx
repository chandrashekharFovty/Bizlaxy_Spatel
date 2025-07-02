import React from "react";
import { MdExpandLess } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

function AdOperation() {

  const navigate=useNavigate()

  const handleNavigate=()=>{
    navigate("/bill1")
  }
  return (
      <>
        {/* Fixed header */}
                <div className="dark:dark-color fixed top-0 left-0 right-0 bg-white z-10 border-b-2 border-gray-200">
                  <Link
                    to="/settings"
                    className="dark:dark-color flex items-center font-semibold text-black py-4 px-4"
                  >
                    <MdExpandLess className="dark:dark-color transform rotate-[-90deg] text-2xl" />
                    <span className="dark:dark-color font-bold text-xl ml-16">
                 Create an Ad Account
                    </span>
                  </Link>
                </div>
        

        {/* Step Indicator */}
        <div className=" pt-20 flex justify-center items-center mb-6">
          <div className="w-4 h-4 rounded-full bg-blue-600"></div>
          <div className="w-12 h-0.5 bg-gray-300 mx-2"></div>
          <div className="w-4 h-4 rounded-full border border-gray-400"></div>
          <div className="w-12 h-0.5 bg-gray-300 mx-2"></div>
          <div className="w-4 h-4 rounded-full border border-gray-400"></div>
        </div>when i move next page first wale dot pr right mark lag jana chahiye

        {/* Form Fields */}
        <div className="mb-4 pl-4">
          <label className="block mb-1 font-medium">Ad Account Name </label>
          <input
            type="text"
            placeholder="e.g. Main Product Ads"
            className="w-[400px] h-14 border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4  pl-4">
          <label className="block mb-1 font-medium">Business Page Selection</label>
          <select className="w-[400px] h-14 border border-gray-300 rounded-xl px-3 py-2 bg-white focus:outline-none text-gray-400 focus:border-blue-500">
            <option>Select your business page</option>
          </select>
        </div>

        <div className="mb-6  pl-4">
          <label className="block mb-1 font-medium">Currency Selection</label>
          <select className="w-[400px] h-14 text-gray-400 bg-white border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:border-blue-500">
            <option>Choose your billing currency</option>
          </select>
        </div>

        <button 
        onClick={handleNavigate}
        className=" ml-4 w-[400px] bg-blue-600 text-white py-2 rounded-xl h-14 hover:bg-blue-700 transition">
          Next
        </button></>
  );
}

export default AdOperation;

