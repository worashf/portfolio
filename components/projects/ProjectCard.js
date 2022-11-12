import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
  return (
    <div className="flex space-x-5  w-full  flex-col-reverse md:flex-row  border border-gray-200 py-5 px-5 rounded-xl hover:-translate-y-1 hover:opacity-75 hover:border-fun-pink">
      <div class="p-6 max-w-sm  rounded-lg shadow-md md:w-full">
        <a href="#">
          <h5 class="mb-2 text-2xl font-semibold tracking-tight text-white">
            {project.title}
          </h5>
        </a>
        <p class="mb-2 text-md text-white da">{project.desc}</p>
        <ul class="space-y-1 max-w-md list-disc list-inside text-gray-400 ">
          {project.features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <a
          href="#"
          class="inline-flex items-center text-blue-600 hover:underline"
        >
          See our guideline
          <svg
            class="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
          </svg>
        </a>
      </div>
      <div
        className="max-w-sm  flex flex-col projects-center md:projects-start md:justify-center"
        key={project.id}
      >
        <a
          href={project.link || project.github}
          target="_blank"
          className={`w-full relative rounded-xl border-fun-gray border p-2 transition  hover:opacity-75 will-change-projectCard`}
        >
          <img className="w-full rounded-md" src={project.img} />
        </a>
        <div className="w-full mt-5">
          <div className="flex projects-center justify-between">
            <a href={project.link || project.github} target="_blank">
              <h3 className="text-lg font-bold">Built with</h3>
            </a>
            <div className="space-x-2 flex  ">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-fun-pink hover:text-white"
                >
                  {/* <Image
                    src="/static/icons/external-link.svg"
                    width={16}
                    height={16}
                  /> */}
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-fun-pink hover:text-white"
                >
                  {/* <Image
                    src="/static/icons/github.svg"
                    width={16}
                    height={16}
                    alt="Github Icon"
                  /> */}
                  Source code
                </a>
              )}
            </div>
          </div>

          <ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
            {project.tags.map((tag, index) => {
              return (
                <li key={tag}>
                  <Link href={`/projects/tag/`}>
                    <div className="m-1 rounded-lg text-sm bg-fun-pink-dark py-1 px-2 cursor-pointer hover:opacity-75">
                      {tag}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
