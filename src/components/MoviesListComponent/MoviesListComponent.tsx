import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MoviesListComponent.css";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { fetchMovies } from "../../redux/thunks/fetchMovies";
import { getMovies } from "../../redux/selectors/getMovies";
import { parseFiltersFromURL } from "../../utils/parseFiltersFromURL";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import EmptyResult from "../EmptyResult/EmptyResult";
import Skeleton from "../Skeleton/Skeleton";
import type { Movie } from "../../types/Movie";
import MovieInfoPopup from "../MovieInfoPopup/MovieInfoPopup";

function MoviesListComponent() {
  const dispatch = useAppDispatch();
  const {
    items: movies,
    error,
    totalResults,
    status,
  } = useAppSelector(getMovies);

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const onMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const clearSelectedMovie = () => {
    setSelectedMovie(null);
  };

  useEffect(() => {
    dispatch(fetchMovies(parseFiltersFromURL(window.location.search)));
  }, [dispatch]);

  if (status === "loading") {
    return <Skeleton />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  if (totalResults === 0) {
    return <EmptyResult />;
  }

  return (
    <div className="movies-list-component">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onClick={onMovieClick} />
      ))}

      {selectedMovie === null ? null : (
        <MovieInfoPopup
          selectedMovie={selectedMovie}
          onClose={clearSelectedMovie}
        />
      )}
    </div>
  );
}

export default MoviesListComponent;
