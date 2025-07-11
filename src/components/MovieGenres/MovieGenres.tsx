import MovieGenre from '../MovieGenre/MovieGenre'
import "./MovieGenres.css";

type MovieGenresProps = {
  genres: string[]
}

function MovieGenres({ genres }: Readonly<MovieGenresProps>) {
  return (
      <ul className='movie-genres'>
        {genres.map((genre) => (
         <MovieGenre key={genre} genre={genre} />
        ))}
      </ul>
     )
}

export default MovieGenres