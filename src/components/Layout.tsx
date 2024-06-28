import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex flex-col">
      <Navbar />
      <main className="pt-16 pb-16">{children}</main>
      <Footer />
    </div>
  );
}

