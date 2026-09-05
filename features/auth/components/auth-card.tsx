import { cn } from "@/lib/utils";
import { AuthHeader } from "./auth-header";
import { AuthFooter } from "./auth-footer";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ReactNode } from "react";

export interface AuthCardProps {
  title?: string;
  description?: string;
  logo?: ReactNode;
  children: ReactNode;
  showHeader: boolean;
  footerLabel?: string;
  footerLinkText?: string;
  footerLinkHref?: string;
  showLegalTerms?: boolean;
  className?: string;
}

export function AuthCard({
  title,
  description,
  showHeader = true,
  logo,
  children,
  footerLabel,
  footerLinkText,
  footerLinkHref,
  showLegalTerms = true,
  className,
}: AuthCardProps) {
  return (
    <Card className={cn("w-full max-w-md shadow-lg", className)}>
      {showHeader && (
        <CardHeader>
          <AuthHeader logo={logo} title={title} description={description} />
        </CardHeader>
      )}

      <CardContent className="space-y-4">{children}</CardContent>

      <CardFooter className="flex justify-center border-t border-slate-100 pt-4 dark:border-slate-900">
        <AuthFooter
          label={footerLabel}
          linkText={footerLinkText}
          linkHref={footerLinkHref}
          showLegalTerms={showLegalTerms}
        />
      </CardFooter>
    </Card>
  );
}
