import { z } from "zod";
import { emailSchema, passwordSchema } from ".";
import { signupProfileSchema } from "./profile-scheama";


export const emailSignupSchema = z.object({
  email: emailSchema,
  password: passwordSchema,

  ...signupProfileSchema.shape,
});

export type EmailSignupValues = z.infer<typeof emailSignupSchema>;
