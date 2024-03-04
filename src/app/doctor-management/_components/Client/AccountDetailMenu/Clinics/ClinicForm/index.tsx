import React from "react";

import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import BreadCrumbs from "@/components/BreadCrumbs";
import Button from "@/components/Button";
import ControllerField from "@/components/ControllerField";
import Heading from "@/components/Heading";
import LayoutColumn from "@/components/LayoutColumn";

import { ClinicFormSchema } from "./schema";

type ClinicFormType = z.infer<typeof ClinicFormSchema>;

const ClinicForm = () => {
  const id = "sampleId kunin sa redux";
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ClinicFormType>({
    defaultValues: {},
    resolver: zodResolver(ClinicFormSchema),
  });
  const submit = () => {};
  return (
    <section>
      <div className=" mb-10">
        <Heading element="h2">Add Branch</Heading>
        <BreadCrumbs
          links={[
            {
              title: "Account Details",
              url: `/doctor-management${id ? `/${id}` : ""}/account-details`,
            },
            {
              title: "Manage Clinics",
              url: `/doctor-management${
                id ? `/${id}` : ""
              }/account-details/clinics`,
            },
            {
              title: "Add Branch",
              url: "",
            },
          ]}
        />
      </div>
      <form onSubmit={handleSubmit(submit)} className=" space-y-5">
        <ControllerField
          control={control}
          errors={errors}
          name={"branchName"}
          type={"text"}
          label="Branch Name"
        />
        <ControllerField
          control={control}
          errors={errors}
          name={"email"}
          type={"email"}
          label="Email Address"
        />
        <ControllerField
          control={control}
          errors={errors}
          name={"mobileNumber"}
          type={"mobileNo"}
          label="Mobile Number"
        />
        <div>
          <p className=" text-[.9rem] text-gray-500">Address</p>
          <LayoutColumn colNumber={2}>
            <ControllerField
              control={control}
              errors={errors}
              name={"zipCode"}
              type={"number"}
              label="Zip Code"
            />
            <ControllerField
              control={control}
              errors={errors}
              name={"city"}
              type={"text"}
              label="City"
            />
            <ControllerField
              control={control}
              errors={errors}
              name={"region"}
              type={"text"}
              label="Region"
            />
            <ControllerField
              control={control}
              errors={errors}
              name={"country"}
              type={"text"}
              label="Country"
            />
          </LayoutColumn>
        </div>

        <div className=" flex justify-end">
          <Button appearance="primary" type="submit">
            SAVE
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ClinicForm;
