import { AlertCircle, X } from "lucide-react";

export interface AuthErrorProps {
  message?: string | null;
  onDismiss?: () => void;
  className?: string;
}

export function AuthError({
  message,
  onDismiss,
  className = "",
}: AuthErrorProps) {
  if (!message) return null;

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={`flex items-start gap-3 p-3.5 text-sm rounded-md border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/40 text-red-800 dark:text-red-300 ${className}`}
    >
      <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />

      <div className="flex-1 font-medium">{message}</div>

      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          className="text-red-500 hover:text-red-700 dark:hover:text-red-200 rounded-md p-0.5 focus:outline-none focus:ring-2 focus:ring-red-400"
          aria-label="Dismiss error message"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
