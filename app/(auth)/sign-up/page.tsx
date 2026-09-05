import { Logo } from "@/components/logo";
import { AuthCard } from "@/features/auth/components/auth-card";
import { SignUpFlow } from "@/features/auth/components/form/sign-up-flow";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create an Account",
  description: "Sign up for an AuthForge account to get started.",
};

const signUpPage = () => {
  return (
    <main>
      <AuthCard
        logo={<Logo showText={false} />}
        title="Create an account"
        description="Get started with AuthForge by entering your email or phone number below"
        footerLabel="Already have an account?"
        footerLinkText="Sign in"
        footerLinkHref="/sign-in"
        showHeader
        showLegalTerms
      >
        <SignUpFlow />
      </AuthCard>
    </main>
  );
};

export default signUpPage;
