import fs from "fs";
import path from "path";

const publishedDir = path.join(process.cwd(), "articles/published");
const draftsDir = path.join(process.cwd(), "articles/drafts");

export function getCardData(drafts = false) {
  const fileNames = drafts ? fs.readdirSync(draftsDir) : fs.readdirSync(publishedDir);
  const cardData = fileNames.map((fileName) => {
    const filePath = path.join(publishedDir, fileName);
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
