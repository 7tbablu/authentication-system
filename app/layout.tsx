import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "AuthForge", template: "%s | AuthForge" },
  description:
    "A production-grade authentication system built with Next.js and Better Auth.",
  applicationName: "AuthForge",
  keywords: [
    "AuthForge",
    "authentication",
    "Next.js authentication",
    "Better Auth",
    "Next.js 16",
    "TypeScript",
    "OAuth",
    "secure authentication",
  ],
  authors: [{ name: "AuthForge" }],
  creator: "AuthForge",
  generator: "Next.js",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
