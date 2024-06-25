import { CardData } from "@/types";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

interface ArticleProps {
  article: CardData;
}

export function Article({ article }: ArticleProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <article className="bg-background py-8 md:py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 article-title">{article.title}</h1>
            <div className="flex items-center text-muted-foreground text-sm mb-8">
              <span>Published on {new Date().toLocaleDateString()}</span>
              <span className="mx-2">•</span>
              <span>By Gent Bajko</span>
            </div>
            <div className="prose prose-gray dark:prose-invert">
              <ReactMarkdown
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <div
                        style={{
                          width: "50%",
                          // margin: "0 auto"
                        }}
                      >
                        <SyntaxHighlighter
                          style={tomorrow}
                          language={match[1]}
                          PreTag="div"
                          {...props}
                        >
                          {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
                      </div>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {article.content}
              </ReactMarkdown>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
