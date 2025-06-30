import React from "react";
import ReelCard from "../components/eduvid/eduvidCard";
import Sidebar from "@/components/layout/Sidebar";
import { RightSidebar } from "@/components/layout/RightSidebar";

const reelsData = [
  {
    username: "john_doe",
    caption: "Enjoying the view from the mountains 🏔️ #travel #adventure",
    videoUrl: "/videos/reel1.mp4",
    profileImage: "/images/user1.jpg",
  },
  {
    username: "emma_w",
    caption: "Behind the scenes of our latest shoot 🎬✨ #bts #film",
    videoUrl: "/videos/reel2.mp4",
    profileImage: "/images/user2.jpg",
  },
  {
    username: "techguru",
    caption: "AI is changing the game 🤖💡 #tech #future",
    videoUrl: "/videos/reel3.mp4",
    profileImage: "/images/user3.jpg",
  },
];

const ReelsPage = () => {
  return (
    <div className="dark:dark-color w-screen h-auto flex overflow-x-hidden overflow-y-clip">
      <div className="w-1/12 z-50"><Sidebar/></div>
      <div className="dark:dark-color w-8/12 h-full z-0 flex justify-center bg-gray-100 overflow-x-hidden overflow-y-clip">
      <div className="ml-[412px] mr-[290px] my-5 mb-3 relative transparent rounded-3xl">
         {/* {reelsData.map((reel, index) => (
        <ReelCard key={index} {...reel} />
      ))} */}
      <ReelCard/>
      </div>
      </div>
       {/* Right Sidebar */}
            <div className="fixed right-0 top-0 w-[350px] h-full z-50 bg-white">
              <RightSidebar />
            </div>
    </div>
    
  );
};

export default ReelsPage;
