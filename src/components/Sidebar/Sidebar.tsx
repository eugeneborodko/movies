import { FC } from 'react';
import { HOME_ROUTE } from '../../constants/routes';
import Link from 'next/link';
import Navigation from '../Navigation/Navigation';
import classes from './Sidebar.module.css';

const Sidebar: FC = () => {
  return (
    <aside className={classes.sidebar}>
      <Link href={HOME_ROUTE}>
        <a className={classes.logo}>Logo</a>
      </Link>
      <Navigation />
    </aside>
  );
};

export default Sidebar;
