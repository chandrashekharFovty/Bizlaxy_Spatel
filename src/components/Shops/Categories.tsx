import React from "react";
import CategorySection from "./AllCategory";
import MostView from "./MostView";
import ShopCarousel from "./ShopCarousel";
import { Sidebar } from "lucide-react";


const Category = () => {
  return (
    <div className="flex  dark:bg-gray-800 dark:text-white ">
   
      {/* <div className="w-[250px] fixed top-0 left-0 h-screen bg-white shadow-md z-20"> */}
     <Sidebar/>
      {/* </div> */}

      <div className="dark:bg-gray-800 dark:text-white ml-[250px] p-4 w-full max-w-screen-xl mx-auto">
        {/* Search Bar */}
        <div className=" dark:bg-gray-800 dark:text-white h-[40px] my-5 flex justify-between items-center">
          <div className=" dark:border-solid dark:border-[#a89bfc] dark:bg-gray-800 dark:text-white w-[95%] rounded-2xl mt-4 h-full flex border focus-within:border-[#BED6FF] border-gray-200 rounded-xl px-4">
            <img src="/searchdark.png" alt="Search Icon" className="  w-5 h-5 my-auto" />
            <input
              type="text"
              placeholder="Search Products..."
              className="dark:bg-gray-800 dark:text-white outline-none font-medium  ml-1 px-2 text-[16px] w-full h-full"
            />
          </div>
          <div className="dark:border-solid dark:border-[#a89bfc] text-center rounded-full flex justify-center items-center mt-4 border w-12 h-12 cursor-pointer">
            <img src="/isShop.png" alt="Shop" className="w-6 h-6" />
          </div>
        </div>

        {/* Carousel Banner */}
        <div className="mb-6">
          <ShopCarousel />
        </div>

        {/*  Categories */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <CategorySection />
        </div>

        {/*Most Viewed */}
       <div className="mt-20"> <MostView /></div>

      </div>
    </div>
  );
};

export default Category;
