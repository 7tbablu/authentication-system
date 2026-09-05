"use client";

import { useEffect, useState } from "react";
import { EmailSignUpForm } from "./signup/email-signup-form";
import { PhoneSignUpForm } from "./signup/phone-signup-form";
import { SignupMethod } from "./signup/sign-up-method";
import { SocialLoginButtons } from "../social-login-buttons";

type SignupMethodType = "email" | "phone";
type SignupRequest = "social" | "email" | "phone" | null;

// THIS SHOULD REMOVE LATER
export const delay = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

export const SignUpFlow = () => {
  const [method, setMethod] = useState<SignupMethodType | null>(null);
  const [activeRequest, setActiveRequest] = useState<SignupRequest>(null);

  const isBusy = activeRequest !== null;
  useEffect(() => {
    console.log("PAGE RENDERED");
  }, [method, activeRequest]);

  return (
    <div className="space-y-6">
      {/* SOCIAL LOGIN */}
      <SocialLoginButtons
        disabled={isBusy}
        onBusyChange={(busy) => {
          setActiveRequest(busy ? "social" : null);
        }}
      />

      {/* EMAIL / PHONE METHOD SELECTION */}
      {method === null && (
        <SignupMethod
          disabled={isBusy}
          onSelectEmail={() => setMethod("email")}
          onSelectPhone={() => setMethod("phone")}
        />
      )}

      {/* EMAIL SIGNUP */}
      {method === "email" && (
        <EmailSignUpForm
          onSwitchToPhone={() => {
            setActiveRequest(null);
            setMethod("phone");
          }}
          disabled={isBusy}
          onBusyChange={(busy) => {
            setActiveRequest(busy ? "email" : null);
          }}
        />
      )}

      {/* PHONE SIGNUP */}
      {method === "phone" && (
        <PhoneSignUpForm
          disabled={isBusy}
          onSwitchToEmail={() => {
            setMethod("email");
          }}
          onBusyChange={(busy) => {
            setActiveRequest(busy ? "phone" : null);
          }}
        />
      )}
    </div>
  );
};
