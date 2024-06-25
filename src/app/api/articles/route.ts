import { CardData } from "@/types";
import { NextRequest, NextResponse } from "next/server";

// cardData.ts
export const cardData: CardData[] = [
  {
    title: "Mastering React Hooks",
    description:
      "Dive into the power of React Hooks and learn how to leverage them in your projects.",
    content:
      "Explore the most popular React Hooks and how to use them effectively to build modern, efficient web applications.",
    link: "#",
  },
  {
    title: "Optimizing Web Performance",
    description:
      "Learn techniques to improve the speed and responsiveness of your web applications.",
    content:
      "Discover practical strategies to optimize your web application's performance, from code optimization to effective asset management.",
    link: "#",
  },
  {
    title: "Intro to Data Visualization",
    description:
      "Explore the fundamentals of data visualization and how to create effective charts and graphs.",
    content:
      "Learn the principles of data visualization, the best practices, and how to choose the right chart type for your data.",
    link: "#",
  },
];

export const GET = (req: NextRequest, res: NextResponse) => {
  try {
    req.nextUrl.searchParams.get("title");
    if (req.method === "GET") {
      if (req.nextUrl && req.nextUrl.searchParams.get("title")) {
        const title = req.nextUrl.searchParams.get("title");
        const article = cardData.find((article) => article.title === title);
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
