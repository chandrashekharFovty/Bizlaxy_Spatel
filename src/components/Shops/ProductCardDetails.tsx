import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import likeGray from "../../../public/likeGray.png";
import shareProduct from "../../../public/productshare.png";
import { Link } from "react-router-dom";
import Sidebar from "../layout/Sidebar";
const PreviewImagesDetails = [
  { Image: "../../../public/below01.png" },
  { Image: "../../../public/below02.png" },
  { Image: "../../../public/below03.png" },
  { Image: "../../../public/below04.png" },
  { Image: "../../../public/below05.png" },
];

const ProductColors = ["red", "blue", "green", "yellow", "black"];

const colorClasses = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
  black: "bg-black",
};

const ProductDetailsPage = ({ onBack }) => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("black");
  const [detailImage, setDetailImage] = useState(PreviewImagesDetails[0].Image); // default to first image

  return (
    <div className="ml-[245px] p-6 flex flex-col mx-auto gap-7">
      <div className="w-[250px] fixed top-0 left-0 h-screen bg-white shadow-md z-20">
        <Sidebar />
      </div>
      {/* categories section */}
      <div className="flex flex-col items-start gap-2 justify-between flex-wrap mt-[30px] max-md:max-w-full max-md:mr-[3px]">
        <button>
          <Link
            to={`/products/Apparel`}
            className="text-sm text-blue-600 hover:underline"
          >
            &lt; Back to Apparel
          </Link>
        </button>
        <p className="text-[#050505] text-sm self-stretch cursor-pointer my-auto">
          Shop
          <span>
            &gt; Apparel &gt;<span onClick={onBack}>Hoodies</span> &gt; Bewakoof
            Star Wars Oversized Hoodie
          </span>
        </p>
      </div>
      <div className="flex gap-8">
        {/* Image Section */}
        <div className="flex flex-col gap-4">
          <img
            src={detailImage}
            alt="Star Wars Hoodie"
            className="rounded-xl h-[610px] w-full cursor-pointer"
          />
          <div className="flex gap-2 overflow-x-auto">
            {PreviewImagesDetails.map((preview, index) => (
              <div
                key={index}
                className={`w-20 h-20 rounded overflow-hidden flex-shrink-0 border-2 ${
                  detailImage === preview.Image
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              >
                <img
                  src={preview.Image}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => setDetailImage(preview.Image)}
                />
              </div>
            ))}
          </div>
        </div>
        {/*btns Section */}
        <div className="flex flex-col justify-between    items-center h-[610px]">
          <div>
            <div className="mb-8 bg-gray-300 rounded-xl flex items-center justify-center px-5 py-2 cursor-pointer w-[52px] h-[52px] p-4  ">
              <img src={shareProduct} alt="" className="w-5 h-4" />
            </div>
            <div className="mb-8 bg-gray-300 rounded-xl flex items-center justify-center px-5 py-2 cursor-pointer w-[52px] h-[52px] p-4  ">
              <img src={likeGray} alt="💝" className="w-5 h-4" />
            </div>
          </div>
          <div>
            <div className="mb-8 bg-gray-300 rounded-xl flex items-center justify-center px-5 py-2 cursor-pointer w-[52px] h-[52px] p-4 ">
              &lt;
            </div>
            <div className="mb-8 bg-gray-300 rounded-xl flex items-center justify-center px-5 py-2 cursor-pointer w-[52px] h-[52px] p-4  ">
              &gt;
            </div>
          </div>
        </div>
        {/* Info Section */}
        <div className="space-y-4 w-[90%] pr-5">
          <h1 className="text-4xl font-bold">
            Bewakoof Star Wars Oversized Hoodie
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <span className="line-through text-gray-500">₹2,999</span>
              <span className="text-xl font-semibold text-red-600">₹1,299</span>
            </div>

            <div className="flex gap-4">
              <span className="text-sm text-gray-500">2,136 reviews</span>
              <span className="text-yellow-500">★ 4.3</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Description:</h3>
            <p className="text-gray-700 text-sm">
              Channel your inner Jedi with this officially licensed Star Wars
              Oversized Hoodie from Bewakoof. Made with soft fleece-blend
              fabric, this hoodie features a bold front graphic inspired by the
              galaxy far, far away. The drop-shoulder design and relaxed fit
              give it a streetwear vibe that’s both comfortable and stylish.
            </p>
          </div>
          <div>
            <div className="flex gap-2 mt-2">
              <div>
                <span className="">
                  Color:
                  <span className="font-semibold">
                    Black with Star Wars Graphic Print
                  </span>
                </span>
                <div className="flex gap-2 mt-2">
                  {ProductColors.map((color, idx) => (
                    <div
                      key={idx}
                      className="flex gap-5 border p-1 rounded-2xl"
                    >
                      <button
                        key={idx}
                        onClick={() => setSelectedColor(color)}
                        className={`w-16 h-10 rounded-xl border ${
                          selectedColor === color
                            ? "border rounded-xl border-black"
                            : ""
                        } ${colorClasses[color]}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full flex justify-between">
              <p>
                <span className="">
                  Size:<span className="font-semibold"> 8</span>
                </span>
              </p>
              <p>
                <span className="underline text-gray-500">view Size Chart</span>
              </p>
            </div>
            <div className="flex gap-3 mt-2">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size
                      ? "text-black font-semibold bg-gray-100 border border-black"
                      : "bg-white font-semibold text-black border"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-4 mt-4 w-[520px] h-[58px]">
            <Button className="bg-purple-600 rounded-xl w-[296px] h-full hover:bg-purple-700 font-medium text-[20px] text-white">
              Contact Seller
            </Button>
            <Button className="bg-gray-100 rounded-xl w-[200px] h-full hover:bg-gray-200 font-medium text-[20px] text-black">
              Add to Cart
            </Button>
          </div>
          <a
            href="#"
            className="text-sm text-gray-500 underline mt-2 inline-block"
          >
            Delivery T&C
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
