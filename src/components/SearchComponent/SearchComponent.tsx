import DividerComponent from "../DividerComponent/DividerComponent";
import SearchInputComponent from "../SearchInputComponent/SearchInputComponent";
import SearchOptionsComponent from "../SearchOptionsComponent/SearchOptionsComponent";
import "./SearchComponent.css";

function SearchComponent() {
  return (
    <section className="search-component">
       <SearchInputComponent />
       <DividerComponent />
       <SearchOptionsComponent />
    </section>
  )
}

export default SearchComponent;