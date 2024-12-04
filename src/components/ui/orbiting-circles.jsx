"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export default function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
}) {
  const [clampedRadius, setClampedRadius] = useState(radius);

  useEffect(() => {
    // Function to update the radius dynamically
    const updateRadius = () => {
      const maxRadius = Math.min(radius, window.innerWidth / 2 - 20);
      const adjustedRadius =
        window.innerWidth < 768 ? maxRadius * 0.85 : maxRadius; // Reduce radius by 40% for small screens
      setClampedRadius(adjustedRadius);
    };

    updateRadius(); // Initialize on component mount

    // Add event listener to update on resize
    window.addEventListener("resize", updateRadius);
    return () => {
      // Clean up event listener on unmount
      window.removeEventListener("resize", updateRadius);
    };
  }, [radius]);

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-black/10 stroke-1 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={clampedRadius}
            fill="none"
          />
        </svg>
      )}
      <div
        style={{
          "--duration": duration,
          "--radius": clampedRadius,
          "--delay": -delay,
        }}
        className={cn(
          "absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full border bg-black/10 [animation-delay:calc(var(--delay)*1000ms)] dark:bg-white/10",
          { "[animation-direction:reverse]": reverse },
          className
        )}
      >
        {children}
      </div>
    </>
  );
}
