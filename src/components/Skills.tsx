export function Skills() {
  return (
    <div
      className="prose prose-gray dark:prose-invert mx-auto text-center pt-4"
      style={{ maxWidth: "80%" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-background rounded-md p-4 shadow-sm">
          <h3 className="text-lg font-medium mb-2 text-center">Front-end</h3>
          <p className="text-muted-foreground text-center normal">
            React, Next.js, HTML, CSS, JavaScript
          </p>
        </div>
        <div className="bg-background rounded-md p-4 shadow-sm">
          <h3 className="text-lg font-medium mb-2 text-center">Back-end</h3>
          <p className="text-muted-foreground text-center normal">
            Node.js, Express, Python, Django
          </p>
        </div>
        <div className="bg-background rounded-md p-4 shadow-sm">
          <h3 className="text-lg font-medium mb-2 text-center">Data</h3>
          <p className="text-muted-foreground text-center normal">
            SQL, NoSQL, Data Engineering
          </p>
        </div>
      </div>
    </div>
  );
}
