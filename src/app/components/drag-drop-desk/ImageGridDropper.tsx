"use client"
import React, { useState, useRef, useEffect } from "react";
import {
  DndContext,
  useDraggable,
  useDroppable,
  DragOverlay,
  DragEndEvent
  
} from "@dnd-kit/core";
import { IoTrashOutline } from "react-icons/io5";

import html2canvas from "html2canvas";
import { Data } from "@/app/data/Data";
import bgimag from "../../../../public/image/bg/box_16.png";
import Image from "next/image";
import AddButton from "./AddButton";

interface ImageItem {
  id: number;
  src: string;
}

const images: ImageItem[] = [
 
  
 ...Data
];

interface DraggableImageProps {
  id: number|string;
  src: string;
  fromBoxIndex?: number | null;
}

const DraggableImage: React.FC<DraggableImageProps> = ({
  id,
  src,
  fromBoxIndex = null,
}) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: `${id}-${fromBoxIndex ?? "source"}`, // unique id
    data: { src, fromBoxIndex },
  });

  return (
    <img
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      src={src}
      alt=""
      style={{
        cursor: "grab",
        width: "100%",
        height: "100%",
      }}
    />
  );
};

interface DropBoxProps {
  id: string;
  imageSrc: string | null;
  imageId: string | null;
  isDragging: boolean;
}

const DropBox: React.FC<DropBoxProps> = ({
  id,
  imageSrc,
  imageId,
  isDragging

}) => {
  const { isOver, setNodeRef } = useDroppable({ id });
  const style: React.CSSProperties = {
    background: isOver ? "#eee" : "",
  };

  return (
    <div
    
      ref={setNodeRef}
      style={style}
      className={`drag w-full  h-full  relative aspect-square overflow-auto rounded-[2px] ${
        isDragging ? "border-1 border-white" : ""
      }  ${isDragging && !isOver ? "*:opacity-[0.6] " : "*:opacity-100 "}`}
    >
      {imageSrc && (
        <DraggableImage
          id={imageId ?? "box-img"}
          src={imageSrc}
          fromBoxIndex={parseInt(id)}
        />
      )}
    </div>
  );
};

const ImageGridDropper: React.FC = () => {      
  const initialBoxes = Array(16).fill(null);
  const [show ,setShow]=useState<boolean>(true)
  const [isDragging, setIsDragging] = useState(false);
  const [showTrash, setShowTrash] = useState(false);

  const [boxes, setBoxes] = useState<(string | null)[]>(initialBoxes);
  const [draggedImage, setDraggedImage] = useState<string | null>(null);

  const gridRef = useRef<HTMLDivElement>(null); // رفرنس برای باکس‌ها
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

   const handleDragEnd = (event: DragEndEvent) => {
    setIsDragging(false);
    setShowTrash(false);

     const { over, active } = event;
     const activeSrc: string | undefined = active?.data?.current?.src;
     const fromBoxIndex: number | null | undefined =
       active?.data?.current?.fromBoxIndex;
     const updatedBoxes = [...boxes];
     if(over){
      setShow(false);

     }
     if (over?.id === "source-images") {
       // اگر از یک باکس اومده، حذفش کن
       if (fromBoxIndex !== null && fromBoxIndex !== undefined) {
         const updatedBoxes = [...boxes];
         updatedBoxes[fromBoxIndex] = null;
         setBoxes(updatedBoxes);
       }

       setDraggedImage(null);
       return;
     }
     if (!over) {
      
       setDraggedImage(null);
       return;
     }

     const overIndex = parseInt(String(over.id));
     if (!activeSrc || isNaN(overIndex)) return;

     // اگر عکس از یک باکس اومده بود، اون باکس رو خالی کن
     if (fromBoxIndex !== null && fromBoxIndex !== undefined) {
       updatedBoxes[fromBoxIndex] = null;
     }

     // قرار دادن در باکس مقصد
     updatedBoxes[overIndex] = activeSrc;

     setBoxes(updatedBoxes);
     setDraggedImage(null);
   };

  const handleScreenshot = async () => {
    if (gridRef.current) {
      // صبر کوتاه برای رندر شدن DOM (عکس‌ها)
      await new Promise((resolve) => setTimeout(resolve, 100));

      html2canvas(gridRef.current).then((canvas) => {
        const dataURL = canvas.toDataURL("image/jpeg");
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = "boxes-screenshot.jpg";
        link.click();
      });
    }
  };
  return (
    <section className="container relative my-20 md:my-30  ">
      <DndContext
        autoScroll={false}
        onDragStart={(event) => {
          const src = event.active?.data?.current?.src;
          const fromBoxIndex = event.active?.data?.current?.fromBoxIndex;

          if (src) setDraggedImage(src);
          if (fromBoxIndex !== null && fromBoxIndex !== undefined) {
            setShowTrash(true);
          }
          setIsDragging(true);
        }}
        onDragEnd={handleDragEnd}
      >
        <div className="  bg-white  top-24  w-full h-full sticky z-20">
          <div className="md:w-[68%]   w-[100%]   relative   mx-auto">
            {show ? (
              <div className="w-full  top-0 left-0 absolute h-full flex items-center justify-center bg-zinc-600/60 ">
                <h1 className="md:text-4xl text-xl text-zinc-500 font-MorabbaBold ">
                  Please draw an exciting chocolate
                </h1>
              </div>
            ) : null}
            <Image className=" w-full  h-full" src={bgimag} alt="bg" />

            <div
              className="max-h-full grid gap-0.5  grid-cols-8 p-2 md:p-3  w-full max-w-full absolute top-0 right-0  "
              style={{}}
            >
              {boxes.map((imgSrc, i) => (
                <DropBox
                  key={i}
                  id={String(i)}
                  imageSrc={imgSrc}
                  imageId={imgSrc ? `img-${i}` : null}
                  isDragging={isDragging} // ✅ اضافه کردن prop
                />
              ))}
            </div>
          </div>
        </div>

        <DragOverlay
          dropAnimation={{
            duration: 0,
            easing: "cubic-bezier(0, 0, 0,0)",
          }}
        >
          {draggedImage ? (
            <img
              src={draggedImage}
              alt="drag-preview"
              style={{
                pointerEvents: "none",
              }}
            />
          ) : null}
        </DragOverlay>

        <div style={{ marginBottom: 20 }}>
          <AddButton
            shut={handleScreenshot}
            clicked={() => setBoxes(Array(16).fill(null))}
          />
          <div className="relative ">
            <div className=" relative w-full grid grid-cols-8 md:grid-cols-10 gap-0.5 md:gap-1  ">
              {images.map((img) => (
                <div key={img.id} className="drag dropbox">
                  <DraggableImage id={img.id} src={img.src} />
                </div>
              ))}
            </div>
            <TrashBox showTrash={showTrash} />
          </div>
        </div>
      </DndContext>
    </section>
  );
};

export default ImageGridDropper;
interface TrashBoxProps {
  showTrash:boolean
}
const TrashBox: React.FC<TrashBoxProps> = ({showTrash}) => {
  const {
    setNodeRef: setSourceRef,

  } = useDroppable({
    id: "source-images",
  });

  return (
    <div
      ref={setSourceRef}
      className={`w-full h-full absolute  transition-all  top-0 left-0  p-8  z-20 ${
        showTrash ? "bg-white/80  " : ""
      }`}
      style={{
        display: showTrash ? "flex" : "none",
        alignItems: "start ",
        justifyContent: "center",
        fontSize: 16,
        fontWeight: "bold",
        color: "red",
      }}
    >
      <div className="flex text-md text-zinc-700  flex-col items-center justify-center">
        <IoTrashOutline className="size-20 mb-4" />
        <span>Drag & drop here to </span>
        <span>remove </span>
      </div>
    </div>
  );
};
