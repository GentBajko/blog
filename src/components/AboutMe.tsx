import Link from "next/link";
import { ArrowRightIcon } from "./Icons";

export function Skills() {
  return (
    <div
      className="prose prose-gray dark:prose-invert mx-auto text-center pt-4"
      style={{ maxWidth: "80%" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-4 text-center">My Skills</h2>
          <ul className="grid grid-cols-3 gap-4">
            <li className="bg-background rounded-md p-4 shadow-sm">
              <h3 className="text-lg font-medium mb-2">Front-end</h3>
              <p className="text-muted-foreground bg-primary">
                React, Next.js, HTML, CSS, JavaScript
              </p>
            </li>
            <li className="col-start-2 bg-background rounded-md p-4 shadow-sm">
              <h3 className="text-lg font-medium mb-2">Back-end</h3>
              <p className="text-muted-foreground">
                Node.js, Express, Python, Django
              </p>
            </li>
            <li className="bg-background rounded-md p-4 shadow-sm">
              <h3 className="text-lg font-medium mb-2">Data</h3>
              <p className="text-muted-foreground">
                SQL, NoSQL, Data Engineering
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
