import React, { useState } from "react";

type TabType = "post" | "eduvid" | "pitch" | "shop";

interface ProfileTabsProps {
  defaultTab?: TabType;
  onTabChange?: (tab: TabType) => void;
}

const ProfileTabs: React.FC<ProfileTabsProps> = ({ 
  defaultTab = "post", 
  onTabChange 
}) => {
  const [activeTab, setActiveTab] = useState<TabType>(defaultTab);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <div className="dark:bg-gray-800 dark:text-white mt-[30px] max-md:max-w-full z-10">
      <div className=" justify-center items-stretch flex min-h-[57px] w-full flex-col bg-white border-y-[1.194px] border-y-[#E8E8E8] border-solid max-md:max-w-full">
        <div className="dark:bg-gray-800 dark:text-white flex w-full items-center justify-center flex-1 flex-wrap h-full max-md:max-w-full">
          <button 
            className="self-stretch flex w-60 md:w-[120px] flex-col items-stretch justify-center flex-1 shrink basis-[0%] my-auto"
            onClick={() => handleTabChange("post")}
          >
            <div className="flex min-h-[60px] w-full flex-col overflow-hidden items-stretch justify-center">
              <div className="flex w-full flex-col items-stretch justify-center flex-1">
                <div className="flex w-full flex-col items-stretch justify-center flex-1 pt-[19px]">
                  <div className={` dark:bg-gray-800 dark:text-white self-center text-base font-semibold whitespace-nowrap text-center uppercase tracking-[0.3px] leading-loose flex-1 ${activeTab === "post" ? "text-[#1C4BC4]" : "text-[#3c3c43]"}`}>
                    Post
                  </div>
                  <div className={`flex min-h-0.5 w-full gap-3 mt-3 py-px ${activeTab === "post" ? "bg-[#1C4BC4]" : "bg-transparent"}`}>
                    <div className="flex min-h-0 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </button>
          <button 
            className="self-stretch flex w-60 md:w-[120px] flex-col items-center text-base font-medium whitespace-nowrap text-center tracking-[0.3px] leading-loose flex-1 shrink basis-[0%] my-auto"
            onClick={() => handleTabChange("eduvid")}
          >
            <div className="flex min-h-[60px] w-full flex-col overflow-hidden items-stretch justify-center">
              <div className="flex w-full flex-col items-stretch justify-center flex-1">
                <div className="w-full flex-1 pt-[19px]">
                  <div className={` dark:bg-gray-800 dark:text-white w-full flex-1 ${activeTab === "eduvid" ? "text-[#1C4BC4]" : "text-[#3c3c43]"}`}>
                    EDUVID
                  </div>
                  <div className={`flex min-h-0.5 w-full gap-3 mt-3 ${activeTab === "eduvid" ? "bg-[#1C4BC4]" : "bg-transparent"}`} />
                </div>
              </div>
            </div>
          </button>
          <button 
            className="self-stretch flex min-w-60 md:w-[120px] flex-col items-center text-base font-medium whitespace-nowrap text-center tracking-[0.3px] leading-loose flex-1 shrink basis-[0%] my-auto"
            onClick={() => handleTabChange("pitch")}
          >
            <div className="flex min-h-[60px] w-full flex-col overflow-hidden items-stretch justify-center">
              <div className="flex w-full flex-col items-stretch justify-center flex-1">
                <div className="w-full flex-1 pt-[19px]">
                  <div className={`dark:bg-gray-800 dark:text-white w-full flex-1 ${activeTab === "pitch" ? "text-[#1C4BC4]" : "text-[#3c3c43]"}`}>
                    PITCH
                  </div>
                  <div className={`flex min-h-0.5 w-full gap-3 mt-3 ${activeTab === "pitch" ? "bg-[#1C4BC4]" : "bg-transparent"}`} />
                </div>
              </div>
            </div>
          </button>
          <button 
            className="self-stretch flex min-w-60 md:w-[120px] flex-col items-center text-base font-medium whitespace-nowrap text-center tracking-[0.3px] leading-none flex-1 shrink basis-[0%] my-auto"
            onClick={() => handleTabChange("shop")}
          >
            <div className="flex min-h-[60px] w-full flex-col overflow-hidden items-stretch justify-center">
              <div className="flex w-full flex-col items-stretch justify-center flex-1">
                <div className="w-full flex-1 pt-[19px]">
                  <div className={`dark:bg-gray-800 dark:text-white w-full flex-1 ${activeTab === "shop" ? "text-[#1C4BC4]" : "text-[#3c3c43]"}`}>
                    SHOP
                  </div>
                  <div className={`flex min-h-0.5 w-full gap-3 mt-3 ${activeTab === "shop" ? "bg-[#1C4BC4]" : "bg-transparent"}`} />
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileTabs;
