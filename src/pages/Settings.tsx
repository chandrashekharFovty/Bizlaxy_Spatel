import React, { useContext, useState } from "react";
import {ThemeContext} from "@/DarkTheme/contentThem";
import SettingsPanel from "@/DarkTheme/SettingsPanel";
import { Link, useNavigate } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { BsMoonStarsFill } from "react-icons/bs";

function AllSettings() {
  const [showSetting, setShowSetting] = useState(false);
  const { toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("user");
    navigate("/", { replace: true });
  };

  return (
   <div className="dark:glass-bg-dark dark:border dark:border-white rounded-xl absolute z-50 w-[347px] h-[290px] left-full -translate-y-1/2 ml-4 bg-white shadow-lg p-2 mb-20 -mt-[65%]">
      <div className="w-[159px] w-3/12 dark:text-white dark:font-medium h-[24px] text-[18px] font-bold px-3 py-2 mt-2">
        More Options
      </div>
      {/* <div className="w-[307px] h-[100px] rounded-3xl mt-6 px-4 flex flex-col"> */}
        <Link
          to="/settings"
          className="max-md:hidden dark:hover:text-gray-400 dark:text-white w-full  text-left px-2 py-1 flex mt-4"
        >
         <IoMdSettings className="text-xl mr-2"/> Settings
        </Link>

        <button
          className="max-md:hidden dark:hover:text-gray-400 dark:text-white w-full  text-left px-2 mt-2  flex "
          onClick={toggleTheme}
        >
         <BsMoonStarsFill  className="text-xl mr-2"/> Switch Appearance
        </button>
        <hr className="border-solid border border:gray-500 mt-4"/>
     <button
          className="dark:hover:text-gray-400 text-blue-700 dark:text-white w-full mt-4 text-left px-2 py-1 flex "
          // onClick={toggleTheme}
        >
        Add Acount
        </button>
             <button
          className="dark:hover:text-gray-400 text-blue-700 dark:text-white w-full mt-2 text-left px-2 py-1 flex gap-2"
          // onClick={toggleTheme}
        >
          Switch Acount
        </button>
      <button
        onClick={Logout}
        className="w-full mt-2 text-red-800 text-left px-2 py-1 font-medium hover:text-red-400 flex gap-2"
      >
        Log Out
      </button>
      </div>

    // </div>
  );
}

export default AllSettings;
