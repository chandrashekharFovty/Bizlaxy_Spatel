import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import likeGray from "../../../public/likeGray.png";
import shareProduct from "../../../public/productshare.png";
import { Link } from "react-router-dom";
import Sidebar from "../layout/Sidebar";
import { useLocation } from "react-router-dom";
import { MdIosShare } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";

const ProductColors = ["red", "blue", "green", "yellow", "black"];

const colorClasses = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
  black: "bg-black",
};

const ProductDetailsPage = ({ onBack }) => {
  const [isChartOpen, setIsChartOpen] = useState(false);
  const location = useLocation();
  const product = location.state?.product;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevImage = () => {
    if (PreviewImagesDetails.length === 0) return;

    const prevIndex =
      currentIndex === 0 ? PreviewImagesDetails.length - 1 : currentIndex - 1;

    setCurrentIndex(prevIndex);
    setDetailImage(PreviewImagesDetails[prevIndex]);
  };

  const handleNextImage = () => {
    if (PreviewImagesDetails.length === 0) return;

    const nextIndex =
      currentIndex === PreviewImagesDetails.length - 1 ? 0 : currentIndex + 1;

    setCurrentIndex(nextIndex);
    setDetailImage(PreviewImagesDetails[nextIndex]);
  };

  const PreviewImagesDetails = product?.previews || [];

  const [detailImage, setDetailImage] = useState(
    product?.img || product?.previews?.[0]
  );

  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("black");

  if (!product) {
    return <p>No product data found. Please go back and select a product.</p>;
  }

  return (
    <div className="ml-[245px] p-6 flex flex-col mx-auto gap-7">
      <div className="w-[250px] fixed top-0 left-0 h-screen bg-white shadow-md z-20">
        <Sidebar />
      </div>
      {/* categories section */}
      <div className="flex flex-col items-start gap-2 justify-between flex-wrap max-md:max-w-full max-md:mr-[3px]">
        <Link
          to="/shopproduct"
          className="text-sm text-blue-600 hover:underline"
        >
          &lt; Back to Hoodies
        </Link>

        <p className="text-[#050505] text-sm self-stretch my-auto">
          <Link to="/shop" className="hover:underline">
            Shop
          </Link>
          <span className="mx-1">&gt;</span>
          <Link to="/apparel" className="hover:underline">
            Apparel
          </Link>
          <span className="mx-1">&gt;</span>
          <Link to="/shopproduct" className="hover:underline">
            Hoodies
          </Link>
        </p>
      </div>

      <div className="flex gap-8">
        {/* Image Section */}
        <div className="flex flex-col gap-4">
          <img
            src={detailImage}
            alt="Star Wars Hoodie"
            className="rounded-xl h-[510px] w-full cursor-pointer"
          />
          <div className="flex gap-2 overflow-x-auto">
            {PreviewImagesDetails.map((preview, index) => (
              <div
                key={index}
                className={`w-20 h-20 rounded overflow-hidden flex-shrink-0 border-2 ${
                  detailImage === preview
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              >
                <img
                  src={preview}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => setDetailImage(preview)}
                />
              </div>
            ))}
          </div>
        </div>
        {/*btns Section */}
        <div className="flex flex-col justify-between    items-center h-[610px]">
          <div>
            <div className="mb-4 bg-gray-300 rounded-xl flex items-center justify-center px-5 py-2 cursor-pointer h-14 p-4  ">
              <MdIosShare className="text-2xl" />
            </div>
            <div className="mb-8 bg-gray-300 rounded-xl flex items-center justify-center px-5 py-2 cursor-pointer h-14  p-4  ">
              <IoIosHeartEmpty className="text-2xl" />
            </div>
          </div>
          <div>
            <div
              className="mb-4 bg-gray-300 rounded-xl flex items-center justify-center px-5 py-2 cursor-pointer w-[52px] h-[52px] p-4"
              onClick={handlePrevImage}
            >
              &lt;
            </div>
            <div
              className="mb-8 bg-gray-300 rounded-xl flex items-center justify-center px-5 py-2 cursor-pointer w-[52px] h-[52px] p-4"
              onClick={handleNextImage}
            >
              &gt;
            </div>
          </div>
        </div>
        {/* Info Section */}
        <div className="space-y-4 w-[90%] pr-5">
          {/* <h1 className="text-4xl font-bold">
            Bewakoof Star Wars Oversized Hoodie
          </h1> */}
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
                <span
                  className="underline text-gray-500 cursor-pointer"
                  onClick={() => setIsChartOpen(true)}
                >
                  View Size Chart
                </span>

                {/* The modal */}
                {isChartOpen && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
                    <div className="bg-gray-100 p-6 rounded-xl shadow">
                      <h2 className="text-xl ml-24 font-bold mb-4">
                        Size Chart
                      </h2>

                      <table className="table-auto border-collapse w-full">
                        <thead>
                          <tr>
                            <th className="border border-gray-400 px-4 py-2">
                              Size
                            </th>
                            <th className="border  border-gray-400 px-4 py-2">
                              Waist
                            </th>
                            <th className="border  border-gray-400 px-4 py-2">
                              Hips
                            </th>
                            <th className="border  border-gray-400 px-4 py-2">
                              Length
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border  border-gray-400 px-4 py-2">
                              XS
                            </td>
                            <td className="border  border-gray-400 px-4 py-2">
                              34"
                            </td>
                            <td className="border  border-gray-400 px-4 py-2">
                              36"
                            </td>
                            <td className="border  border-gray-400 px-4 py-2">
                              38"
                            </td>
                          </tr>
                          <tr>
                            <td className="border  border-gray-400 px-4 py-2">
                              S
                            </td>
                            <td className="border  border-gray-400 px-4 py-2">
                              36"
                            </td>
                            <td className="border  border-gray-400 px-4 py-2">
                              38"
                            </td>
                            <td className="border     border-gray-400 px-4 py-2">
                              40"
                            </td>
                          </tr>
                          <tr>
                            <td className="border  border-gray-400 px-4 py-2">M</td>
                            <td className="border  border-gray-400 px-4 py-2">38"</td>
                            <td className="border  border-gray-400 px-4 py-2">40"</td>
                            <td className="border  border-gray-400 px-4 py-2">42"</td>
                          </tr>
                          <tr>
                            <td className="border  border-gray-400 px-4 py-2">L</td>
                            <td className="border  border-gray-400 px-4 py-2">40"</td>
                            <td className="border  border-gray-400 px-4 py-2">42"</td>
                            <td className="border  border-gray-400 px-4 py-2">44"</td>
                          </tr>
                        </tbody>
                      </table>

                      <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={() => setIsChartOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </p>
            </div>
            <div className="flex gap-3 mt-2">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-xl ${
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
            {/* <Button className="bg-gray-100 rounded-xl w-[200px] h-full hover:bg-gray-200 font-medium text-[20px] text-black">
              Add to Cart
            </Button> */}
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
