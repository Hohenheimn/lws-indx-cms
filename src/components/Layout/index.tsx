"use client";

import React, { useState } from "react";
import Image from "next/image";

import Link from "next/link";

import { FiMenu } from "react-icons/fi";

import { twMerge } from "tailwind-merge";

import PopupMenuThemed from "../PopupMenuThemed";
import SideMenuLink from "./SideMenuLink";
import { SideMenuUrlsType, sideMenuUrls } from "./sideMenuUrls";

type PropsType = {
  children: React.ReactNode;
};

const Layout = ({ children }: PropsType) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="flex relative">
      <aside
        className={twMerge(
          ` fixed lg:sticky top-0 -left-full lg:left-0 flex flex-col justify-between gap-5 duration-300 ease-in w-full lg:w-[20rem] lg:ml-0 h-screen bg-white px-5 py-10`,
          `${openSidebar && "left-0"}`
        )}
      >
        <aside
          onClick={() => setOpenSidebar(!openSidebar)}
          className={`${
            openSidebar ? " right-[10px]" : "left-full"
          } absolute top-[10px] ml-[10px] z-10 w-10 rounded-md shadow-lg aspect-square cursor-pointer hover:bg-primary-600 bg-primary-500 text-white flex lg:hidden justify-center items-center`}
        >
          <FiMenu className=" text-2xl" />
        </aside>

        <figure className=" w-full flex justify-center">
          <Image
            src={"/assets/images/logo.png"}
            width={200}
            height={200}
            priority
            alt="logo"
          />
        </figure>
        <ul className=" flex-1 overflow-auto">
          {sideMenuUrls.map((item: SideMenuUrlsType, indx) => (
            <SideMenuLink LinkDetail={item} key={indx} />
          ))}
        </ul>

        <div className=" text-lg lg:text-xl duration-150 px-5 mb-2 rounded-md text-black w-full flex justify-start">
          <PopupMenuThemed
            menu={[
              {
                label: "Sign out",
                onClick: () => {},
              },
            ]}
            label={"Jomari Tiu"}
            image="/assets/images/sample.png"
          />
        </div>
      </aside>
      <main className="flex-1 bg-default-page text-black pt-16 p-5 md:py-10 md:p-10 min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default Layout;
