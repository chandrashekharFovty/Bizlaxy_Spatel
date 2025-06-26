import React from "react";
// import { useNavigate } from "react-router-dom";
import headphones from "../../../../public/headphones.png"; 

function RightBar() {
//   const navigate = useNavigate();

  return (
    <div className=" dark:bg-gray-800 dark:text-white ml-4 border-l h-full border-gray-300 px-4">
      {/* Main Image */}
      <div className="flex justify-center mt-4">
        <img
          src={headphones}
          alt="headphones"
       className="h-[250px] w-[250px] border border-gray-200 rounded-xl object-contain"
        />
      </div>

       {/* Thumbnail Images */}
          <div className="flex flex-row justify-center gap-2 mb-4 mt-4">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={headphones}
                alt={`thumbnail-${i}`}
                className="h-[55px] w-[55px] border border-gray-200 rounded-xl object-contain"
              />
            ))}
          </div>


        {/* Product Info */}
          <p
            // onClick={() => navigate("/product-details")}
            className="dark:bg-gray-800 dark:text-white text-blue-600 text-sm cursor-pointer hover:underline mt-8 ml-4 font-bold"
          >
            Product Details
          </p>

          <div className="ml-4 mt-4 ">
            <label className="block text-sm text-gray-700  dark:text-white font-medium mb-1">
              Product Name
            </label>
            <input
              type="text"
              placeholder="SonicBeat Wireless Headphones"
              className="w-[300px] h-12 mb-4 px-2 py-1 border border-gray-300 rounded-xl"
            />

            <h3 className="text-sm font-semibold text-gray-800 mb-1">
              Product Description
            </h3>
            <p className="text-xs w-[285px] text-gray-500 border border-gray-300 rounded-xl p-2">
              Experience powerful sound and deep bass with SonicBeat wireless
              headphones. Engineered with noise isolation, long battery life,
              and a comfortable over-ear fit ideal for music, calls, and gaming.
            </p>
          </div>
        </div>
    //   </div>
    // </div>
  );
}

export default RightBar;
