"use client";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";



export default function HomePage() {
  return (
    <div>
      <Card className="w-full h-full justify-content items-center">
        <CardHeader>
          <CardTitle>Joe's wonderful web</CardTitle>
        </CardHeader>
      </Card>
      <Card className="w-full h-full justify-content items-center">
        hello
      </Card>
    </div>
  );
}
