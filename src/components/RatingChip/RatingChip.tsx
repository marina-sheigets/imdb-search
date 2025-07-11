import "./RatingChip.css";

type RatingChipProps = {
  rating: number;
};

function RatingChip({ rating }: Readonly<RatingChipProps>) {
  return (
    <div className='rating-chip'>{rating}</div>
  )
}

export default RatingChip