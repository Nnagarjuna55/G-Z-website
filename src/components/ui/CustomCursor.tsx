"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const visibleRef = useRef(false);
  const pointerRef = useRef(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, { damping: 30, stiffness: 250, mass: 0.5 });
  const ringY = useSpring(mouseY, { damping: 30, stiffness: 250, mass: 0.5 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    // Position updates go straight to motion values; React state only changes
    // when visibility or hover-target type actually flips.
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!visibleRef.current) {
        visibleRef.current = true;
        setIsVisible(true);
      }

      const overInteractive = !!(e.target as HTMLElement).closest?.("a, button, [role='button'], input, textarea, select, summary");
      if (overInteractive !== pointerRef.current) {
        pointerRef.current = overInteractive;
        setIsPointer(overInteractive);
      }
    };

    const handleLeave = () => {
      visibleRef.current = false;
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [mouseX, mouseY]);

  if (isTouch) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9998] hidden md:block" aria-hidden="true">
      {/* Lagging outer ring */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isPointer ? 1.6 : 1,
        }}
        transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.25, ease: "easeOut" } }}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-primary/50"
      />
      {/* Snappy inner dot */}
      <motion.div
        style={{ x: mouseX, y: mouseY }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isPointer ? 0 : 1,
        }}
        transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.2 } }}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"
      />
    </div>
  );
}
