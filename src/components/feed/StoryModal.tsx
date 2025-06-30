import React from "react";
import { X, Heart, Send, ArrowRightCircle } from "lucide-react";
import { Link } from "react-router-dom";
import StoryPopover from "./StoryPopover";
import { StoryItem } from "./Story";
import storyView from "../../../public/storyImageView.png";

interface Props {
  story: StoryItem;
  onClose: () => void;
}

const StoryModal: React.FC<Props> = ({ story, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center px-4 py-6">
      {/* Close and Logo */}
      <div className="absolute top-4 left-6 text-white text-xl  ">
        <div className="cursor-pointer mt-5 max-lg:text-[16px] max-md:text-[16px] max-md:tracking-[0px] max-lg:tracking-[1px] text-[22px] md:font-normal uppercase ml-5 max-lg:w-[90px] max-lg:ml-1 w-[124px] h-[28px] tracking-[3px]">
          <Link to="/feed" className="font-medium">
            Bizlaxy
          </Link>
        </div>
      </div>
      <div className="absolute top-4 right-6 mt-5">
        <X onClick={onClose} className="text-white w-6 h-6 cursor-pointer" />
      </div>

      {/* Modal Container */}
      <div className="relative bg-black/70 w-full max-w-[400px] h-[90%] rounded-xl flex flex-col justify-between overflow-hidden shadow-lg ">
        {/* Top Section */}
        <div className="">
          {/* Progress Bars */}
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <progress
                key={index}
                value={index === 0 ? 100 : 0}
                max={100}
                className="w-full h-[3px] rounded bg-gray-600 [&::-webkit-progress-bar]:bg-gray-600 [&::-webkit-progress-value]:bg-white"
              />
            ))}
          </div>

          {/* User Info */}
          <div className="relative flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src={story.imageSrc}
                alt={story.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <p className="text-white text-sm font-semibold">{story.name}</p>
            </div>
            <StoryPopover />
          </div>
        </div>

        {/* Story Image */}
        <div className="flex-1">
          <img
            src={storyView}
            alt={story.name}
            className="w-full h-[480px] object-cover"
          />
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center border-t border-white/10">
          <input
            type="text"
            placeholder="Send Message"
            className="flex-1 mr-3 h-9 bg-transparent border outline-white text-white px-3 rounded-xl text-sm placeholder-white/60"
          />
          <div className="flex gap-3">
            <Heart className="text-white w-5 h-5 cursor-pointer" />
            <Send className="text-white w-5 h-5 cursor-pointer" />
          </div>
        </div>
      {/* Next Story Button */}
      </div>
      <button
        className="absolute max-2xl:left-[64%] max-xl:left-[64%]  max-sm:left-[78%] max-md:left-[90%] top-[44%] bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition"
        aria-label="Next Story"
      >
        <ArrowRightCircle className="w-6 h-6" />
      </button>

    </div>
  );
};

export default StoryModal;