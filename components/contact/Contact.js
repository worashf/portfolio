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

          <ul class="space-y-1 text-lg   list-disc list-inside text-gray-300 ">
            <li className="flex flex-row w-full space-x-10 items-center  justify-start md:space-x-40 ">
              <p className="text-3xl  w-1/4 ">Email:</p>
              <div className="flex  flex-row items-center  hover:text-blue-800">
                <Envelope
                  className="mr-3 text-fun-pink hover:text-blue-400"
                  size={30}
                />
                <p className="text-xl text-blue-400 hover:text-fun-pink">
                  Uppert83@gmail.com
                </p>
              </div>
            </li>
            <li className="flex flex-row w-full space-x-10 items-center  justify-start md:space-x-40 ">
              <p className="text-3xl w-1/4 ">LinkedIn:</p>
              <div className="flex  flex-none flex-row items-center  hover:text-blue-800">
                <LinkedinLogo
                  className=" mr-3 text-fun-pink hover:text-blue-400"
                  size={30}
                />
                <Link
                  href="     https://www.linkedin.com/in/worash-abocherugn/"
                  target="_blank"
                  rel="nooreferrer"
                  className="text-2xl text-blue-400 hover:text-fun-pink"
                >
                  worash-abocherugn
                </Link>
              </div>
            </li>
            <li className="flex flex-row  w-full space-x-10 items-center md:space-x-40">
              <p className="text-3xl w-1/4">Github:</p>
              <div className="flex  flex-row items-center  hover:text-blue-800">
                <GithubLogo className="mr-3 text-fun-pink" size={30} />
                <Link
                  href="https://github.com/worashf/"
                  target="_blank"
                  rel="nooreferrer"
                  className="text-2xl text-blue-400 hover:text-fun-pink"
                >
                  worashf
                </Link>
              </div>
            </li>
            <li className="flex w-full flex-row space-x-10 items-center md:space-x-40">
              <p className="text-3xl w-1/4">Tiwtter:</p>
              <div className="flex  flex-row items-center  hover:text-blue-800">
                <TwitterLogo className="mr-3 text-fun-pink" size={30} />
                <Link
                  href="https://twitter.com/WorashAboche"
                  target="_blank"
                  rel="nooreferrer"
                  className="text-2xl text-blue-400 hover:text-fun-pink"
                >
                  @WorashAboche
                </Link>
              </div>
            </li>
            <li className="flex flex-row space-x-10  w-full items-center md:space-x-40">
              <p className="text-3xl w-1/4">Facebook:</p>
              <div className="flex  flex-row items-center  hover:text-blue-800">
                <FacebookLogo className="mr-5 text-fun-pink" size={30} />
                <Link
                  href="https://www.facebook.com/profile.php?id=100006018075352"
                  target="_blank"
                  rel="nooreferrer"
                  className="text-2xl text-blue-400 hover:text-fun-pink"
                >
                  Worash abocherugn
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;
