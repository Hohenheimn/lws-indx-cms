"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

import PaymentForm from "./PaymentForm";
import PaymentTable from "./PaymentTable";

const BillingDetails = () => {
  const searchParams = useSearchParams();
  const addPayment = searchParams.get("add-payment");
  return (
    <section className=" space-y-5">
      {!addPayment && <PaymentTable />}
      {addPayment && <PaymentForm />}
    </section>
  );
};

export default BillingDetails;
