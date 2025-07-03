import React, { useEffect, useState } from "react";
import { MdExpandLess } from "react-icons/md";
import { Link } from "react-router-dom";

const images = [
  {
    img: "/image 161.png",
    title: "Provide Basic Information",
    description:
      "Fill in your full name, date of birth, and contact details to begin the process.",
  },
  {
    img: "/image 160.png",
    title: "Verify Contact Information",
    description:
      "Enter the OTP sent to your registered email or phone number to confirm your identity.",
  },
  {
    img: "/image 162.png",
    title: "Upload Required Documents",
    description:
      "Government ID or Proof of Address",
  },
  {
    img: "/image 164.png",
    title: "Selfie for Authentication",
    description:
      "Take a real-time selfie to match with your submitted documents for added security.",
  },
  {
    img: "/image 163.png",
    title: "Submit for Review",
    description:
      "Review your details and submit. Verification usually completes within a few minutes.",
  },
];



function BlueVerification() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      {/* Back Link */}
      <Link to="/settings" className="flex items-center font-semibold mb-4">
        <MdExpandLess className="transform rotate-[-90deg] text-[40px]" />
      </Link>

      {/* Title & Description */}
      <div className="mb-6 text-center">
        <h1 className="mt-8 text-2xl font-bold mb-2">Blue Verification</h1>
        <p className="text-gray-700 mt-2 text-sm">
          Build credibility and trust across the Bizlaxy ecosystem <br />
          by completing your investor verification. Verified <br />
          accounts gain access to exclusive pitch insights, <br />
          investor tools, and visibility in trusted networks.
        </p>
      </div>

      {/* Proper Slide Container */}

      <div className="relative overflow-hidden w-[340px] h-full mx-auto">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 20}%)`,
            width: `${images.length * 100}%`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-[340px]  h-[280px] mt-14 flex-shrink-0 text-center relative"
            >
              {/* Image with overlay text */}
              <img
                src={image.img}
                alt={image.title}
                className="ml-20 w-[210px] h-[200px] object-cover"
              />
              <div className="absolute left-0 mt-2 right-0 px-4 text-white">
                <h3 className="font-semibold  text-black text-lg">
                  {image.title}
                </h3>
                <p className="text-sm text-black">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    <button
  className="mt-14 ml-4  bg-blue-800 text-xl font-semibold rounded text-white h-14 w-[370px] flex items-center justify-center"
>
  Apply For Verification
</button>

    </div>
  );
}

export default BlueVerification;
