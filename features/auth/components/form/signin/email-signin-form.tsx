"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormField } from "@/components/ui/form-field";

import { delay } from "../sign-up-flow";
import {
  emailSigninSchema,
  EmailSigninValues,
} from "@/features/auth/schema/email-signin-schema";

interface EmailSignInFormProps {
  onSwitchToPhone: () => void;
  onBusyChange: (busy: boolean) => void;
  disabled?: boolean;
}

export const EmailSignInForm = ({
  onSwitchToPhone,
  onBusyChange,
  disabled = false,
}: EmailSignInFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailSigninValues>({
    resolver: zodResolver(emailSigninSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: EmailSigninValues) => {
    setIsLoading(true);
    onBusyChange(true);

    try {
      console.log("EMAIL LOGIN:", data);
      await delay(4000);
      // TODO: IMPLEMENT SIGN IN LOGIC
    } catch (error) {
      console.error("Email sign in failed:", error);
    } finally {
      setIsLoading(false);
      onBusyChange(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <FormField label="Email" error={errors.email?.message}>
        <Input
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          disabled={disabled || isLoading}
          {...register("email")}
        />
      </FormField>

      <FormField label="Password" error={errors.password?.message}>
        <Input
          type="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          disabled={disabled || isLoading}
          {...register("password")}
        />
      </FormField>

      <div className="flex justify-end">
        <button
          type="button"
          className="text-xs font-semibold text-muted-foreground hover:underline"
          disabled={disabled || isLoading}
        >
          Forgot password?
        </button>
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={disabled || isLoading}
        isLoading={isLoading}
      >
        Sign In
      </Button>

      <button
        type="button"
        onClick={onSwitchToPhone}
        disabled={disabled || isLoading}
        className="block mx-auto text-xs font-semibold text-muted-foreground hover:underline"
      >
        Use phone number instead
      </button>
    </form>
  );
};
