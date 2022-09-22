import { FC } from 'react';
import Link from 'next/link';
import { NAVIGATION } from '../../constants/navigation';
import Icon from '../Icon/Icon';
import classes from './Navigation.module.css';

const Navigation: FC = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        {NAVIGATION.map(({ id, url, title, viewBox, svgIcon: SvgIcon}) => (
          <li className={classes.item} key={id}>
            <Link href={url}>
              <a className={classes.link} title={title}>
                <Icon width={26} height={26} viewBox={viewBox}>
                  <SvgIcon />
                </Icon>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
