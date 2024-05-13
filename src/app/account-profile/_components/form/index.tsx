"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { profileSchema } from "@/app/doctor-management/_components/Form/schema";

import Button from "@/components/Button";

import ControllerField from "@/components/ControllerField";

import ControllerFileField from "@/components/ControllerFileField";

import { AccountProfileSchema } from "./schema";

export type AdminAccountFieldType = z.infer<typeof AccountProfileSchema>;
type PropsType = {
  formValue: AdminAccountFieldType;
};

const AccountProfileForm = ({ formValue }: PropsType) => {
  const id = formValue?.id;
  const fieldSchema = id ? AccountProfileSchema.refine(
        (data) => data.newPassword === data.confirmPassword,
        {
          message: "Passwords do not match",
          path: ["confirmPassword"],
        }
      )
    : AccountProfileSchema.extend(profileSchema).refine(
        (data) => data.newPassword === data.confirmPassword,
        {
          message: "Passwords do not match",
          path: ["confirmPassword"],
        }
      );
  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<AdminAccountFieldType>({
    defaultValues: formValue,
    resolver: zodResolver(fieldSchema),
  });

  const submit = (data: any) => {
    delete data.profileUrl;
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(submit)} className=" space-y-5">
      <ul className=" flex flex-wrap justify-start items-center">
        <li className=" p-5 w-full md:w-52">
          <ControllerFileField
            control={control}
            errors={errors}
            name={"profile"}
            defaultImageUrl={watch("profileUrl")}
          />
        </li>
        <li className=" flex-1 space-y-2">
          <ControllerField
            control={control}
            errors={errors}
            name={"firstName"}
            label={"First Name"}
            type={"text"}
          />
          <ControllerField
            control={control}
            errors={errors}
            name={"middleName"}
            label={"Middle Name"}
            type={"text"}
          />
        </li>
      </ul>
      <ControllerField
        control={control}
        errors={errors}
        name={"lastName"}
        label={"Last Name"}
        type={"text"}
      />
      <ControllerField
        control={control}
        errors={errors}
        name={"email"}
        label={"Email"}
        type={"email"}
      />
      <ControllerField
        control={control}
        errors={errors}
        name={"mobileNo"}
        label={"Mobile No."}
        type={"mobileNo"}
      />
      <ControllerField
        control={control}
        errors={errors}
        name={"accountType"}
        label={"Select Account type"}
        type={"select"}
        selectOptions={["Sub-Account"]}
      />

      <ControllerField
        control={control}
        errors={errors}
        name={"newPassword"}
        label={"New Password"}
        type={"password"}
      />

      <ControllerField
        control={control}
        errors={errors}
        name={"confirmPassword"}
        label={"Re-Type Password"}
        type={"password"}
      />

      <div className=" w-full flex justify-end pt-5">
        <Button appearance={"primary"} type="submit">
          SAVE
        </Button>
      </div>
    </form>
  );
};

export default AccountProfileForm;
