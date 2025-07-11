import React, { useState } from "react";
import InputComponent from "../InputComponent/InputComponent";
import { useAppSelector } from "../../hooks/useAppSelector";
import { getMovies } from "../../redux/selectors/getMovies";
import { setUrlParam } from "../../utils/setURLParam";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchMovies } from "../../redux/thunks/fetchMovies";
import { parseFiltersFromURL } from "../../utils/parseFiltersFromURL";

function PageInput() {
  const dispatch = useAppDispatch();
  const { totalPages } = useAppSelector(getMovies);
  const [selectedPage, setSelectedPage] = useState("1");

  const handleChangePage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPage(e.target.value);

    setUrlParam("page", selectedPage);
    dispatch(fetchMovies(parseFiltersFromURL(window.location.search)));
  };

  return (
    <InputComponent
      value={selectedPage}
      onChange={handleChangePage}
      label="Page"
      placeholder=""
      type="number"
      min={1}
      max={totalPages}
    />
  );
}

export default PageInput;
