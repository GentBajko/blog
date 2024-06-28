import Link from "next/link";
import { MenuIcon } from "./Icons";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <header className="bg-black shadow fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 md:py-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-primary transition-colors"
          prefetch={false}
        >
          Gent Bajko
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/blog"
            className="text-primary hover:text-primary-hover transition-colors"
            prefetch={false}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-primary-hover transition-colors"
            prefetch={false}
          >
            About Me
          </Link>
        </nav>
        <Button variant="outline" size="sm" className="md:hidden">
          <MenuIcon className="w-5 h-5 text-white" />
        </Button>
      </div>
    </header>
  );
}
