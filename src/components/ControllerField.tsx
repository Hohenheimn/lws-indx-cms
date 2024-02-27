import React from "react";
import { Controller } from "react-hook-form";
import { PatternFormat } from "react-number-format";

import Input from "./Input";

type Props = {
  control: any;
  errors: any;
  name: string;
  rules?: any;
  label?: string;
  placeholder?: string;
  type:
    | "select"
    | "text"
    | "file"
    | "checkbox"
    | "number"
    | "radio"
    | "password"
    | "email"
    | "textarea"
    | "date"
    | "mobileNo";
  selectOptions?: string[] | number[];
  radioOptions?: {
    label: string;
    value: any;
  }[];
  disabled?: true;
};

function ControllerField({
  control,
  errors,
  name,
  rules,
  label,
  placeholder,
  type,
  selectOptions,
  radioOptions,
  ...rest
}: Props) {
  const inputStyle =
    "border rounded-lg px-2 py-3 3xl:px-3 3xl:py-4 w-full outline-primary-500";

  const labelStyle = "text-gray-500 text-[.9rem]";

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <aside>
          {label && (
            <label htmlFor={name} className={labelStyle}>
              {label}
            </label>
          )}
          {type === "mobileNo" && (
            <PatternFormat
              placeholder="09XX-XXX-XXXXX"
              patternChar="*"
              format="****-***-****"
              allowEmptyFormatting={false}
              id="mobileNo"
              {...field}
              className={inputStyle}
            />
          )}
          {type !== "select" &&
            type !== "textarea" &&
            type !== "radio" &&
            type !== "checkbox" &&
            type !== "mobileNo" && (
              <Input
                field={field}
                rest={rest}
                id={name}
                type={type}
                placeholder={placeholder}
                name={name}
                className={inputStyle}
              />
            )}
          {type === "checkbox" && (
            <div className=" w-full">
              <input id={name} type={type} {...field} checked={field.value} />
            </div>
          )}
          {type === "textarea" && (
            <textarea id={name} {...field} className=" w-full "></textarea>
          )}
          {type === "select" && selectOptions && (
            <select id={name} {...field} defaultValue="" className={inputStyle}>
              {selectOptions?.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          )}
          {type === "radio" && (
            <ul className=" space-y-2">
              {radioOptions?.map((item, index) => (
                <li
                  key={index}
                  className=" flex items-center justify-start gap-2"
                >
                  <input
                    id={name + item.label}
                    type={type}
                    value={item.value}
                    onChange={() => {}}
                    checked={field.value === item.value}
                    onClick={() => field.onChange(item.value)}
                  />
                  <label htmlFor={name + item.label} className={labelStyle}>
                    {item.label}
                  </label>
                </li>
              ))}
            </ul>
          )}
          {errors[name]?.message && (
            <span className=" text-[.9rem] text-[#dd0000]">
              {errors[name]?.message}
            </span>
          )}
        </aside>
      )}
    />
  );
}

export default ControllerField;
