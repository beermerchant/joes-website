"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {useRouter} from "next/navigation";
import FadeIn from "~/components/ui/fade_in";


export default function HomePage() {

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">

      <Card className="flex h-1/3 w-1/3 items-center justify-center">
        <CardHeader>
          <FadeIn><CardTitle>Joe's wonderful web</CardTitle></FadeIn>
        </CardHeader>
      <CardContent>
      </CardContent>
      </Card>
    </div>
  );
}
