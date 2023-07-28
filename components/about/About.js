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
            Hi there! I'm Worash, and I'm a full-stack developer who loves building applications that live on the internet. I find it incredibly satisfying to create something that people can use and enjoy, and I'm always looking for new ways to push the boundaries of what's possible.
            </h5>
          </a>
          <p class="mb-2 text-md text-white da">
          Over the course of my career in information technology , I have a deep understanding of both the technical and business sides of the field. I have worked as a network administrator and full-stack developer, and I have built a wide range of applications that are both beautiful and powerful. I am passionate about developing innovative platforms that solve real-world problems, and I am always eager to work with clients to provide high-quality work and quick responses
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
