"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { profileSchema } from "@/app/doctor-management/_components/Form/schema";

import Button from "@/components/Button";

import Checkbox from "@/components/Checkbox";

import ControllerField from "@/components/ControllerField";

import Heading from "@/components/Heading";

import { accounTypeSchema } from "./schema";

export type AccountTypeFormType = z.infer<typeof accounTypeSchema>;

type Props = {
  formValue: AccountTypeFormType;
};

const AccountTypeForm = ({ formValue }: Props) => {
  const id = formValue?.id;
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: formValue,
    resolver: zodResolver(accounTypeSchema),
  });

  const submit = (data: any) => {
    console.log(data);
  };
  return (
    <section className=" space-y-5">
      <Heading element="h2">{id ? "Update" : "Add"} Account Type</Heading>
      <form onSubmit={handleSubmit(submit)} className=" space-y-5">
        <ControllerField
          control={control}
          errors={errors}
          name={"accountType"}
          label={"Account Type Name"}
          type={"text"}
        />
        <table className="w-full" style={{ tableLayout: "auto" }}>
          <thead>
            <tr>
              <th className=" py-1 text-start">Module</th>
              <th className=" py-1 text-start">Add</th>
              <th className=" py-1 text-start">Edit</th>
              <th className=" py-1 text-start">Delete</th>
              <th className=" py-1 text-start">View</th>
            </tr>
          </thead>
          <tbody>
            {modules.map((item, indx) => (
              <tr key={indx}>
                <td className=" py-2">{item?.label}</td>

                <td className=" py-2">
                  <Checkbox
                    register={register}
                    name={`modules.${item.key}`}
                    value={"add"}
                  />
                </td>
                <td className=" py-2">
                  <Checkbox
                    register={register}
                    name={`modules.${item.key}`}
                    value={"edit"}
                  />
                </td>
                <td className=" py-2">
                  <Checkbox
                    register={register}
                    name={`modules.${item.key}`}
                    value={"delete"}
                  />
                </td>
                <td className=" py-2">
                  <Checkbox
                    register={register}
                    name={`modules.${item.key}`}
                    value={"view"}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className=" w-full flex justify-end pt-5">
          <Button appearance={"primary"} type="submit">
            SAVE
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AccountTypeForm;

const modules = [
  {
    label: "Calendar",
    key: "calendar",
  },
  {
    label: "Patient Records",
    key: "patientRecords",
  },
  {
    label: "Inventory",
    key: "inventory",
  },
  {
    label: "Procedure",
    key: "procedure",
  },
  {
    label: "Accounting",
    key: "accounting",
  },
];
