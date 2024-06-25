import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Method Not Allowed" });
  }

  const { content, filename } = await req.json();

  const dir = path.join(process.cwd(), "articles/draft");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(path.join(dir, `${filename}.md`), content);

  return NextResponse.json({ message: "Draft saved successfully" });
}
