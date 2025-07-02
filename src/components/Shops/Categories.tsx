import React from "react";
import CategorySection from "./AllCategory";
import MostView from "./MostView";
import ShopCarousel from "./ShopCarousel";
import { Sidebar } from "lucide-react";
import { Link } from "react-router-dom";
import { SearchInput } from "../ui/SearchInput";


const Category = () => {
  return (
    <div className="dark:dark-color flex ">
   
      {/* <div className="w-[250px] fixed top-0 left-0 h-screen bg-white shadow-md z-20"> */}
     <Sidebar/>
      {/* </div> */}

      <div className="dark:dark-color ml-[250px] p-4 w-full max-w-screen-xl mx-auto">
        {/* Search Bar */}
        <div className=" dark:dark-color h-[40px] my-5 flex justify-between items-center">
          <div className=" dark:dark-color dark:border-solid dark:border-[#a89bfc] w-[95%] mt-4 h-full flex  px-4">
            {/* <img src="/searchdark.png" alt="Search Icon" className="  w-5 h-5 my-auto" /> */}
          <SearchInput/>
          </div>
          <Link to="/shopprofile">
          <div className="dark:border-solid dark:border-[#a89bfc] text-center rounded-full flex justify-center items-center mt-4 border w-12 h-12 cursor-pointer">
            <img src="/isShop.png" alt="Shop" className="w-6 h-6" />
          </div>
          </Link>
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
