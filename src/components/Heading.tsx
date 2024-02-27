import React from "react";

type Props = {
  element: "h2" | "h3";
  children: React.ReactNode;
};

const Heading = ({ element, children }: Props) => {
  return (
    <>
      {element === "h2" && <h2 className=" text-lg font-bold">{children}</h2>}
      {element === "h3" && <h3 className=" font-bold">{children}</h3>}
    </>
  );
};

export default Heading;
