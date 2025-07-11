import MovieCard from "../MovieCard/MovieCard";
import "./MoviesListComponent.css";
function MoviesListComponent() {
  const movies = [
    {
      id: 1,
      img: "https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      title: "Movie Title 1",
      year: 2021,
      rating: 8.5,
      description: "This is an example movie overview that would come from the TMDB API. Replace this with actual movie.overview data.",
      genres: ["Action", "Adventure"],
    }
  ];

  return (
    <div className="movies-list-component">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MoviesListComponent;
