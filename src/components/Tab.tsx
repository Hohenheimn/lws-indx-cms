import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  tabMenu: string[];
  active: string;
  setActive: Function;
};

const Tab = ({ tabMenu, setActive, active }: Props) => {
  return (
    <ul className="bg-white rounded-lg shadow-md flex overflow-hidden">
      {tabMenu.map((item, indx) => (
        <li
          onClick={() => setActive(item)}
          key={indx}
          className={twMerge(
            ` w-28 py-3 cursor-pointer ease-in-out hover:bg-primary-50 duration-150 flex justify-center items-center`,
            `${item === active && "bg-primary-500 text-white"}`
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Tab;
