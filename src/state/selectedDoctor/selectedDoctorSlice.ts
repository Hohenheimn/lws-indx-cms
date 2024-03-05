import { z } from "zod";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { doctorManagementSchema } from "@/app/doctor-management/_components/Form/schema";

type DoctorType = z.infer<typeof doctorManagementSchema>;

const state: DoctorType = {
  id: "",
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
};

const doctorSlice = createSlice({
  name: "Selected-Doctor",
  initialState: state,
  reducers: {
    setSelectDoctor: (state, action: PayloadAction<DoctorType>) => {
      state = action.payload;
    },
  },
});

export const { setSelectDoctor } = doctorSlice.actions;
export default doctorSlice.reducer;
