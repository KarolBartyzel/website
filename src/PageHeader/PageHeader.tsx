import React, { Dispatch } from 'react';

import PageTitle from './PageTitle';
import PageNavigation, {
  NavigationPageType,
  NavigationSubpageType,
} from './PageNavigation';
import './PageHeader.css';

const PageHeader = ({
  currentPage,
  currentSubpage,
  setCurrentPage,
  setCurrentSubpage,
}: PageHeaderProps) => (
  <div className="page-header">
    <PageTitle />
    <PageNavigation
      currentPage={currentPage}
      currentSubpage={currentSubpage}
      setCurrentPage={setCurrentPage}
      setCurrentSubpage={setCurrentSubpage}
    />
  </div>
);

type PageHeaderProps = {
  currentPage: NavigationPageType;
  currentSubpage: NavigationSubpageType;
  setCurrentPage: Dispatch<NavigationPageType>;
  setCurrentSubpage: Dispatch<NavigationSubpageType>;
};

export default PageHeader;
