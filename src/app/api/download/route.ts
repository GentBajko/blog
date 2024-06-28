import archiver from "archiver";
import { promises as fs } from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import stream from "stream";
import { promisify } from "util";

const pipeline = promisify(stream.pipeline);

const getFiles = async (draft: boolean = false) => {
  const drafts = draft ? "draft" : "published";
  const publishedDir = path.join(process.cwd(), `articles/${drafts}`);
  const fileNames = await fs.readdir(publishedDir);

  const files = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(publishedDir, fileName);
      const fileContent = await fs.readFile(filePath, "utf-8");
      return { title: fileName, content: fileContent, filePath };
    })
  );

  return files;
};

export const GET = async (req: NextRequest) => {
  try {
    const drafts = req.nextUrl.searchParams.get("drafts") === "true";
    const publishedFiles = await getFiles(drafts);

    const passthrough = new stream.PassThrough();
    const readableStream = new ReadableStream({
      start(controller) {
        passthrough.on("data", (chunk) => controller.enqueue(chunk));
        passthrough.on("end", () => controller.close());
        passthrough.on("error", (err) => controller.error(err));
      },
    });

    const archive = archiver("zip", {
      zlib: { level: 9 },
    });

    archive.pipe(passthrough);

    publishedFiles.forEach((file) => {
      archive.append(file.content, { name: file.title });
    });

    await archive.finalize();

    return new NextResponse(readableStream, {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": "attachment; filename=published-files.zip",
      },
    });
  } catch (error) {
    console.error("Error creating zip:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
