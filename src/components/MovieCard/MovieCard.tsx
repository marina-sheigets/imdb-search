import type { Movie } from "../../types/Movie";
import MovieImage from "../MovieImage/MovieImage";
import MovieInfo from "../MovieInfo/MovieInfo";
import "./MovieCard.css";

type MovieCardProps = {
  movie: Movie;
  onClick: (movie: Movie) => void;
};

function MovieCard({ movie, onClick }: Readonly<MovieCardProps>) {
  return (
    <div className="movie-card" onClick={() => onClick(movie)}>
      <MovieImage
        img={movie.poster_path}
        rating={movie.vote_average}
        title={movie.title}
      />
      <MovieInfo movie={movie} />
    </div>
  );
}

export default MovieCard;
