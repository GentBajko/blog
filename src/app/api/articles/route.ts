import { NextRequest, NextResponse } from "next/server";
import { getCardData } from "../utils";

export const GET = (req: NextRequest, res: NextResponse) => {
  try {
    const cardData = getCardData();

    if (req.method === "GET") {
      const title = req.nextUrl.searchParams.get("title");
      if (title) {
        const article = cardData.find(
          (article) => `${article.title} - ${article.date}` === title
        );
        if (article) {
          return NextResponse.json(article);
        } else {
          return NextResponse.json({ message: "Article not found" });
        }
      }

      const sortedCardData = cardData.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      return NextResponse.json(sortedCardData);
    } else {
      return NextResponse.json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" });
  }
};
