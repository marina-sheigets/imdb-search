import type { Movie } from "../../types/Movie";
import Heading from "../Heading/Heading";
import MovieDescription from "../MovieDescription/MovieDescription";
import MovieGenres from "../MovieGenres/MovieGenres";
import "./MovieInfo.css";

type MovieInfoProps = {
  movie: Movie;
};

function MovieInfo({ movie }: Readonly<MovieInfoProps>) {
  return (
    <div className="movie-info">
      <Heading text={movie.title} variant="h3" color="secondary" align="left"/>
      <Heading text={movie.release_date} color="tertiary" variant="h4" align="left"/>
      <MovieDescription description={movie.overview}/>
      <MovieGenres genresIds={movie.genre_ids} />
    </div>
  );
}

export default MovieInfo;
