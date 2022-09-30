import { FaBlog, FaHome } from 'react-icons/fa';
import Blog from './Blog';
import Home from './Home';
import Portfolio from './Portfolio';

const pages = [
  {
    path: '/',
    Icon: FaHome,
    title: 'Home',
    Component: Home,
  },
  {
    path: '/blog',
    Icon: FaBlog,
    title: 'Blog',
    Component: Blog,
  },
];

export { Home, Blog, Portfolio, pages };
