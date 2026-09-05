import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
  isInvalid?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type = "text", isInvalid = false, disabled, ...props },
    ref,
  ) => {
    return (
      <input
        type={type}
        ref={ref}
        disabled={disabled}
        aria-invalid={isInvalid || props["aria-invalid"]}
        className={cn(
          "flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition-colors duration-150 ease-in-out",
          "placeholder:text-slate-400 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500",
          "border-slate-300 dark:border-slate-800",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent dark:focus-visible:ring-blue-400",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-slate-700 dark:file:text-slate-200",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-slate-50 dark:disabled:bg-slate-900",
          isInvalid &&
            "border-red-500 focus-visible:ring-red-500 dark:border-red-500 dark:focus-visible:ring-red-400",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
