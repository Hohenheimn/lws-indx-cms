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
import Table, { TableColumnsType } from "@/components/Table";

const tableColumn = () => {
  const column: TableColumnsType[] = [
    {
      title: "First Name",
      cellKey: "firstName",
    },
    {
      title: "Last Name",
      cellKey: "lastName",
    },
    {
      title: "Account Type",
      cellKey: "accountType",
    },
    {
      title: "Email",
      cellKey: "email",
    },
    {
      title: "Mobile Number",
      cellKey: "mobileNumber",
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

const SubAccountsTable = () => {
  const id = "sample id kunin sa redux";
  const router = useRouter();
  const [page, setPage] = useState(1);
  const column = tableColumn();
  return (
    <section className=" space-y-5">
      <div className=" mb-10">
        <Heading element="h2">Manage Sub-Accounts</Heading>
        <BreadCrumbs
          links={[
            {
              title: "Account Details",
              url: `/doctor-management${id ? `/${id}` : ""}/account-details`,
            },
            {
              title: "Manage Sub-Accounts",
              url: "",
            },
          ]}
        />
      </div>
      <ul className=" flex justify-end items-center mb-5">
        <li>
          <Button
            appearance={"primary"}
            onClick={() => {
              router.push("?add-sub-account=true");
            }}
          >
            + Add Sub-Account
          </Button>
        </li>
      </ul>
      <Table
        columns={column}
        data={[
          {
            id: "1",
            firstName: "Jomari",
            lastName: "Tiu",
            accountType: "Sub-Dentist",
            email: "jomtiu16@gmail.com",
            mobileNumber: "09515325489",
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

export default SubAccountsTable;
