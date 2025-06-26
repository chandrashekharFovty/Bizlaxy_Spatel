import React from 'react';
import Sidebar from '../layout/Sidebar';
import { Link } from 'react-router-dom';
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { IoVideocamOutline, IoImagesOutline } from "react-icons/io5";

function Visiblity() {
  return (
    <>
      <Sidebar />
      <div className=" dark:bg-gray-800  dark:text-white p-6 bg-white min-h-screen ml-[235px]">
        <Link to="/custom" className="dark:text-white text-sm text-blue-600 mb-4 inline-block">
          &lt; Back to Target Audience
        </Link>

        <div className="flex gap-4">
          {/* Left Section */}
          <div className="w-[850px] space-y-8">
            {/* Ad Visibility */}
            <div>
              <h1 className="font-bold text-lg">Ad Visibility</h1>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                Select where your ad will appear for the best exposure.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                {["Home Page", "Story Feed", "Explore", "Search", "Inbox", "Suggested Content"].map((item, i) => (
                  <label key={i} className=" dark:text-white flex items-center gap-2 text-sm text-gray-700">
                    <input type="checkbox" className="bg-gradient from-blue-600 to-purpal-700" />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Ad Duration & Frequency */}
            <div>
              <h1 className="font-bold text-lg">Ad Duration & Frequency</h1>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                Decide how long and how often users should see your ad.
              </p>
              <div className="mt-4 gap-4 ">
                <input
                  type="date"
                  className="border border-gray-300 w-[400px] p-2 text-gray-400 rounded-xl dark:text-gray-500"
                />
                <select className="border border-gray-300 p-2 ml-4 text-gray-400 rounded-xl w-1/2 dark:text-gray-500">
                  <option value="">Select Frequency Per User</option>
                  <option value="once">Once per day</option>
                  <option value="twice">Twice per day</option>
                  <option value="always">Always show</option>
                </select>
              </div>
            </div>

            {/* Budget & Scheduling */}
            <div>
              <h1 className="font-bold text-lg">Budget & Scheduling</h1>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                Set how much you want to spend and when the ad will be active.
              </p>

              <h4 className="mt-4 text-sm font-semibold">Budget Type</h4>
              <div className="flex gap-6 mt-2">
                <label className="flex items-center text-gray-400 gap-2 text-sm dark:text-gray-300">
                  <input type="checkbox" />
                  Daily
                </label>
                <label className="flex items-center text-gray-400 gap-2 text-sm dark:text-gray-300">
                  <input type="checkbox" />
                  Lifetime
                </label>
              </div>

              <p className="mt-4 text-gray-500 text-sm font-semibold dark:text-gray-300">Cost Model</p>
              <select className="border border-gray-300 p-2 text-gray-400 w-[850px] rounded-xl dark:text-gray-500 mt-1">
                <option value="">Select Cost Model</option>
                <option value="cpc">CPC (Cost Per Click)</option>
                <option value="cpm">CPM (Cost Per 1000 Impressions)</option>
                <option value="cpa">CPA (Cost Per Action)</option>
              </select>

              <p className="mt-4 text-sm text-gray-500 font-semibold dark:text-gray-300">Scheduling</p>
              <input
                type="date"
                className="border border-gray-300 text-gray-400 p-2 w-[850px] rounded-xl  mt-1 dark:text-gray-500"
              />
            </div>

            {/* Media Upload */}
            <div>
              <h1 className="font-bold text-lg">Media Upload</h1>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                Add creative assets for your ad in high-quality format.
              </p>
              <div className="flex gap-4 mt-4">
                <button className="flex items-center gap-2 px-4 py-2 border rounded-xl dark:border-gray-600">
                  <IoImagesOutline /> Image
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border rounded-xl dark:border dark:border-gray-600">
                  <IoVideocamOutline /> Video
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar Preview */}
          <div className="w-[350px] border border-gray-300 rounded-xl p-4 bg-white shadow-sm">
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
                Built for sales teams that need speed, visibility, and results. Try it free.
              </span>
            </div>
            <button className="w-full h-10 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors">
              Book Demo
            </button>
            <h2 className="mt-6 text-base font-semibold text-gray-800">Campaign Name</h2>
            <p className="mt-2 text-sm text-gray-700">GrowForce CRM – Built for Sales Teams</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Visiblity;
