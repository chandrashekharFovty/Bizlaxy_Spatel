import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import awarness from "../../../public/awarness.png";
import enagage from "../../../public/engagements.png";
import appInstall from "../../../public/AppInstall.png";
import salesEcom from "../../../public/salesE-com.png";
import conversans from "../../../public/conversions.png";
import traffic from "../../../public/traffic.png";
import views from "../../../public/views.png";
import leadGen from "../../../public/leadGen.png";
import Sidebar from "../layout/Sidebar";

const campaignOptions = [
  {
    id: "awareness",
    title: "Awareness",
    subtitle: "Reach More People With Your Post",
    icon: <img src={awarness} alt="" />,
  },
  {
    id: "engagement",
    title: "Engagement",
    subtitle: "Increase Social Engagements And Page Followers",
    icon: <img src={enagage} alt="" />,
  },
  {
    id: "leadgen",
    title: "Lead Generation",
    subtitle: "Collect Leads Through Instant Forms Or Contact Prompts",
    icon: <img src={leadGen} alt="" />,
  },
  {
    id: "appinstalls",
    title: "App Installs",
    subtitle: "Promote And Drive Downloads For Your Mobile Application",
    icon: <img src={appInstall} alt="" />,
  },
  {
    id: "traffic",
    title: "Traffic",
    subtitle: "Reach More People With Your Post",
    icon: <img src={traffic} alt="" />,
  },
  {
    id: "conversions",
    title: "Conversions",
    subtitle: "Reach More People With Your Post",
    icon: <img src={conversans} alt="" />,
  },
  {
    id: "videoviews",
    title: "Video Views",
    subtitle: "Boost Views On Video Content To Increase Brand Visibility",
    icon: <img src={views} alt="" />,
  },
  {
    id: "ecommerce",
    title: "Sales / E-Commerce",
    subtitle: "Drive Product Sales Via Your Online Store Or Platform",
    icon: <img src={salesEcom} alt="" />,
  },
];

const CreateAddOptions = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleSetting = () => {
    navigate("/awareness"); 
  };

  return (
    <div>
      <Sidebar />
      <div className="dark:bg-gray-800 dark:text-white p-6 bg-gray-50 min-h-screen ml-[235px]">
        <Link to="/adds" className="text-sm  dark:text-white text-blue-600 mb-4 inline-block">
          &lt; Back to Dashboard
        </Link>

        {/* Campaign Grid */}
        <div className="max-w-[1205px] h-[588px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {campaignOptions.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelected(item.id)}
              className={`w-[273px] h-[284px] bg-white rounded-xl border cursor-pointer p-6 text-center transition-all hover:shadow-md ${
                selected === item.id ? "border-blue-500 shadow-lg" : ""
              }`}
            >
              <div className="w-full h-[125px] mt-10 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">
                {item.title}
              </h4>
              <p className="text-sm text-gray-500">{item.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Continue Button */}
        {selected && (
          <div className="flex justify-end mt-10 max-w-[1150px]">
            <button
              className="w-[122px] h-[45px] px-6 py-2 text-lg rounded-[10px] font-semibold bg-[#1C4BC4] text-white hover:bg-blue-700 transition-colors"
              onClick={() => {
                console.log("Selected Option:", selected);
                handleSetting();
              }}
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateAddOptions;
