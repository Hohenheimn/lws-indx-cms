"use client";
import React from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

type Props = {
  links: {
    title: string;
    url: string;
  }[];
};

const BreadCrumbs = ({ links }: Props) => {
  return (
    <ul className=" flex gap-5 items-center text-[.8rem] lg:text-base">
      {links.map((item, indx) => (
        <li key={indx} className=" flex gap-5 items-center text-[.9rem]">
          <Link
            href={item.url}
            className={`${
              links.length === indx + 1 &&
              " text-blue font-semibold pointer-events-none"
            }`}
          >
            {item.title}
          </Link>
          {links.length > indx + 1 && <IoIosArrowForward />}
        </li>
      ))}
    </ul>
  );
};

export default BreadCrumbs;
