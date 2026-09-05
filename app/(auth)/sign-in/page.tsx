import { Logo } from "@/components/logo";
import { AuthCard } from "@/features/auth/components/auth-card";
import { SignInFlow } from "@/features/auth/components/form/signin/signin-flow";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account to continue.",
};

const SignInPage = () => {
  return (
    <main>
      <AuthCard
        title="Welcome back"
        logo={<Logo showText={false} />}
        description="Sign in with your email or phone number to continue to your workspace"
        footerLabel="Don't have an account?"
        footerLinkText="Sign up"
        footerLinkHref="/sign-up"
        showHeader
        showLegalTerms
      >
        <SignInFlow />
      </AuthCard>
    </main>
  );
};

export default SignInPage;
