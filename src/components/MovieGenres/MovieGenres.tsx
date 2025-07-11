import MovieGenre from '../MovieGenre/MovieGenre'
import "./MovieGenres.css";

type MovieGenresProps = {
  genresIds: number[]
}

function MovieGenres({ genresIds }: Readonly<MovieGenresProps>) {
  return (
      <ul className='movie-genres'>
        {genresIds.map((genreId) => (
         <MovieGenre key={genreId} genreId={genreId} />
        ))}
      </ul>
     )
}

export default MovieGenres