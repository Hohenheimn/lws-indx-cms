"use client";

import React from "react";
import Image from "next/image";

import { IoIosArrowDown } from "react-icons/io";

import PopupMenu from "./PopupMenu";

type Props = {
  menu: {
    onClick?: () => void;
    label: string;
  }[];
  label: string;
  image?: string;
};

const PopupMenuThemed = ({ menu, label, image }: Props) => {
  return (
    <PopupMenu
      buttonClassname=" w-full"
      buttonName={
        <div className=" flex items-center justify-between gap-2 ">
          <div className=" flex items-center gap-2 text-base">
            {image && (
              <aside className=" relative overflow-hidden w-14 aspect-square rounded-full text-base">
                <Image
                  src={image}
                  alt={"profile"}
                  fill
                  className=" object-cover"
                />
              </aside>
            )}
            {label}
          </div>
          <IoIosArrowDown className="  text-gray-400 " />
        </div>
      }
      menuContainerClassname=" rounded-md overflow-hidden shadow-lg min-w-[15rem]"
      menuContent={
        <ul className=" w-full bg-white text-black text-base">
          {menu.map((item, indx) => (
            <li
              key={indx}
              onClick={item.onClick}
              className=" cursor-pointer hover:bg-primary-500 hover:text-white duration-100 px-3 py-2"
            >
              {item.label}
            </li>
          ))}
        </ul>
      }
    />
  );
};

export default PopupMenuThemed;
