import { Link, Outlet, useParams } from 'react-router-dom';
import { Suspense } from 'react';
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

  const score = Math.ceil(movieFetched.vote_average * 10);
  // const genres = movieFetched.genres.map(genre => genre.name).join(' ');

  return (
    <main>
      {/* <BackLink to={backLinkHref}>Go back</BackLink> */}
      <img
        src={`https://image.tmdb.org/t/p/w342/${movieFetched.poster_path}`}
        alt=""
      />
      <div>
        <h2>{movieFetched.original_title}</h2>
        <p>User score: {score}%</p>
        <h4>Overview</h4>
        <p>{movieFetched.overview}</p>
        <h5>Genres</h5>
        {/* <p>{genres}</p> */}
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};

export default MovieDetails;
