import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function CallToAction() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  // @ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const { error, message } = await res.json();
    if (error) {
      setMessage(error);
    } else {
      setMessage(message);
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto px-4 flex justify-center">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">Subscribe to my blog</h1>
        <p className="text-muted-foreground normal">
          Get notified when I post a new article.
        </p>
        <form className="flex gap-2 justify-center" onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button
            className="rounded-xl bg-primary-foreground text-primary hover:bg-primary-hover hover:text-primary-foreground"
            type="submit"
            disabled={loading}
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}
