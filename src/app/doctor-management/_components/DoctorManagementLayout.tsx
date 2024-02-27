"use client";

import React from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import BreadCrumbs from "@/components/BreadCrumbs";

import HeadingPage from "@/components/HeadingPage";

import Profile from "./Client/Profile";

type Props = {
  children: React.ReactNode;
  id?: string;
};

const DoctorManagementLayout = ({ children, id }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <section className=" flex flex-wrap gap-5 ">
      <aside className=" w-full xl:w-[15rem] 3xl:w-[20rem] space-y-5">
        <HeadingPage>Doctor Profile</HeadingPage>
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
            className={`
            ${pathname.includes("/doctor-information") && "text-primary-500"}
             px-8 py-5 border-b hover:text-primary-500 duration-150 cursor-pointer`}
            onClick={() => {
              router.push(`/doctor-management/${id}/doctor-information`);
            }}
          >
            Doctor Information
          </li>
          <li
            className={`${
              pathname.includes("/account-details") && "text-primary-500"
            } px-8 py-5 hover:text-primary-500 duration-150 cursor-pointer`}
            onClick={() => {
              router.push(`/doctor-management/${id}/account-details`);
            }}
          >
            Account Details
          </li>
        </ul>
      </aside>
      <main className=" flex-1 p-10 bg-white rounded-lg shadow-md space-y-2">
        {children}
      </main>
    </section>
  );
};

export default DoctorManagementLayout;
