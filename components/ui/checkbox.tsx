import { cn } from "@/lib/utils";
import {
  ComponentPropsWithoutRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

export interface CheckboxProps extends Omit<
  ComponentPropsWithoutRef<"input">,
  "type"
> {
  isInvalid?: boolean;
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { className, isInvalid = false, indeterminate = false, disabled, ...props },
    forwardedRef,
  ) => {
    const innerRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(forwardedRef, () => innerRef.current!);

    useEffect(() => {
      if (innerRef.current) {
        innerRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    return (
      <input
        type="checkbox"
        ref={innerRef}
        disabled={disabled}
        aria-invalid={isInvalid || props["aria-invalid"]}
        className={cn(
          "h-4 w-4 shrink-0 rounded border bg-white shadow-sm transition-colors duration-150 ease-in-out cursor-pointer appearance-none",
          "dark:bg-slate-950 dark:border-slate-800",
          "checked:bg-blue-600 checked:border-blue-600 dark:checked:bg-blue-500 dark:checked:border-blue-500",
          "indeterminate:bg-blue-600 indeterminate:border-blue-600 dark:indeterminate:bg-blue-500 dark:indeterminate:border-blue-500",
          'checked:bg-[url("data:image/svg+xml,%3csvg_viewBox=%270_0_16_16%27_fill=%27white%27_xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath_d=%27M12.207_4.793a1_1_0_010_1.414l-5_5a1_1_0_01-1.414_0l-2-2a1_1_0_011.414-1.414L6.5_9.086l4.293-4.293a1_1_0_011.414_0z%27/%3e%3c/svg%3e")]',
          'indeterminate:bg-[url("data:image/svg+xml,%3csvg_viewBox=%270_0_16_16%27_fill=%27white%27_xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath_d=%27M4_8a1_1_0_011-1h6a1_1_0_110_2H5a1_1_0_01-1-1z%27/%3e%3c/svg%3e")]',
          "border-slate-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-slate-100 dark:disabled:bg-slate-900",
          isInvalid &&
            "border-red-500 focus-visible:ring-red-500 dark:border-red-500",
          className,
        )}
        {...props}
      />
    );
  },
);

Checkbox.displayName = "Checkbox";
