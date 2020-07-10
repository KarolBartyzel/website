import React from 'react';
import { FaHome, FaFolderOpen, FaImages, FaUniversity, FaBriefcase } from 'react-icons/fa';

import Navigation from './Navigation';
import Home from './pages/Home';

import './App.css';

const pages = [
  {
    title: 'Home',
    Icon: FaHome,
    subpages: [
      {
        title: 'Collage',
        Icon: FaImages,
        Component: Home.Collage,
      },
      {
        title: 'Experience',
        Icon: FaBriefcase,
        Component: Home.Experience,
      },
      {
        title: 'Education',
        Icon: FaUniversity,
        Component: Home.Education,
      }
    ],
  },
  {
    title: 'Projects',
    Icon: FaFolderOpen,
    subpages: [

    ].map(withFocus),
  },
].map((page) => ({
  ...page,
  subpages: page.subpages.map((subpage) => ({
    ...subpage,
    Component: withFocus(subpage.Component),
  })),
}));

function App() {
  const [currentPage, setCurrentPage] = React.useState(pages[0]);
  const [currentSubpage, setCurrentSubpage] = React.useState(pages[0].subpages[0]);

  return (
    <div className="App">
      <Navigation.Menu>
      {pages.map((page) => (
          <Navigation.Menu.Item key={page.title} isCurrent={page === currentPage} title={page.title} Icon={page.Icon} onClick={() => setCurrentPage(page)} />
      ))}
      </Navigation.Menu>
      <Navigation.Submenu>
        {currentPage.subpages.map((subpage) => (
          <Navigation.Submenu.Item key={`${currentPage.title}_${subpage.title}`} isCurrent={subpage === currentSubpage} title={subpage.title} Icon={subpage.Icon} onClick={() => setCurrentSubpage(subpage)} />
        ))}
      </Navigation.Submenu>
      <div className="Content">
        {currentPage.subpages.map((subpage) => {
          const { Component: Subpage } = subpage;
          const key = `${currentPage.title}_${subpage.title}`;
          return (
            <Subpage key={key} isCurrent={subpage === currentSubpage} setCurrentSubpage={() => setCurrentSubpage(subpage)} />
          );
        })}
      </div>
    </div>
  );
}

function withFocus(Component) {
  return (props) => {
    const subpageRef = React.useRef();

    React.useEffect(() => {
      window.addEventListener('scroll', onScroll);
      return () => {
        window.removeEventListener('scroll', onScroll);
      }
    }, [subpageRef]);

    React.useEffect(() => {
      if (props.isCurrent && !isFocused()) {
        window.scrollTo({ top: subpageRef.current.offsetTop - 80, behavior: 'smooth' });
      }
    }, [props.isCurrent]);

    function isFocused() {
      const lower = subpageRef.current.offsetTop - 80;
      const upper = lower + subpageRef.current.offsetHeight;
      const { scrollY, innerHeight } = window;
      return (lower < scrollY && upper - scrollY > (innerHeight - 80) / 2) || (lower > scrollY && lower - scrollY < (innerHeight - 80) / 2);
    }

    function onScroll(e) {
      if (isFocused()) {
        props.setCurrentSubpage();
      }
    }

    return (
      <div ref={subpageRef} onScroll={onScroll}><Component /></div>
    )
  }
}

export default App;
