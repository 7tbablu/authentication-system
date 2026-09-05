"use client";

import { Control, Controller, FieldErrors, Path } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { FormField } from "@/components/ui/form-field";
import { SignupProfileValues } from "@/features/auth/schema/profile-scheama";


interface SignupProfileFieldsProps<T extends SignupProfileValues> {
  control: Control<T>;
  errors: FieldErrors<T>;
  disabled?: boolean;
}

export const SignupProfileFields = <T extends SignupProfileValues>({
  control,
  errors,
  disabled = false,
}: SignupProfileFieldsProps<T>) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <Controller
        name={"firstName" as Path<T>}
        control={control}
        render={({ field }) => (
          <FormField
            id="first-name"
            label="First name"
            required
            error={errors.firstName?.message as string | undefined}
          >
            <Input
              {...field}
              id="first-name"
              type="text"
              placeholder="John"
              autoComplete="given-name"
              disabled={disabled}
            />
          </FormField>
        )}
      />

      <Controller
        name={"lastName" as Path<T>}
        control={control}
        render={({ field }) => (
          <FormField
            id="last-name"
            label="Last name"
            required
            error={errors.lastName?.message as string | undefined}
          >
            <Input
              {...field}
              id="last-name"
              type="text"
              placeholder="Doe"
              autoComplete="family-name"
              disabled={disabled}
            />
          </FormField>
        )}
      />
    </div>
  );
};
