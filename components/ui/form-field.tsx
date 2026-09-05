export interface FormFieldProps {
  id?: string;
  label?: string;
  required?: boolean;
  error?: string;
  helperText?: string;
  children: React.ReactNode;
  className?: string;
}

export function FormField({
  id,
  label,
  required = false,
  error,
  helperText,
  children,
  className = "",
}: FormFieldProps) {
  const errorId = id ? `${id}-error` : undefined;
  const helperId = id ? `${id}-helper` : undefined;

  return (
    <div className={`space-y-1.5 flex flex-col ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          {label}
          {required && (
            <span className="text-red-500 ml-1 aria-hidden:true">*</span>
          )}
        </label>
      )}

      <div>{children}</div>

      {error ? (
        <p id={errorId} className="text-sm text-red-500 font-medium">
          {error}
        </p>
      ) : helperText ? (
        <p id={helperId} className="text-sm text-gray-500 dark:text-gray-400">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
