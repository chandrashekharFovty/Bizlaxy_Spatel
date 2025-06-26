import React, { useState } from "react";
import { SearchInput } from "../ui/SearchInput";
import { UserAvatar } from "../ui/UserAvatar";
import { FollowButton } from "../ui/FollowButton";
import searchGray from "../../../public/searchdark.png";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronsDownUpIcon } from "lucide-react";
import { Link } from "react-router-dom";

export function RightSidebar() {
  const searchables = [
    {
      username: "Search...",
      avatar: "https://cdn-icons-png.flaticon.com/128/17216/17216943.png",
      followsYou: false,
    },
    {
      username: "MayaCreates",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/7345a8532057b754287bb824f71612da4b4c4ae8?placeholderIfAbsent=true",
      followedBy: "chirag_singla17",
    },
    {
      username: "JadenLearns",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/ed958142a456b9ce0f762c8bc0124207bf905fe4?placeholderIfAbsent=true",
      followedBy: "chirag_singla17",
    },
    {
      username: "SophieInvests",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/99fe2150dc124eb86d639f275ffc619b429aea39?placeholderIfAbsent=true",
      followsYou: true,
    },
    {
      username: "Riya.Builds",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/6fa4bd40ca41e8fe266dc19430980767ca123b8c?placeholderIfAbsent=true",
      followsYou: true,
    },
  ];
  const suggestions = [
    {
      username: "AlexVentureX",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/919c5bbbf5f5e1e77a95971dd94c4d8d3126d1a0?placeholderIfAbsent=true",
      followsYou: true,
    },
    {
      username: "MayaCreates",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/7345a8532057b754287bb824f71612da4b4c4ae8?placeholderIfAbsent=true",
      followedBy: "chirag_singla17",
    },
    {
      username: "JadenLearns",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/ed958142a456b9ce0f762c8bc0124207bf905fe4?placeholderIfAbsent=true",
      followedBy: "chirag_singla17",
    },
    {
      username: "SophieInvests",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/99fe2150dc124eb86d639f275ffc619b429aea39?placeholderIfAbsent=true",
      followsYou: true,
    },
    // {
    //   username: "Riya.Builds",
    //   avatar: "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/6fa4bd40ca41e8fe266dc19430980767ca123b8c?placeholderIfAbsent=true",
    //   followsYou: true,
    // },
  ];

  const recommended = [
    {
      name: "NebuloTech",
      role: "Investor",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/dedfa53dcf0b27896852b3e4617af3cfe52b12a1?placeholderIfAbsent=true",
    },
    {
      name: "Aarav Mehta",
      role: "Investor",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/72e44816435fc8367dbf89a3696574c30b417c68?placeholderIfAbsent=true",
    },
    {
      name: "NebuloTech",
      role: "Investor",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/dedfa53dcf0b27896852b3e4617af3cfe52b12a1?placeholderIfAbsent=true",
    },
    {
      name: "Aarav Mehta",
      role: "Investor",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/72e44816435fc8367dbf89a3696574c30b417c68?placeholderIfAbsent=true",
    },
    {
      name: "NebuloTech",
      role: "Investor",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/dedfa53dcf0b27896852b3e4617af3cfe52b12a1?placeholderIfAbsent=true",
    },
    {
      name: "Aarav Mehta",
      role: "Investor",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/72e44816435fc8367dbf89a3696574c30b417c68?placeholderIfAbsent=true",
    },
  ];

  const footerLinks = [
    "About",
    "Help",
    "Press",
    "API",
    "Jobs",
    "Privacy",
    "Terms",
    "Locations",
    "Language",
    "Meta Verified",
  ];

  const [selected, setSelected] = useState(searchables[0]);
  const [search, setSearch] = useState("");

  return (
    <>
      <div className=" bg-white  fixed overflow-scroll flex w-[370px] h-[982px] flex-col items-stretch border-[rgb(28, 75, 196, 100)] border-l">
        <div className="dark:bg-gray-800 dark:text-white fixed top-0 right-0 w-[370px] h-screen scrollbar-hide overflow-y-auto bg-white ml-[40px] flex flex-col items-stretch px-6 ">
          <Listbox
            as="div"
            value={selected}
            onChange={setSelected}
            className="w-[324px] h-[40px]  bg-white mt-2 dark:bg-gray-800 dark:text-white"
          >
            <Label className=" block text-xl  font-normal w-full"></Label>
            <div className=" relative mt-2 w-full">
              <ListboxButton className="dark:bg-gray-800 dark:text-white grid w-full h-[40px] cursor-default grid-cols-1 bg-white text-left rounded-3xl border-[2px] border-solid border-[#a89bfc] font-normal outline-white focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                <span className="col-start-1 w-full h-full row-start-1 flex items-center gap-3 px-4 py-2">
                  <img
                    alt=""
                    src={selected.avatar}
                    className="drark:text-white size-5 shrink-0 rounded-full"
                  />
                  <span className="block truncate">{selected.username}</span>
                </span>
                <ChevronsDownUpIcon
                  aria-hidden="true"
                  className="col-start-1 dark:text-gray-800 row-start-1 size-5 self-center justify-self-end text-white sm:size-4"
                />
              </ListboxButton>

              <ListboxOptions
                transition
                className="absolute w-full h-auto z-10 mt-1 overflow-auto rounded-xl bg-white py-1 text-base shadow-lg ring-2 ring-[#a89bfc] focus:outline-[#a89bfc] data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
              >
                {searchables.map((person, index) => (
                  <ListboxOption
                    key={index}
                    value={person}
                    className=" group relative cursor-default pl-3 select-none data-focus:bg-indigo-600 data-focus:text-white outline-none"
                  >
                    <div className="flex items-center">
                      <img
                        alt=""
                        src={person.avatar}
                        className="size-5 shrink-0 rounded-full"
                      />
                      <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">
                        {person.username}
                      </span>
                    </div>
                    <div className="overflow-hidden text-left text-[11px] text-[rgba(142,142,142,1)] font-normal leading-none pr-[3px] pl-8 py-1">
                      {person.followsYou
                        ? "Follows you"
                        : `Followed by ${person.followedBy}`}
                    </div>

                    {/* <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-white group-not-data-selected:hidden group-data-focus:text-white">
                          <CheckIcon aria-hidden="true" className="size-5" />
                        </span> */}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>
          <div className="flex items-stretch whitespace-nowrap w-[370px] h-[56px]  mt-8">
            <div className="w-full h-full flex items-center text-sm text-[rgba(5,5,5,1)] font-bold tracking-[-0.14px] grow shrink basis-auto">
              <Link to="/profile">
                <div className="w-[56px] h-[56px] cursor-pointer border rounded-full">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/8e190579b007ca56ec01ed9bd9da85e43500ed52?placeholderIfAbsent=true"
                    className="object-cover w-[56px] h-[56px] rounded-full"
                  />
                </div>
              </Link>
              <div className="w-[260px] flex justify-between my-auto">
                <div className="flex w-[190px] items-center overflow-hidden pl-2">
                  <div className="dark:text-white self-stretch font-semibold text-sm overflow-hidden my-auto">
                    mike_invests
                  </div>
                </div>
                <div className="text-[#1C4BC4] text-center text-[11px] font-semibold leading-none my-auto">
                  Switch
                </div>
              </div>
            </div>
          </div>

          <div className="dark:bg-gray-800 dark:text-white bg-white w-[370px] h-[289px] mt-4 max-md:ml-[5px] ">
            <div className=" dark:text-white flex items-center w-[320px] h-[18px] justify-between">
              <div className="dark:text-white text-[#050505] text-base font-bold">
                Suggestions for you
              </div>
              {/* <div className="text-[#1C4BC4] text-sm font-medium">See All</div> */}
            </div>

            <div className="flex w-full overflow-hidden mt-[9px]">
              <div className="w-[320px] h-[250px] py-2">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className={`flex w-[320px] h-[44px] items-stretch gap-[8px] 
                  ${index > 0 ? "mt-4" : ""}`}
                  >
                    <img
                      src={suggestion.avatar}
                      className="object-contain w-[37px] shrink-0 my-auto"
                    />
                    <div className="flex justify-between w-full items-center">
                      <div className="flex flex-col items-stretch">
                        <div className="dark:text-gray-400 text-neutral-800 text-sm font-semibold leading-none w-[110px]">
                          {suggestion.username}
                        </div>
                        <div className="overflow-hidden py-2 text-left text-[11px] text-[rgba(142,142,142,1)] font-normal leading-none">
                          {suggestion.followsYou
                            ? "Follows you"
                            : `Followed by ${suggestion.followedBy}`}
                        </div>
                      </div>
                      <div className="dark:text-blue-500 text-[#1C4BC4] text-center cursor-pointer text-xs font-medium leading-none my-auto">
                        Follow
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-[320px] h-[231px] mt-4 max-md:mx-[5px]">
            <div className="dark:bg-gray-800 flex w-full h-[25px] items-center justify-between">
              <div className=" dark:text-white  text-[#050505] text-lg font-bold self-stretch">
                Recommended for You
              </div>
              <div className="text-[#1C4BC4] text-sm font-medium self-stretch ">
                See all
              </div>
            </div>

            <div className=" flex w-full h-[190px] items-stretch gap-[9px] overflow-x-auto scrollbar-hide mt-4">
              {recommended.map((profile, index) => (
                <div
                  key={index}
                  className="dark:bg-gray-800 bg-white shadow-[0px_0px_4px_-1px_rgba(0,0,0,0.25)] border flex flex-col flex-1 w-[155px] h-[184px] px-3 py-2  rounded-[10px] border-[rgba(220,220,220,1)] border-solid"
                >
                  <div className="flex gap-[17px] ml-[8px] max-md:ml-2.5">
                    <UserAvatar
                      src={profile.avatar}
                      size="lg"
                      className="mt-[7px]"
                    />
                    <img
                      src={
                        index === 0
                          ? "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/8a2332c653c73f0169c289d1385c98d7c25b92cb?placeholderIfAbsent=true"
                          : "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/42e5a7b14ba5994bef7d3db2325aba7edc120ad7?placeholderIfAbsent=true"
                      }
                      className="aspect-[1] object-contain w-2 h-2 shrink-0"
                    />
                  </div>
                  <div className="flex min-h-[35px] flex-col items-center whitespace-nowrap text-center justify-center mt-1.5">
                    <div className="dark:text-white text-[#050505] text-[13px] font-medium">
                      {profile.name}
                    </div>
                    <div className="dark:text-gray-300 text-[#707070] text-[10px] font-normal">
                      {profile.role}
                    </div>
                  </div>
                  <div className="bg-gradient-to-r cursor-pointer from-[#1C4BC4] to-[#8963b9] text-white self-stretch min-h-7 gap-2 text-xs font-normal whitespace-nowrap w-[114px] h-[27px] mt-[4px] pl-[39px] pr-[38px] py-[5px] rounded-[5.037px] max-md:px-5">
                    Follow
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-[-25px] text-[11px] text-[rgba(199,199,199,1)] font-normal mt-3 pb-[39px] max-md:mb-2.5 max-md:mx-[5px]">
            <div className="w-full max-w-[319px] flex-1 pr-1.5">
              <div className="flex w-full items-stretch text-[11px] leading-none flex-wrap">
                {footerLinks.map((link, index) => (
                  <div
                    key={index}
                    className="pr-1 py-px text-[11px] leading-none"
                  >
                    {link} {index < footerLinks.length - 1 ? "·" : ""}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-[11px] leading-none uppercase mt-5">
              © 2025 BIZLAXY
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
