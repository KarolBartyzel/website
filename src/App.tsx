import React from 'react';
import {FaHome, FaFolderOpen, FaImages, FaUniversity, FaBriefcase, FaAddressCard, FaBlog} from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

import PageHeader, { pages } from './PageHeader';
import PageContent from './PageContent';
import Home from './Pages/Home';
import Blog from './Pages/Blog';

import './App.css';

function App() {
  const [currentPage, setCurrentPage] = React.useState(pages[0]);
  const [currentSubpage, setCurrentSubpage] = React.useState(pages[0].subpages[0]);

  return (
    <div className="App">
      <PageHeader currentPage={currentPage} currentSubpage={currentSubpage} setCurrentPage={setCurrentPage} setCurrentSubpage={setCurrentSubpage} />
      <PageContent currentPage={currentPage} currentSubpage={currentSubpage} setCurrentSubpage={setCurrentSubpage} />
    </div>
  );
}

export default App;
