import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import archiver from "archiver";
import stream from "stream";
import { promisify } from "util";

const pipeline = promisify(stream.pipeline);

const getPublishedFiles = async () => {
  const publishedDir = path.join(process.cwd(), "articles/published");
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
    if (req.method !== "GET") {
      return NextResponse.json(
        { message: "Method Not Allowed" },
        { status: 405 }
      );
    }

    const publishedFiles = await getPublishedFiles();

    // Create a pass-through stream to send the zip file to the client
    const passthrough = new stream.PassThrough();
    const archive = archiver("zip", {
      zlib: { level: 9 }, // Sets the compression level.
    });

    // Pipe the archive data to the passthrough stream
    archive.pipe(passthrough);

    // Append files to the archive
    publishedFiles.forEach((file) => {
      archive.append(file.content, { name: file.title });
    });

    // Finalize the archive
    await archive.finalize();

    // Set response headers
    const response = new NextResponse(passthrough, {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": "attachment; filename=published-files.zip",
      },
    });

    return response;
  } catch (error) {
    console.error("Error creating zip:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
