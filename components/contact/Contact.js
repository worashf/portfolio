import React from 'react';
import Link from 'next/link';
import {
  PaperPlaneRight,
  Envelope,
  LinkedinLogo,
  TwitterLogo,
  GithubLogo,
  FacebookLogo,
} from 'phosphor-react';
const Contact = () => {
  return (
    <>
      <div className="overflow-x-hidden w-full pt-0">
        <h2 className="landingSectionTitle max-w-sm md:max-w-max mx-auto md:mx-0 text-center md:text-left relative text-3xl font-bold mb-0 pt-0 md:pt-0 md:w-max">
          Contact Me{' '}
        </h2>
      </div>
      <div className="flex flex-col w-full space-y-5 justify-between  ">
        <div class=" w-full  rounded-lg shadow-md ">
          <a href="#">
            <h5 class="mb-2 flex  text-2xl font-semibold tracking-tight text-gray-400">
              Hello! I am available for hire and open to any ideas of
              cooperation.{' '}
              <span className="mx-10 text-fun-pink">
                <PaperPlaneRight />
              </span>{' '}
            </h5>
          </a>

          <ul class="space-y-1 text-lg  list-disc list-inside text-gray-300 ">
            <li className="flex items-center">
              <Envelope className="mr-20 text-fun-pink" size={40} />
              <p className="text-xl text-blue-400">Uppert83@gmail.com</p>
            </li>
            <li className="flex items-center">
              <LinkedinLogo className="mr-20 text-fun-pink" size={40} />
              <Link
                href="     https://www.linkedin.com/in/worash-abocherugn/"
                target="_blank"
                rel="nooreferrer"
                className="text-2xl text-blue-400 hover:text-fun-pink"
              >
                worash-abocherugn
              </Link>
            </li>
            <li className="flex items-center">
              <GithubLogo className="mr-20 text-fun-pink" size={40} />
              <Link
                href="https://github.com/worashf/"
                target="_blank"
                rel="nooreferrer"
                className="text-2xl text-blue-400 hover:text-fun-pink"
              >
                worashf
              </Link>
            </li>
            <li className="flex items-center">
              <TwitterLogo className="mr-20 text-fun-pink" size={40} />
              <Link
                href="https://github.com/worashf/"
                target="_blank"
                rel="nooreferrer"
                className="text-2xl text-blue-400 hover:text-fun-pink"
              >
                @worash-aboche
              </Link>
            </li>
            <li className="flex items-center">
              <FacebookLogo className="mr-20 text-fun-pink" size={40} />
              <Link
                href="https://github.com/worashf/"
                target="_blank"
                rel="nooreferrer"
                className="text-2xl text-blue-400 hover:text-fun-pink"
              >
                Worash abocherugn
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;
