import Sidebar from "../../layout/Sidebar";
import React, { useRef, useState } from "react";
import RightBar from "./RightBar";
import { MdOutlineImage } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { IoVideocamOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { PiEraserDuotone } from "react-icons/pi";

function NextPages() {
  const navigate = useNavigate();

  const handleNextButton = () => {
    navigate("/priceInvetory");
  };

  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const view360InputRef = useRef(null);
  const bgRemoveInputRef = useRef(null);

  const [images, setImages] = useState([]);
  const [video, setVideo] = useState(null);
  const [view360, setView360] = useState(null);
  const [bgRemoved, setBgRemoved] = useState(null);

  const handleIconClick = (ref) => {
    ref.current?.click();
  };

  const handleMultipleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length > 5) {
      alert("You can upload a maximum of 5 images.");
      return;
    }
    const fileURLs = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...fileURLs]);
  };

  const handleSingleFileChange = (e, setFile) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setFile(fileURL);
    }
  };

  const handleRemoveImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      {/* Sidebar */}
      <div className="fixed w-[245px] h-full z-40 bg-[#0f001a]">
        <Sidebar />
      </div>

      {/* Main Content and RightBar */}
      <div className="flex ml-[245px]">
        <div className="w-3/4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md min-h-screen flex flex-col">
          {/* Header */}
          <button className="flex items-center text-lg text-black dark:text-white mb-4">
            &lt;
            <span className="text-sm ml-2 mt-1">Basic Product Information</span>
          </button>

          <h1 className="text-xl font-bold text-gray-700 dark:text-white mb-6">
            Add Product Images
          </h1>

          {/* Upload Inputs */}
          <div className="space-y-6 dark:text-white ">
            <label
              htmlFor="product-images"
              className="flex items-center w-[800px] px-4 py-2 border rounded-xl cursor-pointer bg-white  hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-white gap-2"
            >
              <span className="text-gray-400">
                Upload Product Images (min 3, max 5)
              </span>
              <MdOutlineImage className="text-xl text-black ml-[420px]" />
            </label>
            <input
              id="product-images"
              type="file"
              accept="image/*"
              multiple
              hidden
              ref={imageInputRef}
              onChange={handleMultipleImageChange}
            />

          
            <div className="flex flex-wrap  mt-4">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="relative w-[70px] h-[70px] border rounded-xl overflow-hidden"
                >
                  <img
                    src={img}
                    alt={`upload-${index}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md hover:bg-red-500 hover:text-white transition"
                  >
                    <IoMdClose />
                  </button>
                </div>
              ))}
            </div>

            <label
              htmlFor="product-video"
              className="flex items-center w-[800px] px-4 py-2 border rounded-xl cursor-pointer bg-white hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-white gap-2"
            >
              <span className="text-gray-400">
                Upload Product Video (optional)
              </span>
              <IoVideocamOutline className="text-xl text-black ml-[470px]" />
            </label>
            <input
              id="product-video"
              type="file"
              accept="video/*"
              hidden
              ref={videoInputRef}
              onChange={(e) => handleSingleFileChange(e, setVideo)}
            />

            <label
              htmlFor="product-360"
              className="flex items-center w-[800px] px-4 py-2 border rounded-xl cursor-pointer bg-white hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-white gap-2"
            >
              <span className="text-gray-400">Upload 360° View</span>
              <MdOutlineImage className="text-xl text-black ml-[585px]" />
            </label>
            <input
              id="product-360"
              type="file"
              accept="image/*"
              hidden
              ref={view360InputRef}
              onChange={(e) => handleSingleFileChange(e, setView360)}
            />

            <div>
              <label
                htmlFor="bg-remove-input"
                className="flex items-center w-[800px] px-4 py-2 border rounded-xl cursor-pointer bg-white hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-7  00 dark:text-white "
              >
                <span className="text-gray-400">
                 Remove Background
                </span>
                <PiEraserDuotone  className="text-xl text black ml-[570px]" />
              </label>
              <input
                id="bg-remove-input"
                type="file"
                accept="image/*"
                hidden
                ref={bgRemoveInputRef}
                onChange={(e) => handleSingleFileChange(e, setBgRemoved)}
              />
              {/* {bgRemoved && (
                <img
                  src={bgRemoved}
                  alt="bg-removed"
                  className="w-32 h-32 mt-2 object-cover rounded border"
                />
              )} */}
            </div>
          </div>

          {/* Next Button */}
          <div className="mt-8">
            <button
              className="px-4 py-2 bg-blue-600 rounded-xl text-white w-[800px] rounded hover:bg-blue-700"
              onClick={handleNextButton}
            >
              Next
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="fixed right-0 top-0 h-full z-50 bg-white">
          <RightBar />
        </div>
      </div>
    </>
  );
}

export default NextPages;
