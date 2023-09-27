import React from 'react';
import { pages } from '../../pages';

import Menu from './Menu';
import MenuItem from './MenuItem';

// import './PageNavigation.css';

const PageNavigation = () => {
  return (
    <div className="md:fixed md:bottom-0 md:w-screen bg-sky-50">
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
