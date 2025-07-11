import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import DropdownComponent from "../DropdownComponent/DropdownComponent";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchSupportedLanguages } from "../../redux/thunks/fetchSupportedLanguages";
import { getSupportedLanguages } from "../../redux/selectors/getSupportedLanguages";
import type { Option } from "../../types/Option";
import { setUrlParam } from "../../utils/setURLParam";
import { fetchMovies } from "../../redux/thunks/fetchMovies";
import { parseFiltersFromURL } from "../../utils/parseFiltersFromURL";

function LanguageDropdown() {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector(getSupportedLanguages);
  const [options, setOptions] = useState<Option[]>([]);

  const handleChangeSupportedLanguage = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setUrlParam("original_language", e.target.value);
    dispatch(fetchMovies(parseFiltersFromURL(window.location.search)));
  };

  useEffect(() => {
    if (items?.length) {
      const mappedOptions = items.map((item) => ({
        label: item.english_name,
        value: item.iso_639_1,
      }));

      setOptions(mappedOptions);
    }
  }, [items]);

  useEffect(() => {
    dispatch(fetchSupportedLanguages());
  }, []);

  return (
    <DropdownComponent
      options={options}
      onChange={handleChangeSupportedLanguage}
      label="Language"
    />
  );
}

export default LanguageDropdown;
