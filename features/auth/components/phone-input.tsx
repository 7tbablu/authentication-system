"use client";

import { Input } from "@/components/ui/input";
import { FormField } from "@/components/ui/form-field";

export interface PhoneInputProps {
  id?: string;
  name?: string;
  label?: string;
  value?: string;
  onChange?: () => void;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

export function PhoneInput({
  id = "phone-number",
  name = "phoneNumber",
  label = "Phone Number",
  value = "",
  onChange,
  error,
  helperText,
  disabled = false,
  required = false,
  className,
}: PhoneInputProps) {
  return (
    <FormField
      id={id}
      label={label}
      required={required}
      error={error}
      helperText={helperText}
      className={className}
    >
      <div className="flex gap-2">
        <div className="flex h-10 items-center gap-1.5 rounded-md  bg-muted px-2.5 text-sm font-medium text-foreground shrink-0 shadow-sm border border-foreground/20">
          {/* Indian Flag SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            className="h-3.5 w-5 rounded-xs object-cover"
            aria-hidden="true"
          >
            <path fill="#f93" d="M0 0h640v160H0z" />
            <path fill="#fff" d="M0 160h640v160H0z" />
            <path fill="#128807" d="M0 320h640v160H0z" />
            <circle
              cx="320"
              cy="240"
              r="60"
              fill="none"
              stroke="#000080"
              strokeWidth="15"
            />
            <g transform="translate(320 240)">
              {Array.from({ length: 12 }).map((_, i) => (
                <line
                  key={i}
                  x1="0"
                  y1="-60"
                  x2="0"
                  y2="60"
                  stroke="#000080"
                  strokeWidth="6"
                  transform={`rotate(${i * 15})`}
                />
              ))}
            </g>
          </svg>
          <span>+91</span>
        </div>

        <Input
          id={id}
          name={name}
          type="tel"
          inputMode="numeric"
          placeholder="9876543210"
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          maxLength={10}
          autoComplete="tel-national"
          className="flex-1"
        />
      </div>
    </FormField>
  );
}
