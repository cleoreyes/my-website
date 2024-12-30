import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen px-40 mt-36">
      <title>About</title>
      <div className="text-5xl text-white font-semibold text-left">
        <h1 className="pb-12">About</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row items-center">
          <div className="w-1/3 text-white flex flex-col items-center text-center">
            <Image
              className="rounded-lg drop-shadow-xl pb-4"
              src="/cleo_leather.png"
              width={300}
              height={300}
              alt="Cleo"
              draggable={false}
              priority={true}
            />
            <p className="text-xl">Cleo Reyes</p>
            <p className="font-extralight">Informatics, Software Engineering</p>
            <p className="font-extralight">University of Washington - Seattle</p>
          </div>

          <div className="w-2/3 text-lg font-extralight pl-6 text-gray-200">
            <p className="pb-3">
              Hi there! I&apos;m Cleo Reyes, a sophomore at the University of
              Washington, set to graduate in 2026. I&apos;m pursuing a degree in
              Informatics with a focus on Software Engineering, and I&apos;m
              deeply passionate about using technology to make a positive impact
              on the world. My interests span accessibility in web applications,
              big data, and responsible use of AI and ML.
            </p>
            <p className="pb-3">
              Outside of academics, I enjoy attending hackathons, exploring new
              technologies, dancing, and trying different cafes in the area.
              I&apos;m always eager to connect, collaborate, and learn from
              others in the tech community.
            </p>
            <p className="pb-3">
              Feel free to reach out if you&apos;d like to chat or have any
              questions, I&apos;d love to hear from you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
