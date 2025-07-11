import type { Movie } from "../../types/Movie";
import Heading from "../Heading/Heading";
import MovieGenres from "../MovieGenres/MovieGenres";
import MovieImage from "../MovieImage/MovieImage";
import Paragraph from "../Paragraph/Paragraph";
import "./MovieInfoPopup.css";

type MovieInfoPopupProps = {
  selectedMovie: Movie;
  onClose: () => void;
};

function MovieInfoPopup({ selectedMovie, onClose }: MovieInfoPopupProps) {
  return (
    <div className="popup-backdrop" onClick={onClose}>
      <div className="popup-content">
        <MovieImage
          img={selectedMovie.poster_path}
          rating={selectedMovie.vote_average}
          title={selectedMovie.title}
        />
        <Heading text={selectedMovie.title} variant="h2" color="secondary" />
        <Heading
          text={selectedMovie.release_date}
          variant="h5"
          color="tertiary"
        />
        <Paragraph text={selectedMovie.overview} color="secondary" />
        <MovieGenres genresIds={selectedMovie.genre_ids} />
      </div>
    </div>
  );
}

export default MovieInfoPopup;
