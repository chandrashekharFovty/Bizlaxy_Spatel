import React, { useState } from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Link, useNavigate } from "react-router-dom";
import smallArrow from "../../../public/arrowBtn.png";
import userGroup from "../../../public/userGroup.png";
import handRupee from "../../../public/HandRupee.png";
import rupeeBag from "../../../public/rupeeBag.png";
import growRate from "../../../public/growRate.png";
import AddOptions from "./AddOptions";
import { Dialog, DialogPanel } from "@headlessui/react";


const data = [
  { name: "Mon", clicks: 400 },
  { name: "Tue", clicks: 600 },
  { name: "Wed", clicks: 1020 },
  { name: "Thu", clicks: 800 },
  { name: "Fri", clicks: 900 },
  { name: "Sat", clicks: 750 },
  { name: "Sun", clicks: 680 },
];

const options = [
  { id: 1, title: "Targetd Ad's" },
  { id: 2, title: "Pitch Ad" },
  { id: 3, title: "Top Search Ad" },
  { id: 4, title: "Inbox Ad" },
  { id: 5, title: "Special Message Ad" },
];

const Dashboard = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [showSecondDialog, setShowSecondDialog] = useState(false);
  const [selected, setSelected] = useState(null);

  const navigate = useNavigate();

  const handleSetting = () => {
    navigate("/advanced");
  };

  const openDialog = () => {
    setShowDialog(true);
    setShowPopup(false);
  };

  const closeDialog = () => setShowDialog(false);

  const togglePopup = () => setShowPopup(!showPopup);

  return (
    <div className="dark:bg-gray-800 p-6 bg-gray-50 min-h-screen relative">
      {/* Header */}
      <div className="w-[220px] h-[48px] relative">
        <button
          onClick={togglePopup}
          className="bg-blue-600 w-[180px] h-[40px] text-white flex justify-between items-center px-5 py-2 rounded-xl text-sm font-medium"
        >
          <span className="flex items-center gap-2">
            Create New Add
            <img src={smallArrow} alt="" className="w-3 h-3 -rotate-90" />
          </span>
        </button>

        {/* Popup */}
        {showPopup && (
          <div className="absolute top-[50px] z-10 bg-white shadow-lg border rounded-xl p-4 w-[200px] space-y-2">
            <button className="block text-sm px-3 py-2 hover:bg-gray-100 rounded w-full text-left">
              Create Campaign
            </button>
            <button
              onClick={openDialog}
              className="block text-sm px-3 py-2 hover:bg-gray-100 rounded w-full text-left"
            >
              Run Single Ad
            </button>
          </div>
        )}
      </div>

      {/* Dialog Modal */}
     <Dialog open={showDialog} onClose={closeDialog} className="relative z-50">
  <div className="fixed inset-0  bg-black/10" aria-hidden="true" />
  <div className="fixed inset-0 flex items-center justify-center p-4">
    <Dialog.Panel className="w-full max-w-lg dark:bg-gray-800 bg-white rounded-xl p-6 shadow-xl max-h-[90vh] overflow-y-auto relative">
      <button
        onClick={closeDialog}
        className="absolute top-2 right-3 text-gray-600 dark:text-white text-2xl font-bold hover:text-red-600"
      >
        &times;
      </button>

      <Dialog.Title className="text-xl font-semibold mb-4">
        Select Advertisement Type
      </Dialog.Title>

      <Dialog.Description className="text-sm text-gray-600 mb-4 dark:text-white">
        Please choose the type of advertisement you would like to run from the options below:
      </Dialog.Description>

      <div className="flex flex-col gap-4 dark:text-gray-800">
        {options.map((opt) => (
          <AddOptions
            key={opt.id}
            title={opt.title}
            selected={selected === opt.id}
            onClick={() => setSelected(opt.id)}
          />
        ))}
      </div>

      <div className="flex justify-end mt-6">
        <button
          disabled={!selected}
          className={`w-[122px] h-[45px] px-6 py-2 text-lg rounded-[10px] font-semibold transition-colors ${
            selected
              ? "bg-[#1C4BC4] text-white hover:bg-blue-700"
              : "text-white dark:text-gray-800 cursor-not-allowed"
          }`}
          onClick={() => {
            console.log("Selected Ad Type ID:", selected);
            closeDialog();
            setShowSecondDialog(true);
          }}
        >
          Continue
        </button>
      </div>
    </Dialog.Panel>
  </div>
</Dialog>


      {/* Second Dialog Box */}
   <Dialog open={showSecondDialog} onClose={() => setShowSecondDialog(false)} className="relative z-50">
  {/* Backdrop */}
  <div className="fixed inset-0 bg-black/20 w-full" aria-hidden="true" />

  {/* Modal Panel */}
  <div className="fixed inset-0 flex items-center justify-center p-4">
    <Dialog.Panel className="bg-white dark:bg-gray-800 w-[600px]  max-h-[80vh] p-6 rounded-xl shadow-xl relative overflow-y-auto">
      <button
        onClick={() => setShowSecondDialog(false)}
        className="absolute top-2 right-3 text-gray-600 dark:text-white text-2xl font-bold hover:text-red-600"
      >
        &times;
      </button>

      <Dialog.Title className="text-xl font-semibold dark:text-white mb-2 text-center">
        Quick Setting and Advanced Setting
      </Dialog.Title>
      <Dialog.Description className="text-sm text-gray-600 dark:text-white text-center mb-6">
        Please choose the type of advertisement you would like to run from the options below:
      </Dialog.Description>

      {/* Options */}
      <div className="flex gap-4 justify-center">
        {/* Quick Setting */}
       <button
  onClick={() => setSelected("quick")}
  className={`px-4 py-2 flex items-center justify-between border w-[250px] rounded-xl dark:text-white dark:hover:bg-gray-200 dark:hover:text-black ${
    selected === "quick"
      ? "border-gray-400 bg-white text-gray-800"
      : "border-gray-400 text-black"
  } hover:bg-gray-100`}
>
  Quick Setting
  <div
    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ml-4 ${
      selected === "quick"
        ? "border-[#1C4BC4] bg-gradient-to-r from-blue-500 to-purple-600"
        : "border-gray-300"
    }`}
  >
    <div
      className={`w-5 h-5 border-2 border-[#BED6FF] rounded-full ${
        selected === "quick" ? "bg-white" : "bg-transparent"
      }`}
    ></div>
  </div>
</button>


        {/* Advanced Setting */}
        <button
          onClick={() => setSelected("advanced")}
          className={`px-4 py-2 flex items-center justify-between border w-[250px] rounded-xl dark:text-white dark:hover:bg-gray-200 dark:hover:text-black ${
            selected === "advanced"
              ? "border-gray-400 bg-white text-black"
              : "border-gray-400 text-gray-800"
          } hover:bg-gray-100`}
        >
          Advanced Setting
          <div
            className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ml-4 ${
              selected === "advanced"
                ? "border-[#1C4BC4] bg-gradient-to-r from-blue-500 to-purple-600"
                : "border-gray-300"
            }`}
          >
            <div
              className={`w-5 h-5 border-2 border-[#BED6FF] rounded-full ${
                selected === "advanced" ? "bg-white" : "bg-transparent"
              }`}
            ></div>
          </div>
        </button>
      </div>

      {/* Continue Button */}
      {selected === "advanced" && (
        <div className="flex justify-end mt-6">
          <button
            className="w-[122px] h-[45px] px-6 py-2 text-lg rounded-[10px] font-semibold bg-[#1C4BC4] text-white hover:bg-blue-700 transition-colors"
            onClick={() => {
              handleSetting();
              console.log("Selected Setting:", selected);
              setShowSecondDialog(false);
            }}
          >
            Continue
          </button>
        </div>
      )}
    </Dialog.Panel>
  </div>
</Dialog>


      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            title: "Customers",
            value: "1,456",
            change: "+6.5%",
            changeColor: "text-green-500",
            img: <img src={userGroup} alt="" className="w-8 h-8" />,
          },
          {
            title: "Revenue",
            value: "₹279,307.50",
            change: "-0.10%",
            changeColor: "text-red-500",
            img: <img src={handRupee} alt="" className="w-8 h-8" />,
          },
          {
            title: "Profit",
            value: "60%",
            change: "-0.2%",
            changeColor: "text-red-500",
            img: <img src={rupeeBag} alt="" className="w-8 h-8" />,
          },
        ].map((card, i) => (
          <div
            key={i}
            className="w-[369px] h-[159px] bg-white p-4 rounded-xl shadow"
          >
            <div className="w-[339px] h-[120px]">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm text-gray-600">{card.title}</h4>
                <span className="w-[70px] h-[70px] bg-gray-100 p-5 rounded-full">
                  {card.img}
                </span>
              </div>
              <h2 className="text-2xl font-bold">{card.value}</h2>
              <p className={`text-xs mt-1 ${card.changeColor}`}>
                {card.change} Since last week
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Table & Chart */}
      <div className="flex flex-col lg:flex-row gap-3">
        {/* Table */}
        <div className="w-full lg:w-[788px] h-[440px] bg-white p-4 mt-4 rounded-xl shadow overflow-auto">
          <div className="flex justify-between mb-3">
            <h4 className="text-sm font-semibold">Running Ads</h4>
            <button className="text-blue-600 text-sm">See all</button>
          </div>
          <table className="w-full text-sm">
            <thead className="text-left text-gray-500">
              <tr>
                <th className="pb-2">Name</th>
                <th>Status</th>
                <th>Clicks</th>
                <th>Budget</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {[
                ["Summer Sale", "Active", 1234, "₹41,750"],
                ["Product Launch", "Active", 985, "₹68,800"],
                ["Summer Sale", "Inactive", 1102, "₹100,200"],
                ["Summer Sale", "Active", 1234, "₹41,750"],
                ["Summer Sale", "Pending", 1234, "₹41,750"],
              ].map(([name, status, clicks, budget], i) => (
                <tr key={i} className="border-t h-[47px]">
                  <td className="py-2">{name}</td>
                  <td>
                    <span
                      className={`w-[84px] h-[37px] px-4 py-2 text-xs rounded-full font-semibold ${
                        status === "Active"
                          ? "bg-green-100 text-green-600"
                          : status === "Pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {status}
                    </span>
                  </td>
                  <td>{clicks}</td>
                  <td>{budget}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Chart */}
        <div className="w-full lg:w-[379px] h-[440px] bg-white p-4 rounded-xl mt-4 shadow">
          <div className="flex justify-between mb-3">
            <h4 className="text-[18px] font-semibold tracking-[1px]">
              Sales Performance
            </h4>
            <button className="text-blue-600 text-[14px]">See all</button>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <Tooltip />
              <Bar dataKey="clicks" fill="#4f46e5" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="mt-4 text-sm text-gray-500 flex gap-3 font-medium">
            <img src={growRate} alt="" className="w-7 h-6" />
            <span className="text-black font-bold text-[28px]">30%</span> better than last month
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
