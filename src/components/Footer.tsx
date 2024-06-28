import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="bg-black py-6 fixed bottom-0 w-full h-20 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-full">
        <div className="justify-center text-center">
          <p className="text-white text-sm">
            &copy; 2024 Gent Bajko. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="https://x.com/GentBajko"
            className="text-white hover:text-primary-hover transition-colors"
            prefetch={true}
          >
            <TwitterIcon className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/gentbajko/"
            className="text-white hover:text-primary-hover transition-colors"
            prefetch={true}
          >
            <LinkedinIcon className="w-5 h-5" />
          </Link>
          <Link
            href="https://github.com/GentBajko"
            className="text-white hover:text-primary-hover transition-colors"
            prefetch={true}
          >
            <GithubIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
