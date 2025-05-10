"use client";
import React, { DragEvent } from "react";

import Image from "next/image";
import { useState } from "react";
import { Data, dorpbox } from "@/app/data/Data";
import bgimag from "../../../public/image/bg/box_16.png";
const Drop = () => {
  const [src, setSrc] = useState('');
  const [show, setShow] = useState(false);
  const [text, setText] = useState(false);

  const dragStart = (ev: React.DragEvent<HTMLDivElement>) => {
  
    const  parent = ev.currentTarget;
    const imgElement = parent.querySelector(".imagdrag") as HTMLImageElement;
    if (imgElement) {
      setSrc(imgElement.src);
    }
    setShow(true);
    setText(true);
  };
  const draggableover = (ev:React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
    const parent = ev.currentTarget;
    const imgElement = parent.querySelector(".imagdrag");
    if (imgElement) {
      parent.removeChild(imgElement);
    }
    const img = document.createElement("img");
    img.src = src;
    img.className = "imagdrag w-full h-full";
    parent.appendChild(img);
    // parent = ev.target.parentElement;
  };
  const dragover = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }
  const dragEnd = (ev:  React.DragEvent<HTMLDivElement>) => {
    const parent = ev.currentTarget;
    const imgElement = parent.querySelector(".imagdrag");
    if (imgElement) {
      parent.removeChild(imgElement);
    }
    setShow(false);
  };
  const dragEndDrop = () => {
    setShow(false);
  };




  // const touchStart=(ev)=>{

  // setSrc(ev.target.src)

 
  // }
  // const touchMove=(ev)=>{
  //   console.log('move');
  //   const parent = ev.currentTarget;

  //   const img = document.createElement("img");
  //   img.src = src;
  //   img.className = "imagdrag size-20";
  //   parent.appendChild(img);

  // }
  // const touchEnd=()=>{
  //   console.log('end');
  // }
  return (
    <section className="container relative my-10 md:my-20 ">
      <div
        className={` md:w-[60%] w-[100%] relative  mx-auto 
         ${show ? "*:border-1" : null}  *:border-white gap-0.5 `}
        id="draog"
      >
        <Image alt="bg" src={bgimag} />
        <div
          className={`md:p-4 p-2 top-0 *:basis-[12%] *:rounded-[4px]  absolute right-0 flex flex-wrap w-full h-full z-10 
         ${show ? "*:border-2" : null}  *:border-white `}
        >
          {!text && (
            <div className="w-full top-0 left-0 absolute h-full flex items-center justify-center bg-zinc-600/60 ">
              <h1 className="md:text-4xl text-xl text-zinc-500 font-MorabbaBold z-30">
                Please draw an exciting chocolate
              </h1>
            </div>
          ) ||dorpbox.map((item) => (
            <div
              key={item.id}
              onDragStart={(ev) => dragStart(ev)}
              onDragOver={(e) => dragover(e)}
              draggable
              onDragEnd={(e) => dragEnd(e)}
              className="cursor-grab dropbox"
              onDrop={(event) => draggableover(event)}
            ></div>
          ))} 
          
        </div>
      </div>

      <div
        className="flex justify-center  flex-wrap gap-0.5 my-20  w-full md:*:size-20 
       "
      >
        {Data.map((item) => (
          <div
          // onTouchStart={(e)=>touchStart(e)}
          // onTouchMove={(e)=>touchMove(e)}
          // onTouchEnd={(e)=>touchEnd(e)}
            key={item.id}
            draggable
            onDragStart={(ev) => dragStart(ev)}
            onDragEnd={dragEndDrop}
            className="cursor-grab  sjkldfjasdflasd"
          >
            <Image
              src={item.img}
              alt="product"
              className="size-full imagdrag"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Drop;
