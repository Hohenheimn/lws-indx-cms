"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { FaRegEdit } from "react-icons/fa";

import { RiDeleteBin5Line } from "react-icons/ri";

import Button from "@/components/Button";
import SearchBar from "@/components/SearchBar";
import Table, { TableColumnsType } from "@/components/Table";
import { useDebounce } from "@/hooks/useDebounce";

const doctorManagementTable = () => {
  const column: TableColumnsType[] = [
    {
      title: "",
      cellKey: "profile",
      render: (value) => {
        return (
          <aside className=" w-16 aspect-square rounded-full relative">
            <Image src={value} alt="profile" fill className=" object-cover" />
          </aside>
        );
      },
    },
    {
      title: "First Name",
      cellKey: "firstName",
    },
    {
      title: "Last Name",
      cellKey: "lastName",
    },
    {
      title: "Clinic Name",
      cellKey: "clinicName",
    },
    {
      title: "Email Address",
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
            <Link
              href={`/doctor-management/${record?.id}?tab=doctor-information`}
            >
              <FaRegEdit className=" text-gray-500 cursor-pointer text-xl hover:text-primary-500 duration-200" />
            </Link>
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

const DoctorManagementTable = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const debounceSearch = useDebounce(search, 500);
  const column = doctorManagementTable();
  return (
    <>
      <ul className=" flex justify-between items-center">
        <li>
          <SearchBar search={search} setSearch={setSearch} />
        </li>
        <li>
          <Button
            appearance={"primary"}
            onClick={() => {
              router.push("?tab=doctor-information");
            }}
          >
            + Add Account
          </Button>
        </li>
      </ul>
      <Table
        columns={column}
        data={[
          {
            id: "1",
            profile: "/assets/images/sample.png",
            firstName: "Jomari",
            lastName: "Tiu",
            clinicName: "Dental",
            email: "jomtiu@gmail.com",
            mobileNumber: "09515532773",
          },
        ]}
        isLoading={false}
        setPage={setPage}
        page={page}
        totalPage={10}
      />
    </>
  );
};

export default DoctorManagementTable;
