import React, { useState } from "react";
import { ChevronRight} from "lucide-react";
import { Link } from "react-router-dom";
import Sidebar from "@/components/layout/Sidebar";

const settings = [
  { title: "Active Status", path: "/settings/active-status", description: "Choose whether others can see your online activity." },
  { title: "Saved Posts", path: "/settings/saved-posts", description: "Easily bookmark and organize posts for later viewing." },
  { title: "Green Verification", path: "/settings/green-verification", description: "Apply for Green Verification to represent eco-friendly initiatives." },
  { title: "Blue Verification", path: "/settings/blue-verification", description: "Apply for Blue Verification as a public figure, brand, or influencer." },
  { title: "Hide Story and Live", path: "/settings/hide-story-live", description: "Control who can view your stories and live sessions." },
  { title: "Blocked Users", path: "/settings/blocked-users", description: "Block unwanted users from seeing your updates." },
  { title: "Ad Operations Manager", path: "/settings/ad-manager", description: "Create and manage ad types and performance." },
  { title: "Privacy Settings", path: "/settings/privacy", description: "Control who can view your profile." }
];

const SettingsPanel = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="flex-1 w-3/14 bg-white flex dark:bg-gray-800 text-black dark:text-white w-screen ">
      <Sidebar/>
      <div className="space-y-4 ml-[300px] dark:bg-gray-800 mt-10">
        <h2 className="text-xl font-bold mb-4">Account Settings</h2>
         <p className="text-xs text-gray-400 mb-4">Account Settings</p>
        {settings.map((item, index) => (
          <Link to={item.path} key={index} className="block">
            <div className="flex justify-between items-start border-b pb-3 hover:bg-gray-100 dark:hover:text-gray-800 dark:hover:bg-gray-300 p-2 rounded-md transition-all">
              <div>
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-xs text-gray-500 dark:hover:text-gray-800">{item.description}</p>
              </div>
              <ChevronRight className="text-gray-400" />
            </div>
          </Link>
        ))}
      </div>
      {/* Detail View Example */}
      <div className=" border-l pt-4 ml-10 border-x-gray-200">
        <div className="mt-[100px] ml-4">
          <h3 className="text-lg font-semibold mb-2">Show my active status</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          When turned on, your followers and connections can see when you're online or last active.<br/><br/>
          When off, you won't see others' activity status either.
        </p>
        {/* <label className="inline-flex items-center cursor-pointer mt-2">
          <input
            type="checkbox"
            checked={active}
            onChange={() => setActive(!active)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-checked:bg-blue-600 transition-all"></div>
        </label> */}
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
