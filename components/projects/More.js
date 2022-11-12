import React from 'react';
import Link from 'next/link';

const More = () => {
  return (
    <div className="py-2   mx-auto text-lg italic text-white">
      I've got even more on{' '}
      <Link
        className="text-fun-pink underline"
        href="https://github.com/worashf"
        target="_blank"
      >
        my GitHub
      </Link>
      !
    </div>
  );
};

export default More;
