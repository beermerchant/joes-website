"use client";

import { Button, buttonVariants } from "./button";
import { Card } from "./card";
import { ModeToggle } from "./theme-toggle";

export default function NavigationBar() {
    return (
    <div>
        <Card className="flex flex-row justify-start h-min-12rem w-screen p-5 rounded-none">
            <a
                href="/home"
                className={buttonVariants({ variant: "default" })}
            >
                Home
            </a>
            <Button>about</Button>
            <Button>fun stuff</Button>
            <div className="flex flex-row justify-end w-full">
            <ModeToggle />
            </div>
        </Card>
    </div>
    )
}