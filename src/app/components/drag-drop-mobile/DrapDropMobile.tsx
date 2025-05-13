"use client";
import React from "react";

import useDrapDrop from "@/app/hooks/useDragDrop";
import ImageGridDropper from "../drag-drop-desk/ImageGridDropper";

const DragDropModile = () => {
  const useDragdrop = useDrapDrop();
 
  return (
    <>
      <section
        className={`  min-h-[90vh] fixed   bg-white rounded-t-[15px] overflow-auto   -shadow-xl/20 border-t transition-all shadow-red-600   z-[60] 
           
             ${useDragdrop.isOpen === true ? "visible" : "invisible"}
           `}
      >
        <div>
          <ImageGridDropper />
        </div>
        <div className="flex justify-center items-center   *:rounded-[4px] text-xl font-MorabbaBold">
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
