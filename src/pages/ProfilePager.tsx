import React, { useState } from "react";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileTabs from "../components/profile/ProfileTabs";
import Sidebar from "../components/layout/Sidebar";
import { Link } from "react-router-dom";

type TabType = "post" | "eduvid" | "pitch" | "shop";

const ProfilePager: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("post");

  return (
    <>
    <div className="dark:bg-gray-800 dark:text-white bg-white w-full h-full text-black pb-[58px]">
      <div className="dark:bg-gray-800 dark:text-white flex max-md:flex-col max-md:items-stretch">
        <Sidebar />
        <div className="dark:bg-gray-800 dark:text-white max-md:w-full max-md:ml-10 md:ml-[244px] userProfile z-10">
          <div className="flex w-full flex-col items-stretch mt-2 max-md:max-w-full z-10">
            <ProfileHeader
              username="aarav.invests"
              fullName="Arav Mehta"
              bio="💼 VC | 🚀 Early-stage AI, SaaS & CleanTech | 🤝 Partner @ CapVision Capital."
              website="https://www.bizlaxy.com/"
              postsCount={48}
              followersCount="32.5K"
              followingCount={127}
              profileImage="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/77ee2a13878e5475d16b71f74e65e9101dc67f8d?placeholderIfAbsent=true"
              coverImage="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/d8baaafd5f56675475acaefa10801eb7315e942c?placeholderIfAbsent=true"
            />
            <div className="ml-6">
              <ProfileTabs defaultTab={activeTab} onTabChange={setActiveTab} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="max-md:w-full w-full max-md:ml-0 md:ml-[244px] investerProfile mr-4 z-10">
        <div className="items-stretch max-md:max-w-full z-10">
          <ProfileHeader
            username="aarav.invests"
            fullName="Arav Mehta"
            bio="💼 VC | 🚀 Early-stage AI, SaaS & CleanTech | 🤝 Partner @ CapVision Capital."
            website="https://www.bizlaxy.com/"
            postsCount={48}
            followersCount="32.5K"
            followingCount={127}
            profileImage="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/77ee2a13878e5475d16b71f74e65e9101dc67f8d?placeholderIfAbsent=true"
            coverImage="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/d8baaafd5f56675475acaefa10801eb7315e942c?placeholderIfAbsent=true"
          />
          <div className="ml-6 z-10">
            <ProfileTabs defaultTab={activeTab} onTabChange={setActiveTab} />
          </div>
        </div>
      </div> */}
    </div>
    </>
  );
};


export function profile(){
  const shivi="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/77ee2a13878e5475d16b71f74e65e9101dc67f8d?placeholderIfAbsent=true"
  return(
    <>
   |<div>
     <Link to="/profile">
    <img src={"https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/77ee2a13878e5475d16b71f74e65e9101dc67f8d?placeholderIfAbsent=true"}
    alt="profile"/>
    </Link>
   </div>
    </>
  )
}
export default ProfilePager;
