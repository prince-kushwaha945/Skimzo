"use client";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import logo from "../Assets/github-logo.png";
import heroBg from "../Assets/hero-bg.jpg";
import heroCode from "../Assets/Hero_code.jpeg";
import Navbar from "./Navbar";


const menuItems = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div
      style={{
        background: `url('${heroBg.src}')`,
        backgroundSize: "100% 100%",
    
      }}
     
    >
      <Navbar />
      <div className="relative w-full h-[100vh]">
        <div className="relative isolate z-0 px-6 lg:px-8 ">
          <div className="relative mx-auto max-w-3xl py-10">
            <div className="flex flex-col items-center justify-center mb-7">
              <div className=" flex gap-3 items-center justify-center border border-gray-400 w-48 rounded-3xl py-3 px-2 ">
                <Image src={logo} alt="logo" className=" w-6 " />
                <p>GitHub Copilot</p>
              </div>
            </div>
            
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">
                The world’s most widely adopted AI developer tool.
              </h1>

              <div className="mt-10 flex items-center justify-center gap-7">
                <button
                  type="button"
                  className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-black shadow-sm hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white flex items-center gap-2"
                >
                  Buy Now <FaArrowRight />
                </button>
                <button
                  type="button"
                  className="rounded-md border border-white px-5 py-3 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:bg-gray-100/50 "
                >
                  Compare Plans
                </button>
              </div>
            </div>
          </div>


          <div className="relative mx-auto max-w-6xl">
          <Image src={heroCode} alt="logo" className="  " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
