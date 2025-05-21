"use client";
import React from "react";
import img from "../../../public/image/charity/photorealistic-kid-refugee-camp.jpg";
import icone1 from "../../../public/image/charity/hands-holding-gift-svgrepo-com.svg";
import icone2 from "../../../public/image/charity/hands-helping-solid-svgrepo-com.svg";
import icone3 from "../../../public/image/charity/hand-heart-svgrepo-com.svg";
import img1 from "../../../public/image/charity/photorealistic-kid-refugee-camp (1).jpg";
import img2 from "../../../public/image/charity/international-day-educationn-children-refugee-camp-attending-school_950002-449559.jpg";
import Image from "next/image";
import { ImCoinEuro } from "react-icons/im";
import CountUp from "react-countup";

const Charity = () => {
  return (
    <section className="mt-24">
      <div className="md:h-[60vh] h-[40vh] z-10 relative  w-full">
        <div className="h-full absolute w-full">
          <Image className="w-full h-full object-cover" src={img} alt="" />
        </div>
        <div className="Charity px-10 md:pl-20 md:text-5xl text-xl font-Dana text-white  relative z-20 size-full flex justify-start items-center">
          <h1 className="z-20 w-2/3 md:w-1/3">
            Your affection for <span className="text-yellow-500">children</span>{" "}
            in need
          </h1>
        </div>
      </div>
      <div className="container my-12 flex justify-center items-center">
        <div className="flex w-fit  gap-x-3 mr-5 text-yellow-400 border-t-1 border-b-1 border-y-amber-400 rounded-[4px] p-4 px-8 items-center justify-center">
          <ImCoinEuro className="md:size-[150px]" />
          <span className="md:text-[100px] text-3xl font-bold">
            {" "}
            <CountUp end={2564600} />
          </span>
        </div>
      </div>
      <div className="container mb-12 *:md:w-1/2 flex flex-col md:flex-row items-start [&_p]:text-zinc-600">
        <div className=" md:shrink ">
          <Image
            className="w-full rounded-xl h-full object-cover"
            src={img1}
            alt=""
          />
        </div>
        <div className="md:pl-14 mt-8 md:mt-0  ">
          <h4 className="text-yellow-400">ABOUT US</h4>
          <h2 className="text-zinc-700 text-3xl font-bold my-4">
            United in compassion, changing lives
          </h2>
          <p className=" ">
            Driven by compassion and a shared vision, we work hand-in-hand with
            communities to create meaningful change.
          </p>
          <div className="flex gap-y-6 flex-col md:flex-row items-start  mt-8">
            <div className=" md:pr-4 ">
              <h4 className="my-4 text-zinc-700 text-xl font-bold ">
                Healthcare Support
              </h4>
              <p>
                Providing essential healthcare services and resources to
                communities.
              </p>
            </div>
            <div className="flex flex-col  p-4 gap-y-2 justify-center text-center items-center rounded-[10px] bg-zinc-100">
              <Image
                className="size-24 rounded-full object-cover"
                src={img2}
                alt=""
              />
              <h2 className="text-xl font-bold text-yellow-400">7,594</h2>
              <h3 className=" text-zinc-700 text-xl font-bold ">Helped Fund</h3>
              <p>Supporting growth through community- funding.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container flex gap-x-5  my-16 [&_p]:text-zinc-600 [&_h2]:my-6 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-zinc-700">
        <div>
          <div className="size-24 bg-zinc-100  p-2 rounded-full">
            <Image src={icone1} alt="icone" />
          </div>
          <h2>Tackling Poverty</h2>
          <p>
            Charity law within the UK varies among England and Wales, Scotland
            and Northern Ireland, but the fundamental principles are the same.
            Most organizations.
          </p>
        </div>
        <div>
          <div className="size-24 bg-zinc-100 p-2 rounded-full ">
            <Image src={icone2} alt="icone" />
          </div>{" "}
          <h2>Make Big Impact</h2>
          <p>
            Charity law within the UK varies among England and Wales, Scotland
            and Northern Ireland, but the fundamental principles are the same.
            Most organizations.
          </p>
        </div>
        <div>
          <div className="size-24 bg-zinc-100  p-2 rounded-full">
            <Image src={icone3} alt="icone" />
          </div>{" "}
          <h2>Unite The Society</h2>
          <p>
            Charity law within the UK varies among England and Wales, Scotland
            and Northern Ireland, but the fundamental principles are the same.
            Most organizations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Charity;
