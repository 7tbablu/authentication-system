import { cn } from "@/lib/utils";

export interface AuthFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  linkText?: string;
  linkHref?: string;
  showLegalTerms?: boolean;
}

export function AuthFooter({
  label,
  linkText,
  linkHref = "#",
  showLegalTerms = true,
  className,
  ...props
}: AuthFooterProps) {
  return (
    <div
      className={cn("flex flex-col space-y-4 text-center text-xs", className)}
      {...props}
    >
      {label && linkText && (
        <p className="text-slate-600 dark:text-slate-400">
          {label}{" "}
          <a
            href={linkHref}
         
            className="font-semibold text-blue-600 underline-offset-4 hover:underline dark:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
          >
            {linkText}
          </a>
        </p>
      )}

      {showLegalTerms && (
        <p className="text-slate-500 dark:text-slate-500">
          By continuing, you agree to our{" "}
          <a
            href="/terms"
            className="underline underline-offset-4 hover:text-slate-800 dark:hover:text-slate-300"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="/privacy"
            className="underline underline-offset-4 hover:text-slate-800 dark:hover:text-slate-300"
          >
            Privacy Policy
          </a>
          .
        </p>
      )}
    </div>
  );
}
