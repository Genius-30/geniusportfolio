import Image from "next/image";
import OrbitingCircles from "@/components/ui/orbiting-circles";
import { StarsBackground } from "./ui/stars-background";

export function WhatWeDoSection() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-slate-900 overflow-hidden">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-4xl md:text-7xl font-bold leading-none text-transparent dark:from-white dark:to-black z-[99]">
        What We Do?
      </span>
      {orbitingCirclesData.map((circle, index) => (
        <OrbitingCircles
          key={circle.alt}
          className={`size-[50px] border-none bg-transparent ${circle.className} z-[100]`}
          duration={circle.duration}
          delay={index * (360 / orbitingCirclesData.length)}
          radius={circle.radius}
          reverse={circle.reverse}
        >
          <div className="group flex items-center justify-center">
            <Image width={100} height={100} src={circle.src} alt={circle.alt} />
          </div>
        </OrbitingCircles>
      ))}
      <StarsBackground />
    </div>
  );
}

const orbitingCirclesData = [
  // 90 radius group
  {
    className: "p-3",
    duration: 20,
    radius: 90,
    reverse: false,
    src: "https://res.cloudinary.com/dgzee4v9w/image/upload/v1732724317/html_yukv5d.png",
    alt: "HTML Logo",
  },
  {
    className: "p-3",
    duration: 20,
    radius: 90,
    reverse: false,
    src: "https://res.cloudinary.com/dgzee4v9w/image/upload/v1732724317/css_abp8iq.png",
    alt: "CSS Logo",
  },
  {
    className: "p-1",
    duration: 20,
    radius: 90,
    reverse: false,
    src: "https://res.cloudinary.com/dgzee4v9w/image/upload/v1732724356/code-programming-javascript-software-develop-command-language-512_y7ysmf.webp",
    alt: "JavaScript Logo",
  },

  // 180 radius group
  {
    className: "p-3",
    duration: 25,
    radius: 180,
    reverse: true,
    src: "https://res.cloudinary.com/dgzee4v9w/image/upload/v1732724379/nodejs-logo-FBE122E377-seeklogo.com_nihxpd.png",
    alt: "Node.js Logo",
  },
  {
    className: "p-2",
    duration: 25,
    radius: 180,
    reverse: true,
    src: "https://res.cloudinary.com/dgzee4v9w/image/upload/v1732724395/2945120_cx3g5m.webp",
    alt: "MongoDB Logo",
  },
  {
    className: "p-2",
    duration: 25,
    radius: 180,
    reverse: true,
    src: "https://res.cloudinary.com/dgzee4v9w/image/upload/v1732724515/React_eyzimm.webp",
    alt: "React.js Logo",
  },
  {
    className: "p-3",
    duration: 25,
    radius: 180,
    reverse: true,
    src: "https://res.cloudinary.com/dgzee4v9w/image/upload/v1732724453/Microsoft.VisualStudio.Services.Icons_bjptui.png",
    alt: "Next.js Logo",
  },
  {
    className: "p-2",
    duration: 25,
    radius: 180,
    reverse: true,
    src: "https://res.cloudinary.com/dgzee4v9w/image/upload/v1732724455/1646733543_efkhmd.webp",
    alt: "Express.js Logo",
  },
];
