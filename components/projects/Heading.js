import React from 'react';
import Image from 'next/image';
const Heading = () => {
  return (
    <div className="py-5 sm:py-5 w-full text-center relative">
      <h1 className="text-4xl sm:text-6xl inline-block w-auto mx-auto mb-8 relative">
        Projects
        <Image
          className="sqD w-10 -top-8 -right-8 absolute"
          src="/static/headline/code.svg"
          width="200"
          height="100"
          alt="project imahe"
        />
      </h1>

      <p className="text-fun-gray text-xl sm:text-2xl max-w-3xl m-auto">
        I &apos; ve built cool platfroms using Python, Java (Spring Boot), Node.js (Express.js), and React.js/Next.js. I utilize MongoDB, MySQL, PostgreSQL, SQL, and Redis in my projects. Here are some of
        my favorite projects over the course of my journey.
      </p>
    </div>
  );
};

export default Heading;
