import React, { Dispatch } from 'react';
import { NavigationPageModel, pages } from '../PageNavigation';

import './PageContent.css';

type Props = {
  currentPage: NavigationPageModel;
  setCurrentPage: Dispatch<NavigationPageModel>;
};

const PageContent = ({ currentPage, setCurrentPage }: Props) => {
  const [currentPages] = pages.filter(subpages =>
    subpages.includes(currentPage)
  );

  return (
    <div className="content">
      {currentPages.map(page => {
        const { Component, title } = page;
        return (
          <Component
            key={title}
            isCurrent={title === currentPage.title}
            setCurrentPage={() => setCurrentPage(page)}
          />
        );
      })}
    </div>
  );
};

export default PageContent;
