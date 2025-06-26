import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CgDetailsMore } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiGraduationCapBold } from "react-icons/pi";
import { CiShop } from "react-icons/ci";
import { BiWorld } from "react-icons/bi";
import { LuMessageCircleMore } from "react-icons/lu";
import { MdAnnouncement, MdOutlineNotificationsActive, MdCampaign } from "react-icons/md";
import { CgAddR } from "react-icons/cg";
import AnnouncementIcon from '@mui/icons-material/Announcement';
import Create from "../../pages/Create";
import Settings from "../../pages/Settings";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showMorePopover, setShowMorePopover] = useState(false);
  const [showCreatePopover, setShowCreatePopover] = useState(false);
  const [showCreatePostPopover, setShowCreatePostPopover] = useState(false);
  const [showCreateStoryPopover, setShowCreateStoryPopover] = useState(false);
  const [showCreateEduvidPopover, setShowCreateEduvidPopover] = useState(false);
  const [showCreatePitchPopover, setShowCreatePitchPopover] = useState(false);
  const [showCreateProductPopover, setShowCreateProductPopover] =
    useState(false);
  const [showSwitchAccountPopover, setShowSwitchAccountPopover] =
    useState(false);

  const moreRef = useRef(null);
  const createRef = useRef(null);
  const createPostRef = useRef(null);
  const createStoryRef = useRef(null);
  const createEduvidRef = useRef(null);
  const createProductRef = useRef(null);
  const SwitchAccountRef = useRef(null);
  const CreatePitchRef = useRef(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      moreRef.current &&
      !moreRef.current.contains(e.target as Node) &&
      createRef.current &&
      !createRef.current.contains(e.target as Node)
    ) {
      setShowMorePopover(false);
      setShowCreatePopover(false);
    } else if (
      createPostRef.current &&
      !createPostRef.current.contains(e.target as Node) &&
      createStoryRef.current &&
      !createStoryRef.current.contains(e.target as Node) &&
      createEduvidRef.current &&
      !createEduvidRef.current.contains(e.target as Node) &&
      createProductRef.current &&
      !createProductRef.current.contains(e.target as Node) &&
      SwitchAccountRef.current &&
      !SwitchAccountRef.current.contains(e.target as Node) &&
      CreatePitchRef.current &&
      !CreatePitchRef.current.contains(e.target as Node)
    ) {
      setShowCreatePostPopover(false);
      setShowCreateStoryPopover(false);
      setShowCreateEduvidPopover(false);
      setShowCreateProductPopover(false);
      setShowSwitchAccountPopover(false);
      setShowCreatePitchPopover(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkClass = (path: string) =>
    `${
      location.pathname.startsWith(path)
        ? "text-blue-800 font-medium"
        : "font-normal text-[16px]"
    }`;

  const profileClass = (path: string) =>
    `${
      location.pathname.startsWith(path)
        ? "text-black-900 font-medium"
        : "font-normal text-[16px]"
    }`;

  const Logout = function () {
    localStorage.removeItem("user");
    toast.info("Logged out successfully!");
    navigate("/", { replace: true });
  };

  //Close on outside click for story
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        createStoryRef.current &&
        !createStoryRef.current.contains(event.target)
      ) {
        setShowCreateStoryPopover(false);
      }
    };

    if (showCreateStoryPopover) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCreateStoryPopover]);

  // Close on outside click for post
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        createPostRef.current &&
        !createPostRef.current.contains(event.target)
      ) {
        setShowCreatePostPopover(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dark:bg-gray-800 dark:text-white bg-white fixed max-xl:w-60 min-h-[982px] max-h-screen w-[245px] max-lg:w-[70px] border-solid border-r-2 border-[#f3f2fa] pr-px z-40">
      <div className="cursor-pointer mt-8 max-lg:text-[16px] max-md:text-[16px] max-md:tracking-[0px] max-lg:tracking-[1px] text-[22px] md:font-normal uppercase ml-5 max-lg:w-[90px] max-lg:ml-1 w-[124px] h-[28px] tracking-[3px]">
        <Link to="/feed" className="font-medium">
          Bizlaxy
        </Link>
      </div>
      <div className="dark:text-gray-300 z-10 w-[220px] mt-5 max-md:mt-[8px] ml-5 text-[16px] flex flex-col gap-2 pt-3">
        <Link to="/feed" className={linkClass("/feed")}>
          <div className="dark:text-white text-xl flex gap-4 items-center w-[220px] h-[48px] cursor-pointer">
            <GoHome size={28} />
            <div className="flex overflow-hidden max-lg:hidden">
              <div className=" dark:text-gray-300 overflow-hidden">Home</div>
            </div>
          </div>
        </Link>
        <Link to="/pitch" className={linkClass("/pitch")}>
          <div className="dark:text-gray-300 text-xl flex gap-4 items-center w-[220px] h-[48px] cursor-pointer">
            <FaChalkboardTeacher size={28}/>
            <div className="flex overflow-hidden max-lg:hidden w-full h-[24px]">
              <div className="overflow-hidden cursor-pointer ">Pitch</div>
            </div>
          </div>
        </Link>
        <Link to="/eduvid" className={linkClass("/eduvid")}>
          <div className="text-xl dark:text-white flex gap-4 items-center w-[220px] h-[48px] cursor-pointer">
            <PiGraduationCapBold size={28}/>
            <div className="flex overflow-hidden max-lg:hidden w-full h-[24px]">
              <div className="cursor-pointer overflow-hidden">Eduvid</div>
            </div>
          </div>
        </Link>
        <Link to="/shop" className={linkClass("/shop")}>
          <div className="text-xl dark:text-white  flex gap-4 items-center w-[220px] h-[48px] cursor-pointer">
            <CiShop size={28}/>
            <div className="flex overflow-hidden max-lg:hidden">
              <div className="cursor-pointer  overflow-hidden">Shop</div>
            </div>
          </div>
        </Link>
        <Link to="/explore" className={linkClass("/explore")}>
          <div className="dark:text-white text-xl flex gap-4 items-center w-[220px] h-[48px] cursor-pointer">
            <BiWorld size={28}/>
            <div className="flex overflow-hidden max-lg:hidden">
              <div className="dark:text-gray-300  cursor-pointer  overflow-hidden">
                Explore
              </div>
            </div>
          </div>
        </Link>
        <Link to="/message" className={linkClass("/message")}>
          <div className="dark:text-white text-xl flex gap-4 items-center w-[220px] h-[48px] cursor-pointer">
            <LuMessageCircleMore size={36}/>
            <div className="flex overflow-hidden max-lg:hidden w-full h-[24px]">
              <div className="dark:text-gray-300  cursor-pointer  overflow-hidden">
                Messages
              </div>
            </div>
          </div>
        </Link>
        <Link to="/notification" className={linkClass("/notification")}>
          <div className="dark:text-white text-xl flex gap-4 items-center w-[220px] h-[48px] cursor-pointer">
            <MdOutlineNotificationsActive size={36}/>
            <div className="flex overflow-hidden max-lg:hidden w-full h-[24px]">
              <div className="dark:text-gray-300  cursor-pointer  overflow-hidden">
                Notifications
              </div>
            </div>
          </div>
        </Link>
        {/* CREATE POPOVER */}
        <div ref={createRef} className="relative">
          <div
            className="flex gap-4 items-center w-[220px] h-[48px] cursor-pointer"
            onClick={() => {
              setShowCreatePopover(!showCreatePopover);
              setShowMorePopover(false);
            }}
          >
            <div className="dark:text-white text-xl flex gap-2">
              <CgAddR size={28}/>
            </div>
            <div className="flex overflow-hidden max-lg:hidden text-[20px] font-normal">
              <div className="dark:text-gray-300 overflow-hidden pr-0.5">
                Create
              </div>
            </div>
          </div>

          {/* Show the main popover only if story dialog is NOT open */}
          {showCreatePopover && <Create />}
        </div>
        <Link to="/profile" className={profileClass("/profile")}>
          <div className="flex gap-4 items-center w-[220px] h-[48px] cursor-pointer">
            <img
              src={
                location.pathname.startsWith("/profile")
                  ? "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/557c06d2630f449be2379bf4d30b96ed96e290af?placeholderIfAbsent=true"
                  : "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/557c06d2630f449be2379bf4d30b96ed96e290af?placeholderIfAbsent=true" // active icon
              }
              className="aspect-[1] object-contain w-7 h-7 shrink-0"
            />
            <div className="flex overflow-hidden max-lg:hidden text-[20px] font-normal">
              <div className="dark:text-gray-300  cursor-pointer overflow-hidden">
                Profile
              </div>
            </div>
          </div>
        </Link>

        <Link to="/adds" className={linkClass("/adds")}>
          <div className="flex gap-3 items-center w-[220px] h-[48px] cursor-pointer">
            {/* <img
              src={
                location.pathname.startsWith("/adds")
                  ? isAddsMa // active icon
                  : "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/eac3a74db1e6e1ba057a37af1132896da819100f?placeholderIfAbsent=true"
              }
              className="aspect-[1] object-containw-6 w-7 h-7 shrink-0"
            /> */}
            <MdCampaign size={32} className="dark:text-white aspect-[1] object-containw-6 h-8 w-8 shrink-0"/>
            <div className="flex overflow-hidden max-lg:hidden w-full h-[24px] text-[20px] font-normal">
              <div className="dark:text-gray-300  cursor-pointer  overflow-hidden">
                Ad's Manager
              </div>
            </div>
          </div>
        </Link>

        {/* MORE POPOVER */}
        <div ref={moreRef} className="relative">
          <div
            className="flex gap-4 items-center w-[220px] h-[48px] cursor-pointer"
            onClick={() => {
              setShowMorePopover(!showMorePopover);
              setShowCreatePopover(false);
            }}
          >
            <div className="text-xl ">
              <CgDetailsMore size={28}/>
            </div>

            <div className="flex max-lg:hidden text-[20px] font-normal">
              <div className="dark:text-gray-300  overflow-hidden">More</div>
            </div>
          </div>

          {/* Show the main popover only if story dialog is NOT open */}
          {showMorePopover && <Settings />}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
