import Heading from "../Heading/Heading";
import "./SearchResultsHeader.css";

type SearchResultsHeaderProps = {
  amountMoviesFound: number;
};

function SearchResultsHeader({
  amountMoviesFound,
}: Readonly<SearchResultsHeaderProps>) {
  return (
    <div className="search-results-header">
      <Heading
        text="Search Results"
        variant="h2"
        color="secondary"
        align="left"
      />
      <Heading
        text={`${amountMoviesFound} movies found`}
        variant="h3"
        color="tertiary"
        align="right"
      />
    </div>
  );
}

export default SearchResultsHeader;
