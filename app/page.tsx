import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
        <Avatar className="w-16 h-16 mb-12 border-2 border-border">
          <AvatarImage src="https://matsu-theme.vercel.app/matsu.png" />
          <AvatarFallback>MW</AvatarFallback>
        </Avatar>
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold font-serif tracking-tight lg:text-5xl">
            Matsu-theme for shadcn/ui
          </h1>

          <p className="text-xl text-foreground/80">
            Ghibli Studio inspired theme for shadcn/ui made by{" "}
            <a
              target="_blank"
              href="https://x.com/matsugfx"
              className="underline hover:text-primary transition-colors"
            >
              Matt Wierzbicki
            </a>
          </p>

          <p className="text-muted-foreground leading-relaxed">
            This theme is designed to be a modern and clean theme that is easy
            to use and customize. It is inspired by the Ghibli Studio movies and
            features a unique and beautiful color palette and watercolor paper
            texture.
          </p>

          <div className="pt-4 flex flex-col items-center justify-center text-center">
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
        </div>
      </div>
    </div>
  );
}
