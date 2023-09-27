import React from 'react';
import Link from 'next/link';

import { useWindowSize, WINDOW_SIZE } from '../../hooks';
import PageNavigation from '../PageNavigation';

const PageHeader = () => {
  const windowSize = useWindowSize();

  return (
    <div className="font-mono sticky h-10 flex-shrink-0 top-0 w-screen m-auto z-10 bg-white flex content-center justify-center">
      {/* {windowSize >= WINDOW_SIZE.M && <PageNavigation />} */}
      <h1 className="absolute top-1 left-6 cursor-pointer text-3xl max-md:relative max-md:left-auto">
        <Link href="/">Karol Bartyzel</Link>
      </h1>
    </div>
  );
};

export default PageHeader;
