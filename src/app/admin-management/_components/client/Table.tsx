"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { FaRegEdit } from "react-icons/fa";

import { RiDeleteBin5Line } from "react-icons/ri";

import Button from "@/components/Button";
import HeadingPage from "@/components/HeadingPage";
import Modal from "@/components/Modal";
import SearchBar from "@/components/SearchBar";
import Table, { TableColumnsType } from "@/components/Table";

import { useDebounce } from "@/hooks/useDebounce";

import AdminManagementForm, {
  AdminAccountFieldType,
} from "../form/AdminManagementForm";

const columns = (setSelectedItem: Function) => {
  const column: TableColumnsType[] = [
    {
      title: "",
      cellKey: "profileUrl",
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
      title: "Email Address",
      cellKey: "email",
    },
    {
      title: "Mobile Number",
      cellKey: "mobileNo",
    },
    {
      title: "Account Type",
      cellKey: "accountType",
    },
    {
      title: "Action",
      cellKey: "sad",
      render: (_, data) => (
        <ul className=" flex items-center gap-3">
          <li>
            <FaRegEdit
              onClick={() => setSelectedItem(data)}
              className=" text-gray-500 cursor-pointer text-xl hover:text-primary-500 duration-200"
            />
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

const AdminManagementTable = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const debounceSearch = useDebounce(search, 500);
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<AdminAccountFieldType>({
    id: undefined,
    profileUrl: "",
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    accountType: "",
    mobileNo: "",
    newPassword: "",
    confirmPassword: "",
  });
  const column = columns(setSelectedItem);

  return (
    <>
      <section className=" space-y-5">
        <HeadingPage>Admin Management</HeadingPage>
        <ul className=" flex justify-between items-center">
          <li>
            <SearchBar search={search} setSearch={setSearch} />
          </li>
          <li>
            <Button
              appearance={"primary"}
              onClick={() => {
                setOpenModal(true);
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
              id: "1231221",
              profileUrl: "/assets/images/sample.png",
              firstName: "Jomari",
              middleName: "Gacusan",
              lastName: "Tiu",
              email: "jomtiu16@gmail.com",
              accountType: "Sub Doctor",
              mobileNo: "09584995821",
              newPassword: "",
              confirmPassword: "",
            },
          ]}
          isLoading={false}
          setPage={setPage}
          page={page}
          totalPage={10}
          onClickRow={(item) => {
            setSelectedItem(item);
            setOpenModal(true);
          }}
        />
      </section>
      <Modal
        onClose={() => setOpenModal(false)}
        show={openModal}
        width={"narrow"}
      >
        <AdminManagementForm formValue={selectedItem} />
      </Modal>
    </>
  );
};

export default AdminManagementTable;
