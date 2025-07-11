import { useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MoviesListComponent.css";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { fetchMovies } from "../../redux/thunks/fetchMovies";
import { getMovies } from "../../redux/selectors/getMovies";

function MoviesListComponent() {
  const dispatch = useAppDispatch();
  const { items: movies } = useAppSelector(getMovies);

  useEffect(() => {
    dispatch(fetchMovies({ filters: {}, page: 3 }));
  }, [dispatch]);

  return (
    <div className="movies-list-component">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MoviesListComponent;
