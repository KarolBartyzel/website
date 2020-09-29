import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { IconType } from 'react-icons/lib';

import './index.css';

export default function NavigationSubmenuItem({isCurrent, onClick, title, Icon}: NavigationSubmenuItemProps) {
  return (
    <div className={classnames('Navigation-Submenu-Item', {'Navigation-Submenu-Item--current': isCurrent})}
      onClick={onClick}>
      {<Icon style={{margin: '0 10px'}} />}<span className="Navigation-Submenu-Item-Title">{title}</span>
    </div>
  );
}

type NavigationSubmenuItemProps = {
  title: string,
  Icon: IconType,
  isCurrent: boolean,
  onClick: (event: React.MouseEvent) => void,
};
