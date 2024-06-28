import { useState } from "react";
import Link from "next/link";
import { MenuIcon } from "./Icons";
import { Button } from "./ui/button";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-black shadow fixed top-0 w-full h-20 z-50">
      <div className="container mx-auto px-4 py-4 md:py-6 flex items-center justify-between h-full">
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
        <Button
          variant="outline"
          size="sm"
          className="md:hidden"
          onClick={toggleMenu}
        >
          <MenuIcon className="w-5 h-5 text-white" />
        </Button>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-black shadow fixed top-20 w-full z-40">
          <div className="container mx-auto px-4 py-4 flex flex-col items-center space-y-4">
            <Link
              href="/blog"
              className="text-primary hover:text-primary-hover transition-colors"
              prefetch={false}
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-primary-hover transition-colors"
              prefetch={false}
              onClick={() => setMenuOpen(false)}
            >
              About Me
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
