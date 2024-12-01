import { IconBrandGithub, IconLink } from "@tabler/icons-react";

import Image from "next/image";
import Link from "next/link";
import { RainbowButton } from "./ui/rainbow-button";
import React from "react";
import SparklesText from "./ui/sparkles-text";
import { Timeline } from "@/components/ui/timeline";

export function ProjectsSection() {
  const data = [
    {
      title: "Netflix Clone",
      content: (
        <div>
          <p className="text-blue-800 dark:text-blue-200 text-xs md:text-sm font-normal mb-8">
            Built using HTML and CSS, this project focused on creating a
            responsive landing page, learning the use of semantic tags and
            various CSS properties.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dgzee4v9w/image/upload/v1731843540/Screenshot_2024-11-11_213026_ddahd8.png"
              alt="Netflix landing page clone"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <Link
              href="https://github.com/Genius-30/netflix-ui-clone"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <RainbowButton>
                <IconBrandGithub className="mr-2" /> GitHub
              </RainbowButton>
            </Link>
            <Link
              href="https://your-live-demo-link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <RainbowButton>
                <IconLink className="mr-2" /> Live Demo
              </RainbowButton>
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "E-commerce Website",
      content: (
        <div>
          <p className="text-green-800 dark:text-green-200 text-xs md:text-sm font-normal mb-8">
            Built with HTML, CSS, and JavaScript, featuring an add-to-cart
            functionality and Web3Forms integration for order emails.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dgzee4v9w/image/upload/v1731845540/Screenshot_2024-11-17_172728_t0xig3.png"
              alt="E-commerce website"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <Link
              href="https://github.com/Genius-30/ecommerce"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <RainbowButton>
                <IconBrandGithub className="mr-2" /> GitHub
              </RainbowButton>
            </Link>
            <RainbowButton>
              <Link
                href="https://genius-ecommerce.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <IconLink className="mr-2" /> Live Demo
              </Link>
            </RainbowButton>
          </div>
        </div>
      ),
    },
    {
      title: "Notes Web App",
      content: (
        <div>
          <p className="text-yellow-800 dark:text-yellow-200 text-xs md:text-sm font-normal mb-8">
            Built with React and Appwrite, featuring CRUD operations, React
            routing, and conditional rendering.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dgzee4v9w/image/upload/v1731845757/Screenshot_2024-06-20_105743_rd5ybw.png"
              alt="Notes web app"
              width={500}
              height={500}
              className="border border-slate-600 rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <Link
              href="https://github.com/Genius-30/notes-web-app-react"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <RainbowButton>
                <IconBrandGithub className="mr-2" /> GitHub
              </RainbowButton>
            </Link>
            <Link
              href="https://genius-notes.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <RainbowButton>
                <IconLink className="mr-2" /> Live Demo
              </RainbowButton>
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "YouTube Backend",
      content: (
        <div>
          <p className="text-purple-800 dark:text-purple-200 text-xs md:text-sm font-normal mb-8">
            Built using Node.js, Express.js, and MongoDB, this backend includes
            APIs for video upload, professional sign-up, OTP email verification,
            and token-based account security.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <Link
              href="https://github.com/Genius-30/custom-youtube-backend"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RainbowButton>
                <IconBrandGithub className="mr-2" /> GitHub
              </RainbowButton>
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "Ratify - Ongoing",
      content: (
        <div>
          <p className="text-yellow-800 dark:text-yellow-200 text-xs md:text-sm font-normal mb-8">
            Building a platform for users to give ratings and reviews to
            businesses or products. Currently, the backend is completed, and the
            frontend is yet to be developed.
          </p>
          <div className="mb-8">
            <p className="text-yellow-800 dark:text-yellow-200 text-xs md:text-sm font-normal mb-4">
              Technologies used:
            </p>
            <div className="flex gap-2 items-center text-yellow-700 dark:text-yellow-300 text-xs md:text-sm">
              ✅ TypeScript
            </div>
            <div className="flex gap-2 items-center text-yellow-700 dark:text-yellow-300 text-xs md:text-sm">
              ✅ Next.js
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <Link
              href="https://github.com/Genius-30/Ratify"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <RainbowButton>
                <IconBrandGithub className="mr-2" /> GitHub
              </RainbowButton>
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "Real-time Chat App",
      content: (
        <div>
          <p className="text-indigo-800 dark:text-indigo-200 text-xs md:text-sm font-normal mb-8">
            Built with the MERN stack and Socket.IO, incorporating real-time
            messaging features. The app also uses the ShadCN library for
            prebuilt components.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dgzee4v9w/image/upload/v1731843540/Screenshot_2024-11-11_213026_ddahd8.png"
              alt="Real-time chat app"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <Link
              href="https://github.com/Genius-30/chat-app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <RainbowButton>
                <IconBrandGithub className="mr-2" /> GitHub
              </RainbowButton>
            </Link>
            <Link
              href="https://chat-app-genius.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <RainbowButton>
                <IconLink className="mr-2" /> Live Demo
              </RainbowButton>
            </Link>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 mx-auto">
        <SparklesText
          text="Recent Projects"
          className={"text-2xl md:text-6xl text-center mb-10"}
        />
        <Timeline data={data} />
      </div>
    </section>
  );
}
