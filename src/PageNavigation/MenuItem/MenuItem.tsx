import React from 'react';
import { IconType } from 'react-icons/lib';
import classnames from 'classnames';

import { useWindowSize, WINDOW_SIZE } from '../../hooks';

import './MenuItem.css';

type Props = {
  title: string;
  Icon: IconType;
  isCurrent: boolean;
  onClick: (event: React.MouseEvent) => void;
};

const MenuItem = ({ isCurrent, onClick, title, Icon }: Props) => {
  const windowSize = useWindowSize();
  return (
    <div
      className={classnames('navigation-menu-item', {
        'navigation-menu-item--current': isCurrent,
      })}
      onClick={onClick}
    >
      {<Icon style={{ margin: '0 10px' }} />}
      {windowSize === WINDOW_SIZE.WEB && (
        <span className="navigation-menu-item-Title">{title}</span>
      )}
    </div>
  );
};

export default MenuItem;
