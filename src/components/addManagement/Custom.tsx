import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../layout/Sidebar";
import { HiMiniComputerDesktop } from "react-icons/hi2";

function Custom() {
  const navigate = useNavigate();
  const handleData = () => {
    navigate("/visiblity");
  };
  return (
    <>
      <Sidebar />
      <div className="dark:bg-gray-800  dark:text-white flex">
        <div className=" dark:bg-gray-800  dark:text-white p-6 bg-white min-h-screen ml-[235px]">
          <Link
            to="/awareness"
            className=" dark:text-white text-sm text-blue-600 mb-4 inline-block"
          >
            &lt; Back to Target Audience
          </Link>
          <div>
            {/* <div className="ml-[245px] mx-[300px] p-6  shadow"> */}
            <h2 className="text-xl ml-4 font-semibold mb-4 mt-4">
              Custom Targeting
            </h2>

            <div className="grid ml-4 w-[850px] ">
              <p className="mt-2 text-gray-400">Business types</p>
              <select className="mt-2 border border-gray-300 rounded-xl text-gray-400 px-4 py-2">
                <option>Select Business Type</option>
              </select>
              <p className="mt-4 text-gray-400">Industry</p>
              <select className="mt-2 border border-gray-300 rounded-xl text-gray-400 px-4 py-2">
                <option>Select Industry</option>
              </select>
              <p className="mt-4 text-gray-400">Business model</p>
              <select className="mt-2 border border-gray-300 rounded-xl text-gray-400 px-4 py-2">
                <option>Select Business Model</option>
              </select>
              <p className="mt-4 text-gray-400">Geographics Location</p>
              <select className=" mt-2 border border-gray-300 rounded-xl text-gray-400 px-4 py-2">
                <option>Select Geographic Location</option>
              </select>
              <p className="mt-6 text-gray-400">
                Demagraphic Targeting (optional)
              </p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <select className="border border-gray-300 rounded-xl text-gray-400 px-4 py-2">
                  <option>Select Age Group</option>
                </select>
                <select className="border border-gray-300 rounded-xl text-gray-400 px-4 py-2">
                  <option>Select Gender</option>
                </select>
                <select className="border border-gray-300 rounded-xl text-gray-400 px-4 py-2">
                  <option>Select Language</option>
                </select>
                <select className="border border-gray-300 rounded-xl text-gray-400 px-4 py-2">
                  <option>Select Education</option>
                </select>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                  onClick={handleData}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 w-[350px] ml-2 border border-gray-300 rounded-xl p-4 bg-white shadow-sm">
          <h3 className="flex items-center text-sm font-medium text-gray-700 gap-2 mb-2">
            <HiMiniComputerDesktop className="text-xl" />
            Ad Format
          </h3>
          <div className="flex mb-2">
            <p className="text-sm text-gray-500 font-medium">Headline:</p>
            <span className="text-sm ml-1 text-gray-800">
              Close 3x More Deals With GrowForce CRM
            </span>
          </div>
          <div className="flex mb-4">
            <p className="text-sm text-gray-500 font-medium">Subtext:</p>
            <span className="text-sm ml-1 text-gray-800">
              Built for sales teams that need speed, visibility, and results.
              Try it free.
            </span>
          </div>
          <button className="w-full h-10 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors">
            Book Demo
          </button>
          <h2 className="mt-6 text-base font-semibold text-gray-800">
            Campaign Name
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            GrowForce CRM – Built for Sales Teams
          </p>
        </div>
      </div>
    </>
  );
}

export default Custom;
