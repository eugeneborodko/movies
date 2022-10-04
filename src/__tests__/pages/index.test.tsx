import axios from 'axios';
import { getStaticProps } from '../../pages/index';
import { mockMovies } from '../../__mocks__/movies';

jest.mock('axios');

describe('getStaticProps', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns a list of movies', async () => {
    mockedAxios.get.mockResolvedValue({ data: mockMovies });
    const movies = await getStaticProps();
    expect(movies).toEqual(
      expect.objectContaining({
        props: {
          movies: mockMovies,
        },
      })
    );
  });

  it('returns undefined if request is failed', async () => {
    mockedAxios.get.mockResolvedValue(() =>
      Promise.resolve({
        status: 500,
      })
    );
    const movies = await getStaticProps();
    expect(movies).toEqual(
      expect.objectContaining({
        props: {
          movies: undefined,
        },
      })
    );
  });

  it('request should be called once', async () => {
    mockedAxios.get.mockResolvedValue({ data: mockMovies });
    await getStaticProps();
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it('movies lengths should be 2', async () => {
    mockedAxios.get.mockResolvedValue({ data: mockMovies });
    const movies = await getStaticProps();
    expect(movies.props.movies.d).toHaveLength(2);
  });
});
