import React from 'react';
import SectionTitle from '../layout/SectionTitle';
import testimonials from '../../data/testimonial';

const Testimonial = () => {
  return (
    <div className="flex flex-col text-left  max-w-md md:max-w-full w-full  ">
      <SectionTitle title="Why people love my work!" />
      <div className="max-w-5xl m-auto md:max-h-[200px] grid grid-cols-1 gap-10 md:gap-10 md:grid-cols-3 items-start">
        {testimonials.map((item, index) => {
          return (
            <div
              key={index}
              className="relative bg-fun-pink-darker border border-fun-pink-light p-5 rounded-lg h-full flex flex-col justify-between"
            >
              <p className="text-base italic relative testimonialQuote">
                &quot;{item.quote}&quot;
              </p>
              <p className="mt-4 text-xs text-fun-gray">

              <a href ={item.link} target="_blank" rel="noopener noreferrer" className='hover:text-fun-pink-light'>
              <b className="text-fun-pink font-monospace">{item.name}</b> -{' '}
                {item.job}
                </a>

              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
