import React from 'react';

import PageHeader from './PageHeader';
import PageContent from './PageContent';
import { useWindowSize, WINDOW_SIZE } from './hooks';
import PageNavigation, { pages } from './PageNavigation';
import './App.css';

const App = () => {
  const windowSize = useWindowSize();
  const [currentPage, setCurrentPage] = React.useState(pages[0]);

  return (
    <div className="app">
      <PageHeader currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <PageContent currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {windowSize === WINDOW_SIZE.MOBILE && (
        <PageNavigation
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default App;
