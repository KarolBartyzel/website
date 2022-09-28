import { IconType } from 'react-icons';
import { FaFolderOpen, FaHome } from 'react-icons/fa';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';

type NavigationPageModel = {
  title: string;
  Icon: IconType;
  Component: PageComponentModel;
};

const pages: NavigationPageModel[] = [
  {
    title: 'Home',
    Icon: FaHome,
    Component: Home,
  },
  {
    title: 'Portfolio',
    Icon: FaFolderOpen,
    Component: Portfolio,
  },
];

export type { NavigationPageModel };
export { pages };
