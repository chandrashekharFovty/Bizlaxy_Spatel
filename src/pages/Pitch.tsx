import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import { RightSidebar } from '@/components/layout/RightSidebar';

// Media Assets
import pitch from '../../public/pitch.png';
import pitch1 from '../../public/Aprean.png';
import pitch2 from '../../public/pitch.png';

import share from '../../public/share.png';
import comment from '../../public/comment.png';
import elipe from '../../public/Ellipse 3.png';
import thumbLike from '../../public/thunmlike.png';
import icon_pitch from '../../public/icon_pitch.png';
import personImg from '../../public/euived1.png';
import personImg2 from '../../public/euived1.png';

// Static Content
const EduvidContent = [
  {
    id: 1,
    name: 'Brian Turner',
    title: 'Smart Business Strategies for Growth! 📈',
    avatar: personImg,
    banner: personImg2,
    likes: 5000,
    comments: 120,
    shares: 600,
  },
  {
    id: 2,
    name: 'Jessica Alba',
    title: '5 Marketing Hacks to Double Your Reach!',
    avatar: personImg,
    banner: personImg2,
    likes: 3400,
    comments: 80,
    shares: 410,
  },
  {
    id: 3,
    name: 'Michael Smith',
    title: 'Innovate Like a Pro in 2025!',
    avatar: personImg,
    banner: personImg2,
    likes: 2700,
    comments: 50,
    shares: 300,
  },
];

const pitchMedia = [
  {
    id: 1,
    type: 'image',
    src: pitch,
    title: '₹60 lakh for 1% equity',
    description:
      '⚡ Introducing Neoseland Pro, the future of smart kitchen appliances, building something innovative, scalable, and ready to disrupt! With a solid business plan and a clear vision, we’re seeking 1% equity at a valuation of 60 crore. If you\'re an investor looking for a big opportunity, let\'s connect!',
    likes: 3000,
    comments: 120,
    shares: 50,
  },
  {
    id: 2,
    type: 'image',
    src: pitch1,
    title: '₹30 lakh for 5% equity',
    description:
      '🚀 Meet AquaBot – a compact, AI-powered home-cleaning robot revolutionizing floor care. Seeking visionary investors for expansion!',
    likes: 2100,
    comments: 80,
    shares: 20,
  },
  {
    id: 3,
    type: 'youtube',
    src: 'https://www.youtube.com/embed/IuxxSldSvYw',
    title: '₹80 lakh for 2% equity',
    description:
      '⚡ Introducing Neoseland Pro, the future of smart kitchen appliances, building something innovative, scalable, and ready to disrupt! With a solid business plan and a clear vision, we’re seeking 1% equity at a valuation of 60 crore. If you\'re an investor looking for a big opportunity, let\'s connect!',
    likes: 5000,
    comments: 190,
    shares: 60,
  },
  {
    id: 4,
    type: 'image',
    src: pitch2,
    title: '₹50 lakh for 10% equity',
    description:
      '🌿 Introducing PlantSync, an IoT-powered smart gardening solution for modern homes. Let’s grow together!',
    likes: 1500,
    comments: 60,
    shares: 25,
  },
];

// Main Component
const Pitch = () => {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 w-[245px] h-full z-50 bg-[#0f001a]">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="dark:bg-gray-800 dark:text-white flex-1 ml-[245px] h-screen mt-4 mr-[350px] overflow-y-auto scrollbar-hide py-6 px-4 space-y-6">
        {pitchMedia.map((media, index) => (
          <div
            key={media.id}
            className="relative w-[350px] h-full bg-black rounded-[22px] text-white shadow-lg overflow-hidden mx-auto"
          >
            {/* Render Media */}
            {media.type === 'image' && (
              <img
                src={media.src}
                alt={`Pitch ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover opacity-90 z-0"
              />
            )}
            {media.type === 'youtube' && (
              <div className="w-full h-[650px]">
                <iframe
                  className="w-full h-full rounded-xl"
                  src={media.src}
                  title={media.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            {/* Top Label */}
            <div className="absolute top-4 left-4 z-20 flex items-center text-lg font-semibold">
              Pitch
              <img
                src={icon_pitch}
                alt="icon"
                className="w-4 h-4 ml-[250px] mt-1 border border-white"
              />
            </div>

            {/* Action Icons */}
            <div className="absolute right-0  top-[72%]  transform -translate-y-1/2 flex flex-col items-center space-y-2 p-4 rounded-2xl shadow-lg">
              {/* Like */}
              <div className="flex flex-col items-center gap-2 cursor-pointer">
                <div className="bg-black/60 w-10 h-10 rounded-full flex items-center justify-center">
                  <img src={thumbLike} alt="Like" className="w-[27px] h-[27px]" />
                </div>
                <p className="text-base font-medium text-white">{media.likes}</p>
              </div>

              {/* Comment */}
              <div className="flex flex-col items-center gap-2 cursor-pointer">
                <div className="bg-black/60 w-10 h-10 rounded-full flex items-center justify-center">
                  <img src={comment} alt="Comment" className="w-[27px] h-[27px]"  />
                </div>
                <p className="text-base font-medium text-white">{media.comments}</p>
              </div>

              {/* Share */}
              <div className="flex flex-col items-center gap-2 cursor-pointer">
                <div className="bg-black/60 w-10 h-10 rounded-full flex items-center justify-center">
                  <img src={share} alt="Share" className="w-[27px] h-[25px] mt-1"  />
                </div>
                <p className="text-base font-medium text-white">{media.shares}</p>
              </div>

              {/* Dots */}
              <div className="flex gap-2 mt-8 cursor-pointer">
                {[...Array(3)].map((_, idx) => (
                  <img key={idx} src={elipe} alt="dot" className="opacity-100" />
                ))}
              </div>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-0 z-10 w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent">
              <h3 className="text-sm w-[300px] ml-2 font-bold mb-2">{media.title}</h3>
              <p className="text-xs text-gray-300 w-[280px] h-[100px] ml-2 mb-2 scrollbar-hide overflow-auto">
                {media.description}
              </p>
              <hr className="border-gray-400" />
              <button className="w-full bg-[#3e3f40] py-2 rounded-md text-sm">
                More Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Right Sidebar */}
      <div className="fixed right-0 top-0 w-[350px] h-full z-50 bg-white">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Pitch;
