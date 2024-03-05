import { useState } from "react";
import {
  startOfDay,
  format,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  endOfMonth,
  eachYearOfInterval,
  add,
  isSameMonth,
  compareDesc,
  isToday,
  isEqual,
  parse,
} from "date-fns";

import YearMonth from "./YearMonth";

type CalendarPeriod = {
  calendar: {
    firstCalMonth: Date;
    firstCalYear: Date;
    secondCalMonth: Date;
    secondCalYear: Date;
  };
  setCalendar: Function;
  type: "First" | "Second";
  isDateRange: {
    from: {
      value: Date;
      validate: boolean;
    };
    to: {
      value: Date;
      validate: boolean;
    };
  };
  setDateRange: Function;
};
const Calendar = ({
  calendar,
  setCalendar,
  type,
  isDateRange,
  setDateRange,
}: CalendarPeriod) => {
  const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [toggleMonth, setToggleMonth] = useState(false);
  const [toggleYear, setToggleYear] = useState(false);

  const date = new Date();
  // get date today
  let today = startOfDay(date);

  const currentYear =
    type === "First"
      ? format(calendar.firstCalYear, "yyyy")
      : format(calendar.secondCalYear, "yyyy");

  const currentMonth =
    type === "First"
      ? format(calendar.firstCalMonth, "MMMM")
      : format(calendar.secondCalMonth, "MMMM");

  let wholeYear =
    format(
      type === "First" ? calendar.firstCalMonth : calendar.secondCalMonth,
      "MMMM"
    ) +
    "-" +
    format(
      type === "First" ? calendar.firstCalYear : calendar.secondCalYear,
      "yyyy"
    );

  let firstDayofMonthYear = parse(wholeYear, "MMMM-yyyy", new Date());
  // Days of Month
  // Need to be updated everytime month and year changes
  let days = eachDayOfInterval({
    start: startOfWeek(firstDayofMonthYear),
    end: endOfWeek(endOfMonth(firstDayofMonthYear)),
  });

  // Dates Between from and to date range
  let DateBetween = eachDayOfInterval({
    start: isDateRange.from.value,
    end: isDateRange.to.value,
  });

  // other option
  // isAfter and isBefore

  let Years = eachYearOfInterval({
    start: new Date(1970, 6, 10),
    end: new Date(5000, 6, 10),
  });

  const SelectedDayHandler = (day: any) => {
    if (isDateRange.from.validate === false) {
      setDateRange({
        ...isDateRange,
        from: {
          value: day,
          validate: true,
        },
        to: {
          value: day,
          validate: false,
        },
      });
    } else if (isDateRange.to.validate === false) {
      setDateRange({
        ...isDateRange,
        to: {
          value: day,
          validate: true,
        },
      });
    }
    if (
      isDateRange.from.validate === true &&
      isDateRange.to.validate === true
    ) {
      setDateRange({
        ...isDateRange,
        from: {
          value: day,
          validate: true,
        },
        to: {
          value: day,
          validate: false,
        },
      });
    }
  };
  const SelectedMonth = (month: string) => {
    const selectedMonth = parse(month, "MMMM", new Date());
    if (type === "First") {
      setCalendar({
        ...calendar,
        firstCalMonth: selectedMonth,
      });
    } else {
      setCalendar({
        ...calendar,
        secondCalMonth: selectedMonth,
      });
    }
    setToggleMonth(false);
  };
  const SelectedYear = (year: Date) => {
    if (type === "First") {
      setCalendar({
        ...calendar,
        firstCalYear: year,
      });
    } else {
      setCalendar({
        ...calendar,
        secondCalYear: year,
      });
    }
    setToggleYear(false);
  };

  const SubtAddYear = (button: string) => {
    const NextYear = add(
      type === "First" ? calendar.firstCalYear : calendar.secondCalYear,
      {
        years: button === "next" ? 1 : -1,
      }
    );
    if (type === "First") {
      setCalendar({
        ...calendar,
        firstCalYear: NextYear,
      });
    } else {
      setCalendar({
        ...calendar,
        secondCalYear: NextYear,
      });
    }
  };
  const PrevNext = (button: string) => {
    // Get Current Month and Year

    // Add and Subt Month depend on button clicked
    let firstdayNextMonth = add(
      type === "First" ? calendar.firstCalMonth : calendar.secondCalMonth,
      {
        months: button === "next" ? 1 : -1,
      }
    );
    // Set New Month
    if (type === "First") {
      setCalendar({
        ...calendar,
        firstCalMonth: firstdayNextMonth,
      });
    } else {
      setCalendar({
        ...calendar,
        secondCalMonth: firstdayNextMonth,
      });
    }

    const validateMonth = format(firstdayNextMonth, "MM");
    if (validateMonth === "01" && button === "next") {
      SubtAddYear("next");
    }

    if (validateMonth === "12" && button === "prev") {
      SubtAddYear("prev");
    }
  };

  const nextMonthHandler = () => {
    PrevNext("next");
  };

  const prevMonthHandler = () => {
    PrevNext("prev");
  };
  return (
    <div className="p-3 bg-[#f5f5f5] rounded-t w-[250px]">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center w-full justify-between">
          <button
            aria-label="calendar backward"
            onClick={prevMonthHandler}
            disabled={
              currentYear === "1970" && currentMonth === "January"
                ? true
                : false
            }
            className=" text-primary-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-left"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="15 6 9 12 15 18" />
            </svg>
          </button>
          <ul className="flex">
            <li className="relative mr-2  w-[75px] cursor-pointer text-center rounded-lg font-bold">
              <YearMonth
                onOpen={() => {
                  setToggleMonth(true);
                }}
                onClose={() => {
                  setToggleMonth(false);
                }}
                displayCalendar={format(
                  type === "First"
                    ? calendar.firstCalMonth
                    : calendar.secondCalMonth,
                  "MMMM"
                )}
                toggle={toggleMonth}
                currentActive={currentMonth}
                selectedFunction={SelectedMonth}
                listItem={Months}
              />
            </li>
            <li className=" relative cursor-pointer rounded-lg font-bold">
              <YearMonth
                onOpen={() => {
                  setToggleYear(true);
                }}
                onClose={() => {
                  setToggleYear(false);
                }}
                displayCalendar={format(
                  type === "First"
                    ? calendar.firstCalYear
                    : calendar.secondCalYear,
                  "yyyy"
                )}
                toggle={toggleYear}
                currentActive={currentYear}
                selectedFunction={SelectedYear}
                listItem={Years.map((year: Date) => format(year, "yyyy"))}
              />
            </li>
          </ul>
          <button
            aria-label="calendar forward"
            onClick={nextMonthHandler}
            disabled={
              currentYear === "5000" && currentMonth === "December"
                ? true
                : false
            }
            className="text-primary-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler  icon-tabler-chevron-right"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>
        </div>
      </div>
      <div className=" flex flex-wrap mb-2">
        <div className=" text-[14px] font-NHU-bold text-center text-[#545454]  w-[14.28%]">
          Su
        </div>
        <div className="text-[14px] font-NHU-bold text-center text-[#545454]  w-[14.28%]">
          Mo
        </div>
        <div className="text-[14px] font-NHU-bold text-center text-[#545454]  w-[14.28%]">
          Tu
        </div>
        <div className="text-[14px] font-NHU-bold text-center text-[#545454]  w-[14.28%]">
          We
        </div>
        <div className="text-[14px] font-NHU-bold text-center text-[#545454] w-[14.28%]">
          Th
        </div>
        <div className="text-[14px] font-NHU-bold text-center text-[#545454] w-[14.28%]">
          Fr
        </div>
        <div className="text-[14px] font-NHU-bold text-center text-[#545454] w-[14.28%]">
          Sa
        </div>
      </div>
      <div className=" flex flex-wrap">
        {days.map((day, index) => (
          <div
            key={index}
            className={` mb-1 cursor-pointer aspect-square flex justify-center items-center text-base font-medium text-center text-gray-800 w-[14.28%]`}
          >
            <button
              onClick={() => SelectedDayHandler(day)}
              className={` relative w-[100%] m-0 aspect-square text-[14px] ${
                isSameMonth(day, today) ? "text-[#545454]" : "text-[#a2a2a2]"
              } ${
                compareDesc(isDateRange.from.value, day) === -1 &&
                isDateRange.from.validate &&
                !isDateRange.to.validate
                  ? " pointer-events-none bg-gray-100 "
                  : ""
              }`}
            >
              <time
                dateTime={format(day, "yyyy-MM-dd")}
                className={`relative z-10 h-full w-full flex justify-center items-center ${
                  isToday(day) ? " rounded-full border border-primary-500" : ""
                } ${
                  isEqual(day, isDateRange.from.value) &&
                  isDateRange.from.validate &&
                  "rounded-full bg-primary-500 text-white"
                } ${
                  isEqual(day, isDateRange.to.value) &&
                  isDateRange.to.validate &&
                  "rounded-full bg-primary-500 text-white"
                }`}
              >
                {format(day, "d")}
              </time>
              {/* check days, kung pasok sa selected date */}
              {compareDesc(isDateRange.from.value, day) === 1 &&
                compareDesc(isDateRange.to.value, day) === -1 && (
                  <div
                    className={`absolute top-0 left-0 w-full h-full duration-150 ease-linear bg-primary-50`}
                  ></div>
                )}
              {((compareDesc(isDateRange.from.value, day) === 0 &&
                isDateRange.from.validate) ||
                compareDesc(isDateRange.to.value, day) === 0) &&
                isDateRange.to.validate && (
                  <div
                    className={`absolute duration-150 ease-linear top-0 ${
                      isEqual(day, isDateRange.to.value) ? "left-0" : "right-0"
                    } w-[50%] h-full bg-primary-50`}
                  ></div>
                )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
