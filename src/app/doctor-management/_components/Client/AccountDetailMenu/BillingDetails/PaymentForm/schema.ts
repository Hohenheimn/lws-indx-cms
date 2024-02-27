import { z } from "zod";

export const PaymentFieldSchema = z.object({
  paymentDate: z.string({
    required_error: "Required!",
  }),
  accountType: z.string({
    required_error: "Required!",
  }),
  amount: z.number({
    required_error: "Required!",
  }),
  startDate: z.string({
    required_error: "Required!",
  }),
  endDate: z.string({
    required_error: "Required!",
  }),
  paymentMethod: z.string({
    required_error: "Required!",
  }),
});
