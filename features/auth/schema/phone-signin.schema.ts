import { z } from "zod";
import { otpSchema, phoneSchema } from ".";

export const phoneLoginSchema = z.object({
  phone: phoneSchema,
  otp: otpSchema,
});

export type PhoneLoginValues = z.infer<typeof phoneLoginSchema>;
