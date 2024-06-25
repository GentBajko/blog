import fs from "fs";
import path from "path";

const articlesDirectory = path.join(process.cwd(), "articles/published");

export function getCardData() {
  const fileNames = fs.readdirSync(articlesDirectory);
  const cardData = fileNames.map((fileName) => {
    const filePath = path.join(articlesDirectory, fileName);
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
