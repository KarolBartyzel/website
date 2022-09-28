import React from 'react';

import PageHeader from './PageHeader';
import PageContent from './PageContent';
import PageNavigation, { pages } from './PageNavigation';
import { useWindowSize, WINDOW_SIZE } from './hooks';

import './App.css';

const App = () => {
  const windowSize = useWindowSize();
  const [currentPage, setCurrentPage] = React.useState(pages[0]);

  return (
    <div className="app">
      <PageHeader currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <PageContent currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {windowSize < WINDOW_SIZE.M && (
        <PageNavigation
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default App;
