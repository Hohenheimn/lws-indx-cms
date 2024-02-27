import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import BreadCrumbs from "@/components/BreadCrumbs";
import Heading from "@/components/Heading";

const PaymentMethod = () => {
  const id = 1;
  const [selectedPayment, setSelectedPayment] = useState<
    "" | "visa" | "cheque"
  >("");
  const isBreadCrumbsLink = [
    {
      title: "Account Details",
      url: `/doctor-management${id ? `/${id}` : ""}/account-details`,
    },
    {
      title: "Manangement Payment Info",
      url: "",
    },
  ];
  return (
    <section>
      <BreadCrumbs links={isBreadCrumbsLink} />
      <div className=" flex gap-2 mt-10">
        <PaymentMethodButton
          name={"visa"}
          setSelectedPayment={setSelectedPayment}
          selectedPayment={selectedPayment}
        >
          Credit Card
          <Image
            src="/assets/images/visa-icon.png"
            alt="visa"
            height={30}
            width={50}
          />
          <Image
            src="/assets/images/credit-card.png"
            alt="visa"
            height={20}
            width={40}
          />
        </PaymentMethodButton>
        <PaymentMethodButton
          name={"cheque"}
          setSelectedPayment={setSelectedPayment}
          selectedPayment={selectedPayment}
        >
          Cheque
        </PaymentMethodButton>
      </div>
      <ul className=" flex justify-between items-center">
        <li className=" flex items-center gap-5 mt-5">
          <Image
            src="/assets/images/visa-text.png"
            alt="visa"
            height={40}
            width={80}
          />
          <Heading element={"h3"}>**** **** **** 1332</Heading>
        </li>
        <li>
          <Link
            href={
              "?tab=account-details&manage=payment-info&change-credit-card=true"
            }
            className=" text-blue"
          >
            Change Credit Card
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default PaymentMethod;
const PaymentMethodButton = ({
  name,
  children,
  selectedPayment,
  setSelectedPayment,
}: {
  name: string;
  children: React.ReactNode;
  setSelectedPayment: Function;
  selectedPayment: "" | "cheque" | "visa";
}) => {
  return (
    <div
      onClick={() => setSelectedPayment(name)}
      className={`${
        selectedPayment === name && "border-primary-500"
      } flex items-center gap-5 p-5 border cursor-pointer `}
    >
      <div
        className={`${
          selectedPayment === name && "border-primary-500 after:bg-primary-500"
        } size-5 rounded-full border relative flex justify-center items-center after:content-[''] after:absolute after:w-[80%] after:h-[80%]  after:rounded-full `}
      ></div>
      {children}
    </div>
  );
};
