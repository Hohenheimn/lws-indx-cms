"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { FaRegEdit } from "react-icons/fa";

import { RiDeleteBin5Line } from "react-icons/ri";

import BreadCrumbs from "@/components/BreadCrumbs";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import SearchBar from "@/components/SearchBar";
import Table, { TableColumnsType } from "@/components/Table";
import { useDebounce } from "@/hooks/useDebounce";

const tableColumn = () => {
  const column: TableColumnsType[] = [
    {
      title: "Payment Date",
      cellKey: "paymentDate",
    },
    {
      title: "Account Type",
      cellKey: "accountType",
    },
    {
      title: "Service Period",
      cellKey: "servicePeriod",
    },
    {
      title: "Payment Method",
      cellKey: "paymentMethod",
    },
    {
      title: "Amount",
      cellKey: "amount",
    },
    {
      title: "Action",
      cellKey: "sad",
      render: (_, record) => (
        <ul className=" flex items-center gap-3">
          <li>
            <FaRegEdit className=" text-gray-500 cursor-pointer text-xl hover:text-primary-500 duration-200" />
          </li>
          <li>
            <RiDeleteBin5Line className=" text-gray-500 cursor-pointer text-xl hover:text-primary-500 duration-200" />
          </li>
        </ul>
      ),
    },
  ];
  return column;
};

const PaymentTable = () => {
  const id = "sample id kunin sa redux";
  const router = useRouter();
  const [page, setPage] = useState(1);
  const column = tableColumn();
  return (
    <section className=" space-y-5">
      <div className=" mb-10">
        <Heading element="h2">Billing Details</Heading>
        <BreadCrumbs
          links={[
            {
              title: "Account Details",
              url: `/doctor-management${id ? `/${id}` : ""}/account-details`,
            },
            {
              title: "Billing Details",
              url: "",
            },
          ]}
        />
      </div>
      <ul className=" flex justify-between items-center mb-5">
        <li>
          <Heading element="h2">Account Type: Basic</Heading>
          <Heading element="h2">Next Billing Date: May 15 2021</Heading>
          <Heading element="h2">
            Total Lifetime Subscription Amount : P2,495
          </Heading>
        </li>
        <li>
          <Button
            appearance={"primary"}
            onClick={() => {
              router.push(
                "?tab=account-details&manage=billing-details&add-payment=true"
              );
            }}
          >
            + Add Payment
          </Button>
        </li>
      </ul>
      <Table
        columns={column}
        data={[
          {
            id: "1",
            paymentDate: "05/01/21",
            accountType: "Basic",
            servicePeriod: "05/01/21 - 06/01/21",
            paymentMethod: "Credit Card",
            amount: "P499",
          },
        ]}
        isLoading={false}
        setPage={setPage}
        page={page}
        totalPage={10}
      />
    </section>
  );
};

export default PaymentTable;
