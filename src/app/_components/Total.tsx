import React from "react";

type Props = {
  total: string | number;
  label: string;
};

const Total = ({ total, label }: Props) => {
  return (
    <div className=" flex flex-col justify-center items-center gap-3 shadow-md bg-white rounded-lg h-[10rem]">
      <h1 className=" text-3xl font-bold">{total}</h1>
      <p>{label}</p>
    </div>
  );
};

export default Total;
