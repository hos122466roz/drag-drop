"use client";
import React, { useState } from "react";
import img from "../../../../public/image/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import { MdLogin } from "react-icons/md";
import {  BsFillBasketFill } from "react-icons/bs";
import { HiBars3 } from "react-icons/hi2";
import { MdOutlineClose } from "react-icons/md";
import { FaHome, FaStore } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { ImCoinEuro } from "react-icons/im";
import CountUp from "react-countup";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {/* Desktop Menu */}
      <header className="md:flex hidden z-50 h-24 justify-between items-center py-3 px-10 bg-white fixed top-0 left-0 w-full border-b border-b-gray-600/50">
        <div className=" flex gap-x-12 justify-center items-center">
          <Image src={img} alt="logo" className="" />
          <nav className="">
            <ul className="flex justify-between items-center gap-x-8  font-MorabbaMedium *:hover:text-red-800">
              <li className="text-red-800 relative">
                <Link href={"/"}> Home</Link>
                <span className="w-full absolute h-1   -bottom-1 left-0 bg-red-800">
                  {" "}
                </span>
              </li>
              <li>
                <Link href={"/about"}> About </Link>
              </li>
              <li>
                <Link href={"/shop"}> Store</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <div>
            <div className="flex items-center justify-center">
              <div className="mr-10 flex gap-x-2 *:hover:text-red-800">
                <button className="flex gap-x-3 mr-5 text-yellow-400 border-1 border-y-amber-400 bg-amber-100/40 rounded-[4px] p-2 px-4 items-center justify-center">
                  <ImCoinEuro size={30} />
                  <span className="text-[20px]">
                    {" "}
                    <CountUp end={2564600} />
                  </span>
                </button>
                <button>
                  <BsFillBasketFill size={24} />
                </button>
              </div>
              <div className="pl-10 border-l-1  border-l-zinc-400  ">
                <button className="border-1 hover:text-red-800 py-1 px-2 rounded-[4px] flex items-center text-xl  gap-x-2.5 font-MorabbaMedium tracking-lightes">
                  <span className="hidden xl:inline-block"> Sign in</span>
                  <MdLogin className="rotate-180" size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Mobaile Menu */}
      <header
        className={`flex  md:hidden z-50 h-24 justify-between items-center py-3 px-5 bg-white fixed top-0 left-0 w-full border-b border-b-gray-600/50`}
      >
        <div className="flex justify-center items-center gap-x-8">
          <div onClick={() => setShow(true)}>
            <HiBars3 size={20} />
          </div>

          <div className="size-15 flex justify-center items-center">
            <Image src={img} alt="logo" />
          </div>
        </div>

        <div>
          <div>
            <div className="flex items-center justify-center">
              <div className=" border-r-1  border-r-zinc-400  "></div>
              <div className="flex justify-center items-center *:hover:text-red-800">
                <button className="flex gap-x-2 mr-2 text-yellow-400 border-1 border-y-amber-400 bg-amber-100/40 rounded-[4px] py-0.5 px-1 items-center justify-center">
                  <ImCoinEuro size={20} />
                  <span className="text-[14px]">
                    {" "}
                    <CountUp end={2564600} />
                  </span>
                </button>
                <button>
                  <BsFillBasketFill size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`border-r transition-all border-r-zinc-400 absolute top-0 ${
            show ? "left-0" : "-left-[100%] "
          } w-2/3 h-[100vh] bg-white`}
        >
          <div className=" flex  w-full justify-between items-center border-b-1">
            <div className="py-3 pl-5 shrink-0 w-1/2 size-15">
              <Image src={img} alt="logo" />
            </div>
            <div className="  border-l-1 h-full flex justify-center items-center">
              <div className="p-3" onClick={() => setShow(false)}>
                <MdOutlineClose className="" size={24} />
              </div>
            </div>
          </div>

          <nav className="mt-5">
            <ul className="flex *:flex  *:gap-x-3 *:items-center *:justify-center items-start pl-2 space-y-4 flex-col gap-x-8  font-MorabbaMedium *:hover:text-red-800">
              <li className="text-red-800 relative">
                <FaHome />
                <Link href={"/"}> Home</Link>
                <span className="w-full absolute h-1   -bottom-1 left-0 bg-red-800">
                  {" "}
                </span>
              </li>
              <li>
                <RiTeamFill />
                <Link href={"/about"}> About </Link>
              </li>
              <li>
                <FaStore />
                <Link href={"/shop"}> Store</Link>
              </li>
              <li className="">
                <MdLogin className="rotate-180" size={20} />
                <Link href={"/acount"}> Sign in</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
