import { BackgroundLines } from "./ui/background-lines";
import { MagicCard } from "./ui/magic-card";
import React from "react";
import { StarsBackground } from "./ui/stars-background";
import WordPullUp from "./ui/word-pull-up";

export default function WhatWeDidSection({ text }) {
  return (
    <div className="relative h-full flex flex-col items-center bg-gradient-to-b from-slate-900 overflow-hidden">
      <BackgroundLines className="h-full flex items-center justify-center w-full flex-col px-4">
        <WordPullUp
          className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight"
          words={text}
        />
      </BackgroundLines>
      <StarsBackground />
      <MagicCard
        className="absolute top-0 left-0 z-[-2] cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl border-none"
        gradientColor={"#1e293b"}
      ></MagicCard>
    </div>
  );
}
