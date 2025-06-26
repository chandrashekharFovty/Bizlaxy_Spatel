import React, { useState } from "react";

import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileTabs from "../components/profile/ProfileTabs";
import ProfileGallery from "../components/profile/ProfileGallery";
import Editprofile from "../components/profile/EditProfile";
import { title } from "process";
import InvesterProfile from "../components/profile/InvesterProfile";
import Sidebar from "../components/layout/Sidebar";

type TabType = "post" | "eduvid" | "pitch" | "shop";

const ProfilePager: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("post");
  const [isVisible, setIsVisible] = useState(false);

const path1 = "/profile";
const path2 = "/invester";
const path3 = "/editprofile";
const path4 ="/Infoprofile"

  const highlightsData = [
    {
      id: 1,
      title: "Business",
      HighlightImg:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/0637cafebd8ce154f8a9a144664dc6f06d3ca299?placeholderIfAbsent=true",
    },
    {
      id: 2,
      title: "Travel",
      HighlightImg:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/0637cafebd8ce154f8a9a144664dc6f06d3ca299?placeholderIfAbsent=true",
    },
    {
      id: 3,
      title: "Events",
      HighlightImg:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/0637cafebd8ce154f8a9a144664dc6f06d3ca299?placeholderIfAbsent=true",
    },
    {
      id: 4,
      title: "Public",
      HighlightImg:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/0637cafebd8ce154f8a9a144664dc6f06d3ca299?placeholderIfAbsent=true",
    },
    {
      id: 5,
      title: "Social",
      HighlightImg:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/0637cafebd8ce154f8a9a144664dc6f06d3ca299?placeholderIfAbsent=true",
    },
  ];

  // Sample gallery items
  const galleryItems = [
    {
      id: "1",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/c286384ab9a94f6ae63dddaf2109347578dc9fa7?placeholderIfAbsent=true",
    },
    {
      id: "2",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/215def76e11b54522b5f2ccb29cfa4f5dc529575?placeholderIfAbsent=true",
    },
    {
      id: "3",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/60ac0ced6ed1b523e975126699b3b75ffc79d062?placeholderIfAbsent=true",
    },
    {
      id: "4",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/96687f4430bb048dcaed31fd494fd3f319acc078?placeholderIfAbsent=true",
    },
    {
      id: "5",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/3cce3ea5bd280ad35322625e6ab9d5bb70d53a5b?placeholderIfAbsent=true",
    },
    {
      id: "6",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/702238110537ce44f87808f2771a5c6d38b32a8e?placeholderIfAbsent=true",
    },
    {
      id: "7",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/2e38cb955f8f2ccb06020da42c8984342a22a98f?placeholderIfAbsent=true",
    },
    {
      id: "8",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/349d0a7e73189f2186de6ab524fda161e2ea2e0d?placeholderIfAbsent=true",
    },
    {
      id: "9",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/1e7b1a459b8534a84114f833bc76783b8cb7df3a?placeholderIfAbsent=true",
    },
    {
      id: "10",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/702238110537ce44f87808f2771a5c6d38b32a8e?placeholderIfAbsent=true",
    },
    {
      id: "11",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/702238110537ce44f87808f2771a5c6d38b32a8e?placeholderIfAbsent=true",
    },
    {
      id: "12",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/2e38cb955f8f2ccb06020da42c8984342a22a98f?placeholderIfAbsent=true",
    },
  ];


  return (
    <div className="dark:bg-gray-800 dark:text-white bg-white w-full h-full text-black pb-[58px]">
      <div className="dark:bg-gray-800 dark:text-white flex max-md:flex-col max-md:items-stretch">
        <Sidebar/>
        <div className="dark:bg-gray-800 dark:text-white max-md:w-full max-md:ml-10 md:ml-[244px] userProfile z-10">
        <div className="flex w-full flex-col items-stretch mt-2 max-md:max-w-full z-10">
            <ProfileHeader
              username="mike_itrats" 
              fullName="Michael Roberts"
              bio="Passionate about funding innovative startups. Exploring new business opportunities."
              website="www.elitedevhub.com"
              postsCount={10}
              followersCount="12.5K"
              followingCount={325}
              profileImage="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/77ee2a13878e5475d16b71f74e65e9101dc67f8d?placeholderIfAbsent=true"
              coverImage="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/d8baaafd5f56675475acaefa10801eb7315e942c?placeholderIfAbsent=true"
            />
            <div className="ml-6">
              <ProfileTabs defaultTab={activeTab} onTabChange={setActiveTab} />
              <ProfileGallery items={galleryItems} />
            </div>
        </div>
        </div>
        <div className="max-md:w-full w-full max-md:ml-0 md:ml-[244px] investerProfile mr-4 hidden z-10">
          <div className="items-stretch max-md:max-w-full z-10">
             <InvesterProfile
              username="aarav.invests"
              fullName="Arav Mehta"
              bio="💼 VC | 🚀 Early-stage AI, SaaS & CleanTech | 🤝 Partner @ CapVision Capital."
              website="www.capvisioncapital.com"
              postsCount={48}
              followersCount="32.5K"
              followingCount={127}
              profileImage="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/77ee2a13878e5475d16b71f74e65e9101dc67f8d?placeholderIfAbsent=true"
              coverImage="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/d8baaafd5f56675475acaefa10801eb7315e942c?placeholderIfAbsent=true"
              />
              <div className="ml-6 z-10">
                <ProfileTabs defaultTab={activeTab} onTabChange={setActiveTab} />
                <ProfileGallery items={galleryItems} />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePager;
