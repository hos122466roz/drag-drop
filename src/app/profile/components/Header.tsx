import React from 'react';
import { CiSearch, CiMenuBurger } from "react-icons/ci";
import avatar from '../../../../public/image/avatar/user-1.jpg'
import Image from 'next/image';
const Header = () => {
    return (
      <header className="py-4 px-8 h-20  flex justify-between items-center fixed top-0 left-[18%] w-[82%]  bg-white  ">
        <div className="flex  items-center gap-x-6 *:p-2.5  *:hover:bg-indigo-700/10 *:cursor-pointer *:hover:text-indigo-600 *:rounded-full *:transition-all ">
          <div>
            <CiMenuBurger />
          </div>
          <div>
            <CiSearch />
          </div>
        </div>
        <div className="size-10 cursor-pointer">
          <Image
            className="rounded-full w-full h-full object-cover"
            src={avatar}
            alt="avatar"
          />
        </div>
      </header>
    );
}

export default Header;
