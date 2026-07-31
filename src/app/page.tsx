"use client";


import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { ModeToggle } from "~/components/ui/theme-toggle";

import {useRouter} from "next/navigation";


export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <Card className="flex h-1/3 w-1/3 justify-content items-center justify-center">
        <CardHeader>
          <CardTitle>Joe's wonderful web</CardTitle>
        </CardHeader>
      <CardContent>
      </CardContent>
      </Card>
    </div>
  );
}
