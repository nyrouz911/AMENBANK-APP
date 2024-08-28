import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    navCap: 'Entities',
  },
  {
    displayName: 'GLOBAL CONS CHEQUES LIST',
    iconName: 'aperture',
    route: '/glob-cons-cheques',
  },
  {
    displayName: 'GLOBAL CONS LC LIST',
    iconName: 'aperture',
    route: '/glob-cons-lc',
  },
  {
    displayName: 'TRANSACTIONS',
    iconName: 'aperture',
    route: '/transactions',
  },
  {
    displayName: 'SPECIMEN SIGNS',
    iconName: 'aperture',
    route: '/specimen-sign',
  },
  {
    displayName: 'MODULES',
    iconName: 'aperture',
    route: '/modules',
  },
  // {
  //   displayName: 'Badge',
  //   iconName: 'rosette',
  //   route: '/ui-components/badge',
  // },
  // {
  //   displayName: 'Chips',
  //   iconName: 'poker-chip',
  //   route: '/ui-components/chips',
  // },
  // {
  //   displayName: 'Lists',
  //   iconName: 'list',
  //   route: '/ui-components/lists',
  // },
  // {
  //   displayName: 'Menu',
  //   iconName: 'layout-navbar-expand',
  //   route: '/ui-components/menu',
  // },
  // {
  //   displayName: 'Tooltips',
  //   iconName: 'tooltip',
  //   route: '/ui-components/tooltips',
  // },
  {
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'lock',
    route: '/authentication/login',
  },
  {
    displayName: 'Register',
    iconName: 'user-plus',
    route: '/authentication/register',
  },
  
  // {
  //   displayName: 'Icons',
  //   iconName: 'mood-smile',
  //   route: '/extra/icons',
  // },
  
];
