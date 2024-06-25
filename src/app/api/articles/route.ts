import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

const articlesDirectory = path.join(process.cwd(), "articles/published");

export function getCardData() {
  const fileNames = fs.readdirSync(articlesDirectory);
  const cardData = fileNames.map((fileName) => {
    const filePath = path.join(articlesDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const title = fileName.replace(/ - .*/, "").replace(".md", "");
    const match = fileName.match(/ - (\d{1,2}-\d{1,2}-\d{4})/);
    const date = match ? match[1] : "";
    const content = fileContent;
    const description = fileContent.split(" ").slice(0, 20).join(" ") + "...";
    const link = `/blog?title=${fileName.replace(".md", "")}`;

    return {
      title,
      description,
      content,
      link,
      date,
    };
  });

  return cardData;
}

export const GET = (req: NextRequest, res: NextResponse) => {
  try {
    const cardData = getCardData();

    if (req.method === "GET") {
      const title = req.nextUrl.searchParams.get("title");
      if (title) {
        console.log(title, cardData);
        const article = cardData.find(
          (article) => `${article.title} - ${article.date}` === title
        );
        if (article) {
          return NextResponse.json(article);
        } else {
          return NextResponse.json({ message: "Article not found" });
        }
      }

      // If no title query parameter is provided, return all card data
      return NextResponse.json(cardData);
    } else {
      return NextResponse.json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" });
  }
};
