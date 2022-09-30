import React, { ReactNode } from 'react';
import { useWindowSize, WINDOW_SIZE } from '../../hooks';
import PageHeader from '../PageHeader';
import PageNavigation from '../PageNavigation';

import './Page.scss';

interface IPage {
  children: ReactNode;
}

const Page = ({ children }: IPage) => {
  const windowSize = useWindowSize();

  return (
    <>
      <PageHeader />
      <div className="content">{children}</div>
      {windowSize < WINDOW_SIZE.M && <PageNavigation />}
    </>
  );
};

export default Page;
