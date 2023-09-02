"use client"

import Image from "next/image";
import React, {useState} from "react";
import { menu } from "@/data";
import Link from "next/link";
import { FiAlignJustify, FiArrowLeft } from "react-icons/fi";

const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="flex flex-col items-center gap-8 min-h-screen w-[4rem] lg:w-[10rem]  border-r-tertiary border-r-2 p-4">
        <button className="w-full flex lg:hidden justify-center items-center text-[30px] text-quaternary " onClick={() => setIsOpen(!isOpen)} >
          {isOpen ? <FiArrowLeft /> : <FiAlignJustify/>}
        </button>
        {/* this is the logo section */}
        <div className="hidden lg:flex justify-center align-middle gap-2">
          <Image src="/logo.png" width={30} height={20} alt="logo" />
          <h1 className="text-xl text-quaternary font-extrabold">WISE</h1>
        </div>
        {/* this is the user section */}

        <div className="flex flex-col justify-center items-center gap-2 mt-4 ">
          <Image
            className=""
            src="/user.png"
            width={60}
            height={60}
            alt="user"
          />
          <h1 className=" hidden lg:inline  text-lg text-quaternary font-extrabold ">
            John Doe
          </h1>
          {/* edit button */}
          <button className="hidden lg:inline border-[1px] text-quaternary w-full text-sm rounded-full">
            Edit
          </button>
        </div>

        {/* this is the menu section */}
        <div className="flex flex-col gap-4  mt-10 m-auto ">
          {menu.map((item, index) => (
            <div
              key={index}
              className="flex  justify-start items-center gap-4 cursor-pointer"
            >
              {item.icon && (
                <div className="menu-icon text-quaternary text-[20px]">
                  {React.createElement(item.icon)}
                </div>
              )}
              <h1 className=" hidden lg:inline text-lg text-quaternary font-light ">
                {item.title}
              </h1>
            </div>
          ))}
        </div>

        {/* this is the footer section */}
        <div>
          <h1 className=" hidden lg:inline text-sm text-quaternary font-light ">
            Made By -{" "}
            <Link
              href="https://akshit-resume.vercel.app/"
              target="_blank"
              className="text-secondary"
            >
              Akshit Gupta
            </Link>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
