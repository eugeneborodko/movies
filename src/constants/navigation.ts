import Home from '@/components/Icon/icons/Home';
import Profile from '@/components/Icon/icons/Profile';
import Search from '@/components/Icon/icons/Search';
import { HOME_ROUTE, PROFILE_ROUTE, SEARCH_ROUTE } from './routes';

export const NAVIGATION = [
  {
    id: 1,
    url: HOME_ROUTE,
    title: 'Home',
    viewBox: '0 0 25 25',
    svgIcon: Home,
  },
  {
    id: 2,
    url: SEARCH_ROUTE,
    title: 'Search',
    viewBox: '0 0 120 120',
    svgIcon: Search,
  },
  {
    id: 3,
    url: PROFILE_ROUTE,
    title: 'Profile',
    viewBox: '0 0 60 60',
    svgIcon: Profile,
  },
];
