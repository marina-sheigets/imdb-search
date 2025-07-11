import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MoviesListComponent.css";
import type { Movie } from "../../types/Movie";
function MoviesListComponent() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      setTotalPages(data.total_pages);
      setMovies(data.results);
      setLoading(false);
      setCurrentPage(data.page);
      setError(null);
    })
    .catch((error) => {
      console.error("Error fetching movies:", error);
      setError(error);
      setLoading(false);
    });
  }, []);

  return (
    <div className="movies-list-component">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MoviesListComponent;
