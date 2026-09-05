"use client";

import { useState } from "react";
import { SocialLoginButtons } from "../../social-login-buttons";
import { SignInMethod } from "./signin-method";
import { EmailSignInForm } from "./email-signin-form";
import { PhoneSignInForm } from "./phone-signin-form";

type SignInMethodType = "email" | "phone";

export const SignInFlow = () => {
  const [method, setMethod] = useState<SignInMethodType | null>(null);
  const [isBusy, setIsBusy] = useState(false);

  const handleBusyChange = (busy: boolean) => {
    setIsBusy(busy);
  };

  const handleSwitchToEmail = () => {
    if (isBusy) return;
    setMethod("email");
  };

  const handleSwitchToPhone = () => {
    if (isBusy) return;
    setMethod("phone");
  };

  return (
    <div className="space-y-6">
      {/* SOCIAL LOGIN */}
      <SocialLoginButtons disabled={isBusy} onBusyChange={handleBusyChange} />

      {/* EMAIL / PHONE */}
      {method === null && (
        <SignInMethod
          disabled={isBusy}
          onSelectEmail={handleSwitchToEmail}
          onSelectPhone={handleSwitchToPhone}
        />
      )}

      {method === "email" && (
        <EmailSignInForm
          disabled={isBusy}
          onBusyChange={handleBusyChange}
          onSwitchToPhone={handleSwitchToPhone}
        />
      )}

      {method === "phone" && (
        <PhoneSignInForm
          disabled={isBusy}
          onBusyChange={handleBusyChange}
          onSwitchToEmail={handleSwitchToEmail}
        />
      )}
    </div>
  );
};
