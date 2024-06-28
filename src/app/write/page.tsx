"use client";

import { Layout, MarkdownEditor } from "@/components";
import "prismjs/themes/prism-tomorrow.css";
import { useState } from "react";

export default function Editor() {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    if (password === process.env.NEXT_PUBLIC_EDITOR_PASSWORD) {
      setAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  if (!authenticated) {
    return (
      <Layout>
        <div className="flex flex-col h-full justify-center items-center">
          <main className="flex-1 flex items-center justify-center">
            <div className="container mx-auto p-4">
              <h1 className="text-2xl font-bold mb-4">Login</h1>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                className="bg-primary-foreground text-primary py-2 px-4 rounded-full"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </main>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex flex-col">
        <main className="flex-1">
          <section className="bg-background py-8 md:py-12">
            <div className="container mx-auto px-4">
              <MarkdownEditor />
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}
