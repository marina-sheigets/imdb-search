import { useState } from "react";
import InputComponent from "../InputComponent/InputComponent";
import { setUrlParam } from "../../utils/setURLParam";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchMovies } from "../../redux/thunks/fetchMovies";
import { parseFiltersFromURL } from "../../utils/parseFiltersFromURL";
import { getURLParam } from "../../utils/getURLParam";

function YearInput() {
  const dispatch = useAppDispatch();
  const currentYear = new Date().getFullYear();

  const initialYear = getURLParam("year") || currentYear.toString();

  const [selectedYear, setSelectedYear] = useState(initialYear);

  const handleChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedYear(e.target.value);

    setUrlParam("year", selectedYear);
    dispatch(fetchMovies(parseFiltersFromURL(window.location.search)));
  };

  return (
    <InputComponent
      value={selectedYear}
      onChange={handleChangeYear}
      label="Year"
      placeholder={`e.g. ${currentYear}`}
      type="number"
      min={1900}
      max={currentYear}
    />
  );
}

export default YearInput;
