import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function CallToAction() {
  return (
    <div className="container mx-auto px-4 flex justify-center">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">Welcome to my personal blog</h1>
        <p className="text-muted-foreground">
          Explore my thoughts, experiences, and insights on various topics.
        </p>
        <form className="flex gap-2 justify-center">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1"
          />
          <Button
            className="rounded-xl bg-primary-foreground text-primary hover:bg-primary-hover hover:text-primary-foreground"
            type="submit"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
}
