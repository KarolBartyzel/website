import React, { Dispatch } from 'react';

import Menu from './Menu';
import MenuItem from './MenuItem';
import { pages, NavigationPageModel } from './PageNavigation.model';
import './PageNavigation.css';

type Props = {
  currentPage: NavigationPageModel;
  setCurrentPage: Dispatch<NavigationPageModel>;
};

const PageNavigation = ({ currentPage, setCurrentPage }: Props) => {
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

export default PageNavigation;
