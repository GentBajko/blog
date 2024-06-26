import { CardData } from "@/types";
import CardComponent from "./CardComponent";

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
            <CardComponent data={articles} />
          </div>
        </div>
      </section>
    </main>
  );
}
