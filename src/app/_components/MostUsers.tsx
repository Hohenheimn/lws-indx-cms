import React, { useState } from "react";

import Heading from "@/components/Heading";
import Tab from "@/components/Tab";

const MostUsers = () => {
  const [tabActive, setTabActive] = useState("Active");

  return (
    <div className=" space-y-5 p-10 bg-white rounded-lg shadow-md">
      <Heading element="h2">Most Users</Heading>
      <Tab
        tabMenu={["Active", "Inactive"]}
        active={tabActive}
        setActive={setTabActive}
      />
      <ul className=" text-center space-y-3">
        <li>Halo Tran</li>
        <li>Gianna Mullen</li>
        <li>Alia Eaton</li>
        <li>Makenzie Lee</li>
        <li>Hadleigh Miranda</li>
        <li>Alexandra Grimes</li>
        <li>Eliana Rios</li>
        <li>Scout Nguyen</li>
        <li>Teagan Riley</li>
      </ul>
    </div>
  );
};

export default MostUsers;
