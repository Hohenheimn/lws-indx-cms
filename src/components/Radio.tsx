import React from "react";
import { FaCheck } from "react-icons/fa";

type Props = {
  checked?: boolean;
  onChange?: () => void;
  name: string;
  value: string;
  id: string;
};

const Radio = ({ checked, onChange, name, value, id }: Props) => {
  return (
    <>
      <label htmlFor={id} className="">
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          className="peer sr-only"
          checked={checked}
          onChange={onChange}
        />
        <div className=" size-6 flex justify-center items-center peer-checked:bg-primary-500 peer-checked:text-white text-gray-300 peer-checked:border-none rounded-md border cursor-pointer">
          <FaCheck className=" text-[.8rem]" />
        </div>
      </label>
    </>
  );
};

export default Radio;
