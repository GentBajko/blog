import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

function sanitizeFilename(filename: string): string {
  return filename.replace(/[<>:"/\\|?*\x00-\x1F]/g, "-");
}

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Method Not Allowed" });
  }

  const { content, filename } = await req.json();

  // Sanitize the filename to avoid invalid characters
  const sanitizedFilename = sanitizeFilename(filename);

  const dir = path.join(process.cwd(), "articles/draft");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(path.join(dir, `${sanitizedFilename}.md`), content);

  return NextResponse.json({ message: "Draft saved successfully" });
}
