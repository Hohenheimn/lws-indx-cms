import React, { useEffect, useRef } from "react";
import { format } from "date-fns";
import { BlockLike } from "typescript";

type Props = {
  onClose: () => void;
  onOpen: () => void;
  toggle: boolean;
  currentActive: string | number;
  selectedFunction: (value: any) => void;
  listItem: string[] | number[];
  displayCalendar: string;
};

const YearMonth = ({
  onOpen,
  onClose,
  toggle,
  currentActive,
  selectedFunction,
  listItem,
  displayCalendar,
}: Props) => {
  // Close Calendar By Clicking outside
  const container = useRef<any>();
  useEffect(() => {
    const clickOutSide = (e: any) => {
      if (!container?.current?.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", clickOutSide);
    return () => {
      document.removeEventListener("mousedown", clickOutSide);
    };
  });
  // End
  return (
    <>
      <span
        className=" py-1 px-2 inline-block text-[14px] text-primary-500"
        onClick={onOpen}
      >
        {displayCalendar}
      </span>
      {toggle && (
        <ul
          ref={container}
          className="absolute top-full left-0 bg-white shadow-md w-28 max-h-[200px] overflow-auto z-50"
        >
          {listItem.map((item, index) => (
            <li
              key={index}
              className={`py-1 px-2 text-[.9rem] cursor-pointer hover:bg-primary-200   ${
                currentActive === item
                  ? " bg-primary-500 text-white"
                  : "text-[#757575]"
              }`}
              onClick={() => selectedFunction(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default YearMonth;
