"use client";
import React, { useState } from "react";
import { CiSearch, CiBellOn } from "react-icons/ci";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

const sideBarItems = [
  { item: "Dashboard", icon: "" },
  { item: "Inbox", icon: "" },
  { item: "Wallet", icon: "" },
  { item: "Newsfeed", icon: "" },
  { item: "Indox", icon: "" },
  { item: "Market", icon: "" },
  { item: "Archive", icon: "" },
];

const DashboardNavbar = ({
  backgroundColor = "white",
  name = "Jhon Deo",
  field = "Administrator",
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}
    >
      {/* Navbar */}
      <div
        className={`w-full h-[9.5%] px-4 md:px-8 flex items-center border-b-[1.2px] ${
          isDarkMode ? "border-gray-700" : "border-gray-300"
        }`}
      >
        <div className="w-full mx-auto flex items-center justify-between py-4">
          {/* Logo section and searchbar section */}
          <div className="flex items-center w-full md:w-[46.11%] gap-4 md:gap-6">
            <div className="flex whitespace-nowrap">
              <img src="" alt="Logo" className="h-8 md:h-10" />
              <p className="font-bold text-xl md:text-[2.265625rem]">SKIMZO</p>
            </div>
            <div className="relative h-10 md:h-12 w-full max-w-xs">
              <input
                className="flex h-full w-full rounded-[0.7rem] bg-[#F9FBFC] pl-10 pr-3 py-2 text-sm md:text-base placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Search"
              />
              <CiSearch className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-xl md:text-2xl text-gray-600 font-bold" />
            </div>
          </div>

          {/* Profile section */}
          <div className="flex gap-4 md:gap-10 items-center justify-end">
            <div>
              <CiBellOn className="text-2xl md:text-3xl" />
            </div>

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 md:w-[50px] md:h-[50px] bg-[#12AFF0] rounded-full">
                <img
                  src=""
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              <div className="flex flex-col">
                <p className="text-sm md:text-[20px] font-bold whitespace-nowrap">
                  {name}
                </p>
                <p className="text-xs md:text-[15px] text-gray-400">{field}</p>
              </div>

              <div className="flex flex-col">
                <IoIosArrowUp className="text-sm md:text-lg" />
                <IoIosArrowDown className="text-sm md:text-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main section */}
      <div className="flex w-full h-[90.5%] mb-34 shadow-md">
        {/* Sidebar section */}
        <div className="w-[25%] min-w-[240px] py-[2%] h-full flex flex-col justify-between items-center border-r-[1.2px]">
          <div className="w-full">
            <div className="border-b-[1.2px] flex flex-col gap-6 md:gap-8 px-4 md:px-8 pb-8">
              {sideBarItems.map((item, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <p className="text-sm md:text-[18px]">{item.item}</p>
                </div>
              ))}
            </div>

            <div className="border-b-[1.2px] px-4 md:px-8 py-8">
              <div className="flex flex-col gap-6 md:gap-8">
                <p className="text-sm md:text-[18px]">Setting</p>
                <p className="text-sm md:text-[18px]">Profile</p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-6 md:gap-8 items-center border-t-[1px] px-4 md:px-8 py-8">
            {/* Add new product section */}
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 md:w-[46px] md:h-[46px] bg-[#12AFF0] flex items-center justify-center rounded-full">
                <FaPlus className="text-lg md:text-xl text-[#FFFFFF]" />
              </div>
              <p className="text-sm md:text-[18px]">Add new product</p>
            </div>

            {/* Dark mode section */}
            <div
              className="flex gap-4 items-center cursor-pointer"
              onClick={handleToggle}
            >
              <div className="rounded-full">
                {isDarkMode ? (
                  <MdOutlineLightMode className="text-[#99B2C6] text-2xl md:text-3xl" />
                ) : (
                  <MdOutlineDarkMode className="text-[#99B2C6] text-2xl md:text-3xl" />
                )}
              </div>
              <p className="text-sm md:text-[18px]">
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </p>
              {isDarkMode ? (
                <BsToggleOn className="text-[#809FB8] text-2xl md:text-3xl font-bold" />
              ) : (
                <BsToggleOff className="text-[#809FB8] text-2xl md:text-3xl font-bold" />
              )}
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="w-3/4"></div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
