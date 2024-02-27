"use client";

import React, { useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";

import BreadCrumbs from "@/components/BreadCrumbs";
import Heading from "@/components/Heading";

import ChangeCreditCard from "./ChangeCreditCard";
import PaymentMethod from "./PaymentMethod";

const PaymentInfo = () => {
  const searchParams = useSearchParams();
  const changeCreditCard = searchParams.get("change-credit-card");

  return (
    <section>
      <Heading element="h2">Manangement Payment Info</Heading>
      {!changeCreditCard && <PaymentMethod />}
      {changeCreditCard && <ChangeCreditCard />}
    </section>
  );
};

export default PaymentInfo;
