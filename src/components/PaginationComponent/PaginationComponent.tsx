import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { getMovies } from "../../redux/selectors/getMovies";
import { fetchMovies } from "../../redux/thunks/fetchMovies";
import { parseFiltersFromURL } from "../../utils/parseFiltersFromURL";
import "./PaginationComponent.css";

function PaginationComponent() {
  const dispatch = useAppDispatch();

  const { currentPage, totalPages, totalResults, error  } = useAppSelector(getMovies);

  const isFirstButtonDisabled = currentPage === 1;
  const isLastButtonDisabled = currentPage === totalPages;

  const handlePrev = () => {
    if (isFirstButtonDisabled) {
      return;
    }

    fetchPage(currentPage - 1);
  };

  const handleNext = () => {
    if (isLastButtonDisabled) {
      return;
    }

    fetchPage(currentPage + 1);
  };

  const fetchPage = (page: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", page.toString());
    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?${params.toString()}`
    );

    const { filters } = parseFiltersFromURL(params.toString());
    dispatch(fetchMovies({ filters, page }));
  };

  const isOnePageOnly = totalPages === 1;

  if(totalResults === 0 || error){
    return null;
  }

  if (isOnePageOnly) {
    return (
      <div className="pagination">
        <div>{currentPage}</div>
      </div>
    );
  }

  return (
    <div className="pagination">
      <div
        onClick={handlePrev}
        className={`arrow-button ${
          isFirstButtonDisabled ? "first-disabled" : ""
        }`}
      >
        {"<"}
      </div>
      <div>{currentPage}</div>
      <div
        onClick={handleNext}
        className={`arrow-button ${
          isLastButtonDisabled ? "last-disabled" : ""
        }`}
      >
        {">"}
      </div>
    </div>
  );
}

export default PaginationComponent;
