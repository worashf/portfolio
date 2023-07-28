import React from 'react';
import SectionTitle from '../layout/SectionTitle';

const MyInfo = () => {
  return (
    <div className="flex flex-col h-100 text-left justify-between pt-32 space-y-0 relative">
      <div id="learnmore">
        <SectionTitle title="Here are a few of my informations." />
      </div>
      <div className="flex flex-col w-full pt-3 text-left md:space-x-10  md:flex-row  mx-0">
        <div
          className="md:w-1/2 
        "
        >
          <p className="text-white-800">
          I am a passionate full-stack developer with a focus on building exceptional digital experiences. I am currently seeking projects and employment opportunities, as well as learning new tools and languages. I am committed to building accessible and human-centered products that make a positive impact on the world.{' '}
          </p>
          <p className="text-3xl mt-10 text-fun-pink"> OPEN FOR JOB!!!</p>
        </div>
        <div className="w-full md:w-1/2 md:mt-0 ">
          <p className=" text-gray-400 hover:text-gray-500 ">
          Over the course of my career, I have built 20+ applications that are both beautiful and powerful. I am passionate about developing innovative platforms that solve real-world problems, and I am always eager to work with clients to provide high-quality work and quick responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
