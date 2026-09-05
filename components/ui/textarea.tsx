import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export interface TextareaProps extends ComponentPropsWithoutRef<"textarea"> {
  isInvalid?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, isInvalid = false, disabled, rows = 3, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        disabled={disabled}
        aria-invalid={isInvalid || props["aria-invalid"]}
        className={cn(
          "flex min-h-20 w-full rounded-md border bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition-colors duration-150 ease-in-out",
          "placeholder:text-slate-400 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500",
          "border-slate-300 dark:border-slate-800",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent dark:focus-visible:ring-blue-400",
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

Textarea.displayName = "Textarea";
