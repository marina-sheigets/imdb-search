import InputComponent from "../InputComponent/InputComponent";
import "./FiltersContent.css";

function FiltersContent() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="filters-content">
      <InputComponent
        value={""}
        onChange={() => {}}
        label="Release Year"
        placeholder={`e.g. ${currentYear}`}
        type="number"
        min={1900}
        max={currentYear}
      />
      <InputComponent
        value={""}
        onChange={() => {}}
        label="Year"
        placeholder={`e.g. ${currentYear}`}
        type="number"
        min={1900}
        max={currentYear}
      />
       <InputComponent
        value={""}
        onChange={() => {}}
        label="Page"
        placeholder={`e.g. ${currentYear}`}
        type="number"
        min={1}
        max={1000} // should be get from API later
      />
    </div>
  );
}

export default FiltersContent;
