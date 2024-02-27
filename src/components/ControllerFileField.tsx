"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import { Controller } from "react-hook-form";

import { displayImage } from "@/utils/helpers";

type Props = {
  control: any;
  errors: any;
  name: string;
  rules?: any;
  disabled?: true;
  defaultImageUrl?: string;
};

type SelectImageType = {
  type: "success" | "error";
  message: string;
  url: string;
};

const ControllerFileField = ({
  control,
  errors,
  name,
  rules,
  disabled,
  defaultImageUrl,
}: Props) => {
  const [selectedImage, setSelectedImage] = useState<SelectImageType>({
    type: "success",
    message: "Upload Image",
    url: "/assets/images/default-profile.svg",
  });

  const handleImageChange = (
    e: ChangeEvent<HTMLInputElement>,
    onChange: Function
  ) => {
    const returnValue = displayImage(e, setSelectedImage);
    onChange(returnValue);
  };

  useEffect(() => {
    setSelectedImage({
      ...selectedImage,
      message: defaultImageUrl ? "Change Image" : "Upload Image",
      url: defaultImageUrl || "/assets/images/default-profile.svg",
    });
  }, [defaultImageUrl]);

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange } }) => (
        <>
          <input
            type="file"
            id={name}
            className=" pointer-events-none opacity-0 absolute z-[-99]"
            onChange={(e) => handleImageChange(e, onChange)}
          />
          <label
            htmlFor={name}
            className=" flex flex-col items-center cursor-pointer"
          >
            <figure className=" size-28 overflow-hidden rounded-full relative">
              <Image
                src={selectedImage?.url}
                alt=""
                fill
                className=" object-cover"
              />
            </figure>
            <p
              className={` text-gray-500 text-center text-sm mt-2 ${
                selectedImage.type === "error" && "text-red-500"
              }`}
            >
              {selectedImage.message}
            </p>
            {errors[name]?.message && (
              <span className=" text-[.9rem] text-center text-[#dd0000]">
                {errors[name]?.message}
              </span>
            )}
          </label>
        </>
      )}
    />
  );
};

export default ControllerFileField;
