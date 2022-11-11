import React from 'react';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';

const HeadLine = () => {
  return (
    <>
      <div
        className="relative  heroElem w-full pt-20 pb-20 m-auto flex justify-center   text-center flex-col items-center z-1"
        style={{ maxWidth: '1200px' }}
      >
        <p className="text-xl mb-5 text-white-800 ">Hey, I&apos;m Worash</p>
        <div className="heroTitle inline-block max-w-2xl lg:max-w-4xl text-white w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
          I enjoy <span className="heroShiny1 text-blue-600">building</span> and{' '}
          <span className="heroShiny2 text-blue-600">designing</span> for the
          web.
          <Image
            className="sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px]"
            style={{ animationDelay: '0.1s' }}
            width="100"
            height="100"
            src="/static/headline/html.svg"
          />
          <Image
            className="sqD squiggle-hero-nextjs  md:top-[75px] right-0 md:w-20"
            style={{ animationDelay: '0.2s' }}
            src="/static/headline/rails.svg"
            width="100"
            height="100"
          />
          <Image
            className="sqD bottom-[-200px] -right-1/4 sm:right-[-20%] lg:bottom-[-300px] lg:right-[-10px] w-10"
            style={{ animationDelay: '0.3s' }}
            src="/static/headline/nodejs.svg"
            width="100"
            height="100"
          />
          <Image
            className="sqD hidden sm:block bottom-[-340px] left-[-30px] w-48"
            style={{ animationDelay: '0.4s' }}
            src="/static/headline/coder.svg"
            width="100"
            height="100"
          />
          <Image
            className="sqD hidden sm:block left-[100px] lg:left-[160px] bottom-[-150px]"
            style={{ animationDelay: '0.5s' }}
            src="/static/headline/js.svg"
            width="100"
            height="100"
          />
          <Image
            className="sqD bottom-[-220px] right-[65%] w-20 sm:right-[45%]"
            style={{ animationDelay: '0.6s' }}
            src="/static/headline/java.svg"
            width="100"
            height="100"
          />
          <Image
            className="sqD md:right-[-20px] right-[-10px] sm:right-0 bottom-[-180px] lg:[5%]  md:w-20"
            style={{ animationDelay: '0.7s' }}
            src="/static/headline/reactjs.svg"
            width="50"
            height="50"
          />
          <Image
            className="sqD squiggle-hero-pop1 hidden sm:block sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px]"
            src="/static/headline/pop1.svg"
            width="100"
            height="100"
          />
          <Image
            className="sqD left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-40"
            style={{ animationDelay: '0.9s' }}
            src="/static/headline/code.svg"
            width="50"
            height="50"
          />
        </div>
        <ScrollLink
          activeClass="active"
          to="learnmore"
          spy={true}
          offset={-30}
          smooth={true}
          duration={500}
        >
          <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-white border-2 text-xl rounded-full border-fun-white hover:border-blue-800 hover:bg-blue-800  transition-colors">
            Tell me more
          </div>
        </ScrollLink>
      </div>
    </>
  );
};

export default HeadLine;
