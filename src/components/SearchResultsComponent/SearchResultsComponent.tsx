import "./SearchResultsComponent.css";
import SectionComponent from "../SectionComponent/SectionComponent";
import MoviesListComponent from "../MoviesListComponent/MoviesListComponent";
import SearchResultsHeader from "../SearchResultsHeader/SearchResultsHeader";
import PaginationComponent from "../PaginationComponent/PaginationComponent";

function SearchResultsComponent() {
  const amountMoviesFound = 0; // This should be replaced with actual logic to get the number of movies found
  return (
    <SectionComponent>
      <SearchResultsHeader amountMoviesFound={amountMoviesFound} />
      <PaginationComponent />
      <MoviesListComponent />
      <PaginationComponent />
    </SectionComponent>
  );
}

export default SearchResultsComponent;
