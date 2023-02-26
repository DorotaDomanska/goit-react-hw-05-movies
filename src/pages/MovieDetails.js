import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { BackLink } from '../components/BackLink';

const MovieDetails = () => {
  const { movieId } = useParams();
  //   const location = useLocation();
  //   const backLinkHref = location.state?.from ?? '/';
  const [movieFetched, setMovieFetched] = useState({});

  useEffect(() => {
    const fetchUrl = 'https://api.themoviedb.org/3/';
    const apiKey = '93dad7f5c3f08e509beef896c33679a7';

    const fetchMovieById = async () => {
      const data = await fetch(`${fetchUrl}movie/${movieId}?api_key=${apiKey}`);
      const movieFromApi = await data.json();

      setMovieFetched(movieFromApi);
    };
    fetchMovieById().catch(console.error);
  }, [movieId]);

  console.log(movieFetched);
  const score = Math.ceil(movieFetched.vote_average * 10);

  return (
    <main>
      {/* <BackLink to={backLinkHref}>Go back</BackLink> */}
      <img src="https://via.placeholder.com/960x240" alt="" />
      <div>
        <h2>{movieFetched.original_title}</h2>
        <p>User score: {score}%</p>
        <h4>Overview</h4>
        <p>{movieFetched.overview}</p>
        <h5>Genres</h5>
        {movieFetched.genres.map(genre => (
          <p>{genre.name}</p>
        ))}
      </div>
    </main>
  );
};

export default MovieDetails;
