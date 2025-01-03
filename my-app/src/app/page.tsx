"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative w-full h-screen">
      <title>Cleo Reyes</title>

      <div
        className={`absolute top-0 left-0 w-full h-full flex flex-col-reverse md:flex-row items-center justify-center px-10 md:px-44 text-white ${
          isVisible ? "top-enter" : "opacity-0"
        }`}
      >
        <div className="flex-1 text-left">
          <p className="text-gray-300 font-semibold text-lg md:text-2xl">
            Hello and welcome, I&apos;m glad you&apos;re here.
          </p>
          <p className="font-medium text-xl md:text-4xl mt-4">
            Developing software solutions that are optimal, efficient,
            accessible, interactive, and secure for all users.
          </p>
          <p className="text-base md:text-lg mt-4 font-light">
            Hi, my name is Cleo. I am currently an undergraduate at the
            University of Washington - Seattle majoring in Informatics on a
            software engineering track. Focusing on human-computer interaction,
            computer science, data science, and cybersecurity.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image
            className="rounded-lg floating drop-shadow-xl"
            src="/website_logo.png"
            width={440}
            height={440}
            alt="Cleo"
            draggable={false}
            priority={true}
            sizes="(max-width: 768px) 80vw, 500px"
          />
        </div>
      </div>
    </div>
  );
}
