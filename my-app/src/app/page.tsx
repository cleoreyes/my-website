import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen px-24">
      <div className="flex-1 text-left">
        <p className="text-gray-300 font-semibold text-3xl">
          Hello and welcome, I’m glad you’re here.
        </p>
        <p className="text-white font-medium text-5xl mt-4">
          Developing software solutions that are optimal, efficient, accessible, interactive, and secure for all users.
        </p>
        <p className="text-white text-2xl mt-4">
          Hi, my name is Cleo. I am currently an undergraduate at the University of Washington - Seattle majoring in Informatics on a software engineering track. Focusing on human-computer interaction, computer science, data science, and cybersecurity.
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
