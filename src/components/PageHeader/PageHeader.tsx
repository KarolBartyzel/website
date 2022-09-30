import React from 'react';
import { Link } from 'react-router-dom';

import { useWindowSize, WINDOW_SIZE } from '../../hooks';
import PageNavigation from '../PageNavigation';

import './PageHeader.css';

const PageHeader = () => {
  const windowSize = useWindowSize();

  return (
    <div className="page-header">
      {windowSize >= WINDOW_SIZE.M && <PageNavigation />}
      <Link to="/">
        <h1 className="page-title">Karol Bartyzel</h1>
      </Link>
    </div>
  );
};

export default PageHeader;
