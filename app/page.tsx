"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Copy, Check } from "lucide-react";

function CopyableCode({ content }: { content: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative flex items-center text-left gap-2 bg-muted p-2 pl-4 rounded-md text-sm group">
      <code>{content}</code>
      <Button variant="outline" size="icon" onClick={copyToClipboard}>
        {copied ? <Check /> : <Copy />}
      </Button>
    </div>
  );
}

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
        <Avatar className="w-16 h-16 mb-12 border-2 border-border">
          <AvatarImage src="https://matsu-theme.vercel.app/matsu.png" />
          <AvatarFallback>MW</AvatarFallback>
        </Avatar>
        <div className="space-y-8">
          <h1 className="text-3xl font-extrabold font-serif tracking-tight lg:text-5xl">
            Matsu-theme for shadcn/ui
          </h1>

          <p className="text-lg lg:text-xl text-foreground/80">
            Ghibli Studio inspired theme for{" "}
            <a
              target="_blank"
              href="https://ui.shadcn.com/"
              className="underline hover:text-primary transition-colors"
            >
              shadcn/ui
            </a>{" "}
            made by{" "}
            <a target="_blank" href="https://x.com/matsugfx">
              Matt Wierzbicki
            </a>
          </p>

          <p className="text-muted-foreground leading-relaxed">
            This theme is designed to be a modern and clean theme that is easy
            to use and customize. It is inspired by the Ghibli Studio movies and
            features a unique and beautiful color palette and watercolor paper
            texture.
          </p>

          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-xl font-semibold font-serif mb-3">
              Example pages
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/login" target="_blank">
                <Button>Login</Button>
              </Link>
              <Link href="/dashboard" target="_blank">
                <Button>Dashboard</Button>
              </Link>
              <Link href="/test" target="_blank">
                <Button>Components</Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-xl font-semibold font-serif mb-3">
              Install theme
            </h2>
            <p className="text-muted-foreground text-sm mb-4">
              This will override the default variables and add classes to your
              globals.css file.
            </p>
            <CopyableCode content="npx shadcn@canary add https://matsu-theme.vercel.app/r/matsu-theme.json" />
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-xl font-semibold font-serif mb-3">
              Install components
            </h2>
            <p className="text-muted-foreground text-sm mb-4">
              This will override the default components with the Matsu Themed
              components.
            </p>
            <CopyableCode content="npx shadcn@canary add https://matsu-theme.vercel.app/r/matsu-theme-components.json" />
          </div>
        </div>
      </div>
    </div>
  );
}
