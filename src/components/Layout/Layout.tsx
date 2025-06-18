import React, { PropsWithChildren } from 'react';
import PageHeader from '../PageHeader';

const Layout = ({ children }: PropsWithChildren<unknown>) => {
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
