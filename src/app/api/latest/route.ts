import { NextRequest, NextResponse } from "next/server";
import { getCardData } from "../utils";

export const GET = (req: NextRequest, res: NextResponse) => {
  try {
    const cardData = getCardData();
    const latestArticles = cardData
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);

    return NextResponse.json(latestArticles);
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" });
  }
};
