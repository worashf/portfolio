import React from 'react';

const CTA = () => {
  return (
    <div className="pt-10 relative w-full">
      <img className="w-80 mx-auto mb-2" src="/static/lineBreak.svg" />
      <div className="pt-5 pb-10 flex flex-col">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Interested in Working Together?
        </h2>
        <a
          href="mailto:uppert83@gmail.com"
          className="cursor-pointer font-bold whitespace-nowrap 
        mt-6 px-8 py-3 mx-auto text-white border-2 rounded-full border-white bg-bg hover:bg-fun-pink hover:border-fun-pink transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default CTA;
