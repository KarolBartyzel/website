import React from 'react';

import './PageTitle.css';

type Props = {
  onClick: () => void;
};

const PageTitle = ({ onClick }: Props) => (
  <h1 className="page-title" onClick={onClick}>
    Karol Bartyzel
  </h1>
);

export default PageTitle;
