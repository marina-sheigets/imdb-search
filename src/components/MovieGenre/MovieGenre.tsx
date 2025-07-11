
import "./MovieGenre.css";

type MovieGenreProps = {
  genre: string
}

function MovieGenre({ genre }: Readonly<MovieGenreProps>) {
  return (
    <li className='movie-genre'>{genre}</li>
  )
}

export default MovieGenre