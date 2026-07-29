"use client";

import TextChange from "./text"
import {
  Card,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";


export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <Card className="flex h-1/3 w-1/3 justify-content items-center justify-center">
        <CardHeader>
          <CardTitle>Joe's wonderful web</CardTitle>
          <TextChange />
        </CardHeader>
      </Card>
    </div>
  );
}
