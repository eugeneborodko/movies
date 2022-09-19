import { FC } from 'react';
import Card from '../Card/Card';
import classes from './Movies.module.css';

interface MoviesProps {
  title: string;
}

const Movies: FC<MoviesProps> = ({ title }) => {
  return (
    <section className={classes.wrapper}>
      <h2 className={classes.title}>{title}</h2>
      <div className={classes.movies}>
        {[1, 2, 3, 4, 5, 6].map((card, index) => (
          <Card
            key={card}
            title={`title ${index + 1}`}
            category={`category ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Movies;
