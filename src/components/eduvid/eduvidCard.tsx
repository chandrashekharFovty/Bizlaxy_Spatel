import React from "react";
import personImg from "../../../public/euived1.png";
import personImg2 from "../../../public/euives2.png";
import official from "../../../public/whiteOfficialIcon.png";
import share from "../../../public/share.png";
import comment from "../../../public/comment.png";
import elipe from "../../../public/Ellipse 3.png";
import thumbLike from "../../../public/thunmlike.png";

// Sample content
const EduvidContent = [
  {
    id: 1,
    name: "Brian Turner",
    title: "Smart Business Strategies for Growth! 📈",
    avatar: personImg,
    banner: personImg2,
    likes: 5000,
    comments: 120,
    shares: 600,
  },
  {
    id: 2,
    name: "Jessica Alba",
    title: "5 Marketing Hacks to Double Your Reach!",
    avatar: personImg,
    banner: personImg2,
    likes: 3400,
    comments: 80,
    shares: 410,
  },
  {
    id: 3,
    name: "Michael Smith",
    title: "Innovate Like a Pro in 2025!",
    avatar: personImg,
    banner: personImg2,
    likes: 2700,
    comments: 50,
    shares: 300,
  },
   {
    id: 3,
    name: "Michael Smith",
    title: "Innovate Like a Pro in 2025!",
    avatar: personImg,
    banner: personImg2,
    likes: 2700,
    comments: 50,
    shares: 300,
  },
];

export default function BusinessCard() {
  return (
    <div className=" dark:dark-color w-full h-auto overflow-y-scroll scrollbar-hide flex flex-col items-center gap-6 ">
      {EduvidContent.map((item) => (
        <div
          key={item.id}
          className="w-[440px] h-[680px] bg-[#1f002b] rounded-3xl  text-white font-sans relative shadow-lg"
        >
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <img
              src={item.banner}
              alt="Banner"
              className="w-full h-full object-cover rounded-3xl opacity-80"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-between p-4">
            <div className="text-[24px] font-bold tracking-[3px] mb-4">Eduvid</div>

    {/* Sidebar Icons */}
<div className="absolute right-4 top-[74%] transform -translate-y-1/2 flex flex-col items-center space-y-6 p-4 rounded-2xl shadow-lg ">
  {/* Like */}
  <div className="flex flex-col items-center gap-2 cursor-pointer">
   <div className="bg-black/60 w-12 h-12 rounded-full flex items-center justify-center">
     <img src={thumbLike} alt="Like" className="w-[35px] h-[35px] p-1" />
   </div>
    <p className="text-base font-medium text-white">{item.likes}</p>
  </div>

  {/* Comment */}
  <div className="flex flex-col items-center gap-2 cursor-pointer">
      <div className="bg-black/60 w-12 h-12 rounded-full flex items-center justify-center">
    <img src={comment} alt="Comment" className="w-[35px] h-[35px]  p-1"/>
    </div>
    <p className="text-base font-medium text-white">{item.comments}</p>
  </div>

  {/* Share */}
  <div className="flex bg-black/60 w-12 h-12 flex-col items-center rounded-full gap-2 cursor-pointer">
       <div className="bg-black/60 w-12 h-12 rounded-full flex items-center justify-center">
    <img src="/share.png"alt="Share" className="w-[35px] h-[35px]  mt-2 p-1 " />
    </div>
    <p className="text-base font-medium text-white">{item.shares}</p>
  </div>

  {/* Dots */}
  <div className="flex gap-2  cursor-pointer">
   <div className="flex gap-2  mt-8 h-2 cursor-pointer">
     <img src={elipe} alt="." className=" opacity-80" />
    <img src={elipe} alt="." className=" opacity-80" />
    <img src={elipe} alt="." className=" opacity-80" />
   </div>
  </div>
</div>

            {/* Footer */}
            <div className="mt-auto">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-bold text-sm">{item.name}</p>
                <img src={official} alt="✔" className="w-4 h-4" />
                <button className=" border border-white px-2 py-0.5 rounded-md text-xs">
                  Follow
                </button>
              </div>
              <p className="text-sm text-gray-300 mb-1">{item.title}</p>
              <p className="text-xs text-purple-300 underline cursor-pointer">
                see more...
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
