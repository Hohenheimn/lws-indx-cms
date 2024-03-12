import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  tabMenu: string[];
  active: string;
  setActive: Function;
};

const Tab = ({ tabMenu, setActive, active }: Props) => {
  return (
    <ul className="bg-white rounded-lg shadow-md flex overflow-hidden min-w-56">
      {tabMenu.map((item, indx) => (
        <li
          onClick={() => setActive(item)}
          key={indx}
          className={twMerge(
            ` w-2/4 py-3 cursor-pointer ease-in-out hover:bg-primary-50 duration-150 flex justify-center items-center`,
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
