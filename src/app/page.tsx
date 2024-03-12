"use client";
import { useState } from "react";
import Image from "next/image";

import DateRangePicker from "@/components/DateRangePicker";
import HeadingPage from "@/components/HeadingPage";
import Input from "@/components/Input";
import LayoutColumn from "@/components/LayoutColumn";

import AgeChart from "./_components/Charts/Age";
import LocationChart from "./_components/Charts/Location";
import MaleFemaleChart from "./_components/Charts/MaleFemale";
import TotalRevenue from "./_components/Charts/TotalRevenue";
import MostUsers from "./_components/MostUsers";
import Total from "./_components/Total";

export default function Home() {
  return (
    <section className=" space-y-5">
      <ul className=" flex gap-3 flex-wrap justify-between items-center">
        <li>
          <HeadingPage>Dashboard</HeadingPage>
        </li>
        <li className=" flex gap-3">
          <DateRangePicker
            typeOfValue={"formatted"}
            onChange={(value) => {
              console.log(value);
            }}
          />
        </li>
      </ul>
      <LayoutColumn colNumber={4}>
        <Total total={102} label={"Total Registered Users"} />
        <Total total={75} label={"Total Paid Subscribers"} />
        <Total total={329} label={"Total Patient Records"} />
        <Total total={10} label={"Total Cancelled Registered"} />
      </LayoutColumn>
      <TotalRevenue />
      <ul className=" grid grid-cols-3 gap-5">
        <li className="space-y-5 col-span-2">
          <MaleFemaleChart />
          <LocationChart />
        </li>
        <li className=" col-span-1 space-y-5">
          <AgeChart />
          <MostUsers />
        </li>
      </ul>
    </section>
  );
}
