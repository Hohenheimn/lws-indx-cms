import { z } from "zod";

import { phoneRegex } from "@/utils/regex";

export const ClinicFormSchema = z.object({
  branchName: z.string({
    required_error: "Required!",
  }),
  email: z
    .string({
      required_error: "Required!",
    })
    .email(),
  mobileNumber: z
    .string({
      required_error: "Required!",
    })
    .regex(phoneRegex, "Invalid Number!"),
  zipCode: z.number({
    required_error: "Required!",
  }),
  city: z.string({
    required_error: "Required!",
  }),
  region: z.string({
    required_error: "Required!",
  }),
  country: z.string({
    required_error: "Required!",
  }),
});
