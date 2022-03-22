import React, { Dispatch } from 'react';

import { useWindowSize, WINDOW_SIZE } from '../hooks';
import PageNavigation, { NavigationPageModel, pages } from '../PageNavigation';
import PageTitle from './PageTitle';

import './PageHeader.css';

type Props = {
  currentPage: NavigationPageModel;
  setCurrentPage: Dispatch<NavigationPageModel>;
};

const PageHeader = ({ currentPage, setCurrentPage }: Props) => {
  const windowSize = useWindowSize();
  const handleClick = () => setCurrentPage(pages[0][0]);

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

export default PageHeader;
