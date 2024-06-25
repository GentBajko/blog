import { useState } from "react";
import MarkdownEditor from "./MarkdownEditor";

const EditorPage: React.FC = () => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    if (password === process.env.NEXT_PUBLIC_EDITOR_PASSWORD) {
      setAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  if (!authenticated) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <input
          type="password"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    );
  }

  return <MarkdownEditor />;
};

export default EditorPage;
