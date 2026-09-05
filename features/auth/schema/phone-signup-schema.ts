import { z } from "zod";
import { signupProfileSchema } from "./profile-scheama";
import { phoneSchema } from ".";

export const phoneSignupSchema = z.object({
  phone: phoneSchema,

  ...signupProfileSchema.shape,
});

export type PhoneSignupValues = z.infer<typeof phoneSignupSchema>;
