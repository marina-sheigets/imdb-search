import Paragraph from "../Paragraph/Paragraph";

type MovieDescriptionProps = {
  description: string
}

function MovieDescription({ description }: Readonly<MovieDescriptionProps>) {
  const formattedDescription = description.length > 80 ? `${description.substring(0, 200)}...` : description;

  return (
    <Paragraph text={formattedDescription} color="secondary" />
  )
}

export default MovieDescription;