import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../layout/Sidebar";
import { AiOutlineFilePdf } from "react-icons/ai";

function InfoProfile() {
  const [activeTab, setActiveTab] = useState<"company" | "funding">("company");
  const [hasImportCode, setHasImportCode] = useState<null | boolean>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setPdfFile(e.target.files[0]);
  };

  return (
    <>
      <div className="flex">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="ml-[250px] w-full h-screen flex flex-col overflow-hidden">
          {/* Fixed Top Section */}
          <div className="h-[300px] w-full bg-gradient-to-b from-blue-400 to-purple-600 pt-4 pl-6 shrink-0">
            <Link
              to="/profile"
              className="flex items-center font-semibold text-white mb-2"
            >
              <span className="text-xl">&#8592;</span>
              <span className="ml-2">Back to Profile</span>
            </Link>

            <div className="mt-4 w-[70%] rounded-xl h-[200px] bg-white/10 p-4 backdrop-blur-md text-white">
              <h1 className="text-lg font-semibold mb-4">Contact Info</h1>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-medium">Location</p>
                  <p>Mumbai, India</p>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p>shivimukati74@gmail.com</p>
                </div>
                <div>
                  <p className="font-medium">GST Number</p>
                  <p>123456789</p>
                </div>
                <div>
                  <p className="font-medium">Mobile No.</p>
                  <p>+91 74890 99533</p>
                </div>
                <div>
                  <p className="font-medium">Import/Export No</p>
                  <p>#C0991745832</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable Form Section */}
          <div className="flex-grow overflow-y-auto px-10 pt-6 pb-10 bg-white dark:bg-gray-900">
            {/* Tabs */}
            <div className="flex justify-start mb-6">
              <div className="bg-[#F3F3F3] dark:bg-gray-700 rounded-full w-[800px] p-1 flex">
                <button
                  onClick={() => setActiveTab("company")}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition w-[400px] ${
                    activeTab === "company"
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  Company Info
                </button>
                <button
                  onClick={() => setActiveTab("funding")}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition w-[400px] ${
                    activeTab === "funding"
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  Funding Info
                </button>
              </div>
            </div>

            {/* Dynamic Form */}
            <div className="grid grid-cols-1 gap-4 w-[830px] outline-[#BED6FF]">
              {activeTab === "company" ? (
                <>
                  <FormField label="Company Name" />
                  <FormField label="Business Type" />
                  <FormField label="Industry & Sector" />
                  <FormField label="Business Model" />
                  <FormField label="Company CEO Name" />
                  <FormField label="Establishment Year" />
                  <FormField label="Number of Employees" />
                  <FormField label="Annual Turnover" />
                  <FormField label="Stage of Company" />
                  <FormField label="Company Info" />
                  <FormField label="About Products & Services" />
                  <FormField label="Add Links" />
                  <FormField label="Registered Address" />
                  <FormField label="Email" />
                  <FormField label="Phone Number" />
                </>
              ) : (
                <>
                  {/* ✅ Fixed Min-Max */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    <FormField
                      label="Max Funding Required"
                      placeholder="Min"
                    />
                    <FormField label="" placeholder="Max" />
                  </div>

                  <h3 className="text-md font-semibold mt-4">Fund Raising</h3>
                  <p className="text-sm mb-2">
                    Do you have an Import Export Code (IIC)?
                  </p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setHasImportCode(true)}
                      className={`px-4 py-2 w-[100px] rounded-xl border ${
                        hasImportCode === true
                          ? "bg-blue-600 text-white"
                          : "bg-white border-blue-300"
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setHasImportCode(false)}
                      className={`px-4 py-2 w-[100px] rounded-xl border ${
                        hasImportCode === false
                          ? "bg-blue-600 text-white"
                          : "bg-white border-blue-300"
                      }`}
                    >
                      No
                    </button>
                  </div>

                  <h3 className="text-md font-semibold mt-6">
                    Location Preference
                  </h3>
                  <p className="text-sm mb-2">
                    Select preferred investor location to improve targeting and
                    visibility:
                  </p>
                  <div className="w-full">
                    <label className="text-sm font-medium mb-1 block">
                      Preferred Location
                    </label>
                    <select className="w-full text-gray-500 border h-10 rounded-xl pl-2 dark:bg-gray-700 dark:text-white">
                      <option>Anywhere in India</option>
                      <option>Mumbai</option>
                      <option>Bangalore</option>
                      <option>Delhi</option>
                    </select>
                  </div>

                  <h3 className="text-md font-semibold mt-6">
                    Graph Creation & Revenue Growth
                  </h3>

                  <div className="relative inline-block w-[150px]">
                    <input
                      id="pdf-upload"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="pdf-upload"
                      className="flex border gap-2 border-gray-300 rounded-xl p-2 pl-4 cursor-pointer dark:bg-gray-700 dark:text-white"
                    >
                      <AiOutlineFilePdf className="text-2xl text-gray-800" />
                      <span className="text-gray-800">Upload PDF</span>
                    </label>
                  </div>

                  {pdfFile && (
                    <p className="text-sm text-green-600 mt-1">
                      Selected: {pdfFile.name}
                    </p>
                  )}

                  <FormField
                    label="Pitch Link"
                    placeholder="YouTube or PDF link"
                  />
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="fixed right-0 top-0 w-[350px] h-full z-10 flex flex-col items-center text-center justify-start border-l-2 border-[#f3f2fa] bg-white dark:bg-gray-900 pt-[68px] px-4">
          <div className="w-[168px] h-[168px] rounded-full bg-gray-300 overflow-hidden">
            <img
              src="/default-profile.png"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="text-xl font-bold mt-4 dark:text-white">
            Michael Roberts
          </div>
          <div className="text-gray-500 text-sm mt-1 dark:text-gray-300">
            Passionate about funding innovative startups.
          </div>
          <a
            href="https://www.nebulotech.com"
            className="text-blue-400 mt-1 block"
          >
            www.nebulotech.com
          </a>
          <div className="flex gap-2 mt-6">
            <button className="border px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
              Edit Details
            </button>
            <label className="cursor-pointer border px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
              Edit Profile Image
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

const FormField = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder?: string;
}) => (
  <div className="flex flex-col w-full">
    {label && <label className="text-sm font-medium mb-1">{label}</label>}
    <input
      type="text"
      placeholder={placeholder || label}
      className="border border-gray-300 h-10 rounded-xl pl-3 dark:bg-gray-700 dark:text-white"
    />
  </div>
);

export default InfoProfile;
