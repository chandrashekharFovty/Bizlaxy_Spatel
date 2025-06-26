import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Sidebar from '../layout/Sidebar'
import awarness from "../../../public/awarness.png";
import enagage from "../../../public/engagements.png";
import leadGen from "../../../public/leadGen.png";
import appInstall from "../../../public/AppInstall.png";




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
];

function Awareness() {
   const [selected, setSelected] = useState(null);
    const navigate = useNavigate();
  
    const handleSetting = () => {
      navigate("/custom"); 
    };
  return (
      <div>
      <Sidebar />
      <div className=" dark:bg-gray-800  dark:text-white p-6 bg-gray-50 min-h-screen ml-[235px]">
        <Link to="/adds" className=" dark:text-white text-sm text-blue-600 mb-4 inline-block">
          &lt; Back to Dashboard
        </Link>

        {/* Campaign Grid */}
        <div className="max-w-[1205px] h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
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
          <div className="flex justify-end mt-10  max-w-[1150px]">
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
  )
}

export default Awareness
