"use client";
import React, { useEffect, useRef, useState } from "react";
import { format, startOfDay, add } from "date-fns";

import Calendar from "./Calendar";

type Props = {
  setToggle: Function;
  value: {
    from: string;
    to: string;
  };
  setValue: Function;
};

export default function CalendarFNS({ setToggle, setValue }: Props) {
  // Close Calendar By Clicking outside
  const CalendarContainer = useRef<any>();
  useEffect(() => {
    const clickOutSide = (e: any) => {
      if (!CalendarContainer.current.contains(e.target)) {
        setToggle(false);
      }
    };
    document.addEventListener("mousedown", clickOutSide);
    return () => {
      document.removeEventListener("mousedown", clickOutSide);
    };
  });
  // End

  const date = new Date();
  let today = startOfDay(date);
  // Start
  let nextMonth = add(today, {
    months: 1,
  });
  const [calendar, setCalendar] = useState({
    firstCalMonth: today,
    firstCalYear: today,
    secondCalMonth: nextMonth,
    secondCalYear: nextMonth,
  });
  const [isDateRange, setDateRange] = useState({
    from: {
      value: today,
      validate: false,
    },
    to: {
      value: today,
      validate: false,
    },
  });
  // End

  const setDatehandler = () => {
    setValue({
      from: format(isDateRange.from.value, "MMM dd yyyy"),
      to: format(isDateRange.to.value, "MMM dd yyyy"),
    });
    setToggle(false);
  };

  const ResetHandler = () => {
    setValue({
      from: "",
      to: "",
    });
  };

  return (
    <div ref={CalendarContainer}>
      <div className="shadow-lg" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="flex">
          <Calendar
            calendar={calendar}
            setCalendar={setCalendar}
            type="First"
            isDateRange={isDateRange}
            setDateRange={setDateRange}
          />
          <Calendar
            calendar={calendar}
            setCalendar={setCalendar}
            type="Second"
            isDateRange={isDateRange}
            setDateRange={setDateRange}
          />
        </div>
        <ul className="p-3 flex justify-between">
          <li className="flex items-center">
            <p className="text-[#757575] px-2 py-1 text-[14px] border border-primary-500 rounded-md">
              {isDateRange.from.validate
                ? format(isDateRange.from.value, "MMM dd yyyy")
                : "----"}
            </p>
            <div className="h-[2px] w-[7px] bg-ThemeRed mx-2"></div>
            <p className="text-[#757575] px-2 py-1 text-[14px] border border-primary-500 rounded-md">
              {isDateRange.to.validate
                ? format(isDateRange.to.value, "MMM dd yyyy")
                : "----"}
            </p>
          </li>
          <li className=" flex gap-5">
            <button className=" font-bold" onClick={ResetHandler}>
              Reset
            </button>
            <button className=" font-bold" onClick={() => setToggle(false)}>
              Cancel
            </button>
            <button
              className=" font-bold bg-primary-500 text-white px-3 hover:bg-primary-600 duration-150 py-1 rounded-lg "
              onClick={setDatehandler}
            >
              Apply
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
