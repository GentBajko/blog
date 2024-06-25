import { CardData } from "@/types";
import Link from "next/link";

interface AllArticleProps {
  articles: CardData[];
}

export function AllArticles({ articles }: AllArticleProps) {
  return (
    <main className="flex-1">
      <section className="bg-background py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">All Articles</h1>
          <div className="space-y-8">
            {articles.map((article, index) => (
              <div key={index} className="flex flex-col space-y-2">
                <h2 className="text-2xl font-bold">
                  <a href={article.link}>{article.title}</a>
                </h2>
                <div className="flex items-center text-muted-foreground text-sm">
                  <span>Published on {new Date().toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <span>By Gent Bajko</span>{" "}
                  {/* Replace with actual author if available */}
                </div>
                <p className="text-muted-foreground line-clamp-3">
                  {article.description}
                </p>
                <Link
                  href={article.link}
                  className="text-primary hover:underline"
                  prefetch={false}
                >
                  Read more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
