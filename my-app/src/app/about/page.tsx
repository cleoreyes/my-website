import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen px-44 mt-40">
      <title>About</title>
      <div className="text-5xl text-white font-semibold text-left">
        <h1 className="pb-12">About</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row items-center">
          <div className="w-1/3 text-white flex flex-col items-center text-center">
            <Image
              className="rounded-full drop-shadow-2xl pb-4"
              src="/cleo_leather.png"
              width={300}
              height={300}
              alt="Cleo"
              draggable={false}
              priority={true}
            />
            <p className="text-xl">Cleo Reyes</p>
            <p className="font-extralight pt-2">
              BS in Informatics, Software Engineering
            </p>
            <p className="font-extralight pt-1">
              University of Washington, Seattle
            </p>
          </div>

          <div className="w-2/3 text-lg font-extralight pl-6 text-gray-200">
            <p className="pb-3">
              Hi there! I&apos;m Cleo Reyes, an undergraduate at the University
              of Washington, set to graduate in 2026. I&apos;m pursuing a degree
              in Informatics with a focus on Software Engineering, and I&apos;m
              deeply passionate about using technology to make a positive impact
              on the world. My interests span creating accessibile software, big
              data, and responsible use of AI and ML to solve real word
              problems.
            </p>
            <p className="pb-3">
              Outside of academics, I enjoy attending hackathons, exploring new
              technologies, dancing, and being a massive foodie by trying out
              new cafes and restaurants. I&apos;m always eager to connect,
              collaborate, and learn from others in the tech community.
            </p>
            <p className="pb-3">
              Feel free to reach out if you would like to chat or have any
              questions, I would love to hear from you!
            </p>
          </div>
        </div>
        <div className="flex flex-row text-white gap-14 pt-20 text-xl items-center justify-center">
          <div>
            <p>creyes25 [at] uw.edu</p>
          </div>
          <a
            href="https://www.linkedin.com/in/cleoreyes"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-600 hover:bg-neutral-500 duration-200 px-5 py-2 rounded-full flex items-center justify-center text-white"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/cleoreyes"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-600 hover:bg-neutral-500 duration-200 px-5 py-2 rounded-full flex items-center justify-center text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
