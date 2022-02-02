import React from 'react';

import './Menu.css';

export default function Menu(props: MenuProps) {
  return <div className="navigation-menu">{props.children}</div>;
}

type MenuProps = {
  children: React.ReactNode;
};
