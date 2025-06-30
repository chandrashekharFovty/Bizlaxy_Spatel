import React, { useState } from "react";
import voiceCall from "../../../public/voicecall.png";
import Vcall from "../../../public/Vcall.png";
import LinkIcon from "../../../public/link.png";
import SendIcon from "../../../public/send.png";
import ChatUi from "./ChatUi";
import { useNavigate } from "react-router-dom";
import { FiArrowRight, FiCopy, FiTrash2, FiX } from "react-icons/fi";

// Initial chat data
const initialChatUsers = [
  {
    id: 1,
    name: "Akash Retail",
    type: "Direct",
    lastSeen: "2m ago",
    preview: "Interested in bulk order of So...",
    avatar: "https://i.pravatar.cc/40?img=1",
    messages: [
      {
        sender: "Akash Retail",
        text: "Hi! I'm interested in a bulk order.",
        time: "17:00",
        me: false,
      },
      {
        sender: "You",
        text: "Sure, I can help you with that!",
        time: "17:02",
        me: true,
      },
    ],
  },
  {
    id: 2,
    name: "Mike Mazowski",
    type: "Direct",
    lastSeen: "5m ago",
    preview: "Hey! Did you check the files?",
    avatar: "https://i.pravatar.cc/40?img=2",
    messages: [
      {
        sender: "Mike Mazowski",
        text: "Did you check the vacation plan?",
        time: "18:04",
        me: false,
      },
      {
        sender: "You",
        text: "Yes, looks good to me!",
        time: "18:44",
        me: true,
      },
    ],
  },
  {
    id: 3,
    name: "Sarah Connor",
    type: "Groups",
    lastSeen: "10m ago",
    preview: "Let's meet at 5pm tomorrow.",
    avatar: "https://i.pravatar.cc/40?img=3",
    messages: [
      {
        sender: "Sarah Connor",
        text: "Let's meet tomorrow at 5pm?",
        time: "14:30",
        me: false,
      },
      {
        sender: "You",
        text: "Perfect, see you then!",
        time: "14:35",
        me: true,
      },
    ],
  },
  {
    id: 4,
    name: "Dev Team",
    type: "Groups",
    lastSeen: "20m ago",
    preview: "Sprint planning at 10AM.",
    avatar: "https://i.pravatar.cc/40?img=4",
    messages: [
      {
        sender: "Dev Team",
        text: "Don’t forget sprint planning tomorrow.",
        time: "09:00",
        me: false,
      },
      { sender: "You", text: "Got it!", time: "09:05", me: true },
    ],
  },
  {
    id: 5,
    name: "Request from John Doe",
    type: "Requests",
    lastSeen: "Just now",
    preview: "Please add me to your contacts.",
    avatar: "https://i.pravatar.cc/40?img=5",
    messages: [
      {
        sender: "John Doe",
        text: "Hey! Please add me.",
        time: "08:00",
        me: false,
      },
    ],
  },
  {
    id: 6,
    name: "Request from Jane Smith",
    type: "Requests",
    lastSeen: "1m ago",
    preview: "I'd like to connect with you.",
    avatar: "https://i.pravatar.cc/40?img=6",
    messages: [
      {
        sender: "Jane Smith",
        text: "Hi there! I'd like to connect.",
        time: "12:00",
        me: false,
      },
    ],
  },
  {
    id: 7,
    name: "Akash Retail",
    type: "Direct",
    lastSeen: "2m ago",
    preview: "Interested in bulk order of So...",
    avatar: "https://i.pravatar.cc/40?img=1",
    messages: [
      {
        sender: "Akash Retail",
        text: "Hi! I'm interested in a bulk order.",
        time: "17:00",
        me: false,
      },
      {
        sender: "You",
        text: "Sure, I can help you with that!",
        time: "17:02",
        me: true,
      },
    ],
  },
  {
    id: 8,
    name: "Mike Mazowski",
    type: "Direct",
    lastSeen: "5m ago",
    preview: "Hey! Did you check the files?",
    avatar: "https://i.pravatar.cc/40?img=2",
    messages: [
      {
        sender: "Mike Mazowski",
        text: "Did you check the vacation plan?",
        time: "18:04",
        me: false,
      },
      {
        sender: "You",
        text: "Yes, looks good to me!",
        time: "18:44",
        me: true,
      },
    ],
  },
  {
    id: 9,
    name: "Sarah Connor",
    type: "Direct",
    lastSeen: "10m ago",
    preview: "Let's meet at 5pm tomorrow.",
    avatar: "https://i.pravatar.cc/40?img=3",
    messages: [
      {
        sender: "Sarah Connor",
        text: "Let's meet tomorrow at 5pm?",
        time: "14:30",
        me: false,
      },
      {
        sender: "You",
        text: "Perfect, see you then!",
        time: "14:35",
        me: true,
      },
    ],
  },
  {
    id: 10,
    name: "Dev Team",
    type: "Direct",
    lastSeen: "20m ago",
    preview: "Sprint planning at 10AM.",
    avatar: "https://i.pravatar.cc/40?img=4",
    messages: [
      {
        sender: "Dev Team",
        text: "Don’t forget sprint planning tomorrow.",
        time: "09:00",
        me: false,
      },
      { sender: "You", text: "Got it!", time: "09:05", me: true },
    ],
  },
  {
    id: 11,
    name: "shivi mukati",
    type: "Direct",
    lastSeen: "Just now",
    preview: "Please add me to your contacts.",
    avatar: "https://i.pravatar.cc/40?img=5",
    messages: [
      {
        sender: "shivi mukati",
        text: "Hey! Please add me.",
        time: "08:00",
        me: false,
      },
    ],
  },
  {
    id: 12,
    name: "Rudhra patel",
    type: "Direct",
    lastSeen: "1m ago",
    preview: "I'd like to connect with you.",
    avatar: "https://i.pravatar.cc/40?img=6",
    messages: [
      {
        sender: "Rudhra patel",
        text: "Hi there! I'd like to connect.",
        time: "12:00",
        me: false,
      },
    ],
  },
];

const Messages = () => {
  const [chats, setChats] = useState(initialChatUsers);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messageText, setMessageText] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [filter, setFilter] = useState("Direct");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMessageIdx, setSelectedMessageIdx] = useState(null);


  const handleCopy = (msg) => {
  navigator.clipboard.writeText(msg.text);
  alert("Message copied!");
};

const handleForward = (msg) => {
  console.log("Forward:", msg);
};

const handleDeleteMessage = (index) => {
  const updatedMessages = selectedUser.messages.filter((_, i) => i !== index);
  setSelectedUser({ ...selectedUser, messages: updatedMessages });
  setSelectedMessageIdx(null);
};



  const navigate=useNavigate();


  const handleSend = () => {
    if (!messageText.trim() || !selectedUser) return;

    const newMessage = {
      sender: "You",
      text: messageText.trim(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      me: true,
    };

    const updatedChats = chats.map((chat) =>
      chat.id === selectedUser.id
        ? {
            ...chat,
            messages: [...chat.messages, newMessage],
            preview: newMessage.text.slice(0, 30) + "...",
          }
        : chat
    );

    setChats(updatedChats);

    const updatedUser = {
      ...selectedUser,
      messages: [...selectedUser.messages, newMessage],
    };
    setSelectedUser(updatedUser);

    setMessageText("");
    setShowEmojis(false);
    setShowPopup(false);
  };

  return (
    <>
      <div className="flex h-screen font-sans">
        {/* Sidebar */}
        <div className="dark:bg-gray-800 dark:text-white bg-white border-r p-4 flex flex-col">
          <h2 className="w-[410px] text-xl font-semibold mb-4">Chats</h2>

          <div className="flex space-x-2 mb-4 border border-gray-200 rounded-3xl p-2">
            <button
              onClick={() => setFilter("Direct")}
              className={`w-[124px] h-[40px] px-3 py-1 rounded-full shadow-sm text-md ${
                filter === "Direct"
                  ? "btn-gradient text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              Direct
            </button>
            <button
              onClick={() => setFilter("Groups")}
              className={`w-[124px] h-[40px] px-3 py-1 rounded-full shadow-sm text-md ${
                filter === "Groups"
                  ? "btn-gradient text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              Groups
            </button>
            <button
              onClick={() => setFilter("Requests")}
              className={`w-[124px] h-[40px] px-3 py-1 rounded-full shadow-sm text-md ${
                filter === "Requests"
                  ? "btn-gradient text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              Requests
            </button>
          </div>

          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-[50px] px-4 border rounded-3xl mb-4 text-sm outline-[#a952e4]"
          />

          <div className="scrollbar-hide space-y-3 overflow-y-auto w-full">
            {chats
              .filter(
                (user) =>
                  user.type === filter &&
                  user.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((user) => (
                <div
                  key={user.id}
                  onClick={() => setSelectedUser(user)}
                  className="flex items-center justify-between border p-2 hover:bg-gray-300 rounded cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="rounded-full w-10 h-10"
                    />
                    <div>
                      <p className="font-medium text-sm">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.preview}</p>
                    </div>
                    <span className="text-xs text-gray-400">
                      {user.lastSeen}
                    </span>
                  </div>
                  <span className="top-0 right-0 w-2 h-2 bg-blue-500 rounded-full"></span>
                </div>
              ))}
          </div>
        </div>

        {/* Chat Section */}
        <div className="dark:bg-gray-800 dark:text-white w-[870px] flex-1 flex flex-col bg-gray-50 mb-3">
          {/* Header */}
          <div className="w-full flex justify-between items-center p-4 border-b bg-white">
            <div className="flex items-center gap-3">
              <img
                src={
                  selectedUser
                    ? selectedUser.avatar
                    : "https://i.pravatar.cc/40"
                }
                alt=""
                className="rounded-full w-10 h-10"
              />
              <div>
                <h3 className="font-semibold">
                  {selectedUser ? selectedUser.name : "Select a chat"}
                </h3>
                <p className="text-xs text-gray-500">
                  {selectedUser ? `Last seen ${selectedUser.lastSeen}` : ""}
                </p>
              </div>
            </div>
            <div className="space-x-3">
                        <button onClick={() => navigate("/videocall", { state: { user: selectedUser } })}>
                <img src={voiceCall} alt="" />
              </button>
            <button onClick={() => navigate("/videocall", { state: { user: selectedUser } })}>
  <img src={Vcall} alt="" />
</button>

              <button>⋮</button>
            </div>
          </div>

          {/* Messages */}
        <div className="flex-1 p-4 space-y-6 overflow-y-auto">
  {selectedUser?.messages?.map((msg, idx) => (
    <div
      key={idx}
      className={`relative flex ${msg.me ? "justify-end" : "justify-start"}`}
      onClick={() => setSelectedMessageIdx(idx)}
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
        <p className="text-xs mt-2 text-right">{msg.time}</p>
      </div>

      {/* Popup menu */}
      {selectedMessageIdx === idx && (
        <div className="absolute top-0 right-0 mt-[-20px] flex gap-2 bg-white shadow p-2 rounded">
       <button onClick={() => handleCopy(msg)}><FiCopy /></button>
<button onClick={() => handleForward(msg)}><FiArrowRight /></button>
<button onClick={() => handleDeleteMessage(idx)}><FiTrash2 /></button>
<button onClick={() => setSelectedMessageIdx(null)}><FiX /></button>
        </div>
      )}
    </div>
  ))}
</div>


          {/* Typing + Input */}
          {messageText.trim() && selectedUser && (
            <div className="p-4 flex items-center gap-3">
              <img
                src={selectedUser.avatar}
                alt=""
                className="w-8 h-8 rounded-full"
              />
              <p className="dark:text-gray-300 text-xs text-gray-500">
                {`${selectedUser.name} is typing . . .`}
              </p>
            </div>
          )}

          <div className="relative dark:bg-gray-800 dark:text-white p-4 border-t bg-white flex items-center gap-3">
            {/* Emoji */}
            <div className="relative">
              <button
                onClick={() => setShowEmojis(!showEmojis)}
                className="text-xl"
              >
                😊
              </button>
              {showEmojis && (
                <div className="absolute bottom-14 left-0 bg-white border rounded shadow p-2 flex gap-2">
                  {["😀", "😁", "😂", "😍", "👍"].map((emoji) => (
                    <button
                      key={emoji}
                      className="text-2xl"
                      onClick={() => {
                        setMessageText((prev) => prev + emoji);
                        setShowEmojis(false);
                      }}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <input
              type="text"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              placeholder="Write a message..."
              className="dark:bg-gray-800 dark:text-white dark:border dark:border-white flex-1 px-4 py-2 outline-none text-sm"
            />

            {/* Attachments */}
            <div className="relative">
              <button onClick={() => setShowPopup(!showPopup)}>
                <img src={LinkIcon} alt="" />
              </button>
              {showPopup && (
                <div className="absolute bottom-14 right-0 bg-white border rounded shadow p-4 w-48 flex flex-col gap-3 z-50">
                  <button className="flex items-center gap-2 text-sm hover:bg-gray-100 p-2 rounded">
                    <span className="w-6 h-6 bg-blue-500 text-white flex items-center justify-center rounded">
                      📄
                    </span>{" "}
                    Document
                  </button>
                  <button className="flex items-center gap-2 text-sm hover:bg-gray-100 p-2 rounded">
                    <span className="w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded">
                      👤
                    </span>{" "}
                    Contact
                  </button>
                  <button className="flex items-center gap-2 text-sm hover:bg-gray-100 p-2 rounded">
                    <span className="w-6 h-6 bg-purple-500 text-white flex items-center justify-center rounded">
                      🖼️
                    </span>{" "}
                    Media File
                  </button>
                  <button className="flex items-center gap-2 text-sm hover:bg-gray-100 p-2 rounded">
                    <span className="w-6 h-6 bg-red-500 text-white flex items-center justify-center rounded">
                      📑
                    </span>{" "}
                    PDF
                  </button>
                </div>
              )}
            </div>

            {/* Send */}
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center"
            >
              <img src={SendIcon} alt="" className="w-6 h-6 -rotate-45" />
            </button>
          </div>
        </div>
      </div>

      {/* <ChatUi /> */}
    </>
  );
};

export default Messages;
