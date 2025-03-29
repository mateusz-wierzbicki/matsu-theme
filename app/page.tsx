import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left column - Text content */}
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold font-serif tracking-tight lg:text-5xl">
            Matsu-theme for shadcn/ui
          </h1>

          <p className="text-xl text-foreground/80">
            Ghibli Studio style inspired theme for shadcn/ui made by{" "}
            <a
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

          <div className="pt-4">
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

        {/* Right column - Image */}
        <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/house.png"
            alt="Matsu Theme Illustration"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
