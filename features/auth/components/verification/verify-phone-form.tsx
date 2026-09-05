"use client";

import { useTransition } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { OTPInput } from "../otp-input";

import { z } from "zod";
import { otpSchema } from "../../schema";
import { LinkButton } from "@/components/ui/link-button";

const verifyPhoneSchema = z.object({
  otp: otpSchema,
});

type VerifyPhoneValues = z.infer<typeof verifyPhoneSchema>;

export const VerifyPhoneForm = () => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyPhoneValues>({
    resolver: zodResolver(verifyPhoneSchema),
    defaultValues: {
      otp: "",
    },
  });

  const handleVerify = (data: VerifyPhoneValues) => {
    startTransition(async () => {
      try {
        // LATER:
        // await verifyPhoneSignupCode(data.otp);

        console.log("VERIFY PHONE OTP:", data.otp);

        // Temporary mock.
        await new Promise((resolve) => setTimeout(resolve, 2000));

        router.push("/dashboard");
      } catch (error) {
        console.error("Phone verification failed:", error);
      }
    });
  };

  const handleResend = () => {
    startTransition(async () => {
      try {
        // LATER:
        // await resendPhoneSignupCode();
      } catch (error) {
        console.error("Failed to resend code:", error);
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit(handleVerify)}
      className="space-y-5"
      noValidate
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-primary/10">
          <span className="text-2xl">📱</span>
        </div>

        <h2 className="text-lg font-semibold">Enter your verification code</h2>

        <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
          We've sent a 6-digit verification code to your phone. Enter it below
          to verify your number and create your account.
        </p>
      </div>

      <Controller
        name="otp"
        control={control}
        render={({ field }) => (
          <OTPInput
            length={6}
            value={field.value}
            onChange={field.onChange}
            error={errors.otp?.message}
            disabled={isPending}
          />
        )}
      />

      <Button
        type="submit"
        className="w-full"
        disabled={isPending}
        isLoading={isPending}
      >
        Verify and create account
      </Button>

      <div className="flex items-center justify-end gap-1 text-center">
        <p className="text-xs text-muted-foreground">
          Didn't receive the code?
        </p>

        <button
          type="button"
          onClick={handleResend}
          disabled={isPending}
          className="text-xs font-semibold text-primary hover:underline disabled:pointer-events-none text-blue-500 disabled:opacity-50"
        >
          Resend
        </button>
      </div>

      <LinkButton href="/sign-up" variant="secondary" className="w-full">
        Change phone number
      </LinkButton>
    </form>
  );
};
