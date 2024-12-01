"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function WordPullUp({
  words,

  wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },

  framerProps = {
    hidden: { y: 20, opacity: 0, rotate: -10 },
    show: { y: 0, opacity: 1, rotate: 0 },
  },

  className,
}) {
  return (
    <motion.h1
      variants={wrapperFramerProps}
      initial="hidden"
      animate="show"
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className
      )}
    >
      {words.split(" ").map((word, i) => (
        <motion.span
          key={word + i}
          variants={framerProps}
          style={{ display: "inline-block", paddingRight: "8px" }}
        >
          <span
            className="bg-clip-text text-transparent"
            style={{
              background:
                "linear-gradient(to bottom, #fff, #000)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {word === "" ? <span>&nbsp;</span> : word}
          </span>
        </motion.span>
      ))}
    </motion.h1>
  );
}
