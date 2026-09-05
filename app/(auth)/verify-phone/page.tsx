import type { Metadata } from "next";
import { AuthCard } from "@/features/auth/components/auth-card";
import { VerifyPhoneForm } from "@/features/auth/components/verification/verify-phone-form";

export const metadata: Metadata = {
  title: "Verify Your Phone",
  description:
    "Enter the verification code to complete your AuthForge account setup.",
};

const VerifyPhonePage = () => {
  return (
    <main>
      <AuthCard
        showHeader={false}
        footerLabel="Want to use email instead?"
        footerLinkText="Sign Up"
        footerLinkHref="/sign-up"
        showLegalTerms={false}
      >
        <VerifyPhoneForm />
      </AuthCard>
    </main>
  );
};

export default VerifyPhonePage;
