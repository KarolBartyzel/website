import React from 'react';

import './Submenu.css';

export default function Submenu(props: SubmenuProps) {
  return (
    <div className="Navigation-Submenu">
      {props.children}
    </div>
  );
}

type SubmenuProps = {
  children: React.ReactNode
};
