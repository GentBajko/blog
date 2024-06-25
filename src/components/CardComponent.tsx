// CardComponent.tsx
import { CardData } from "@/types";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

interface CardComponentProps {
  data: CardData[];
}

export function CardComponent({ data }: CardComponentProps) {
  // Sort the data by date in descending order
  const sortedData = [...data].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {sortedData.map((card, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>
              <Link
                href={card.link}
                className="text-primary-foreground hover:underline"
                prefetch={false}
              >
                {card.title}
              </Link>
            </CardTitle>
            <div className="flex items-center text-muted-foreground text-sm">
              <span>
                Published on {new Date(card.date).toLocaleDateString()}
              </span>
              <span className="mx-2">•</span>
              <span>By Gent Bajko</span>{" "}
              {/* Replace with actual author if available */}
            </div>
            <br />
            <CardDescription>{card.description}</CardDescription>
          </CardHeader>
          <CardFooter>
            <Link
              href={card.link}
              className="inline-flex items-center text-primary-foreground hover:underline"
              prefetch={false}
            >
              Read more
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default CardComponent;
