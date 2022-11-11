import React from 'react';
import SectionTitle from '../layout/SectionTitle';

const MyInfo = () => {
  return (
    <div className="flex flex-col h-100 text-left justify-between pt-32 space-y-0 relative">
      <div id="learnmore">
        <SectionTitle title="Here are a few of my informations." />
      </div>
      <div className="flex flex-col w-full pt-5 text-left md:flex-row">
        <div>
          <p className="text-white-800">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at ICSMIS.
          </p>
        </div>
        <div className=" mt-10 md:mt-0">
          <p className="text-white-800">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at ICSMIS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
