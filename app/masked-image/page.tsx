"use client";

import { MaskedImage } from "@/components/ui/masked-image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
function CopyableCode({ content }: { content: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative flex text-left gap-2 bg-muted p-2 pl-4 rounded-md text-sm !font-[500] max-w-full border border-border">
      <code className="whitespace-pre-line w-full">{content}</code>
      <Button variant="outline" size="icon" onClick={copyToClipboard}>
        {copied ? <Check /> : <Copy />}
      </Button>
    </div>
  );
}

export default function Page() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-6 space-y-12">
        <h2 className="text-3xl font-bold font-serif mb-6">Masked Image</h2>
        <p>
          The MaskedImage component is a reusable UI element that displays
          images with custom mask shapes. It's built on top of Next.js's Image
          component and supports various mask shape variants.
        </p>
        <div className="space-y-6">
          <h4 className="font-bold font-serif text-2xl">Installation</h4>
          <p>
            Make sure you have the latest version (4.1.3+) of Tailwind CSS
            installed.
          </p>
          <CopyableCode
            content={`npx shadcn@latest add https://matsu-theme.vercel.app/r/masked-image.json`}
          />
        </div>
        <div className="space-y-6">
          <h4 className="font-bold font-serif text-2xl">Usage</h4>
          <CopyableCode
            content={`import { MaskedImage } from "@/components/ui/masked-image";

// With a specific mask shape variant
<MaskedImage 
  src="/path/to/image.jpg" 
  alt="Description" 
  width={500} 
  height={500} 
  variant="shape3" 
/>`}
          />
        </div>

        <div>
          <h4 className="font-bold font-serif text-2xl mb-6">
            Available Mask Variants
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent>
                <MaskedImage
                  variant="shape1"
                  className="aspect-square w-full"
                  src="/house.png"
                  alt="House"
                  width={500}
                  height={500}
                />
              </CardContent>
              <CardFooter>shape1</CardFooter>
            </Card>
            <Card>
              <CardContent>
                <MaskedImage
                  variant="shape2"
                  className="aspect-square w-full"
                  src="/house.png"
                  alt="House"
                  width={500}
                  height={500}
                />
              </CardContent>
              <CardFooter>shape2</CardFooter>
            </Card>
            <Card>
              <CardContent>
                <MaskedImage
                  variant="shape3"
                  className="aspect-square w-full"
                  src="/house.png"
                  alt="House"
                  width={500}
                  height={500}
                />
              </CardContent>
              <CardFooter>shape3</CardFooter>
            </Card>
            <Card>
              <CardContent>
                <MaskedImage
                  variant="shape4"
                  className="aspect-square w-full"
                  src="/house.png"
                  alt="House"
                  width={500}
                  height={500}
                />
              </CardContent>
              <CardFooter>shape4</CardFooter>
            </Card>
            <Card>
              <CardContent>
                <MaskedImage
                  variant="shape5"
                  className="aspect-square w-full"
                  src="/house.png"
                  alt="House"
                  width={500}
                  height={500}
                />
              </CardContent>
              <CardFooter>shape5</CardFooter>
            </Card>
            <Card>
              <CardContent>
                <MaskedImage
                  variant="shape6"
                  className="aspect-square w-full"
                  src="/house.png"
                  alt="House"
                  width={500}
                  height={500}
                />
              </CardContent>
              <CardFooter>shape6</CardFooter>
            </Card>
          </div>
        </div>
        <div>
          <h4 className="font-bold font-serif text-2xl mb-6">Props</h4>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Prop</th>
                <th className="border p-2">Type</th>
                <th className="border p-2">Default</th>
                <th className="border p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">
                  <code>src</code>
                </td>
                <td className="border p-2">string</td>
                <td className="border p-2">(required)</td>
                <td className="border p-2">The source URL of the image</td>
              </tr>
              <tr>
                <td className="border p-2">
                  <code>alt</code>
                </td>
                <td className="border p-2">string</td>
                <td className="border p-2">(required)</td>
                <td className="border p-2">Alt text for accessibility</td>
              </tr>
              <tr>
                <td className="border p-2">
                  <code>width</code>
                </td>
                <td className="border p-2">number</td>
                <td className="border p-2">(required)</td>
                <td className="border p-2">Width of the image</td>
              </tr>
              <tr>
                <td className="border p-2">
                  <code>height</code>
                </td>
                <td className="border p-2">number</td>
                <td className="border p-2">(required)</td>
                <td className="border p-2">Height of the image</td>
              </tr>
              <tr>
                <td className="border p-2">
                  <code>variant</code>
                </td>
                <td className="border p-2">
                  "shape1" | "shape2" | "shape3" | "shape4" | "shape5" |
                  "shape6"
                </td>
                <td className="border p-2">"shape1"</td>
                <td className="border p-2">The mask shape variant to apply</td>
              </tr>
              <tr>
                <td className="border p-2">
                  <code>className</code>
                </td>
                <td className="border p-2">string</td>
                <td className="border p-2">undefined</td>
                <td className="border p-2">Additional CSS classes to apply</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

//         <div className="aspect-square w-1/2 bg-[url(https://matsu-theme.vercel.app/house.png)] bg-cover bg-center bg-no-repeat mask-[url(/mask-shape-1.svg)] mask-size-[100%_100%] mask-center mask-no-repeat"></div>
