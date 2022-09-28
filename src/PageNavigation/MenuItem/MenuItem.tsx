import React from 'react';
import { IconType } from 'react-icons/lib';
import classnames from 'classnames';

import './MenuItem.css';

type Props = {
  title: string;
  Icon: IconType;
  isCurrent: boolean;
  onClick: (event: React.MouseEvent) => void;
};

const MenuItem = ({ isCurrent, onClick, title, Icon }: Props) => {
  return (
    <div
      className={classnames('navigation-menu-item', {
        'navigation-menu-item--current': isCurrent,
      })}
      onClick={onClick}
    >
      {<Icon style={{ marginRight: '5px' }} />}
      <span className="navigation-menu-item-title">{title}</span>
    </div>
  );
};

export default MenuItem;
