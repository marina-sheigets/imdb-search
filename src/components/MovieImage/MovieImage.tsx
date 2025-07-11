import RatingChip from "../RatingChip/RatingChip";
import "./MovieImage.css";
import notFoundImage from '../../assets/image.png';

type MovieImageProps = {
  img: string;
  title: string;
  rating: number;
};

function MovieImage({ img, title, rating }: Readonly<MovieImageProps>) {
  const imgURL = img === null ? notFoundImage : `https://image.tmdb.org/t/p/w500${img}`;
  
  return (
    <div className="movie-image">
      <img
        src={imgURL}
        alt={title}
        loading="lazy"
      />
      <RatingChip rating={rating} />
    </div>
  );
}

export default MovieImage;
