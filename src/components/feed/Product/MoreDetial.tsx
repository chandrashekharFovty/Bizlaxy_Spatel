import React from 'react';
import Sidebar from '../../layout/Sidebar';
import RightBar from './RightBar';
import { useNavigate } from 'react-router-dom';

function MoreDetail() {
  const navigate = useNavigate();

  const handleNextButton = () => {
    navigate("/feed");
  };

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
            More Details
          </h1>

          {/* Form Fields */}
          <div className="mt-2 dark:text-white">
            <p className="mt-4">Available Quantity</p>
            <input
              type="text"
              placeholder="Enter available quantity"
              className="border border-gray-300 w-[850px] h-10 rounded-xl mt-2 pl-4"
            />

            <p className="mt-6">Minimum Order Quantity</p>
            <input
              type="text"
              placeholder="Enter Minimum Order Quantity"
              className="border border-gray-300 w-[850px] h-10 rounded-xl mt-2 pl-4"
            />

            <p className="mt-6">Warranty</p>
            <input
              type="text"
              placeholder="Enter warranty information"
              className="border border-gray-300 w-[850px] h-10 rounded-xl mt-2 pl-4"
            />

            <p className="mt-6">Return Policy</p>
            <select className="border border-gray-300 w-[850px] h-10 rounded-xl mt-2 pl-4 text-gray-400">
              <option value="">Select return policy</option>
              <option value="7days" className='text-black'>7 Days Return</option>
              <option value="15days" className='text-black'>15 Days Return</option>
              <option value="noreturn" className='text-black'>No Return</option>
            </select>

            <p className="mt-6">Color / Variants</p>
            <select className="border border-gray-300 w-[850px] h-10 rounded-xl mt-2 pl-4 text-gray-400">
              <option value="" className='text-gray-400'>Add available color or variant</option>
              <option value="red" className='text-black'>Red</option>
              <option value="blue" className='text-black'>Blue</option>
              <option value="green" className='text-black'>Green</option>
              <option value="custom" className='text-black'>Custom (Enter Manually)</option>
            </select>

            <p className="mt-6">Material</p>
            <input
              type="text"
              placeholder="Specify material ingredients"
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

export default MoreDetail;
