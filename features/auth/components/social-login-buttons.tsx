import { cn } from "@/lib/utils";
import { GoogleButton } from "./google-button";
import { GithubButton } from "./github-button";
import { useState } from "react";
import { delay } from "./form/sign-up-flow";

interface SocialLoginButtonsProps {
  onBusyChange: (busy: boolean) => void;
  disabled?: boolean;
  showDivider?: boolean;
  dividerText?: string;
  layout?: "grid" | "vertical";
  className?: string;
}

export const SocialLoginButtons = ({
  onBusyChange,
  disabled = false,
  showDivider = true,
  dividerText = "Or continue with",
  layout = "grid",
  className
}: SocialLoginButtonsProps) => {
  const [loadingProvider, setLoadingProvider] = useState<
    "google" | "github" | null
  >(null);

  const handleGoogle = async () => {
    setLoadingProvider("google");
    onBusyChange(true);

    try {
      // await signInWithGoogle();

      // Testing only
      await delay(4000);
    } finally {
      setLoadingProvider(null);
      onBusyChange(false);
    }
  };

  const handleGithub = async () => {
    setLoadingProvider("github");
    onBusyChange(true);

    try {
      // await signInWithGithub();

      // Testing only
      await delay(4000);
    } finally {
      setLoadingProvider(null);
      onBusyChange(false);
    }
  };

  const isLoading = loadingProvider !== null;

  return (
    <div className={cn("space-y-4 w-full", className)}>
      <div
        className={cn(
          layout === "grid"
            ? "grid grid-cols-2 gap-3"
            : "flex flex-col space-y-2",
        )}
      >
        <GoogleButton
          onClick={handleGoogle}
          isLoading={loadingProvider === "google"}
          disabled={disabled || isLoading}
          className="w-full"
        />
        <GithubButton
          onClick={handleGithub}
          isLoading={loadingProvider === "github"}
          disabled={disabled || isLoading}
          className="w-full"
        />
      </div>

      {showDivider && (
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200 dark:border-slate-800" />
          </div>
          <span className="relative bg-white dark:bg-slate-950 px-2 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {dividerText}
          </span>
        </div>
      )}
    </div>
  );
};
