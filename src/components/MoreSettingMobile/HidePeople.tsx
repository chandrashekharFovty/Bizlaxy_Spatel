import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { MdExpandLess } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa'; // Use this for the tick icon
import { Link } from 'react-router-dom';

const Users = [
  { name: "imkr", title: "Follows you", img: "/Hide.jpg" },
  { name: "organic__ai", title: "Followed by xhingg_singh07", img: "/Hide1.jpg" },
  { name: "im_gr", title: "Followed by xhingg_singh07", img: "/Hide2.jpg" },
  { name: "abhi52", title: "Follows you", img: "/Hide3.jpg" },
  { name: "soktri", title: "Follows you", img: "/Hide.jpg" },
];

function Blocked() {
  return (
    <div className="pt-16 px-4">
      {/* Fixed header */}
      <div className="fixed top-0 left-0 right-0 bg-white z-10 border-b-2 border-gray-200 flex items-center py-4 px-4">
        <Link to="/settings" className="flex items-center">
          <MdExpandLess className="transform rotate-[-90deg] text-2xl" />
          <span className="font-bold text-xl ml-6">Hide Story and Live</span>
        </Link>
      </div>

      {/* Search input */}
      <div className="relative flex items-center my-4">
        <CiSearch className="absolute left-3 text-xl text-gray-500" />
        <input
          type="text"
          placeholder="Search for People"
          className="w-full h-14 border border-gray-300 rounded-xl py-2 pl-10 pr-4 focus:outline-none"
        />
      </div>

      {/* User list */}
      <div className="space-y-4">
        {Users.map((user, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={user.img} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
              <div className="ml-4">
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-500">{user.title}</p>
              </div>
            </div>

            {/* Custom checkbox */}
            <label className="relative w-5 h-5 border border-gray-400 rounded-sm cursor-pointer">
              <input
                type="checkbox"
                className="peer opacity-0 absolute w-full h-full cursor-pointer"
              />
              <span className="absolute inset-0 rounded-sm peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:to-purple-600"></span>
              <FaCheck className="text-white absolute left-0 top-0 w-5 h-5 p-1 opacity-0 peer-checked:opacity-100" />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blocked;
