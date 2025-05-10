"use client";
import React, { useEffect, useState } from "react";
import interact from "interactjs";
import Image from "next/image";
import { Data, dorpbox } from "@/app/data/Data";
import bgimag from "../../../../public/image/bg/box_16.png";
import { MdDelete } from "react-icons/md";

const DragDropModile = () => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState(false);
  useEffect(() => {
    function dragMoveListener(event: any) {
      var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx,
        y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

      // translate the element
      target.style.webkitTransform = target.style.transform =
        "translate(" + x + "px, " + y + "px)";

      // update the posiion attributes
      target.setAttribute("data-x", x);
      target.setAttribute("data-y", y);
    }
    interact(".dropzone").dropzone({
      // only accept elements matching this CSS selector
      accept: "#yes-drop",
      // Require a 75% element overlap for a drop to be possible
      overlap: 0.5,

      // listen for drop related events:

      ondropactivate: function (event) {
        // add active dropzone feedback

        event.target.classList.add("drop-active");
      },
      ondragenter: function (event) {
        var dropzoneElement = event.target;
        var draggableElement = event.relatedTarget;

        // feedback the possibility of a drop
        dropzoneElement.classList.add("drop-target");
        draggableElement.classList.add("can-drop");
      },
      ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove("drop-target");

        // event.relatedTarget.textContent = "Dragged out";
      },
      ondrop: function (event) {
        const parent = event.relatedTarget;
        const target = event.currentTarget;

        const element = target.querySelector("#yes-drop");
        const img = parent.querySelector("img");

        if (element) {
          target.removeChild(element);
        }
        if (img) {
          const div = document.createElement("div");
          div.id = "yes-drop";
          div.className = "size-full drag-drop2 ";
          div.innerHTML = `
           <img
             src=${img.src}
             alt="product"
             className="size-full  imagdrag"
           />`;
          target.appendChild(div);
        }
      },
      ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove("drop-active");
        event.target.classList.remove("drop-target");
      },
    });

    interact(".drag-drop").draggable({
      inertia: true,
      autoScroll: true,
      // dragMoveListener from the dragging demo above
      listeners: {
        move: dragMoveListener,
        start(event) {
          setText(true);
          setShow(true);
          event.target.classList.add("drop-start");
        },
        end(event) {
          const parentNode = event.target.parentNode;
          const target = event.target;
          target.removeAttribute("data-x");
          target.removeAttribute("data-y");
          target.style = "";

          parentNode.appendChild(target);

          event.target.classList.remove("drop-start");

        },
      },
    });

    interact(".drag-drop2").draggable({
      inertia: true,
      autoScroll: false,
      // dragMoveListener from the dragging demo above
      listeners: {
        move: dragMoveListener,

        start(event) {
          const deleteDrog = document.querySelector("#delete-drag");
          deleteDrog?.classList.add("drag-deleted");
          setText(true);
          setShow(true);
          event.target.classList.add("drop-start");
        },
        end(event) {
          const deleteDrog = document.querySelector("#delete-drag");

          const parentNode = event.target.parentNode;
          const target = event.target;
          setTimeout(()=>{

            deleteDrog?.classList.remove("drag-deleted");
          },0)

          event.target.classList.add("drag-delete");
          setTimeout(() => {
            parentNode.removeChild(target);
          }, 1000);
        },
      },
    });
  }, []);

  return (
    <>
      <section className="container relative overflow-hidden  ">
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
            {!text && (
              <div className="w-full  top-0 left-0 absolute h-full flex items-center justify-center bg-zinc-600/60 ">
                <h1 className="md:text-4xl text-xl text-zinc-500 font-MorabbaBold ">
                  Please draw an exciting chocolate
                </h1>
              </div>
            )}
            {dorpbox.map((item) => (
              <div
                key={item.id}
                className="dropbox  cursor-grab dropzone max-w-26 max-h-26 "
                id="outer-dropzone"
              ></div>
            ))}
          </div>
        </div>{" "}
        <div
          id="delete-drag"
          className="w-full absolute  h-full right-0 top-0 hidden  justify-center items-start md:pt-80 pt-30 "
        >
          <MdDelete size={100} className="text-red-600"/>
        </div>
        <div
          className="flex   gap-1 relative flex-wrap justify-center my-20 [&_.imagdrag]:absolute   *:size-10 md:*:size-24
           "
        >
          {Data.map((item) => (
            <div
              key={item.id}
              className="cursor-grab  relative [&_.imgfix]:absolute [&_.imgfix]:top-0 [&_.imgfix]:right-0"
            >
              <div id="yes-drop" className="size-full drag-drop absolute z-20">
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
      </section>
    </>
  );
};

export default DragDropModile;
