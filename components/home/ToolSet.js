import React from 'react';
import Image from 'next/image';
import skills from '../../data/skills';
import SectionTitle from '../layout/SectionTitle';

const ToolSet = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between relative">
        <div className="relative text-3xl w-full text-center md:text-left font-bold md:max-w-lg mb-10 md:mr-10 md:mb-0 md:w-max mr-0 ">
          I got the experience.
          <br />
          Here is my toolbelt for success.
          <Image
            width="50"
            height="50"
            className="sqD  hidden md:block bottom-[-80px] left-[-50px] lg:bottom-[-50px] lg:left-[-35px] z-[-10]"
            src="/static/skills/laptop.svg"
          />
          <Image
            width="50"
            height="50"
            className="sqD hidden md:block top-[140px] right-0 lg:top-[105px]"
            src="/static/skills/coding.svg"
          />
          <Image
            width="50"
            height="50"
            className="sqD hidden md:block top-[200px] right-[50px] lg:top-[170px] lg:right-[50px]"
            src="/static/skills/youtube.svg"
          />
          <Image
            width="50"
            height="50"
            className="sqD top-[-15px] right-[-15px]"
            src="/static/skills/fillStar.svg"
          />
        </div>
        <div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
          {skills.map((item, index) => {
            return (
              <div
                title={item.title}
                key={index}
                className="w-10 mx-auto flex items-center flex-col justify-center"
              >
                <img src={item.icon} style={item.style} />
                <p className="text-xs text-fun-gray font-bold mt-3 opacity-80">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <SectionTitle title="Soft Skills" />
    </>
  );
};

export default ToolSet;
