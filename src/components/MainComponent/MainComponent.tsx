import SearchComponent from "../SearchComponent/SearchComponent"
import SearchResultsComponent from "../SearchResultsComponent/SearchResultsComponent";
import "./MainComponent.css";

function MainComponent() {
  return (
    <div className="main-component">
        <SearchComponent />
        <SearchResultsComponent />
    </div>
  )
}

export default MainComponent