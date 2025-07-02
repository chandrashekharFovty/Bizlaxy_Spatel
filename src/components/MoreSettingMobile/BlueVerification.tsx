import React from "react";
import { FaCheck } from "react-icons/fa";
import { MdExpandLess } from "react-icons/md";
import { Link } from "react-router-dom";
import approve from "../../../public/approve.png";
import BlueTick from "../../../public/BlueTick.png";

function BlueVerification() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 z-10 border-b border-gray-200 dark:border-gray-700 flex items-center">
        <Link
          to="/settings"
          className="flex items-center font-semibold py-4 px-4"
        >
          <MdExpandLess className="transform rotate-[-90deg] text-2xl" />
          <span className="font-bold text-xl ml-4">Blue Verification</span>
        </Link>
      </div>

      {/* Content */}
      <div className="pt-24 flex flex-col items-center px-4">
        <img src={approve} alt="approve" className="h-16 w-16 mb-4" />
        <h1 className="font-semibold text-2xl">Blue Verification</h1>
        <p className="text-gray-500 dark:text-gray-400 pt-1 text-center">
          Get verified and build trust with your audience.
        </p>

        <div className="pt-10 w-full max-w-md text-sm text-gray-500 dark:text-gray-400">
          <p>
            All users can apply for Blue Verification. However, if you are a
            Company, Startup, Startup Idea Holder, or Investor, you must first
            complete Green Verification to become eligible.
          </p>
        </div>

        <div className="pt-16 w-full max-w-md">
          <h1 className="text-xl font-semibold">Eligibility Criteria</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 pt-4">
            To qualify for Blue Verification, your account must meet
            <br /> all of the following requirements:
          </p>

          <div className="flex flex-col space-y-4 pt-6">
            <label className="flex items-center space-x-2">
              <img src={BlueTick} alt="blue" className="h-6 w-6" />

              <span>Valid and accurate documentation.</span>
            </label>

            <label className="flex items-center space-x-2">
              <img src={BlueTick} alt="blue" className="h-6 w-6" />

              <span>At least 5,000 followers.</span>
            </label>

            <label className="flex items-center space-x-2">
              <img src={BlueTick} alt="blue" className="h-6 w-6" />

              <span>You or your brand must be recognizable or notable.</span>
            </label>

            <label className="flex items-center space-x-2">
              <img src={BlueTick} alt="blue" className="h-6 w-6" />

              <span>At least one active post with good engagement.</span>
            </label>

            <label className="flex items-center space-x-2">
              <img src={BlueTick} alt="blue" className="h-6 w-6" />

              <span>Your account must be well-organized and complete.</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlueVerification;
