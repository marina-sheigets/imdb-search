import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import InputComponent from "../InputComponent/InputComponent";
import "./SearchInputComponent.css";
import { setUrlParam } from "../../utils/setURLParam";
import { parseFiltersFromURL } from "../../utils/parseFiltersFromURL";
import { fetchMovies } from "../../redux/thunks/fetchMovies";
import { useAppDispatch } from "../../hooks/useAppDispatch";

function SearchInputComponent() {
    const dispatch = useAppDispatch();
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce(query);

    const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const isQueryValid = () => {
        return debouncedQuery.trim().length > 0;
    }

    useEffect(()=>{
        if(isQueryValid()) {
           setUrlParam("query", query);

           const params = parseFiltersFromURL(window.location.search);
           dispatch(fetchMovies(params));
        }

    }, [debouncedQuery]);
    
  return (
    <div className="search-input-component">
    <InputComponent 
        value={query}
        onChange={handleChangeQuery}
        placeholder="Search for movies..."
        //disabled={isLoading}
    />
    </div>
  )
}

export default SearchInputComponent