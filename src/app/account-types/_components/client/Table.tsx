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

import AccountTypeForm, { AccountTypeFormType } from "../form/AccountTypeForm";

const columns = (setSelectedItem: Function) => {
  const column: TableColumnsType[] = [
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

const AccountTypeTable = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const debounceSearch = useDebounce(search, 500);
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<AccountTypeFormType>({
    id: undefined,
    accountType: "",
    modules: {
      calendar: [],
      patientRecords: [],
      inventory: [],
      procedure: [],
      accounting: [],
    },
  });
  const column = columns(setSelectedItem);

  return (
    <>
      <section className=" space-y-5">
        <HeadingPage>Account Types</HeadingPage>
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
              + Add Account Type
            </Button>
          </li>
        </ul>
        <Table
          columns={column}
          data={[
            {
              id: "1231221",
              accountType: "Sub Doctor",
              modules: {
                calendar: ["add", "edit"],
                patientRecords: ["view"],
                inventory: ["delete", "view"],
                procedure: [],
                accounting: ["add"],
              },
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
        <AccountTypeForm formValue={selectedItem} />
      </Modal>
    </>
  );
};

export default AccountTypeTable;
