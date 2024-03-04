"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

import SubAccountsForm from "./SubAccountForm";
import SubAccountsTable from "./SubAccountsTable";

const SubAccounts = () => {
  const searchParams = useSearchParams();
  const addBranch = searchParams.get("add-sub-account");
  const id = "get from redux";
  return (
    <section className=" space-y-5">
      {!addBranch && <SubAccountsTable />}
      {addBranch && (
        <SubAccountsForm
          formValue={{
            id: id,
            profileUrl: "",
            firstName: "",
            middleName: "",
            lastName: "",
            accountType: "",
            email: "",
            landline: "",
            mobileNo: "",
            birthDate: "",
            age: 0,
            civilStatus: "",
            clinicName: "",
            street: "",
            zipCode: "",
            city: "",
            region: "",
            country: "",
            licenseNumber: "",
            ptrNumber: "",
            s2LicenseNumber: "",
          }}
        />
      )}
    </section>
  );
};

export default SubAccounts;
