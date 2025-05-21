import Link from 'next/link';
import React from 'react';
import CountUp from "react-countup";  
import { ImCoinEuro } from "react-icons/im";

const CoinCharity = () => {
    return (
      <div id="header-basket" className="relative text-3xl">
        <Link
          href={"/charity"}
          className="flex  gap-x-2 md:gap-x-3 mr-5 text-yellow-400 border-1 border-y-amber-400 bg-amber-100/40 rounded-[4px] p-2 px-4 items-center justify-center"
        >
          <ImCoinEuro className='size-6 md:size-10' />
          <span className="text-[18px] md:text-[20px]">
            {" "}
            <CountUp end={2564600} />
          </span>
        </Link>
      </div>
    );
}

export default CoinCharity;
