import React from "react";


type Props = {
  children: string;
};
const HeadingPage = ({ children }: Props) => {
  return <h1 className=" font-bold text-2xl">{children}</h1>;
};

export default HeadingPage;
