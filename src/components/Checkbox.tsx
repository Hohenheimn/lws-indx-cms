import React from "react";
import { FaCheck } from "react-icons/fa";

type Props = {
  checked?: boolean;
  onChange?: () => void;
  name: string;
  value: string;
  id?: string;
  register: any;
};

const Checkbox = ({ checked, onChange, name, value, id, register }: Props) => {
  return (
    <>
      <label htmlFor={id} className="">
        <input
          {...register(name)}
          type="checkbox"
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

export default Checkbox;
