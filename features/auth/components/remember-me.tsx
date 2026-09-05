import { forwardRef, InputHTMLAttributes } from "react";

export interface RememberMeProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label?: string;
  description?: string;
}

export const RememberMe = forwardRef<HTMLInputElement, RememberMeProps>(
  (
    {
      id = "remember-me",
      label = "Remember me",
      description,
      disabled,
      className = "",
      ...props
    },
    ref,
  ) => {
    return (
      <div className={`flex items-start gap-2.5 ${className}`}>
        <div className="flex items-center h-5">
          <input
            ref={ref}
            id={id}
            type="checkbox"
            disabled={disabled}
            className="w-4 h-4 rounded border-gray-300 dark:border-gray-700 text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 accent-primary"
            {...props}
          />
        </div>
        <div className="text-sm leading-none">
          <label
            htmlFor={id}
            className={`font-medium text-gray-700 dark:text-gray-200 select-none ${
              disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
            }`}
          >
            {label}
          </label>
          {description && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {description}
            </p>
          )}
        </div>
      </div>
    );
  },
);

RememberMe.displayName = "RememberMe";
