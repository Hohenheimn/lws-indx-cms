"use client";

import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { AppDispath, RootState } from "@/state/store";

import DoctorManagementForm from "../../_components/Form/DoctorManagementForm";
import { ParamsId } from "../page";

const DoctorInformationPage = ({ params }: ParamsId) => {
  const selectedDoctor = useSelector(
    (state: RootState) => state.selectedDoctor
  );
  const dispatch = useDispatch<AppDispath>();
  return (
    <DoctorManagementForm
      formValue={{
        id: params?.id,
        profileUrl: "/assets/images/sample.png",
        firstName: "Jomari",
        middleName: "Gacusan",
        lastName: "Tiu",
        email: "jomtiu16@gmail.com",
        landline: "2395551515",
        mobileNo: "09515532773",
        birthDate: "08/16/1998",
        age: 25,
        civilStatus: "Single",
        clinicName: "Tiu-Dental",
        street: "Block 8A",
        zipCode: "4117",
        city: "CAVITE",
        region: "CALABARZON",
        country: "Philippines",
        licenseNumber: "19566898",
        ptrNumber: "19566898",
        s2LicenseNumber: "19566898",
      }}
    />
  );
};

export default DoctorInformationPage;
