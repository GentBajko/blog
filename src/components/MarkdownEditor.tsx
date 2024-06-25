import matter from "gray-matter";
import "prismjs/themes/prism-tomorrow.css";
import React, { useState } from "react";
import { remark } from "remark";
import html from "remark-html";

const MarkdownEditor: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>("");
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [filename, setFilename] = useState<string>("New Post");

  const handleMarkdownChange = async (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const text = event.target.value;
    setMarkdown(text);

    const matterResult = matter(text);
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    setHtmlContent(processedContent.toString());
  };

  const handlePublish = async () => {
    const date = new Date().toLocaleDateString();
    const name = `${filename} - ${date}`;

    const response = await fetch("/api/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: markdown, filename: name }),
    });

    if (response.ok) {
      alert("Post published!");
    } else {
      alert("Failed to publish post");
    }
  };

  const saveDraft = async () => {
    const date = new Date().toLocaleDateString();
    const name = `${filename} - ${date}`;

    await fetch("/api/save-draft", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: markdown, filename: name }),
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Markdown Editor</h1>
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        placeholder="Filename"
        value={filename}
        onChange={(e) => setFilename(e.target.value)}
        onMouseDown={(e) => console.log(filename)}
      />
      <textarea
        className="w-full p-2 border border-gray-300 rounded mb-4"
        rows={10}
        value={markdown}
        onChange={handleMarkdownChange}
        onMouseDown={(e) => saveDraft()}
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
        onClick={handlePublish}
      >
        Publish
      </button>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default MarkdownEditor;
