import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { FaCheck } from "react-icons/fa";

import { IoIosArrowForward } from "react-icons/io";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import BreadCrumbs from "@/components/BreadCrumbs";
import Button from "@/components/Button";
import ControllerField from "@/components/ControllerField";

const schema = z.object({
  expirationDate: z.string().min(1, { message: "Required!" }),
});

type FieldType = z.infer<typeof schema>;

const ChangeCreditCard = () => {
  const id = "sample kunin sa redux";
  const BreadCrumbsLinks = [
    {
      title: "Account Details",
      url: `/doctor-management${id ? `/${id}` : ""}/account-details`,
    },
    {
      title: "Manangement Payment Info",
      url: `/doctor-management${
        id ? `/${id}` : ""
      }/account-details/payment-information`,
    },
    {
      title: "Change Credit Card",
      url: `/doctor-management${
        id ? `/${id}` : ""
      }/account-details/payment-information?change-credit-card=true`,
    },
  ];
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldType>({
    resolver: zodResolver(schema),
  });
  const submit = () => {};
  return (
    <>
      <BreadCrumbs links={BreadCrumbsLinks} />{" "}
      <section className=" mt-10 space-y-5">
        <div>
          <p className=" text-[.9rem] font-semibold">Card Number</p>
          <div className=" border border-green-500 bg-green-50 flex px-5 py-2 items-center gap-5 justify-between">
            <div className=" flex items-center gap-5">
              <Image
                src="/assets/images/visa-icon.png"
                width={50}
                height={20}
                alt="visa"
              />
              <h2 className=" text-lg font-bold">4123 4567 123 9819</h2>
            </div>
            <FaCheck className=" text-green-500" />
          </div>
        </div>
        <form onSubmit={handleSubmit(submit)} className="  space-y-5">
          <ControllerField
            control={control}
            errors={errors}
            name={"expirationDate"}
            type={"date"}
            label="Expiration Date"
          />
          <div className=" flex justify-center">
            <Button
              appearance="primary"
              type="submit"
              className=" flex gap-3 items-center"
            >
              Continue <IoIosArrowForward className=" text-2xl" />
            </Button>
          </div>
        </form>
        <p className=" text-center">
          By clicking the button, you agree to the{" "}
          <Link href={"#"} className=" text-blue underline font-semibold">
            Terms and Conditions
          </Link>
        </p>
      </section>
    </>
  );
};

export default ChangeCreditCard;
