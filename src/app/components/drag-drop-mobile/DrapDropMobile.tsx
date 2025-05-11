"use client";
import React, { useEffect, useState, DragEvent } from "react";
import interact from "interactjs";
import Image from "next/image";
import { Data, dorpbox } from "@/app/data/Data";
import bgimag from "../../../../public/image/bg/box_16.png";
import { MdDelete } from "react-icons/md";
import useDrapDrop from "@/app/hooks/useDragDrop";

const DragDropModile = () => {
  const [textMobile, setTextMobile] = useState(false);
  const useDragdrop = useDrapDrop();
  // useEffect(() => {
  //   console.log('fasdf')
  //   function dragMoveListener(event: DragEvent<HTMLButtonElement>) {
  //     let target = event.target,
  //       // keep the dragged position in the data-x/data-y attributes
  //       x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx,
  //       y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  //     // translate the element
  //     target.style.webkitTransform = target.style.transform =
  //       "translate(" + x + "px, " + y + "px)";

  //     // update the posiion attributes
  //     target.setAttribute("data-x", x);
  //     target.setAttribute("data-y", y);
  //   }
  //   interact(".dropzoneMobile").dropzone({
  //     // only accept elements matching this CSS selector
  //     accept: "#yes-drop",
  //     // Require a 75% element overlap for a drop to be possible
  //     overlap: 0.5,

  //     // listen for drop related events:

  //     ondropactivate: function (event) {
  //       // add active dropzone feedback

  //       event.target.classList.add("drop-active");
  //     },
  //     ondragenter: function (event) {
  //       let dropzoneElement = event.target;
  //       let draggableElement = event.relatedTarget;

  //       // feedback the possibility of a drop
  //       dropzoneElement.classList.add("drop-target");
  //       draggableElement.classList.add("can-drop");
  //     },
  //     ondragleave: function (event) {
  //       // remove the drop feedback style
  //       event.target.classList.remove("drop-target");

  //       // event.relatedTarget.textContent = "Dragged out";
  //     },
  //     ondrop: function (event) {
  //       const parent = event.relatedTarget;
  //       const target = event.currentTarget;

  //       const element = target.querySelector("#yes-drop");
  //       const img = parent.querySelector("img");

  //       if (element) {
  //         target.removeChild(element);
  //       }
  //       if (img) {
  //         const div = document.createElement("div");
  //         div.id = "yes-drop";
  //         div.className = "size-full drag-drop2 ";
  //         div.innerHTML = `
  //          <img
  //            src=${img.src}
  //            alt="product"
  //            className="size-full  imagdrag"
  //          />`;
  //         target.appendChild(div);
  //       }
  //     },
  //     ondropdeactivate: function (event) {
  //       // remove active dropzone feedback
  //       event.target.classList.remove("drop-active");
  //       event.target.classList.remove("drop-target");
  //     },
  //   });

  //   interact(".drag-drop").draggable({
  //     inertia: true,
  //     autoScroll: true,
  //     // dragMoveListener from the dragging demo above
  //     listeners: {
  //       move: dragMoveListener,
  //       start(event) {
  //         setTextMobile(true);
  //         event.target.classList.add("drop-start");
  //       },
  //       end(event) {
  //         const parentNode = event.target.parentNode;
  //         const target = event.target;
  //         target.removeAttribute("data-x");
  //         target.removeAttribute("data-y");
  //         target.style = "";

  //         parentNode.appendChild(target);

  //         event.target.classList.remove("drop-start");
  //       },
  //     },
  //   });

  //   interact(".drag-drop2").draggable({
  //     inertia: true,
  //     autoScroll: false,
  //     // dragMoveListener from the dragging demo above
  //     listeners: {
  //       move: dragMoveListener,

  //       start(event) {
  //         const deleteDrog = document.querySelector("#delete-drag-mobile");
  //         deleteDrog?.classList.add("drag-deleted");
  //         setTextMobile(true);
  //         event.target.classList.add("drop-start");
  //       },
  //       end(event) {
  //         const deleteDrog = document.querySelector("#delete-drag-mobile");

  //         const parentNode = event.target.parentNode;
  //         const target = event.target;
  //         setTimeout(() => {
  //           deleteDrog?.classList.remove("drag-deleted");
  //         }, 0);

  //         event.target.classList.add("drag-delete");
  //         setTimeout(() => {
  //           parentNode.removeChild(target);
  //         }, 1000);
  //       },
  //     },
  //   });
  // }, [useDragdrop.isOpen]);

  return (
    <>
      <div
        className={`w-full h-[100%] draging absolute top-0 right-0 bg-black/80 z-[50]     transition-all     ${
          useDragdrop.isOpen === true ? "visible" : "invisible"
        }`}
      ></div>
      <section
        className={`container draging fixed  pb-6 left-0 bottom-0 bg-white rounded-t-[15px] -shadow-xl/20 border-t transition-all shadow-red-600   z-[60] 
           ${
             useDragdrop.isOpen === true
               ? " translate-y-0"
               : "translate-y-[100%]"
           }
           ${useDragdrop.isOpen === true ? "visible" : "invisible"}
           `}
      >
        <div className="py-6 flex   justify-between items-center text-xl text-zinc-600 font-Dana">
          <div className="text-left " onClick={() => useDragdrop.onClose()}>
            cancel
          </div>
          <div className="font-bold">created box</div>
        </div>
        <div>
          <div
            className={` md:w-[68%] w-[100%] relative  mx-auto parent z-50
               `}
            id="draog"
          >
            <Image alt="bg" src={bgimag} />
            <div
              className={`md:p-2.5 p-1.5 top-0  *:rounded-[4px]  absolute right-0 flex flex-wrap md:gap-0.5 w-full h-full 
             *:border-white `}
            >
              {!textMobile && (
                <div className="w-full  top-0 left-0 absolute h-full flex items-center justify-center bg-zinc-600/60 ">
                  <h1 className="md:text-4xl text-xl text-zinc-500 font-MorabbaBold ">
                    Please draw an exciting chocolate
                  </h1>
                </div>
              )}
              {dorpbox.map((item) => (
                <div
                  key={item.id}
                  className="dropbox  cursor-grab dropzone               max-w-26 max-h-26 "
                  id="outer-dropzone"
                ></div>
              ))}
            </div>
          </div>{" "}
          <div className="my-6">
            <h1>Drag & drop the box </h1>
          </div>
          <div
            className="flex   gap-1 relative flex-wrap justify-center  [&_.imagdrag]:absolute   *:size-10 md:*:size-24
           "
          >
            <div
              id="delete-drag-mobile"
              className="w-full  absolute  h-full right-0 top-0   justify-center items-start md:pt-80 pt-40 mt-80 "
            >
              <MdDelete size={100} className="text-red-600" />
            </div>
            {Data.map((item) => (
              <div
                key={item.id}
                className="cursor-grab  relative [&_.imgfix]:absolute [&_.imgfix]:top-0 [&_.imgfix]:right-0"
              >
                <div
                  id="yes-drop"
                  className="size-full drag-drop absolute z-20"
                >
                  <Image
                    src={item.img}
                    alt="product"
                    className="size-full imagdrag "
                  />
                </div>
                <Image
                  src={item.img}
                  alt="product"
                  className="size-full   z-10 imgfix"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-3 my-6 *:rounded-[4px] text-xl font-MorabbaBold">
          <button
            onClick={() => useDragdrop.onClose()}
            className="border border-zinc-700 py-2 px-4"
          >
            cancel
          </button>
          <button
            onClick={() => useDragdrop.onClose()}
            className="border border-blue-700 bg-blue-700 text-white py-2 px-4"
          >
            created
          </button>
        </div>
      </section>
    </>
  );
};

export default DragDropModile;
