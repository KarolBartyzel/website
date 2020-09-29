import React from 'react';
import {FaHome, FaFolderOpen, FaImages, FaUniversity, FaBriefcase, FaAddressCard, FaBlog} from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

import Navigation from './Navigation';
import Home from './Pages/Home';
import Blog from './Pages/Blog';

import './App.css';

type NavigationSubPageType = {
  title: string,
  Icon: IconType,
  Component: PageType,
};

type NavigationPageType = {
  title: string,
  Icon: IconType,
  subpages: Array<NavigationSubPageType>,
};

const pages: Array<NavigationPageType> = [
  {
    title: 'Home',
    Icon: FaHome,
    subpages: [
      {
        title: 'Gallery',
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
      },
      {
        title: 'Contact',
        Icon: FaAddressCard,
        Component: Home.Contact,
      },
    ],
  },
  {
    title: 'Projects',
    Icon: FaFolderOpen,
    subpages: [

    ],
  },
  {
    title: 'Blog',
    Icon: FaBlog,
    subpages: [
      {
        title: 'Blog',
        Icon: FaBlog,
        Component: Blog,
      },
    ],
  },
].map((page) => ({
  ...page,
  subpages: page.subpages.map((subpage: NavigationSubPageType) => ({
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
          <Navigation.MenuItem key={page.title}
            isCurrent={page === currentPage}
            title={page.title}
            Icon={page.Icon}
            onClick={() => setCurrentPage(page)} />
        ))}
      </Navigation.Menu>
      {currentPage.subpages.length > 1 && (
        <Navigation.Submenu>
          {currentPage.subpages.map((subpage) => (
            <Navigation.SubmenuItem key={`${currentPage.title}_${subpage.title}`}
              isCurrent={subpage === currentSubpage}
              title={subpage.title}
              Icon={subpage.Icon}
              onClick={() => setCurrentSubpage(subpage)} />
          ))}
        </Navigation.Submenu>
      )}
      <div className="Content" style={{ marginTop: currentPage.subpages.length > 1 ? '80px' : '50px' }}>
        {currentPage.subpages.map((subpage) => {
          const {Component: Subpage} = subpage;
          const key = `${currentPage.title}_${subpage.title}`;
          return (
            <Subpage key={key}
              isCurrent={subpage === currentSubpage}
              setCurrentSubpage={() => setCurrentSubpage(subpage)} />
          );
        })}
      </div>
    </div>
  );
}

function withFocus(Component: PageType) {
  const Comp = (props: CompType) => {
    const subpageRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;

    React.useEffect(() => {
      window.addEventListener('scroll', onScroll);
      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }, [subpageRef]);

    React.useEffect(() => {
      if (subpageRef.current !== undefined && props.isCurrent && !isFocused()) {
        window.scrollTo({top: subpageRef.current.offsetTop - 80, behavior: 'smooth'});
      }
    }, [props.isCurrent]);

    function isFocused() {
      const lower = subpageRef.current.offsetTop - 80;
      const upper = lower + subpageRef.current.offsetHeight;
      const {scrollY, innerHeight} = window;
      return (lower < scrollY && upper - scrollY > (innerHeight - 80) / 2) ||
             (lower > scrollY && lower - scrollY < (innerHeight - 80) / 2);
    }

    function onScroll(e: any) {
      if (isFocused()) {
        props.setCurrentSubpage();
      }
    }

    return (
      <div ref={subpageRef}
        onScroll={onScroll}><Component /></div>
    );
  };
  type CompType = {
    isCurrent: boolean,
    setCurrentSubpage: Function,
  };
  return Comp;
}

export default App;
