import "./SearchResultsComponent.css";
import SectionComponent from "../SectionComponent/SectionComponent";
import MoviesListComponent from "../MoviesListComponent/MoviesListComponent";
import SearchResultsHeader from "../SearchResultsHeader/SearchResultsHeader";
import PaginationComponent from "../PaginationComponent/PaginationComponent";

function SearchResultsComponent() {
  return (
    <SectionComponent>
      <SearchResultsHeader />
      <PaginationComponent />
      <MoviesListComponent />
      <PaginationComponent />
    </SectionComponent>
  );
}

export default SearchResultsComponent;
