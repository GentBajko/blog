import { useSearchParams } from "next/navigation";
import "prismjs/themes/prism-tomorrow.css";
import React, { useEffect, useState } from "react";
import { Article } from "./Blog";

export function MarkdownEditor() {
  const [markdown, setMarkdown] = useState<string>("");
  const [filename, setFilename] = useState<string>("New Post");
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchLatestBlog = async () => {
      try {
        const queries = searchParams ? searchParams.toString() : "";
        const response = await fetch(`/api/latest?${queries}`);
        if (response.ok) {
          const data = await response.json();
          const latestBlog = data[0];
          setFilename(latestBlog.title);
          setMarkdown(latestBlog.content);
        } else {
          console.error("Failed to fetch latest blog");
        }
      } catch (error) {
        console.error("Error fetching latest blog:", error);
      }
    };

    fetchLatestBlog();
  }, [searchParams]);

  const handleMarkdownChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const text = event.target.value;
    setMarkdown(text);
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
      />
      <textarea
        className="w-full p-2 border border-gray-300 rounded mb-4"
        rows={10}
        value={markdown}
        onChange={handleMarkdownChange}
        onMouseDown={(e) => saveDraft()}
      />
      <button
        className="bg-primary-foreground text-primary py-2 px-4 rounded-full"
        onClick={handlePublish}
      >
        Publish
      </button>
      <Article
        article={{
          title: filename,
          content: markdown,
          description: "",
          link: "",
          date: new Date().toLocaleDateString(),
        }}
      />
    </div>
  );
}

export default MarkdownEditor;
