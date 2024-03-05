"use client";
import { useState } from "react";
import Image from "next/image";

import DateRangePicker from "@/components/DateRangePicker";
import HeadingPage from "@/components/HeadingPage";
import Input from "@/components/Input";
import LayoutColumn from "@/components/LayoutColumn";

import Total from "./_components/Total";

export default function Home() {
  const [isPeriod, setPeriod] = useState({
    from: "",
    to: "",
  });

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
          {/* <div>
            <label>Start Date</label>
            <Input type="date" placeholder="Start Date" />
          </div>
          <div>
            <label>End Date</label>
            <Input type="date" />
          </div> */}
        </li>
      </ul>
      <LayoutColumn colNumber={4}>
        <Total total={102} label={"Total Registered Users"} />
        <Total total={75} label={"Total Paid Subscribers"} />
        <Total total={329} label={"Total Patient Records"} />
        <Total total={10} label={"Total Cancelled Registered"} />
      </LayoutColumn>
    </section>
  );
}
