import { z } from "zod";

export const accounTypeSchema = z.object({
  id: z.string().optional(),
  accountType: z.string().min(1, { message: "Required!" }),
  modules: z.object({
    accounting: z.string().array(),
    calendar: z.string().array(),
    inventory: z.string().array(),
    patientRecords: z.string().array(),
    procedure: z.string().array(),
  }),
});
