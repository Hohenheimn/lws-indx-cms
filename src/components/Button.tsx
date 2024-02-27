import React from "react";
import { HashLoader, MoonLoader, PuffLoader } from "react-spinners";
import { twMerge } from "tailwind-merge";

type Props = {
  appearance: "primary" | "danger" | "default";
  className?: string;
  children: string | React.ReactNode;
  type?: "submit" | "button";
  onClick?: () => void;
  loading?: boolean;
};
function Button({
  appearance,
  className,
  children,
  type,
  onClick,
  loading,
}: Props) {
  const primary = " bg-primary-500 hover:bg-primary-600 text-white";
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={twMerge(
          `${appearance === "primary" && primary} ${
            appearance === "default" && " bg-gray-100 hover:bg-gray-200"
          } duration-200 font-medium tracking-wider  px-5 py-3 3xl:px-8 3xl:py-4 text-base 3xl:text-lg rounded-lg shadow-md`,
          className
        )}
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
