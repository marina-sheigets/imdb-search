import CheckboxComponent from "../CheckboxComponent/CheckboxComponent";
import ContentFilterCheckbox from "../ContentFilterCheckbox/ContentFilterCheckbox";
import DropdownComponent from "../DropdownComponent/DropdownComponent";
import InputComponent from "../InputComponent/InputComponent";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import PageInput from "../PageInput/PageInput";
import ReleaseYearInput from "../ReleaseYearInput/ReleaseYearInput";
import YearInput from "../YearInput/YearInput";
import "./FiltersContent.css";

function FiltersContent() {
  return (
    <div className="filters-content">
      <LanguageDropdown />
      <ReleaseYearInput />
      <YearInput />
      <PageInput />
      <ContentFilterCheckbox />
      {/*
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
   
    */}
    </div>
  );
}

export default FiltersContent;
