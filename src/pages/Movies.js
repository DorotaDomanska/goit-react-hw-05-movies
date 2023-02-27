import { MovieList } from 'components/MovieList';
import { useState } from 'react';

const Movies = () => {
  const [title, setTitle] = useState('');
  const [movies, setMovies] = useState([]);

  const fetchUrl = 'https://api.themoviedb.org/3/search/movie';
  const apiKey = '93dad7f5c3f08e509beef896c33679a7';

  const handleFetchMovies = async () => {
    const data = await fetch(`${fetchUrl}?api_key=${apiKey}&query=${title}`);
    const moviesFromApi = await data.json();
    setMovies(moviesFromApi.results);
  };

  const updateQueryString = evt => {
    const searchQueryString = evt.target.value;
    setTitle(searchQueryString);
  };

  return (
    <main>
      <input type="text" onChange={updateQueryString}></input>
      <button onClick={handleFetchMovies}>Search</button>
      <MovieList onSearch={handleFetchMovies} movies={movies} />
    </main>
  );
};

export default Movies;
