import { dorpbox } from '@/app/data/Data';
import React from 'react';

const Drop = () => {
    return (
             <div
                    className={`md:p-2.5 p-1.5 top-0  *:rounded-[4px]  absolute right-0 flex flex-wrap md:gap-0.5 w-full h-full 
                     *:border-white `}
                  >
                    {/* {!text && (
                      <div className="w-full  top-0 left-0 absolute h-full flex items-center justify-center bg-zinc-600/60 ">
                        <h1 className="md:text-4xl text-xl text-zinc-500 font-MorabbaBold ">
                          Please draw an exciting chocolate
                        </h1>
                      </div>
                    )} */}
                    {dorpbox.map((item) => (
                      <div
                        key={item.id}
                        className="dropbox  cursor-grab dropzone max-w-26 max-h-26 "
                        id="outer-dropzone"
                      ></div>
                    ))}
                  </div>
    );
}

export default Drop;
