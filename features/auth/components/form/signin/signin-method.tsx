"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

interface SignInMethodProps {
  onSelectEmail: () => void;
  onSelectPhone: () => void;
  disabled?: boolean;
}

export const SignInMethod = ({
  onSelectEmail,
  onSelectPhone,
  disabled = false,
}: SignInMethodProps) => {
  return (
    <div className="space-y-3">
      <Button
        type="button"
        variant="outline"
        className="w-full text-blue-600 font-semibold"
        onClick={onSelectEmail}
        disabled={disabled}
      >
        <Mail className="mr-3 size-4.5 " /> Continue with Email
      </Button>

      <Button
        type="button"
        variant="outline"
        className="w-full text-green-600 font-semibold"
        onClick={onSelectPhone}
        disabled={disabled}
      >
      <Phone className="mr-3 size-5"/>  Continue with Phone
      </Button>
    </div>
  );
};
