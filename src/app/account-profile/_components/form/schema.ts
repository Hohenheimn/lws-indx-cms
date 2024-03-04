import { z } from "zod";

const requiredError = "Required!";
export const AccountProfileSchema = z.object({
  id: z.string().optional(),
  profileUrl: z.string().optional(),
  firstName: z.string().min(1, { message: requiredError }),
  middleName: z.string().min(1, { message: requiredError }),
  lastName: z.string().min(1, { message: requiredError }),
  accountType: z.string().min(1, { message: requiredError }),
  email: z.string().email().min(1, { message: requiredError }),
  mobileNo: z.string().min(1, { message: requiredError }),
  newPassword: z.string().min(1, { message: requiredError }),
  confirmPassword: z.string().min(1, { message: requiredError }),
});
