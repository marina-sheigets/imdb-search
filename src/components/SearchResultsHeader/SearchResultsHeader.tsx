import { useAppSelector } from "../../hooks/useAppSelector";
import { getMovies } from "../../redux/selectors/getMovies";
import Heading from "../Heading/Heading";
import "./SearchResultsHeader.css";

function SearchResultsHeader() {
  const {totalResults} = useAppSelector(getMovies);
  return (
    <div className="search-results-header">
      <Heading
        text="Search Results"
        variant="h2"
        color="secondary"
        align="left"
      />
      <Heading
        text={`${totalResults} movies found`}
        variant="h3"
        color="tertiary"
        align="right"
      />
    </div>
  );
}

export default SearchResultsHeader;
