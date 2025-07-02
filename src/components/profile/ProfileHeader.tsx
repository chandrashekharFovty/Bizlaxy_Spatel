import React, { useState } from "react";
import Editprofile from "./EditProfile";
import { Link } from "react-router-dom";
import MoreSetting from "../MoreSettingMobile/MoreSetting";
import { CgDetailsMore } from "react-icons/cg";
// import { ProfileInfo } from "./ProfileInfo";

// const [open, setOpen] = useState(false);

interface ProfileHeaderProps {
  username: string;
  fullName: string;
  bio: string;
  website: string;
  postsCount: string | number;
  followersCount: string | number;
  followingCount: string | number;
  profileImage: string;
  coverImage: string;
}
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
    title: "Add",
    HighlightImg:
      "/AddHighlights.png",
  },
];

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  username,
  fullName,
  bio,
  website,
  postsCount,
  followersCount,
  followingCount,
  profileImage,
  coverImage,
}) => {
  return (
    <>
      <div className="dark:dark-color flex items-center w-[227px] h-[42px] gap-2 text-xl text-[#050505] font-bold whitespace-nowrap tracking-[-0.24px] ml-[27px] mt-2 max-md:ml-2.5 z-10">
        <div className="dark:dark-color text-[#050505] font-bold">
          {username}
        </div>
        <img src="/blueOfficialIcon.png" alt="🔹" className="w-3 h-3" />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/7eb8167ebc03b067106013d277e8da366e8ec872?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[22px] h-[22px] self-stretch shrink-0 my-auto"
        /><div className="lg:hidden">
          <Link to="/moresetting" className=""><CgDetailsMore/></Link></div>
      </div>
      <img src={coverImage} className="z-10 border-l-transparent" />
      <div className="w-full h-full flex mt-[-68px] flex-col items-stretch pl-[20px] pr-0.5 max-md:max-w-full max-md:pl-5 z-10">
        <div className="flex w-full items-stretch gap-[40px_70px] flex-wrap max-md:max-w-full">
          <div className="grow w-6/12 shrink basis-auto max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-[168px] h-[168px] max-md:w-full max-md:ml-0 rounded-xl">
                <img
                  src={profileImage}
                  className="aspect-[1/1] object-contain w-full h-full shadow-[0px_1px_4px_2px_rgba(0,0,0,0.25)] shrink-0 max-w-full max-md:mt-10 rounded-xl"
                />
              </div>
              <div className="w-[256px] h-[63px] ml-5 max-md:w-full max-md:ml-0">
                <div className="w-full h-full flex items-center gap-[18px] text-[#050505] whitespace-nowrap mt-[88px] max-md:mt-10">
                  <div className="self-stretch flex flex-col items-center justify-center h-full w-[61px] my-auto">
                    <div className="dark:text-white text-[#050505] text-[26px] font-medium tracking-[-0.26px]">
                      {postsCount}
                    </div>
                    <div className=" dark:dark-color text-[#050505] text-base font-normal tracking-[-0.16px]">
                      Post
                    </div>
                  </div>
                  <div className="self-stretch w-0 shrink-0 h-[38px] my-auto border-[rgba(178,178,178,1)] border-solid border" />
                  <div className="self-stretch flex flex-col items-center justify-center w-[61px] my-auto">
                    <div className="dark:dark-color text-[#050505] text-[26px] font-medium tracking-[-0.26px]">
                      {followersCount}
                    </div>
                    <div className=" dark:dark-color text-[#050505] text-base font-normal tracking-[-0.16px]">
                      Followers
                    </div>
                  </div>
                  <div className="self-stretch w-0 shrink-0 h-[38px] my-auto border-[rgba(178,178,178,1)] border-solid border" />
                  <div className="self-stretch flex flex-col items-center justify-center w-[62px] my-auto">
                    <div className="dark:dark-color text-[#050505] text-center text-[26px] font-medium tracking-[-0.26px]">
                      {followingCount}
                    </div>
                    <div className=" dark:dark-color text-[#050505] text-base font-normal tracking-[-0.16px]">
                      Following
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-5/12 items-center gap-2.5 text-base text-[#050505] font-medium text-center tracking-[-0.16px] mt-[97px] max-md:max-w-full max-md:mt-10">
            <button className="w-[146px] h-[54px] text-[#050505] self-stretch hover:border-[color:var(--Btn-grdt,#1C4BC4)] hover:bg-[color:var(--Btn-grdt,#f1e9ff)] border bg-[rgba(239,239,239,1)] gap-2.5 my-auto px-5 py-2.5 rounded-[8px] max-md:px-5">
              <Link to="/editprofile">Edit Profile</Link>
            </button>
            <button className="w-[163px] h-[54px] text-[#050505] self-stretch hover:border-[color:var(--Btn-grdt,#1C4BC4)] hover:bg-[color:var(--Btn-grdt,#f1e9ff)] border bg-[rgba(239,239,239,1)] gap-2.5 my-auto px-5 py-2.5 rounded-[8px] max-md:px-5">
              Share Profile
            </button>
          <Link to="/infoprofile">
          <button className="w-[163px] h-[54px] text-[#050505] self-stretch hover:border-[color:var(--Btn-grdt,#1C4BC4)] hover:bg-[color:var(--Btn-grdt,#f1e9ff)] border bg-[rgba(239,239,239,1)] gap-2.5 my-auto px-5 py-2.5 rounded-[8px] max-md:px-5">
             Info
            </button>
          </Link>
          </div>
        </div>
        <div className="text-base text-[#050505] font-normal tracking-[-0.16px] mt-5 max-md:max-w-full">
          <div className="dark:dark-color text-[#050505] w-[200px] max-w-full text-[22px] font-bold tracking-[-0.22px] rounded-[0px_0px_0px_0px]">
            {fullName}
          </div>
          <div className="dark:dark-color text-[#050505] mt-1.5 max-md:max-w-full font-semibold">
            {bio}
          </div>
          <a
            href={website}
            className="dark:dark-color inline-block text-[#1C4BC4] mt-1.5 font-medium"
          >
            {website}
          </a>
        </div>
        <div className="flex w-[390px] max-w-full items-center gap-5 text-sm text-[#050505] font-normal whitespace-nowrap text-center tracking-[-0.14px] mt-[19px]">
          {highlightsData.map((item) => (
            <div
              key={item.id}
              className="self-stretch flex flex-col items-center w-[82px] my-auto cursor-pointer"
            >
              <img
                src={item.HighlightImg}
                alt={item.title}
                className="aspect-[1] object-contain w-[83px] rounded-full"
              />
              <div className="text-[#050505] mt-1">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
