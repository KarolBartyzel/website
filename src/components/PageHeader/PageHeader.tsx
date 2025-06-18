import React from 'react';
import Link from 'next/link';

const PageHeader = () => {
  return (
    <div className="font-mono fixed h-10 flex-shrink-0 top-0
      w-screen m-auto z-10 bg-white
      flex content-center justify-center"
    >
      <h1 className="absolute top-1 left-6 cursor-pointer text-3xl max-md:relative max-md:left-auto">
        <Link href="/">Karol Bartyzel</Link>
      </h1>
    </div>
  );
};

export default PageHeader;
