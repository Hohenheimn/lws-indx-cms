"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { profileSchema } from "@/app/doctor-management/_components/Form/schema";
import Button from "@/components/Button";
import ControllerField from "@/components/ControllerField";

import ControllerFileField from "@/components/ControllerFileField";

import LayoutColumn from "@/components/LayoutColumn";

import { getBirthDate, slugify } from "@/utils/helpers";

import { SubAccountSchema } from "./schema";

type SubAccountFormType = z.infer<typeof SubAccountSchema>;
type PropsType = {
  formValue: SubAccountFormType;
};

const SubAccountForm = ({ formValue }: PropsType) => {
  const id = formValue?.id;
  const fieldSchema = id
    ? SubAccountSchema
    : SubAccountSchema.extend(profileSchema);
  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<SubAccountFormType>({
    defaultValues: formValue,
    resolver: zodResolver(fieldSchema),
  });

  useEffect(() => {
    const age = getBirthDate(watch("birthDate")).years;
    setValue("age", isNaN(age) ? 0 : age);
  }, [watch("birthDate")]);

  const submit = (data: any) => {
    delete data.profileUrl;
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
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
        name={"accountType"}
        label={"Select Account type"}
        type={"select"}
        selectOptions={["Sub-Account"]}
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
        name={"landline"}
        label={"Landline"}
        type={"number"}
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
        name={"birthDate"}
        label={"Birth Date"}
        type={"date"}
      />
      <ControllerField
        control={control}
        errors={errors}
        name={"age"}
        label={"Age"}
        type={"number"}
        disabled
      />
      <ControllerField
        control={control}
        errors={errors}
        name={"civilStatus"}
        label={"Civil Status"}
        type={"select"}
        selectOptions={["Single", "Married"]}
      />
      <h3 className=" text-lg font-bold">Address</h3>{" "}
      <ControllerField
        control={control}
        errors={errors}
        name={"street"}
        label={"Street"}
        type={"text"}
      />
      <LayoutColumn colNumber={2}>
        <ControllerField
          control={control}
          errors={errors}
          name={"zipCode"}
          label={"Zip Code"}
          type={"number"}
        />
        <ControllerField
          control={control}
          errors={errors}
          name={"city"}
          label={"City"}
          type={"text"}
        />
        <ControllerField
          control={control}
          errors={errors}
          name={"region"}
          label={"Region"}
          type={"text"}
        />
        <ControllerField
          control={control}
          errors={errors}
          name={"country"}
          label={"Country"}
          type={"text"}
        />
      </LayoutColumn>
      <ControllerField
        control={control}
        errors={errors}
        name={"licenseNumber"}
        label={"License Number"}
        type={"number"}
      />
      <ControllerField
        control={control}
        errors={errors}
        name={"ptrNumber"}
        label={"PTR Number"}
        type={"number"}
      />
      <ControllerField
        control={control}
        errors={errors}
        name={"s2LicenseNumber"}
        label={"S2 License Number"}
        type={"number"}
      />
      <div className=" w-full flex justify-end pt-5">
        <Button appearance={"primary"} type="submit">
          SAVE
        </Button>
      </div>
    </form>
  );
};

export default SubAccountForm;
