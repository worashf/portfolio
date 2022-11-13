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
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-400">
              Hello! My name is Worash and I enjoy creating things that live on
              the web.
            </h5>
          </a>
          <p class="mb-2 text-md text-white da">
            I am a full-stack web developer. I am currently looking for a web
            development job, I have attended full stack dev curriculum at
            Microverse for the last seven months, the program that uses pair
            programming and real-world projects to teach web development. In
            this school, I code every day with other developers around the world
            and have learned both soft and technical skills.
          </p>
          <h3 className="font-bold text-xl text-fun-gray-800">
            I have experience and skillset like:
          </h3>
          <ul class="space-y-1 text-lg  list-disc list-inside text-gray-300 ">
            <li>Remote collaboration and working within a diverse team;</li>
            <li> Time management and working with a deadline;</li>
            <li> Motivate others and communicate to solve issues;</li>
            <li>Good working habits and always looks for growth; </li>
            <li>Always open for discussion and feedback;</li>
            <li>Working to solve problems </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
