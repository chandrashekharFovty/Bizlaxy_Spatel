import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import { RightSidebar } from '@/components/layout/RightSidebar';
import MainContent from '@/components/pitch/MainContent';



// Main Component
const Pitch = () => {
  return (
    <div className="flex w-full h-screen overflow-hidden ">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 w-[245px] h-full z-50 bg-[#0f001a]">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="dark:bg-gray-800 dark:text-white  mr-[350px] ml-[245px]">
        <MainContent/>
      </div>

      {/* Right Sidebar */}
      <div className="fixed right-0 top-0 w-[350px] h-full z-50 bg-white">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Pitch;