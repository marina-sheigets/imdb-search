import { useState } from "react";
import CheckboxComponent from "../CheckboxComponent/CheckboxComponent";
import { setUrlParam } from "../../utils/setURLParam";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchMovies } from "../../redux/thunks/fetchMovies";
import { parseFiltersFromURL } from "../../utils/parseFiltersFromURL";

function ContentFilterCheckbox() {
  const dispatch = useAppDispatch();
  const [selectedValue, setSelectedValue] = useState(false);

  const hanldeChangeSleectedValue = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedValue(e.target.checked);

    setUrlParam("include_adult", e.target.checked);
    dispatch(fetchMovies(parseFiltersFromURL(window.location.search)));
  };

  return (
    <CheckboxComponent
      label="Content Filter"
      value={selectedValue}
      text="Include Adult Content"
      onChange={hanldeChangeSleectedValue}
    />
  );
}

export default ContentFilterCheckbox;
