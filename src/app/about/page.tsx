"use client";

import { Skills, Resume, ContactInfo, Layout } from "@/components";
import Image from "next/image";

export default function About() {
  return (
    <Layout>
      <main className="flex flex-1 h-screen overflow-hidden">
        <div className="flex-1 overflow-y-scroll overflow-hidden">
          <Resume />
        </div>
        <div className="bg-background py-4 md:py-6 flex-1 fixed-right-0">
          <div className="text-center">
            <Image
              src="/avatar.jpeg"
              alt="Gent Bajko"
              width={400}
              height={400}
              className="w-1/2 max-w-md mx-auto rounded-full"
            />
          </div>
          <div className="bg-background h-full w-full">
            <div className="flex justify-center">
              <ContactInfo />
            </div>
            <div className="flex justify-center">
              <Skills />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
