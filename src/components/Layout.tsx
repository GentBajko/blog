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
      <main className="h-[calc(100vh-160px)] mt-20 hide-scrollbar">
        {children}
      </main>
      <Footer />
    </div>
  );
}
