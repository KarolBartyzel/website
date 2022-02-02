import React from 'react';

import './PageTitle.css';

const PageTitle = ({ onClick }: PageTitleProps) => (
  <h1 className="page-title" onClick={onClick}>
    Karol Bartyzel's website
  </h1>
);

type PageTitleProps = {
  onClick: () => void;
};

export default PageTitle;
