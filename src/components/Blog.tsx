import { CardData } from "@/types";

interface ArticleProps {
  article: CardData;
}


export function Article(article: ArticleProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <article className="bg-background py-8 md:py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">{article.article.title}</h1>
            <div className="flex items-center text-muted-foreground text-sm mb-8">
              <span>Published on {new Date().toLocaleDateString()}</span>
              <span className="mx-2">•</span>
              <span>By John Doe</span>
            </div>
            <div className="prose prose-gray dark:prose-invert">
              <p>{article.article.description}</p>
              <p>{article.article.content}</p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
