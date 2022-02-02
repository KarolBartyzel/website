import { IconType } from 'react-icons';
import {
  FaAddressCard,
  FaBriefcase,
  FaFolderOpen,
  FaHome,
  FaUniversity,
} from 'react-icons/fa';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import { withFocus } from './PageNavigation.helpers';

type NavigationPageType = {
  part: string;
  title: string;
  Icon: IconType;
  Component: PageType;
};

const pages: Array<NavigationPageType> = [
  {
    part: 'Home',
    title: 'Home',
    Icon: FaHome,
    Component: Home.Gallery,
  },
  {
    part: 'Home',
    title: 'Experience',
    Icon: FaBriefcase,
    Component: Home.Experience,
  },
  {
    part: 'Home',
    title: 'Education',
    Icon: FaUniversity,
    Component: Home.Education,
  },
  {
    part: 'Home',
    title: 'Contact',
    Icon: FaAddressCard,
    Component: Home.Contact,
  },
  {
    part: 'portfolio',
    title: 'Portfolio',
    Icon: FaFolderOpen,
    Component: Portfolio,
  },
].map(page => ({
  ...page,
  Component: withFocus(page.Component),
}));

export type { NavigationPageType };
export { pages };
