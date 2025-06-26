import React, { useState } from "react";
import { Post } from "./Post";
import { SuggestedContent } from "./SuggestedContent";
import Story from "./Story";
import { FaLaptopHouse } from "react-icons/fa";

const formatNumber = (number) =>
  new Intl.NumberFormat("en-US").format(Number(number.replace(/[^0-9]/g, "")));

export function PostList() {
  const storyItems = [
    {
      imageSrc: "../../../public/story01.png",
      name: "Invest_with_David",
      imageStyles: "rounded-full w-16 h-16 border-2 border-pink-500",
      containerStyles: "flex flex-col items-center gap-2",
    },
    {
      imageSrc: "../../../public/story03.png",
      name: "Bob",
      imageStyles: "rounded-full w-16 h-16 border-2 border-blue-500",
      containerStyles: "flex flex-col items-center gap-2",
    },
    {
      imageSrc: "../../../public/story02.png",
      name: "Charlie",
      imageStyles: "rounded-full w-16 h-16 border-2 border-green-500",
      containerStyles: "flex flex-col items-center gap-2",
    },
    {
      imageSrc: "../../../public/story03.png",
      name: "Diana",
      imageStyles: "rounded-full w-16 h-16 border-2 border-yellow-500",
      containerStyles: "flex flex-col items-center gap-2",
    },
    {
      imageSrc: "../../../public/story02.png",
      name: "Ethan",
      imageStyles: "rounded-full w-16 h-16 border-2 border-purple-500",
      containerStyles: "flex flex-col items-center gap-2",
    },
    {
      imageSrc: "../../../public/story01.png",
      name: "Alice",
      imageStyles: "rounded-full w-16 h-16 border-2 border-pink-500",
      containerStyles: "flex flex-col items-center gap-2",
    },
    // {
    // imageSrc: "../../../public/story01.png",
    //   name: "Bob",
    //   imageStyles: "rounded-full w-16 h-16 border-2 border-blue-500",
    //   containerStyles: "flex flex-col items-center gap-2",
    // },
    // {
    //        imageSrc: "../../../public/story01.png",

    //   name: "Charlie",
    //   imageStyles: "rounded-full w-16 h-16 border-2 border-green-500",
    //   containerStyles: "flex flex-col items-center gap-2",
    // },
    // {
    //       imageSrc: "../../../public/story01.png",

    //   name: "Diana",
    //   imageStyles: "rounded-full w-16 h-16 border-2 border-yellow-500",
    //   containerStyles: "flex flex-col items-center gap-2",
    // },
    // {
    //         imageSrc: "../../../public/story01.png",

    //   name: "Ethan",
    //   imageStyles: "rounded-full w-16 h-16 border-2 border-purple-500",
    //   containerStyles: "flex flex-col items-center gap-2",
    // },
    // {
    //   imageSrc: "src/assets/story01.png",
    //   name: "Alice",
    //   imageStyles: "rounded-full w-16 h-16 border-2 border-pink-500",
    //   containerStyles: "flex flex-col items-center gap-2",
    // },
    // {
    //   imageSrc: "src/assets/story03.png",
    //   name: "Bob",
    //   imageStyles: "rounded-full w-16 h-16 border-2 border-blue-500",
    //   containerStyles: "flex flex-col items-center gap-2",
    // },
    // {
    //   imageSrc: "src/assets/story02.png",
    //   name: "Charlie",
    //   imageStyles: "rounded-full w-16 h-16 border-2 border-green-500",
    //   containerStyles: "flex flex-col items-center gap-2",
    // },
    // {
    //   imageSrc: "src/assets/story03.png",
    //   name: "Diana",
    //   imageStyles: "rounded-full w-16 h-16 border-2 border-yellow-500",
    //   containerStyles: "flex flex-col items-center gap-2",
    // },
    // {
    //   imageSrc: "src/assets/story02.png",
    //   name: "Ethan",
    //   imageStyles: "rounded-full w-16 h-16 border-2 border-purple-500",
    //   containerStyles: "flex flex-col items-center gap-2",
    // },
  ];

  const posts = [
    {
      user: {
        name: "Brian Turner",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/207cecdea9d621d7e8dae4481e717853eedb0dda?placeholderIfAbsent=true",
        timeAgo: "1 hour ago",
      },
      content: {
        title: "This is a ver ull description of the post.",
        titleLimit: 30, // 🔹 Set title character limit here
        description:
          "This is the full description of the post. It can be very long, but you can",
        descpLimit: 50, // 🔹 Set description character limit here
      },
      engagement: {
        likes: formatNumber("1100"),
        comments: formatNumber("20"),
        shares: formatNumber("6"),
      },
      showFollowButton: true,
      showMoreOptions: true,
      //isFileImage: true,
      //isMediaContent: true,
    },
    {
      user: {
        name: "Brian Turner",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/87746ffdea2caec3125e0ddccd05dd8d5c11bab4?placeholderIfAbsent=true",
        timeAgo: "1 hour ago",
      },
      content: {
        title: "This is a ver ull description of the post.",
        titleLimit: 30, // 🔹 Set title character limit here
        description:
          "This is the full description of the post. It can be very long, but you can",
        descpLimit: 50, // 🔹 Set description character limit here
      },
      engagement: {
        likes: formatNumber("10050"),
        comments: formatNumber("226"),
        shares: formatNumber("150"),
      },
      showOfficialIcon: true,
      showFollowButton: true,
    },
    {
      user: {
        name: "Michael Roberts",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/06479c894210e7c426346a66443e06323a031821?placeholderIfAbsent=true",
        timeAgo: "2 hours ago",
      },
      content: {
        title: "This is a ver ull description of the post.",
        titleLimit: 30, // 🔹 Set title character limit here
        description:
          "This is the full description of the post. It can be very long, but you can",
        descpLimit: 50, // 🔹 Set description character limit here
      },
      engagement: {
        likes: formatNumber("40686"),
        comments: formatNumber("2133"),
        shares: formatNumber("65"),
      },
      showOfficialIcon: true,
      showFollowButton: true,
    },
    {
      user: {
        name: "David Mitchell",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/a9d86a8bff460a98d9174512096fc8279f3e7daf?placeholderIfAbsent=true",
        timeAgo: "1 hour ago",
      },
      content: {
        title: "This is a ver ull description of the post.",
        titleLimit: 30, // 🔹 Set title character limit here
        description:
          "This is the full description of the post. It can be very long, but you can",
        descpLimit: 50, // 🔹 Set description character limit here
      },
      engagement: {
        likes: formatNumber("44686"),
        comments: formatNumber("2333"),
        shares: formatNumber("665"),
      },
      showFollowButton: true,
      showOfficialIcon: true,
      isLiked: true,
      isMediaContent: true,
    },
  ];

  const suggestedContent = {
    title: "Suggested Eduvid's",
    items: [
      {
        image:  "../../../public/reel1.png",
        title: "Secrets of Making Successful Business",
      },
      {
        image:  "../../../public/reel3.png",
        title: "Secrets of Making Successful Business",
      },
      {
        image:  "../../../public/reel2.png",
        title: "Secrets of Making Successful Business",
      },
    ],
  };

  //const [isActive, setIsActive] = useState(initialActive);

  let viewMore = false;

  function loadMore() {
    // e.preventDefault();
    console.log("clocked");

    //setIsActive(!isActive);
  }

  return (
  <div className="grow mt-12 max-md:mt-10  max-md:px-4 z-10 pb-8 ml-12">
  <div className="flex flex-col h-full mt-2 items-center gap-6 w-full">
    <Story items={storyItems} />

        <div className="flex flex-col gap-6 w-full max-w-[700px]">
          {posts.slice(0, 4).map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </div>

        <div className="flex flex-col gap-6 w-full max-w-[700px]">
          <SuggestedContent {...suggestedContent} />
        </div>
       
        {viewMore && (
          <div className="flex flex-col gap-6 w-full max-w-[700px]">
            {posts.slice(0, 4).map((post, index) => (
              <Post key={index} {...post} />
            ))} 
           </div>
        )}
      </div>
    </div>
  );
}
