"use client";

import { AllArticles, Article, Footer } from "@/components";
import { Navbar } from "@/components/Navbar";
import { CardData } from "@/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Blog() {
  const [data, setData] = useState<CardData[]>([]);
  const searchParams = useSearchParams();

  const fetchWithQueryParams = async () => {
    const queries = searchParams.toString();
    console.log("Fetching data with queries:", queries);
    try {
      const response = await fetch(`/api/articles?${queries}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const cardData = await response.json();
      setData(cardData);
      console.log("Data fetched successfully:", cardData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchWithQueryParams();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="bg-background py-8 md:py-12">
          <div className="container mx-auto px-4">
            {Array.isArray(data) ? (
              <AllArticles articles={data} />
            ) : (
              <Article article={data} />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
