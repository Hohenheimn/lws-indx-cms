"use client";
import React, { useState } from "react";

import BreadCrumbs from "@/components/BreadCrumbs";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Radio from "@/components/Radio";

const AccountType = () => {
  const id = "sample id kunin sa redux";
  const [isPlan, setPlan] = useState("Free");
  const PlanList = [
    {
      value: "Free",
      id: "free",
    },
    {
      value: "Basic - P499",
      id: "basic",
    },
    {
      value: "Standard - P999",
      id: "standard",
    },
    {
      value: "Premium - P1,499",
      id: "premium",
    },
  ];
  return (
    <section>
      <Heading element="h2">Change Plan</Heading>
      <BreadCrumbs
        links={[
          {
            title: "Account Details",
            url: `/doctor-management${id ? `/${id}` : ""}/account-details`,
          },
          {
            title: "Change Plan",
            url: "",
          },
        ]}
      />

      <ul className=" mt-5">
        {PlanList.map((item, indx) => (
          <li
            key={indx}
            className=" flex items-center justify-between py-5 border-b"
          >
            <p>{item.value}</p>
            <Radio
              name="radio-plan"
              value={item.value}
              id={item.id}
              checked={isPlan === item.value}
              onChange={() => setPlan(item.value)}
            />
          </li>
        ))}
        <li className=" mt-5 flex justify-end">
          <Button appearance={"primary"} className=" mt-10">
            SAVE
          </Button>
        </li>
      </ul>
    </section>
  );
};

export default AccountType;
