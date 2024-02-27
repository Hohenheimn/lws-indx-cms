"use client";
import React from "react";

import { useSearchParams } from "next/navigation";

import AccountDetailMenu from "./AccountDetailMenu";
import AccountType from "./AccountDetailMenu/AccountType";
import BillingDetails from "./AccountDetailMenu/BillingDetails";
import ChangePassword from "./AccountDetailMenu/ChangePassword";
import PaymentInfo from "./AccountDetailMenu/PaymentInfo";

const AccountDetails = () => {
  const searchParams = useSearchParams();
  const manage = searchParams.get("manage");
  return (
    <section className=" w-full p-10 bg-white rounded-lg shadow-md space-y-2">
      {!manage && <AccountDetailMenu />}
      {manage === "account-type" && <AccountType />}
      {manage === "change-password" && <ChangePassword />}
      {manage === "payment-info" && <PaymentInfo />}
      {manage === "billing-details" && <BillingDetails />}
    </section>
  );
};

export default AccountDetails;
