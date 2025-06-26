import React from "react";
import Sidebar from "../../layout/Sidebar";
import RightBar from "./RightBar";
import { useNavigate } from "react-router-dom";

function Shipping() {
    const navigate=useNavigate()

    const handleNextButton=()=>{
        navigate("/moredetial")
    }
  return (
    <>
      {/* Sidebar */}
      <div className="fixed w-[245px] h-full z-40 bg-[#0f001a]">
        <Sidebar />
      </div>

      {/* Main Content and RightBar */}
      <div className="flex ml-[245px]">
        <div className="w-3/4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md min-h-screen flex flex-col">
          {/* Header */}
          <button className="flex items-center text-lg text-black dark:text-white mb-4">
            &lt;
            <span className="text-sm ml-2 mt-1">Basic Product Information</span>
          </button>

          <h1 className="text-xl font-bold text-gray-700 dark:text-white mb-6">
            Shipping Info
          </h1>

          {/* Next Button */}
          <div className="mt-2 dark:text-white ">
            <p className="mt-4">Location/Address:</p>
            <input
              type="text"
              placeholder="Enter location address"
              className="border border-gray-300 w-[850px] h-10 rounded-xl mt-2 pl-4"
            />

            <p className=" mt-6">Product Weight</p>
            <input
              type="text"
              placeholder="Enter product weight (kg)"
              className="border border-gray-300 w-[850px] h-10 rounded-xl mt-2 pl-4"
            />

            <p className="mt-6">Product Dismensions</p>
            <input
              type="text"
              placeholder="Enter Dismensions"
              className="border border-gray-300 w-[850px] h-10 rounded-xl mt-2 pl-4"
            />
            <p className="mt-6">Shipping Method</p>
            <select className="border border-gray-300 w-[850px] h-10 rounded-xl mt-2 pl-4 text-gray-400">
              <option value="" className='text-gray-400'>Add available color or variant</option>
              <option value="red" className='text-black'>Red</option>
              <option value="blue" className='text-black'>Blue</option>
              <option value="green" className='text-black'>Green</option>
              <option value="custom" className='text-black'>Custom (Enter Manually)</option>
            </select>

            <p className="mt-6">Delivery Time</p>
            <input
              type="text"
              placeholder="Delivery Time (e.g 3-5 days)"
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

        {/* Right Sidebar */}
        <div className="fixed right-0 top-0 h-full z-50 bg-white">
          <RightBar />
        </div>
      </div>
    </>
  );
}

export default Shipping;
