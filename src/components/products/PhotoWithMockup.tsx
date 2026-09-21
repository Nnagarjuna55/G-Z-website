"use client";

import Image from "next/image";
import ModuleVisual, { type VisualVariant } from "@/components/products/ModuleVisual";
import TiltCard from "@/components/ui/TiltCard";
import { cn } from "@/lib/utils";

interface PhotoWithMockupProps {
  photo: string;
  alt: string;
  visual: VisualVariant;
  /** Float the product mockup on the left instead of the right. */
  mirror?: boolean;
  priority?: boolean;
}

/** A real photo with the matching product mockup floating over its lower corner. */
export default function PhotoWithMockup({ photo, alt, visual, mirror = false, priority = false }: PhotoWithMockupProps) {
  return (
    <div className="relative">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border bg-border shadow-xl">
        <Image
          src={photo}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/10 to-transparent" />
      </div>

      <div
        className={cn(
          "relative -mt-28 sm:-mt-44 w-[92%] sm:w-[80%]",
          mirror ? "mr-auto sm:-ml-6" : "ml-auto sm:-mr-6"
        )}
      >
        <TiltCard reveal={false} max={7}>
          <ModuleVisual variant={visual} />
        </TiltCard>
      </div>
    </div>
  );
}
