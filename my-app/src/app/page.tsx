"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // Import the slim package for a smaller bundle

export default function Home() {
  const [init, setInit] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Initialize the tsParticles engine only once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load slim particles to keep the bundle size small
    }).then(() => {
      setInit(true);
    });

    // Trigger the entrance animation after a slight delay
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: false,
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          enable: false,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: true,
          speed: 0.2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 1000,
          },
          value: 215,
        },
        opacity: {
          value: { min: 0.3, max: 1 },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.1,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.5,
            sync: false,
          },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <div className="relative w-full h-screen">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />

        <div
          className={`absolute top-0 left-0 w-full h-full flex items-center justify-center px-40 text-white ${
            isVisible ? "top-enter" : "opacity-0"
          }`}
        >
          <div className="flex-1 text-left">
            <p className="text-gray-300 font-semibold text-2xl">
              Hello and welcome, I&apos;m glad you&apos;re here.
            </p>
            <p className="font-medium text-4xl mt-4">
              Developing software solutions that are optimal, efficient,
              accessible, interactive, and secure for all users.
            </p>
            <p className="text-xl mt-4">
              Hi, my name is Cleo. I am currently an undergraduate at the
              University of Washington - Seattle majoring in Informatics on a
              software engineering track. Focusing on human-computer
              interaction, computer science, data science, and cybersecurity.
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Image
              className="rounded-lg floating drop-shadow-xl"
              src="/website_logo.png"
              width={500}
              height={500}
              alt="Cleo"
              draggable={false}
              priority={true}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-36">
      <div className="flex-1 text-left">
        <p className="text-gray-300 font-semibold text-2xl">
          Hello and welcome, I’m glad you’re here.
        </p>
        <p className="text-white font-medium text-4xl mt-4">
          Developing software solutions that are optimal, efficient, accessible,
          interactive, and secure for all users.
        </p>
        <p className="text-white text-xl mt-4">
          Hi, my name is Cleo. I am currently an undergraduate at the University
          of Washington - Seattle majoring in Informatics on a software
          engineering track. Focusing on human-computer interaction, computer
          science, data science, and cybersecurity.
        </p>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Image
          className="rounded-lg floating drop-shadow-xl"
          src="/website_logo.png"
          width={500}
          height={500}
          alt="Cleo"
          draggable={false}
          priority={true}
        />
      </div>
    </div>
  );
}
