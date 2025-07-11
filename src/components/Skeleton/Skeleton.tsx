import "./Skeleton.css";

function Skeleton() {
  const amountOfCardsOnPage = 20;

  return (
    <div className="skeleton-grid" id="skeletonGrid">
      {Array.from({ length: amountOfCardsOnPage }).map((_, index) => (
        <div className="skeleton-card" key={index}>
          <div className="skeleton-poster"></div>
          <div className="skeleton-info">
            <div className="skeleton-line title"></div>
            <div className="skeleton-line year"></div>
            <div className="skeleton-line overview"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skeleton;
