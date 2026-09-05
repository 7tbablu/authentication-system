import { Input } from "@/components/ui/input";
import { FormField } from "@/components/ui/form-field";
import { forwardRef } from "react";

export interface EmailInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(
  (
    {
      id = "email",
      label = "Email Address",
      error,
      helperText,
      required,
      ...props
    },
    ref,
  ) => {
    return (
      <FormField
        id={id}
        label={label}
        required={required}
        error={error}
        helperText={helperText}
      >
        <Input
          ref={ref}
          id={id}
          type="email"
          autoComplete="email"
          placeholder="name@example.com"
          required={required}
          {...props}
        />
      </FormField>
    );
  },
);

EmailInput.displayName = "EmailInput";
