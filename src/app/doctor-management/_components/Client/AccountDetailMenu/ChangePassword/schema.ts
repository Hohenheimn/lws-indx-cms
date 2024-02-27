import { z } from "zod";

export const changePasswordSchema = z
  .object({
    newPassword: z.string().min(1, { message: "Required!" }),
    confirmNewPassword: z.string().min(1, { message: "Required!" }),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match",
    path: ["confirmNewPassword"],
  });
