import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import InputComponent from "../InputComponent/InputComponent";
import "./SearchInputComponent.css";

function SearchInputComponent() {
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
           //...fetchMovies(debouncedQuery);
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