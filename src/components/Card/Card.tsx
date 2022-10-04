import { FC } from 'react';
import Link from 'next/link';
import classes from './Card.module.css';
import { HOME_ROUTE } from '../../constants/routes';

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
          <img src={image} width="260" height="150" />
          <figcaption>
            <h3 className={classes.title}>{title}</h3>
            <span className={classes.category}>{category}</span>
          </figcaption>
        </figure>
      </a>
    </Link>
  );
};

export default Card;
