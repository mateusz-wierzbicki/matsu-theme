import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/" className="flex items-center gap-3 font-bold font-serif">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <Avatar>
                <AvatarImage src="https://matsu-theme.vercel.app/matsu.png" />
                <AvatarFallback>MW</AvatarFallback>
              </Avatar>
            </div>
            Matsu Theme
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image
          src="https://matsu-theme.vercel.app/house.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          fill
          sizes="50vw"
          priority
        />
      </div>
    </div>
  );
}
