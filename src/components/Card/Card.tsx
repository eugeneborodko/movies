import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HOME_ROUTE } from '../../constants/routes';
import classes from './Card.module.css';

interface CardProps {
  title: string;
  category: string;
  image: string;
}

export const Card: FC<CardProps> = ({ title, category, image }) => {
  return (
    <Link href={HOME_ROUTE}>
      <a className={classes.link}>
        <figure className={classes.card}>
          <Image src={image} width="260" height="390" />
          <figcaption className={classes.caption}>
            <h3 className={classes.title}>{title}</h3>
            <span className={classes.category}>{category}</span>
          </figcaption>
        </figure>
      </a>
    </Link>
  );
};

export default Card;
