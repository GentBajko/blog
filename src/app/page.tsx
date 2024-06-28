"use client";

import { CallToAction, CardComponent, Footer, Layout } from "@/components";
import { Navbar } from "@/components/Navbar";
import { CardData } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<CardData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/latest");
      const cardData = await response.json();
      setData(cardData);
    };

    fetchData();
  }, []);

  return (
    <Layout>
    <div className="flex flex-col">
      <main className="flex-1">
        <section className="bg-background py-8 md:py-12">
          <h1 className="text-4xl font-bold text-center pb-16">
            Welcome to my blog
          </h1>
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Latest Blog Posts
            </h2>
            <CardComponent data={data} />
          </div>
        </section>
        <section className="bg-background py-12 md:py-20">
          <CallToAction />
        </section>
      </main>
    </div>
    </Layout>
  );
}
