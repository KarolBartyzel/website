import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconType } from 'react-icons/lib';
import classnames from 'classnames';

// import './MenuItem.css';

type Props = {
  title: string;
  path: string;
  Icon: IconType;
};

const MenuItem = ({ path, title, Icon }: Props) => {
  const { pathname } = useRouter();

  const isCurrent = path === pathname;

  return (
    <Link
      href={path}
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
