import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconType } from 'react-icons/lib';
import classnames from 'classnames';

import './MenuItem.css';

type Props = {
  title: string;
  path: string;
  Icon: IconType;
};

const MenuItem = ({ path, title, Icon }: Props) => {
  const { pathname } = useLocation();

  const isCurrent = path === pathname;

  return (
    <Link
      to={path}
      className={classnames('navigation-menu-item', {
        'navigation-menu-item--current': isCurrent,
      })}
    >
      {<Icon style={{ marginRight: '5px' }} />}
      <span className="navigation-menu-item-title">{title}</span>
    </Link>
  );
};

export default MenuItem;
