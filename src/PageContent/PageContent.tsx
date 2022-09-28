import React, { Dispatch } from 'react';
import { NavigationPageModel } from '../PageNavigation';

import './PageContent.css';

type Props = {
  currentPage: NavigationPageModel;
  setCurrentPage: Dispatch<NavigationPageModel>;
};

const PageContent = ({ currentPage, setCurrentPage }: Props) => {
  const { Component, title } = currentPage;
  return (
    <div className="content">
      <Component
        key={title}
        isCurrent={title === currentPage.title}
        setCurrentPage={() => setCurrentPage(currentPage)}
      />
    </div>
  );
};

export default PageContent;
