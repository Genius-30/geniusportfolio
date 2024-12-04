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
      description: [
        "Responsive landing page built with HTML and CSS.",
        "Focused on semantic tags and CSS properties.",
        "Improved understanding of flexbox and grid layouts.",
      ],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNmquSprvWMl9rWJi-7pTdXSbIiPB44egZnA&s",
      github: "https://github.com/Genius-30/netflix-ui-clone",
      bgColor: "text-blue-800 dark:text-blue-200",
    },
    {
      title: "E-commerce Website",
      description: [
        "Created with HTML, CSS, and JavaScript.",
        "Includes add-to-cart functionality.",
        "Integrated Web3Forms for order submission emails.",
      ],
      image:
        "https://res.cloudinary.com/dgzee4v9w/image/upload/v1731845540/Screenshot_2024-11-17_172728_t0xig3.png",
      github: "https://github.com/Genius-30/ecommerce",
      demo: "https://genius-ecommerce.vercel.app",
      bgColor: "text-green-800 dark:text-green-200",
    },
    {
      title: "Notes Web App",
      description: [
        "Developed using React and Appwrite.",
        "Implemented CRUD operations and routing.",
        "Features conditional rendering and a user-friendly interface.",
      ],
      image:
        "https://res.cloudinary.com/dgzee4v9w/image/upload/v1731845757/Screenshot_2024-06-20_105743_rd5ybw.png",
      github: "https://github.com/Genius-30/notes-web-app-react",
      demo: "https://genius-notes.vercel.app",
      bgColor: "text-yellow-800 dark:text-yellow-200",
    },
    {
      title: "YouTube Backend",
      description: [
        "Built using Node.js, Express.js, and MongoDB.",
        "Includes APIs for video upload and professional sign-up.",
        "Features OTP email verification and token-based security.",
      ],
      github: "https://github.com/Genius-30/custom-youtube-backend",
      bgColor: "text-purple-800 dark:text-purple-200",
    },
    {
      title: "Ratify",
      description: [
        "Building a platform for user ratings and reviews.",
        "Backend completed; frontend under development.",
      ],
      technologies: ["TypeScript", "Next.js"],
      github: "https://github.com/Genius-30/Ratify",
      bgColor: "text-yellow-800 dark:text-yellow-200",
    },
    {
      title: "Real-time Chat App",
      description: [
        "Built with the MERN stack and Socket.IO.",
        "Real-time messaging and ShadCN for prebuilt components.",
      ],
      image:
        "https://res.cloudinary.com/dgzee4v9w/image/upload/v1731843540/Screenshot_2024-11-11_213026_ddahd8.png",
      github: "https://github.com/Genius-30/chat-app",
      demo: "https://chat-app-genius.vercel.app",
      bgColor: "text-indigo-800 dark:text-indigo-200",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 mx-auto">
        <SparklesText
          text="Recent Projects"
          className={"text-2xl md:text-6xl text-center mb-10"}
        />
        <Timeline
          data={data.map((project) => ({
            title: project.title,
            content: (
              <div>
                <ul
                  className={`${project.bgColor} text-xs md:text-sm font-normal mb-8 list-disc pl-6`}
                >
                  {project.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                {project.image && (
                  <div className="grid">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={500}
                      className="rounded-lg border-2 border-gray-200 dark:border-gray-600 object-cover h-28 sm:h-40 md:h-44 lg:h-60 w-[70%] sm:w-[55%] shadow-md"
                    />
                  </div>
                )}
                <div className="flex items-center flex-wrap gap-4 mt-4">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RainbowButton className="h-10 md:h-12 w-12 md:w-40 text-sm sm:text-lg py-2 px-3 flex items-center justify-center">
                        <IconBrandGithub className="h-5 md:h-8" />
                        <span className="hidden md:inline-block ml-2">
                          GitHub
                        </span>
                      </RainbowButton>
                    </Link>
                  )}
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RainbowButton className="h-10 md:h-12 w-12 md:w-40 text-sm sm:text-lg py-2 px-3 flex items-center justify-center">
                        <IconLink className="h-5 md:h-8" />
                        <span className="hidden md:inline-block ml-2">
                          Live Demo
                        </span>
                      </RainbowButton>
                    </Link>
                  )}
                </div>
              </div>
            ),
          }))}
        />
      </div>
    </section>
  );
}
