import React from 'react';
import { IconType } from 'react-icons/lib';
import classnames from 'classnames';

import './MenuItem.css';
import { useWindowSize, WINDOW_SIZE } from '../../hooks';

export default function MenuItem({
  isCurrent,
  onClick,
  title,
  Icon,
}: ItemProps) {
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
}

type ItemProps = {
  title: string;
  Icon: IconType;
  isCurrent: boolean;
  onClick: (event: React.MouseEvent) => void;
};
