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
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface CardComponentProps {
  data: CardData[];
}

export function CardComponent({ data }: CardComponentProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((card, index) => (
        console.log("card", card),
        <Card key={index}>
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>
              {card.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {card.content}
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href={card.link}
              className="inline-flex items-center text-primary hover:underline"
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
};

export default CardComponent;
