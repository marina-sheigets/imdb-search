import { useState } from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent"
import "./SearchOptionsComponent.css";

function SearchOptionsComponent() {
  const [isAdvancedSearchVisible, setIsAdvancedSearchVisible] = useState(false);

  const toggleAdvancedSearch = () => {
    setIsAdvancedSearchVisible((prev:boolean) => !prev);
  };

  return (
    <div className="search-options-component">
      {
        isAdvancedSearchVisible ? (
          <ButtonComponent label="🔼 Hide Advanced Search Options" onClick={toggleAdvancedSearch} />
        ) : (
          <ButtonComponent label="🔽 Show Advanced Search Options" onClick={toggleAdvancedSearch} />
        )
      }
      {
        isAdvancedSearchVisible ? (
          <div>Filters</div>
         // <FiltersContent />
        ) : null
      }
    </div>
  )
}

export default SearchOptionsComponent