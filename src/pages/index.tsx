import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import Movies from '../components/Movies/Movies';
import { fetchMovies } from '../services/MoviesService';
import { IMovies } from '../types/Movies';

interface HomeProps {
  movies: IMovies;
}

const Home: NextPage<HomeProps> = ({ movies }) => {
  return (
    <Layout>
      <Movies movies={movies.d} title="main title" />
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const movies = await fetchMovies();

  return {
    props: {
      movies,
    },
  };
}
