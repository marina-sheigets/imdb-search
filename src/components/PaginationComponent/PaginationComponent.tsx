import { useAppSelector } from "../../hooks/useAppSelector";
import { getMovies } from "../../redux/selectors/getMovies";
import "./PaginationComponent.css";

function PaginationComponent() {
  const { currentPage, totalPages } = useAppSelector(getMovies);

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
   
  };

  const isOnePageOnly = totalPages === 1;

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
