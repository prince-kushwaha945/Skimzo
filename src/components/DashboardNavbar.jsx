"use client";
import React from "react";
import { CiSearch, CiBellOn } from "react-icons/ci";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { BsToggleOff } from "react-icons/bs";

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
  return (
    <>
      {/* navbar */}
      <div
        className={`bg-${backgroundColor} w-screen h-[95px] px-8 flex items-center border-b-[1.2px] border-gray-5`}
      >
        <div className="w-full mx-auto flex items-center justify-between">
          {/* Logo section and searchbar Section */}
          <div className="flex items-center w-[664px] justify-between">
            <div className="flex whitespace-nowrap">
              <img src="" alt="" />
              <p className="text-black font-bold text-[2.265625rem]">SKIMZO</p>
            </div>
            <div className="relative h-12 w-[360px]">
              <input
                className="flex text-black h-full w-full rounded-[0.7rem] bg-[#F9FBFC] pl-12 pr-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Search"
              />
              <CiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl text-gray-600 font-bold" />
            </div>
          </div>

          {/* Profile section */}
          <div className="flex gap-10 items-center justify-end">
            <div>
              <CiBellOn className="text-gray-700 text-3xl" />
            </div>

            <div className="flex items-center gap-2">
              <div className="w-[50px] h-[50px] bg-[#12AFF0] rounded-full">
                <img src="" alt="" />
              </div>

              <div className="flex flex-col">
                <p className="text-[20px] text-black font-bold whitespace-nowrap">
                  {name}
                </p>
                <p className="text-[15px] text-gray-400">{field}</p>
              </div>

              <div className="flex flex-col text-gray-400">
                <IoIosArrowUp className="" />
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* main section */}
      <div className="flex w-screen h-[1485px] mb-34 shadow-md">
        {/* Sidebar section */}
        <div className="w-[340px] py-[30px] h-[1485px] flex flex-col justify-between items-center border-r-[1.2px]">
          <div className="w-full">
            <div className="border-b-[1.2px] flex flex-col gap-8 px-8 pb-8">
              {sideBarItems.map((item, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <p className="text-[#809FB8] text-[18px]">{item.item}</p>
                </div>
              ))}
            </div>

            <div className="border-b-[1.2px] px-8 py-8">
              <div className="flex flex-col gap-8">
                <p className="text-[#809FB8] text-[18px]">Setting</p>
                <p className="text-[#809FB8] text-[18px]">Profile</p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-8 items-center border-t-[1px] px-8 py-8">
            {/* Add new product section */}
            <div className="flex gap-4 items-center">
              <div className="w-[46px] h-[46px] bg-[#12AFF0] flex items-center justify-center rounded-full">
                <FaPlus className="text-xl text-[#FFFFFF]" />
              </div>
              <p className="text-[#809FB8] text-[18px]">Add new product</p>
            </div>

            {/* Dark mode section */}
            <div className="flex gap-4 items-center">
              <div className="rounded-full">
                <MdOutlineDarkMode className="text-[#99B2C6] text-3xl" />
              </div>
              <p className="text-[#809FB8] text-[18px]">Dark Mode</p>
              <BsToggleOff className="text-[#809FB8] text-3xl font-bold" />
            </div>
          </div>
        </div>

        {/* Right section */}
        <div></div>
      </div>
    </>
  );
};

export default DashboardNavbar;
