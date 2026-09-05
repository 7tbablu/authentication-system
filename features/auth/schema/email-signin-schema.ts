import { z } from "zod";
import { emailSchema } from ".";

export const emailSigninSchema = z.object({
  email: emailSchema,

  password: z.string("Password is required").min(1, "Password is required"),

  rememberMe: z.boolean().default(false),
});

export type EmailSigninValues = z.input<typeof emailSigninSchema>;
