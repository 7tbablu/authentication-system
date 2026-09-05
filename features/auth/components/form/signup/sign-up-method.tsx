"use client";

import { Button } from "@/components/ui/button";
import { ArrowBigRight, ArrowRight, Mail, Phone } from "lucide-react";

interface SignupMethodProps {
  onSelectEmail: () => void;
  onSelectPhone: () => void;
  disabled?: boolean;
}

export const SignupMethod = ({
  onSelectEmail,
  onSelectPhone,
  disabled = false,
}: SignupMethodProps) => {
  return (
    <div className="space-y-3">
      {/* EMAIL */}
      <Button
        type="button"
        variant="outline"
        onClick={onSelectEmail}
        disabled={disabled}
        className="group h-auto w-full justify-between px-4 py-3.5"
      >
        <span className="flex items-center gap-3">
          {/* EMAIL ICON*/}
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
            <Mail className="mr-3 size-5 text-blue-600" />
          </span>

          <span className="flex flex-col items-start gap-0.5">
            <span className="text-sm font-semibold text-blue-600">Continue with email</span>
            <span className="text-xs font-normal text-muted-foreground">
              Use your email address
            </span>
          </span>
        </span>

        {/* Arrow */}
        <ArrowRight className="group-hover:translate-x-1.5 transition-transform duration-200" />
      </Button>

      {/* PHONE */}
      <Button
        type="button"
        variant="outline"
        onClick={onSelectPhone}
        disabled={disabled}
        className="group h-auto w-full justify-between px-4 py-3.5"
      >
        <span className="flex items-center gap-3">
          {/* PHONE ICON */}
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
            <Phone className="mr-3 size-5 text-green-600" />
          </span>

          <span className="flex flex-col items-start gap-0.5">
            <span className="text-sm font-semibold text-green-600">Continue with phone</span>
            <span className="text-xs font-normal text-muted-foreground">
              Use your mobile number
            </span>
          </span>
        </span>

        {/* ARROW */}
        <ArrowRight className="group-hover:translate-x-1.5 transition-transform duration-200" />
      </Button>
    </div>
  );
};
