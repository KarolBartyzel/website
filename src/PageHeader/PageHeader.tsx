import React, { Dispatch } from 'react';

import { useWindowSize, WINDOW_SIZE } from '../hooks';
import PageNavigation, { NavigationPageType, pages } from '../PageNavigation';
import PageTitle from './PageTitle';
import './PageHeader.css';

const PageHeader = ({ currentPage, setCurrentPage }: PageHeaderProps) => {
  const windowSize = useWindowSize();
  const handleClick = () => setCurrentPage(pages[0]);

  return (
    <div className="page-header">
      {windowSize === WINDOW_SIZE.WEB && (
        <PageNavigation
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
      <PageTitle onClick={handleClick} />
    </div>
  );
};

type PageHeaderProps = {
  currentPage: NavigationPageType;
  setCurrentPage: Dispatch<NavigationPageType>;
};

export default PageHeader;
