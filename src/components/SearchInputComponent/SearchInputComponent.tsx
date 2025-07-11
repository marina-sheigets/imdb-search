import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import InputComponent from "../InputComponent/InputComponent";
import "./SearchInputComponent.css";
import { setUrlParam } from "../../utils/setURLParam";
import { parseFiltersFromURL } from "../../utils/parseFiltersFromURL";
import { fetchMovies } from "../../redux/thunks/fetchMovies";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { getMovies } from "../../redux/selectors/getMovies";
import SuggestionsList from "../SuggestionsList/SuggestionsList";

function SearchInputComponent() {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector(getMovies);

  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query);
  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSetSuggestion = (newQuery: string) => {
    setQuery(newQuery);
  };

  const [suggestions, setSuggestions] = useState<string[]>([]);

  const isQueryValid = () => {
    return debouncedQuery.trim().length > 0;
  };

  const allSuggestionsUnique = suggestions.every(
    (suggestion) => suggestion !== query
  );

  useEffect(() => {
    if (isQueryValid()) {
      setUrlParam("query", query);

      const params = parseFiltersFromURL(window.location.search);
      dispatch(fetchMovies(params));
    }
  }, [debouncedQuery]);

  useEffect(() => {
    if (!items?.length) {
      return;
    }

    const mappedSuggestions = items.map((item) => item.title).slice(0, 10);
    setSuggestions(mappedSuggestions);
  }, [items]);

  return (
    <div className="search-input-component">
      <InputComponent
        value={query}
        onChange={handleChangeQuery}
        placeholder="Search for movies..."
        //disabled={isLoading}
      />
      {suggestions.length && allSuggestionsUnique ? (
        <SuggestionsList
          suggestions={suggestions}
          onClick={handleSetSuggestion}
        />
      ) : null}
    </div>
  );
}

export default SearchInputComponent;
