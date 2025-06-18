import { FaHome } from 'react-icons/fa';
import Home from './Home';
import Portfolio from './Portfolio';

const pages = [
  {
    path: '/',
    Icon: FaHome,
    title: 'Home',
    Component: Home,
  },
];

export { Home, Portfolio, pages };
