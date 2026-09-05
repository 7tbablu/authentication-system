export interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className=" h-[calc(100vh-104px)] flex items-center justify-center">
      <div className="flex-1 flex items-center justify-center p-3 sm:p-10">
        <div className="w-full max-w-md space-y-6">{children}</div>
      </div>
    </main>
  );
}
