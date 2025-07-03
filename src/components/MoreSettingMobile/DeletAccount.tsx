import React, { useState } from "react";
import { MdExpandLess } from "react-icons/md";
import { Link } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { FaRegEyeSlash } from "react-icons/fa";

function DeletAccount() {
  const [isDialog1Open, setIsDialog1Open] = useState(false);
  const [isDialog2Open, setIsDialog2Open] = useState(false);
  const [isDialog3Open, setIsDialog3Open] = useState(false); 

  return (
    <>
      <div className="dark:dark-color h-screen w-screen">
        {/* Fixed header */}
        <div className="dark:dark-color fixed top-0 left-0 right-0 bg-white z-10 border-b-2 border-gray-200">
          <Link
            to="/settings"
            className="dark:dark-color flex items-center font-semibold text-black py-4 px-4"
          >
            <MdExpandLess className="dark:dark-color transform rotate-[-90deg] text-2xl" />
            <span className="dark:dark-color font-bold text-xl ml-28">
              Delete Account
            </span>
          </Link>
        </div>

        {/* Scrollable content */}
        <div className="dark:dark-color pt-28 pb-20 px-4 overflow-y-auto">
          <div className="dark:dark-color flex flex-col gap-4">
            <LinkCard
              to=""
              title="Temporarily Deactivate"
              onClick={() => setIsDialog1Open(true)}
            />
            <LinkCard
              to=""
              title="Permanently Delete Account"
              onClick={() => setIsDialog2Open(true)}

            />
          </div>
        </div>
      </div>

      {/* Dialog 1 */}
     
<Dialog open={isDialog1Open} onClose={() => setIsDialog1Open(false)}>
  <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
    <div className="bg-white p-6 rounded shadow w-[370px]">
      <div className="space-y-4">
        {/* Username */}
        <div>
          <label className="block mb-1 font-semibold">Username</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-gray-400 rounded-xl h-14 w-full px-2 focus:outline-none"
          />
        </div>

        {/* Password with eye icon */}
        <div className="relative">
          <label className="block mb-1 font-semibold">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="border border-gray-400 rounded-xl h-14 w-full px-2 pr-10 focus:outline-none"
          />
          <FaRegEyeSlash className="absolute right-3 top-9 text-gray-500 cursor-pointer" />
        </div>

        {/* Forget password link */}
        <Link
          to=""
          className="block text-right text-blue-400 text-sm"
          onClick={() => setIsDialog1Open(false)}
        >
          Forget Password?
        </Link>

        {/* Submit */}
     <button
  className="w-full h-14 px-4 py-2 bg-blue-600 text-white rounded"
  onClick={() => {
    setIsDialog1Open(false); 
    setIsDialog3Open(true); 
  }}
>
  Submit
</button>
      </div>
    </div>
  </div>
</Dialog>


<Dialog open={isDialog3Open} onClose={() => setIsDialog3Open(false)}>
  <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
    <div className="bg-white p-6 rounded shadow w-[370px]">
        <div>
          <label className="block mb-1 font-semibold">Help us understand your decision by sharing the reason you're leaving.</label>
          <input
            type="text"
            placeholder="Tell us how we can do better…"
            className="border mt-2 border-gray-400 rounded-xl h-14 w-full px-2 focus:outline-none"
          />
        </div>

   <button
  onClick={() => {
    setIsDialog3Open(false); 
    setIsDialog2Open(true); 
  }}
  className="w-full px-4 mt-2 h-14 py-2 bg-blue-600 text-white rounded-xl"
>
  Submit
</button>

    </div>
  </div>
</Dialog>


      {/* Dialog 2 */}
      <Dialog open={isDialog2Open} onClose={() => setIsDialog2Open(false)}>
  <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
    <div className="bg-white h-[200px] w-[370px] p-6 rounded-xl shadow">
      <h2 className="text-sm font-bold mb-4">
        Deleting is permanent. You’ll lose all data.
      </h2>

      <div className="mt-6 space-y-3">
        {/* Cancel Button */}
        <button
          className="px-4 py-2 w-full h-12 border border-gray-200 rounded-xl"
          onClick={() => setIsDialog2Open(false)}
        >
          Cancel
        </button>

        {/* Deactivate Account Link Styled as Button */}
        <Link
          to="/"
          onClick={() => setIsDialog2Open(false)}
          className="flex items-center justify-center px-4 py-2 w-full h-12 border border-red-200 text-red-500 rounded-xl hover:bg-red-50 transition"
        >
          Temporarily Deactivate Account
        </Link>
      </div>
    </div>
  </div>
</Dialog>

    </>
  );
}

// Updated LinkCard to accept onClick
function LinkCard({ to, title, onClick }) {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <Link to={to}>
        <div className="dark:dark-color flex justify-between items-start border-b border-gray-200 pb-4">
          <div className="w-[380px]">
            <h1 className="font-semibold text-xl">{title}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default DeletAccount;
