import axios from 'axios';
import { AUTO_COMPLETE_ROUTE } from '../constants/routes';
import { IMovies } from '../types/Movies';

export const fetchMovies = async () => {
  const response = await axios.get<IMovies>(
    `${process.env.API_URL}${AUTO_COMPLETE_ROUTE}`,
    {
      headers: {
        'X-RapidAPI-Key': process.env.X_RAPID_API_KEY as string,
        'X-RapidAPI-Host': process.env.X_RAPID_API_HOST as string,
      },
      params: {
        q: 'blade',
      },
    }
  );

  return response.data;
};
