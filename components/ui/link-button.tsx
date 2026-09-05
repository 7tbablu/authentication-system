import Link, { type LinkProps } from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface LinkButtonProps
  extends
    LinkProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
}

const variantStyles: Record<NonNullable<LinkButtonProps["variant"]>, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600",

  secondary:
    "bg-slate-200 text-slate-900 hover:bg-slate-300 active:bg-slate-400 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600",

  outline:
    "border border-slate-300 bg-transparent text-slate-700 hover:bg-slate-100 active:bg-slate-200 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800",

  danger:
    "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 dark:bg-red-500 dark:hover:bg-red-600",

  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100 active:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800",
};

const sizeStyles: Record<NonNullable<LinkButtonProps["size"]>, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    { children, className, variant = "primary", size = "md", ...props },
    ref,
  ) => {
    return (
      <Link
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center",
          "rounded-md font-medium",
          "transition-colors duration-150 ease-in-out",
          "select-none",
          "focus-visible:outline-none",
          "focus-visible:ring-2",
          "focus-visible:ring-blue-500",
          "focus-visible:ring-offset-2",
          "dark:focus-visible:ring-offset-slate-900",
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {children}
      </Link>
    );
  },
);

LinkButton.displayName = "LinkButton";
