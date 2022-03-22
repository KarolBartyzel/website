import React, { Dispatch } from 'react';

import Menu from './Menu';
import MenuItem from './MenuItem';
import Separator from './Separator';
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
        {pages.map((subpages, i) => (
          <React.Fragment key={i}>
            {subpages.map(page => (
              <MenuItem
                key={page.title}
                isCurrent={page.title === currentPage.title}
                title={page.title}
                Icon={page.Icon}
                onClick={() => setCurrentPage(page)}
              />
            ))}
            {i !== pages.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </Menu>
    </div>
  );
};

export default PageNavigation;
