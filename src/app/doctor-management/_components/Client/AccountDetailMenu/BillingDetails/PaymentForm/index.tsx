import React from "react";

import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import BreadCrumbs from "@/components/BreadCrumbs";
import Button from "@/components/Button";
import ControllerField from "@/components/ControllerField";
import Heading from "@/components/Heading";
import LayoutColumn from "@/components/LayoutColumn";

import { PaymentFieldSchema } from "./schema";

type PaymentFieldType = z.infer<typeof PaymentFieldSchema>;

const PaymentForm = () => {
  const id = "sampleId kunin sa redux";
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFieldType>({
    defaultValues: {},
    resolver: zodResolver(PaymentFieldSchema),
  });
  const submit = () => {};
  return (
    <section>
      <div className=" mb-10">
        <Heading element="h2">Add Payment</Heading>
        <BreadCrumbs
          links={[
            {
              title: "Account Details",
              url: `/doctor-management${id ? `/${id}` : ""}/account-details`,
            },
            {
              title: "Billing Details",
              url: "?tab=account-details&manage=billing-details",
            },
            {
              title: "Add Payment",
              url: "",
            },
          ]}
        />
      </div>
      <form onSubmit={handleSubmit(submit)} className=" space-y-5">
        <ControllerField
          control={control}
          errors={errors}
          name={"paymentDate"}
          type={"date"}
          label="Payment Date"
        />
        <ControllerField
          control={control}
          errors={errors}
          name={"accountType"}
          type={"select"}
          label="Account Type"
          selectOptions={["Free", "Basic", "Standard", "Premium"]}
        />
        <ControllerField
          control={control}
          errors={errors}
          name={"amount"}
          type={"number"}
          label="Amount"
        />
        <div>
          <p className=" text-[.9rem] text-gray-500">Service Period</p>
          <LayoutColumn colNumber={2}>
            <ControllerField
              control={control}
              errors={errors}
              name={"startDate"}
              type={"date"}
              label="Start Date"
            />
            <ControllerField
              control={control}
              errors={errors}
              name={"endDate"}
              type={"date"}
              label="End Date"
            />
          </LayoutColumn>
        </div>
        <ControllerField
          control={control}
          errors={errors}
          name={"paymentMethod"}
          type={"select"}
          label="Payment Method"
          selectOptions={["Credit Card", "Cheque"]}
        />
        <div className=" flex justify-end">
          <Button appearance="primary" type="submit">
            SAVE
          </Button>
        </div>
      </form>
    </section>
  );
};

export default PaymentForm;
