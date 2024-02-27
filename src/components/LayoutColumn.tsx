import React from "react";

function LayoutColumn({
  children,
  colNumber,
}: {
  children: React.ReactNode;
  colNumber: 2 | 3 | 4;
}) {
  let column = " grid-cols-1 sm:grid-cols-2";
  if (colNumber === 3) {
    column = "xl:grid-cols-3  lg:grid-cols-2 grid-cols-1";
  }
  if (colNumber === 4) {
    column = "xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1";
  }
  return <div className={` grid ${column} gap-x-5 gap-y-5`}>{children}</div>;
}

export default LayoutColumn;
