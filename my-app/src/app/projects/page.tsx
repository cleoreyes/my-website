"use client";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaGithub, FaLink } from "react-icons/fa6";

interface ProjectProps {
  projectName: string;
  duration: string;
  typeOfProject: string;
  technologies: readonly string[];
  image: string;
  imageAlt: string;
  githubLink?: string;
  projectLink?: string;
  description: string;
}

const Project: React.FC<ProjectProps> = ({
  projectName,
  technologies,
  githubLink,
  projectLink,
  image,
  imageAlt,
  description,

}) => {
  const mappedTechnologies = technologies.map((technology, index) => (
    <div
      key={index}
      className="text-sm md:text-md bg-gray-500 px-5 py-1 mb-3 rounded-full ml-4 text-white"
    >
      <p>{technology}</p>
    </div>
  ));

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);
  console.log(githubLink, projectLink);;

  return (
    <div
      className={`text-white pb-10 group ${isVisible ? "bottom-enter" : "opacity-0"}`}
    >
      <div className="rounded-2xl flex flex-col px-14 py-10 md:mx-20 overflow-hidden project">
        <div className="flex flex-col md:flex-row">
          <div className="flex-col md:pr-14">
            <p className="text-2xl pb-8">{projectName}</p>
            <p className="text-base font-extralight text-gray-200">
              {description}
            </p>
          </div>
          <div className="md:translate-x-[45%] md:translate-y-[45%] relative flex items-center justify-center overflow-hidden rounded-lg transform transition-transform duration-500 group-hover:translate-x-[0%] group-hover:translate-y-[0%] md:group-hover:scale-110">
            <Image
              className="rounded-lg drop-shadow-2xl md:py-0"
              src={image}
              width={4000}
              height={4000}
              alt={imageAlt}
              draggable={false}
              priority={true}
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-start pb-2 -ml-4 pt-5">
          {mappedTechnologies}
        </div>
        <div className="flex flex-row justify-start text-4xl pt-5">
          {githubLink ? (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl pr-8"
            >
              <FaGithub />
            </a>
          ) : (
            <></>
          )}

          {projectLink ? (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl"
            >
              <FaLink />
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projectsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalProjects = Object.values(projectsData).length;
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const currentProjects = Object.values(projectsData)
  .slice((currentPage - 1) * projectsPerPage, currentPage * projectsPerPage)
  .map((project) => {
    console.log(project);
    return (
      <Project
        projectName={project.projectName}
        duration={project.duration}
        typeOfProject={project.typeOfProject}
        technologies={project.technologies}
        image={project.image}
        imageAlt={project.imageAlt}
        description={project.description}
        githubLink={project.githubLink}
        projectLink={project.projectLink}
        key={project.projectName}
      />
    );
  });


  return (
    <div className="min-h-screen px-6 lg:px-44 mt-32 md:mt-40">
      <title>About</title>
      <div className="text-5xl text-white font-semibold text-left">
        <h1 className="pb-12">Projects</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        {currentProjects}
      </div>

      <div className="flex justify-center mt-8 pb-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`bg-gray-600/50 text-white p-1 rounded-full ${currentPage === 1 ? "hidden" : "visible"} `}
        >
          <MdKeyboardArrowLeft className="text-3xl" />
        </button>
        <span className="px-4 py-2 text-white">
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`bg-gray-600/50 text-white p-1 rounded-full ${currentPage === totalPages ? "hidden" : "visible"} `}
        >
          <MdKeyboardArrowRight className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Projects;
