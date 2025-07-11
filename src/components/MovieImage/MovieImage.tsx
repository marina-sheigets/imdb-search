import RatingChip from "../RatingChip/RatingChip";
import "./MovieImage.css";

type MovieImageProps = {
  img: string;
    title: string;
    rating: number;
};

function MovieImage({ img, title, rating }: Readonly<MovieImageProps>) {
  return (
    <div className="movie-image">
      <img src={`https://image.tmdb.org/t/p/w500${img}`} alt={title}/>
      <RatingChip rating={rating} />
    </div>
  )
}

export default MovieImage