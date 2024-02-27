import { z } from "zod";

const MAX_FILE_SIZE = 2000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const requiredError = "Required!";
export const doctorManagementSchema = z.object({
  id: z.string().optional(),
  profileUrl: z.string().optional(),
  firstName: z.string().min(1, { message: requiredError }),
  middleName: z.string().min(1, { message: requiredError }),
  lastName: z.string().min(1, { message: requiredError }),
  email: z.string().email().min(1, { message: requiredError }),
  landline: z.string().min(1, { message: requiredError }),
  mobileNo: z.string().min(1, { message: requiredError }),
  birthDate: z.string().min(1, { message: requiredError }),
  age: z.number({
    required_error: requiredError,
    invalid_type_error: "Invalid number",
  }),
  civilStatus: z.string().min(1, { message: requiredError }),
  clinicName: z.string().min(1, { message: requiredError }),
  street: z.string().min(1, { message: requiredError }),
  zipCode: z.string().min(1, { message: requiredError }),
  city: z.string().min(1, { message: requiredError }),
  region: z.string().min(1, { message: requiredError }),
  country: z.string().min(1, { message: requiredError }),
  licenseNumber: z.string().min(1, { message: requiredError }),
  ptrNumber: z.string().min(1, { message: requiredError }),
  s2LicenseNumber: z.string().min(1, { message: requiredError }),
});
//optional validation if there is no id in form
export const profileSchema = {
  profile: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 2MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
};
