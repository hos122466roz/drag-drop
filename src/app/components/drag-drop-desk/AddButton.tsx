'use Client'
import useDrapDrop from "@/app/hooks/useDragDrop";
import React from 'react';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
interface AddButtonProps {
  clicked?: () => void;
  shut?: () => void;
}
const AddButton:React.FC<AddButtonProps> = ({clicked,shut}) => {
  const useDraprop = useDrapDrop();
  
    return (
      <>
      <div className="flex  items-start justify-start flex-col md:flex-row my-8">
        <div className="md:w-1/2   ">
          <div
            className="flex gap-y-3   grid-cols-2 w-full flex-wrap  md:justify-start *:border-1  *:px-8
           *:py-2   gap-x-3 *:rounded-[6px]"
          >
            <button className="grow md:grow-0">Keyboarding</button>
            <button className="grow md:grow-0">Keyboarding</button>
            <button
              className="block md:hidden bg-blue-800 text-white  md:grow-0 grow"
              onClick={() => useDraprop.onOpen()}
            >
              Create box
            </button>
            <button>Keyboarding</button>
            <button onClick={clicked}>Clear all</button>
            <button onClick={shut}>  ScreenShout </button>
          </div>
          <div className="md:block hidden mt-8 text-[14px]">
            Are you a business with a specific request for your custom boxes ?
            <a
              className="ml-3"
              href="
              #
            "
            >
              Contact us
            </a>
          </div>
        </div>
        <div className="md:w-1/2 w-full  md:pl-8 mt-8 md:mt-0 ">
          <div className="flex items-start justify-start">
            <input type="checkbox" className="size-6 mr-3 inline-block" />
            <p className="inline-block">
              By checking this box, you confirm that the written message is
              correct. Once the order has been placed, you will no longer be
              able to modify it.
            </p>
          </div>
          <div className="mt-8 flex items-start text-[16px] md:text-xl gap-x-5 *:rounded-[4px] ">
            <div className="flex w-1/6 min-w-[100px] border items-center   justify-between">
              <div className=" text-2xl cursor-pointer  flex justify-ennd items-center align-middle">
                <CiCircleMinus />
              </div>
              <div className="p-2 ">1</div>
              <div className=" text-2xl cursor-pointer flex justify-end items-center align-middle">
                <CiCirclePlus />
              </div>
            </div>
            <div className="bg-blue-800 text-white  h-auto">
              <button
                className="py-2 px-3 md:px-6 
               "
              >
                <span>19.3$ - </span>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      </>
    );
}

export default AddButton;
