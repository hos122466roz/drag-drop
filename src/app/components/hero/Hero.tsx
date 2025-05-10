import React from 'react';
import Img from '../../../../public/image/hero/personalization-boox-banner-en.jpg'
import Image from 'next/image';
const Hero = () => {
    return (
      <section className=" hero flex md:justify-end  justify-center items-center w-full md:h-[40vh] h-[20vh]  mt-24 relative">
        <div className=" hidden md:block absolute w-full  h-full top-0  left-0 right-0">
          <Image alt="hero " className="size-full object-cover" src={Img} />
        </div>
        <div className="z-20 mt-10  container text-center md:text-left">
          <div className='md:w-1/3 '>
            <h1 className="md:text-5xl text-3xl font-MorabbaBold ">
              {" "}
              Customize your chocolate box
            </h1>

            <p className="mt-5">
              Birthday, wedding , break up, resignation, naughty desire ... Say
              it with a box of chocolates !
            </p>
          </div>
        </div>
      </section>
    );
}

export default Hero;
