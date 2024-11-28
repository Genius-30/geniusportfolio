"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import { FadeText } from "./fade-text";
import { FlipWords } from "./flip-words";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ShimmerButton from "./shimmer-button";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX =
    useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig) ||
    0;
  const translateXReverse =
    useSpring(
      useTransform(scrollYProgress, [0, 1], [0, -1000]),
      springConfig
    ) || 0;
  const rotateX =
    useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig) ||
    15;
  const opacity =
    useSpring(
      useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
      springConfig
    ) || 0.2;
  const rotateZ =
    useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig) ||
    20;
  const translateY =
    useSpring(
      useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
      springConfig
    ) || -700;

  return (
    <div
      ref={ref}
      className="h-full py-16 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={`${product.title}-${index}`}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={`${product.title}-${index}`}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={`${product.title}-${index}`}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const words = ["Web Developer", "MERN Developer", "Software Developer"];
  return (
    <div className="max-w-[95%] md:max-w-7xl relative mx-auto md:ml-16 mr-auto my-28 md:my-40 px-4 left-0 top-0 z-[999]">
      <h1 className="mb-[-6px] md:mb-1">
        <FadeText
          className="text-[32px] md:text-6xl font-bold text-black dark:text-white"
          direction="left"
          framerProps={{
            show: { transition: { delay: 0.4 } },
          }}
          text="Genius Porwal"
        />
      </h1>
      <FlipWords
        className="text-lg md:text-3xl font-medium md:font-semibold"
        words={words}
      />
      <div className="md:max-w-2xl mt-6">
        <FadeText
          className="text-base md:text-xl dark:text-neutral-200"
          direction="left"
          framerProps={{
            show: { transition: { delay: 0.4 } },
          }}
          text="Building seamless and modern web applications with the latest
        technologies. Let’s create something amazing!"
        />
      </div>
      <FadeText
        direction="left"
        framerProps={{
          show: { transition: { delay: 0.4 } },
        }}
        text={
          <ShimmerButton className="shadow-2xl mt-6" background="#0F172A">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Contact Me
            </span>
          </ShimmerButton>
        }
      />
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
