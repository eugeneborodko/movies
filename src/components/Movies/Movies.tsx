import { FC } from 'react';
import { IMovie } from '../../types/Movie';
import Card from '../Card/Card';
import classes from './Movies.module.css';

interface MoviesProps {
  movies: IMovie[];
  title: string;
}

const Movies: FC<MoviesProps> = ({ movies, title }) => {
  return (
    <section className={classes.wrapper}>
      <h2 className={classes.title}>{title}</h2>
      <div className={classes.movies}>
        {movies?.map((movie) => {
          return (
            <Card
              key={movie.id}
              title={movie.l}
              category={movie.q}
              image={movie.i.imageUrl}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Movies;
