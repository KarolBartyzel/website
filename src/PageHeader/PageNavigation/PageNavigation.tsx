import React, { Dispatch } from 'react';

import Menu from './Menu';
import MenuItem from './MenuItem';
import {
  pages,
  NavigationPageType,
  NavigationSubpageType,
} from './PageNavigation.model';
import Submenu from './Submenu';
import SubmenuItem from './SubmenuItem';

const PageNavigation = ({
  currentPage,
  currentSubpage,
  setCurrentPage,
  setCurrentSubpage,
}: PageNavigationProps) => {
  return (
    <>
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
      {currentPage.subpages.length > 1 && (
        <Submenu>
          {currentPage.subpages.map(subpage => (
            <SubmenuItem
              key={`${currentPage.title}_${subpage.title}`}
              isCurrent={subpage.title === currentSubpage.title}
              title={subpage.title}
              Icon={subpage.Icon}
              onClick={() => setCurrentSubpage(subpage)}
            />
          ))}
        </Submenu>
      )}
    </>
  );
};

type PageNavigationProps = {
  currentPage: NavigationPageType;
  currentSubpage: NavigationSubpageType;
  setCurrentPage: Dispatch<NavigationPageType>;
  setCurrentSubpage: Dispatch<NavigationSubpageType>;
};

export default PageNavigation;
