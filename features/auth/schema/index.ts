import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .max(100, "Password must not exceed 100 characters")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/\d/, "Password must contain at least one number")
  .regex(
    /[^A-Za-z0-9]/,
    "Password must contain at least one special character",
  );

export const emailSchema = z
  .string("Email is required")
  .trim()
  .min(1, "Email is required")
  .pipe(z.email("Please enter a valid email address"));

export const phoneSchema = z
  .string("Phone number is required")
  .trim()
  .min(1, "Phone number is required")
  .regex(
    /^(?:(?:\+|00)91[\s-]?)?[6-9]\d{9}$/,
    "Please enter a valid 10-digit Indian phone number",
  );

export const otpSchema = z
  .string("Verification code is required")
  .trim()
  .min(1, "Verification code is required")
  .regex(/^\d{6}$/, "Verification code must be 6 digits");














