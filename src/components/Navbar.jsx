"use client";
import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import logo from "../Assets/github-logo.png";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

const menuItems = [
  {
    name: "Product",
    href: "#",
  },
  {
    name: "Solution",
    href: "#",
  },
  {
    name: "Open Source",
    href: "#",
  },
  {
    name: "Enterprise",
    href: "#",
  },
  {
    name: "Pricing",
    href: "#",
  },
];

const menuItems2 = [
  {
    name: "Features",
    href: "#",
  },
  {
    name: "Solution",
    href: "#",
  },
  {
    name: "Open Source",
    href: "#",
  },
  {
    name: "Enterprise",
    href: "#",
  },
  {
    name: "Pricing",
    href: "#",
  },
  {
    name: "Feature",
    href: "#",
  },
  {
    name: "Solution",
    href: "#",
  },
  {
    name: "Open Source",
    href: "#",
  },
  {
    name: "Enterprise",
    href: "#",
  },
  {
    name: "Pricing",
    href: "#",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [currentTab, setCurrentTab] = useState(menuItems2[4]);

  return (
    <div className="relative w-full">
      <nav className="mx-auto flex mt-3 items-center justify-between py-2 sm:px-6">
        <div className="inline-flex items-center space-x-2">
          <Image src={logo} alt="logo" className="w-14" />
        </div>

        <div className="hidden grow items-start lg:flex">
          <ul className="ml-8 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="inline-flex items-center text-[1rem] hover:text-gray-200"
                >
                  {item.name}
                  {item.name !== "Pricing" && (
                    <span>
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mr-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <CiSearch />
          </div>
          <input
            type="text"
            className="rounded-lg focus:outline-gray-400 block p-1.5 w-80 ps-10 text-sm text-gray-900 border border-gray-400 bg-black focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search or jump to..."
          />
          <button className="absolute top-2 end-4 flex items-center pointer-events-none text-[8px] border border-gray-400 text-gray-400 px-1.5 py-0.5 rounded-sm cursor-pointer">
            /
          </button>
        </div>

        <div className="hidden space-x-2 lg:block">
          <button
            type="button"
            className="rounded-md bg-transparent px-3 py-2 text-sm mr-3 font-semibold text-white hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white text-[1rem] hover:bg-gray-600"
          >
            Sign in
          </button>
          <button
            type="button"
            className="rounded-md border border-white px-3 py-[5px] text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white text-[1rem] hover:bg-white hover:text-black"
          >
            Sign up
          </button>
        </div>

        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>

        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-white ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <Image src={logo} alt="logo" className="w-10" />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium">
                          {item.name}
                        </span>
                        <span>
                          <ChevronRight className="ml-3 h-4 w-4" />
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="mt-2 space-y-2">
                  <button
                    type="button"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                  >
                    Sign in
                  </button>
                  <button
                    type="button"
                    className="w-full rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      <div>
        <div className="hidden grow items-start lg:flex">
          <ul className="ml-8 inline-flex space-x-6 items-center ">
            {menuItems2.map((item) => (
              <li key={item.name} className="flex flex-col gap-2 group">
                <Link
                  href={item.href}
                  className={`inline-flex items-center transition-all group-hover:text-blue-500 ${
                    item.name === "Features"
                      ? "text-[1.3rem] font-semibold"
                      : "text-[1rem]"
                  } `}
                  onClick={() => setCurrentTab(item)}
                >
                  {item.name}
                </Link>
                <div
                  className={`h-[0.5px] bg-white w-[50%] mx-auto group-hover:bg-blue-500 ${
                    currentTab === item ? "visible " : "invisible"
                  }  group-hover:visible transition-all   duration-100 transform group-hover:scale-150`}
                ></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
