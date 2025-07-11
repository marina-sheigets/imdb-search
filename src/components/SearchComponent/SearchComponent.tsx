import DividerComponent from "../DividerComponent/DividerComponent";
import SearchInputComponent from "../SearchInputComponent/SearchInputComponent";
import SearchOptionsComponent from "../SearchOptionsComponent/SearchOptionsComponent";
import SectionComponent from "../SectionComponent/SectionComponent";
import "./SearchComponent.css";

function SearchComponent() {
  return (
    <SectionComponent >
       <SearchInputComponent />
       <DividerComponent />
       <SearchOptionsComponent />
    </SectionComponent>
  )
}

export default SearchComponent;