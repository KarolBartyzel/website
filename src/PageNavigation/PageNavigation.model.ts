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

type NavigationPageModel = {
  title: string;
  Icon: IconType;
  Component: PageComponentModel;
};

const pages: NavigationPageModel[][] = [
  [
    {
      title: 'Home',
      Icon: FaHome,
      Component: Home.Photo,
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
  [
    {
      title: 'Portfolio',
      Icon: FaFolderOpen,
      Component: Portfolio,
    },
  ],
].map(pages =>
  pages.map(page => ({
    ...page,
    Component: withFocus(page.Component),
  }))
);

export type { NavigationPageModel };
export { pages };
