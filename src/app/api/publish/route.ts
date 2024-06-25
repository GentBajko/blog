import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

function sanitizeFilename(filename: string): string {
  return filename.replace(/[<>:"/\\|?*\x00-\x1F]/g, "-");
}

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 405 }
    );
  }

  try {
    const { content, filename } = await req.json();

    if (!content || !filename) {
      return NextResponse.json({ message: "Invalid data" }, { status: 400 });
    }

    const sanitizedFilename = sanitizeFilename(filename);

    const dir = path.join(process.cwd(), "articles/published");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(path.join(dir, `${sanitizedFilename}.md`), content);

    return NextResponse.json({ message: "File published successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
