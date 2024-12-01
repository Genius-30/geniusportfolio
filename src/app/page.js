"use client";

import {
  IconBrandGithub,
  IconBrandLinkedinFilled,
  IconBrandX,
  IconHome,
  IconPlayerPause,
  IconPlayerPlay,
  IconVolume,
  IconVolumeOff,
} from "@tabler/icons-react";
import { useRef, useState } from "react";

import { FloatingDock } from "@/components/ui/floating-dock";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { ProjectsSection } from "@/components/projectsSection";
import { StarsBackground } from "@/components/ui/stars-background";
import { WhatWeDoSection } from "@/components/WhatWeDoSection";

export default function Home() {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // useEffect(() => {
  //   const performConfetti = () => {
  //     const end = Date.now() + 3 * 1000; // 3 seconds
  //     const colors = ["#f8deb1", "#a786ff", "#fd8bbc", "#eca184"];

  //     const frame = () => {
  //       if (Date.now() > end) return;

  //       confetti({
  //         particleCount: 2,
  //         angle: 60,
  //         spread: 55,
  //         startVelocity: 60,
  //         origin: { x: 0, y: 0.5 },
  //         colors: colors,
  //       });
  //       confetti({
  //         particleCount: 2,
  //         angle: 120,
  //         spread: 55,
  //         startVelocity: 60,
  //         origin: { x: 1, y: 0.5 },
  //         colors: colors,
  //       });

  //       requestAnimationFrame(frame);
  //     };

  //     frame();
  //   };

  //   performConfetti();
  // });

  return (
    <div className="relative">
      <FloatingDock items={links} />
      {/* Hero Section */}
      <section className="md:h-[290vh] overflow-hidden">
        <HeroParallax products={products} />
      </section>

      {/* Services Section */}
      <section className="h-[70vh] md:h-screen overflow-hidden bg-slate-900">
        <WhatWeDoSection />
      </section>
      <section className="relative md:h-screen flex items-center justify-center">
        <HoverEffect className="w-[80%]" items={projects} />
        <StarsBackground />
      </section>

      {/* Projects/Skills Section */}
      <section className="relative h-full bg-slate-900">
        <ProjectsSection />
        <StarsBackground />
      </section>
      <section></section>

      {/* Audio Player with Mute/Unmute Toggle */}
      <audio ref={audioRef} loop muted={isMuted}>
        <source
          src="https://res.cloudinary.com/dgzee4v9w/video/upload/v1733043211/gram-gunna-trap-type-beat-264952_hkji14.mp3"
          type="audio/mp3"
        />
        Your browser does not support the audio element.
      </audio>

      {/* Play/Pause and Mute/Unmute Toggle Button */}
      <div className="fixed top-4 right-4 w-20 md:w-24 flex items-center justify-evenly bg-gray-800 text-white rounded-full p-2 shadow-md shadow-slate-900/75 z-[99999]">
        <button onClick={togglePlayPause}>
          {isPlaying ? <IconPlayerPause /> : <IconPlayerPlay />}
        </button>

        <button onClick={toggleMute}>
          {isMuted ? <IconVolumeOff /> : <IconVolume />}
        </button>
      </div>
    </div>
  );
}

const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedinFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://linkedin.com/in/genius-porwal-ab5518238",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/genius-30",
  },
  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://x.com/_thisisgenius_",
  },
];

export const products = [
  {
    title: "Chat App",
    link: "https://chat-app-genius.vercel.app",
    thumbnail:
      "https://res.cloudinary.com/dgzee4v9w/image/upload/v1731843540/Screenshot_2024-11-11_213026_ddahd8.png",
  },
  {
    title: "Chat App",
    link: "https://chat-app-genius.vercel.app",
    thumbnail:
      "https://res.cloudinary.com/dgzee4v9w/image/upload/v1731844446/Screenshot_2024-11-17_171958_hwkd4w.png",
  },
  {
    title: "Chat App",
    link: "https://chat-app-genius.vercel.app",
    thumbnail:
      "https://res.cloudinary.com/dgzee4v9w/image/upload/v1731844449/Screenshot_2024-11-17_172124_bsex7c.png",
  },

  {
    title: "E-commerce",
    link: "https://genius-ecommerce.vercel.app",
    thumbnail:
      "https://res.cloudinary.com/dgzee4v9w/image/upload/v1731845538/Screenshot_2024-11-17_172715_xr0zpq.png",
  },
  {
    title: "E-commerce",
    link: "https://genius-ecommerce.vercel.app",
    thumbnail:
      "https://res.cloudinary.com/dgzee4v9w/image/upload/v1731845540/Screenshot_2024-11-17_172728_t0xig3.png",
  },
  {
    title: "Notes Web App",
    link: "https://genius-notes.vercel.app",
    thumbnail:
      "https://res.cloudinary.com/dgzee4v9w/image/upload/v1731845758/Screenshot_2024-06-20_100902_ergckm.png",
  },

  {
    title: "Notes Web App",
    link: "https://genius-notes.vercel.app",
    thumbnail:
      "https://res.cloudinary.com/dgzee4v9w/image/upload/v1731845757/Screenshot_2024-06-20_105743_rd5ybw.png",
  },
  {
    title: "Github",
    link: "https://github.com/genius-30",
    thumbnail:
      "https://res.cloudinary.com/dgzee4v9w/image/upload/v1731846744/github_zq4rr7.png",
  },
  {
    title: "LinkedIn",
    link: "https://linkedin.com/in/genius-porwal-ab5518238",
    thumbnail:
      "https://res.cloudinary.com/dgzee4v9w/image/upload/v1731846404/Screenshot_2024-11-17_175715_jrl8d9.png",
  },
  {
    title: "Notes Web App",
    link: "https://genius-notes.vercel.app",
    thumbnail:
      "https://res.cloudinary.com/dgzee4v9w/image/upload/v1731845758/Screenshot_2024-06-20_105806_uh9tfg.png",
  },

  {
    title: "GitHub",
    link: "https://github.com/genius-30",
    thumbnail:
      "https://res.cloudinary.com/dgzee4v9w/image/upload/v1731846099/Screenshot_2024-11-17_175206_a0oeto.png",
  },
  {
    title: "Twitter",
    link: "https://x.com/_thisisgenius_",
    thumbnail:
      "https://res.cloudinary.com/dgzee4v9w/image/upload/v1731846232/Screenshot_2024-11-17_175419_eaonuj.png",
  },
  {
    title: "Chat App",
    link: "https://chat-app-genius.vercel.app",
    thumbnail:
      "https://res.cloudinary.com/dgzee4v9w/image/upload/v1731843506/Screenshot_2024-11-11_213124_o1o0gz.png",
  },
];

export const projects = [
  {
    title: "Full-Stack Web Development",
    description:
      "We build modern, responsive, and scalable websites and web applications using cutting-edge technologies like the MERN stack.",
    link: "",
  },
  {
    title: "Custom Web Solutions",
    description:
      "Tailored solutions for e-commerce, real-time applications, dashboards, and more to meet your unique business needs.",
    link: "",
  },
  {
    title: "API & Backend Development",
    description:
      "Secure, scalable APIs and robust backend systems for seamless data management and integration.",
    link: "",
  },
  {
    title: "Real-Time Features",
    description:
      "Enhance user experience with live chat, notifications, and real-time updates using technologies like Socket.IO.",
    link: "",
  },
  {
    title: "Payment Integration",
    description:
      "Seamless and secure integration of payment gateways like UPI and TRX for smooth transactions.",
    link: "",
  },
  {
    title: "Deployment & Maintenance",
    description:
      "Reliable project deployment and ongoing support to ensure optimal performance.",
    link: "",
  },
];
