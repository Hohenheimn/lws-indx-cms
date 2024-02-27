import React from "react";

import HeadingPage from "@/components/HeadingPage";

import Profile from "./_components/Client/Profile";
import DoctorManagementTable from "./_components/Client/Table";

type Props = {
  searchParams: {
    tab?: string;
    id?: string;
  };
};

const DoctorManagement = ({ searchParams }: Props) => {
  const tab = searchParams?.tab;
  const id = searchParams?.id;
  return (
    <div className=" space-y-5">
      <HeadingPage>Doctor Management</HeadingPage>
      <DoctorManagementTable />
    </div>
  );
};

export default DoctorManagement;
