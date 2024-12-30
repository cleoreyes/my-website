import Image from "next/image";

export default function Projects() {
  return (
    <div className="flex min-h-screen px-40 mt-36">
      <title>Projects</title>
      <div className="text-6xl text-white font-medium text-left">
        <h1 className="pb-12">Projects</h1>

        <div>
          <div className="project flex flex-col md:flex-row p-14 rounded-3xl mx-10">
            <div className="flex-col pr-10">
              <p className="text-4xl pb-8">Eterna</p>
              <p className="text-2xl font-light">
                A web application to memorialize the memories and artifacts in a
                digital form.
              </p>
            </div>
            <div>
              <Image
                className="rounded-lg drop-shadow-xl hover:tip-left"
                src="/eterna.png"
                width={450}
                height={450}
                alt="Cleo"
                draggable={false}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
