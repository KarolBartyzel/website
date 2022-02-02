import React, { Dispatch } from 'react';

import Menu from './Menu';
import MenuItem from './MenuItem';
import { pages, NavigationPageType } from './PageNavigation.model';
import './PageNavigation.css';

const PageNavigation = ({
  currentPage,
  setCurrentPage,
}: PageNavigationProps) => {
  return (
    <div className="page-navigation">
      <Menu>
        {pages.map(page => (
          <MenuItem
            key={page.title}
            isCurrent={page.title === currentPage.title}
            title={page.title}
            Icon={page.Icon}
            onClick={() => setCurrentPage(page)}
          />
        ))}
      </Menu>
    </div>
  );
};

type PageNavigationProps = {
  currentPage: NavigationPageType;
  setCurrentPage: Dispatch<NavigationPageType>;
};

export default PageNavigation;
