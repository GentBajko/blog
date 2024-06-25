import { NextRequest, NextResponse } from "next/server";
import { getCardData } from "../utils";

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
