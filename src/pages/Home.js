import { useState, useEffect } from 'react';
import { MoviesTrendingList } from '../components/MoviesTrendingList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchUrl = 'https://api.themoviedb.org/3/';
    const trending = 'trending/movie/week';
    const apiKey = '93dad7f5c3f08e509beef896c33679a7';

    const fetchTrending = async () => {
      const res = await fetch(`${fetchUrl}${trending}?api_key=${apiKey}`);
      const resBody = await res.json();

      setTrendingMovies(resBody.results);
    };

    fetchTrending().catch(console.error);
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {trendingMovies && <MoviesTrendingList movies={trendingMovies} />}
    </main>
  );
};

export default Home;
