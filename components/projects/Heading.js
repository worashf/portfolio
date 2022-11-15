import React from 'react';

const Heading = () => {
  return (
    <div className="py-5 sm:py-5 w-full text-center relative">
      <h1 className="text-4xl sm:text-6xl inline-block w-auto mx-auto mb-8 relative">
        Projects
        <img
          className="sqD w-10 -top-8 -right-8 absolute"
          src="/static/headline/code.svg"
        />
      </h1>

      <p className="text-fun-gray text-xl sm:text-2xl max-w-3xl m-auto">
        I &apos; ve built cool apps and websites using anything from HTML to
        React (and from NodeJS, Ruby on Rails and Spring Boot). Here are some of
        my favorite projects over the course of my journey.
      </p>
    </div>
  );
};

export default Heading;
