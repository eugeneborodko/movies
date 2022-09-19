import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classes from './Card.module.css';

interface CardProps {
  title: string;
  category: string;
}

export const Card: FC<CardProps> = ({ title, category }) => {
  return (
    <Link href="/">
      <a className={classes.link}>
        <figure className={classes.card}>
          <Image
            src="/static/images/mock.jpg"
            alt="mock"
            width={260}
            height={150}
          />
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
