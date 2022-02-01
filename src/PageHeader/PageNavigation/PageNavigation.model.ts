import { IconType } from "react-icons";
import { FaAddressCard, FaBlog, FaBriefcase, FaFolderOpen, FaHome, FaImages, FaUniversity } from "react-icons/fa";
import Blog from "../../Pages/Blog";
import Home from "../../Pages/Home";
import { withFocus } from "./PageNavigation.helpers";

type NavigationSubpageType = {
  title: string,
  Icon: IconType,
  Component: PageType,
};

type NavigationPageType = {
  title: string,
  Icon: IconType,
  subpages: Array<NavigationSubpageType>,
};

const pages: Array<NavigationPageType> = [
  {
    title: 'Home',
    Icon: FaHome,
    subpages: [
      {
        title: 'Gallery',
        Icon: FaImages,
        Component: Home.Gallery,
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
  subpages: page.subpages.map((subpage: NavigationSubpageType) => ({
    ...subpage,
    Component: withFocus(subpage.Component),
  })),
}));

export type { NavigationPageType, NavigationSubpageType };
export { pages };
