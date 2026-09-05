"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, CircleAlert, Loader2, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";

type VerificationStatus = "pending" | "checking" | "success" | "error";

interface VerifyEmailContentProps {
  token?: string;
}

export const VerifyEmailContent = ({ token }: VerifyEmailContentProps) => {
  const [status, setStatus] = useState<VerificationStatus>(
    token ? "checking" : "pending",
  );

  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    if (!token) return;

    const verifyEmail = async () => {
      try {
        setStatus("checking");

        /*
         * LATER:
         *
         * const result = await verifyEmailToken(token);
         *
         * if (!result.success) {
         *   setStatus("error");
         *   return;
         * }
         */

        // Temporary mock.
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setStatus("success");
      } catch (error) {
        console.error("Email verification failed:", error);

        setStatus("error");
      }
    };

    verifyEmail();
  }, [token]);

  const handleResend = async () => {
    try {
      setIsResending(true);

      /*
       * LATER:
       *
       * await resendVerificationEmail();
       */

      await new Promise((resolve) => setTimeout(resolve, 1500));
    } catch (error) {
      console.error("Failed to resend verification email:", error);
    } finally {
      setIsResending(false);
    }
  };

  if (status === "checking") {
    return (
      <div className="flex flex-col items-center text-center">
        <div className="mb-5 flex size-14 items-center justify-center rounded-full bg-primary/10">
          <Loader2 className="size-7 animate-spin text-primary" />
        </div>

        <h2 className="text-lg font-semibold">Verifying your email</h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Please wait a moment.
        </p>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center">
        <div className="mb-5 flex size-14 items-center justify-center rounded-full bg-green-500/10">
          <CheckCircle2 className="size-8 text-green-500" />
        </div>

        <h2 className="text-lg font-semibold">Email verified!</h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Your account is ready to use.
        </p>

        <LinkButton href="/dashboard" className="mt-6 w-full">
          Continue to dashboard
        </LinkButton>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="flex flex-col items-center text-center">
        <div className="mb-5 flex size-14 items-center justify-center rounded-full bg-destructive/10">
          <CircleAlert className="size-8 text-destructive" />
        </div>

        <h2 className="text-lg font-semibold">Verification failed</h2>

        <p className="mt-2 text-sm text-muted-foreground">
          This link is invalid or has expired.
        </p>

        <Button
          type="button"
          variant="outline"
          className="mt-6 w-full"
          onClick={handleResend}
          disabled={isResending}
          isLoading={isResending}
        >
          Resend verification email
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-5 flex size-14 items-center justify-center rounded-full bg-primary/10">
        <Mail className="size-7 text-primary" />
      </div>

      <h2 className="text-lg font-semibold">Check your email</h2>

      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        We&apos;ve sent you a verification link. Please verify link to complete
        your account creation.
      </p>

      <Button
        type="button"
        className="mt-6 w-full"
        onClick={handleResend}
        disabled={isResending}
        isLoading={isResending}
      >
        Resend verification email
      </Button>
    </div>
  );
};
