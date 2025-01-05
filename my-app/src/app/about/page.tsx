"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen px-6 sm:px-12 lg:px-44 mt-32 md:mt-40">
      <title>About</title>
      <div className="text-5xl text-white font-semibold text-left">
        <h1 className="pb-12">About</h1>
      </div>
      <div
        className={`flex flex-col items-center justify-center ${
          isVisible ? "bottom-enter" : "opacity-0"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full sm:w-1/3 text-white flex flex-col items-center text-center mb-10">
            <Image
              className="rounded-full drop-shadow-2xl pb-4"
              src="/cleo_linkedin.jpeg"
              width={300}
              height={300}
              alt="Cleo"
              draggable={false}
              priority={true}
            />
            <p className="text-xl">Cleo Reyes</p>
            <p className="font-extralight pt-2">
              <a
                href="https://ischool.uw.edu/programs/informatics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-400"
              >
                BS in Informatics
              </a>
              ,{" "}
              <a
                href="https://en.wikipedia.org/wiki/Software_engineering"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-400"
              >
                Software Engineering
              </a>
            </p>
            <p className="font-extralight pt-1">
              <a
                href="https://www.washington.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-400"
              >
                University of Washington, Seattle
              </a>
            </p>
          </div>

          <div className="w-full sm:w-2/3 text-sm md:text-base font-extralight pl-6 text-gray-200">
            <p className="pb-3">
              Hi there! I&apos;m Cleo Reyes, an undergraduate at the University
              of Washington, set to graduate in 2026. I&apos;m pursuing a degree
              in Informatics with a focus on Software Engineering, and I&apos;m
              deeply passionate about using technology to make a positive impact
              on the world. I love problem solving and building things. My interests span creating accessibile software, big
              data, and responsible use of AI and ML to solve real word
              problems.
            </p>
            <p className="pb-3">
              Outside of academics, I enjoy attending hackathons, exploring new
              technologies, dancing, cooking, baking, and being a massive foodie
              by trying out new cafes and restaurants. I&apos;m always eager to
              connect, collaborate, and learn from others.
            </p>
            <p className="pb-3">
              Feel free to reach out if you would like to chat or have any
              questions, I would love to hear from you!
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col text-white gap-14 pt-20 text-xl items-center justify-center px-10">
          <div>
            <p>creyes25 [at] uw.edu</p>
          </div>
          <a
            href="https://www.linkedin.com/in/cleoreyes"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-600 hover:bg-neutral-500 duration-200 px-4 py-4 rounded-full flex items-center justify-center text-white text-3xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/cleoreyes"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-600 hover:bg-neutral-500 duration-200 px-4 py-4 rounded-full flex items-center justify-center text-white text-3xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/cclleeeo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-600 hover:bg-neutral-500 duration-200 px-4 py-4 rounded-full flex items-center justify-center text-white text-3xl"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}
