import type { Movie } from "../../types/Movie";

export interface MovieResponse {
  results: Movie[];
  currentPage: number;
  totalPages: number;
}