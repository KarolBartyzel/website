import React, { Dispatch } from 'react';
import { NavigationPageType, NavigationSubpageType } from '../PageHeader';

import './PageContent.css';

const PageContent = ({
  currentPage,
  currentSubpage,
  setCurrentSubpage,
}: PageContentProps) => {
  return (
    <div className="content">
      {currentPage.subpages.map(subpage => {
        const { Component: Subpage } = subpage;
        const key = `${currentPage.title}_${subpage.title}`;
        return (
          <Subpage
            key={key}
            isCurrent={subpage.title === currentSubpage.title}
            setCurrentSubpage={() => setCurrentSubpage(subpage)}
          />
        );
      })}
    </div>
  );
};

type PageContentProps = {
  currentPage: NavigationPageType;
  currentSubpage: NavigationSubpageType;
  setCurrentSubpage: Dispatch<NavigationSubpageType>;
};

export default PageContent;
