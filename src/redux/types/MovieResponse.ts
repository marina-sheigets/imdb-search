import type { Movie } from "../../types/Movie";

export interface MovieResponse {
  results: Movie[];
  page: number;
  total_pages: number;
}