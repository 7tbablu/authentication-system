import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface SelectProps extends React.ComponentPropsWithoutRef<"select"> {
  isInvalid?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, isInvalid = false, disabled, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <select
          ref={ref}
          disabled={disabled}
          aria-invalid={isInvalid || props["aria-invalid"]}
          className={cn(
            "flex h-10 w-full appearance-none rounded-md border bg-white px-3 py-2 pr-8 text-sm text-slate-900 shadow-sm transition-colors duration-150 ease-in-out",
            "dark:bg-slate-950 dark:text-slate-100",
            "border-slate-300 dark:border-slate-800",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent dark:focus-visible:ring-blue-400",
            "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-slate-50 dark:disabled:bg-slate-900",
            isInvalid &&
              "border-red-500 focus-visible:ring-red-500 dark:border-red-500 dark:focus-visible:ring-red-400",
            className,
          )}
          {...props}
        >
          {children}
        </select>

        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400">
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    );
  },
);

Select.displayName = "Select";
