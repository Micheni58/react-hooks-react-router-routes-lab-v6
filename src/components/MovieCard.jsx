import {Link} from 'react-router-dom';

function MovieCard({title, id,time}) {
  
  return (
    <article>
        <h1>{title}</h1>
        <p>{time} Minutes</p>
        <Link to={`/movie/${id}`}>View Movie</Link>
        {/* What should go here? */}
    </article>
  );
};

export default MovieCard;