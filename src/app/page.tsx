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
    <div className="flex items-center justify-content">
      <Card className="min-h-full min-w-full">
        <CardHeader>
          <CardTitle>Joe's wonderful web</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
