import CheckboxComponent from "../CheckboxComponent/CheckboxComponent";
import DropdownComponent from "../DropdownComponent/DropdownComponent";
import InputComponent from "../InputComponent/InputComponent";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import ReleaseYearInput from "../ReleaseYearInput/ReleaseYearInput";
import "./FiltersContent.css";

function FiltersContent() {
  return (
    <div className="filters-content">
      <LanguageDropdown />
      <ReleaseYearInput />

      {/* <InputComponent
        value={""}
        onChange={() => {}}
        label="Year"
        placeholder={`e.g. ${currentYear}`}
        type="number"
        min={1900}
        max={currentYear}
      />
      <DropdownComponent
        options={[
          "North America",
          "South America",
          "Europe",
          "Asia",
          "Africa",
          "Australia",
        ]} // get supported regions from API later
        onChange={() => {}}
        label="Region"
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
      <CheckboxComponent
        label="Content Filter"
        value={true}
        text="Include Adult Content"
        onChange={() => {}}
      /> */}
    </div>
  );
}

export default FiltersContent;
