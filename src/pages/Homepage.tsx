import React from "react"
import { PostList } from "@/components/feed/PostList";
import Sidebar from "@/components/layout/Sidebar";
import { RightSidebar } from "@/components/layout/RightSidebar";

const Homepage = () => {
  return (
    <>
  <div className="dark:dark-color relative w-full min-h-screen bg-white overflow-hidden">
  {/* Upper Purple Circle */}
  <div className="absolute top-[7%] left-[60%] w-[300px] h-[300px] rounded-full bg-purple-500/60 z-0" />

  {/* Lower Purple Circle */}
  <div className="absolute top-[55%] left-[15%] w-[300px] h-[300px] rounded-full bg-purple-500/60 z-0" />

  {/* Glass effect layer */}
  <div className="absolute inset-0 backdrop-blur-[50px] z-10"/>

  {/* Your content goes here */}
  <div className="relative z-10">
    {/* Page content */}
    <div className="w-screen h-screen flex gap-0 overflow-x-hidden">
      <div className="xl:w-1.5/12 md:overflow-hidden z-30"><Sidebar/></div>
      <div className="max-xl:ml-[240px] ml-[11%]  w-8/12"><PostList/></div>
       {/* Right Sidebar */}
            <div className="fixed right-0 top-0 w-[350px] h-full z-40 bg-white">
              <RightSidebar />
            </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Homepage
