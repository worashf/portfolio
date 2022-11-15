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
      </div>
      <div
        className="max-w-sm  flex flex-col projects-center md:projects-start md:justify-center"
        key={project.id}
      >
        <a
          href={project.link || project.github}
          target="_blank"
          rel="noreferrer"
          className={`w-full relative rounded-lg border-fun-gray border p-2 transition  hover:opacity-75 will-change-projectCard`}
        >
          <img className="w-full rounded-md" src={project.img} />
        </a>
        <div className="w-full mt-5">
          <div className="flex projects-center justify-between">
            <a
              href={project.link || project.github}
              target="_blank"
              rel="noreferrer"
            >
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
