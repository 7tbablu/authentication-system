import { cn } from "@/lib/utils";

export interface LogoProps {
  showText?: boolean;
  className?: string;
  iconClassName?: string;
}

export const Logo = ({
  showText = true,
  className,
  iconClassName,
}: LogoProps) => (
  <div className={cn("flex items-center gap-3 select-none", className)}>
    <div className="relative flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={cn(
          "absolute h-9 w-9 blur-md opacity-50 text-blue-600 dark:text-cyan-400",
          iconClassName,
        )}
      >
        <path
          d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.8 17 5 19 5a1 1 0 0 1 1 1z"
          fill="currentColor"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className={cn(
          "relative h-9 w-9 shrink-0 drop-shadow-sm",
          iconClassName,
        )}
      >
        <defs>
          <linearGradient
            id="authforge-grad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>

        <path
          d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.8 17 5 19 5a1 1 0 0 1 1 1z"
          className="fill-white dark:fill-slate-900"
        />

        <path
          d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.8 17 5 19 5a1 1 0 0 1 1 1z"
          stroke="url(#authforge-grad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M12 7L7.5 16h2.2l1.1-2.4h2.4l1.1 2.4h2.2L12 7zm-0.1 2.8l0.8 1.8h-1.6l0.8-1.8z"
          fill="url(#authforge-grad)"
        />
      </svg>
    </div>


    {showText && (
      <span className="text-2xl font-extrabold tracking-tight bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
        AuthForge
      </span>
    )}
  </div>
);
