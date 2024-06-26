"use client";

import { AllArticles, Article, Layout } from "@/components";
import { CardData } from "@/types";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function BlogContent() {
  const [data, setData] = useState<CardData[]>([]);
  const searchParams = useSearchParams();

  const fetchWithQueryParams = async () => {
    const queries = searchParams ? searchParams.toString() : "";
    try {
      const response = await fetch(`/api/articles?${queries}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const cardData = await response.json();
      setData(cardData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchWithQueryParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <Layout>
      <div className="flex flex-col">
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
      </div>
    </Layout>
  );
}

export default function Blog() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogContent />
    </Suspense>
  );
}
