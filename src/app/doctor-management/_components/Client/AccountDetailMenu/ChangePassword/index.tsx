"use client";

import React, { useState } from "react";

import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import BreadCrumbs from "@/components/BreadCrumbs";
import Button from "@/components/Button";
import ControllerField from "@/components/ControllerField";
import Heading from "@/components/Heading";
import Input from "@/components/Input";

import { changePasswordSchema } from "./schema";

type changePasswordFieldType = z.infer<typeof changePasswordSchema>;

const ChangePassword = () => {
  const id = "sample id kunin sa redux";
  const [isGeneratePassword, setGeneratePassword] = useState("");
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<changePasswordFieldType>({
    defaultValues: {
      newPassword: "",
      confirmNewPassword: "",
    },
    resolver: zodResolver(changePasswordSchema),
  });
  const submit = () => {};
  return (
    <section>
      <Heading element="h2">Change Password</Heading>
      <BreadCrumbs
        links={[
          {
            title: "Account Details",
            url: `/doctor-management${id ? `/${id}` : ""}/account-details`,
          },
          {
            title: "Change Password",
            url: "",
          },
        ]}
      />

      <ul className=" flex gap-2 items-end mt-10">
        <li className=" flex-1">
          <Input
            value={isGeneratePassword}
            onChange={(e) => {
              setGeneratePassword(e.target.value);
            }}
          />
        </li>
        <li>
          <Button appearance={"primary"}>GENERATE PASSWORD</Button>
        </li>
      </ul>
      <p className=" text-gray-400 font-bold text-center py-10">Or</p>
      <form className=" space-y-5" onSubmit={handleSubmit(submit)}>
        <ControllerField
          control={control}
          errors={errors}
          name={"newPassword"}
          label="New Password"
          type={"password"}
        />
        <ControllerField
          control={control}
          errors={errors}
          label="Confirm New Password"
          name={"confirmNewPassword"}
          type={"password"}
        />

        <div className="flex justify-end pt-5">
          <Button type="submit" appearance={"primary"}>
            SAVE
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ChangePassword;
