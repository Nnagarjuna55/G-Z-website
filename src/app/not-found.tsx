import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground p-6 text-center">
      <span className="text-xs font-mono font-bold tracking-[0.3em] text-primary-strong uppercase mb-4">
        404 // PAGE NOT FOUND
      </span>
      <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
        Lost the Thread
      </h1>
      <p className="text-muted max-w-md text-sm font-medium mb-8">
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary-strong text-white text-xs font-bold tracking-widest uppercase hover:bg-primary-hover transition-colors shadow-lg"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return Home</span>
      </Link>
    </div>
  );
}
