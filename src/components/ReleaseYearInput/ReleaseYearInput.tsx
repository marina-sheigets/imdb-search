import { useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchMovies } from "../../redux/thunks/fetchMovies";
import { parseFiltersFromURL } from "../../utils/parseFiltersFromURL";
import { setUrlParam } from "../../utils/setURLParam";
import InputComponent from "../InputComponent/InputComponent";
import { getURLParam } from "../../utils/getURLParam";

function ReleaseYearInput() {
  const dispatch = useAppDispatch();
  const currentYear = new Date().getFullYear();

  const initialYear =
    getURLParam("primary_release_year") || currentYear.toString();
  const [selectedYear, setSelectedYear] = useState(initialYear);

  const handleChangeReleaseYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedYear(e.target.value);

    setUrlParam("primary_release_year", e.target.value);
    dispatch(fetchMovies(parseFiltersFromURL(window.location.search)));
  };

  return (
    <InputComponent
      value={selectedYear.toString()}
      onChange={handleChangeReleaseYear}
      label="Release Year"
      placeholder={`e.g. ${currentYear}`}
      type="number"
      min={1900}
      max={currentYear}
    />
  );
}

export default ReleaseYearInput;
