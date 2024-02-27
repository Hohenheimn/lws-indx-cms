import React from "react";
import Link from "next/link";

import Heading from "@/components/Heading";

const AccountDetailMenu = ({ id }: { id?: string }) => {
  return (
    <ul className=" space-y-10">
      <li className=" flex justify-between items-center">
        <Heading element={"h3"}>Member Since</Heading>
        <p>May 3, 2021</p>
      </li>
      <li className=" flex justify-between items-center">
        <Heading element={"h3"}>Account Status</Heading>
        <div>
          <select
            name=""
            id=""
            className="border rounded-lg px-2 py-3 3xl:px-3 3xl:py-4 w-full outline-primary-500"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </li>
      <li className=" flex justify-between items-center">
        <Heading element={"h3"}>Account Type</Heading>
        <Link
          href={`/doctor-management${
            id ? `/${id}` : ""
          }/account-details/account-type`}
          className="text-[#3a7ab0] font-semibold"
        >
          Basic
        </Link>
      </li>
      <li className=" flex justify-between items-center">
        <Heading element={"h3"}>Password</Heading>
        <Link
          href={`/doctor-management${
            id ? `/${id}` : ""
          }/account-details/change-password`}
          className="text-[#3a7ab0] font-semibold"
        >
          Change Password
        </Link>
      </li>
      <li className=" flex justify-between items-center">
        <Heading element={"h3"}>Manage Payment Info</Heading>
        <Link
          href={`/doctor-management${
            id ? `/${id}` : ""
          }/account-details/payment-information`}
          className="text-[#3a7ab0] font-semibold"
        >
          Update
        </Link>
      </li>
      <li className=" flex justify-between items-center">
        <Heading element={"h3"}>Next Billing Date Is May 15, 2021 </Heading>
        <Link
          href={`/doctor-management${
            id ? `/${id}` : ""
          }/account-details/billing-details`}
          className="text-[#3a7ab0] font-semibold"
        >
          Billing Details
        </Link>
      </li>
      <li className=" flex justify-between items-center">
        <Heading element={"h3"}>Manage Clinics</Heading>
        <Link
          href={`/doctor-management${
            id ? `/${id}` : ""
          }/account-details/clinics`}
          className="text-[#3a7ab0] font-semibold"
        >
          Update
        </Link>
      </li>
      <li className=" flex justify-between items-center">
        <Heading element={"h3"}>Manage Sub Accounts</Heading>
        <Link
          href={`/doctor-management${
            id ? `/${id}` : ""
          }/account-details/sub-accounts`}
          className="text-[#3a7ab0] font-semibold"
        >
          Update
        </Link>
      </li>
    </ul>
  );
};

export default AccountDetailMenu;
