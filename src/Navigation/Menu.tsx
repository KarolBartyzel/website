import React from 'react';

export default function NavigationMenu(props: NavigationMenuProps) {
  return (
    <div className="Navigation-Menu">
      {props.children}
    </div>
  );
};

type NavigationMenuProps = {
  children: React.ReactNode
};
