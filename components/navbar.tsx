import Link from "next/link";
import { Button } from "./ui/button";
import { Logo } from "./logo";

export const Navbar = () => {
  return (
    <nav className="flex items-center h-14 shadow-sm justify-between px-24">
      <div className="flex items-center -z-10">
        <Logo />
      </div>
      <div className="space-x-3">
        <Button variant="primary">
          <Link href="/sign-in">Login</Link>
        </Button>
        <Button variant="secondary">
          <Link href="/sign-up">Register</Link>
        </Button>
      </div>
    </nav>
  );
};
