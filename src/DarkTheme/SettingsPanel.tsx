import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import Sidebar from "@/components/layout/Sidebar";
import ProfileGallery from "@/components/profile/ProfileGallery";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Sample gallery items
const myItems = [
  {
    id: "1",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/c286384ab9a94f6ae63dddaf2109347578dc9fa7?placeholderIfAbsent=true",
    likes: 25,
    comments: 5,
  },
  {
    id: "2",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/215def76e11b54522b5f2ccb29cfa4f5dc529575?placeholderIfAbsent=true",
    likes: 12,
    comments: 3,
  },
  {
    id: "3",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/60ac0ced6ed1b523e975126699b3b75ffc79d062?placeholderIfAbsent=true",
    likes: 45,
    comments: 10,
  },
];

// Settings data
const settings = [
  {
    title: "Switch Appearance",
    path: "/switch",
    description: "Easily switch between light and dark modes.",
    details: {
      name: "Appearance",
      content: "Use the switch to toggle dark/light mode.",
    },
  },
  {
    title: "Active Status",
    path: "/active",
    description: "Choose whether others can see your online activity.",
    details: {
      name: "Show my active status",
      content:
        "When turned on, your followers and connections can see when you're online or last active. When off, you won’t see others' activity status either.",
    },
  },
  {
    title: "Saved Posts",
    path: "/save",
    description: "Easily bookmark and organize posts for later viewing.",
    details: {
      component: () => (
        <div className="space-y-4">
          <div className="flex gap-2">
            <Button variant="outline">All Saved</Button>
            <Button variant="outline">Product</Button>
          </div>
          <ProfileGallery items={myItems} />
        </div>
      ),
    },
  },
  {
    title: "Green Verification",
    path: "/green",
    description:
      "Apply for Green Verification to represent eco-friendly initiatives.",
    details: {
      name: "Green Verification",
      content:
        "Green Verification helps promote sustainability by highlighting eco-friendly profiles.",
    },
  },
  {
    title: "Blue Verification",
    path: "/blue",
    description:
      "Apply for Blue Verification as a public figure, brand, or influencer.",
    details: {
      name: "Blue Verification",
      content:
        "Blue Verification confirms your authenticity as a public figure or brand.",
    },
  },
  {
    title: "Hide Story and Live",
    path: "/hide",
    description: "Control who can view your stories and live sessions.",
    details: {
      name: "Story & Live Privacy",
      content:
        "You can choose who sees your stories and live streams from your privacy settings.",
    },
  },
  {
    title: "Blocked Users",
    path: "/block",
    description: "Block unwanted users from seeing your updates.",
    details: {
      name: "Manage Blocked Users",
      content:
        "View and manage the list of users you have blocked from your profile.",
    },
  },
  {
    title: "Ad Operations Manager",
    path: "/operation",
    description: "Create and manage ad types and performance.",
    details: {
      name: "Ad Manager",
      content:
        "Use the Ad Operations Manager to create, run, and analyze ads efficiently.",
    },
  },
  {
    title: "Privacy Setting",
    path: "/privcy",
    description: "Control who can view your profile.",
    details: {
      name: "Profile Privacy",
      content:
        "Manage your profile visibility and decide who can connect with you.",
    },
  },
  {
    title: "Wallet",
    path: "/wallet",
    description: "Manage your wallet settings.",
    details: {
      name: "Wallet",
      content: "Check your wallet balance and transactions here.",
    },
  },
  {
    title: "Delete Account",
    path: "/delete",
    description: "Delete your account permanently.",
    details: {
      name: "Delete Account",
      content: "This action will delete your account permanently.",
    },
  },
  {
    title: "Feedback",
    path: "/feedback",
    description: "Share your feedback.",
    details: {
      name: "Feedback",
      content: "Help us improve by sharing your feedback.",
    },
  },
  {
    title: "Help Center",
    path: "/help",
    description: "Visit the help center for support.",
    details: {
      name: "Help Center",
      content: "Find answers to common questions in our help center.",
    },
  },
  {
    title: "Report a Problem",
    path: "/report",
    description: "Report an issue you are facing.",
    details: {
      name: "Report a Problem",
      content:
        "Describe the issue you are facing and submit a report.",
    },
  },
];

const SettingsPanel = () => {
  const [selectedSetting, setSelectedSetting] = useState(settings[0]);
  const navigate = useNavigate();

  return (
    <div className="flex w-full bg-white dark:bg-gray-800 text-black dark:text-white">
      {/* Sidebar */}
      <div className="max-md:hidden">
        <Sidebar />
      </div>

      {/* Desktop - Left Side */}
      <div className="max-md:hidden space-y-4 ml-[300px] mt-10 w-1/3">
        <h2 className="text-xl font-bold mb-4">Account Settings</h2>
        <p className="text-xs text-gray-400 mb-4">
          Manage your account settings below.
        </p>
        {settings.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedSetting(item)}
            className="block w-full text-left"
          >
            <div className="flex justify-between items-start border-b pb-3 hover:bg-gray-100 dark:hover:bg-gray-300 dark:hover:text-gray-800 p-2 rounded-md transition-all">
              <div>
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.description}</p>
              </div>
              <ChevronRight className="text-gray-400" />
            </div>
          </button>
        ))}
      </div>

      {/* Mobile - Left Side */}
      <div className="lg:hidden space-y-4 w-full p-4">
        <h2 className="text-xl font-bold mb-4">Account Settings</h2>
        <p className="text-xs text-gray-400 mb-4">
          Manage your account settings below.
        </p>
        {settings.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.path)}
            className="block w-full text-left"
          >
            <div className="flex justify-between items-start border-b pb-3 hover:bg-gray-100 dark:hover:bg-gray-300 dark:hover:text-gray-800 p-2 rounded-md transition-all">
              <div>
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.description}</p>
              </div>
              <ChevronRight className="text-gray-400" />
            </div>
          </button>
        ))}
      </div>

      {/* Right Side */}
      <div className="max-md:hidden border-l pt-4 ml-10 pl-6 border-gray-200 flex-1">
        {selectedSetting.details?.component ? (
          selectedSetting.details.component()
        ) : (
          <>
            <h3 className="text-lg font-semibold mb-2">
              {selectedSetting.details?.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {selectedSetting.details?.content}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SettingsPanel;
