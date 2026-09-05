"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { EmailInput } from "../../email-input";
import { PasswordInput } from "../../password-input";
import { SignupProfileFields } from "./signup-profile-fields";

import { delay } from "../sign-up-flow";
import {
  emailSignupSchema,
  EmailSignupValues,
} from "@/features/auth/schema/email-signup-schema";

interface EmailSignUpFormProps {
  onSwitchToPhone: () => void;
  onBusyChange: (busy: boolean) => void;
  disabled?: boolean;
}

export const EmailSignUpForm = ({
  onSwitchToPhone,
  onBusyChange,
  disabled = false,
}: EmailSignUpFormProps) => {
  const [step, setStep] = useState<"email" | "password" | "profile">("email");

  const {
    control,
    handleSubmit,
    trigger,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<EmailSignupValues>({
    resolver: zodResolver(emailSignupSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
  });

  const emailValue = watch("email");
  const passwordValue = watch("password");

  const handleEmailContinue = async () => {
    const isValid = await trigger("email");

    if (isValid) {
      setStep("password");
    }
  };

  const handlePasswordContinue = async () => {
    const isValid = await trigger("password");

    if (isValid) {
      setStep("profile");
    }
  };

  const onSubmit = async (data: EmailSignupValues) => {
    onBusyChange(true);

    try {
      await delay(4000);
      // DO ALL ACCOUNT CREATION LOGIC
      console.log("FINAL SIGNUP DATA:", data);
    } catch (error) {
      console.error("Email signup failed:", error);
    } finally {
      onBusyChange(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        {step === "email" && (
          <>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <EmailInput
                  {...field}
                  error={errors.email?.message}
                  disabled={disabled || isSubmitting}
                  placeholder="name@example.com"
                />
              )}
            />

            <Button
              type="button"
              onClick={handleEmailContinue}
              className="w-full"
              disabled={disabled || !emailValue}
            >
              Continue
            </Button>

            <button
              type="button"
              onClick={onSwitchToPhone}
              disabled={disabled || isSubmitting}
              className="w-max mx-auto text-center text-xs font-semibold text-muted-foreground hover:underline pt-1 block"
            >
              Use phone number instead
            </button>
          </>
        )}

        {step === "password" && (
          <>
            <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/40 py-2 rounded-md">
              <span>
                Signing up as:{" "}
                <strong className="text-foreground font-medium">
                  {emailValue}
                </strong>
              </span>

              <button
                type="button"
                onClick={() => setStep("email")}
                disabled={disabled || isSubmitting}
                className="text-blue-600 hover:underline font-semibold"
              >
                Change
              </button>
            </div>

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <PasswordInput
                  {...field}
                  error={errors.password?.message}
                  disabled={disabled || isSubmitting}
                  placeholder="••••••••"
                />
              )}
            />

            <Button
              type="button"
              onClick={handlePasswordContinue}
              className="w-full"
              disabled={disabled || !passwordValue}
            >
              Continue
            </Button>
          </>
        )}

        {step === "profile" && (
          <>
            <SignupProfileFields
              control={control}
              errors={errors}
              disabled={disabled || isSubmitting}
            />

            <Button
              type="submit"
              className="w-full"
              disabled={disabled || isSubmitting}
              isLoading={isSubmitting}
            >
              Create account
            </Button>
          </>
        )}
      </form>
    </>
  );
};
