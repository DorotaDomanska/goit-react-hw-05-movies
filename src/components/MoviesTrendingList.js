import { Link, useLocation } from 'react-router-dom';

export const MoviesTrendingList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => (
        <Link
          key={movie.id}
          to={`movies/${movie.id}`}
          state={{ from: location }}
        >
          <li>{movie.original_title}</li>
        </Link>
      ))}
    </ul>
  );
};
