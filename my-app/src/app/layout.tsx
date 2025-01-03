// app/layout.tsx
"use client";
import localFont from "next/font/local";
import "./globals.css";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

const opensauce = localFont({
  src: [
    {
      path: "/static-fonts/open-sauce/OpenSauceTwo-Light.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "/static-fonts/open-sauce/OpenSauceTwo-Regular.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "/static-fonts/open-sauce/OpenSauceTwo-Medium.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "/static-fonts/open-sauce/OpenSauceTwo-SemiBold.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/static-fonts/open-sauce/OpenSauceTwo-Bold.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/static-fonts/open-sauce/OpenSauceTwo-ExtraBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "/static-fonts/open-sauce/OpenSauceTwo-Black.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
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
        color: { value: "#ffffff" },
        links: { enable: false },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.out },
          random: true,
          speed: 0.2,
          straight: false,
        },
        number: {
          density: { enable: true, area: 1000 },
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
        shape: { type: "circle" },
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

  return (
    <html lang="en">
      <body className={opensauce.className}>
        <div className="relative w-full">
          {init && (
            <Particles
              id="tsparticles"
              particlesLoaded={particlesLoaded}
              options={options}
            />
          )}
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
