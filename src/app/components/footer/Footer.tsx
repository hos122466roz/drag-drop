import Logo from "../../../../public/image/logo/logo.png";
import { FaInstagram, FaWhatsapp, FaBusinessTime } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAttachEmail } from "react-icons/md";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-12 px-10  border-t-1 border-t-gray-600/50 bg-white backdrop-blur-[6px] ">
      <div
        className="font-Dana grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-12 [&_h2]:text-2xl [&_h2]:font-bold
     [&_h2]:mb-6"
      >
        <div>
          <Image src={Logo} alt="" className="" />
          <p className="mt-6 text-zinc-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            cumque fugit numquam eveniet voluptas, recusandae modi eos quod
            possimus voluptatibus nihil molestiae ea. Porro voluptatibus laborum
            iusto. Facere dicta reiciendis repudiandae eius incidunt magni vel!
            Aspernatur laudantium .
          </p>
          <div className="mt-6 flex justify-center gap-8 items-center text-zinc-700 *:hover:text-red-800 ">
            <a href="">
              <FaInstagram size={24} />
            </a>
            <a href="">
              <FaWhatsapp size={24} />
            </a>
            <a href="">
              <IoCallOutline size={24} />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-zinc-700"> Links</h2>
          <ul className="space-y-4 *:text-zinc-700 *:hover:text-black">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href=""> Charity</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-zinc-700">Contact Us </h2>
          <div className="space-y-4 *:flex *:items-center *:gap-5 *:text-zinc-700">
            <div>
              <span>
                <FaLocationDot />
              </span>
              <span>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque, unde saepe
              </span>
            </div>
            <div>
              <span>
                <IoCallOutline />
              </span>
              <a href="tel:03132620291" dir="ltr">
                03132620291
              </a>
            </div>
            <div>
              <span>
                <MdOutlineAttachEmail />
              </span>
              <span>example@gmail.com </span>
            </div>
            <div>
              <span>
                <FaBusinessTime />
              </span>
              <span>seven days a week 12:00 - 23:30</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
