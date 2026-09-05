import type { Metadata } from "next";

import { AuthCard } from "@/features/auth/components/auth-card";
import { VerifyEmailContent } from "@/features/auth/components/verification/verification-content";

export const metadata: Metadata = {
  title: "Verify Your Email",
  description:
    "Verify your email address to complete your AuthForge account setup.",
};

interface VerifyEmailPageProps {
  searchParams: Promise<{
    token?: string;
  }>;
}

const VerifyEmailPage = async ({ searchParams }: VerifyEmailPageProps) => {
  const { token } = await searchParams;

  return (
    <main>
      <AuthCard
        showHeader={false}
        footerLabel="Already verified?"
        footerLinkText="Sign in"
        footerLinkHref="/sign-in"
        showLegalTerms={false}
      >
        <VerifyEmailContent token={token} />
      </AuthCard>
    </main>
  );
};

export default VerifyEmailPage;
