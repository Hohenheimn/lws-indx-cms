import { useEffect, useState } from "react";
import React from "react";
import { parse } from "date-fns";

import Image from "next/image";

import { usePopper } from "react-popper";
import flip from "@popperjs/core/lib/modifiers/flip";

import preventOverflow from "@popperjs/core/lib/modifiers/preventOverflow";

import CalendarFNS from "./CalendarFNS";

export type PeriodCalendarValueType = {
  from: string | Date;
  to: string | Date;
};

type Props = {
  typeOfValue: "formatted" | "date";
  disabled?: boolean;
  onChange?: (value: PeriodCalendarValueType) => void;
};

export default function DateRangePicker({
  disabled,
  onChange,
  typeOfValue,
}: Props) {
  const [open, setOpen] = useState(false);
  const [referenceElement, setReferenceElement] = useState<any>(null);
  const [popperElement, setPopperElement] = useState<any>();
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "auto",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [50, 10],
        },
      },
      flip,
      preventOverflow,
    ],
  });

  const [value, setValue] = useState({
    from: "",
    to: "",
  });
  useEffect(() => {
    if (!onChange) return;
    if (typeOfValue === "date") {
      const returnValue = {
        from: parse(value.from, "MMMM dd yyyy", new Date()),
        to: parse(value.to, "MMMM dd yyyy", new Date()),
      };
      onChange(returnValue);
      return;
    }
    onChange(value);
  }, [value.from, value.to]);

  return (
    <>
      <div className="flex items-center" ref={setReferenceElement}>
        <div
          className={`${
            disabled && "disabled"
          } p-3 px-2 text-[#545454] rounded-md outline-none shadow-md bg-white flex justify-between items-center`}
          onClick={() => setOpen((open) => !open)}
        >
          <input
            value={value.from}
            readOnly
            placeholder="Start Date"
            className={`${
              disabled && "disabled"
            } w-32 outline-none text-center text-[#545454]`}
          />
          <p className=" mx-2">-</p>
          <input
            value={value.to}
            readOnly
            placeholder="End Date"
            className={`${
              disabled && "disabled"
            } w-32 outline-none text-center  text-[#545454] `}
          />
        </div>
      </div>
      {open && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className=" px-5"
        >
          <CalendarFNS setToggle={setOpen} setValue={setValue} value={value} />
        </div>
      )}
    </>
  );
}
