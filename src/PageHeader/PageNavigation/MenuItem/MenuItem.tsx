import React from 'react';
import { IconType } from 'react-icons/lib';
import classnames from 'classnames';

import './MenuItem.css';

export default function MenuItem({
  isCurrent,
  onClick,
  title,
  Icon,
}: ItemProps) {
  return (
    <div
      className={classnames('Navigation-Menu-Item', {
        'Navigation-Menu-Item--current': isCurrent,
      })}
      onClick={onClick}
    >
      {<Icon style={{ margin: '0 10px' }} />}
      <span className="Navigation-Menu-Item-Title">{title}</span>
    </div>
  );
}

type ItemProps = {
  title: string;
  Icon: IconType;
  isCurrent: boolean;
  onClick: (event: React.MouseEvent) => void;
};
