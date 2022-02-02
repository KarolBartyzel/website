import React, { Dispatch } from 'react';
import { NavigationPageType, pages } from '../PageNavigation';

import './PageContent.css';

const PageContent = ({ currentPage, setCurrentPage }: PageContentProps) => {
  const currentPages = pages.filter(({ part }) => part === currentPage.part);

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

type PageContentProps = {
  currentPage: NavigationPageType;
  setCurrentPage: Dispatch<NavigationPageType>;
};

export default PageContent;
