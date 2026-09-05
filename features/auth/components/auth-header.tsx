import { cn } from "@/lib/utils";

export interface AuthHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  logo?: React.ReactNode;
}

export function AuthHeader({
  title,
  description,
  logo,
  className,
  ...props
}: AuthHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center space-y-2 text-center",
        className,
      )}
      {...props}
    >
      {logo && (
        <div className="mb-2 flex items-center justify-center">{logo}</div>
      )}
      {title && (
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          {title}
        </h1>
      )}
      {description && (
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}
