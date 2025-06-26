import React from "react";
import voiceCall from  "../../../public/voicecall.png"
import Vcall from  "../../../public/Vcall.png"
import Smily from  "../../../public/smily.png"
import LinkIcon from  "../../../public/link.png"
import SendIcon from  "../../../public/send.png"
import TowerImg from  "../../../public/tower.jpg"
import natureImg from  "../../../public/nature.jpg"
import MoutainImg from  "../../../public/mountain.jpg"
import ChatUi from "./ChatUi"

const messages = [
  {
    sender: "Mike Mazowski",
    text: "Hello guys, we have discussed about post-corona vacation plan...",
    time: "18:04",
    images: [
      "https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1552&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1664299326174-f73b66496733?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dG93ZXJ8ZW58MHx8MHx8fDA%3D",
    ],
    me: false,
  },
  {
    sender: "You",
    text: "That's very nice piece! You guys made a very good decision. Can't wait to go on vacation!",
    time: "18:44",
    me: true,
  },
];

const Messages = () => {
  return (
    <>
    <div className="flex h-screen font-sans">
      {/* Sidebar */}
      <div className=" dark:bg-gray-800 dark:text-white bg-white border-r p-4 flex flex-col">
        <h2 className="w-[410px] text-xl font-semibold mb-4">Chats</h2>
        <div className="flex space-x-2 mb-4 border border-gray-200 rounded-3xl p-2">
          <button className="w-[124px] h-[40px] px-3 py-1 rounded-full btn-gradient shadow-sm text-white text-md>">
            Direct
          </button>
          <button className="w-[124px] h-[40px] px-3 py-1 rounded-full btn-gradient text-white bg-gray-100 shadow-sm text-md>">
            Groups
          </button>
          <button className="w-[124px] h-[40px] px-3 py-1 rounded-full btn-gradient text-white bg-gray-100 shadow-sm text-md>">
            Requests
          </button>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-[50px] px-4 border rounded-3xl mb-4 text-sm outline-[#a952e4]"
        />
        <div className="space-y-3 overflow-y-auto w-full">

          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between border p-2 hover:bg-gray-100 rounded cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/40"
                  alt=""
                  className="rounded-full w-10 h-10"
                />
                <div className="">
                  <p className="font-medium text-sm">Akash Retail</p>
                  <p className="text-xs text-gray-500">
                    Interested in bulk order of So...
                  </p>
                </div>
                <span className="text-xs text-gray-400">2m</span>
              </div>
              <span className="top-0 right-0 w-2 h-2 bg-blue-500 rounded-full"></span>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Section */}
      <div className="dark:bg-gray-800 dark:text-white w-[870px] flex-1 flex flex-col bg-gray-50 mb-3">
        {/* Header */}
        <div className="dark:bg-gray-800 dark:text-white w-full flex justify-between items-center p-4 border-b bg-white">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40"
              alt=""
              className="rounded-full w-10 h-10"
            />
            <div>
              <h3 className="font-semibold">Office Group</h3>
              <p className="text-xs text-gray-500">Last seen 2m ago</p>
            </div>
          </div>
          <div className="space-x-3 ">
            <button><img src={voiceCall} alt=""/></button>
            <button><img src={Vcall} alt="" /></button>
            <button>⋮</button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 space-y-6 overflow-y-auto">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.me ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-sm p-3 rounded-xl ${
                  msg.me
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-800 shadow"
                }`}
              >
                {!msg.me && (
                  <p className="text-xs text-gray-500 mb-1">{msg.sender}</p>
                )}
                <p className="text-sm">{msg.text}</p>
                {msg.images && (
                  <div className="flex gap-2 mt-2">
                    {msg.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt=""
                        className="w-20 h-20 rounded object-cover"
                      />
                    ))}
                  </div>
                )}
                <p className="text-xs mt-2 text-right">{msg.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Typing + Input */}
        <div className="p-4 flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/30"
            alt=""
            className="w-8 h-8 rounded-full"
          />
          <p className="dark:text-gray-300 text-xs text-gray-500">Akash is typing  . . .</p>
        </div>
        <div className="dark:bg-gray-800 dark:text-white p-4 border-t bg-white flex items-center gap-3">
          <button className="text-xl">😊</button>
          <input
            type="text"
            placeholder="Write a message..."
            className="dark:bg-gray-800 dark:text-white dark:border dark:border-white flex-1 px-4 py-2 outline-none text-sm"
          />
          <a href="#"><img src={LinkIcon} alt="" className="cursor-pointer"/></a>
          <button className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
            <img src={SendIcon} alt="" className="w-6 h-6 -rotate-45"/>
          </button>
        </div>
      </div>
    </div>
   <ChatUi/>
   </>
  );
};

export default Messages;
