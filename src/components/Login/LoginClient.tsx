"use client";
import React from "react";
import { setCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import Button from "../Button";
import ControllerField from "../ControllerField";

const LoginClient = () => {
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<{ email: string; password: string }>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitHandler = (data: { email: string; password: string }) => {
    console.log(data);
    setCookie("user", "fake-token");
    router.refresh();
  };
  return (
    <section className="flex  bg-white">
      <aside className="h-screen flex-1 bg-primary-500 relative">
        <Image
          src={"/assets/images/login-background.png"}
          fill
          className=" object-cover"
          alt="Logo"
        />
      </aside>
      <article className=" w-full md:w-[55%] flex flex-col justify-center items-center gap-10">
        <Image
          src={"/assets/images/logo.png"}
          height={200}
          width={250}
          alt="Logo"
        />
        <form
          onSubmit={handleSubmit(submitHandler)}
          className=" space-y-5 w-11/12 max-w-[30rem]"
        >
          <ControllerField
            control={control}
            errors={errors}
            rules={{ required: "required" }}
            name={"email"}
            placeholder={"Email"}
            type={"email"}
          />
          <ControllerField
            control={control}
            errors={errors}
            rules={{ required: "required" }}
            name={"password"}
            placeholder={"Password"}
            type={"password"}
          />

          <Button
            type="submit"
            appearance={"primary"}
            loading={false}
            className=" w-full py-3 text-lg"
          >
            LOGIN
          </Button>
          <Link
            href="/forgot-password"
            className=" text-primary-500 hover:text-primary-600 mt-2 block"
          >
            Forgot password?
          </Link>
        </form>
      </article>
    </section>
  );
};

export default LoginClient;
