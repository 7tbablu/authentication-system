import { FormField } from "@/components/ui/form-field";
import {
  ChangeEvent,
  ClipboardEvent,
  KeyboardEvent,
  useEffect,
  useMemo,
  useRef,
} from "react";

export interface OTPInputProps {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  error?: string;
  helperText?: string;
  disabled?: boolean;
}

export function OTPInput({
  length = 6,
  value = "",
  onChange,
  label = "Verification Code",
  error,
  helperText = "Enter the code sent to your device",
  disabled = false,
}: OTPInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Focus and select the first slot as soon as the component renders
  useEffect(() => {
    if (!disabled && inputRefs.current[0]) {
      inputRefs.current[0].focus();
      inputRefs.current[0].select();
    }
  }, [disabled]);

  const digits = useMemo(() => {
    const arr = value.split("");
    return Array.from({ length }, (_, i) => arr[i] || "");
  }, [value, length]);

  const focusInput = (index: number) => {
    if (index >= 0 && index < length) {
      inputRefs.current[index]?.focus();
      inputRefs.current[index]?.select();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const inputVal = e.target.value;
    const digit = inputVal.replace(/\D/g, "").slice(-1);

    const newDigits = [...digits];
    newDigits[index] = digit;
    const newValue = newDigits.join("");

    onChange?.(newValue);

    if (digit && index < length - 1) {
      focusInput(index + 1);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      if (!digits[index] && index > 0) {
        const newDigits = [...digits];
        newDigits[index - 1] = "";
        onChange?.(newDigits.join(""));
        focusInput(index - 1);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      e.preventDefault();
      focusInput(index - 1);
    } else if (e.key === "ArrowRight" && index < length - 1) {
      e.preventDefault();
      focusInput(index + 1);
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, length);

    if (!pastedData) return;

    onChange?.(pastedData);

    const nextIndex = Math.min(pastedData.length, length - 1);
    focusInput(nextIndex);
  };

  return (
    <FormField label={label} error={error} helperText={helperText}>
      <div className="flex gap-2 justify-between max-w-xs">
        {Array.from({ length }).map((_, idx) => (
          <input
            key={idx}
            ref={(el) => {
              inputRefs.current[idx] = el;
            }}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            autoComplete={idx === 0 ? "one-time-code" : "off"}
            value={digits[idx]}
            disabled={disabled}
            onChange={(e) => handleChange(e, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            onPaste={handlePaste}
            className={`w-10 h-10 text-center text-lg font-semibold rounded-md border bg-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:border-0 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
              error
                ? "border-red-500 focus-visible:ring-red-500"
                : "border-input"
            } disabled:cursor-not-allowed disabled:opacity-50`}
            aria-label={`Digit ${idx + 1} of ${length}`}
          />
        ))}
      </div>
    </FormField>
  );
}
