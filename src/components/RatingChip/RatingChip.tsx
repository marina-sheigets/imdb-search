import "./RatingChip.css";

type RatingChipProps = {
  rating: number;
};

function RatingChip({ rating }: Readonly<RatingChipProps>) {
  const roundedRating = rating % 1 === 0 ? rating : rating.toFixed(1);
  
  return (
    <div className='rating-chip'>{roundedRating}</div>
  )
}

export default RatingChip