import React from 'react';

export default function NavigationSubmenu(props: NavigationSubmenuProps) {
  return (
    <div className="Navigation-Submenu">
      {props.children}
    </div>
  );
}

type NavigationSubmenuProps = {
  children: React.ReactNode
};
