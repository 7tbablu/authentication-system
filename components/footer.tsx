import { brandName } from "@/lib/constant";

export const Footer = () => {
  return (
    <footer className="relative w-max mx-auto h-12 flex items-center justify-between text-xs text-zinc-500">
      <p>
        &copy; {new Date().getFullYear()} {brandName}. All rights reserved.
      </p>
    </footer>
  );
};
