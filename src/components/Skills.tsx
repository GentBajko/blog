export function Skills() {
  return (
    <div
      className="dark:prose-invert mx-auto text-center"
      style={{ maxWidth: "80%" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-background rounded-md p-4 shadow-sm">
          <h3 className="text-lg font-medium mb-2 text-center">Languages</h3>
          <p className="text-muted-foreground text-center normal">
            Python, Typescript, Java, C#, Node.js
          </p>
        </div>
        <div className="bg-background rounded-md p-4 shadow-sm">
          <h3 className="text-lg font-medium mb-2 text-center">Frameworks</h3>
          <p className="text-muted-foreground text-center normal">
            FastAPI, Flask, Django, Nest.js, .NET
          </p>
          <br />
          <h3 className="text-lg font-medium mb-2 text-center">Frontend</h3>
          <p className="text-muted-foreground text-center normal">
            React.js, Next.js
          </p>
        </div>
        <div className="bg-background rounded-md p-4 shadow-sm">
          <h3 className="text-lg font-medium mb-2 text-center">
            Tools & Technologies
          </h3>
          <p className="text-muted-foreground text-center normal">
            Git, Docker, Docker Compose, RESTful API Design, Microservices,
            Apache Kafka, AWS, Microsoft Azure, Redis, MongoDB, PostgreSQL
          </p>
        </div>
      </div>
    </div>
  );
}
