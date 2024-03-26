import Link from 'next/link';
import Image from 'next/image';
import { List } from 'phosphor-react';

const MoblieNavbar = ({ toogleSideBar }) => {
  return (
    <div className="bg-bg-side flex justify-between p-2 items-center sticky top-0 z-30 ">
      <div className="block text-white font-extrabold dark:text-dw ">
        <Link href="/">
          <div className="flex flex-row w-full items-center text-white font-bold rounded py-2.5  space-x-2  transition duration-200">
            <div>
              <Image
                src="/static/logo/logo.png"
                width="50"
                height="50"
                alt="logo"
              />
            </div>
            <div>
              {' '}
              <span className=" hover:text-fun-pink">Worash</span>
            </div>
          </div>
        </Link>
      </div>
      <button
        className="rounded bg-sky-800 focus:bg-blue-600"
        onClick={toogleSideBar}
      >
        <List size={32} />
      </button>
    </div>
  );
};

export default MoblieNavbar;