import React from 'react';
import classnames from 'classnames';
import { IconType } from 'react-icons/lib';

import './SubmenuItem.css';

export default function SubmenuItem({
  isCurrent,
  onClick,
  title,
  Icon,
}: SubmenuItemProps) {
  return (
    <div
      className={classnames('Navigation-Submenu-Item', {
        'Navigation-Submenu-Item--current': isCurrent,
      })}
      onClick={onClick}
    >
      {<Icon style={{ margin: '0 10px' }} />}
      <span className="Navigation-Submenu-Item-Title">{title}</span>
    </div>
  );
}

type SubmenuItemProps = {
  title: string;
  Icon: IconType;
  isCurrent: boolean;
  onClick: (event: React.MouseEvent) => void;
};
