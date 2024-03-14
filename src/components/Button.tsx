import React from "react";
import { cva } from "class-variance-authority";
import { ClassValue } from "clsx";
import clsx from "clsx";
import { PuffLoader } from "react-spinners";
import { twMerge } from "tailwind-merge";

import { classnameMerge } from "@/utils/helpers";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  appearance: "primary" | "danger" | "default";
  loading?: boolean;
  type?: "submit" | "button";
};
function Button({
  appearance,
  loading,
  type,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <>
      <button
        type={type}
        className={classnameMerge(
          buttonAppearance({ variant: appearance }),
          className
        )}
        {...props}
      >
        {loading ? (
          <PuffLoader
            size={20}
            color={appearance === "primary" ? "white" : "#12c8ce"}
          />
        ) : (
          children
        )}
      </button>
    </>
  );
}

export default Button;

const buttonAppearance = cva(
  "duration-200 font-medium tracking-wider  px-5 py-3 3xl:px-8 3xl:py-4 text-base 3xl:text-lg rounded-lg shadow-md",
  {
    variants: {
      variant: {
        primary: " bg-primary-500 hover:bg-primary-600 text-white",
        danger: "",
        default: "bg-gray-100 hover:bg-gray-200",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);
