import React from "react";
import { BsSearch } from "react-icons/bs";

export function SearchInput() {
  return (
    <div className="dark:bg-gray-800 dark:text-white w-[98%] h-[40px]">
      <div className="dark:border-solid dark:border-gray-50 h-full flex border-2 outline-[#a952e4] border-blue-600 rounded-full px-4">
        {/* <img src={searchIcon} alt="" className="w-5 h-5 my-auto" /> */}
        <BsSearch className="w-5 h-5 my-auto text-gray-500"/>
        <input
          type="text"
          placeholder="Search..."
          required
          className="dark:bg-gray-800 dark:text-white outline-none font-normal ml-1 px-2 text-[16px] w-full h-full"
        />
      </div>
    </div>
  );
}
