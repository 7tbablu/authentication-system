import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface LabelProps extends React.ComponentPropsWithoutRef<"label"> {
  disabled?: boolean;
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, disabled, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "text-sm font-medium leading-none text-slate-900 dark:text-slate-100 select-none",
          disabled && "cursor-not-allowed opacity-50",
          className,
        )}
        {...props}
      >
        {children}
      </label>
    );
  },
);

Label.displayName = "Label";
