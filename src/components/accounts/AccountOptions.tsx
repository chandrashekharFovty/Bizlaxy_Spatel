import React from "react";

const AccountOption = ({id, title, desc, selected, onClick }) => {
  return (
    <div
      className={`border-2 w-full h-[90px] px-[35px] bg-[#eef4fd] py-[12px] rounded-[12px] p-4 cursor-pointer transition duration-200 ${
        selected ? "border-blue-600" : "border-[#BED6FF]"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-[10px]">
          <h4 className="font-bold text-xl">{title}</h4>
          <span className="hidden">{id}</span>
          <p className="text-sm font-normal text-gray-500">{desc}</p>
        </div>

        <div
          className={`w-10 h-10 rounded-full border-2 border-[#BED6FF] flex items-center justify-center mt-1 ${
            selected ? "border-[#1C4BC4] bg-gradient-to-br from-blue-600 to-purple-600" : "border-[#BED6FF]"
          }`}
        >
        <div className={`w-5 h-5 border-2 border-[#BED6FF] rounded-full ${selected ? "bg-[#BED6FF] " : "bg-trasparent"}`}></div>
        </div>
      </div>
    </div>
  );
};

export default AccountOption;
