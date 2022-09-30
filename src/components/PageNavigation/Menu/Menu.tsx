import React from 'react';

import './Menu.css';

type Props = {
  children: React.ReactNode;
};

const Menu = ({ children }: Props) => (
  <div className="navigation-menu">{children}</div>
);

export default Menu;
