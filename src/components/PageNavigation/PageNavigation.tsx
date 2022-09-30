import React from 'react';
import { pages } from '../../pages';

import Menu from './Menu';
import MenuItem from './MenuItem';

import './PageNavigation.css';

const PageNavigation = () => {
  return (
    <div className="page-navigation">
      <Menu>
        {pages.map(page => (
          <MenuItem
            key={page.title}
            title={page.title}
            path={page.path}
            Icon={page.Icon}
          />
        ))}
      </Menu>
    </div>
  );
};

export default PageNavigation;
