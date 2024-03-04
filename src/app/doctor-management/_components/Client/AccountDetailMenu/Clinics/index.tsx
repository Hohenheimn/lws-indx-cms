"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

import ClinicForm from "./ClinicForm";
import ClinicTable from "./ClinicTable";

const Clinic = () => {
  const searchParams = useSearchParams();
  const addBranch = searchParams.get("add-branch");
  return (
    <section className=" space-y-5">
      {!addBranch && <ClinicTable />}
      {addBranch && <ClinicForm />}
    </section>
  );
};

export default Clinic;
