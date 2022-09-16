import { FC } from 'react';
import Link from 'next/link';
import { NAVIGATION } from '@/constants/navigation';
import classes from './Navigation.module.css';

const Navigation: FC = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        {NAVIGATION.map(({ id, url, title }) => (
          <li className={classes.item} key={id}>
            <Link href={url}>
              <a className={classes.link} title={title}>
                {title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
