import React from "react";

import DoctorManagementForm from "../../_components/Form/DoctorManagementForm";
import { ParamsId } from "../page";

const DoctorInformationPage = ({ params }: ParamsId) => {
  return (
    <DoctorManagementForm
      formValue={{
        id: params?.id,
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
  );
};

export default DoctorInformationPage;
