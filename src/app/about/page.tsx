"use client";

import { Skills, Resume, ContactInfo, Layout } from "@/components";
import Image from "next/image";

export default function About() {
  return (
    <Layout>
      <main className="flex flex-col md:flex-row flex-1 overflow-hidden">
        <div className="md:flex-1 md:overflow-y-scroll md:h-[calc(100vh-160px)] order-2 md:order-1 p-4 md:p-0">
          <Resume />
        </div>
        <div className="bg-background py-4 md:py-6 flex-1 md:fixed-right-0 order-1 md:order-2">
          <div className="text-center">
            <Image
              src="/avatar.jpeg"
              alt="Gent Bajko"
              width={400}
              height={400}
              className="w-1/2 max-w-md mx-auto rounded-full pt-20"
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
