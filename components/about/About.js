import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <>
      <div className="overflow-x-hidden w-full pt-0">
        <h2 className="landingSectionTitle max-w-sm md:max-w-max mx-auto md:mx-0 text-center md:text-left relative text-3xl font-bold mb-0 pt-0 md:pt-0 md:w-max">
          About Me
        </h2>
      </div>
      <div className="flex flex-col w-full space-y-5 justify-between w-full space-x-5 md:flex-row md:space-y-0 mt-0 pt-0">
        <div className="w-100 flex-auto rounded border-fun-pink">
          <Image
            src="/static/profile/worash.jpeg"
            width="300"
            height="300"
            className="rounded-xl mx-auto  opacity-75 hover:opacity-100 hover:border-fun-pink"
          />
        </div>

        <div class=" w-full  rounded-lg shadow-md ">
          <a href="#">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-white">
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet.
            </h5>
          </a>
          <p class="mb-2 text-md text-white da">
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </p>
          <ul class="space-y-1 max-w-md list-disc list-inside text-gray-400 ">
            <li>good planning of UI and thinking how it affects the UX;</li>
            <li>consistency in design and typography;</li>
            <li> Search Engine Optimization;</li>
          </ul>
          <a
            href="/portfolio"
            class="inline-flex items-center text-blue-600 hover:underline"
          >
            See Projects
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
      </div>
    </>
  );
};

export default About;
