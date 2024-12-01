import Image from "next/image";
import OrbitingCircles from "./ui/orbiting-circles";
import { StarsBackground } from "./ui/stars-background";
import { VelocityScroll } from "./ui/scroll-based-velocity";

export function WhatWeDoSection() {
  const getRadius = (baseRadius) => {
    if (typeof window !== "undefined") {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) return baseRadius * 0.8; // Small screens
      if (screenWidth < 768) return baseRadius * 0.9; // Medium screens
      return baseRadius; // Larger screens
    }
    return baseRadius; // Default for SSR
  };

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <VelocityScroll
        text="What We Do?"
        default_velocity={2}
        className="font-display text-center text-4xl font-semibold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-8xl md:leading-[5rem] opacity-[0.05] md:opacity-[0.03]"
      />

      {groupedOrbitingCirclesData.map((group, groupIndex) =>
        group.map((circle, index) => (
          <OrbitingCircles
            key={circle.alt}
            className={`size-[40px] md:size-[50px] border-none bg-transparent ${circle.className} z-[100]`}
            duration={circle.duration}
            delay={index * (360 / group.length)} // Apply equal spacing
            radius={getRadius(circle.radius)} // Adjust radius dynamically
            reverse={circle.reverse}
          >
            <div className="group flex items-center justify-center">
              <Image
                width={100}
                height={100}
                src={circle.src}
                alt={circle.alt}
              />
            </div>
          </OrbitingCircles>
        ))
      )}
      <StarsBackground />
    </div>
  );
}

const groupedOrbitingCirclesData = [
  // 90 radius group
  [
    {
      className: "p-3",
      duration: 20,
      radius: 70,
      reverse: false,
      src: "https://res.cloudinary.com/dgzee4v9w/image/upload/v1732724317/html_yukv5d.png",
      alt: "HTML Logo",
    },
    {
      className: "p-3",
      duration: 20,
      radius: 70,
      reverse: false,
      src: "https://res.cloudinary.com/dgzee4v9w/image/upload/v1732724317/css_abp8iq.png",
      alt: "CSS Logo",
    },
    {
      className: "p-1",
      duration: 20,
      radius: 70,
      reverse: false,
      src: "https://res.cloudinary.com/dgzee4v9w/image/upload/v1732724356/code-programming-javascript-software-develop-command-language-512_y7ysmf.webp",
      alt: "JavaScript Logo",
    },
    {
      className: "p-3",
      duration: 20,
      radius: 70,
      reverse: false,
      src: "https://res.cloudinary.com/dgzee4v9w/image/upload/v1732809106/Typescript_logo_2020.svg_pxeze8.png",
      alt: "TypeScript Logo",
    },
    {
      className: "p-2",
      duration: 20,
      radius: 70,
      reverse: false,
      src: "https://res.cloudinary.com/dgzee4v9w/image/upload/v1732809182/logo_ktvfwz.png",
      alt: "Redux Logo",
    },
  ],
  // 140 radius group
  [
    {
      className: "p-2",
      duration: 25,
      radius: 140,
      reverse: true,
      src: "https://res.cloudinary.com/dgzee4v9w/image/upload/v1732724379/nodejs-logo-FBE122E377-seeklogo.com_nihxpd.png",
      alt: "Node.js Logo",
    },
    {
      className: "p-2",
      duration: 25,
      radius: 140,
      reverse: true,
      src: "https://res.cloudinary.com/dgzee4v9w/image/upload/v1732724395/2945120_cx3g5m.webp",
      alt: "MongoDB Logo",
    },
    {
      className: "p-2",
      duration: 25,
      radius: 140,
      reverse: true,
      src: "https://res.cloudinary.com/dgzee4v9w/image/upload/v1732724515/React_eyzimm.webp",
      alt: "React.js Logo",
    },
    {
      className: "p-2",
      duration: 25,
      radius: 140,
      reverse: true,
      src: "https://res.cloudinary.com/dgzee4v9w/image/upload/v1732724453/Microsoft.VisualStudio.Services.Icons_bjptui.png",
      alt: "Next.js Logo",
    },
    {
      className: "p-2",
      duration: 25,
      radius: 140,
      reverse: true,
      src: "https://res.cloudinary.com/dgzee4v9w/image/upload/v1732724455/1646733543_efkhmd.webp",
      alt: "Express.js Logo",
    },
    {
      className: " hidden",
      duration: 25,
      radius: 140,
      reverse: true,
      src: "https://res.cloudinary.com/dgzee4v9w/image/upload/v1732809003/Tailwind_CSS_Logo.svg_tvesti.png",
      alt: "Tailwind CSS Logo",
    },
  ],
  // 210 radius group
  [
    {
      className: "p-2",
      duration: 30,
      radius: 210,
      reverse: false,
      src: "https://res.cloudinary.com/dgzee4v9w/image/upload/v1732809023/C_Programming_Language.svg_olgmag.png",
      alt: "C Language Logo",
    },
    {
      className: "p-2",
      duration: 30,
      radius: 210,
      reverse: false,
      src: "https://res.cloudinary.com/dgzee4v9w/image/upload/v1732809037/ISO_C__Logo.svg_a0wbjy.png",
      alt: "C++ Language Logo",
    },
    {
      className: "p-2",
      duration: 30,
      radius: 210,
      reverse: false,
      src: "https://res.cloudinary.com/dgzee4v9w/image/upload/v1732809063/java-logo-1_hp6hju.png",
      alt: "Java Logo",
    },
    {
      className: "p-3",
      duration: 30,
      radius: 210,
      reverse: false,
      src: "https://res.cloudinary.com/dgzee4v9w/image/upload/v1732809064/Kotlin_Icon_foxrt5.png",
      alt: "Kotlin Logo",
    },
    {
      className: "p-2",
      duration: 30,
      radius: 210,
      reverse: false,
      src: "https://res.cloudinary.com/dgzee4v9w/image/upload/v1732809105/android-studio-icon_tugzao.webp",
      alt: "Android Studio Logo",
    },
    {
      className: "p-2",
      duration: 30,
      radius: 210,
      reverse: false,
      src: "https://res.cloudinary.com/dgzee4v9w/image/upload/v1732809141/25231_cf2ga8.png",
      alt: "GitHub Logo",
    },
    {
      className: "p-2",
      duration: 30,
      radius: 210,
      reverse: false,
      src: "https://res.cloudinary.com/dgzee4v9w/image/upload/v1732809170/Git-Icon-1788C_jdwalt.png",
      alt: "Git Logo",
    },
  ],
];
