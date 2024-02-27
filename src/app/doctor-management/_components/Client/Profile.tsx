"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";

import BreadCrumbs from "@/components/BreadCrumbs";

import DoctorManagementForm from "../Form/DoctorManagementForm";
import AccountDetails from "./AccountDetails";

const Profile = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  return (
    <section className=" flex flex-wrap gap-5 ">
      <aside className=" w-full xl:w-[15rem] 3xl:w-[20rem] space-y-5">
        <BreadCrumbs
          links={[
            {
              title: "Home",
              url: "/doctor-management",
            },
            {
              title: "Profile",
              url: "",
            },
          ]}
        />

        <ul className=" border shadow-md rounded-lg bg-white">
          <li
            className={`${
              tab === "doctor-information" && "text-primary-500"
            } px-8 py-5 border-b hover:text-primary-500 duration-150 cursor-pointer`}
            onClick={() => {
              router.push("?tab=doctor-information");
            }}
          >
            Doctor Information
          </li>
          <li
            className={`${
              tab === "account-details" && "text-primary-500"
            } px-8 py-5 hover:text-primary-500 duration-150 cursor-pointer`}
            onClick={() => {
              router.push("?tab=account-details");
            }}
          >
            Account Details
          </li>
        </ul>
      </aside>
      <main className=" flex-1">
        {tab === "doctor-information" && (
          <DoctorManagementForm
            formValue={{
              profileUrl: "",
              firstName: "",
              middleName: "",
              lastName: "",
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
        {tab === "account-details" && <AccountDetails />}
      </main>
    </section>
  );
};

export default Profile;
