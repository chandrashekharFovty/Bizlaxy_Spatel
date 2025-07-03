import React from "react";
import { MdExpandLess } from "react-icons/md";
import { Link } from "react-router-dom";

function PrivacySetting() {
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
            <span className=" dark:dark-color font-bold text-xl ml-28">
              Profile Privacy
            </span>
          </Link>
        </div>

        {/* Scrollable content */}
        <div className="dark:dark-color pt-20 pb-20 px-4 overflow-y-auto">
          <div className="dark:dark-color flex flex-col gap-4">
            {/* Reusable card structure */}
            <LinkCard to="/story" title=" Story" />
            <LinkCard to="" title=" Posts" />
            <LinkCard to="" title=" Eduvid" />
            <LinkCard to="" title=" Pitch" />
          </div>
        </div>
      </div>
    </>
  );
}

function LinkCard({ to, title }) {
  return (
    <Link to={to}>
      <div className="dark:dark-color flex justify-between items-start border-b border-gray-200 pb-4">
        <div className=" w-[380px]">
          <h1 className="font-semibold text-xl">{title}</h1>
        </div>
        <MdExpandLess className="transform rotate-[90deg] text-2xl mt-1" />
      </div>
    </Link>
  );
}

export default PrivacySetting;
