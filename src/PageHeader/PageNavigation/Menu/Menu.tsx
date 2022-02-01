import React from 'react';

import './Menu.css';

export default function Menu(props: MenuProps) {
  return <div className="Navigation-Menu">{props.children}</div>;
}

type MenuProps = {
  children: React.ReactNode;
};
