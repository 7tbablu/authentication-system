"use client";

import { useState, useTransition } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { PhoneInput } from "../../phone-input";
import { SignupProfileFields } from "./signup-profile-fields";
import { delay } from "../sign-up-flow";
import { phoneSignupSchema, PhoneSignupValues } from "@/features/auth/schema/phone-signup-schema";

interface PhoneSignUpFormProps {
  onSwitchToEmail: () => void;
  onBusyChange: (busy: boolean) => void;
  disabled?: boolean;
}

export const PhoneSignUpForm = ({
  onSwitchToEmail,
  onBusyChange,
  disabled = false,
}: PhoneSignUpFormProps) => {
  const [step, setStep] = useState<"phone" | "profile">("phone");

  const [isPending, startTransition] = useTransition();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PhoneSignupValues>({
    resolver: zodResolver(phoneSignupSchema),
    defaultValues: {
      phone: "",
      firstName: "",
      lastName: "",
    },
  });

  const phoneValue = watch("phone");
  const firstNameValue = watch("firstName");
  const lastNameValue = watch("lastName");
  const profileValue = firstNameValue && lastNameValue;

  const onSubmit = async (data: PhoneSignupValues) => {
    onBusyChange(true);

    startTransition(async () => {
      try {
        // TODO: CALL BETTER AUTH FUNC
        await delay(3000);

        console.log("PHONE SIGNUP DATA:", data);
      } catch (error) {
        console.error("Failed to send phone verification code:", error);
      } finally {
        onBusyChange(false);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {step === "phone" && (
        <>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <PhoneInput
                value={field.value}
                onChange={field.onChange}
                error={errors.phone?.message}
                disabled={disabled || isPending}
              />
            )}
          />
          <Button
            type="button"
            className="w-full"
            onClick={() => setStep("profile")}
            disabled={disabled || !phoneValue}
            isLoading={isPending}
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
            disabled={disabled || isPending}
          />
          <Button
            type="submit"
            className="w-full"
            disabled={disabled || isPending || !profileValue}
            isLoading={isPending}
          >
            Send Verification Code
          </Button>
        </>
      )}

      <button
        type="button"
        onClick={onSwitchToEmail}
        disabled={disabled || isPending}
        className="mx-auto block w-max pt-1 text-center text-xs font-semibold text-muted-foreground hover:underline"
      >
        Use email address instead
      </button>
    </form>
  );
};
