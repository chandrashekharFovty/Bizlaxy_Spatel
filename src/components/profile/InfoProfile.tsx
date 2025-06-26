import React from "react";
import { Link } from "react-router-dom";

function InfoProfile() {
  return (
    <div className="p-6">
      <div className="relative -mt-56 w-[700px] h-[250px]">
        <Link
          to="/profile"
          className="w-[116px] px-2 h-[18px] flex font-semibold text-black -mt-12"
        >
          &lt;
          <span className="w-24 ml-0 items-start h-full pl-2 text-[#FFFFFF] font-normal">
            Back to Profile
          </span>
        </Link>
      </div>
      <h2 className="text-xl text-black dark:text-white mt-6">Info Profile Page</h2>
    </div>
  );
}

export default InfoProfile;
