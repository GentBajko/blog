"use client";

import { Footer } from "@/components";
import { Navbar } from "@/components/Navbar";
import { useSearchParams } from "next/navigation";
import "prismjs/themes/prism-tomorrow.css";
import { useState } from "react";

export default function Editor() {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const searchParams = useSearchParams();

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

  const downloadFiles = async () => {
    try {
      const queries = searchParams ? searchParams.toString() : "";
      const response = await fetch(`/api/download?${queries}`);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "published-files.zip";
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      } else {
        alert("Failed to download files");
      }
    } catch (error) {
      console.error("Error downloading files:", error);
    }
  };

  if (!authenticated) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
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
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <div className="container mx-auto p-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={downloadFiles}
          >
            Download All Files
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
