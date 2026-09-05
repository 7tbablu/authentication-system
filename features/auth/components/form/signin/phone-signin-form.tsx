"use client";

import { useState, useTransition } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { PhoneInput } from "../../phone-input";
import { OTPInput } from "../../otp-input";
import { delay } from "../sign-up-flow";
import { phoneLoginSchema, PhoneLoginValues } from "@/features/auth/schema/phone-signin.schema";

interface PhoneSignInFormProps {
  onSwitchToEmail: () => void;
  onBusyChange: (busy: boolean) => void;
  disabled?: boolean;
}

export const PhoneSignInForm = ({
  onSwitchToEmail,
  onBusyChange,
  disabled = false,
}: PhoneSignInFormProps) => {
  const [step, setStep] = useState<"phone" | "otp">("phone");

  const [isPending, startTransition] = useTransition();

  const {
    control,
    trigger,
    watch,
    formState: { errors },
  } = useForm<PhoneLoginValues>({
    resolver: zodResolver(phoneLoginSchema),
    defaultValues: {
      phone: "",
      otp: "",
    },
  });

  const phoneValue = watch("phone");
  const otpValue = watch("otp");

  const handleSendOTP = async () => {
    const isValid = await trigger("phone");

    if (!isValid) return;

    onBusyChange(true);

    startTransition(async () => {
      try {
        // TODO: IMPLEMENT SEND VERIFICATION LOGIC
        await delay(4000);
        setStep("otp");
      } catch (error) {
        console.error("Failed to send login OTP:", error);
      } finally {
        onBusyChange(false);
      }
    });
  };

  const handleVerifyOTP = async () => {
    const isValid = await trigger("otp");

    if (!isValid) return;

    onBusyChange(true);

    startTransition(async () => {
      try {
        // TODO: VERIFY OTP AND ALLOW LOGIN
        await delay(4000);
        console.log("PHONE LOGIN COMPLETE");
      } catch (error) {
        console.error("Phone sign in failed:", error);
      } finally {
        onBusyChange(false);
      }
    });
  };

  return (
    <form className="space-y-4" noValidate>
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
            onClick={handleSendOTP}
            className="w-full"
            disabled={disabled || !phoneValue || isPending}
            isLoading={isPending}
          >
            Send Verification Code
          </Button>

          <button
            type="button"
            onClick={onSwitchToEmail}
            disabled={disabled || isPending}
            className="block mx-auto text-xs font-semibold text-muted-foreground hover:underline"
          >
            Use email address instead
          </button>
        </>
      )}

      {step === "otp" && (
        <>
          <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/40 py-2 rounded-md">
            <span>
              Code sent to{" "}
              <strong className="text-foreground font-medium">
                {phoneValue}
              </strong>
            </span>

            <button
              type="button"
              onClick={() => setStep("phone")}
              disabled={disabled || isPending}
              className="text-blue-500 hover:underline font-semibold"
            >
              Change
            </button>
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
                disabled={disabled || isPending}
              />
            )}
          />

          <Button
            type="button"
            onClick={handleVerifyOTP}
            className="w-full"
            disabled={disabled || !otpValue || isPending}
            isLoading={isPending}
          >
            Verify & Sign In
          </Button>
        </>
      )}
    </form>
  );
};
