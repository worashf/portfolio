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
            I’m a passionate web developer specializing in building exceptional
            digital experiences. Currently, I’m focused on looking for a job,
            learning tools and languages, building accessible, and
            human-centered.{' '}
          </p>
          <p className="text-3xl mt-10 text-fun-pink"> OPEN FOR JOB!!!</p>
        </div>
        <div className="w-full md:w-1/2 md:mt-0 ">
          <p className=" text-gray-400 hover:text-gray-500 ">
            I built applications like allowance management system and asset
            management system for Ethiopian civil service commission, and it
            shows the allowance management system I built reduces the hassle of
            allowance calculation and management. I take time to learn new
            skills and improve my skills, both technical and professional; when
            I know I do have to prepare a plan for the Ethiopian civil service
            commission IT department, I enrolled in a goal-setting and planning
            online course, and I knew that effective planning would help to
            succeed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
