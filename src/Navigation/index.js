import Menu from './Menu';
import MenuItem from './MenuItem';
import Submenu from './Submenu';
import SubmenuItem from './SubmenuItem';

import './index.css';

const Navigation = { Menu, Submenu };
Navigation.Menu.Item = MenuItem;
Navigation.Submenu.Item = SubmenuItem;
export default Navigation;
