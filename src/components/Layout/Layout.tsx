import React, { PropsWithChildren } from 'react';
import { WINDOW_SIZE, useWindowSize } from '../../hooks';
import PageHeader from '../PageHeader';
import PageNavigation from '../PageNavigation';

const Layout = ({ children }: PropsWithChildren<unknown>) => {
  const windowSize = useWindowSize();

  return (
    <div className="h-screen w-screen">
      <PageHeader />
      <div className="flex flex-col items-center m-auto mt-0 overflow-auto max-md:pb-8">
        {children}
      </div>
      {/* {windowSize < WINDOW_SIZE.M && <PageNavigation />} */}
    </div>
  );
};

export default Layout;
